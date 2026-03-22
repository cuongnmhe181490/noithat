import { BlogSection } from "@/components/blog-section";
import { BrandSignalStrip } from "@/components/brand-signal-strip";
import { CategoryStrip } from "@/components/category-strip";
import { ConsultationForm } from "@/components/consultation-form";
import { ContactCta } from "@/components/contact-cta";
import { HeroSection } from "@/components/hero-section";
import { MaterialCraftSection } from "@/components/material-craft-section";
import { ProcessSection } from "@/components/process-section";
import { ProjectsShowcase } from "@/components/projects-showcase";
import { StyleSignature } from "@/components/style-signature";
import { TestimonialsSection } from "@/components/testimonials-section";
import { blogPosts } from "@/data/blog";
import { projectCategories, projects } from "@/data/projects";
import {
  materialStories,
  processSteps,
  signaturePillars,
  testimonials,
} from "@/data/site";

export default function Home() {
  return (
    <>
      <HeroSection />
      <BrandSignalStrip />
      <CategoryStrip categories={projectCategories} />
      <ProjectsShowcase
        title="Những dự án đóng vai trò như signature showroom trong danh mục."
        eyebrow="Signature projects"
        description="Tại trang chủ, ưu tiên thuộc về cảm giác thị giác: ảnh lớn, text vừa đủ và một lối vào rõ ràng đến từng case study."
        projects={projects.slice(0, 4)}
        compact
      />
      <StyleSignature pillars={signaturePillars} />
      <MaterialCraftSection materials={materialStories} />
      <ProcessSection steps={processSteps} />
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
