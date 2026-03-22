import type { SiteStat } from "@/lib/types";

export function StatsSection({ stats }: { stats: SiteStat[] }) {
  return (
    <section className="py-10 md:py-16">
      <div className="section-shell rounded-[2.6rem] bg-[var(--color-charcoal)] px-6 py-10 text-[var(--color-cream)] md:px-10">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="border-b border-white/10 pb-6 last:border-b-0 md:border-b-0 md:border-r md:pr-6 md:last:border-r-0">
              <p className="font-serif text-4xl md:text-5xl">{stat.value}</p>
              <p className="mt-3 text-[0.72rem] uppercase tracking-[0.28em] text-white/56">
                {stat.label}
              </p>
              <p className="mt-4 text-sm leading-7 text-white/72">{stat.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
