"use client";

import { useMemo, useState } from "react";
import { getProjectFilterOptions } from "@/data/projects";
import type { FilterOption, Project, ProjectCategory } from "@/lib/types";
import { ProjectCard } from "@/components/projects/project-card";
import { SectionHeading } from "@/components/section-heading";
import { StaggerItem, StaggerList } from "@/components/motion";
import { cn } from "@/components/ui/cn";

type ProjectsShowcaseProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  projects: Project[];
  categories?: ProjectCategory[];
};

const allOption: FilterOption = { label: "Tất cả", value: "all" };

export function ProjectsShowcase({
  eyebrow,
  title,
  description,
  projects,
}: ProjectsShowcaseProps) {
  const options = useMemo(() => getProjectFilterOptions(), []);
  const [activeType, setActiveType] = useState("all");
  const [activeStyle, setActiveStyle] = useState("all");
  const [activeArea, setActiveArea] = useState("all");

  const filteredProjects = projects.filter((project) => {
    const typeMatch = activeType === "all" || project.typeKey === activeType;
    const styleMatch = activeStyle === "all" || project.styleKey === activeStyle;
    const areaMatch =
      activeArea === "all" ||
      (activeArea === "duoi-150" && project.areaValue < 150) ||
      (activeArea === "150-250" && project.areaValue >= 150 && project.areaValue < 250) ||
      (activeArea === "tren-250" && project.areaValue >= 250);
    return typeMatch && styleMatch && areaMatch;
  });

  return (
    <section className="py-20 md:py-28">
      <div className="section-shell">
        <SectionHeading
          eyebrow={eyebrow}
          title={title}
          description={description}
          align="left"
        />

        <div className="mt-10 space-y-6">
          <FilterRow label="Loại công trình" options={[allOption, ...options.categories]} active={activeType} onChange={setActiveType} />
          <FilterRow label="Phong cách" options={[allOption, ...options.styles]} active={activeStyle} onChange={setActiveStyle} />
          <FilterRow label="Diện tích" options={[allOption, ...options.areas]} active={activeArea} onChange={setActiveArea} />
        </div>

        <StaggerList className="mt-12 grid gap-5 lg:grid-cols-12">
          {filteredProjects.map((project, index) => (
            <StaggerItem
              key={project.slug}
              className={cn(index % 5 === 0 ? "lg:col-span-7" : "lg:col-span-5")}
            >
              <ProjectCard project={project} featured={index % 5 === 0} />
            </StaggerItem>
          ))}
        </StaggerList>
      </div>
    </section>
  );
}

function FilterRow({
  label,
  options,
  active,
  onChange,
}: {
  label: string;
  options: FilterOption[];
  active: string;
  onChange: (value: string) => void;
}) {
  return (
    <div className="space-y-3">
      <p className="text-[0.68rem] uppercase tracking-[0.28em] text-[var(--color-muted)]">
        {label}
      </p>
      <div className="flex gap-3 overflow-x-auto pb-1">
        {options.map((option) => {
          const isActive = active === option.value;
          return (
            <button
              key={option.value}
              type="button"
              onClick={() => onChange(option.value)}
              className={cn(
                "shrink-0 rounded-full border px-4 py-2 text-sm transition",
                isActive
                  ? "border-[var(--color-charcoal)] bg-[var(--color-charcoal)] text-[var(--color-cream)]"
                  : "border-black/8 bg-white/72 text-[var(--color-muted)]",
              )}
            >
              {option.label}
              {typeof option.count === "number" ? (
                <span className="ml-2 text-xs opacity-70">{option.count}</span>
              ) : null}
            </button>
          );
        })}
      </div>
    </div>
  );
}
