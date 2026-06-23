import Container from "./Container";
import DotPattern from "./ui/DotPattern";

interface PageHeaderProps {
  title: string;
  description?: string;
}

export default function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <div className="section-dark relative overflow-hidden border-b border-stroke bg-background py-16">
      <DotPattern />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 left-1/4 h-72 w-72 rounded-full bg-primary/15 blur-[100px]"
      />
      <Container className="relative flex flex-col gap-4">
        <span className="flex items-center gap-2 font-body text-xs font-medium uppercase tracking-[0.3em] text-primary">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary glow-sm" />
          Gajone Dev
        </span>
        <h1 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-5xl">
          {title}
        </h1>
        {description ? (
          <p className="max-w-2xl font-body text-base leading-relaxed text-foreground-muted">
            {description}
          </p>
        ) : null}
      </Container>
    </div>
  );
}
