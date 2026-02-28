import Container from "../ui/Container";
import Section from "../ui/Section";
import Heading from "../ui/Heading";
import Text from "../ui/Text";
import SectionImage from "../ui/SectionImage";

interface PainProps {
  intro: string;
  struggles: string[];
}

const Pain = ({ intro, struggles }: PainProps) => (
  <Section id="pain" variant="muted">
    <Container className="max-w-3xl mx-auto">
      <SectionImage src="/sections/pain.png" className="hidden md:block mb-4" offsetPercent={0} />
      <div className="flex items-center gap-3 mb-4 md:block">
        <img src="/sections/pain.png" alt="" className="w-14 h-14 rounded-lg object-cover shrink-0 md:hidden" />
        <Heading as="h2" className="md:text-center">
          Почему готовиться к экзамену в одиночку — плохая идея?
        </Heading>
      </div>
      <Text variant="lead" className="text-center mb-10">
        {intro}
      </Text>
      <ul className="space-y-4">
        {struggles.map((item, i) => (
          <li
            key={i}
            className="flex items-start gap-3 bg-card border border-border rounded-lg px-5 py-4 shadow-[var(--shadow-soft)] card-hover-glow"
          >
            <span className="mt-0.5 text-destructive shrink-0">
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </span>
            <span className="text-foreground">{item}</span>
          </li>
        ))}
      </ul>
    </Container>
  </Section>
);

export default Pain;
