import Link from "next/link";
import Container from "./Container";
import { ArrowLeft } from "lucide-react";

interface PageHeaderProps {
  title: string;
  description?: string;
}

export default function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <div className="bg-card/50 py-8 border-stroke border-b">
      <Container className="flex flex-col gap-4">
        <h1 className="font-semibold text-foreground text-3xl sm:text-4xl">
          {title}
        </h1>
        {description ? (
          <p className="max-w-2xl text-foreground-muted text-sm">
            {description}
          </p>
        ) : null}
      </Container>
    </div>
  );
}
