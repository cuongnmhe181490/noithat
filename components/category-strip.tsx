import Link from "next/link";
import Image from "next/image";
import type { ProjectCategory } from "@/lib/types";
import { Reveal } from "@/components/motion";

type CategoryStripProps = {
  categories: ProjectCategory[];
};

export function CategoryStrip({ categories }: CategoryStripProps) {
  return (
    <section className="section-shell py-10 md:py-14">
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {categories.map((category, index) => (
          <Reveal key={category.slug} delay={index * 0.05}>
            <Link
              href={`/projects?type=${category.slug}`}
              className="group relative block overflow-hidden rounded-[2rem] border border-black/8 bg-white/72 p-5 shadow-[0_18px_48px_rgba(22,18,14,0.06)]"
            >
              <div className="relative h-56 overflow-hidden rounded-[1.4rem]">
                <Image
                  src={category.image}
                  alt={category.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 25vw"
                  className="object-cover transition duration-700 group-hover:scale-[1.04]"
                />
              </div>
              <div className="mt-5 space-y-3">
                <h2 className="font-serif text-3xl text-[var(--color-charcoal)]">
                  {category.title}
                </h2>
                <p className="text-sm leading-7 text-[var(--color-muted)]">
                  {category.description}
                </p>
                <p className="text-[0.68rem] uppercase tracking-[0.24em] text-[var(--color-muted)]">
                  {category.metric}
                </p>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
