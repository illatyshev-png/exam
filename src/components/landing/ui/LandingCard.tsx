import { ReactNode } from "react";

interface LandingCardProps {
  children: ReactNode;
  className?: string;
  variant?: "default" | "highlighted" | "elevated";
}

const cardVariants = {
  default: "bg-card border border-border shadow-[var(--shadow-soft)]",
  highlighted: "bg-card border-2 border-accent shadow-[var(--shadow-elevated)]",
  elevated: "bg-card border border-border shadow-[var(--shadow-card)]",
};

const LandingCard = ({ children, className = "", variant = "default" }: LandingCardProps) => (
  <div className={`rounded-lg p-6 md:p-8 ${cardVariants[variant]} ${className}`}>
    {children}
  </div>
);

export default LandingCard;
