import { useState } from "react";
import Container from "../ui/Container";
import Section from "../ui/Section";
import Heading from "../ui/Heading";
import LandingButton from "../ui/LandingButton";

interface ReasonItem {
  emoji: string;
  title: string;
  description: string;
  callout?: string;
}

interface ReasonsProps {
  headline: string;
  items: ReasonItem[];
  ctaText: string;
  ctaHref: string;
}

const Reasons = ({ headline, items, ctaText, ctaHref }: ReasonsProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <Section id="reasons">
      <Container className="max-w-3xl mx-auto">
        <Heading as="h2" className="text-center mb-10">
          {headline}
        </Heading>

        <div className="divide-y divide-border border-t border-b border-border">
          {items.map((item, i) => (
            <div key={i}>
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="flex w-full items-center justify-between py-5 text-left text-foreground font-medium hover:text-accent transition-colors"
                aria-expanded={openIndex === i}
              >
                <span className="flex items-center gap-3">
                  <span className="text-xl leading-none">{item.emoji}</span>
                  <span>{item.title}</span>
                </span>
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
                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
                {item.callout && (
                  <div className="mt-3 rounded-lg border border-primary/30 bg-primary/5 px-5 py-4 text-sm text-foreground leading-relaxed">
                    {item.callout}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <LandingButton href={ctaHref} size="lg" variant="accent">
            {ctaText}
          </LandingButton>
        </div>
      </Container>
    </Section>
  );
};

export default Reasons;
