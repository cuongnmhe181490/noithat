import type { Metadata } from "next";
import { ConsultationForm } from "@/components/consultation-form";
import { SectionHeading } from "@/components/section-heading";
import { contactDetails } from "@/data/site";

export const metadata: Metadata = {
  title: "Liên hệ",
  description:
    "Đặt lịch tư vấn thiết kế nội thất cao cấp, xem showroom và nhận đề xuất concept phù hợp với không gian của bạn.",
};

export default function ContactPage() {
  return (
    <section className="section-shell grid gap-8 pb-24 pt-32 lg:grid-cols-[0.92fr_1.08fr]">
      <div className="space-y-8">
        <SectionHeading
          eyebrow="Book a consultation"
          title="Bắt đầu bằng một cuộc hẹn được chuẩn bị kỹ."
          description="Chúng tôi ưu tiên những buổi trao đổi có chiều sâu để hiểu đúng nhu cầu sống, mức đầu tư và gu thẩm mỹ trước khi đề xuất concept."
          align="left"
        />
        <div className="grid gap-4">
          {contactDetails.map((item) => (
            <div
              key={item.label}
              className="rounded-[1.8rem] border border-black/8 bg-white/74 p-5"
            >
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
  );
}
