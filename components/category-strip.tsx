import Link from "next/link";
import Image from "next/image";
import type { ProjectCategory } from "@/lib/types";
import { Reveal } from "@/components/motion";

type CategoryStripProps = {
  categories: ProjectCategory[];
};

export function CategoryStrip({ categories }: CategoryStripProps) {
  return (
    <section className="section-shell section-tight">
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {categories.map((category, index) => (
          <Reveal key={category.slug} delay={index * 0.05}>
            <Link
              href={`/projects?type=${category.slug}`}
              className="group relative block overflow-hidden rounded-[2.2rem] border border-black/8 bg-[var(--color-coal)] p-3 shadow-[0_18px_48px_rgba(22,18,14,0.06)]"
            >
              <div className="relative h-72 overflow-hidden rounded-[1.7rem]">
                <Image
                  src={category.image}
                  alt={category.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 25vw"
                  className="object-cover transition duration-700 group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,8,7,0.08),rgba(10,8,7,0.68))]" />
              </div>
              <div className="absolute inset-x-0 bottom-0 p-7 text-[var(--color-ivory)]">
                <p className="text-[0.66rem] uppercase tracking-[0.24em] text-white/58">
                  {category.metric}
                </p>
                <h2 className="mt-3 font-serif text-4xl text-white">
                  {category.title}
                </h2>
                <p className="mt-3 max-w-[16rem] text-sm leading-7 text-white/74">
                  {category.description}
                </p>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
