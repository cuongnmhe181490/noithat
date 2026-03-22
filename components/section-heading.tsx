import { cn } from "@/components/ui/cn";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "space-y-5",
        align === "center" && "mx-auto max-w-3xl text-center",
        align === "left" && "max-w-3xl",
        className,
      )}
    >
      {eyebrow ? <span className="eyebrow">{eyebrow}</span> : null}
      <h2 className="font-serif text-[clamp(2.35rem,4vw,4.3rem)] leading-[0.98] text-[var(--color-charcoal)]">
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            "max-w-[62ch] text-[0.98rem] leading-8 text-[var(--color-muted)] md:text-[1.02rem]",
            align === "center" && "mx-auto",
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
