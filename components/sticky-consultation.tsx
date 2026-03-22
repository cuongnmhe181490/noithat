"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { cn } from "@/components/ui/cn";

export function StickyConsultation() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 240);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={cn(
        "pointer-events-none fixed bottom-4 left-1/2 z-50 w-[calc(100%-1.25rem)] max-w-sm -translate-x-1/2 transition duration-500 md:bottom-6 md:left-auto md:right-6 md:w-auto md:max-w-none md:translate-x-0",
        visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0",
      )}
    >
      <div className="pointer-events-auto luxury-card flex items-center justify-between gap-4 rounded-full px-3 py-3 md:px-4">
        <div className="hidden pl-2 md:block">
          <p className="text-[0.68rem] uppercase tracking-[0.24em] text-[var(--color-muted)]">
            Private consultation
          </p>
          <p className="text-sm text-[var(--color-charcoal)]">
            Đặt lịch tham quan showroom
          </p>
        </div>
        <div className="flex gap-2">
          <Link href="/projects" className="button-secondary !px-4 !py-2.5">
            Xem dự án
          </Link>
          <Link href="/contact" className="button-primary !px-4 !py-2.5">
            Nhận tư vấn
          </Link>
        </div>
      </div>
    </div>
  );
}
