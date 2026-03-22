"use client";

import Link from "next/link";
import { startTransition, useDeferredValue, useMemo, useState } from "react";
import { getProjectFilterOptions } from "@/data/projects";
import type { FilterOption, Project } from "@/lib/types";
import { ProjectCard } from "@/components/projects/project-card";
import { SectionHeading } from "@/components/section-heading";
import { StaggerItem, StaggerList } from "@/components/motion";
import { cn } from "@/components/ui/cn";

type SortKey = "featured" | "latest" | "area-desc" | "area-asc" | "name";

type ProjectsShowcaseProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  projects: Project[];
  compact?: boolean;
};

const allOption: FilterOption = { label: "Tất cả", value: "all" };

export function ProjectsShowcase({
  eyebrow,
  title,
  description,
  projects,
  compact = false,
}: ProjectsShowcaseProps) {
  const options = useMemo(() => getProjectFilterOptions(), []);
  const [activeType, setActiveType] = useState("all");
  const [activeStyle, setActiveStyle] = useState("all");
  const [activeArea, setActiveArea] = useState("all");
  const [sortKey, setSortKey] = useState<SortKey>("featured");
  const [query, setQuery] = useState("");

  const deferredQuery = useDeferredValue(query);
  const normalizedQuery = deferredQuery.trim().toLowerCase();

  const filteredProjects = useMemo(() => {
    const list = projects.filter((project) => {
      const typeMatch = activeType === "all" || project.typeKey === activeType;
      const styleMatch = activeStyle === "all" || project.styleKey === activeStyle;
      const areaMatch =
        activeArea === "all" ||
        (activeArea === "duoi-150" && project.areaValue < 150) ||
        (activeArea === "150-250" &&
          project.areaValue >= 150 &&
          project.areaValue < 250) ||
        (activeArea === "tren-250" && project.areaValue >= 250);
      const queryMatch =
        !normalizedQuery ||
        `${project.name} ${project.location} ${project.type} ${project.style} ${project.tags.join(" ")}`
          .toLowerCase()
          .includes(normalizedQuery);

      return typeMatch && styleMatch && areaMatch && queryMatch;
    });

    const sorted = [...list];
    sorted.sort((a, b) => {
      if (sortKey === "latest") return Number(b.year) - Number(a.year);
      if (sortKey === "area-desc") return b.areaValue - a.areaValue;
      if (sortKey === "area-asc") return a.areaValue - b.areaValue;
      if (sortKey === "name") return a.name.localeCompare(b.name, "vi");
      return Number(b.featured) - Number(a.featured) || Number(b.year) - Number(a.year);
    });
    return sorted;
  }, [activeArea, activeStyle, activeType, normalizedQuery, projects, sortKey]);

  const isFiltering = deferredQuery !== query;

  return (
    <section className={cn("section-pad", compact && "section-tight")}>
      <div className="section-shell">
        <div className="grid gap-8 xl:grid-cols-[0.8fr_1.2fr] xl:items-end">
          <SectionHeading
            eyebrow={eyebrow}
            title={title}
            description={description}
            align="left"
          />

          <div className="luxury-card rounded-[2rem] p-5 md:p-6">
            <div className="grid gap-4 md:grid-cols-[1fr_14rem]">
              <label className="grid gap-2">
                <span className="text-[0.68rem] uppercase tracking-[0.24em] text-[var(--color-muted)]">
                  Tìm theo tên, địa điểm hoặc phong cách
                </span>
                <input
                  value={query}
                  onChange={(event) =>
                    startTransition(() => setQuery(event.target.value))
                  }
                  placeholder="Ví dụ: penthouse, Hồ Tràm, Japandi..."
                  className="field"
                />
              </label>
              <label className="grid gap-2">
                <span className="text-[0.68rem] uppercase tracking-[0.24em] text-[var(--color-muted)]">
                  Sắp xếp
                </span>
                <select
                  value={sortKey}
                  onChange={(event) => setSortKey(event.target.value as SortKey)}
                  className="select min-w-52"
                >
                  <option value="featured">Ưu tiên nổi bật</option>
                  <option value="latest">Mới nhất</option>
                  <option value="area-desc">Diện tích lớn đến nhỏ</option>
                  <option value="area-asc">Diện tích nhỏ đến lớn</option>
                  <option value="name">Theo tên dự án</option>
                </select>
              </label>
            </div>

            <div className="mt-5 grid gap-4 xl:grid-cols-3">
              <FilterRow
                label="Loại công trình"
                options={[allOption, ...options.categories]}
                active={activeType}
                onChange={setActiveType}
              />
              <FilterRow
                label="Phong cách"
                options={[allOption, ...options.styles]}
                active={activeStyle}
                onChange={setActiveStyle}
              />
              {!compact ? (
                <FilterRow
                  label="Diện tích"
                  options={[allOption, ...options.areas]}
                  active={activeArea}
                  onChange={setActiveArea}
                />
              ) : null}
            </div>
          </div>
        </div>

        <div className="mt-8 flex items-center justify-between gap-4">
          <p className="text-sm text-[var(--color-muted)]">
            {filteredProjects.length} dự án phù hợp với tiêu chí hiện tại.
          </p>
          <Link href="/contact" className="button-secondary !px-4 !py-2.5">
            Tư vấn theo diện tích và ngân sách
          </Link>
        </div>

        {isFiltering ? <ProjectsSkeleton /> : null}

        {!isFiltering && filteredProjects.length > 0 ? (
          <StaggerList className="mt-10 grid gap-6 lg:grid-cols-12">
            {filteredProjects.map((project, index) => (
              <StaggerItem
                key={project.slug}
                className={cn(index % 5 === 0 ? "lg:col-span-7" : "lg:col-span-5")}
              >
                <ProjectCard
                  project={project}
                  featured={index % 5 === 0}
                  variant={compact ? "immersive" : "catalog"}
                />
              </StaggerItem>
            ))}
          </StaggerList>
        ) : null}

        {!isFiltering && filteredProjects.length === 0 ? (
          <div className="luxury-card mt-10 rounded-[2rem] p-10 text-center">
            <p className="font-serif text-4xl text-[var(--color-charcoal)]">
              Chưa có dự án khớp hoàn toàn.
            </p>
            <p className="mt-4 text-sm leading-7 text-[var(--color-muted)]">
              Hãy mở rộng bộ lọc hoặc để lại nhu cầu, chúng tôi sẽ gợi ý những
              case study gần nhất với diện tích và gu sống của bạn.
            </p>
          </div>
        ) : null}
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
      <div className="flex gap-2 overflow-x-auto pb-1">
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
                  ? "border-[var(--color-charcoal)] bg-[var(--color-charcoal)] text-[var(--color-ivory)]"
                  : "border-black/8 bg-white/82 text-[var(--color-charcoal)]/84 hover:bg-white",
              )}
            >
              {option.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}

function ProjectsSkeleton() {
  return (
    <div className="mt-10 grid gap-6 lg:grid-cols-12">
      {Array.from({ length: 4 }).map((_, index) => (
        <div
          key={index}
          className={cn(
            "luxury-card animate-pulse overflow-hidden rounded-[2rem] p-4",
            index % 3 === 0 ? "lg:col-span-7" : "lg:col-span-5",
          )}
        >
          <div className="h-80 rounded-[1.6rem] bg-[rgba(21,19,17,0.06)]" />
          <div className="mt-5 h-4 w-40 rounded-full bg-[rgba(21,19,17,0.06)]" />
          <div className="mt-4 h-10 w-2/3 rounded-2xl bg-[rgba(21,19,17,0.08)]" />
          <div className="mt-4 h-12 w-full rounded-2xl bg-[rgba(21,19,17,0.05)]" />
        </div>
      ))}
    </div>
  );
}
