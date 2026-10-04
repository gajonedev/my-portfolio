/** Escape HTML-significant characters before embedding JSON in a script. */
export function serializeJsonLd(value: unknown) {
  return JSON.stringify(value).replace(/</g, "\\u003c");
}
