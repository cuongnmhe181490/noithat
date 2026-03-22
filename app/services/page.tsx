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
        <div className="max-w-4xl">
          <SectionHeading
            eyebrow="Tailored services"
            title="Mỗi dịch vụ nên giúp khách hàng hiểu rất nhanh khi nào nó phù hợp và họ sẽ nhận được điều gì."
            description="Thay vì lặp một cấu trúc block giống nhau, chúng tôi trình bày dịch vụ như các điểm vào khác nhau cho cùng một hệ tư vấn cao cấp."
            align="left"
          />
        </div>

        <div className="mt-12 grid gap-8">
          {services.map((service, index) => (
            <article
              key={service.slug}
              className="luxury-card grid gap-6 overflow-hidden p-4 md:p-5 lg:grid-cols-[0.52fr_0.48fr]"
            >
              <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                <div className="relative min-h-[20rem] overflow-hidden rounded-[1.8rem]">
                  <Image
                    src={service.image}
                    alt={service.name}
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover"
                  />
                </div>
              </div>
              <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                <p className="section-kicker">{service.slug.replaceAll("-", " ")}</p>
                <h2 className="mt-4 font-serif text-[3rem] leading-none text-[var(--color-charcoal)]">
                  {service.name}
                </h2>
                <p className="mt-4 max-w-xl text-sm leading-8 text-[var(--color-muted)]">
                  {service.description}
                </p>

                <div className="mt-6 grid gap-4 md:grid-cols-3">
                  <div>
                    <p className="section-kicker">Khi nào nên chọn</p>
                    <ul className="mt-3 space-y-2 text-sm leading-7 text-[var(--color-charcoal)]">
                      {service.suitedFor.slice(0, 2).map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="section-kicker">Bạn nhận được</p>
                    <ul className="mt-3 space-y-2 text-sm leading-7 text-[var(--color-charcoal)]">
                      {service.deliverables.slice(0, 2).map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="section-kicker">Kết quả</p>
                    <ul className="mt-3 space-y-2 text-sm leading-7 text-[var(--color-charcoal)]">
                      {service.outcomes.slice(0, 2).map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
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

      <section className="section-shell grid gap-8 pb-24 pt-6 lg:grid-cols-[1.08fr_0.92fr]">
        <ContactCta />
        <ConsultationForm />
      </section>
    </>
  );
}
