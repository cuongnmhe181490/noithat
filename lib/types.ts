export type SeoSummary = {
  title: string;
  description: string;
  image?: string;
  keywords?: string[];
};

export type NavigationItem = {
  label: string;
  href: string;
};

export type ProjectCategory = {
  slug: string;
  title: string;
  description: string;
  image: string;
  metric: string;
};

export type MaterialStory = {
  name: string;
  description: string;
  tone: string;
  image: string;
};

export type TrustIndicator = {
  title: string;
  description: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type SignaturePillar = {
  title: string;
  description: string;
};

export type ProcessStep = {
  step: string;
  title: string;
  description: string;
  deliverable: string;
};

export type SiteStat = {
  value: string;
  label: string;
  detail: string;
};

export type Testimonial = {
  name: string;
  role: string;
  project: string;
  quote: string;
  location: string;
  rating: number;
  avatar: string;
};

export type ContactDetail = {
  label: string;
  value: string;
};

export type SiteConfig = {
  name: string;
  shortName: string;
  tagline: string;
  description: string;
  phone: string;
  email: string;
  address: string;
  showroom: string;
  workshop: string;
  hours: string;
  socials: Array<{
    label: string;
    href: string;
  }>;
};

export type FilterOption = {
  label: string;
  value: string;
  count?: number;
};

export type ProjectTimelineItem = {
  phase: string;
  duration: string;
  details: string;
};

export type BeforeAfterSet = {
  before: string;
  after: string;
  caption: string;
};

export type Project = {
  slug: string;
  name: string;
  type: string;
  typeKey: string;
  style: string;
  styleKey: string;
  area: string;
  areaValue: number;
  location: string;
  year: string;
  featured: boolean;
  summary: string;
  concept: string;
  challenge: string;
  solution: string;
  materials: string[];
  signatureDetails: string[];
  heroImage: string;
  gallery: string[];
  beforeAfter: BeforeAfterSet;
  timeline: ProjectTimelineItem[];
  tags: string[];
};

export type ProjectFilters = {
  type?: string;
  style?: string;
  area?: string;
};

export type Service = {
  slug: string;
  name: string;
  summary: string;
  description: string;
  deliverables: string[];
  outcomes: string[];
  suitedFor: string[];
  faqs: FaqItem[];
  image: string;
};

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readingTime: string;
  publishedAt: string;
  coverImage: string;
  featured: boolean;
  author: string;
  content: string[];
};
