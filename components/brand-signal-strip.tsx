import Link from "next/link";

export function BrandSignalStrip() {
  return (
    <section className="section-shell -mt-8 relative z-20">
      <div className="grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
        <article className="luxury-card rounded-[2rem] p-6 md:p-7">
          <p className="section-kicker">Private showroom appointment</p>
          <h2 className="mt-4 max-w-2xl font-serif text-[2.8rem] leading-[0.98] text-[var(--color-charcoal)]">
            Một buổi hẹn riêng, được chuẩn bị theo diện tích, gu sống và mức đầu tư của bạn.
          </h2>
          <p className="mt-4 max-w-xl text-sm leading-7 text-[var(--color-muted)]">
            Cuộc hẹn đầu tiên đi thẳng vào nhu cầu sống, mức hoàn thiện và timeline thực tế.
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

        <article className="rounded-[2rem] border border-black/8 bg-[rgba(255,252,248,0.56)] p-6 md:p-7">
          <p className="section-kicker">Craft-driven execution</p>
          <h2 className="mt-4 max-w-xl font-serif text-[2.4rem] leading-[1] text-[var(--color-charcoal)]">
            Thiết kế chỉ thật sự có giá trị khi được thi công đúng tinh thần ban đầu.
          </h2>
          <p className="mt-4 max-w-md text-sm leading-7 text-[var(--color-muted)]">
            Từ hồ sơ, xưởng đến công trình, mọi mắt xích được giữ cùng một ngôn ngữ.
          </p>
        </article>
      </div>
    </section>
  );
}
