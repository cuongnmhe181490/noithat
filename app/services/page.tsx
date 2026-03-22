import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ConsultationForm } from "@/components/consultation-form";
import { ContactCta } from "@/components/contact-cta";
import { FaqList } from "@/components/faq-list";
import { SectionHeading } from "@/components/section-heading";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "Dịch vụ",
  description:
    "Trang dịch vụ được cân lại theo hướng tư vấn cao cấp: ít brochure hơn, rõ tình huống sử dụng hơn, và rõ bước tiếp theo hơn.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="section-shell section-pad">
        <div className="grid gap-10 lg:grid-cols-[0.86fr_1.14fr]">
          <SectionHeading
            eyebrow="Tailored services"
            title="Mỗi dịch vụ là một cách tiếp cận khác nhau cho cùng một mục tiêu: tạo ra không gian sống đúng gu và triển khai được đến cùng."
            description="Giúp người dùng hiểu rất nhanh đâu là lối vào phù hợp với mình."
            align="left"
          />
          <div className="rounded-[2rem] border border-black/8 bg-[rgba(255,255,255,0.3)] p-6">
            <p className="section-kicker">Decision helper</p>
            <div className="mt-4 grid gap-4 md:grid-cols-3">
              <div>
                <p className="text-sm font-medium text-[var(--color-charcoal)]">Chưa rõ hướng đi</p>
                <p className="mt-2 text-sm leading-7 text-[var(--color-muted)]">
                  Bắt đầu bằng tư vấn concept để khóa gu thẩm mỹ và mức đầu tư.
                </p>
              </div>
              <div>
                <p className="text-sm font-medium text-[var(--color-charcoal)]">Đã có mặt bằng</p>
                <p className="mt-2 text-sm leading-7 text-[var(--color-muted)]">
                  Đi thẳng vào thiết kế trọn gói để kiểm soát công năng, ánh sáng và hồ sơ.
                </p>
              </div>
              <div>
                <p className="text-sm font-medium text-[var(--color-charcoal)]">Cần một đầu mối rõ</p>
                <p className="mt-2 text-sm leading-7 text-[var(--color-muted)]">
                  Chọn thi công trọn gói hoặc bespoke để giữ chất lượng đến lớp hoàn thiện cuối.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-14 grid gap-14">
          {services.map((service, index) => (
            <article
              key={service.slug}
              className="grid gap-8 lg:grid-cols-[0.5fr_0.5fr] lg:items-center"
            >
              <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                <div className="relative min-h-[26rem] overflow-hidden rounded-[2.2rem] shadow-[0_24px_70px_rgba(22,18,14,0.1)]">
                  <Image
                    src={service.image}
                    alt={service.name}
                    fill
                    sizes="(max-width: 1024px) 100vw, 44vw"
                    className="object-cover"
                  />
                </div>
              </div>

              <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                <p className="section-kicker">{service.slug.replaceAll("-", " ")}</p>
                <h2 className="mt-4 max-w-2xl text-[2rem] font-medium leading-[1.04] tracking-[-0.025em] text-[var(--color-charcoal)] md:text-[2.35rem]">
                  {service.name}
                </h2>
                <p className="mt-4 max-w-lg text-sm leading-6 text-[var(--color-muted)]">
                  {service.summary}
                </p>

                <div className="mt-8 grid gap-4 md:grid-cols-3">
                  <div className="surface-soft rounded-[1.6rem] p-5">
                    <p className="section-kicker">Ai nên chọn</p>
                    <ul className="mt-3 space-y-2 text-sm leading-7 text-[var(--color-charcoal)]">
                      {service.suitedFor.slice(0, 2).map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="luxury-card rounded-[1.6rem] p-5">
                    <p className="section-kicker">Nhận được gì</p>
                    <ul className="mt-3 space-y-2 text-sm leading-7 text-[var(--color-charcoal)]">
                      {service.deliverables.slice(0, 2).map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="surface-soft rounded-[1.6rem] p-5">
                    <p className="section-kicker">Bước tiếp theo</p>
                    <p className="mt-3 text-sm leading-7 text-[var(--color-charcoal)]">
                      Gửi brief công trình để studio đề xuất buổi làm việc đầu tiên phù hợp.
                    </p>
                  </div>
                </div>

                <div className="mt-7 flex flex-wrap gap-3">
                  <Link href="/contact" className="button-primary">
                    Nhận tư vấn cho dịch vụ này
                  </Link>
                  <Link href="/projects" className="button-secondary">
                    Xem dự án liên quan
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <FaqList
        eyebrow="FAQ"
        title="Những câu hỏi phổ biến khi khách hàng cân nhắc phạm vi dịch vụ."
        description="Các câu trả lời ngắn để giúp bạn hiểu cách studio tiếp cận từng mức độ triển khai."
        items={services.flatMap((service) => service.faqs)}
      />

      <section className="section-shell grid gap-8 pb-24 pt-6 lg:grid-cols-[1.05fr_0.95fr]">
        <ContactCta />
        <ConsultationForm />
      </section>
    </>
  );
}
