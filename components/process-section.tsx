import type { ProcessStep } from "@/lib/types";
import { SectionHeading } from "@/components/section-heading";

export function ProcessSection({ steps }: { steps: ProcessStep[] }) {
  return (
    <section className="section-shell py-20 md:py-28">
      <SectionHeading
        eyebrow="Workflow"
        title="Quy trình 5 bước để cảm xúc thiết kế không thất lạc trong lúc thi công."
        description="Mỗi mốc đều có đầu ra rõ ràng, giúp khách hàng theo dõi tiến độ mà vẫn giữ được chất lượng thẩm mỹ xuyên suốt."
      />
      <div className="mt-10 grid gap-4 lg:grid-cols-5">
        {steps.map((step) => (
          <article
            key={step.step}
            className="rounded-[1.8rem] border border-black/8 bg-[var(--color-panel)]/62 p-6"
          >
            <p className="text-[0.68rem] uppercase tracking-[0.28em] text-[var(--color-muted)]">
              {step.step}
            </p>
            <h3 className="mt-4 font-serif text-3xl text-[var(--color-charcoal)]">
              {step.title}
            </h3>
            <p className="mt-4 text-sm leading-7 text-[var(--color-muted)]">
              {step.description}
            </p>
            <p className="mt-6 text-xs uppercase tracking-[0.24em] text-[var(--color-walnut)]">
              {step.deliverable}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
