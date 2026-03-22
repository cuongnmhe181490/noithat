"use client";

import Link from "next/link";
import type { ReactNode } from "react";

import { cn } from "./cn";

export interface ActionLinkProps {
  href: string;
  label?: string;
  children?: ReactNode;
  external?: boolean;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  target?: string;
  rel?: string;
}

const variantClasses: Record<NonNullable<ActionLinkProps["variant"]>, string> = {
  primary:
    "bg-stone-950 text-stone-50 shadow-[0_18px_60px_rgba(17,17,17,0.28)] hover:bg-stone-800",
  secondary:
    "border border-stone-300/80 bg-stone-50/70 text-stone-950 hover:border-stone-400 hover:bg-stone-100",
  ghost:
    "border border-transparent bg-transparent text-stone-100/90 hover:bg-white/8 hover:text-white",
};

export function ActionLink({
  href,
  label,
  children,
  external,
  variant = "primary",
  className,
  target,
  rel,
}: ActionLinkProps) {
  const content = children ?? label;
  const isExternal = external || /^https?:\/\//.test(href);

  return (
    <Link
      href={href}
      target={target ?? (isExternal ? "_blank" : undefined)}
      rel={rel ?? (isExternal ? "noreferrer" : undefined)}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-medium tracking-wide transition duration-300 ease-out focus:outline-none focus-visible:ring-2 focus-visible:ring-stone-950/60 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent",
        variantClasses[variant],
        className,
      )}
    >
      {content}
    </Link>
  );
}
