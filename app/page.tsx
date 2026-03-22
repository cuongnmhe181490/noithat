import { BlogSection } from "@/components/blog-section";
import { CategoryStrip } from "@/components/category-strip";
import { ConsultationForm } from "@/components/consultation-form";
import { ContactCta } from "@/components/contact-cta";
import { HeroSection } from "@/components/hero-section";
import { MaterialCraftSection } from "@/components/material-craft-section";
import { ProcessSection } from "@/components/process-section";
import { ProjectsShowcase } from "@/components/projects-showcase";
import { StatsSection } from "@/components/stats-section";
import { StyleSignature } from "@/components/style-signature";
import { TestimonialsSection } from "@/components/testimonials-section";
import { TrustSection } from "@/components/trust-section";
import { blogPosts } from "@/data/blog";
import { projectCategories, projects } from "@/data/projects";
import {
  materialStories,
  processSteps,
  signaturePillars,
  stats,
  testimonials,
  trustIndicators,
} from "@/data/site";

export default function Home() {
  return (
    <>
      <HeroSection />
      <CategoryStrip categories={projectCategories} />
      <ProjectsShowcase
        title="Những dự án đóng vai trò như signature showroom trong danh mục."
        eyebrow="Signature projects"
        description="Mỗi dự án được biên tập như một case study cao cấp: có concept, vật liệu, nhịp cảm xúc và khả năng chuyển hóa thành công trình thật."
        projects={projects.slice(0, 4)}
        compact
      />
      <StyleSignature pillars={signaturePillars} />
      <MaterialCraftSection materials={materialStories} />
      <ProcessSection steps={processSteps} />
      <StatsSection stats={stats} />
      <TrustSection items={trustIndicators} />
      <TestimonialsSection testimonials={testimonials} />
      <BlogSection posts={blogPosts.slice(0, 3)} />
      <section
        id="lead"
        className="section-shell grid gap-8 pb-24 lg:grid-cols-[1.08fr_0.92fr]"
      >
        <ContactCta />
        <ConsultationForm />
      </section>
    </>
  );
}
