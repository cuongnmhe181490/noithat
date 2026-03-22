"use client";

import { useState } from "react";
import type { FaqItem } from "@/lib/types";
import { SectionHeading } from "@/components/section-heading";
import { cn } from "@/components/ui/cn";

export function FaqList({
  eyebrow,
  title,
  description,
  items,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  items: FaqItem[];
}) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="section-shell section-pad">
      <SectionHeading
        eyebrow={eyebrow}
        title={title}
        description={description}
        align="left"
      />
      <div className="mt-10 grid gap-3">
        {items.map((item, index) => {
          const isOpen = openIndex === index;
          return (
            <button
              type="button"
              key={item.question}
              onClick={() => setOpenIndex(isOpen ? -1 : index)}
              className="luxury-card rounded-[1.8rem] px-6 py-5 text-left"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-lg font-medium text-[var(--color-charcoal)]">
                    {item.question}
                  </p>
                  <div
                    className={cn(
                      "grid transition-[grid-template-rows,opacity,margin] duration-300 ease-out",
                      isOpen ? "mt-4 grid-rows-[1fr] opacity-100" : "mt-0 grid-rows-[0fr] opacity-0",
                    )}
                  >
                    <div className="overflow-hidden">
                      <p className="text-sm leading-7 text-[var(--color-muted)]">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </div>
                <span className="mt-1 text-[0.72rem] uppercase tracking-[0.28em] text-[var(--color-muted)]">
                  {isOpen ? "Ẩn" : "Mở"}
                </span>
              </div>
            </button>
          );
        })}
      </div>
    </section>
  );
}
