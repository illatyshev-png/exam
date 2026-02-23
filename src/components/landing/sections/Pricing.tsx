import Container from "../ui/Container";
import Section from "../ui/Section";
import Heading from "../ui/Heading";
import Text from "../ui/Text";
import LandingButton from "../ui/LandingButton";

interface Plan {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  ctaText: string;
  ctaHref: string;
  highlighted: boolean;
}

interface PricingProps {
  headline: string;
  plans: Plan[];
}

const Pricing = ({ headline, plans }: PricingProps) => (
  <Section id="pricing">
    <Container>
      <Heading as="h2" className="text-center mb-10">{headline}</Heading>
      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {plans.map((plan, i) => (
          <div
            key={i}
            className={`rounded-lg p-6 md:p-8 flex flex-col ${
              plan.highlighted
                ? "bg-card border-2 border-accent shadow-[var(--shadow-elevated)] scale-[1.02]"
                : "bg-card border border-border shadow-[var(--shadow-soft)]"
            }`}
          >
            {plan.highlighted && (
              <span className="inline-block self-start text-xs font-semibold bg-accent text-accent-foreground px-3 py-1 rounded-full mb-4">
                Most Popular
              </span>
            )}
            <Heading as="h3" className="mb-1">{plan.name}</Heading>
            <div className="mb-2">
              <span className="text-3xl font-bold text-foreground">{plan.price}</span>
              <span className="text-muted-foreground">{plan.period}</span>
            </div>
            <Text variant="small" className="mb-6">{plan.description}</Text>
            <ul className="space-y-3 mb-8 flex-1">
              {plan.features.map((f, j) => (
                <li key={j} className="flex items-center gap-2 text-sm text-foreground">
                  <svg className="h-4 w-4 text-accent shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  {f}
                </li>
              ))}
            </ul>
            <LandingButton
              variant={plan.highlighted ? "accent" : "outline"}
              href={plan.ctaHref}
              className="w-full"
            >
              {plan.ctaText}
            </LandingButton>
          </div>
        ))}
      </div>
    </Container>
  </Section>
);

export default Pricing;
