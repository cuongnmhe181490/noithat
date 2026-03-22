"use client";

import Link from "next/link";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { siteConfig, stats } from "@/data/site";

export function HeroSection() {
  const ref = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const mediaY = useTransform(scrollYProgress, [0, 1], [0, 110]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 34]);

  return (
    <section
      ref={ref}
      className="relative min-h-[98svh] overflow-hidden bg-[var(--color-charcoal)] text-[var(--color-ivory)]"
    >
      <div className="absolute inset-0">
        <motion.div
          style={{ y: mediaY }}
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1800&q=80')] bg-cover bg-center opacity-92"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(14,12,10,0.4)_0%,rgba(14,12,10,0.56)_34%,rgba(14,12,10,0.9)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.12),transparent_20%),radial-gradient(circle_at_bottom_right,rgba(176,140,100,0.14),transparent_18%)]" />
      </div>

      <div className="section-shell relative flex min-h-[98svh] items-end pb-16 pt-28 lg:pb-20">
        <motion.div style={{ y: contentY }} className="max-w-4xl">
          <span className="eyebrow border-white/16 bg-white/10 text-white">
            {siteConfig.tagline}
          </span>
          <div className="mt-8 space-y-5">
            <h1 className="display-title max-w-4xl">
              Không gian cao cấp
              <br />
              được cảm nhận như một tác phẩm sống.
            </h1>
            <p className="max-w-xl text-base leading-8 text-white/78 md:text-lg">
              Digital flagship showroom dành cho những khách hàng đang tìm một
              trải nghiệm nội thất có gu, có chiều sâu vật liệu và đủ năng lực
              để đi từ concept đến bàn giao cuối cùng.
            </p>
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            <Link href="/projects" className="button-primary">
              Xem dự án
            </Link>
            <Link
              href="/contact"
              className="button-secondary border-white/16 bg-white/10 text-white hover:bg-white/14"
            >
              Đặt lịch showroom
            </Link>
          </div>

          <div className="mt-14 grid max-w-4xl gap-4 md:grid-cols-3">
            {stats.slice(0, 3).map((item) => (
              <div
                key={item.label}
                className="rounded-[1.65rem] border border-white/10 bg-white/6 p-5 backdrop-blur-md"
              >
                <p className="font-serif text-4xl">{item.value}</p>
                <p className="mt-2 text-[0.7rem] uppercase tracking-[0.28em] text-white/54">
                  {item.label}
                </p>
                <p className="mt-3 text-sm leading-7 text-white/70">{item.detail}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
