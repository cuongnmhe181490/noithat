"use client";

import { useState } from "react";

export function ConsultationForm() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="rounded-[2.4rem] border border-black/8 bg-white/82 p-7 shadow-[0_22px_60px_rgba(22,18,14,0.08)]">
      <div className="space-y-4">
        <span className="eyebrow">Book private consultation</span>
        <h2 className="font-serif text-4xl leading-none text-[var(--color-charcoal)]">
          Nhận tư vấn phù hợp với gu sống và mức đầu tư của bạn.
        </h2>
        <p className="text-sm leading-7 text-[var(--color-muted)]">
          Điền nhu cầu cơ bản để đội ngũ chuẩn bị buổi tư vấn riêng, bảng vật
          liệu sơ bộ và gợi ý cấu trúc dịch vụ phù hợp.
        </p>
      </div>

      <form
        className="mt-8 grid gap-4"
        onSubmit={(event) => {
          event.preventDefault();
          setSubmitted(true);
        }}
      >
        <label className="grid gap-2">
          <span className="text-xs uppercase tracking-[0.24em] text-[var(--color-muted)]">
            Họ và tên
          </span>
          <input className="rounded-[1.2rem] border border-black/10 bg-[var(--color-cream)] px-4 py-3 outline-none" placeholder="Nguyễn Minh Anh" />
        </label>
        <div className="grid gap-4 md:grid-cols-2">
          <label className="grid gap-2">
            <span className="text-xs uppercase tracking-[0.24em] text-[var(--color-muted)]">
              Số điện thoại
            </span>
            <input className="rounded-[1.2rem] border border-black/10 bg-[var(--color-cream)] px-4 py-3 outline-none" placeholder="09xx xxx xxx" />
          </label>
          <label className="grid gap-2">
            <span className="text-xs uppercase tracking-[0.24em] text-[var(--color-muted)]">
              Email
            </span>
            <input className="rounded-[1.2rem] border border-black/10 bg-[var(--color-cream)] px-4 py-3 outline-none" placeholder="hello@email.com" />
          </label>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          <label className="grid gap-2">
            <span className="text-xs uppercase tracking-[0.24em] text-[var(--color-muted)]">
              Loại công trình
            </span>
            <select className="rounded-[1.2rem] border border-black/10 bg-[var(--color-cream)] px-4 py-3 outline-none">
              <option>Căn hộ</option>
              <option>Nhà phố</option>
              <option>Biệt thự</option>
              <option>Văn phòng</option>
            </select>
          </label>
          <label className="grid gap-2">
            <span className="text-xs uppercase tracking-[0.24em] text-[var(--color-muted)]">
              Ngân sách dự kiến
            </span>
            <select className="rounded-[1.2rem] border border-black/10 bg-[var(--color-cream)] px-4 py-3 outline-none">
              <option>Dưới 800 triệu</option>
              <option>800 triệu - 1,5 tỷ</option>
              <option>1,5 tỷ - 3 tỷ</option>
              <option>Trên 3 tỷ</option>
            </select>
          </label>
        </div>
        <label className="grid gap-2">
          <span className="text-xs uppercase tracking-[0.24em] text-[var(--color-muted)]">
            Mô tả nhu cầu
          </span>
          <textarea
            rows={5}
            className="rounded-[1.2rem] border border-black/10 bg-[var(--color-cream)] px-4 py-3 outline-none"
            placeholder="Chia sẻ diện tích, thời điểm bàn giao, phong cách mong muốn hoặc điều bạn đang chưa hài lòng với không gian hiện tại."
          />
        </label>
        <button type="submit" className="button-primary mt-2 w-full">
          Gửi yêu cầu tư vấn
        </button>
        <p className="text-xs leading-6 text-[var(--color-muted)]">
          {submitted
            ? "Yêu cầu mẫu đã được ghi nhận. Khi nối CMS hoặc API, form này có thể chuyển sang gửi dữ liệu thật ngay."
            : "Biểu mẫu hiện đang dùng dữ liệu demo, sẵn sàng thay bằng API hoặc CMS sau này."}
        </p>
      </form>
    </div>
  );
}
