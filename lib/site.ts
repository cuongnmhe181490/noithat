import { blogPosts, getBlogBySlug } from "@/data/blog";
import {
  filterProjects,
  getFeaturedProjects,
  getProjectBySlug,
  getProjectFilterOptions,
  projectCategories,
  projects,
} from "@/data/projects";
import { services } from "@/data/services";
import {
  contactDetails,
  navigation,
  processSteps,
  signaturePillars,
  siteConfig,
  stats,
  testimonials,
} from "@/data/site";

export function getHomePageData() {
  return {
    navigation,
    siteConfig,
    signaturePillars,
    processSteps,
    stats,
    testimonials,
    contactDetails,
    categories: projectCategories,
    featuredProjects: getFeaturedProjects(),
    featuredPosts: blogPosts.slice(0, 3),
  };
}

export function getProjectsPageData() {
  return {
    projects,
    filters: getProjectFilterOptions(),
  };
}

export function getProjectPageData(slug: string) {
  return getProjectBySlug(slug);
}

export function getBlogPageData() {
  return blogPosts;
}

export function getBlogPostPageData(slug: string) {
  return getBlogBySlug(slug);
}

export function getContactPageData() {
  return {
    contactDetails,
    siteConfig,
  };
}

export {
  blogPosts,
  contactDetails,
  filterProjects,
  getBlogBySlug,
  getProjectBySlug,
  getProjectFilterOptions,
  navigation,
  processSteps,
  projectCategories,
  projects,
  services,
  signaturePillars,
  siteConfig,
  stats,
  testimonials,
};
