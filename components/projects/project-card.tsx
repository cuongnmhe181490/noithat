import Link from "next/link";
import type { Project } from "@/lib/types";
import { MediaFrame } from "@/components/ui/media-frame";
import { cn } from "@/components/ui/cn";

type ProjectCardProps = {
  project: Project;
  featured?: boolean;
};

export function ProjectCard({ project, featured }: ProjectCardProps) {
  return (
    <article
      className={cn(
        "group flex h-full flex-col overflow-hidden rounded-[2rem] border border-black/8 bg-white/74 shadow-[0_24px_60px_rgba(22,18,14,0.08)]",
        featured && "lg:col-span-7",
      )}
    >
      <MediaFrame
        src={project.heroImage}
        alt={project.name}
        ratioClassName={featured ? "aspect-[16/11]" : "aspect-[4/3]"}
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
            <h3 className="font-serif text-3xl text-[var(--color-charcoal)] transition group-hover:text-[var(--color-walnut)]">
              {project.name}
            </h3>
          </Link>
          <p className="text-sm leading-7 text-[var(--color-muted)]">
            {project.summary}
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
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
          <span className="text-sm text-[var(--color-muted)]">{project.location}</span>
          <Link className="button-secondary !px-4 !py-2" href={`/projects/${project.slug}`}>
            Xem chi tiết
          </Link>
        </div>
      </div>
    </article>
  );
}
