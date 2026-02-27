import Container from "../ui/Container";
import Section from "../ui/Section";
import Heading from "../ui/Heading";
import Text from "../ui/Text";
import LandingButton from "../ui/LandingButton";
import LandingAccordion from "../ui/LandingAccordion";
import SectionImage from "../ui/SectionImage";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  headline: string;
  items: FAQItem[];
  finalCta: {
    headline: string;
    description: string;
    ctaText: string;
    ctaHref: string;
  };
}

const FAQ = ({ headline, items, finalCta }: FAQProps) => (
  <>
    <Section id="faq" variant="muted">
      <Container className="max-w-5xl mx-auto">
        <SectionImage src="/sections/faq.jpeg" className="mb-4" offsetPercent={100} />
      </Container>
      <Container className="max-w-3xl mx-auto">
        <Heading as="h2" className="text-center mb-10">{headline}</Heading>
        <LandingAccordion items={items} />
      </Container>
    </Section>

    <Section>
      <Container className="max-w-2xl mx-auto text-center">
        <Heading as="h2" className="mb-4">{finalCta.headline}</Heading>
        <Text variant="lead" className="mb-8">{finalCta.description}</Text>
        <LandingButton variant="accent" size="lg" href={finalCta.ctaHref}>
          {finalCta.ctaText}
        </LandingButton>
        <SectionImage src="/sections/details.png" className="mt-8" />
      </Container>
    </Section>
  </>
);

export default FAQ;
