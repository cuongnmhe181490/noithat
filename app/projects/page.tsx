import type { Metadata } from "next";
import { ProjectsShowcase } from "@/components/projects-showcase";
import { projects } from "@/data/projects";
import { stats } from "@/data/site";

export const metadata: Metadata = {
  title: "Dự án",
  description:
    "Danh mục dự án nội thất cao cấp được trình bày như một gallery triển lãm, cho phép lọc theo loại công trình, phong cách, diện tích và nhu cầu sống.",
};

export default function ProjectsPage() {
  return (
    <section className="page-safe-top pb-24">
      <div data-header-hero="true" className="section-shell luxury-frame grain-overlay relative min-h-[34rem] overflow-hidden rounded-[2.8rem]">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1800&q=80')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(12,10,8,0.18)_0%,rgba(12,10,8,0.5)_42%,rgba(12,10,8,0.84)_100%)]" />
        <div className="hero-safe-top relative flex min-h-[34rem] flex-col justify-end px-6 pb-8 text-[var(--color-ivory)] md:px-10 md:pb-10">
          <span className="eyebrow border-white/16 bg-white/10 text-white">
            Portfolio showroom
          </span>
          <h1 className="mt-6 max-w-5xl font-serif text-5xl leading-none md:text-7xl">
            Duyệt dự án như đang bước qua một gallery nội thất cao cấp.
          </h1>
          <p className="mt-5 max-w-xl text-[0.98rem] leading-7 text-white/78 md:text-[1.03rem]">
            Tìm nhanh case study phù hợp theo loại công trình, phong cách, diện tích hoặc khu vực.
          </p>
          <div className="mt-8 grid max-w-3xl gap-5 border-t border-white/12 pt-6 md:grid-cols-3">
            {stats.slice(0, 3).map((item) => (
              <div key={item.label}>
                <p className="font-serif text-4xl">{item.value}</p>
                <p className="mt-2 text-[0.66rem] uppercase tracking-[0.24em] text-white/56">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <ProjectsShowcase
        title="Tất cả dự án"
        eyebrow="Duyệt theo nhu cầu"
        description="Mỗi card chỉ giữ lượng text vừa đủ để khách hàng lọc nhanh."
        projects={projects}
      />
    </section>
  );
}
