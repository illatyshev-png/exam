import Container from "../ui/Container";
import Section from "../ui/Section";
import Heading from "../ui/Heading";
import TestimonialCard from "../ui/TestimonialCard";

interface Testimonial {
  quote: string;
  name: string;
  role: string;
  avatar?: string | null;
}

interface SocialProofProps {
  headline: string;
  items: Testimonial[];
}

const SocialProof = ({ headline, items }: SocialProofProps) => (
  <Section id="testimonials" variant="muted">
    <Container>
      <Heading as="h2" className="text-center mb-10">{headline}</Heading>
      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {items.map((t, i) => (
          <TestimonialCard key={i} {...t} />
        ))}
      </div>
    </Container>
  </Section>
);

export default SocialProof;
