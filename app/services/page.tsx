import type { Metadata } from "next";
import { ConsultationForm } from "@/components/consultation-form";
import { ContactCta } from "@/components/contact-cta";
import { ProcessSection } from "@/components/process-section";
import { SectionHeading } from "@/components/section-heading";
import { processSteps } from "@/data/site";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "Dịch vụ",
  description:
    "Thiết kế, thi công, sản xuất và giám sát hoàn thiện nội thất cao cấp với quy trình rõ ràng và khả năng cá nhân hóa sâu.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="section-shell pt-32">
        <div className="max-w-4xl">
          <span className="eyebrow">Tailored services</span>
          <h1 className="mt-5 font-serif text-5xl leading-none md:text-7xl">
            Giải pháp trọn vẹn cho những không gian đòi hỏi tiêu chuẩn hoàn thiện cao.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-7 text-[var(--color-muted)] md:text-lg">
            Từ định hình phong cách đến triển khai thi công và sản xuất tại
            xưởng, chúng tôi xây dựng hệ sinh thái đồng bộ để bảo toàn chất
            lượng từ bản vẽ đến thực tế.
          </p>
        </div>
        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          {services.map((service, index) => (
            <article
              key={service.slug}
              className="rounded-[2rem] border border-black/8 bg-white/78 p-7 backdrop-blur"
            >
              <span className="text-xs uppercase tracking-[0.24em] text-[var(--color-muted)]">
                0{index + 1}
              </span>
              <h2 className="mt-5 font-serif text-3xl text-[var(--color-charcoal)]">
                {service.name}
              </h2>
              <p className="mt-4 text-sm leading-7 text-[var(--color-muted)]">
                {service.summary}
              </p>
              <ul className="mt-6 space-y-3 text-sm leading-7 text-[var(--color-charcoal)]">
                {service.deliverables.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-[var(--color-gold)]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>
      <ProcessSection steps={processSteps} />
      <section className="section-shell grid gap-8 pb-24 pt-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <SectionHeading
            eyebrow="Chốt nhu cầu"
            title="Nhận cấu trúc dịch vụ phù hợp với ngân sách và mục tiêu sống."
            description="Cuộc hẹn đầu tiên tập trung vào nhu cầu sử dụng, gu thẩm mỹ, mức đầu tư và tiến độ bàn giao để kiến trúc sư đề xuất phạm vi triển khai phù hợp."
            align="left"
          />
          <ContactCta />
        </div>
        <ConsultationForm />
      </section>
    </>
  );
}
