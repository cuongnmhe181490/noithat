import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { BeforeAfterSlider } from "@/components/before-after-slider";
import { ContactCta } from "@/components/contact-cta";
import { ConsultationForm } from "@/components/consultation-form";
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
    return {
      title: "Dự án không tồn tại",
    };
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

  return (
    <article className="pb-24 pt-24">
      <section className="relative h-[86vh] min-h-[38rem] overflow-hidden">
        <Image
          src={project.heroImage}
          alt={project.name}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-black/30 to-[rgba(17,15,13,0.82)]" />
        <div className="section-shell relative flex h-full flex-col justify-end pb-14 text-[var(--color-cream)] md:pb-18">
          <span className="eyebrow border-white/20 bg-white/10 text-white">
            {project.type}
          </span>
          <h1 className="mt-6 max-w-5xl font-serif text-5xl leading-none md:text-7xl">
            {project.name}
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-white/76 md:text-lg">
            {project.summary}
          </p>
        </div>
      </section>

      <section className="section-shell grid gap-6 py-14 md:grid-cols-2 xl:grid-cols-4">
        {[
          ["Loại công trình", project.type],
          ["Diện tích", project.area],
          ["Phong cách", project.style],
          ["Địa điểm", project.location],
        ].map(([label, value]) => (
          <div
            key={label}
            className="rounded-[2rem] border border-black/8 bg-white/70 p-6 backdrop-blur"
          >
            <p className="text-xs uppercase tracking-[0.26em] text-[var(--color-muted)]">
              {label}
            </p>
            <p className="mt-3 text-lg font-medium text-[var(--color-charcoal)]">
              {value}
            </p>
          </div>
        ))}
      </section>

      <section className="section-shell grid gap-8 py-8 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="space-y-5">
          <SectionHeading
            eyebrow="Concept"
            title="Tinh thần thiết kế"
            description={project.concept}
            align="left"
          />
          <div className="space-y-4 rounded-[2rem] border border-black/8 bg-[var(--color-panel)] p-7">
            <p className="text-xs uppercase tracking-[0.22em] text-[var(--color-muted)]">
              Vật liệu chủ đạo
            </p>
            <ul className="space-y-3 text-sm leading-7 text-[var(--color-muted)]">
              {project.materials.map((material) => (
                <li
                  key={material}
                  className="flex items-center gap-3 border-b border-black/6 pb-3 last:border-0 last:pb-0"
                >
                  <span className="h-2 w-2 rounded-full bg-[var(--color-gold)]" />
                  {material}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {project.gallery.slice(0, 4).map((image, index) => (
            <div
              key={image}
              className={`relative overflow-hidden rounded-[2rem] ${
                index === 0 ? "md:col-span-2 md:h-[28rem]" : "h-[18rem]"
              }`}
            >
              <Image
                src={image}
                alt={`${project.name} ${index + 1}`}
                fill
                loading="lazy"
                className="object-cover transition duration-700 hover:scale-[1.03]"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          ))}
        </div>
      </section>

      <section className="section-shell py-8">
        <BeforeAfterSlider
          beforeImage={project.beforeAfter.before}
          afterImage={project.beforeAfter.after}
          beforeLabel="Hiện trạng"
          afterLabel="Sau hoàn thiện"
          title="Biến chuyển không gian bằng tỷ lệ, vật liệu và ánh sáng."
          description="Một góc nhìn trực quan để cảm nhận mức độ thay đổi sau khi concept được hiện thực hóa."
        />
      </section>

      <section className="section-shell py-10">
        <SectionHeading
          eyebrow="Gallery"
          title="Khoảnh khắc hoàn thiện"
          description="Bộ hình toàn màn hình được lựa chọn để kể lại hành trình từ chất liệu thô đến không gian sống có chiều sâu."
        />
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {project.gallery.map((image, index) => (
            <div
              key={`${image}-${index}`}
              className={`relative overflow-hidden rounded-[2rem] ${
                index % 3 === 0 ? "md:col-span-2 h-[32rem]" : "h-[20rem]"
              }`}
            >
              <Image
                src={image}
                alt={`${project.name} gallery ${index + 1}`}
                fill
                loading="lazy"
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          ))}
        </div>
      </section>

      <section className="section-shell grid gap-8 py-14 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <SectionHeading
            eyebrow="Timeline"
            title="Tiến độ triển khai"
            description="Mỗi giai đoạn được kiểm soát chặt để đảm bảo chất lượng hoàn thiện đồng nhất với concept đã duyệt."
            align="left"
          />
        </div>
        <div className="space-y-4">
          {project.timeline.map((item, index) => (
            <div
              key={item.phase}
              className="rounded-[2rem] border border-black/8 bg-white/80 p-6"
            >
              <div className="flex items-center justify-between gap-4">
                <span className="text-xs uppercase tracking-[0.24em] text-[var(--color-muted)]">
                  0{index + 1}
                </span>
                <span className="text-sm text-[var(--color-muted)]">
                  {item.duration}
                </span>
              </div>
              <h2 className="mt-4 font-serif text-3xl text-[var(--color-charcoal)]">
                {item.phase}
              </h2>
              <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">
                {item.details}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-shell grid gap-8 pb-10 pt-4 lg:grid-cols-[1.1fr_0.9fr]">
        <ContactCta />
        <ConsultationForm />
      </section>
    </article>
  );
}
