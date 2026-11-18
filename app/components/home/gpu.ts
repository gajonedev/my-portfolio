// Probe the GPU on a throwaway context before downloading Three.js: with a
// software rasterizer (no GPU, headless browsers) every frame would run on the
// CPU and block the main thread, so the heroes keep their CSS version.
export function hasHardwareWebGL() {
  try {
    const gl = document.createElement("canvas").getContext("webgl2");
    if (!gl) return false;
    const info = gl.getExtension("WEBGL_debug_renderer_info");
    const name = String(
      gl.getParameter(info ? info.UNMASKED_RENDERER_WEBGL : gl.RENDERER),
    );
    gl.getExtension("WEBGL_lose_context")?.loseContext();
    return !/swiftshader|llvmpipe|softpipe|software|basic render/i.test(name);
  } catch {
    return false;
  }
}

// Escape hatch for local screenshots in headless browsers: ?gl=force.
export function webglForced() {
  return new URLSearchParams(window.location.search).get("gl") === "force";
}
