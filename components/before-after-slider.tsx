"use client";

import Image from "next/image";
import { useState } from "react";

type BeforeAfterSliderProps = {
  beforeImage: string;
  afterImage: string;
  beforeLabel: string;
  afterLabel: string;
  title: string;
  description: string;
};

export function BeforeAfterSlider({
  beforeImage,
  afterImage,
  beforeLabel,
  afterLabel,
  title,
  description,
}: BeforeAfterSliderProps) {
  const [position, setPosition] = useState(54);

  return (
    <div className="overflow-hidden rounded-[2.6rem] border border-black/8 bg-white/74 p-6 shadow-[0_22px_60px_rgba(22,18,14,0.08)] md:p-8">
      <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr]">
        <div className="space-y-4">
          <span className="eyebrow">Before / after</span>
          <h2 className="font-serif text-4xl leading-none text-[var(--color-charcoal)] md:text-5xl">
            {title}
          </h2>
          <p className="text-sm leading-7 text-[var(--color-muted)]">
            {description}
          </p>
        </div>
        <div className="space-y-4">
          <div className="relative h-[24rem] overflow-hidden rounded-[2rem] md:h-[30rem]">
            <Image
              src={beforeImage}
              alt={beforeLabel}
              fill
              sizes="(max-width: 768px) 100vw, 70vw"
              className="object-cover"
            />
            <div className="absolute inset-y-0 left-0 overflow-hidden" style={{ width: `${position}%` }}>
              <div className="relative h-full w-[1200px] max-w-none">
                <Image
                  src={afterImage}
                  alt={afterLabel}
                  fill
                  sizes="(max-width: 768px) 100vw, 70vw"
                  className="object-cover"
                />
              </div>
            </div>
            <div
              className="absolute inset-y-0 w-px bg-white/90 shadow-[0_0_0_1px_rgba(0,0,0,0.08)]"
              style={{ left: `${position}%` }}
            >
              <div className="absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/50 bg-black/24 text-white backdrop-blur">
                ↔
              </div>
            </div>
            <div className="absolute left-4 top-4 rounded-full bg-black/28 px-4 py-2 text-xs uppercase tracking-[0.24em] text-white">
              {beforeLabel}
            </div>
            <div className="absolute right-4 top-4 rounded-full bg-white/76 px-4 py-2 text-xs uppercase tracking-[0.24em] text-[var(--color-charcoal)]">
              {afterLabel}
            </div>
          </div>
          <input
            type="range"
            min="10"
            max="90"
            value={position}
            onChange={(event) => setPosition(Number(event.target.value))}
            className="w-full accent-[var(--color-charcoal)]"
          />
        </div>
      </div>
    </div>
  );
}
