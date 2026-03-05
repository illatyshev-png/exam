import Container from "../ui/Container";
import { Link } from "react-router-dom";
import { getExternalLinkRel } from "@/utils/linkRel";

interface FooterProps {
  copyright: string;
  links: { label: string; href: string; highlight?: boolean; internal?: boolean }[];
}

const Footer = ({ copyright, links }: FooterProps) => {
  const handleInternalClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const id = href.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  return (
    <footer className="border-t border-border bg-muted py-12">
      <Container>
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-sm text-muted-foreground">{copyright}</p>
          <nav className="flex items-center gap-4 flex-wrap justify-center" aria-label="Footer navigation">
            {links.map((link) => {
              const isInternalPage = link.internal && link.href.startsWith("/");
              const isAnchor = link.internal && link.href.startsWith("#");
              
              if (isInternalPage) {
                return (
                  <Link
                    key={link.label}
                    to={link.href}
                    className={`text-sm transition-colors ${
                      link.highlight
                        ? "font-semibold text-foreground bg-background/80 px-3 py-1.5 rounded-md border border-border hover:bg-background"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              }
              
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={isAnchor ? (e) => handleInternalClick(e, link.href) : undefined}
                  target={link.internal ? undefined : "_blank"}
                  rel={link.internal ? undefined : getExternalLinkRel(link.href)}
                  className={`text-sm transition-colors ${
                    link.highlight
                      ? "font-semibold text-foreground bg-background/80 px-3 py-1.5 rounded-md border border-border hover:bg-background"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
