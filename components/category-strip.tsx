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
      <div className="mb-8 max-w-3xl">
        <p className="section-kicker">Chọn theo nhu cầu sống</p>
        <h2 className="mt-4 font-serif text-[clamp(2.8rem,5vw,4.9rem)] leading-[0.96] text-[var(--color-charcoal)]">
          Mỗi nhóm công trình nên mở ra một cảm xúc rất khác ngay từ tấm ảnh đầu tiên.
        </h2>
      </div>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {categories.map((category, index) => (
          <Reveal key={category.slug} delay={index * 0.05}>
            <Link
              href={`/projects?type=${category.slug}`}
              className="group relative block overflow-hidden rounded-[2.3rem] bg-[var(--color-coal)] shadow-[0_24px_70px_rgba(18,14,11,0.12)]"
            >
              <div className="relative h-[26rem] overflow-hidden">
                <Image
                  src={category.image}
                  alt={category.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 25vw"
                  className="object-cover transition duration-700 group-hover:scale-[1.045]"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,8,7,0.02),rgba(10,8,7,0.2)_32%,rgba(10,8,7,0.82))]" />
              </div>
              <div className="absolute inset-x-0 bottom-0 p-7 text-[var(--color-ivory)]">
                <p className="text-[0.66rem] uppercase tracking-[0.24em] text-white/56">
                  {category.metric}
                </p>
                <h2 className="mt-3 font-serif text-[2.7rem] leading-none text-white">
                  {category.title}
                </h2>
                <p className="mt-3 max-w-[15rem] text-sm leading-7 text-white/76">
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
