import Link from "next/link";

export default function NotFound() {
  return (
    <section className="section-shell flex min-h-[70vh] flex-col items-start justify-center gap-8 py-32">
      <span className="eyebrow">404</span>
      <div className="max-w-2xl space-y-4">
        <h1 className="font-serif text-5xl leading-none text-[var(--color-charcoal)] md:text-7xl">
          Không gian bạn tìm kiếm không còn ở đây.
        </h1>
        <p className="max-w-xl text-base leading-7 text-[var(--color-muted)] md:text-lg">
          Liên kết có thể đã thay đổi trong quá trình cập nhật showroom số.
          Hãy quay về trang chủ hoặc xem bộ sưu tập dự án đang trưng bày.
        </p>
      </div>
      <div className="flex flex-wrap gap-4">
        <Link className="button-primary" href="/">
          Về trang chủ
        </Link>
        <Link className="button-secondary" href="/projects">
          Xem dự án
        </Link>
      </div>
    </section>
  );
}
