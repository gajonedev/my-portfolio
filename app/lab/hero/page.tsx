import type { Metadata } from "next";
import Container from "../../components/Container";
import HeroV2 from "../../components/home/v2/HeroV2";
import HomeProjects from "../../components/home/HomeProjects";
import HomeServices from "../../components/home/HomeServices";
import HomeProcess from "../../components/home/HomeProcess";
import HomeFinale from "../../components/home/HomeFinale";
import HomeAnimations from "../../components/home/HomeAnimations";
import EditorialHeading from "../../components/home/EditorialHeading";
import QuoteStage from "../../components/home/QuoteStage";
import "../../home.css";
import "./v2.css";

// Preview of the hero v2 above the real home sections. Not indexed, not in
// the sitemap: it only exists to compare with the current hero.
export const metadata: Metadata = {
  title: "Aperçu du hero v2",
  robots: { index: false, follow: false },
  alternates: { canonical: null },
};

export default function HeroLab() {
  return (
    <div data-home className="home section-dark">
      <HeroV2 />
      <HomeProjects />
      <HomeServices />
      <section className="relative home-divider py-28 md:py-40 section-dark">
        <Container className="gap-14 md:gap-20 grid">
          <EditorialHeading
            index="03"
            kicker="Ils en parlent"
            title="Ils ont travaillé avec moi"
            subtitle="Voici ce que mes clients et mes collaborateurs disent de notre travail ensemble."
          />
          <QuoteStage />
        </Container>
      </section>
      <HomeProcess />
      <HomeFinale />
      <HomeAnimations />
    </div>
  );
}
