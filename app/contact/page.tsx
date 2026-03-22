import type { Metadata } from "next";
import { ConsultationForm } from "@/components/consultation-form";
import { FaqList } from "@/components/faq-list";
import { SectionHeading } from "@/components/section-heading";
import { consultationFaqs, contactDetails } from "@/data/site";

export const metadata: Metadata = {
  title: "Liên hệ",
  description:
    "Trang tư vấn được tinh chỉnh để người dùng cảm thấy dễ điền, dễ tin và dễ để lại thông tin hơn.",
};

export default function ContactPage() {
  return (
    <>
      <section className="section-shell section-pad page-safe-top grid gap-8 lg:grid-cols-[0.76fr_1.24fr]">
        <div className="space-y-8">
          <SectionHeading
            eyebrow="Private showroom booking"
            title="Một luồng tư vấn nên khiến khách hàng cảm thấy nhẹ, rõ và đáng để để lại thông tin."
            description="Giới thiệu, trust cue và form được tách nhịp rõ để trải nghiệm điền brief dễ thở."
            align="left"
          />

          <div className="grid gap-4">
            {contactDetails.slice(0, 3).map((item, index) => (
              <div
                key={item.label}
                className={index === 0 ? "luxury-card rounded-[1.8rem] p-5" : "surface-soft rounded-[1.8rem] p-5"}
              >
                <p className="section-kicker">{item.label}</p>
                <p className="mt-3 text-base leading-7 text-[var(--color-charcoal)]">
                  {item.value}
                </p>
              </div>
            ))}
          </div>

          <div className="surface-soft rounded-[1.8rem] p-6">
            <p className="section-kicker">Trust cues</p>
            <ul className="mt-4 space-y-2 text-sm leading-6 text-[var(--color-muted)]">
              <li>Phản hồi sơ bộ trong vòng 24 giờ làm việc.</li>
              <li>Tư vấn theo diện tích, timeline và ngân sách thực tế.</li>
              <li>Ưu tiên lịch hẹn riêng tại showroom hoặc online nếu ở xa.</li>
            </ul>
          </div>

          <div className="luxury-card rounded-[1.8rem] p-6">
            <p className="section-kicker">Buổi hẹn đầu tiên</p>
            <p className="mt-3 text-sm leading-6 text-[var(--color-muted)]">
              Thường kéo dài 45 đến 60 phút, tập trung vào nhu cầu sống, timeline bàn giao và phạm vi công việc thực tế.
            </p>
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
