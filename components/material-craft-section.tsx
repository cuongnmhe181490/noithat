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
      <div className="grid gap-10 lg:grid-cols-[0.76fr_1.24fr]">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <SectionHeading
            eyebrow="Vật liệu và craftsmanship"
            title="Đây là nơi thương hiệu được cảm bằng tay và ánh sáng, không phải bằng lời giới thiệu."
            description="Chúng tôi chỉ giữ lại vài lớp vật liệu đủ mạnh để người xem cảm được độ tinh, thay vì biến section này thành một bảng thông số dài."
            align="left"
          />
        </div>
        <div className="space-y-4">
          {materials.map((item, index) => (
            <Reveal key={item.name} delay={index * 0.06}>
              <article className="luxury-card grid gap-5 overflow-hidden p-4 md:grid-cols-[1.05fr_0.95fr] md:p-5">
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
                    <p className="section-kicker">
                      {item.tone}
                    </p>
                    <h3 className="font-serif text-[2.2rem] leading-none text-[var(--color-charcoal)]">
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
