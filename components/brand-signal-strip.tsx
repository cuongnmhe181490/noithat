import Link from "next/link";

export function BrandSignalStrip() {
  return (
    <section className="section-shell -mt-10 relative z-20">
      <div className="grid gap-4 lg:grid-cols-[1.15fr_0.85fr]">
        <article className="luxury-card rounded-[2rem] p-6 md:p-7">
          <p className="section-kicker">Private showroom appointment</p>
          <h2 className="mt-4 font-serif text-4xl leading-none text-[var(--color-charcoal)]">
            Một buổi hẹn riêng, được chuẩn bị theo diện tích, gu sống và mức đầu tư của bạn.
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-[var(--color-muted)]">
            Khách hàng không cần đi qua một form vô cảm. Mục tiêu của chúng tôi là
            biến cuộc hẹn đầu tiên thành điểm khởi đầu rõ ràng cho một dự án thực tế.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/contact" className="button-primary">
              Đặt lịch showroom
            </Link>
            <Link href="/projects" className="button-secondary">
              Xem case study
            </Link>
          </div>
        </article>

        <article className="luxury-card rounded-[2rem] p-6 md:p-7">
          <p className="section-kicker">Craft-driven execution</p>
          <h2 className="mt-4 font-serif text-4xl leading-none text-[var(--color-charcoal)]">
            Thiết kế đẹp chỉ có giá trị khi được hiện thực đúng.
          </h2>
          <p className="mt-4 text-sm leading-7 text-[var(--color-muted)]">
            Từ hồ sơ, xưởng đến công trình, toàn bộ quá trình được kiểm soát như
            một chuỗi thực thi đồng nhất thay vì nhiều mắt xích rời rạc.
          </p>
        </article>
      </div>
    </section>
  );
}
