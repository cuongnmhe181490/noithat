"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { navigation, siteConfig } from "@/data/site";
import { cn } from "@/components/ui/cn";

export function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href: string) =>
    href === "/" ? pathname === href : pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50">
      <div className="section-shell pointer-events-auto pt-4">
        <div
          className={cn(
            "flex items-center justify-between rounded-full border px-4 py-3 transition duration-500 md:px-5",
            scrolled
              ? "border-black/10 bg-white/76 shadow-[0_18px_48px_rgba(22,18,14,0.12)] backdrop-blur-xl"
              : "border-white/14 bg-black/10 text-white backdrop-blur-md",
          )}
        >
          <Link href="/" className="flex items-center gap-3">
            <div
              className={cn(
                "flex h-11 w-11 items-center justify-center rounded-full border text-xs font-semibold tracking-[0.34em]",
                scrolled ? "border-black/10 bg-[var(--color-charcoal)] text-[var(--color-cream)]" : "border-white/20 bg-white/10",
              )}
            >
              {siteConfig.shortName}
            </div>
            <div className="hidden sm:block">
              <p className="text-xs uppercase tracking-[0.34em]">{siteConfig.name}</p>
              <p className={cn("text-[0.68rem] uppercase tracking-[0.28em]", scrolled ? "text-[var(--color-muted)]" : "text-white/70")}>
                Interior flagship showroom
              </p>
            </div>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className={cn(
                  "rounded-full px-4 py-2 text-sm transition",
                  isActive(item.href)
                    ? scrolled
                      ? "bg-[var(--color-charcoal)] text-[var(--color-cream)]"
                      : "bg-white/16 text-white"
                    : scrolled
                      ? "text-[var(--color-muted)] hover:bg-black/5 hover:text-[var(--color-charcoal)]"
                      : "text-white/74 hover:bg-white/10 hover:text-white",
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <Link className={cn("button-secondary", !scrolled && "border-white/16 bg-white/10 text-white hover:bg-white/14")} href="/projects">
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
              scrolled ? "border-black/10 bg-black/3" : "border-white/14 bg-white/10 text-white",
            )}
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "Đóng menu" : "Mở menu"}
          >
            <span className="relative block h-4 w-4">
              <span className={cn("absolute left-0 top-0.5 h-0.5 w-4 rounded-full bg-current transition", menuOpen && "translate-y-[6px] rotate-45")} />
              <span className={cn("absolute left-0 top-[7px] h-0.5 w-4 rounded-full bg-current transition", menuOpen && "opacity-0")} />
              <span className={cn("absolute left-0 top-[13px] h-0.5 w-4 rounded-full bg-current transition", menuOpen && "-translate-y-[6px] -rotate-45")} />
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
            <div className="rounded-[2rem] border border-black/10 bg-white/94 p-4 shadow-[0_20px_48px_rgba(22,18,14,0.12)] backdrop-blur-xl">
              <div className="grid gap-2">
                {navigation.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className={cn(
                      "rounded-[1.25rem] px-4 py-3 text-sm",
                      isActive(item.href)
                        ? "bg-[var(--color-charcoal)] text-[var(--color-cream)]"
                        : "bg-[var(--color-panel)]/60 text-[var(--color-charcoal)]",
                    )}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                <Link className="button-secondary" href="/projects">
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
