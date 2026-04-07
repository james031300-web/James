export interface Project {
  id: string;
  title: string;
  summary: string;
  description: string;
  tech_stack: string[];
  role: string;
  metrics: {
    [key: string]: string | number;
  };
  images: string[];
  links: {
    live?: string;
    repo?: string;
  };
  date: string;
}

export const projects: Project[] = [
  {
    id: "project-001",
    title: "Enterprise SaaS Dashboard",
    summary: "A high-performance analytics dashboard for B2B clients.",
    description: "Architected and developed a scalable frontend for an enterprise analytics platform. Focused on rendering large datasets efficiently and ensuring WCAG 2.1 AA compliance.",
    tech_stack: ["React", "TypeScript", "Tailwind CSS", "D3.js"],
    role: "Lead Frontend Engineer",
    metrics: {
      "Load Time": "< 1.2s",
      "Accessibility Score": "100",
      "Data Points Rendered": "10k+"
    },
    images: ["https://picsum.photos/seed/dashboard1/800/600", "https://picsum.photos/seed/dashboard2/800/600"],
    links: {
      live: "https://example.com",
    },
    date: "2025-11-01"
  },
  {
    id: "project-002",
    title: "E-Commerce Replatforming",
    summary: "Modernized a legacy e-commerce site to a headless architecture.",
    description: "Led the frontend migration to a modern headless stack, improving Core Web Vitals and conversion rates significantly. Implemented a robust design system.",
    tech_stack: ["Next.js", "React", "Tailwind CSS", "Shopify Storefront API"],
    role: "Senior Frontend Developer",
    metrics: {
      "LCP Improvement": "40%",
      "Conversion Lift": "+15%",
      "Lighthouse Score": "98"
    },
    images: ["https://picsum.photos/seed/ecommerce1/800/600"],
    links: {
      live: "https://example.com",
      repo: "https://github.com"
    },
    date: "2025-06-15"
  },
  {
    id: "project-003",
    title: "Fintech Mobile Web App",
    summary: "A secure and accessible mobile-first web application for personal finance.",
    description: "Built a highly responsive and accessible mobile web app for a fintech startup. Emphasized secure data handling and smooth animations for a native-like feel.",
    tech_stack: ["React", "Framer Motion", "Tailwind CSS", "Zustand"],
    role: "Frontend Developer",
    metrics: {
      "User Retention": "+25%",
      "App Store Rating": "4.8"
    },
    images: ["https://picsum.photos/seed/fintech1/800/600"],
    links: {
      live: "https://example.com"
    },
    date: "2024-10-20"
  }
];

export interface Service {
  id: string;
  name: string;
  description: string;
  deliverables: string[];
  price?: string;
}

export const services: Service[] = [
  {
    id: "service-001",
    name: "Frontend Architecture & Development",
    description: "End-to-end development of scalable, maintainable, and high-performance web applications using modern React ecosystems.",
    deliverables: ["Custom Web Applications", "Design System Implementation", "Performance Optimization", "Codebase Audits"]
  },
  {
    id: "service-002",
    name: "Web Accessibility (a11y) Consulting",
    description: "Ensuring your digital products are usable by everyone and comply with WCAG 2.1 AA standards.",
    deliverables: ["Accessibility Audits", "Remediation Implementation", "Inclusive Design Consulting", "Team Training"]
  },
  {
    id: "service-003",
    name: "Performance Optimization",
    description: "Deep-dive analysis and remediation to improve Core Web Vitals and overall site speed.",
    deliverables: ["Core Web Vitals Audit", "Asset Optimization", "Render Blocking Remediation", "Caching Strategies"]
  }
];

export interface Testimonial {
  id: string;
  author: string;
  role: string;
  text: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "test-001",
    author: "Sarah Jenkins",
    role: "CTO, TechFlow",
    text: "Ollan's attention to detail and focus on performance completely transformed our product. The accessibility improvements alone opened up our market significantly."
  },
  {
    id: "test-002",
    author: "David Chen",
    role: "Founder, GrowthMetrics",
    text: "A rare combination of deep technical expertise and an eye for design. Ollan delivered our MVP ahead of schedule and the code quality was exceptional."
  }
];
