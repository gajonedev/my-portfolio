import {
  AdditiveBlending,
  BufferAttribute,
  BufferGeometry,
  Mesh,
  OrthographicCamera,
  PlaneGeometry,
  Points,
  Scene,
  ShaderMaterial,
  Vector2,
  WebGLRenderer,
} from "three";

/*
 * Hero scene: "l'horizon".
 * A full-screen shader draws a luminous horizon line whose core follows the
 * cursor, a perspective grid floor lit by that core and a warm haze above it.
 * Embers rise from the horizon (Points). One renderer, one draw pass, paused
 * when the hero leaves the viewport or the tab is hidden.
 */

const vertex = /* glsl */ `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = vec4(position.xy, 0.0, 1.0);
  }
`;

const fragment = /* glsl */ `
  precision highp float;
  uniform vec2 uRes;
  uniform float uTime;
  uniform float uCore;     // x of the light core, 0..1
  uniform float uEnergy;   // 0..1, rises with pointer movement
  uniform float uHorizon;  // y of the horizon from the bottom, 0..1
  varying vec2 vUv;

  float hash(vec2 p) {
    return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453);
  }

  void main() {
    vec2 uv = vUv;
    float aspect = uRes.x / uRes.y;
    float dy = uv.y - uHorizon;
    float ady = abs(dy);
    float dx = (uv.x - uCore) * aspect;
    float pulse = 1.0 + 0.06 * sin(uTime * 1.4) + uEnergy * 0.35;

    vec3 coral = vec3(1.0, 0.302, 0.239);
    vec3 ember = vec3(1.0, 0.478, 0.271);
    vec3 col = vec3(0.0196, 0.0196, 0.0275);

    // warm haze above the core, the rest of the sky stays page black
    float sky = step(0.0, dy);
    col += coral * exp(-dx * dx * 1.8 - dy * 4.5) * sky * 0.09 * pulse;
    col += ember * exp(-dx * dx * 0.35 - dy * 7.0) * sky * 0.035;

    // a faint arc of light rising from the core
    float r = (length(vec2(dx * 0.62, dy)) - 0.2) * 10.0;
    col += ember * exp(-r * r) * sky * exp(-dx * dx * 3.0) * 0.05 * pulse;

    // perspective floor, lit around the core (derivatives taken outside any
    // branch, they are undefined in non-uniform control flow)
    float floorMask = 1.0 - sky;
    float depth = 0.1 / (max(-dy, 0.0) + 0.0015);
    vec2 g = vec2((uv.x - 0.5) * aspect * depth * 3.2, depth * 2.0 + uTime * 0.45);
    vec2 w = fwidth(g);
    vec2 gl = abs(fract(g - 0.5) - 0.5) / max(w * 1.2, vec2(1e-4));
    float line = 1.0 - min(min(gl.x, gl.y), 1.0);
    float far = smoothstep(0.0, 0.07, -dy);
    float pool = exp(-dx * dx * 2.4) * exp(min(dy, 0.0) * 3.2);
    float fade = exp(min(dy, 0.0) * 2.2);
    col += mix(vec3(0.5, 0.5, 0.62), coral, 0.8) * line * far * fade * floorMask * (0.03 + pool * 0.42 * pulse);
    // reflection of the horizon on the floor
    col += coral * exp(min(dy, 0.0) * 26.0) * exp(-dx * dx * 1.2) * 0.15 * pulse * floorMask;

    // the horizon line itself
    float edge = smoothstep(0.0, 0.16, uv.x) * (1.0 - smoothstep(0.84, 1.0, uv.x));
    float along = 0.22 + 0.78 * exp(-dx * dx * 1.1);
    float core = exp(-ady * uRes.y * 0.85);
    col += vec3(1.0, 0.93, 0.9) * core * along * edge * 1.15;
    col += coral * (exp(-ady * 95.0) * 0.23 + exp(-ady * 16.0) * 0.05) * along * edge * pulse;

    // anamorphic flare and bloom at the core
    col += vec3(1.0, 0.86, 0.8) * exp(-abs(dx) * 2.0) * exp(-ady * 170.0) * 0.95 * pulse;
    col += coral * exp(-(dx * dx * 38.0 + dy * dy * 420.0)) * 0.58 * pulse;
    col += vec3(1.0) * exp(-(dx * dx * 900.0 + dy * dy * 9000.0)) * 0.9;

    // dithering against banding
    col += (hash(gl_FragCoord.xy + fract(uTime)) - 0.5) / 255.0;
    gl_FragColor = vec4(col, 1.0);
  }
`;

