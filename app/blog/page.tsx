import type { Metadata } from "next";
import Link from "next/link";
import { BlogSection } from "@/components/blog-section";
import { blogPosts } from "@/data/blog";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Luxury editorial journal về phong cách sống, vật liệu và các quyết định nội thất dành cho khách hàng cao cấp tại Việt Nam.",
};

export default function BlogPage() {
  return (
    <section className="pb-24 pt-20">
      <div className="section-shell luxury-frame relative min-h-[30rem] overflow-hidden rounded-[2.8rem]">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1800&q=80')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(11,10,8,0.18),rgba(11,10,8,0.82))]" />
        <div className="relative flex min-h-[30rem] flex-col justify-end px-6 pb-8 pt-20 text-[var(--color-ivory)] md:px-10">
          <span className="eyebrow border-white/16 bg-white/10 text-white">
            Journal / Lookbook
          </span>
          <h1 className="mt-6 max-w-4xl font-serif text-5xl leading-none md:text-7xl">
            Một editorial journal nên gợi cảm hứng trước khi nó thuyết phục.
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-8 text-white/74 md:text-lg">
            Ở đây, bài viết được trình bày theo nhịp magazine: ảnh dẫn cảm xúc trước,
            metadata gọn và typography đủ thoáng để người xem muốn đọc tiếp.
          </p>
        </div>
      </div>
      <BlogSection posts={blogPosts} />
      <div className="section-shell mt-4">
        <Link href="/contact" className="button-secondary">
          Nhận concept sơ bộ theo brief của bạn
        </Link>
      </div>
    </section>
  );
}
