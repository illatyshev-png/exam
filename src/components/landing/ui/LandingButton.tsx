import { ButtonHTMLAttributes, ReactNode } from "react";
import { getExternalLinkRel } from "@/utils/linkRel";

interface LandingButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "secondary" | "accent" | "outline";
  size?: "sm" | "md" | "lg";
  href?: string;
}

const variantStyles = {
  primary: "bg-primary text-primary-foreground hover:opacity-90",
  secondary: "bg-secondary text-secondary-foreground hover:opacity-90",
  accent: "bg-accent text-accent-foreground hover:opacity-90 font-semibold",
  outline: "border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground",
};

const sizeStyles = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

const LandingButton = ({
  children,
  variant = "primary",
  size = "md",
  href,
  className = "",
  ...props
}: LandingButtonProps) => {
  const classes = `inline-flex items-center justify-center rounded-lg transition-all duration-200 font-medium ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  if (href) {
    const isExternal = href.startsWith("http");
    return (
      <a
        href={href}
        className={classes}
        {...(isExternal && {
          target: "_blank",
          rel: getExternalLinkRel(href),
        })}
      >
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
};

export default LandingButton;
