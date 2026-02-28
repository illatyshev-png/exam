import Container from "../ui/Container";
import Section from "../ui/Section";
import Heading from "../ui/Heading";
import Text from "../ui/Text";
import LandingCard from "../ui/LandingCard";
import SectionImage from "../ui/SectionImage";

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
      <SectionImage src="/sections/details.png" className="hidden md:block mb-4" offsetPercent={50} />
      <div className="flex items-center gap-3 mb-6 md:block md:mb-10">
        <img src="/sections/details.png" alt="" className="w-14 h-14 rounded-lg object-cover shrink-0 md:hidden" />
        <Heading as="h2" className="md:text-center">{headline}</Heading>
      </div>

      <div className="grid sm:grid-cols-2 gap-5 mb-12">
        {features.map((f, i) => (
          <div
            key={i}
            className="bg-card border border-border rounded-lg p-6 shadow-[var(--shadow-soft)] card-hover-glow"
          >
            <div className="flex items-start gap-2 mb-2">
              <span className="mt-0.5 text-accent shrink-0">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </span>
              <p className="font-semibold text-foreground text-base">{f.name}</p>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">{f.detail}</p>
          </div>
        ))}
      </div>

      <div className="relative max-w-2xl mx-auto">
        <div className="absolute -inset-1 bg-gradient-to-r from-accent/40 via-accent/60 to-accent/40 rounded-xl blur-sm animate-pulse" />
        <LandingCard variant="elevated" className="relative text-center bg-accent/10 border-accent/30 border-2 py-8">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-accent bg-accent/10 px-3 py-1 rounded-full mb-3">
            Актуально
          </span>
          <Heading as="h3" className="mb-3 text-accent">{bonus.title}</Heading>
          <Text className="text-foreground/80 font-medium">{bonus.description}</Text>
        </LandingCard>
      </div>
    </Container>
  </Section>
);

export default ProductDetails;
