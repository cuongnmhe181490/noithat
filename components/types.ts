import type { ReactNode } from "react";

export interface NavLink {
  label: string;
  href: string;
  badge?: string;
}

export interface ActionLinkConfig {
  href: string;
  label?: string;
  children?: ReactNode;
  external?: boolean;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  target?: string;
  rel?: string;
}

export interface CategoryLink {
  label: string;
  href: string;
  description: string;
  count?: string;
}

export interface HeroMetric {
  value: string;
  label: string;
  hint?: string;
}

export interface ProjectStat {
  label: string;
  value: string;
}

export interface ProjectItem {
  slug: string;
  title: string;
  category: string;
  style: string;
  area: string;
  location: string;
  year: string;
  summary: string;
  image: string;
  featured?: boolean;
  tags?: string[];
  stats?: ProjectStat[];
  href?: string;
}

export interface FilterOption {
  label: string;
  value: string;
  count?: number;
}

export interface StylePoint {
  title: string;
  description: string;
}

export interface StepItem {
  title: string;
  description: string;
  duration?: string;
}

export interface StatItem {
  value: string;
  label: string;
  description?: string;
}

export interface TestimonialItem {
  quote: string;
  name: string;
  role: string;
  project: string;
  rating?: number;
  image?: string;
}

export interface BlogPostItem {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readingTime: string;
  image: string;
  date: string;
  featured?: boolean;
}

export interface ServiceItem {
  title: string;
  description: string;
  bullets: string[];
  href?: string;
}

export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterColumn {
  title: string;
  links: FooterLink[];
}

export interface ContactFieldOption {
  label: string;
  value: string;
}

export interface ContactField {
  name: string;
  label: string;
  type?: "text" | "email" | "tel" | "textarea" | "select";
  placeholder?: string;
  rows?: number;
  required?: boolean;
  options?: ContactFieldOption[];
  autoComplete?: string;
}

export interface ContactFormCopy {
  title?: string;
  description?: string;
  submitLabel?: string;
  consentLabel?: string;
  note?: string;
}

export interface BeforeAfterMedia {
  beforeSrc: string;
  afterSrc: string;
  beforeLabel?: string;
  afterLabel?: string;
  beforeAlt: string;
  afterAlt: string;
}
