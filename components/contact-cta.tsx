import Link from "next/link";
import { siteConfig } from "@/data/site";

export function ContactCta() {
  return (
    <div className="rounded-[2.4rem] bg-[var(--color-charcoal)] p-7 text-[var(--color-cream)] shadow-[0_28px_80px_rgba(22,18,14,0.16)] md:p-8">
      <span className="eyebrow border-white/12 bg-white/8 text-white">
        Private showroom experience
      </span>
      <h2 className="mt-6 font-serif text-[clamp(3rem,5vw,5rem)] leading-[0.95]">
        Đặt một cuộc hẹn riêng cho không gian của bạn.
      </h2>
      <p className="mt-5 max-w-md text-[0.95rem] leading-6 text-white/74">
        Buổi làm việc đầu tiên giúp bạn nhìn rõ hướng đi và mức đầu tư phù hợp.
      </p>

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        <div className="rounded-[1.6rem] border border-white/10 bg-white/8 p-5">
          <p className="section-kicker !text-white/54">Hotline</p>
          <p className="mt-3 text-lg">{siteConfig.phone}</p>
        </div>
        <div className="rounded-[1.6rem] border border-white/10 bg-white/8 p-5">
          <p className="section-kicker !text-white/54">Showroom</p>
          <p className="mt-3 text-lg">{siteConfig.showroom}</p>
        </div>
      </div>

      <div className="mt-6 rounded-[1.6rem] border border-white/10 bg-white/6 p-5 text-sm leading-6 text-white/68">
        Phản hồi sơ bộ trong vòng 24 giờ làm việc.
      </div>

      <div className="mt-8 flex flex-wrap gap-4">
        <Link href="/contact" className="button-primary">
          Đặt lịch ngay
        </Link>
        <Link
          href="/services"
          className="button-secondary border-white/16 bg-white/10 text-white hover:bg-white/14"
        >
          Xem dịch vụ
        </Link>
      </div>
    </div>
  );
}
