import { useState, type ReactNode } from "react";

const urlPattern = /(https?:\/\/[^\s,)]+)/g;

function linkifyText(text: string): ReactNode {
  const parts = text.split(urlPattern);
  if (parts.length === 1) return text;
  return parts.map((part, i) =>
    /^https?:\/\//.test(part) ? (
      <a
        key={i}
        href={part}
        target="_blank"
        rel="noopener noreferrer"
        className="text-accent hover:underline"
      >
        {part}
      </a>
    ) : (
      part
    )
  );
}

interface AccordionItem {
  question: string;
  answer: string;
}

interface LandingAccordionProps {
  items: AccordionItem[];
}

const LandingAccordion = ({ items }: LandingAccordionProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="divide-y divide-border border-t border-b border-border">
      {items.map((item, i) => (
        <div key={i}>
          <button
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            className="flex w-full items-center justify-between py-5 text-left text-foreground font-medium hover:text-accent transition-colors"
            aria-expanded={openIndex === i}
          >
            <span>{item.question}</span>
            <svg
              className={`h-5 w-5 shrink-0 ml-4 transition-transform duration-200 ${
                openIndex === i ? "rotate-180" : ""
              }`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          <div
            className={`overflow-hidden transition-all duration-200 ${
              openIndex === i ? "max-h-96 pb-5" : "max-h-0"
            }`}
          >
            <p className="text-muted-foreground leading-relaxed">{linkifyText(item.answer)}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LandingAccordion;
