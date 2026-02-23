import Container from "../ui/Container";
import Section from "../ui/Section";
import Heading from "../ui/Heading";
import Text from "../ui/Text";
import LandingCard from "../ui/LandingCard";

interface Feature {
  name: string;
  detail: string;
}

interface ProductDetailsProps {
  headline: string;
  features: Feature[];
  bonus: {
    title: string;
    description: string;
  };
}

const ProductDetails = ({ headline, features, bonus }: ProductDetailsProps) => (
  <Section id="details">
    <Container className="max-w-4xl mx-auto">
      <Heading as="h2" className="text-center mb-10">{headline}</Heading>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
        {features.map((f, i) => (
          <div
            key={i}
            className="bg-card border border-border rounded-lg p-5 shadow-[var(--shadow-soft)]"
          >
            <p className="font-medium text-foreground mb-1">{f.name}</p>
            <p className="text-sm text-muted-foreground">{f.detail}</p>
          </div>
        ))}
      </div>

      <LandingCard variant="elevated" className="text-center bg-accent/5 border-accent/20">
        <Heading as="h3" className="mb-2">{bonus.title}</Heading>
        <Text variant="muted">{bonus.description}</Text>
      </LandingCard>
    </Container>
  </Section>
);

export default ProductDetails;
