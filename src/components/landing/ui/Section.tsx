import { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  id?: string;
  className?: string;
  variant?: "default" | "muted";
}

const Section = ({ children, id, className = "", variant = "default" }: SectionProps) => (
  <section
    id={id}
    className={`section-padding ${variant === "muted" ? "bg-muted" : "bg-background"} ${className}`}
  >
    {children}
  </section>
);

export default Section;
