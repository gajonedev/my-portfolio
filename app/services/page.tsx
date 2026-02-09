import Container from "../components/Container";
import PageHeader from "../components/PageHeader";
import {
  Globe,
  ShoppingCart,
  LayoutDashboard,
  Smartphone,
  Bot,
  RefreshCw,
} from "lucide-react";

const services = [
  {
    title: "Site vitrine premium",
    icon: Globe,
    details:
      "UI/UX haut de gamme, SEO technique, performance Core Web Vitals, et copywriting orienté conversion. Livré avec un design system complet.",
    features: [
      "Design responsive",
      "SEO optimisé",
      "Performance A+",
      "Analytics",
    ],
  },
  {
    title: "E-commerce & marketplace",
    icon: ShoppingCart,
    details:
      "Gestion catalogue, paiement sécurisé, back-office, automatisations et analytics avancés. Intégration Stripe, PayPal, ou solutions locales.",
    features: [
      "Multi-vendeurs",
      "Paiements sécurisés",
      "Gestion stocks",
      "Dashboard",
    ],
  },
  {
    title: "SaaS & dashboard",
    icon: LayoutDashboard,
    details:
      "Interfaces modulaires, design system complet, onboarding guidé et architecture scalable pour vos équipes produit.",
    features: ["Multi-tenant", "Auth SSO", "API REST", "Monitoring"],
  },
  {
    title: "Apps mobiles",
    icon: Smartphone,
    details:
      "Applications React Native ou PWA optimisées pour la rétention. Publication App Store et Google Play incluse.",
    features: [
      "Cross-platform",
      "Push notifications",
      "Offline mode",
      "Analytics",
    ],
  },
  {
    title: "Automatisation IA",
    icon: Bot,
    details:
      "Chatbots intelligents, workflows automatisés, intégrations API tierces et analyse de données assistée par IA.",
    features: ["Chatbots", "Workflows", "Intégrations API", "Analytics IA"],
  },
  {
    title: "Refonte & optimisation",
    icon: RefreshCw,
    details:
      "Audit UX complet, refonte UI moderne, optimisation des temps de chargement et mise en conformité accessibilité AA.",
    features: ["Audit UX", "Refonte UI", "Performance", "Accessibilité"],
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        title="Services"
        description="Des solutions complètes pour développer votre présence digitale et accélérer votre croissance."
      />
      <main className="py-16">
        <Container className="gap-6 grid md:grid-cols-2">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="bg-card p-6 border border-stroke hover:border-primary/50 rounded-3xl transition"
              >
                <div className="flex justify-center items-center bg-primary/20 rounded-2xl w-12 h-12 text-primary">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="mt-4 font-semibold text-foreground text-lg">
                  {service.title}
                </h3>
                <p className="mt-3 text-foreground-muted text-sm">
                  {service.details}
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {service.features.map((f) => (
                    <span
                      key={f}
                      className="bg-background px-3 py-1 border border-stroke rounded-full text-foreground-muted text-xs"
                    >
                      {f}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </Container>
      </main>
    </>
  );
}
