// Témoignages clients

export interface Testimonial {
  name: string;
  role: string;
  quote: string;
  avatar?: string;
}

export const testimonials: Testimonial[] = [
  {
    name: "Mariam A.",
    role: "CEO, AfroMarket",
    quote:
      "Une collaboration fluide et un résultat au-dessus de nos attentes. Les performances du site ont doublé.",
  },
  {
    name: "Jean K.",
    role: "Product Manager, NovaPay",
    quote:
      "Design précis, rendu propre et délai respecté. Nous avons apprécié la vision produit.",
  },
  {
    name: "Claire S.",
    role: "Fondatrice, Bloom Studio",
    quote:
      "Le site convertit mieux et reflète parfaitement notre image de marque. Merci !",
  },
];
