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
    <section className="pb-24 pt-20">
      <div className="section-shell luxury-frame grain-overlay relative min-h-[34rem] overflow-hidden rounded-[2.8rem]">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1800&q=80')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(12,10,8,0.2)_0%,rgba(12,10,8,0.58)_48%,rgba(12,10,8,0.86)_100%)]" />
        <div className="relative flex min-h-[34rem] flex-col justify-end px-6 pb-8 pt-24 text-[var(--color-ivory)] md:px-10 md:pb-10">
          <span className="eyebrow border-white/16 bg-white/10 text-white">
            Portfolio showroom
          </span>
          <h1 className="mt-6 max-w-5xl font-serif text-5xl leading-none md:text-7xl">
            Duyệt dự án như đang bước qua một gallery nội thất cao cấp.
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-8 text-white/74 md:text-lg">
            Tìm nhanh case study phù hợp theo loại công trình, phong cách, diện
            tích hoặc khu vực trước khi đặt lịch tư vấn riêng.
          </p>
          <div className="mt-8 grid gap-4 md:grid-cols-4">
            {stats.map((item) => (
              <div
                key={item.label}
                className="rounded-[1.6rem] border border-white/10 bg-white/8 p-4"
              >
                <p className="font-serif text-3xl">{item.value}</p>
                <p className="mt-2 text-[0.66rem] uppercase tracking-[0.24em] text-white/54">
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
        description="Mỗi card được thiết kế như một lối vào ngắn tới case study đầy đủ, đủ thông tin để khách hàng cao cấp tự lọc trước khi liên hệ."
        projects={projects}
      />
    </section>
  );
}
