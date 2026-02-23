import Container from "../ui/Container";

interface FooterProps {
  copyright: string;
  links: { label: string; href: string }[];
  contact: { email: string };
}

const Footer = ({ copyright, links, contact }: FooterProps) => (
  <footer className="border-t border-border bg-muted py-12">
    <Container>
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-sm text-muted-foreground">{copyright}</p>
        <div className="flex items-center gap-6">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
        <a
          href={`mailto:${contact.email}`}
          className="text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          {contact.email}
        </a>
      </div>
    </Container>
  </footer>
);

export default Footer;
