import type { Metadata } from "next";
import { ProjectsShowcase } from "@/components/projects-showcase";
import { projectCategories, projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Dự án",
  description:
    "Danh mục dự án nội thất cao cấp từ căn hộ, nhà phố đến biệt thự và văn phòng, được tuyển chọn theo phong cách sống đương đại.",
};

export default function ProjectsPage() {
  return (
    <section className="pb-24 pt-32">
      <div className="section-shell mb-12 max-w-4xl">
        <span className="eyebrow">Portfolio showroom</span>
        <h1 className="mt-5 font-serif text-5xl leading-none text-[var(--color-charcoal)] md:text-7xl">
          Không gian được tuyển chọn cho những tiêu chuẩn sống khác biệt.
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-7 text-[var(--color-muted)] md:text-lg">
          Bộ sưu tập dự án được sắp xếp để khách hàng có thể lọc nhanh theo
          loại công trình, phong cách và diện tích trước khi đặt lịch tư vấn.
        </p>
      </div>
      <ProjectsShowcase
        title="Toàn bộ dự án"
        eyebrow="Duyệt theo nhu cầu"
        description="Chạm vào từng không gian để xem câu chuyện concept, vật liệu và tiến độ triển khai chi tiết."
        projects={projects}
        categories={projectCategories}
      />
    </section>
  );
}
