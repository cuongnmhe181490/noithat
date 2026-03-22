"use client";

import Link from "next/link";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { siteConfig, stats } from "@/data/site";
import { MediaFrame } from "@/components/ui/media-frame";

export function HeroSection() {
  const ref = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const mediaY = useTransform(scrollYProgress, [0, 1], [0, 90]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 24]);

  return (
    <section ref={ref} className="relative min-h-screen overflow-hidden bg-[var(--color-charcoal)] text-[var(--color-cream)]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.12),transparent_28%),linear-gradient(180deg,rgba(17,15,13,0.2),rgba(17,15,13,0.62))]" />
      <div className="section-shell relative grid min-h-screen items-end gap-10 pb-14 pt-28 lg:grid-cols-[0.9fr_1.1fr] lg:pb-16">
        <motion.div style={{ y: contentY }} className="z-10 max-w-2xl space-y-8">
          <span className="eyebrow border-white/16 bg-white/8 text-white">
            {siteConfig.tagline}
          </span>
          <div className="space-y-5">
            <h1 className="font-serif text-5xl leading-none md:text-7xl">
              Showroom số cho những không gian sống mang đẳng cấp riêng.
            </h1>
            <p className="max-w-xl text-base leading-8 text-white/72 md:text-lg">
              Từ penthouse, nhà phố đến biệt thự và văn phòng thương hiệu, chúng
              tôi tạo nên trải nghiệm nội thất cao cấp bằng tỷ lệ, vật liệu và
              cảm xúc được biên tập kỹ lưỡng.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <Link href="/projects" className="button-primary">
              Xem dự án
            </Link>
            <Link
              href="/contact"
              className="button-secondary border-white/16 bg-white/10 text-white hover:bg-white/14"
            >
              Nhận tư vấn
            </Link>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            {stats.slice(0, 3).map((item) => (
              <div
                key={item.label}
                className="rounded-[1.6rem] border border-white/12 bg-white/8 p-5 backdrop-blur-md"
              >
                <p className="font-serif text-3xl">{item.value}</p>
                <p className="mt-2 text-[0.7rem] uppercase tracking-[0.28em] text-white/58">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div style={{ y: mediaY }} className="relative">
          <MediaFrame
            src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1800&q=80"
            alt="Không gian nội thất cao cấp"
            priority
            ratioClassName="aspect-[5/6] min-h-[34rem] lg:min-h-[46rem]"
            imageClassName="scale-[1.03]"
            badge={
              <div className="rounded-full border border-white/16 bg-black/16 px-4 py-2 text-[0.68rem] uppercase tracking-[0.3em] text-white">
                Premium flagship
              </div>
            }
            caption={
              <div className="space-y-3">
                <p className="max-w-sm text-base leading-7 text-white/82">
                  “Sự sang trọng không đến từ việc thêm nhiều hơn, mà đến từ
                  việc giữ lại đúng những gì cần thiết.”
                </p>
                <p className="text-[0.68rem] uppercase tracking-[0.28em] text-white/56">
                  Signature editorial living
                </p>
              </div>
            }
          />
        </motion.div>
      </div>
    </section>
  );
}
