import Link from "next/link";
import { siteConfig } from "@/data/site";

export function ContactCta() {
  return (
    <div className="rounded-[2.4rem] bg-[var(--color-charcoal)] p-8 text-[var(--color-cream)] shadow-[0_28px_80px_rgba(22,18,14,0.16)]">
      <span className="eyebrow border-white/12 bg-white/8 text-white">
        Private showroom experience
      </span>
      <h2 className="mt-6 font-serif text-5xl leading-none">
        Đặt một cuộc hẹn được chuẩn bị riêng cho không gian của bạn.
      </h2>
      <p className="mt-5 max-w-xl text-base leading-8 text-white/72">
        Chúng tôi ưu tiên những buổi tư vấn sâu, nơi khách hàng có thể xem vật
        liệu, thảo luận ngân sách và nhận định hướng concept phù hợp với nhịp
        sống thực tế.
      </p>
      <div className="mt-8 grid gap-4 md:grid-cols-2">
        <div className="rounded-[1.6rem] border border-white/10 bg-white/8 p-5">
          <p className="text-[0.68rem] uppercase tracking-[0.24em] text-white/54">
            Hotline
          </p>
          <p className="mt-3 text-lg">{siteConfig.phone}</p>
        </div>
        <div className="rounded-[1.6rem] border border-white/10 bg-white/8 p-5">
          <p className="text-[0.68rem] uppercase tracking-[0.24em] text-white/54">
            Showroom
          </p>
          <p className="mt-3 text-lg">{siteConfig.showroom}</p>
        </div>
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
