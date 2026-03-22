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
            "flex items-center justify-between rounded-full border px-4 py-3 transition duration-300 md:px-5",
            isHeroState &&
              "border-white/12 bg-[rgba(14,12,10,0.78)] text-white shadow-[0_18px_42px_rgba(10,8,7,0.18)] backdrop-blur-xl",
            isStickyState &&
              "border-black/8 bg-[rgba(248,242,235,0.96)] text-[var(--color-charcoal)] shadow-[0_18px_42px_rgba(22,18,14,0.08)] backdrop-blur-xl",
          )}
        >
          <Link href="/" className="flex items-center gap-3">
            <div
              className={cn(
                "flex h-11 w-11 items-center justify-center rounded-full border text-xs font-semibold tracking-[0.34em]",
                isHeroState && "border-white/18 bg-white/7 text-[var(--color-ivory)]",
                isStickyState &&
                  "border-black/10 bg-[var(--color-charcoal)] text-[var(--color-cream)]",
              )}
            >
              {siteConfig.shortName}
            </div>
            <div className="hidden sm:block">
              <p className="text-xs uppercase tracking-[0.34em]">{siteConfig.name}</p>
              <p
                className={cn(
                  "text-[0.68rem] uppercase tracking-[0.28em]",
                  isHeroState ? "text-white/72" : "text-[var(--color-muted)]",
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
                  "rounded-full px-4 py-2.5 text-sm transition",
                  isActive(item.href)
                    ? isHeroState
                      ? "bg-white/14 text-white"
                      : "bg-[var(--color-charcoal)] text-[var(--color-cream)]"
                    : isHeroState
                      ? "text-white/90 hover:bg-white/10 hover:text-white"
                      : "text-[var(--color-charcoal)]/88 hover:bg-black/5 hover:text-[var(--color-charcoal)]",
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <Link
              className={cn(
                "inline-flex items-center justify-center rounded-full px-5 py-3 text-sm transition",
                isHeroState &&
                  "border border-white/18 bg-white/7 text-white hover:bg-white/11",
                isStickyState &&
                  "border border-black/12 bg-white/92 text-[var(--color-charcoal)] hover:bg-white",
              )}
              href="/projects"
            >
              Xem dự án
            </Link>
            <Link className="button-primary" href="/contact">
              Nhận tư vấn
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setMenuOpen((value) => !value)}
            className={cn(
              "inline-flex h-11 w-11 items-center justify-center rounded-full border lg:hidden",
              isHeroState && "border-white/18 bg-white/8 text-white",
              isStickyState &&
                "border-black/10 bg-[rgba(248,242,235,0.94)] text-[var(--color-charcoal)]",
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
            transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
            className="section-shell pointer-events-auto mt-3 lg:hidden"
          >
            <div
              className={cn(
                "rounded-[2rem] p-4 shadow-[0_20px_48px_rgba(22,18,14,0.12)] backdrop-blur-xl",
                isHeroState &&
                  "border border-white/12 bg-[rgba(15,13,11,0.94)] text-white",
                isStickyState &&
                  "border border-black/10 bg-[rgba(248,242,235,0.98)] text-[var(--color-charcoal)]",
              )}
            >
              <div className="border-b border-current/10 px-2 pb-4">
                <p className="text-xs uppercase tracking-[0.3em]">{siteConfig.name}</p>
                <p className={cn("mt-2 text-sm", isHeroState ? "text-white/72" : "text-[var(--color-muted)]")}>
                  Không gian nội thất cao cấp được trình bày như một showroom số.
                </p>
              </div>

              <div className="mt-4 grid gap-2">
                {navigation.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "rounded-[1.25rem] px-4 py-3 text-sm transition",
                      isActive(item.href)
                        ? isHeroState
                          ? "bg-white/14 text-white"
                          : "bg-[var(--color-charcoal)] text-[var(--color-cream)]"
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
                    "inline-flex items-center justify-center rounded-full px-4 py-3 text-sm transition",
                    isHeroState
                      ? "border border-white/18 bg-white/8 text-white"
                      : "border border-black/12 bg-white/92 text-[var(--color-charcoal)]",
                  )}
                  href="/projects"
                >
                  Xem dự án
                </Link>
                <Link className="button-primary" href="/contact">
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
