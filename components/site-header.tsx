"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { navigation, siteConfig } from "@/data/site";
import { cn } from "@/components/ui/cn";
import { useHeaderState } from "@/hooks/use-header-state";

export function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const { isHeroState, isStickyState } = useHeaderState(pathname);

  const isActive = (href: string) =>
    href === "/" ? pathname === href : pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50">
      <div className="section-shell pointer-events-auto pt-4">
        <div
          className={cn(
            "flex items-center justify-between rounded-full border px-4 py-2.5 transition duration-300 md:px-5",
            isHeroState &&
              "border-white/10 bg-[rgba(14,12,10,0.8)] text-white shadow-[0_12px_30px_rgba(10,8,7,0.14)] backdrop-blur-xl",
            isStickyState &&
              "border-black/8 bg-[rgba(247,242,236,0.98)] text-[var(--color-charcoal)] shadow-[0_10px_26px_rgba(22,18,14,0.06)] backdrop-blur-xl",
          )}
        >
          <Link href="/" className="flex items-center gap-3" onClick={() => setMenuOpen(false)}>
            <div
              className={cn(
                "flex h-10 w-10 items-center justify-center rounded-full border text-[0.7rem] font-semibold tracking-[0.3em]",
                isHeroState && "border-white/16 bg-white/8 text-[var(--color-ivory)]",
                isStickyState &&
                  "border-black/10 bg-[var(--color-charcoal)] text-[var(--color-cream)]",
              )}
            >
              {siteConfig.shortName}
            </div>
            <div className="hidden sm:block">
              <p className="text-[0.7rem] uppercase tracking-[0.34em]">{siteConfig.name}</p>
              <p
                className={cn(
                  "mt-1 text-[0.64rem] uppercase tracking-[0.24em]",
                  isHeroState ? "text-white/68" : "text-[var(--color-muted)]",
                )}
              >
                Digital flagship showroom
              </p>
            </div>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-full px-4 py-2 text-sm transition",
                  isActive(item.href)
                    ? isHeroState
                      ? "border border-white/14 bg-white/10 text-white"
                      : "border border-black/10 bg-[rgba(21,19,17,0.04)] text-[var(--color-charcoal)]"
                    : isHeroState
                      ? "text-white/90 hover:bg-white/8 hover:text-white"
                      : "text-[var(--color-charcoal)] hover:bg-black/4",
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-2.5 lg:flex">
            <Link
              className={cn(
                "inline-flex items-center justify-center rounded-full border px-4 py-2.5 text-sm transition",
                isHeroState &&
                  "border-white/16 bg-white/6 text-white hover:bg-white/10",
                isStickyState &&
                  "border-black/12 bg-white text-[var(--color-charcoal)] hover:bg-[rgba(255,255,255,0.82)]",
              )}
              href="/projects"
            >
              Xem dự án
            </Link>
            <Link
              className={cn(
                "inline-flex items-center justify-center rounded-full px-4 py-2.5 text-sm transition",
                isHeroState &&
                  "bg-[var(--color-ivory)] text-[var(--color-charcoal)] shadow-[0_12px_28px_rgba(8,7,6,0.12)] hover:bg-white",
                isStickyState && "button-primary !px-4 !py-2.5",
              )}
              href="/contact"
            >
              Nhận tư vấn
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setMenuOpen((value) => !value)}
            className={cn(
              "inline-flex h-10 w-10 items-center justify-center rounded-full border lg:hidden",
              isHeroState && "border-white/18 bg-white/8 text-white",
              isStickyState &&
                "border-black/10 bg-[rgba(247,242,236,0.98)] text-[var(--color-charcoal)]",
            )}
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "Đóng menu" : "Mở menu"}
          >
            <span className="relative block h-4 w-4">
              <span
                className={cn(
                  "absolute left-0 top-0.5 h-0.5 w-4 rounded-full bg-current transition",
                  menuOpen && "translate-y-[6px] rotate-45",
                )}
              />
              <span
                className={cn(
                  "absolute left-0 top-[7px] h-0.5 w-4 rounded-full bg-current transition",
                  menuOpen && "opacity-0",
                )}
              />
              <span
                className={cn(
                  "absolute left-0 top-[13px] h-0.5 w-4 rounded-full bg-current transition",
                  menuOpen && "-translate-y-[6px] -rotate-45",
                )}
              />
            </span>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen ? (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="section-shell pointer-events-auto mt-3 lg:hidden"
          >
            <div
              className={cn(
                "rounded-[1.8rem] p-4 shadow-[0_16px_38px_rgba(22,18,14,0.1)] backdrop-blur-xl",
                isHeroState &&
                  "border border-white/12 bg-[rgba(15,13,11,0.96)] text-white",
                isStickyState &&
                  "border border-black/10 bg-[rgba(247,242,236,0.99)] text-[var(--color-charcoal)]",
              )}
            >
              <div className="border-b border-current/10 px-2 pb-4">
                <p className="text-[0.7rem] uppercase tracking-[0.3em]">{siteConfig.name}</p>
                <p className={cn("mt-2 text-sm", isHeroState ? "text-white/72" : "text-[var(--color-muted)]")}>
                  Không gian nội thất cao cấp được trình bày như một showroom số.
                </p>
              </div>

              <div className="mt-4 grid gap-2">
                {navigation.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className={cn(
                      "rounded-[1.15rem] px-4 py-3 text-sm transition",
                      isActive(item.href)
                        ? isHeroState
                          ? "border border-white/14 bg-white/10 text-white"
                          : "border border-black/10 bg-[rgba(21,19,17,0.04)] text-[var(--color-charcoal)]"
                        : isHeroState
                          ? "bg-white/6 text-white/92"
                          : "bg-[var(--color-panel)]/60 text-[var(--color-charcoal)]",
                    )}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>

              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                <Link
                  className={cn(
                    "inline-flex items-center justify-center rounded-full border px-4 py-3 text-sm transition",
                    isHeroState
                      ? "border-white/18 bg-white/8 text-white"
                      : "border-black/12 bg-white text-[var(--color-charcoal)]",
                  )}
                  href="/projects"
                  onClick={() => setMenuOpen(false)}
                >
                  Xem dự án
                </Link>
                <Link
                  className={cn(
                    "inline-flex items-center justify-center rounded-full px-4 py-3 text-sm transition",
                    isHeroState
                      ? "bg-[var(--color-ivory)] text-[var(--color-charcoal)]"
                      : "button-primary !px-4 !py-3",
                  )}
                  href="/contact"
                  onClick={() => setMenuOpen(false)}
                >
                  Nhận tư vấn
                </Link>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
