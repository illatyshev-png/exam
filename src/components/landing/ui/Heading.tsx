import { ReactNode } from "react";

interface HeadingProps {
  children: ReactNode;
  as?: "h1" | "h2" | "h3" | "h4";
  className?: string;
}

const headingStyles = {
  h1: "text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground",
  h2: "text-3xl md:text-4xl font-bold tracking-tight text-foreground",
  h3: "text-xl md:text-2xl font-semibold text-foreground",
  h4: "text-lg font-semibold text-foreground",
};

const Heading = ({ children, as: Tag = "h2", className = "" }: HeadingProps) => (
  <Tag className={`${headingStyles[Tag]} text-balance ${className}`}>{children}</Tag>
);

export default Heading;
