export const contactServices = [
  {
    value: "creation-application-web",
    label: "Plateforme web / logiciel métier",
  },
  {
    value: "creation-application-mobile",
    label: "Application mobile iOS / Android",
  },
  { value: "creation-saas-dashboard", label: "SaaS / tableau de bord" },
  { value: "creation-ecommerce", label: "Plateforme e-commerce" },
  { value: "creation-site-vitrine", label: "Site de présentation" },
  { value: "backend-api", label: "Backend / API" },
  { value: "audit-optimisation", label: "Audit / évolution d’un produit" },
  { value: "a-definir", label: "À définir ensemble" },
] as const;

export function validService(value?: string) {
  return contactServices.find((service) => service.value === value)?.value;
}

export function serviceFromPath(path: string) {
  const slug = path.split("?")[0].split("/").pop();
  const service = validService(slug);
  if (service) return service;
  if (path.startsWith("/projects/")) {
    if (
      ["afcom", "afreel", "fintech", "smartvilla", "iveges"].includes(
        slug || "",
      )
    )
      return "creation-application-mobile";
    if (slug === "weman-lms") return "creation-application-web";
    if (["archiform", "gain"].includes(slug || ""))
      return "creation-site-vitrine";
  }
  if (/application-mobile|flutter/.test(path))
    return "creation-application-mobile";
  if (/saas|dashboard/.test(path)) return "creation-saas-dashboard";
  if (/ecommerce|boutique|paiements|mobile-money/.test(path))
    return "creation-ecommerce";
  if (/nextjs|react|application-web/.test(path))
    return "creation-application-web";
  return undefined;
}

export function contactHref(service?: string, source?: string) {
  const params = new URLSearchParams();
  const selected = validService(service);
  if (selected) params.set("service", selected);
  if (source?.startsWith("/") && !source.startsWith("//"))
    params.set("source", source.split("?")[0]);
  return `/contact${params.size ? `?${params}` : ""}`;
}

export function whatsappMessage(path: string, service?: string) {
  const selected = contactServices.find(
    (item) => item.value === (service || serviceFromPath(path)),
  );
  return selected
    ? `Bonjour Néhémie, j'aimerais discuter d'un projet : ${selected.label.toLowerCase()}. Voici mon besoin :`
    : "Bonjour Néhémie, j'ai un projet de plateforme web ou d'application mobile. Voici mon besoin :";
}
