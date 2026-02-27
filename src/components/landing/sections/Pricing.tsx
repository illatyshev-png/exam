"use client";

import Container from "../ui/Container";
import Section from "../ui/Section";
import Heading from "../ui/Heading";
import Text from "../ui/Text";
import LandingButton from "../ui/LandingButton";
import { AnimatedTabs } from "@/components/ui/animated-tabs";
import SectionImage from "../ui/SectionImage";

interface PricingTier {
  label: string;
  price: string;
  oldPrice?: string;
  note?: string;
  ctaText: string;
  ctaHref: string;
  badge?: string;
}

interface Plan {
  name: string;
  description: string;
  features: string[];
  tiers: PricingTier[];
  highlighted: boolean;
}

interface PricingProps {
  headline: string;
  plans: Plan[];
  periodLabels: string[];
  footnote?: string;
}

function PricingCard({
  plan,
  tier,
}: {
  plan: Plan;
  tier: PricingTier;
}) {
  return (
    <div
      className={`relative rounded-xl p-6 md:p-8 flex flex-col h-full card-hover-glow ${
        plan.highlighted
          ? "bg-card border-2 border-accent shadow-[var(--shadow-elevated)]"
          : "bg-card border border-border shadow-[var(--shadow-soft)]"
      }`}
    >
      {plan.highlighted && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-xs font-semibold bg-accent text-accent-foreground px-3 py-1 rounded-full">
          Выгодно
        </span>
      )}

      {tier.badge && !plan.highlighted && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-xs font-semibold bg-accent text-accent-foreground px-3 py-1 rounded-full">
          {tier.badge}
        </span>
      )}

      <Heading as="h3" className="text-center !text-xl">
        {plan.name}
      </Heading>
      <p className="text-sm text-muted-foreground text-center mt-1">
        {plan.description}
      </p>

      <div className="mt-5 mb-1 text-center">
        <div className="flex items-baseline justify-center gap-2">
          <span className="text-3xl font-bold text-foreground">
            {tier.price}
          </span>
          {tier.oldPrice && (
            <span className="text-base text-muted-foreground line-through">
              {tier.oldPrice}
            </span>
          )}
        </div>
        {tier.note && (
          <p className="text-xs text-muted-foreground mt-1">{tier.note}</p>
        )}
        <p className="text-xs text-muted-foreground mt-1">{tier.label}</p>
      </div>

      <ul className="space-y-3 flex-1 my-6">
        {plan.features.map((feature, idx) => (
          <li
            key={idx}
            className="flex items-start gap-2.5 text-sm text-muted-foreground"
          >
            <svg
              className="w-5 h-5 text-accent shrink-0 mt-0.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 13l4 4L19 7"
              />
            </svg>
            {feature}
          </li>
        ))}
      </ul>

      <LandingButton
        variant={plan.highlighted ? "accent" : "outline"}
        href={tier.ctaHref}
        className="w-full"
        size="md"
      >
        {tier.ctaText}
      </LandingButton>
    </div>
  );
}

const Pricing = ({ headline, plans, periodLabels, footnote }: PricingProps) => {
  const tabItems = periodLabels.map((label, periodIndex) => ({
    label,
    content: (
      <>
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto items-stretch">
          {plans.map((plan, i) => (
            <PricingCard key={i} plan={plan} tier={plan.tiers[periodIndex]} />
          ))}
        </div>
        {periodIndex === 0 && footnote && (
          <Text variant="small" className="text-center mt-8 max-w-3xl mx-auto">
            {footnote}
          </Text>
        )}
      </>
    ),
  }));

  return (
    <Section id="pricing">
      <Container>
        <SectionImage src="/sections/pricing.png" className="mb-4" offsetPercent={83.33} />
        <Heading as="h2" className="text-center mb-10">
          {headline}
        </Heading>

        <AnimatedTabs
          items={tabItems}
          variant="pills"
          defaultValue="0"
          listClassName="flex w-fit mx-auto mb-8"
        />
      </Container>
    </Section>
  );
};

export default Pricing;
