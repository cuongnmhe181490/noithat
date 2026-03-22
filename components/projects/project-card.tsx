import Link from "next/link";
import type { Project } from "@/lib/types";
import { MediaFrame } from "@/components/ui/media-frame";
import { cn } from "@/components/ui/cn";

type ProjectCardProps = {
  project: Project;
  featured?: boolean;
  variant?: "catalog" | "immersive";
};

export function ProjectCard({
  project,
  featured,
  variant = "catalog",
}: ProjectCardProps) {
  const immersive = variant === "immersive";

  return (
    <article
      className={cn(
        "group flex h-full flex-col overflow-hidden rounded-[2rem] border border-black/8 bg-white/74 shadow-[0_24px_60px_rgba(22,18,14,0.08)] transition duration-500 hover:-translate-y-1 hover:shadow-[0_34px_84px_rgba(22,18,14,0.12)]",
        featured && "lg:col-span-7",
      )}
    >
      <MediaFrame
        src={project.heroImage}
        alt={project.name}
        ratioClassName={
          immersive
            ? featured
              ? "aspect-[16/11]"
              : "aspect-[5/4]"
            : featured
              ? "aspect-[16/11]"
              : "aspect-[4/3]"
        }
        imageClassName="transition duration-700 group-hover:scale-[1.04]"
        caption={
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="text-[0.68rem] uppercase tracking-[0.28em] text-white/64">
                {project.type}
              </p>
              <p className="mt-1 text-sm text-white/82">
                {project.location} · {project.year}
              </p>
            </div>
            <div className="rounded-full border border-white/16 bg-white/10 px-3 py-1 text-[0.68rem] uppercase tracking-[0.24em] text-white/86">
              Case study
            </div>
          </div>
        }
      />
      <div className="flex flex-1 flex-col gap-5 p-6">
        <div className="flex flex-wrap items-center gap-2 text-[0.68rem] uppercase tracking-[0.24em] text-[var(--color-muted)]">
          <span>{project.style}</span>
          <span className="h-1 w-1 rounded-full bg-[var(--color-gold)]" />
          <span>{project.area}</span>
        </div>
        <div className="space-y-3">
          <Link href={`/projects/${project.slug}`}>
            <h3 className="font-serif text-3xl text-[var(--color-charcoal)] transition group-hover:text-[var(--color-walnut)] md:text-[2.2rem]">
              {project.name}
            </h3>
          </Link>
          <p
            className={cn(
              "text-sm leading-7 text-[var(--color-muted)]",
              immersive ? "line-clamp-2" : "line-clamp-3",
            )}
          >
            {project.summary}
          </p>
        </div>
        <div
          className={cn(
            "grid gap-3 rounded-[1.4rem] bg-[rgba(21,19,17,0.03)] p-4 sm:grid-cols-3",
            immersive && "sm:grid-cols-2",
          )}
        >
          <div>
            <p className="text-[0.64rem] uppercase tracking-[0.22em] text-[var(--color-muted)]">
              Phong cách
            </p>
            <p className="mt-2 text-sm text-[var(--color-charcoal)]">{project.style}</p>
          </div>
          <div>
            <p className="text-[0.64rem] uppercase tracking-[0.22em] text-[var(--color-muted)]">
              Diện tích
            </p>
            <p className="mt-2 text-sm text-[var(--color-charcoal)]">{project.area}</p>
          </div>
          <div>
            <p className="text-[0.64rem] uppercase tracking-[0.22em] text-[var(--color-muted)]">
              Địa điểm
            </p>
            <p className="mt-2 text-sm text-[var(--color-charcoal)]">{project.location}</p>
          </div>
        </div>
        <div className={cn("flex flex-wrap gap-2", immersive && "hidden")}>
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-black/8 bg-[var(--color-panel)]/72 px-3 py-1 text-[0.65rem] uppercase tracking-[0.22em] text-[var(--color-muted)]"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="mt-auto flex items-center justify-between border-t border-black/8 pt-5">
          <span className="text-sm text-[var(--color-muted)]">
            {project.type} · {project.year}
          </span>
          <Link className="button-secondary !px-4 !py-2" href={`/projects/${project.slug}`}>
            Xem chi tiết
          </Link>
        </div>
      </div>
    </article>
  );
}
