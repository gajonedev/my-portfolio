import Link from "next/link";
import Container from "../components/Container";
import PageHeader from "../components/PageHeader";
import { getIcon, ExternalLink } from "@/lib/icons";
import { projects } from "@/data";

export default function ProjectsPage() {
  return (
    <>
      <PageHeader
        title="Projets sélectionnés"
        description="Chaque réalisation est faite avec un design system, une architecture garantissant la performance et une expérience utilisateur premium."
      />
      <main className="py-16">
        <Container className="gap-6 grid md:grid-cols-2">
          {projects.map((project) => {
            const Icon = getIcon(project.iconName);
            return (
              <div
                key={project.name}
                className="group bg-card p-6 border border-stroke hover:border-primary/50 rounded-3xl transition"
              >
                <div className="flex justify-between items-center">
                  <span className="bg-primary/10 px-4 py-1 rounded-full text-primary text-xs">
                    {project.sector}
                  </span>
                  <Link
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="w-4 h-4 text-foreground-muted group-hover:text-primary transition" />
                  </Link>
                </div>
                <div className="flex items-center gap-3 mt-4">
                  <div className="flex justify-center items-center bg-primary/20 rounded-xl w-10 h-10 text-primary">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-semibold text-foreground text-xl">
                    {project.name}
                  </h3>
                </div>
                <p className="mt-4 text-foreground-muted text-sm">
                  {project.summary}
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="bg-background px-3 py-1 border border-stroke rounded-full text-foreground-muted text-xs"
                    >
                      {t}
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
