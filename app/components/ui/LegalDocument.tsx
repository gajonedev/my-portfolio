import type { ReactNode } from "react";
import Container from "../Container";
import SectionWrapper from "../layout/SectionWrapper";
import TableOfContents from "./TableOfContents";

export interface LegalSection {
  id: string;
  title: string;
  content: ReactNode;
}

/*
 * Legal pages (mentions légales, confidentialité): a sticky summary whose
 * rail follows the reading, and numbered sections set for reading.
 */
export default function LegalDocument({ sections }: { sections: LegalSection[] }) {
  return (
    <SectionWrapper className="py-16 md:py-24">
      <Container className="items-start gap-12 lg:gap-20 grid lg:grid-cols-[16rem_minmax(0,1fr)]">
        <aside className="lg:top-28 lg:sticky">
          <TableOfContents
            label="Sommaire de la page"
            headings={sections.map(({ id, title }) => ({ id, text: title }))}
          />
        </aside>

        <div className="legal">
          {sections.map((section, index) => (
            <section
              key={section.id}
              aria-labelledby={section.id}
              className="legal-section"
            >
              <span aria-hidden="true" className="legal-num">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div className="flex flex-col gap-5 min-w-0">
                <h2 id={section.id} className="legal-title">
                  {section.title}
                </h2>
                <div className="legal-body">{section.content}</div>
              </div>
            </section>
          ))}
        </div>
      </Container>
    </SectionWrapper>
  );
}

// Label / value rows (publisher, host…).
export function LegalFacts({ items }: { items: [string, ReactNode][] }) {
  return (
    <dl className="legal-facts">
      {items.map(([label, value]) => (
        <div key={label}>
          <dt>{label}</dt>
          <dd>{value}</dd>
        </div>
      ))}
    </dl>
  );
}
