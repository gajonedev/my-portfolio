import Container from "./Container";
import DotPattern from "./ui/DotPattern";

interface PageHeaderProps {
  title: string;
  description?: string;
}

export default function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <div className="relative bg-background py-16 border-stroke border-b overflow-hidden section-dark">
      <DotPattern />
      <div
        aria-hidden="true"
        className="-top-24 left-1/4 absolute bg-primary/15 blur-[100px] rounded-full w-72 h-72 pointer-events-none"
      />
      <Container className="relative flex flex-col gap-4">
        <span className="flex items-center gap-2 font-body font-medium text-primary text-xs uppercase tracking-[0.3em]">
          <span className="inline-block bg-primary rounded-full w-1.5 h-1.5 glow-sm" />
          Néhémie Gandonou
        </span>
        <h1 className="font-display font-bold text-foreground text-3xl sm:text-5xl tracking-tight">
          {title}
        </h1>
        {description ? (
          <p className="max-w-2xl font-body text-foreground-muted text-base leading-relaxed">
            {description}
          </p>
        ) : null}
      </Container>
    </div>
  );
}
