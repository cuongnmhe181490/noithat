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
      <div className="grid gap-8 lg:grid-cols-[0.84fr_1.16fr]">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <SectionHeading
            eyebrow="Vật liệu và craftsmanship"
            title="Cảm giác đắt giá đến từ cách vật liệu được xử lý, không đến từ việc phô trương."
            description="Thương hiệu nội thất cao cấp được cảm nhận mạnh nhất ở độ tinh của bề mặt, ánh sáng và cách các chi tiết nhỏ được hoàn thiện."
            align="left"
          />
        </div>
        <div className="space-y-5">
          {materials.map((item, index) => (
            <Reveal key={item.name} delay={index * 0.06}>
              <article className="luxury-card grid gap-5 overflow-hidden p-4 md:grid-cols-[0.94fr_1.06fr] md:p-5">
                <div className="relative h-64 overflow-hidden rounded-[1.7rem]">
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
                    <p className="text-[0.68rem] uppercase tracking-[0.26em] text-[var(--color-muted)]">
                      {item.tone}
                    </p>
                    <h3 className="font-serif text-4xl leading-none text-[var(--color-charcoal)]">
                      {item.name}
                    </h3>
                    <p className="text-sm leading-7 text-[var(--color-muted)]">
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
