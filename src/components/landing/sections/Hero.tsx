import Container from "../ui/Container";
import Heading from "../ui/Heading";
import Text from "../ui/Text";
import LandingButton from "../ui/LandingButton";

interface HeroProps {
  headline: string;
  subheadline: string;
  ctaText: string;
  ctaHref: string;
  trustNote?: string;
}

const Hero = ({ headline, subheadline, ctaText, ctaHref, trustNote }: HeroProps) => (
  <section className="py-20 md:py-32 bg-background">
    <Container className="text-center max-w-3xl mx-auto">
      <Heading as="h1" className="mb-6 animate-fade-in-up">
        {headline}
      </Heading>
      <Text variant="lead" className="mb-8 max-w-2xl mx-auto animate-fade-in-up [animation-delay:100ms] opacity-0">
        {subheadline}
      </Text>
      <div className="animate-fade-in-up [animation-delay:200ms] opacity-0">
        <LandingButton variant="accent" size="lg" href={ctaHref}>
          {ctaText}
        </LandingButton>
      </div>
      {trustNote && (
        <Text variant="small" className="mt-6 animate-fade-in-up [animation-delay:300ms] opacity-0">
          {trustNote}
        </Text>
      )}
    </Container>
  </section>
);

export default Hero;
