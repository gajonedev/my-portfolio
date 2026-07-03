// Export centralisé de toutes les données

// Site & Contact
export {
  siteConfig,
  contactInfo,
  socialLinks,
  stats,
  aboutStats,
  stackAndTools,
  aboutHighlights,
} from "./site";

// Navigation
export { navLinks, footerLinks, type NavLink } from "./navigation";

// Services
export {
  servicesPreview,
  servicesDetailed,
  localServices,
  type Service,
  type ServiceDetailed,
} from "./services";

// Tarifs
export {
  pricingTiers,
  alwaysIncluded,
  priceFactors,
  pricingFaq,
  type PricingTier,
  type PricingFaq,
} from "./pricing";

// Pages services dédiées
export {
  servicePages,
  getServicePageBySlug,
  type ServicePage,
  type ServiceFaq,
  type ServiceProcessStep,
} from "./service-pages";

// Projets
export {
  projects,
  projectsPreview,
  getProjectBySlug,
  type Project,
  type CaseStudy,
} from "./projects";

// Témoignages
export { testimonials, type Testimonial } from "./testimonials";

// Compétences
export {
  skills,
  values,
  processSteps,
  type SkillCategory,
  type Value,
} from "./skills";

// SEO
export {
  cities,
  localAdvantages,
  remoteCountries,
  geoData,
  seoKeywords,
  type City,
} from "./seo";

// Pages expertise par technologie
export {
  expertises,
  getExpertiseBySlug,
  type Expertise,
  type ExpertiseFaq,
  type ExpertiseStrength,
} from "./expertises";

// Pages SEO locales par ville
export {
  localCities,
  featuredCitySlugs,
  cityFullSlug,
  getCityByFullSlug,
  getCityBySlug,
  CITY_SLUG_PREFIX,
  type LocalCity,
  type CityFaq,
  type CityOpportunity,
} from "./cities";
