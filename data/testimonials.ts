// Témoignages clients et collaborateurs
export interface Testimonial {
  name: string;
  role: string;
  quote: string;
  avatar?: string;
}

export const testimonials: Testimonial[] = [
  {
    name: "Rodolphe Gandonou",
    role: "Client — ArchiForm",
    quote:
      "Néhémie a parfaitement compris le besoin : une page claire pour présenter la formation, un paiement simple, et tout le reste automatisé derrière. Depuis le lancement, chaque inscrit reçoit ses accès sans que j'aie à intervenir.",
  },
  {
    name: "Raphaël Houngbedji",
    role: "Graphiste — Collaborateur",
    quote:
      "Travailler avec Néhémie, c'est livrer un design et voir le résultat fidèle au pixel près. Il comprend les intentions derrière les maquettes et sait les traduire en interfaces qui fonctionnent vraiment.",
  },
  {
    name: "ChristDay Kouadio",
    role: "Graphiste — Collaborateur",
    quote:
      "Ce qui me plaît dans notre collaboration, c'est qu'il ne se contente pas d'intégrer — il propose des améliorations techniques qui rendent le design encore meilleur à l'usage.",
  },
  {
    name: "Nassamou Rachad",
    role: "Co-développeur — iVeges",
    quote:
      "Sur le projet iVeges, Néhémie a géré toute la partie application mobile et l'architecture de communication avec les capteurs. Sa capacité à connecter le hardware au software, c'est ce qui a rendu le système complet.",
  },
];
