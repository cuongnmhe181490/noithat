import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { BeforeAfterSlider } from "@/components/before-after-slider";
import { ConsultationForm } from "@/components/consultation-form";
import { ContactCta } from "@/components/contact-cta";
import { ProjectStoryNav } from "@/components/project-story-nav";
import { RelatedProjects } from "@/components/related-projects";
import { SectionHeading } from "@/components/section-heading";
import { getProjectBySlug, projects } from "@/data/projects";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return { title: "Dự án không tồn tại" };
  }

  return {
    title: project.name,
    description: project.summary,
  };
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const relatedProjects = projects
    .filter(
      (item) =>
        item.slug !== project.slug &&
        (item.typeKey === project.typeKey || item.styleKey === project.styleKey),
    )
    .slice(0, 3);

  return (
    <article className="pb-24 pt-18">
      <section className="section-shell luxury-frame grain-overlay relative min-h-[88vh] overflow-hidden rounded-[2.8rem]">
        <Image
          src={project.heroImage}
          alt={project.name}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,8,7,0.08),rgba(10,8,7,0.3)_34%,rgba(10,8,7,0.88))]" />
        <div className="relative flex min-h-[88vh] flex-col justify-end px-6 pb-8 pt-24 text-[var(--color-ivory)] md:px-10 md:pb-10">
          <span className="eyebrow border-white/16 bg-white/10 text-white">
            {project.type}
          </span>
          <h1 className="mt-6 max-w-5xl font-serif text-5xl leading-none md:text-7xl">
            {project.name}
          </h1>
          <p className="mt-5 max-w-xl text-[0.98rem] leading-7 text-white/78 md:text-[1.03rem]">
            {project.summary}
          </p>
          <div className="mt-8 grid max-w-4xl gap-5 border-t border-white/12 pt-6 md:grid-cols-5">
            {[
              ["Loại công trình", project.type],
              ["Diện tích", project.area],
              ["Phong cách", project.style],
              ["Địa điểm", project.location],
              ["Năm", project.year],
            ].map(([label, value]) => (
              <div key={label}>
                <p className="text-[0.65rem] uppercase tracking-[0.24em] text-white/52">
                  {label}
                </p>
                <p className="mt-2 text-sm leading-6 text-white">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ProjectStoryNav />

      <section
        id="concept"
        className="section-shell section-pad grid gap-10 lg:grid-cols-[0.8fr_1.2fr]"
      >
        <div className="space-y-6">
          <SectionHeading
            eyebrow="Concept story"
            title="Một case study nên cho thấy vì sao không gian này đáng nhớ."
            description={project.concept}
            align="left"
          />
          <div className="rounded-[2rem] border border-black/8 bg-[rgba(255,255,255,0.34)] p-6">
            <p className="text-[0.68rem] uppercase tracking-[0.24em] text-[var(--color-muted)]">
              Thách thức
            </p>
            <p className="mt-4 text-sm leading-7 text-[var(--color-muted)]">
              {project.challenge}
            </p>
          </div>
          <div className="luxury-card rounded-[2rem] p-6">
            <p className="text-[0.68rem] uppercase tracking-[0.24em] text-[var(--color-muted)]">
              Giải pháp thiết kế
            </p>
            <p className="mt-4 text-sm leading-7 text-[var(--color-muted)]">
              {project.solution}
            </p>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {project.gallery.slice(0, 4).map((image, index) => (
            <div
              key={image}
              className={`relative overflow-hidden rounded-[2rem] ${
                index === 0 ? "h-[28rem] md:col-span-2" : "h-[20rem]"
              }`}
            >
              <Image
                src={image}
                alt={`${project.name} ${index + 1}`}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </section>

      <section
        id="materials"
        className="section-shell section-tight grid gap-6 lg:grid-cols-[0.94fr_1.06fr]"
      >
        <div className="luxury-card rounded-[2rem] p-7">
          <SectionHeading
            eyebrow="Material palette"
            title="Vật liệu chính tạo nên chiều sâu của công trình."
            align="left"
          />
          <ul className="mt-6 space-y-3">
            {project.materials.map((material) => (
              <li
                key={material}
                className="flex items-center gap-3 border-b border-black/6 pb-3 text-sm leading-7 text-[var(--color-muted)] last:border-0"
              >
                <span className="h-2 w-2 rounded-full bg-[var(--color-gold)]" />
                {material}
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-[2rem] border border-black/8 bg-[rgba(255,255,255,0.34)] p-7">
          <p className="text-[0.68rem] uppercase tracking-[0.24em] text-[var(--color-muted)]">
            Signature details
          </p>
          <div className="mt-5 grid gap-4">
            {project.signatureDetails.map((detail, index) => (
              <div
                key={detail}
                className="rounded-[1.6rem] bg-[rgba(21,19,17,0.03)] p-5"
              >
                <p className="text-[0.66rem] uppercase tracking-[0.24em] text-[var(--color-muted)]">
                  0{index + 1}
                </p>
                <p className="mt-3 text-sm leading-7 text-[var(--color-charcoal)]">
                  {detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="gallery" className="section-shell section-pad">
        <SectionHeading
          eyebrow="Fullscreen gallery"
          title="Nhịp ảnh lớn để người xem cảm nhận không gian như đang hiện diện bên trong."
          description="Gallery giữ các tỷ lệ ảnh khác nhau để tạo cảm giác editorial."
        />
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {project.gallery.map((image, index) => (
            <div
              key={`${image}-${index}`}
              className={`relative overflow-hidden rounded-[2rem] ${
                index % 3 === 0 ? "h-[36rem] md:col-span-2" : "h-[24rem]"
              }`}
            >
              <Image
                src={image}
                alt={`${project.name} gallery ${index + 1}`}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </section>

      <section className="section-shell section-tight">
        <BeforeAfterSlider
          beforeImage={project.beforeAfter.before}
          afterImage={project.beforeAfter.after}
          beforeLabel="Hiện trạng"
          afterLabel="Sau hoàn thiện"
          title="Mức độ thay đổi được tạo ra bằng tỷ lệ, ánh sáng và ngôn ngữ vật liệu."
          description={project.beforeAfter.caption}
        />
      </section>

      <section
        id="timeline"
        className="section-shell section-pad grid gap-8 lg:grid-cols-[0.72fr_1.28fr]"
      >
        <SectionHeading
          eyebrow="Timeline triển khai"
          title="Một dự án cao cấp cần được kiểm soát bằng quy trình rõ."
          description="Từ khảo sát, concept và hồ sơ kỹ thuật đến thi công và hoàn thiện."
          align="left"
        />
        <div className="space-y-4">
          {project.timeline.map((item, index) => (
            <article
              key={item.phase}
              className="rounded-[2rem] border border-black/8 bg-[rgba(255,255,255,0.34)] p-6"
            >
              <div className="flex items-center justify-between gap-4">
                <span className="text-[0.66rem] uppercase tracking-[0.24em] text-[var(--color-muted)]">
                  0{index + 1}
                </span>
                <span className="text-sm text-[var(--color-muted)]">{item.duration}</span>
              </div>
              <h2 className="mt-4 font-serif text-3xl text-[var(--color-charcoal)]">
                {item.phase}
              </h2>
              <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">
                {item.details}
              </p>
            </article>
          ))}
        </div>
      </section>

      <RelatedProjects projects={relatedProjects} />

      <section
        id="lead"
        className="section-shell grid gap-8 pb-24 pt-6 lg:grid-cols-[1.05fr_0.95fr]"
      >
        <ContactCta />
        <ConsultationForm />
      </section>
    </article>
  );
}
