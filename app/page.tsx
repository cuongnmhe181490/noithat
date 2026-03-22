import { BlogSection } from "@/components/blog-section";
import { BrandSignalStrip } from "@/components/brand-signal-strip";
import { CategoryStrip } from "@/components/category-strip";
import { ConsultationForm } from "@/components/consultation-form";
import { ContactCta } from "@/components/contact-cta";
import { HeroSection } from "@/components/hero-section";
import { MaterialCraftSection } from "@/components/material-craft-section";
import { ProjectsShowcase } from "@/components/projects-showcase";
import { TestimonialsSection } from "@/components/testimonials-section";
import { blogPosts } from "@/data/blog";
import { projectCategories, projects } from "@/data/projects";
import { materialStories, testimonials } from "@/data/site";

export default function Home() {
  return (
    <>
      <HeroSection />
      <BrandSignalStrip />
      <CategoryStrip categories={projectCategories} />
      <ProjectsShowcase
        title="Một selection ngắn để người xem muốn mở từng case study."
        eyebrow="Signature projects"
        projects={projects.slice(0, 4)}
        compact
      />
      <MaterialCraftSection materials={materialStories} />
      <TestimonialsSection testimonials={testimonials} />
      <BlogSection posts={blogPosts.slice(0, 3)} />
      <section
        id="lead"
        className="section-shell grid gap-8 pb-24 pt-8 lg:grid-cols-[1.05fr_0.95fr]"
      >
        <ContactCta />
        <ConsultationForm />
      </section>
    </>
  );
}