const emberVertex = /* glsl */ `
  attribute vec4 aSeed; // x, phase, speed, size
  uniform float uTime;
  uniform float uHorizon;
  uniform float uCore;
  uniform float uAspect;
  uniform float uPixelRatio;
  varying float vAlpha;

  void main() {
    float hy = uHorizon * 2.0 - 1.0;
    float life = fract(aSeed.y + uTime * aSeed.z);
    float x = aSeed.x * 2.0 - 1.0 + sin(uTime * 0.4 + aSeed.w * 31.0) * 0.015;
    float y = hy + life * (1.0 - hy) * 0.9;
    gl_Position = vec4(x, y, 0.0, 1.0);
    float dx = (x * 0.5 + 0.5 - uCore) * uAspect;
    float near = exp(-dx * dx * 1.6);
    vAlpha = sin(life * 3.14159) * (0.12 + near * 0.88) * (1.0 - life * 0.6);
    gl_PointSize = (1.0 + aSeed.w * 2.4) * uPixelRatio;
  }
`;

const emberFragment = /* glsl */ `
  precision highp float;
  varying float vAlpha;
  void main() {
    float d = length(gl_PointCoord - 0.5);
    float a = smoothstep(0.5, 0.0, d) * vAlpha;
    gl_FragColor = vec4(vec3(1.0, 0.62, 0.5) * a, a);
  }
`;

export interface HeroRenderer {
  setPaused(paused: boolean): void;
  dispose(): void;
}

