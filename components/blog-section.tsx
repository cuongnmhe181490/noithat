import Link from "next/link";
import Image from "next/image";
import type { BlogPost } from "@/lib/types";
import { SectionHeading } from "@/components/section-heading";

export function BlogSection({ posts }: { posts: BlogPost[] }) {
  return (
    <section className="section-shell py-20 md:py-28">
      <div className="flex items-end justify-between gap-6">
        <SectionHeading
          eyebrow="Lookbook journal"
          title="Blog và cảm hứng nội thất dành cho những quyết định đầu tư có chiều sâu."
          description="Những bài viết ngắn gọn nhưng đủ tinh để giúp khách hàng hiểu thêm về vật liệu, phong cách và quy trình trước khi chốt dự án."
          align="left"
        />
        <Link href="/blog" className="button-secondary hidden md:inline-flex">
          Xem tất cả bài viết
        </Link>
      </div>
      <div className="mt-10 grid gap-5 lg:grid-cols-3">
        {posts.map((post, index) => (
          <article
            key={post.slug}
            className={`overflow-hidden rounded-[2rem] border border-black/8 bg-white/78 shadow-[0_18px_54px_rgba(22,18,14,0.06)] ${index === 0 ? "lg:col-span-2" : ""}`}
          >
            <Link href={`/blog/${post.slug}`} className="block">
              <div className={`relative ${index === 0 ? "h-[24rem]" : "h-[18rem]"}`}>
                <Image
                  src={post.coverImage}
                  alt={post.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </Link>
            <div className="space-y-4 p-6">
              <div className="flex flex-wrap items-center gap-3 text-[0.68rem] uppercase tracking-[0.24em] text-[var(--color-muted)]">
                <span>{post.category}</span>
                <span className="h-1 w-1 rounded-full bg-[var(--color-gold)]" />
                <span>{post.readingTime}</span>
                <span className="h-1 w-1 rounded-full bg-[var(--color-gold)]" />
                <span>{post.publishedAt}</span>
              </div>
              <Link href={`/blog/${post.slug}`}>
                <h3 className="font-serif text-3xl text-[var(--color-charcoal)]">
                  {post.title}
                </h3>
              </Link>
              <p className="text-sm leading-7 text-[var(--color-muted)]">
                {post.excerpt}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
