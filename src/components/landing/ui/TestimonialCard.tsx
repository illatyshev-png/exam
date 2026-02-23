interface TestimonialCardProps {
  quote: string;
  name: string;
  role: string;
  avatar?: string | null;
}

const TestimonialCard = ({ quote, name, role, avatar }: TestimonialCardProps) => (
  <div className="bg-card border border-border rounded-lg p-6 shadow-[var(--shadow-soft)] flex flex-col">
    <blockquote className="text-foreground leading-relaxed flex-1 mb-4">
      "{quote}"
    </blockquote>
    <div className="flex items-center gap-3 pt-4 border-t border-border">
      <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-sm font-semibold text-muted-foreground overflow-hidden">
        {avatar ? (
          <img src={avatar} alt={name} className="w-full h-full object-cover" />
        ) : (
          name.charAt(0)
        )}
      </div>
      <div>
        <p className="text-sm font-medium text-foreground">{name}</p>
        <p className="text-xs text-muted-foreground">{role}</p>
      </div>
    </div>
  </div>
);

export default TestimonialCard;
