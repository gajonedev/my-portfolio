// Ambient backdrop of the /contact card (styles: .contact-aura in globals.css).
// Pure CSS layers, back to front:
//  1. a slowly rotating conic light (coral → amber → blue) rising from a corner
//  2. a soft counter-light in the opposite corner
//  3. a fine grid fading out from the centre
//  4. a frosted-glass pane blurring 1–3 so they sit in the background
//  5. film grain for a matte, premium finish
//  6. a luminous hairline along the top edge
// Parent must be `relative overflow-hidden`; content above needs `relative`.
export default function ContactAura() {
  return (
    <div aria-hidden="true" className="contact-aura">
      <span className="contact-aura-orbit" />
      <span className="contact-aura-counter" />
      <span className="contact-aura-grid" />
      <span className="contact-aura-frost" />
      <span className="contact-aura-grain" />
      <span className="contact-aura-edge" />
    </div>
  );
}
