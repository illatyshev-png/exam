import Container from "../ui/Container";
import Section from "../ui/Section";
import Heading from "../ui/Heading";
import Text from "../ui/Text";
import LandingButton from "../ui/LandingButton";

interface ComparisonRow {
  pain: string;
  solution: string;
  callout?: string;
}

interface ComparisonProps {
  headline: string;
  intro: string;
  image?: string | null;
  columnPain: string;
  columnSolution: string;
  rows: ComparisonRow[];
  ctaText: string;
  ctaHref: string;
}

const XIcon = () => (
  <svg className="h-5 w-5 text-destructive shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
);

const CheckIcon = () => (
  <svg className="h-5 w-5 text-emerald-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);

const ImagePlaceholder = ({ orientation }: { orientation: "vertical" | "horizontal" }) => (
  <div
    className={`rounded-xl border-2 border-dashed border-border flex items-center justify-center bg-muted/50 mx-auto ${
      orientation === "vertical" ? "w-48 aspect-[3/4]" : "w-full max-w-lg aspect-video"
    }`}
  >
    <div className="text-center text-muted-foreground/50 px-4">
      <svg className="w-10 h-10 mx-auto mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0 0 22.5 18.75V5.25A2.25 2.25 0 0 0 20.25 3H3.75A2.25 2.25 0 0 0 1.5 5.25v13.5A2.25 2.25 0 0 0 3.75 21Z" />
      </svg>
      <span className="text-xs">
        {orientation === "vertical" ? "Фото на ступенях Минюста" : "Скриншот из Zoom"}
      </span>
    </div>
  </div>
);

const Comparison = ({ headline, intro, image, columnPain, columnSolution, rows, ctaText, ctaHref }: ComparisonProps) => (
  <Section id="pain" variant="muted">
    <Container className="max-w-4xl mx-auto">
      <div className="mb-6">
        {image ? (
          <img
            src={image}
            alt="Участники группы на ступенях Минюста"
            className="w-48 aspect-[3/4] object-cover rounded-xl mx-auto"
          />
        ) : (
          <ImagePlaceholder orientation="vertical" />
        )}
      </div>
      <Heading as="h2" className="text-center mb-4">
        {headline}
      </Heading>
      <Text variant="lead" className="text-center mb-10">
        {intro}
      </Text>

      {/* Desktop table */}
      <div className="hidden md:block rounded-xl border border-border overflow-hidden shadow-[var(--shadow-soft)]">
        <div className="grid grid-cols-2 bg-muted/60 border-b border-border">
          <div className="px-6 py-4 font-semibold text-destructive flex items-center gap-2">
            <XIcon /> {columnPain}
          </div>
          <div className="px-6 py-4 font-semibold text-emerald-500 flex items-center gap-2 border-l border-border">
            <CheckIcon /> {columnSolution}
          </div>
        </div>
        {rows.map((row, i) => (
          <div key={i}>
            <div className={`grid grid-cols-2 bg-card ${i < rows.length - 1 || row.callout ? "border-b border-border" : ""}`}>
              <div className="px-6 py-5 flex items-start gap-3">
                <span className="mt-0.5"><XIcon /></span>
                <span className="text-foreground">{row.pain}</span>
              </div>
              <div className="px-6 py-5 flex items-start gap-3 border-l border-border">
                <span className="mt-0.5"><CheckIcon /></span>
                <span className="text-foreground">{row.solution}</span>
              </div>
            </div>
            {row.callout && (
              <div className={`bg-primary/5 border-primary/20 px-6 py-4 text-sm text-foreground leading-relaxed ${i < rows.length - 1 ? "border-b border-border" : ""}`}>
                {row.callout}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Mobile cards */}
      <div className="md:hidden space-y-4">
        {rows.map((row, i) => (
          <div key={i}>
            <div className="rounded-xl border border-border overflow-hidden shadow-[var(--shadow-soft)]">
              <div className="bg-destructive/5 px-4 py-4 flex items-start gap-3 border-b border-border">
                <span className="mt-0.5"><XIcon /></span>
                <span className="text-foreground text-sm">{row.pain}</span>
              </div>
              <div className="bg-emerald-500/5 px-4 py-4 flex items-start gap-3">
                <span className="mt-0.5"><CheckIcon /></span>
                <span className="text-foreground text-sm">{row.solution}</span>
              </div>
            </div>
            {row.callout && (
              <div className="mt-2 mx-3 rounded-lg border border-primary/30 bg-primary/5 px-4 py-3 text-sm text-foreground leading-relaxed">
                {row.callout}
              </div>
            )}
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

export default Comparison;
