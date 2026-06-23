type Status = "live" | "preview" | "in-dev";

const STATUS: Record<Status, { label: string; color: string }> = {
  live: { label: "En ligne", color: "#10b981" },
  preview: { label: "Aperçu", color: "#f59e0b" },
  "in-dev": { label: "En développement", color: "#3b82f6" },
};

interface ProjectStatusProps {
  status?: Status;
  className?: string;
}

export default function ProjectStatus({
  status,
  className = "",
}: ProjectStatusProps) {
  if (!status) return null;
  const { label, color } = STATUS[status];
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border border-stroke bg-background-muted px-2.5 py-1 font-body text-xs text-foreground-muted ${className}`}
    >
      <span
        className="inline-block h-1.5 w-1.5 rounded-full"
        style={{ background: color, boxShadow: `0 0 8px ${color}` }}
      />
      {label}
    </span>
  );
}
