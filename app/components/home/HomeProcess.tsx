import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { aboutGuarantees, processSteps } from "@/data";
import { CheckCircle } from "@/lib/icons";
import Container from "../Container";
import EditorialHeading from "./EditorialHeading";

// The line fills with the scroll and lights each step as it reaches it
// (PageAnimations, [data-process]).
export default function HomeProcess() {
  return (
    <section className="relative home-divider py-28 md:py-40 section-dark">
      <Container className="gap-16 md:gap-24 grid">
        <EditorialHeading
          index="04"
          kicker="Accompagnement"
          title="Comment nous allons travailler ensemble"
          subtitle="Nous commençons par votre besoin. Je vous propose ensuite les fonctionnalités à développer et un calendrier, puis je vous montre régulièrement l’avancement."
        />

        <div className="process" data-process>
          <div aria-hidden="true" className="process-line">
            <span className="process-line-fill" data-process-fill />
          </div>
          <ol className="process-steps">
            {processSteps.map((step, index) => (
              <li key={step.title} className="process-step" data-step>
                <span aria-hidden="true" className="process-dot" />
                <span aria-hidden="true" className="process-num">
                  0{index + 1}
                </span>
                <h3 className="font-display font-medium text-foreground text-xl tracking-[-0.01em]">
                  {step.title}
                </h3>
                <p className="text-foreground-muted text-sm leading-relaxed">
                  {step.description}
                </p>
              </li>
            ))}
          </ol>
        </div>

        <div className="direct-card" data-anim="card">
          <div className="direct-portrait">
            <Image
              src="/portrait.webp"
              alt="Portrait de Néhémie Gandonou, développeur web et mobile"
              width={360}
              height={440}
              sizes="(max-width: 768px) 70vw, 300px"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col justify-center gap-6 p-7 md:p-12">
            <div className="flex flex-col gap-3">
              <h3 className="font-display font-medium text-foreground text-3xl md:text-4xl tracking-[-0.02em]">
                Vous échangez directement avec moi
              </h3>
              <p className="text-foreground-muted">
                Je suis basé à Cotonou et je peux vous accompagner à distance.
              </p>
            </div>
            <ul className="gap-3 grid text-foreground-muted text-sm">
              {aboutGuarantees.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle className="mt-0.5 w-4 h-4 text-primary shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <Link href="/about" className="w-fit pill-ghost">
              <span className="pill-ghost-label">Mon parcours et mes compétences</span>
              <ArrowUpRight aria-hidden="true" className="w-4 h-4 pill-ghost-arrow" />
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
