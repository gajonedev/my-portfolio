import type { Metadata } from "next";
import Container from "../components/Container";
import PageHeader from "../components/PageHeader";
import SectionWrapper from "../components/layout/SectionWrapper";
import BlogList from "../components/ui/BlogList";
import FinalCta from "../components/ui/FinalCta";
import { getAllPosts } from "@/lib/blog";
import { siteConfig } from "@/data";

const url = `${siteConfig.url}/blog`;

export const metadata: Metadata = {
  title: "Blog | Web, Mobile & activités en ligne au Bénin",
  description:
    "Conseils concrets sur le web, le mobile, le paiement Mobile Money et le digital pour les entreprises au Bénin et en Afrique de l'Ouest.",
  alternates: { canonical: url },
  openGraph: {
    title: "Blog | Conseils web et mobile au Bénin",
    description:
      "Conseils concrets sur le web, le mobile, le paiement Mobile Money et le digital pour les entreprises au Bénin.",
    url,
    type: "website",
    locale: "fr_BJ",
  },
};

export default async function BlogPage() {
  const posts = getAllPosts();

  return (
    <>
      <PageHeader
        kicker="Blog"
        title="Mes notes et conseils"
        description="Je partage mes conseils pour préparer votre projet, choisir une solution et comprendre ce que vous financez."
      />
      <SectionWrapper variant="light" className="py-16 md:py-24">
        <Container>
          <BlogList posts={posts} />
        </Container>
      </SectionWrapper>
      <FinalCta
        title="Une question sur votre projet ?"
        text="Les articles donnent des repères ; pour votre cas précis, écrivez-moi. Je vous réponds sous 24h."
      />
    </>
  );
}
