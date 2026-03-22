import type { Metadata } from "next";
import { ConsultationForm } from "@/components/consultation-form";
import { FaqList } from "@/components/faq-list";
import { SectionHeading } from "@/components/section-heading";
import { consultationFaqs, contactDetails } from "@/data/site";

export const metadata: Metadata = {
  title: "Liên hệ",
  description:
    "Đặt lịch tư vấn nội thất cao cấp, tham quan showroom theo lịch hẹn và nhận định hướng concept phù hợp với diện tích và mức đầu tư của bạn.",
};

export default function ContactPage() {
  return (
    <>
      <section className="section-shell grid gap-8 pb-16 pt-28 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="space-y-8">
          <SectionHeading
            eyebrow="Private showroom booking"
            title="Một cuộc hẹn đủ chiều sâu để chúng tôi hiểu đúng bài toán sống của bạn."
            description="Thay vì hỏi thông tin hời hợt, chúng tôi ưu tiên một brief đủ rõ về diện tích, mức đầu tư và gu thẩm mỹ để buổi tư vấn đầu tiên thật sự có giá trị."
            align="left"
          />
          <div className="grid gap-4">
            {contactDetails.map((item) => (
              <div key={item.label} className="luxury-card rounded-[1.8rem] p-5">
                <p className="text-xs uppercase tracking-[0.24em] text-[var(--color-muted)]">
                  {item.label}
                </p>
                <p className="mt-3 text-base leading-7 text-[var(--color-charcoal)]">
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </div>
        <ConsultationForm />
      </section>

      <FaqList
        eyebrow="Consultation FAQ"
        title="Một vài điều khách hàng thường muốn làm rõ trước khi đặt lịch."
        description="Những câu trả lời ngắn, đủ để bạn hiểu cách studio làm việc trước khi để lại thông tin."
        items={consultationFaqs}
      />
    </>
  );
}
