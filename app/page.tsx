import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import Footer from "@/components/Footer";
import Clients from "@/components/Clients";
import Approach from "@/components/Approach";
import Experience from "@/components/Experience";
import RecentProjects from "@/components/RecentProjects";
import Script from "next/script";

const Home = async () => {
  return (
    <>
      <Script
        id="json-ld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Néhémie Gandonou",
            url: "https://gajone.dev",
            sameAs: [
              "https://github.com/gajonedev",
              "https://linkedin.com/in/gajonedev",
              "https://twitter.com/gajonedev",
            ],
            jobTitle: "Développeur Web Full-Stack",
            worksFor: {
              "@type": "Organization",
              name: "Freelance",
            },
          }),
        }}
      />
      <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
        <div className="max-w-7xl w-full">
          <Hero />
          <Grid />
          <RecentProjects />
          <Clients />
          <Experience />
          <Approach />
          <Footer />
        </div>
      </main>
    </>
  );
};

export default Home;
