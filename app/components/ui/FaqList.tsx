import { Plus } from "lucide-react";

// Accessible accordion built on <details>: no JS, the "+" turns into "×".
export default function FaqList({
  items,
}: {
  items: { question: string; answer: string }[];
}) {
  return (
    <div className="flex flex-col divide-y divide-stroke card">
      {items.map((item) => (
        <details key={item.question} className="group px-6">
          <summary className="flex justify-between items-center gap-4 py-5 font-medium text-foreground hover:text-primary transition-colors cursor-pointer list-none [&::-webkit-details-marker]:hidden">
            {item.question}
            <span className="flex justify-center items-center group-open:bg-primary-fill border border-stroke group-open:border-primary-fill rounded-full w-8 h-8 group-open:text-primary-foreground transition shrink-0">
              <Plus
                className="w-4 h-4 group-open:rotate-45 transition-transform"
                aria-hidden="true"
              />
            </span>
          </summary>
          <p className="pr-12 pb-5 text-foreground-muted text-sm leading-relaxed">
            {item.answer}
          </p>
        </details>
      ))}
    </div>
  );
}
