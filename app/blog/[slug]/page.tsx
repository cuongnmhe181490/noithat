import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { blogPosts, getBlogBySlug } from "@/data/blog";

type BlogDetailProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: BlogDetailProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogBySlug(slug);

  if (!post) {
    return { title: "Bài viết không tồn tại" };
  }

  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function BlogDetailPage({ params }: BlogDetailProps) {
  const { slug } = await params;
  const post = getBlogBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="pb-24 pt-28">
      <div className="section-shell max-w-4xl">
        <span className="eyebrow">{post.category}</span>
        <h1 className="mt-5 font-serif text-5xl leading-none md:text-7xl">
          {post.title}
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-7 text-[var(--color-muted)] md:text-lg">
          {post.excerpt}
        </p>
      </div>
      <div className="section-shell mt-10">
        <div className="relative h-[32rem] overflow-hidden rounded-[2.4rem]">
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>
      </div>
      <div className="section-shell prose-shell mt-12 max-w-3xl">
        {post.content.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </article>
  );
}
