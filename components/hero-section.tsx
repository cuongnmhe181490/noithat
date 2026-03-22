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
  const mediaY = useTransform(scrollYProgress, [0, 1], [0, 90]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 28]);

  return (
    <section
      ref={ref}
      className="relative min-h-[98svh] overflow-hidden bg-[var(--color-charcoal)] text-[var(--color-ivory)]"
    >
      <div className="absolute inset-0">
        <motion.div
          style={{ y: mediaY }}
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1800&q=80')] bg-cover bg-center opacity-90"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(14,12,10,0.46)_0%,rgba(14,12,10,0.62)_36%,rgba(14,12,10,0.9)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.08),transparent_22%),radial-gradient(circle_at_bottom_right,rgba(176,140,100,0.16),transparent_18%)]" />
      </div>

      <div className="section-narrow relative flex min-h-[98svh] items-end pb-14 pt-28 md:pb-18 lg:pb-20">
        <motion.div style={{ y: contentY }} className="max-w-[56rem]">
          <span className="eyebrow border-white/16 bg-white/8 text-white">
            {siteConfig.tagline}
          </span>

          <div className="mt-8 space-y-6">
            <h1 className="display-title max-w-5xl">
              Không gian cao cấp
              <br />
              dành cho cảm xúc sống lâu dài.
            </h1>
            <p className="max-w-xl text-[0.98rem] leading-8 text-white/82 md:text-[1.05rem]">
              Digital showroom nơi hình ảnh và case study cho thấy rất nhanh gu thẩm mỹ
              lẫn năng lực triển khai của studio.
            </p>
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            <Link href="/projects" className="button-primary">
              Xem dự án
            </Link>
            <Link
              href="/contact"
              className="button-secondary border-white/18 bg-white/10 text-white hover:bg-white/16"
            >
              Nhận tư vấn riêng
            </Link>
          </div>

          <div className="mt-14 grid max-w-3xl gap-4 border-t border-white/12 pt-6 sm:grid-cols-3">
            {stats.slice(0, 3).map((item) => (
              <div key={item.label} className="space-y-2">
                <p className="font-serif text-4xl text-white md:text-[2.8rem]">{item.value}</p>
                <p className="text-[0.68rem] uppercase tracking-[0.28em] text-white/56">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
