import { ReactNode } from "react";

interface TextProps {
  children: ReactNode;
  variant?: "body" | "lead" | "small" | "muted";
  className?: string;
}

const textStyles = {
  body: "text-base text-foreground leading-relaxed",
  lead: "text-lg md:text-xl text-muted-foreground leading-relaxed",
  small: "text-sm text-muted-foreground",
  muted: "text-base text-muted-foreground",
};

const Text = ({ children, variant = "body", className = "" }: TextProps) => (
  <p className={`${textStyles[variant]} ${className}`}>{children}</p>
);

export default Text;
