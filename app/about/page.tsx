import type { Metadata } from "next";
import Image from "next/image";
import { MaterialCraftSection } from "@/components/material-craft-section";
import { SectionHeading } from "@/components/section-heading";
import { StatsSection } from "@/components/stats-section";
import { TrustSection } from "@/components/trust-section";
import { materialStories, stats, trustIndicators } from "@/data/site";

export const metadata: Metadata = {
  title: "Về chúng tôi",
  description:
    "Câu chuyện thương hiệu, tiêu chuẩn vật liệu và năng lực thực thi của Mộc Du Ký Atelier dưới góc nhìn flagship brand.",
};

export default function AboutPage() {
  return (
    <>
      <section className="section-shell section-pad grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="space-y-6">
          <SectionHeading
            eyebrow="Atelier profile"
            title="Chúng tôi thiết kế không gian như biên tập một cuốn tạp chí sống."
            description="Mộc Du Ký Atelier theo đuổi sự sang trọng có chiều sâu: giàu vật liệu, tiết chế thị giác và đủ năng lực để đi trọn từ concept đến công trình hoàn thiện."
            align="left"
          />
          <div className="grid gap-4 md:grid-cols-2">
            {[
              "Mô hình studio nhỏ giúp mỗi dự án được theo sát với độ tập trung cao.",
              "Xưởng sản xuất nội bộ hỗ trợ bespoke cho các chi tiết quan trọng.",
              "Không chạy theo xu hướng ngắn hạn; ưu tiên chất lượng sống dài hạn.",
              "Làm việc minh bạch theo giai đoạn, đầu ra và tiêu chuẩn hoàn thiện rõ ràng.",
            ].map((item) => (
              <div key={item} className="luxury-card rounded-[1.8rem] p-5 text-sm leading-7 text-[var(--color-muted)]">
                {item}
              </div>
            ))}
          </div>
        </div>
        <div className="luxury-frame relative min-h-[36rem] overflow-hidden rounded-[2.6rem]">
          <Image
            src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1600&q=80"
            alt="Không gian studio nội thất cao cấp"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
      </section>

      <StatsSection stats={stats} />
      <TrustSection items={trustIndicators} />
      <MaterialCraftSection materials={materialStories} />
    </>
  );
}
