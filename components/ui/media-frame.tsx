import Image from "next/image";
import type { ReactNode } from "react";
import { cn } from "@/components/ui/cn";

export interface MediaFrameProps {
  src: string;
  alt: string;
  className?: string;
  imageClassName?: string;
  ratioClassName?: string;
  caption?: ReactNode;
  badge?: ReactNode;
  priority?: boolean;
  sizes?: string;
}

export function MediaFrame({
  src,
  alt,
  className,
  imageClassName,
  ratioClassName = "aspect-[4/5]",
  caption,
  badge,
  priority,
  sizes = "(max-width: 768px) 100vw, 50vw",
}: MediaFrameProps) {
  return (
    <figure
      className={cn(
        "relative isolate overflow-hidden rounded-[2rem] border border-white/12 bg-stone-950 shadow-[0_28px_80px_rgba(15,15,16,0.28)]",
        ratioClassName,
        className,
      )}
    >
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes={sizes}
        className={cn("object-cover", imageClassName)}
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,10,11,0.02)_0%,rgba(10,10,11,0.08)_35%,rgba(10,10,11,0.6)_100%)]" />
      <div className="absolute inset-0 ring-1 ring-inset ring-white/10" />
      {badge ? <div className="absolute left-5 top-5 z-10">{badge}</div> : null}
      {caption ? (
        <figcaption className="absolute bottom-0 left-0 right-0 z-10 p-5 text-sm text-stone-50/88">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}
