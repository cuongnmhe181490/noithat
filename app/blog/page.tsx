import type { Metadata } from "next";
import Link from "next/link";
import { BlogSection } from "@/components/blog-section";
import { blogPosts } from "@/data/blog";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Lookbook cảm hứng, chia sẻ vật liệu và góc nhìn thẩm mỹ cho những chủ nhà đang xây dựng không gian sống đương đại.",
};

export default function BlogPage() {
  return (
    <section className="pb-24 pt-32">
      <div className="section-shell mb-12 max-w-4xl">
        <span className="eyebrow">Lookbook journal</span>
        <h1 className="mt-5 font-serif text-5xl leading-none md:text-7xl">
          Những ghi chép thẩm mỹ dành cho người đang kiến tạo tổ ấm cao cấp.
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-7 text-[var(--color-muted)] md:text-lg">
          Từ cách phối vật liệu đến tâm lý ánh sáng trong không gian sống, mỗi
          bài viết là một chương nhỏ để khách hàng hiểu sâu hơn trước khi quyết
          định đầu tư.
        </p>
      </div>
      <BlogSection posts={blogPosts} />
      <div className="section-shell mt-12">
        <Link href="/contact" className="button-secondary">
          Nhận bản tư vấn concept riêng
        </Link>
      </div>
    </section>
  );
}
