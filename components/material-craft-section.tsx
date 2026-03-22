import Image from "next/image";
import type { MaterialStory } from "@/lib/types";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/motion";

export function MaterialCraftSection({
  materials,
}: {
  materials: MaterialStory[];
}) {
  return (
    <section className="section-shell section-pad">
      <div className="grid gap-10 lg:grid-cols-[0.74fr_1.26fr]">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <SectionHeading
            eyebrow="Vật liệu và craftsmanship"
            title="Đây là nơi thương hiệu được cảm bằng tay và ánh sáng, không phải bằng lời giới thiệu."
            align="left"
          />
        </div>
        <div className="space-y-5">
          {materials.map((item, index) => (
            <Reveal key={item.name} delay={index * 0.06}>
              <article className="grid gap-5 overflow-hidden rounded-[2rem] border border-black/8 bg-[rgba(255,255,255,0.34)] p-4 md:grid-cols-[1.08fr_0.92fr] md:p-5">
                <div className="relative h-72 overflow-hidden rounded-[1.7rem]">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 40vw"
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col justify-between gap-5 p-1">
                  <div className="space-y-3">
                    <p className="section-kicker">{item.tone}</p>
                    <h3 className="text-[1.7rem] font-medium leading-[1.08] tracking-[-0.02em] text-[var(--color-charcoal)] md:text-[1.9rem]">
                      {item.name}
                    </h3>
                    <p className="max-w-[38ch] text-sm leading-6 text-[var(--color-muted)] line-clamp-3">
                      {item.description}
                    </p>
                  </div>
                  <p className="text-[0.68rem] uppercase tracking-[0.24em] text-[var(--color-walnut)]">
                    Material library curation
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
