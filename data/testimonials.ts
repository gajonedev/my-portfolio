// Témoignages clients et collaborateurs
export interface Testimonial {
  name: string;
  kind: "client" | "collaborator";
  projectSlug?: string;
  role: string;
  quote: string;
  avatar?: string;
}

export const testimonials: Testimonial[] = [
  {
    name: "Rodolphe Gandonou",
    kind: "client",
    projectSlug: "archiform",
    role: "Client, ArchiForm",
    quote:
      "J'ai voulu une page simple et efficace pour présenter la formation, permettre aux apprenants de payer sans difficultés, et leur fournir un accès immédiat après le paiement et j'ai reçu un site qui fonctionne parfaitement, avec un design clair et une navigation fluide. Je vous recommande vivement Néhémie pour vos projets web et mobile.",
  },
  {
    name: "Raphaël Houngbedji",
    kind: "collaborator",
    role: "Graphiste, Collaborateur",
    quote:
      "Travailler avec Néhémie, c'est livrer un design et voir le résultat conforme. Il comprend les maquettes et sait comment les traduire en interfaces qui fonctionnent efficacement.",
  },
  {
    name: "ChristDay Kouadio",
    kind: "collaborator",
    role: "Graphiste, Collaborateur",
    quote:
      "Ce qui me plaît dans notre collaboration, c'est qu'il ne se contente pas d'intégrer, il propose des améliorations techniques qui rendent le design encore meilleur à l'usage.",
  },
  {
    name: "Nassamou Rachad",
    kind: "collaborator",
    projectSlug: "iveges",
    role: "Co-développeur, iVeges",
    quote:
      "Sur le projet iVeges, Néhémie a géré toute la partie application mobile et l'architecture de communication avec les capteurs. Sa capacité à connecter le hardware au software, c'est ce qui a rendu le système complet.",
  },
  // {
  //   name: "Osée Amoussou",
  //   kind: "client",
  //   projectSlug: "agrifresh",
  //   role: "Promoteur AgriFresh",
  //   quote:
  //     "Je vous remercie Mr Néhémie pour le travail fait, la présentation de l'application et tout. Je ne peux que dire qu'on a bien fait de vous choisir.  ",
  // },
];
