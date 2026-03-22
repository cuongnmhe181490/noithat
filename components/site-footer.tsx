import Link from "next/link";
import { navigation, siteConfig } from "@/data/site";

export function SiteFooter() {
  return (
    <footer className="mt-16 border-t border-black/8 bg-[rgba(237,229,219,0.55)] py-10 backdrop-blur">
      <div className="section-shell grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-5">
          <p className="font-serif text-4xl text-[var(--color-charcoal)]">
            {siteConfig.name}
          </p>
          <p className="max-w-xl text-sm leading-7 text-[var(--color-muted)]">
            Digital flagship showroom cho thương hiệu nội thất cao cấp, tập trung
            vào portfolio, trải nghiệm vật liệu và khả năng chuyển đổi lead chất lượng.
          </p>
          <div className="flex flex-wrap gap-3">
            {siteConfig.socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                className="rounded-full border border-black/8 px-4 py-2 text-xs uppercase tracking-[0.24em] text-[var(--color-muted)]"
                target="_blank"
                rel="noreferrer"
              >
                {social.label}
              </a>
            ))}
          </div>
        </div>
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <p className="text-[0.68rem] uppercase tracking-[0.24em] text-[var(--color-muted)]">
              Điều hướng
            </p>
            <div className="mt-4 grid gap-3">
              {navigation.map((item) => (
                <Link key={item.href} href={item.href} className="text-sm text-[var(--color-charcoal)]">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          <div className="space-y-3 text-sm text-[var(--color-charcoal)]">
            <p>{siteConfig.address}</p>
            <p>{siteConfig.email}</p>
            <p>{siteConfig.phone}</p>
            <p>{siteConfig.hours}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
