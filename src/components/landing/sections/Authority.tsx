import Container from "../ui/Container";
import Section from "../ui/Section";
import Heading from "../ui/Heading";
import SectionImage from "../ui/SectionImage";

interface AuthorityGroup {
  title: string;
  items: string[];
}

interface AuthorityProps {
  headline: string;
  groups: AuthorityGroup[];
  image?: string;
}

const Authority = ({ headline, groups, image }: AuthorityProps) => (
  <Section id="authority" variant="muted">
    <Container>
      <div className="max-w-4xl mx-auto">
        <SectionImage src="/sections/authority.png" alt={headline} className="mb-4" offsetPercent={33.33} />
        <Heading as="h2" className="text-center mb-8">{headline}</Heading>

        <div className="grid md:grid-cols-2 gap-6">
          {groups.map((group, gi) => (
            <div
              key={gi}
              className={gi === groups.length - 1 && groups.length % 2 !== 0 ? "md:col-span-2 md:max-w-md md:mx-auto" : ""}
            >
              <h3 className="text-base font-semibold text-foreground mb-2">
                {gi + 1}. {group.title}
              </h3>
              <ul className="space-y-2 pl-4">
                {group.items.map((item, ii) => (
                  <li key={ii} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0 mt-1.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </Container>
  </Section>
);

export default Authority;
