import Container from "../ui/Container";
import Section from "../ui/Section";
import Heading from "../ui/Heading";
import Text from "../ui/Text";
import LandingCard from "../ui/LandingCard";

interface Benefit {
  title: string;
  description: string;
}

interface SolutionProps {
  headline: string;
  description: string;
  benefits: Benefit[];
  highlightCard: {
    title: string;
    value: string;
    description: string;
  };
}

const Solution = ({ headline, description, benefits, highlightCard }: SolutionProps) => (
  <Section id="solution">
    <Container>
      <div className="max-w-3xl mx-auto text-center mb-12">
        <Heading as="h2" className="mb-4">{headline}</Heading>
        <Text variant="lead">{description}</Text>
      </div>

      <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
        {benefits.map((b, i) => (
          <div key={i} className="flex items-start gap-3">
            <span className="mt-1 text-accent shrink-0">
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </span>
            <div>
              <p className="font-medium text-foreground">{b.title}</p>
              <p className="text-sm text-muted-foreground">{b.description}</p>
            </div>
          </div>
        ))}
      </div>

      <LandingCard variant="highlighted" className="max-w-md mx-auto text-center">
        <Text variant="small" className="uppercase tracking-wide font-semibold mb-1">
          {highlightCard.title}
        </Text>
        <p className="text-3xl font-bold text-accent mb-2">{highlightCard.value}</p>
        <Text variant="muted">{highlightCard.description}</Text>
      </LandingCard>
    </Container>
  </Section>
);

export default Solution;