export function createHeroRenderer(
  canvas: HTMLCanvasElement,
  host: HTMLElement,
  { reduced }: { reduced: boolean },
): HeroRenderer {
  const renderer = new WebGLRenderer({
    canvas,
    antialias: false,
    alpha: false,
    powerPreference: "high-performance",
  });
  // Without a GPU (software rasterizer), every frame runs on the CPU and
  // blocks the main thread: keep the CSS horizon instead.
  const gl = renderer.getContext();
  const debugInfo = gl.getExtension("WEBGL_debug_renderer_info");
  const gpu = String(
    gl.getParameter(debugInfo ? debugInfo.UNMASKED_RENDERER_WEBGL : gl.RENDERER),
  );
  if (/swiftshader|llvmpipe|softpipe|software|basic render/i.test(gpu)) {
    renderer.dispose();
    throw new Error("software WebGL");
  }

  const small = window.matchMedia("(max-width: 767px)").matches;
  const pixelRatio = Math.min(window.devicePixelRatio || 1, small ? 1 : 1.5);
  renderer.setPixelRatio(pixelRatio);

  const scene = new Scene();
  const camera = new OrthographicCamera(-1, 1, 1, -1, 0, 1);

  const uniforms = {
    uRes: { value: new Vector2(1, 1) },
    uTime: { value: 0 },
    uCore: { value: 0.5 },
    uEnergy: { value: 0 },
    uHorizon: { value: 0.42 },
  };
  const plane = new Mesh(
    new PlaneGeometry(2, 2),
    new ShaderMaterial({
      vertexShader: vertex,
      fragmentShader: fragment,
      uniforms,
      depthTest: false,
      depthWrite: false,
    }),
  );
  scene.add(plane);

  const count = small ? 90 : 220;
  const seeds = new Float32Array(count * 4);
  for (let i = 0; i < count; i++) {
    // denser around the center, where the core usually sits
    const spread = Math.random() < 0.6 ? 0.35 : 1;
    seeds[i * 4] = 0.5 + (Math.random() - 0.5) * spread;
    seeds[i * 4 + 1] = Math.random();
    seeds[i * 4 + 2] = 0.025 + Math.random() * 0.06;
    seeds[i * 4 + 3] = Math.random();
  }
  const emberGeometry = new BufferGeometry();
  emberGeometry.setAttribute("aSeed", new BufferAttribute(seeds, 4));
  // `position` is required by three for draw-range bookkeeping
  emberGeometry.setAttribute(
    "position",
    new BufferAttribute(new Float32Array(count * 3), 3),
  );
  const emberUniforms = {
    uTime: uniforms.uTime,
    uHorizon: uniforms.uHorizon,
    uCore: uniforms.uCore,
    uAspect: { value: 1 },
    uPixelRatio: { value: pixelRatio },
  };
  const embers = new Points(
    emberGeometry,
    new ShaderMaterial({
      vertexShader: emberVertex,
      fragmentShader: emberFragment,
      uniforms: emberUniforms,
      transparent: true,
      depthTest: false,
      depthWrite: false,
      blending: AdditiveBlending,
    }),
  );
  embers.frustumCulled = false;
  scene.add(embers);

  // --- sizing: the horizon follows the [data-horizon] element of the layout
  const horizonEl = host.querySelector<HTMLElement>("[data-horizon]");
  const resize = () => {
    const { width, height } = host.getBoundingClientRect();
    if (!width || !height) return;
    renderer.setSize(width, height, false);
    uniforms.uRes.value.set(width * pixelRatio, height * pixelRatio);
    emberUniforms.uAspect.value = width / height;
    if (horizonEl) {
      const top =
        horizonEl.getBoundingClientRect().top - host.getBoundingClientRect().top;
      uniforms.uHorizon.value = 1 - top / height;
    }
    if (reduced || paused) renderer.render(scene, camera);
  };
  const resizeObserver = new ResizeObserver(resize);
  resizeObserver.observe(host);

  // --- pointer: the core eases toward the cursor, energy rises with speed
  let target = 0.5;
  let lastX = 0.5;
  let pointerSeen = false;
  const onPointer = (event: PointerEvent) => {
    if (event.pointerType === "touch") return;
    const rect = host.getBoundingClientRect();
    if (event.clientY > rect.bottom) return;
    const x = (event.clientX - rect.left) / rect.width;
    target = Math.min(0.88, Math.max(0.12, x));
    uniforms.uEnergy.value = Math.min(
      1,
      uniforms.uEnergy.value + Math.abs(x - lastX) * 3,
    );
    lastX = x;
    pointerSeen = true;
  };
  window.addEventListener("pointermove", onPointer, { passive: true });

  // --- loop
  let paused = false;
  let visible = true;
  let frame = 0;
  let last = performance.now();
  const tick = (now: number) => {
    frame = 0;
    const dt = Math.min(0.05, Math.max(0, (now - last) / 1000));
    last = now;
    uniforms.uTime.value += dt;
    if (!pointerSeen) target = 0.5 + Math.sin(uniforms.uTime.value * 0.25) * 0.18;
    const ease = 1 - Math.pow(0.02, dt);
    uniforms.uCore.value += (target - uniforms.uCore.value) * ease;
    uniforms.uEnergy.value *= Math.pow(0.15, dt);
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
  renderer.render(scene, camera);
  schedule();

  return {
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
      plane.geometry.dispose();
      (plane.material as ShaderMaterial).dispose();
      emberGeometry.dispose();
      (embers.material as ShaderMaterial).dispose();
      renderer.dispose();
    },
  };
}
