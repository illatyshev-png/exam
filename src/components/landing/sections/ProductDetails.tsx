import Container from "../ui/Container";
import Section from "../ui/Section";
import Heading from "../ui/Heading";
import Text from "../ui/Text";
import LandingCard from "../ui/LandingCard";
import LandingButton from "../ui/LandingButton";

interface Feature {
  name: string;
  detail: string;
}

interface ProductDetailsProps {
  headline: string;
  image?: string | null;
  features: Feature[];
  ctaText?: string;
  ctaHref?: string;
  bonus: {
    title: string;
    description: string;
  };
}

const ProductDetails = ({ headline, image, features, ctaText, ctaHref, bonus }: ProductDetailsProps) => (
  <Section id="details">
    <Container className="max-w-4xl mx-auto">
      <div className="mb-6">
        {image ? (
          <img
            src={image}
            alt="Скриншот встречи группы в Zoom"
            className="w-full max-w-lg aspect-video object-cover rounded-xl mx-auto"
          />
        ) : (
          <div className="w-full max-w-lg aspect-video rounded-xl border-2 border-dashed border-border flex items-center justify-center bg-muted/50 mx-auto">
            <div className="text-center text-muted-foreground/50 px-4">
              <svg className="w-10 h-10 mx-auto mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0 0 22.5 18.75V5.25A2.25 2.25 0 0 0 20.25 3H3.75A2.25 2.25 0 0 0 1.5 5.25v13.5A2.25 2.25 0 0 0 3.75 21Z" />
              </svg>
              <span className="text-xs">Скриншот из Zoom</span>
            </div>
          </div>
        )}
      </div>
      <Heading as="h2" className="text-center mb-10">{headline}</Heading>

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
      {ctaText && ctaHref && (
        <div className="text-center mt-12">
          <LandingButton variant="accent" size="lg" href={ctaHref}>
            {ctaText}
          </LandingButton>
        </div>
      )}
    </Container>
  </Section>
);

export default ProductDetails;
