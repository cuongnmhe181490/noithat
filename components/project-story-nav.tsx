"use client";

import { useEffect, useState } from "react";
import { cn } from "@/components/ui/cn";

const items = [
  { id: "concept", label: "Concept" },
  { id: "materials", label: "Vật liệu" },
  { id: "gallery", label: "Gallery" },
  { id: "timeline", label: "Timeline" },
  { id: "lead", label: "Tư vấn" },
];

export function ProjectStoryNav() {
  const [active, setActive] = useState("concept");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) {
          setActive(visible.target.id);
        }
      },
      { rootMargin: "-20% 0px -60% 0px", threshold: [0.2, 0.5, 0.8] },
    );

    items.forEach((item) => {
      const node = document.getElementById(item.id);
      if (node) observer.observe(node);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="section-shell sticky top-20 z-30 hidden py-4 lg:block">
      <nav className="luxury-card flex w-fit items-center gap-2 rounded-full px-3 py-2">
        {items.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className={cn(
              "rounded-full px-4 py-2 text-sm transition",
              active === item.id
                ? "bg-[var(--color-charcoal)] text-[var(--color-ivory)]"
                : "text-[var(--color-muted)] hover:bg-black/5",
            )}
          >
            {item.label}
          </a>
        ))}
      </nav>
    </div>
  );
}
