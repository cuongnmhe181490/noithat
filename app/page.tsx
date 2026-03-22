import { BlogSection } from "@/components/blog-section";
import { CategoryStrip } from "@/components/category-strip";
import { ConsultationForm } from "@/components/consultation-form";
import { ContactCta } from "@/components/contact-cta";
import { HeroSection } from "@/components/hero-section";
import { ProcessSection } from "@/components/process-section";
import { ProjectsShowcase } from "@/components/projects-showcase";
import { StatsSection } from "@/components/stats-section";
import { StyleSignature } from "@/components/style-signature";
import { TestimonialsSection } from "@/components/testimonials-section";
import { blogPosts } from "@/data/blog";
import { projectCategories, projects } from "@/data/projects";
import {
  processSteps,
  signaturePillars,
  stats,
  testimonials,
} from "@/data/site";

export default function Home() {
  return (
    <>
      <HeroSection />
      <CategoryStrip categories={projectCategories} />
      <ProjectsShowcase
        title="Dự án nổi bật"
        eyebrow="Bộ sưu tập không gian"
        description="Mỗi dự án là một câu chuyện vật liệu và tỷ lệ sống được kể bằng ánh sáng, đường nét và cảm xúc chạm tay."
        projects={projects}
      />
      <StyleSignature pillars={signaturePillars} />
      <ProcessSection steps={processSteps} />
      <StatsSection stats={stats} />
      <TestimonialsSection testimonials={testimonials} />
      <BlogSection posts={blogPosts.slice(0, 3)} />
      <section className="section-shell grid gap-8 pb-24 lg:grid-cols-[1.1fr_0.9fr]">
        <ContactCta />
        <ConsultationForm />
      </section>
    </>
  );
}
