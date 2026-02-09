interface SectionHeaderProps {
  kicker?: string;
  title: string;
  subtitle?: string;
}

export default function SectionHeader({
  kicker,
  title,
  subtitle,
}: SectionHeaderProps) {
  return (
    <div className="flex flex-col gap-4">
      {kicker ? (
        <span className="flex items-center gap-2 font-semibold text-primary text-sm uppercase tracking-[0.35em]">
          <span className="inline-block bg-primary rounded-full w-2 h-2" />
          {kicker}
        </span>
      ) : null}
      <div className="flex flex-col gap-3">
        <h2 className="font-semibold text-foreground text-3xl sm:text-4xl">
          {title}
        </h2>
        {subtitle ? (
          <p className="max-w-2xl text-foreground-muted text-base leading-relaxed">
            {subtitle}
          </p>
        ) : null}
      </div>
    </div>
  );
}
