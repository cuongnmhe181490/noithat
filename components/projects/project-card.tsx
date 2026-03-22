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
        "group flex h-full flex-col overflow-hidden rounded-[2rem] border border-black/7 bg-white/68 shadow-[0_18px_46px_rgba(22,18,14,0.07)] transition duration-500 hover:-translate-y-1 hover:shadow-[0_28px_72px_rgba(22,18,14,0.1)]",
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
        imageClassName="transition duration-700 group-hover:scale-[1.035]"
        caption={
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="text-[0.68rem] uppercase tracking-[0.28em] text-white/62">
                {project.type}
              </p>
              <p className="mt-1 text-sm text-white/84">
                {project.location} · {project.year}
              </p>
            </div>
            <div className="rounded-full border border-white/16 bg-white/10 px-3 py-1 text-[0.68rem] uppercase tracking-[0.24em] text-white/86">
              {project.area}
            </div>
          </div>
        }
      />

      <div className="flex flex-1 flex-col gap-4 p-6 md:p-7">
        <div className="flex flex-wrap items-center gap-2 text-[0.67rem] uppercase tracking-[0.24em] text-[var(--color-muted)]">
          <span>{project.style}</span>
          <span className="h-1 w-1 rounded-full bg-[var(--color-gold)]" />
          <span>{project.location}</span>
          {!immersive ? (
            <>
              <span className="h-1 w-1 rounded-full bg-[var(--color-gold)]" />
              <span>{project.year}</span>
            </>
          ) : null}
        </div>

        <div className="space-y-3">
          <Link href={`/projects/${project.slug}`}>
            <h3 className="font-serif text-[2.2rem] leading-[1.02] text-[var(--color-charcoal)] transition group-hover:text-[var(--color-walnut)] md:text-[2.7rem]">
              {project.name}
            </h3>
          </Link>
          <p
            className={cn(
              "max-w-2xl text-sm leading-7 text-[var(--color-muted)]",
              immersive ? "line-clamp-2" : "line-clamp-2",
            )}
          >
            {project.summary}
          </p>
        </div>

        <div className="mt-auto flex items-center justify-between gap-3 border-t border-black/7 pt-4">
          <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-[var(--color-muted)]">
            <span>{project.type}</span>
            <span>{project.area}</span>
          </div>
          <Link className="button-secondary !px-4 !py-2.5" href={`/projects/${project.slug}`}>
            Xem chi tiết
          </Link>
        </div>
      </div>
    </article>
  );
}
