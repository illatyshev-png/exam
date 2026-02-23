import Container from "../ui/Container";
import Section from "../ui/Section";
import Heading from "../ui/Heading";
import Text from "../ui/Text";

interface AuthorityProps {
  headline: string;
  bio: string;
  achievements: string[];
  imagePlaceholder?: boolean;
}

const Authority = ({ headline, bio, achievements, imagePlaceholder }: AuthorityProps) => (
  <Section id="authority" variant="muted">
    <Container>
      <div className="max-w-4xl mx-auto grid md:grid-cols-[1fr_auto] gap-12 items-center">
        <div>
          <Heading as="h2" className="mb-4">{headline}</Heading>
          <Text variant="muted" className="mb-6">{bio}</Text>
          <ul className="space-y-3">
            {achievements.map((a, i) => (
              <li key={i} className="flex items-center gap-2 text-sm text-foreground">
                <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                {a}
              </li>
            ))}
          </ul>
        </div>
        {imagePlaceholder && (
          <div className="w-48 h-48 rounded-lg bg-muted border border-border flex items-center justify-center text-muted-foreground text-sm mx-auto">
            Photo
          </div>
        )}
      </div>
    </Container>
  </Section>
);

export default Authority;
