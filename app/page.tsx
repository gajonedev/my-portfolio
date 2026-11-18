import Container from "./components/Container";
import HomeHero from "./components/home/HomeHero";
import HomeProjects from "./components/home/HomeProjects";
import HomeServices from "./components/home/HomeServices";
import HomeProcess from "./components/home/HomeProcess";
import HomeFinale from "./components/home/HomeFinale";
import HomeAnimations from "./components/home/HomeAnimations";
import EditorialHeading from "./components/home/EditorialHeading";
import QuoteStage from "./components/home/QuoteStage";
import "./home.css";

// One continuous dark scene: the hero horizon opens the page and comes back
// in the finale. All copy is server-rendered; WebGL and GSAP only decorate.
export default function Home() {
  return (
    <div data-home className="home section-dark">
      <HomeHero />
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
