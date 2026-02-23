// ============================================
// LANDING PAGE CONTENT
// Edit this file to customize all text content.
// No component files need to be modified.
// ============================================

export const siteConfig = {
  name: "ProductName",
  logo: null as string | null, // path to logo image or null for text
};

export const navLinks = [
  { label: "How it works", href: "#solution" },
  { label: "Details", href: "#details" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

export const heroContent = {
  headline: "Transform the Way You Work — Effortlessly",
  subheadline:
    "A proven system that saves you 10+ hours per week and eliminates the chaos holding your business back.",
  ctaText: "Get Started Now",
  ctaHref: "#pricing",
  trustNote: "Trusted by 2,000+ professionals worldwide",
};

export const painContent = {
  intro: "If any of this sounds familiar, you're not alone.",
  struggles: [
    "Spending hours on tasks that should take minutes",
    "Feeling overwhelmed by scattered tools and workflows",
    "Losing clients because you can't keep up with demand",
    "Working nights and weekends just to stay afloat",
    "Watching competitors move faster with fewer resources",
  ],
};

export const solutionContent = {
  headline: "A Simpler Way Forward",
  description:
    "Our system brings clarity and structure to your daily work, so you can focus on what actually moves the needle.",
  benefits: [
    { title: "Automate repetitive tasks", description: "Free up hours every week with smart workflows" },
    { title: "Centralize everything", description: "One place for all your projects, clients, and data" },
    { title: "Scale without hiring", description: "Do more with the team you already have" },
    { title: "Track what matters", description: "Clear dashboards with metrics that drive decisions" },
  ],
  highlightCard: {
    title: "Average result",
    value: "12 hours saved per week",
    description: "Based on data from 500+ active users over 6 months",
  },
};

export const authorityContent = {
  headline: "Built by Someone Who Gets It",
  bio: "After 10 years of building and scaling businesses, I created this system to solve the exact problems I faced every day. It's not theory — it's battle-tested methodology packaged into a tool you can use right now.",
  achievements: [
    "10+ years in operations and product management",
    "Helped 200+ businesses streamline their workflows",
    "Speaker at ProductCon, SaaStr, and Web Summit",
    "Featured in Forbes, TechCrunch, and Entrepreneur",
  ],
  imagePlaceholder: true,
};

export const detailsContent = {
  headline: "What's Included",
  features: [
    { name: "Workflow Builder", detail: "Visual drag-and-drop automation" },
    { name: "Client Portal", detail: "Branded self-service dashboard" },
    { name: "Analytics Suite", detail: "Real-time metrics & reporting" },
    { name: "Team Collaboration", detail: "Shared workspaces with roles" },
    { name: "Integrations", detail: "Connect 50+ tools you already use" },
    { name: "Priority Support", detail: "Response within 2 business hours" },
  ],
  bonus: {
    title: "Bonus: Quick-Start Templates",
    description:
      "Get 20+ pre-built workflow templates so you can launch in minutes, not days. Valued at $299 — included free.",
  },
};

export const testimonialsContent = {
  headline: "What People Are Saying",
  items: [
    {
      quote:
        "This changed everything for our team. We cut our project delivery time in half.",
      name: "Sarah Chen",
      role: "Operations Director, Meridian Co.",
      avatar: null as string | null,
    },
    {
      quote:
        "I was skeptical at first, but the ROI was obvious within the first month. Can't imagine going back.",
      name: "James Miller",
      role: "Founder, Bravo Studio",
      avatar: null,
    },
    {
      quote:
        "The best investment I've made for my business this year. Period.",
      name: "Elena Voss",
      role: "CEO, Nuvola Digital",
      avatar: null,
    },
  ],
};

export const pricingContent = {
  headline: "Simple, Transparent Pricing",
  plans: [
    {
      name: "Starter",
      price: "$29",
      period: "/month",
      description: "Perfect for freelancers and solo founders",
      features: [
        "Up to 5 workflows",
        "Basic analytics",
        "Email support",
        "1 team member",
      ],
      ctaText: "Start Free Trial",
      ctaHref: "https://example.com/checkout/starter",
      highlighted: false,
    },
    {
      name: "Professional",
      price: "$79",
      period: "/month",
      description: "For growing teams that need more power",
      features: [
        "Unlimited workflows",
        "Advanced analytics",
        "Priority support",
        "Up to 10 team members",
        "Client portal",
        "Custom integrations",
      ],
      ctaText: "Start Free Trial",
      ctaHref: "https://example.com/checkout/pro",
      highlighted: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      description: "For organizations with advanced needs",
      features: [
        "Everything in Professional",
        "Unlimited team members",
        "Dedicated account manager",
        "Custom onboarding",
        "SLA guarantee",
        "SSO & advanced security",
      ],
      ctaText: "Contact Sales",
      ctaHref: "https://example.com/contact",
      highlighted: false,
    },
  ],
};

export const faqContent = {
  headline: "Frequently Asked Questions",
  items: [
    {
      question: "Is there a free trial?",
      answer:
        "Yes! Every plan comes with a 14-day free trial. No credit card required.",
    },
    {
      question: "Can I switch plans later?",
      answer:
        "Absolutely. You can upgrade or downgrade at any time from your account settings.",
    },
    {
      question: "Do you offer refunds?",
      answer:
        "We offer a 30-day money-back guarantee. If you're not satisfied, just reach out and we'll process a full refund.",
    },
    {
      question: "What integrations do you support?",
      answer:
        "We integrate with 50+ tools including Slack, Notion, Google Workspace, Zapier, and many more. See our integrations page for the full list.",
    },
    {
      question: "Is my data secure?",
      answer:
        "Yes. We use bank-level encryption, and your data is stored on SOC 2 compliant servers. We never share your data with third parties.",
    },
  ],
  finalCta: {
    headline: "Ready to Get Started?",
    description: "Join thousands of professionals who already made the switch.",
    ctaText: "Start Your Free Trial",
    ctaHref: "#pricing",
  },
};

export const footerContent = {
  copyright: `© ${new Date().getFullYear()} ProductName. All rights reserved.`,
  links: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
    { label: "Contact", href: "mailto:hello@example.com" },
  ],
  contact: {
    email: "hello@example.com",
  },
};
