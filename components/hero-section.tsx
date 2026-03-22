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
      className="relative min-h-[108svh] overflow-hidden bg-[var(--color-charcoal)] text-[var(--color-ivory)]"
    >
      <div className="absolute inset-0">
        <motion.div
          style={{ y: mediaY }}
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1800&q=80')] bg-cover bg-center opacity-92"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(14,12,10,0.26)_0%,rgba(14,12,10,0.5)_35%,rgba(14,12,10,0.88)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.16),transparent_24%),radial-gradient(circle_at_bottom_right,rgba(176,140,100,0.16),transparent_20%)]" />
      </div>

      <div className="section-shell relative grid min-h-[108svh] items-end gap-8 pb-16 pt-28 lg:grid-cols-[1fr_0.42fr] lg:pb-18">
        <motion.div style={{ y: contentY }} className="max-w-4xl">
          <span className="eyebrow border-white/16 bg-white/10 text-white">
            {siteConfig.tagline}
          </span>
          <div className="mt-8 space-y-6">
            <h1 className="display-title max-w-5xl">
              Không gian cao cấp
              <br />
              được cảm nhận như một tác phẩm sống.
            </h1>
            <p className="max-w-2xl text-base leading-8 text-white/74 md:text-lg">
              Digital flagship showroom dành cho những khách hàng đang tìm một
              trải nghiệm nội thất có gu, có chiều sâu vật liệu và đủ năng lực
              để đi từ concept đến bàn giao cuối cùng.
            </p>
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
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

          <div className="mt-14 grid gap-4 md:grid-cols-3">
            {stats.slice(0, 3).map((item) => (
              <div
                key={item.label}
                className="rounded-[1.8rem] border border-white/12 bg-white/7 p-5 backdrop-blur-md"
              >
                <p className="font-serif text-4xl">{item.value}</p>
                <p className="mt-2 text-[0.7rem] uppercase tracking-[0.28em] text-white/54">
                  {item.label}
                </p>
                <p className="mt-4 text-sm leading-7 text-white/68">{item.detail}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <div className="hidden lg:block">
          <div className="space-y-4">
            {[
              {
                title: "Penthouse curated living",
                label: "Signature project",
              },
              {
                title: "Private showroom appointment",
                label: "Lead conversion",
              },
              {
                title: "Craft-driven execution",
                label: "From concept to site",
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: 28 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 + index * 0.12, duration: 0.8 }}
                className="glass-dark rounded-[1.9rem] border border-white/10 p-5 shadow-[0_22px_54px_rgba(12,10,8,0.18)]"
              >
                <p className="text-[0.66rem] uppercase tracking-[0.28em] text-white/48">
                  {item.label}
                </p>
                <p className="mt-3 font-serif text-3xl leading-none text-white">
                  {item.title}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
