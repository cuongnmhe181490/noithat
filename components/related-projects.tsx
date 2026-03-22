import type { Project } from "@/lib/types";
import { ProjectCard } from "@/components/projects/project-card";
import { SectionHeading } from "@/components/section-heading";

export function RelatedProjects({ projects }: { projects: Project[] }) {
  if (!projects.length) return null;

  return (
    <section className="section-shell section-pad">
      <SectionHeading
        eyebrow="Dự án liên quan"
        title="Những case study gần nhất với gu sống hoặc loại công trình của bạn."
        description="Nếu cách tiếp cận của dự án này phù hợp, đây là những không gian tiếp theo nên xem trước khi đặt lịch tư vấn."
        align="left"
      />
      <div className="mt-10 grid gap-5 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </section>
  );
}
