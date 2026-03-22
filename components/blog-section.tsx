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
          title="Một editorial journal nên mời người dùng ở lại đọc, không chỉ cho thấy rằng website có blog."
          description="Chúng tôi tăng nhịp hình ảnh, giảm sự đều tay của card và làm rõ hơn thứ tự đọc để section này giống một tạp chí thương hiệu hơn."
          align="left"
        />
        <Link href="/blog" className="button-secondary hidden md:inline-flex">
          Xem tất cả bài viết
        </Link>
      </div>

      <div className="mt-10 grid gap-5 lg:grid-cols-[1.18fr_0.82fr]">
        {featured ? (
          <article className="luxury-card overflow-hidden rounded-[2.2rem]">
            <Link href={`/blog/${featured.slug}`} className="block">
              <div className="relative h-[30rem]">
                <Image
                  src={featured.coverImage}
                  alt={featured.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-cover"
                />
              </div>
            </Link>
            <div className="space-y-4 p-7">
              <div className="flex flex-wrap items-center gap-3 text-[0.68rem] uppercase tracking-[0.24em] text-[var(--color-muted)]">
                <span>{featured.category}</span>
                <span className="h-1 w-1 rounded-full bg-[var(--color-gold)]" />
                <span>{featured.readingTime}</span>
                <span className="h-1 w-1 rounded-full bg-[var(--color-gold)]" />
                <span>{featured.publishedAt}</span>
              </div>
              <Link href={`/blog/${featured.slug}`}>
                <h3 className="font-serif text-[2.8rem] leading-[1.02] text-[var(--color-charcoal)]">
                  {featured.title}
                </h3>
              </Link>
              <p className="max-w-2xl text-sm leading-7 text-[var(--color-muted)]">
                {featured.excerpt}
              </p>
            </div>
          </article>
        ) : null}

        <div className="grid gap-5">
          {rest.map((post) => (
            <article key={post.slug} className="luxury-card overflow-hidden rounded-[2rem] p-4">
              <div className="grid gap-4 md:grid-cols-[9rem_1fr]">
                <Link href={`/blog/${post.slug}`} className="block">
                  <div className="relative h-36 overflow-hidden rounded-[1.4rem]">
                    <Image
                      src={post.coverImage}
                      alt={post.title}
                      fill
                      sizes="160px"
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
                    <h3 className="font-serif text-[2rem] leading-[1.06] text-[var(--color-charcoal)]">
                      {post.title}
                    </h3>
                  </Link>
                  <p className="line-clamp-2 text-sm leading-7 text-[var(--color-muted)]">
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
