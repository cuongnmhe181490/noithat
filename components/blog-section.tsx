import Link from "next/link";
import Image from "next/image";
import type { BlogPost } from "@/lib/types";
import { SectionHeading } from "@/components/section-heading";

export function BlogSection({ posts }: { posts: BlogPost[] }) {
  const [featured, ...rest] = posts;

  return (
    <section className="section-shell section-pad">
      <div className="flex items-end justify-between gap-6">
        <SectionHeading
          eyebrow="Lookbook journal"
          title="Một journal tốt nên kéo người xem ở lại nhẹ nhàng, không bắt họ đọc quá nhiều."
          align="left"
        />
        <Link href="/blog" className="button-secondary hidden md:inline-flex">
          Xem tất cả bài viết
        </Link>
      </div>

      <div className="mt-12 grid gap-6 lg:grid-cols-[1.08fr_0.92fr]">
        {featured ? (
          <article className="overflow-hidden rounded-[2.4rem] border border-black/8 bg-[rgba(255,252,247,0.64)] shadow-[0_20px_54px_rgba(22,18,14,0.08)]">
            <Link href={`/blog/${featured.slug}`} className="block">
              <div className="relative h-[31rem]">
                <Image
                  src={featured.coverImage}
                  alt={featured.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 58vw"
                  className="object-cover"
                />
              </div>
            </Link>
            <div className="space-y-4 p-7 md:p-8">
              <div className="flex flex-wrap items-center gap-3 text-[0.68rem] uppercase tracking-[0.24em] text-[var(--color-muted)]">
                <span>{featured.category}</span>
                <span className="h-1 w-1 rounded-full bg-[var(--color-gold)]" />
                <span>{featured.readingTime}</span>
              </div>
              <Link href={`/blog/${featured.slug}`}>
                <h3 className="max-w-3xl font-serif text-[2.5rem] leading-[1.04] text-[var(--color-charcoal)] md:text-[2.8rem]">
                  {featured.title}
                </h3>
              </Link>
              <p className="max-w-[50ch] text-sm leading-6 text-[var(--color-muted)] line-clamp-2">
                {featured.excerpt}
              </p>
            </div>
          </article>
        ) : null}

        <div className="grid gap-5">
          {rest.map((post, index) => (
            <article
              key={post.slug}
              className={index === 0 ? "luxury-card rounded-[2rem] p-5" : "rounded-[2rem] border-b border-black/8 pb-5"}
            >
              <div className="grid gap-4 md:grid-cols-[10rem_1fr]">
                <Link href={`/blog/${post.slug}`} className="block">
                  <div className="relative h-40 overflow-hidden rounded-[1.5rem]">
                    <Image
                      src={post.coverImage}
                      alt={post.title}
                      fill
                      sizes="180px"
                      className="object-cover"
                    />
                  </div>
                </Link>
                <div className="space-y-3 py-1">
                  <div className="flex flex-wrap items-center gap-2 text-[0.66rem] uppercase tracking-[0.22em] text-[var(--color-muted)]">
                    <span>{post.category}</span>
                    <span className="h-1 w-1 rounded-full bg-[var(--color-gold)]" />
                    <span>{post.readingTime}</span>
                  </div>
                  <Link href={`/blog/${post.slug}`}>
                    <h3 className="text-[1.35rem] font-medium leading-[1.12] tracking-[-0.02em] text-[var(--color-charcoal)]">
                      {post.title}
                    </h3>
                  </Link>
                  <p className="line-clamp-2 max-w-[42ch] text-sm leading-6 text-[var(--color-muted)]">
                    {post.excerpt}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
