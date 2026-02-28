import Container from "../ui/Container";

interface FooterProps {
  copyright: string;
  links: { label: string; href: string; highlight?: boolean }[];
}

const Footer = ({ copyright, links }: FooterProps) => (
  <footer className="border-t border-border bg-muted py-12">
    <Container>
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-sm text-muted-foreground">{copyright}</p>
        <div className="flex items-center gap-6">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`text-sm transition-colors ${
                link.highlight
                  ? "font-semibold text-foreground bg-background/80 px-3 py-1.5 rounded-md border border-border hover:bg-background"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </Container>
  </footer>
);

export default Footer;
