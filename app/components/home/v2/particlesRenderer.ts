import {
  AdditiveBlending,
  BufferAttribute,
  BufferGeometry,
  Group,
  PerspectiveCamera,
  Points,
  Scene,
  ShaderMaterial,
  Vector3,
  WebGLRenderer,
} from "three";

/*
 * Hero v2 : "de l'idée au produit".
 * Thousands of particles hold three shapes at once (an idea, a web platform,
 * a mobile app) and the vertex shader morphs between two of them, with a
 * swirl during the trip, a push away from the cursor and a scatter driven by
 * the intro and the scroll. One draw call.
 */

export const SHAPES = ["idea", "web", "mobile"] as const;
export type ShapeIndex = 0 | 1 | 2;

// ---------------------------------------------------------------- shapes

type Push = (x: number, y: number, z: number, accent: number) => void;

function mulberry32(seed: number) {
  return () => {
    seed |= 0;
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function makeShape(count: number, seed: number, build: (api: Api) => void) {
  const rand = mulberry32(seed);
  const pos = new Float32Array(count * 3);
  const acc = new Float32Array(count);
  let i = 0;
  const push: Push = (x, y, z, accent) => {
    if (i >= count) return;
    pos[i * 3] = x;
    pos[i * 3 + 1] = y;
    pos[i * 3 + 2] = z;
    acc[i] = accent;
    i++;
  };
  const api = createApi(rand, push, count);
  build(api);
  // the rest becomes faint dust around the shape
  while (i < count) {
    push(
      (rand() - 0.5) * 4.2,
      (rand() - 0.5) * 3.0,
      (rand() - 0.5) * 1.6,
      -0.7,
    );
  }
  // shuffle so every particle travels somewhere else on each morph
  for (let k = count - 1; k > 0; k--) {
    const j = Math.floor(rand() * (k + 1));
    for (let c = 0; c < 3; c++) {
      const tmp = pos[k * 3 + c];
      pos[k * 3 + c] = pos[j * 3 + c];
      pos[j * 3 + c] = tmp;
    }
    const tmp = acc[k];
    acc[k] = acc[j];
    acc[j] = tmp;
  }
  return { pos, acc };
}

type Pt = [number, number];
type Api = ReturnType<typeof createApi>;

function createApi(rand: () => number, push: Push, total: number) {
  const n = (share: number) => Math.round(total * share);
  const j = (s = 0.012) => (rand() - 0.5) * s;

  const poly = (points: Pt[], share: number, z = 0, accent = 0, closed = false) => {
    const pts = closed ? [...points, points[0]] : points;
    const lengths: number[] = [];
    let total = 0;
    for (let k = 0; k < pts.length - 1; k++) {
      const l = Math.hypot(pts[k + 1][0] - pts[k][0], pts[k + 1][1] - pts[k][1]);
      lengths.push(l);
      total += l;
    }
    for (let k = 0, count = n(share); k < count; k++) {
      let s = rand() * total;
      let seg = 0;
      while (seg < lengths.length - 1 && s > lengths[seg]) s -= lengths[seg++];
      const t = s / (lengths[seg] || 1);
      const [ax, ay] = pts[seg];
      const [bx, by] = pts[seg + 1];
      push(ax + (bx - ax) * t + j(), ay + (by - ay) * t + j(), z + j(0.04), accent);
    }
  };

  const roundRect = (
    cx: number,
    cy: number,
    w: number,
    h: number,
    r: number,
    share: number,
    z = 0,
    accent = 0,
  ) => {
    const pts: Pt[] = [];
    const corners: [number, number, number][] = [
      [cx + w / 2 - r, cy + h / 2 - r, 0],
      [cx - w / 2 + r, cy + h / 2 - r, Math.PI / 2],
      [cx - w / 2 + r, cy - h / 2 + r, Math.PI],
      [cx + w / 2 - r, cy - h / 2 + r, (3 * Math.PI) / 2],
    ];
    for (const [ox, oy, start] of corners) {
      for (let s = 0; s <= 6; s++) {
        const a = start + (s / 6) * (Math.PI / 2);
        pts.push([ox + Math.cos(a) * r, oy + Math.sin(a) * r]);
      }
    }
    poly(pts, share, z, accent, true);
  };

  const circle = (cx: number, cy: number, r: number, share: number, z = 0, accent = 0) => {
    const pts: Pt[] = [];
    for (let s = 0; s < 20; s++) {
      const a = (s / 20) * Math.PI * 2;
      pts.push([cx + Math.cos(a) * r, cy + Math.sin(a) * r]);
    }
    poly(pts, share, z, accent, true);
  };

  const area = (
    x0: number,
    x1: number,
    bottom: number,
    top: (x: number) => number,
    share: number,
    z = 0,
    accent = 0,
  ) => {
    for (let k = 0, count = n(share); k < count; k++) {
      const x = x0 + rand() * (x1 - x0);
      const t = rand() ** 1.8; // denser near the curve
      push(x, top(x) - t * (top(x) - bottom), z + j(0.05), accent);
    }
  };

  const sphere = (r: number, share: number, accent = 0, noise = 0.08) => {
    const count = n(share);
    for (let k = 0; k < count; k++) {
      const y = 1 - (k / (count - 1 || 1)) * 2;
      const rad = Math.sqrt(1 - y * y);
      const phi = k * 2.399963;
      const rr = r * (1 + (rand() - 0.5) * noise);
      push(Math.cos(phi) * rad * rr, y * rr, Math.sin(phi) * rad * rr, accent);
    }
  };

  const ring = (r: number, tilt: number, share: number, accent = 0) => {
    for (let k = 0, count = n(share); k < count; k++) {
      const a = rand() * Math.PI * 2;
      const rr = r * (1 + (rand() - 0.5) * 0.08);
      const x = Math.cos(a) * rr;
      const z = Math.sin(a) * rr;
      push(x, z * Math.sin(tilt) + j(0.03), z * Math.cos(tilt), accent);
    }
  };

  return { poly, roundRect, circle, area, sphere, ring };
}

const chart: Pt[] = [
  [-0.75, -0.78],
  [-0.42, -0.46],
  [-0.12, -0.6],
  [0.22, -0.16],
  [0.55, -0.32],
  [0.9, 0.02],
  [1.38, 0.12],
];
const chartY = (x: number) => {
  for (let k = 0; k < chart.length - 1; k++) {
    const [ax, ay] = chart[k];
    const [bx, by] = chart[k + 1];
    if (x >= ax && x <= bx) return ay + ((x - ax) / (bx - ax)) * (by - ay);
  }
  return chart[chart.length - 1][1];
};

function buildShapes(count: number) {
  const idea = makeShape(count, 7, ({ sphere, ring }) => {
    sphere(1.05, 0.5, 0, 0.1);
    sphere(0.28, 0.1, 1, 0.3);
    ring(1.65, 1.15, 0.2, 0.4);
    ring(1.3, -0.5, 0.08, 0);
  });

  const web = makeShape(count, 11, ({ poly, roundRect, circle, area }) => {
    roundRect(0, 0, 3.2, 2.1, 0.14, 0.24);
    poly([[-1.6, 0.74], [1.6, 0.74]], 0.05);
    circle(-1.42, 0.9, 0.045, 0.012, 0, 1);
    circle(-1.28, 0.9, 0.045, 0.012);
    circle(-1.14, 0.9, 0.045, 0.012);
    poly([[-0.95, 0.74], [-0.95, -1.05]], 0.035);
    for (const [y, w] of [[0.5, 0.32], [0.32, 0.24], [0.14, 0.3], [-0.04, 0.2]] as const) {
      poly([[-1.42, y], [-1.42 + w, y]], 0.01);
    }
    for (const x of [-0.47, 0.33, 1.13]) roundRect(x, 0.42, 0.66, 0.3, 0.06, 0.035);
    poly(chart, 0.12, 0.08, 1);
    area(-0.75, 1.38, -0.95, chartY, 0.1, 0.04, 0.35);
    poly([[-0.8, -0.95], [1.45, -0.95]], 0.025);
  });

  const mobile = makeShape(count, 23, ({ poly, roundRect }) => {
    roundRect(0, 0, 1.2, 2.4, 0.2, 0.26);
    poly([[-0.18, 1.06], [0.18, 1.06]], 0.015);
    roundRect(0, 0.62, 0.95, 0.55, 0.08, 0.09, 0.02, 1);
    for (const [y, w] of [[0.15, 0.85], [-0.08, 0.62], [-0.31, 0.78], [-0.54, 0.5]] as const) {
      poly([[-0.45, y], [-0.45 + w, y]], 0.022);
    }
    roundRect(0, -0.88, 0.9, 0.22, 0.11, 0.05, 0.02, 0.6);
    roundRect(1.3, 0.55, 1.05, 0.42, 0.1, 0.07, 0.3);
    poly([[0.95, 0.6], [1.5, 0.6]], 0.012, 0.3);
    poly([[0.95, 0.47], [1.3, 0.47]], 0.01, 0.3);
    roundRect(-1.3, -0.25, 1.0, 0.42, 0.1, 0.07, 0.18);
    poly([[-1.62, -0.2], [-1.1, -0.2]], 0.012, 0.18);
    poly([[-1.62, -0.33], [-1.3, -0.33]], 0.01, 0.18);
    poly([[-0.8, -0.25], [-0.6, -0.1]], 0.008, 0.1, 1);
    poly([[0.6, 0.62], [0.78, 0.58]], 0.008, 0.15, 1);
  });

  return [idea, web, mobile];
}

// ---------------------------------------------------------------- shaders

const vertex = /* glsl */ `
  attribute vec3 aIdea;
  attribute vec3 aWeb;
  attribute vec3 aMobile;
  attribute vec3 aAccent;
  attribute vec4 aRand;
  uniform float uFrom;
  uniform float uTo;
  uniform float uProgress;
  uniform float uTime;
  uniform float uScatter;
  uniform float uSize;
  uniform float uPixelRatio;
  uniform vec3 uMouse;
  varying float vAlpha;
  varying float vAccent;

  vec3 shape(float idx) {
    return idx < 0.5 ? aIdea : (idx < 1.5 ? aWeb : aMobile);
  }
  float accentOf(float idx) {
    return idx < 0.5 ? aAccent.x : (idx < 1.5 ? aAccent.y : aAccent.z);
  }

  void main() {
    float t = clamp((uProgress - aRand.x * 0.45) / 0.55, 0.0, 1.0);
    t = t * t * (3.0 - 2.0 * t);
    vec3 p = mix(shape(uFrom), shape(uTo), t);

    // swirl on the way
    float arc = sin(t * 3.14159);
    vec3 dir = normalize(aRand.yzw - 0.5 + 0.0001);
    p += dir * arc * (0.3 + aRand.x * 0.55);
    float ang = arc * (aRand.y - 0.5) * 2.4;
    p.xz = mat2(cos(ang), -sin(ang), sin(ang), cos(ang)) * p.xz;

    // breathing
    p += 0.014 * vec3(
      sin(uTime * 1.3 + aRand.y * 40.0),
      cos(uTime * 1.1 + aRand.z * 40.0),
      sin(uTime * 0.9 + aRand.w * 40.0)
    );

    // intro and scroll scatter
    p += dir * uScatter * (2.5 + aRand.x * 4.5);

    vec4 world = modelMatrix * vec4(p, 1.0);
    vec2 d = world.xy - uMouse.xy;
    world.xy += normalize(d + 0.0001) * exp(-dot(d, d) * 5.0) * 0.3;

    vec4 mv = viewMatrix * world;
    gl_Position = projectionMatrix * mv;

    float acc = mix(accentOf(uFrom), accentOf(uTo), t);
    float twinkle = 0.65 + 0.35 * sin(uTime * (1.0 + aRand.y * 3.0) + aRand.z * 60.0);
    vAccent = clamp(acc, 0.0, 1.0);
    vAlpha = twinkle * clamp(0.7 + acc * 0.3, 0.14, 1.0) * (1.0 - uScatter * 0.8);
    float size = uSize * (0.55 + aRand.w * 0.9) * (1.0 + vAccent * 0.6);
    gl_PointSize = size * uPixelRatio * (6.5 / -mv.z);
  }
`;

const fragment = /* glsl */ `
  precision highp float;
  varying float vAlpha;
  varying float vAccent;
  void main() {
    float d = length(gl_PointCoord - 0.5);
    float a = smoothstep(0.5, 0.0, d);
    vec3 color = mix(vec3(1.0, 0.92, 0.88) * 0.85, vec3(1.0, 0.34, 0.26), vAccent);
    gl_FragColor = vec4(color, a * a * vAlpha);
  }
`;

// ---------------------------------------------------------------- renderer

export interface ParticlesRenderer {
  show(shape: ShapeIndex): void;
  setPaused(paused: boolean): void;
  dispose(): void;
}

interface Options {
  reduced: boolean;
  /** Shorter assembly when the intro is skipped (second visit). */
  quick: boolean;
  onShape: (shape: ShapeIndex) => void;
}

export function createParticlesRenderer(
  canvas: HTMLCanvasElement,
  host: HTMLElement,
  { reduced, quick, onShape }: Options,
): ParticlesRenderer {
  const renderer = new WebGLRenderer({ canvas, antialias: false, alpha: true });
  const small = window.matchMedia("(max-width: 1023px)").matches;
  const pixelRatio = Math.min(window.devicePixelRatio || 1, small ? 1.5 : 1.75);
  renderer.setPixelRatio(pixelRatio);
  renderer.setClearColor(0x000000, 0);

  const scene = new Scene();
  const camera = new PerspectiveCamera(35, 1, 0.1, 50);
  camera.position.set(0, 0, 6.5);
  const group = new Group();
  scene.add(group);

  const count = small ? 4200 : 9000;
  const [idea, web, mobile] = buildShapes(count);
  const accent = new Float32Array(count * 3);
  const rand = new Float32Array(count * 4);
  const r = mulberry32(99);
  for (let i = 0; i < count; i++) {
    accent[i * 3] = idea.acc[i];
    accent[i * 3 + 1] = web.acc[i];
    accent[i * 3 + 2] = mobile.acc[i];
    for (let c = 0; c < 4; c++) rand[i * 4 + c] = r();
  }
  const geometry = new BufferGeometry();
  geometry.setAttribute("position", new BufferAttribute(new Float32Array(count * 3), 3));
  geometry.setAttribute("aIdea", new BufferAttribute(idea.pos, 3));
  geometry.setAttribute("aWeb", new BufferAttribute(web.pos, 3));
  geometry.setAttribute("aMobile", new BufferAttribute(mobile.pos, 3));
  geometry.setAttribute("aAccent", new BufferAttribute(accent, 3));
  geometry.setAttribute("aRand", new BufferAttribute(rand, 4));

  const uniforms = {
    uFrom: { value: 0 },
    uTo: { value: reduced ? 1 : 0 },
    uProgress: { value: 1 },
    uTime: { value: 0 },
    uScatter: { value: reduced ? 0 : 1 },
    uSize: { value: small ? 2.6 : 2.3 },
    uPixelRatio: { value: pixelRatio },
    uMouse: { value: new Vector3(100, 100, 0) },
  };
  const material = new ShaderMaterial({
    vertexShader: vertex,
    fragmentShader: fragment,
    uniforms,
    transparent: true,
    depthTest: false,
    depthWrite: false,
    blending: AdditiveBlending,
  });
  const points = new Points(geometry, material);
  points.frustumCulled = false;
  group.add(points);

  // --- layout: desktop, the object sits in the right column; mobile, on top
  let width = 1;
  let height = 1;
  const resize = () => {
    const rect = host.getBoundingClientRect();
    width = rect.width;
    height = rect.height;
    if (!width || !height) return;
    renderer.setSize(width, height, false);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    const viewH = 2 * camera.position.z * Math.tan((camera.fov * Math.PI) / 360);
    const viewW = viewH * camera.aspect;
    const anchor = host.querySelector<HTMLElement>("[data-object-anchor]");
    const box = anchor?.getBoundingClientRect();
    const cx = box ? box.left + box.width / 2 - rect.left : width * 0.72;
    const cy = box ? box.top + box.height / 2 - rect.top : height * 0.45;
    group.position.set((cx / width - 0.5) * viewW, (0.5 - cy / height) * viewH, 0);
    const fit = box ? (box.width / width) * viewW : viewW * 0.4;
    group.scale.setScalar(Math.min(1.1, fit / 3.3));
    if (reduced || paused) renderer.render(scene, camera);
  };
  const resizeObserver = new ResizeObserver(resize);
  resizeObserver.observe(host);

  // --- pointer
  const pointer = { x: 0, y: 0, active: false };
  const ray = new Vector3();
  const onPointer = (event: PointerEvent) => {
    const rect = host.getBoundingClientRect();
    if (event.clientY > rect.bottom || event.clientY < rect.top) {
      pointer.active = false;
      return;
    }
    pointer.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
    pointer.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
    pointer.active = event.pointerType !== "touch";
  };
  window.addEventListener("pointermove", onPointer, { passive: true });

  // --- state machine: from -> to, then hold, then the next shape
  let current: ShapeIndex = reduced ? 1 : 0;
  let queued: ShapeIndex | null = null;
  let hold = 0;
  let manualUntil = 0;
  let intro = reduced ? 1 : 0;
  const introDuration = quick ? 1.2 : 2.6;

  const startMorph = (next: ShapeIndex) => {
    if (next === current) return;
    uniforms.uFrom.value = current;
    uniforms.uTo.value = next;
    uniforms.uProgress.value = 0;
    current = next;
    onShape(next);
  };

  const show = (next: ShapeIndex) => {
    manualUntil = uniforms.uTime.value + 6;
    if (reduced) {
      uniforms.uFrom.value = next;
      uniforms.uTo.value = next;
      current = next;
      onShape(next);
      renderer.render(scene, camera);
      return;
    }
    if (uniforms.uProgress.value < 1) queued = next;
    else startMorph(next);
    hold = 0;
  };

  // --- loop
  let paused = false;
  let visible = true;
  let frame = 0;
  let last = performance.now();
  let rotY = 0;
  let rotX = 0;

  const tick = (now: number) => {
    frame = 0;
    const dt = Math.min(0.05, Math.max(0, (now - last) / 1000));
    last = now;
    const time = (uniforms.uTime.value += dt);

    // intro: the particles converge
    if (intro < 1) intro = Math.min(1, intro + dt / introDuration);
    const introScatter = 1 - (1 - Math.pow(1 - intro, 3));
    // the object holds for the first quarter of the hero, then dissolves
    const scroll = Math.min(1, Math.max(0, (window.scrollY - height * 0.25) / (height * 0.7)));
    uniforms.uScatter.value = Math.max(introScatter, scroll * scroll);

    // morph and autoplay
    if (uniforms.uProgress.value < 1) {
      uniforms.uProgress.value = Math.min(1, uniforms.uProgress.value + dt / 2.1);
      if (uniforms.uProgress.value >= 1) {
        uniforms.uFrom.value = current;
        if (queued !== null) {
          const next = queued;
          queued = null;
          startMorph(next);
        }
      }
    } else if (intro >= 1) {
      hold += dt;
      if (hold > (current === 0 ? 1.6 : 3.4) && time > manualUntil) {
        hold = 0;
        startMorph(((current + 1) % 3) as ShapeIndex);
      }
    }

    // rotation toward the cursor, slow sway otherwise
    const targetY = (pointer.active ? pointer.x * 0.45 : 0) + Math.sin(time * 0.25) * 0.18;
    const targetX = (pointer.active ? -pointer.y * 0.22 : 0) + Math.cos(time * 0.2) * 0.06;
    const ease = 1 - Math.pow(0.04, dt);
    rotY += (targetY - rotY) * ease;
    rotX += (targetX - rotX) * ease;
    group.rotation.set(rotX, rotY, 0);

    // cursor on the z = 0 plane
    if (pointer.active) {
      ray.set(pointer.x, pointer.y, 0.5).unproject(camera).sub(camera.position).normalize();
      const dist = -camera.position.z / ray.z;
      uniforms.uMouse.value.copy(camera.position).addScaledVector(ray, dist);
    } else {
      uniforms.uMouse.value.set(100, 100, 0);
    }

    renderer.render(scene, camera);
    schedule();
  };
  const schedule = () => {
    if (!frame && !paused && visible && !reduced && !document.hidden) {
      last = performance.now();
      frame = requestAnimationFrame(tick);
    }
  };
  const stop = () => {
    if (frame) cancelAnimationFrame(frame);
    frame = 0;
  };

  const intersection = new IntersectionObserver(([entry]) => {
    visible = entry.isIntersecting;
    if (visible) schedule();
    else stop();
  });
  intersection.observe(host);
  const onVisibility = () => (document.hidden ? stop() : schedule());
  document.addEventListener("visibilitychange", onVisibility);

  resize();
  onShape(current);
  renderer.render(scene, camera);
  schedule();

  return {
    show,
    setPaused(next) {
      paused = next;
      if (paused) stop();
      else schedule();
    },
    dispose() {
      stop();
      resizeObserver.disconnect();
      intersection.disconnect();
      window.removeEventListener("pointermove", onPointer);
      document.removeEventListener("visibilitychange", onVisibility);
      geometry.dispose();
      material.dispose();
      renderer.dispose();
    },
  };
}
