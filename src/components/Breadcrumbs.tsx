import { Link } from "react-router-dom";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
}

/**
 * Компонент хлебных крошек для навигации
 * Улучшает UX и SEO (особенно с Schema.org разметкой)
 */
const Breadcrumbs = ({ items, className = "" }: BreadcrumbsProps) => {
  if (!items || items.length === 0) return null;

  return (
    <nav
      aria-label="Breadcrumb"
      className={`text-sm text-muted-foreground mb-8 ${className}`}
    >
      <ol className="flex items-center gap-2 flex-wrap">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <li key={index} className="flex items-center gap-2">
              {item.href && !isLast ? (
                <Link
                  to={item.href}
                  className="hover:text-foreground transition-colors hover:underline"
                >
                  {item.label}
                </Link>
              ) : (
                <span className={isLast ? "text-foreground font-medium" : ""}>
                  {item.label}
                </span>
              )}
              {!isLast && (
                <svg
                  className="w-4 h-4 text-muted-foreground/50"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
