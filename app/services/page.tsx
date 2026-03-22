import type { Metadata } from "next";
import Image from "next/image";
import { ConsultationForm } from "@/components/consultation-form";
import { ContactCta } from "@/components/contact-cta";
import { FaqList } from "@/components/faq-list";
import { ProcessSection } from "@/components/process-section";
import { SectionHeading } from "@/components/section-heading";
import { processSteps } from "@/data/site";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "Dịch vụ",
  description:
    "Dịch vụ nội thất cao cấp được trình bày như một hệ tư vấn chiến lược: rõ lợi ích, rõ deliverables, rõ cách triển khai.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="section-shell section-pad">
        <div className="grid gap-8 lg:grid-cols-[0.88fr_1.12fr]">
          <SectionHeading
            eyebrow="Tailored services"
            title="Dịch vụ được thiết kế như một hệ giải pháp, không phải một bảng liệt kê hạng mục."
            description="Mỗi phạm vi làm việc đều được mô tả theo giá trị thật với khách hàng: giải quyết điều gì, phù hợp khi nào và tạo ra đầu ra gì."
            align="left"
          />
          <div className="grid gap-5">
            {services.map((service) => (
              <article
                key={service.slug}
                className="luxury-card grid gap-5 overflow-hidden rounded-[2rem] p-4 md:grid-cols-[0.72fr_1.28fr] md:p-5"
              >
                <div className="relative min-h-[15rem] overflow-hidden rounded-[1.7rem]">
                  <Image
                    src={service.image}
                    alt={service.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 30vw"
                    className="object-cover"
                  />
                </div>
                <div className="space-y-5">
                  <div>
                    <p className="text-[0.66rem] uppercase tracking-[0.24em] text-[var(--color-muted)]">
                      {service.slug.replaceAll("-", " ")}
                    </p>
                    <h2 className="mt-3 font-serif text-4xl leading-none text-[var(--color-charcoal)]">
                      {service.name}
                    </h2>
                    <p className="mt-4 text-sm leading-7 text-[var(--color-muted)]">
                      {service.description}
                    </p>
                  </div>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div>
                      <p className="text-[0.66rem] uppercase tracking-[0.22em] text-[var(--color-muted)]">
                        Deliverables
                      </p>
                      <ul className="mt-3 space-y-2 text-sm leading-7 text-[var(--color-charcoal)]">
                        {service.deliverables.map((item) => (
                          <li key={item} className="flex gap-3">
                            <span className="mt-2 h-2 w-2 rounded-full bg-[var(--color-gold)]" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="text-[0.66rem] uppercase tracking-[0.22em] text-[var(--color-muted)]">
                        Phù hợp cho
                      </p>
                      <ul className="mt-3 space-y-2 text-sm leading-7 text-[var(--color-charcoal)]">
                        {service.suitedFor.map((item) => (
                          <li key={item} className="flex gap-3">
                            <span className="mt-2 h-2 w-2 rounded-full bg-[var(--color-walnut)]" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <ProcessSection steps={processSteps} />

      <FaqList
        eyebrow="FAQ"
        title="Những câu hỏi phổ biến khi khách hàng cân nhắc phạm vi dịch vụ."
        description="Các câu trả lời ngắn để giúp bạn hiểu cách studio tiếp cận từng mức độ triển khai."
        items={services.flatMap((service) => service.faqs)}
      />

      <section className="section-shell grid gap-8 pb-24 pt-6 lg:grid-cols-[1.08fr_0.92fr]">
        <ContactCta />
        <ConsultationForm />
      </section>
    </>
  );
}
