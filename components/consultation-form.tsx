"use client";

import { useState } from "react";

export function ConsultationForm() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="luxury-card rounded-[2.4rem] p-7 md:p-8">
      <div className="space-y-4">
        <span className="eyebrow">Private consultation brief</span>
        <h2 className="editorial-title max-w-2xl text-[var(--color-charcoal)]">
          Để lại brief ngắn để đội ngũ chuẩn bị đúng cuộc hẹn dành cho bạn.
        </h2>
        <p className="max-w-xl text-sm leading-7 text-[var(--color-muted)]">
          Chúng tôi ưu tiên một buổi tư vấn được chuẩn bị kỹ, có định hướng theo
          loại công trình, diện tích, gu thẩm mỹ và mức đầu tư thực tế.
        </p>
      </div>

      <form
        className="mt-8 grid gap-4"
        onSubmit={(event) => {
          event.preventDefault();
          setSubmitted(true);
        }}
      >
        <div className="grid gap-4 md:grid-cols-2">
          <label className="grid gap-2">
            <span className="text-[0.68rem] uppercase tracking-[0.24em] text-[var(--color-muted)]">
              Họ và tên
            </span>
            <input className="field" placeholder="Nguyễn Minh Anh" />
          </label>
          <label className="grid gap-2">
            <span className="text-[0.68rem] uppercase tracking-[0.24em] text-[var(--color-muted)]">
              Số điện thoại
            </span>
            <input className="field" placeholder="09xx xxx xxx" />
          </label>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          <label className="grid gap-2">
            <span className="text-[0.68rem] uppercase tracking-[0.24em] text-[var(--color-muted)]">
              Email
            </span>
            <input className="field" placeholder="hello@email.com" />
          </label>
          <label className="grid gap-2">
            <span className="text-[0.68rem] uppercase tracking-[0.24em] text-[var(--color-muted)]">
              Loại công trình
            </span>
            <select className="select">
              <option>Căn hộ</option>
              <option>Nhà phố</option>
              <option>Biệt thự</option>
              <option>Văn phòng</option>
            </select>
          </label>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          <label className="grid gap-2">
            <span className="text-[0.68rem] uppercase tracking-[0.24em] text-[var(--color-muted)]">
              Diện tích
            </span>
            <input className="field" placeholder="Ví dụ: 180 m²" />
          </label>
          <label className="grid gap-2">
            <span className="text-[0.68rem] uppercase tracking-[0.24em] text-[var(--color-muted)]">
              Ngân sách
            </span>
            <select className="select">
              <option>Dưới 800 triệu</option>
              <option>800 triệu - 1,5 tỷ</option>
              <option>1,5 tỷ - 3 tỷ</option>
              <option>Trên 3 tỷ</option>
            </select>
          </label>
          <label className="grid gap-2">
            <span className="text-[0.68rem] uppercase tracking-[0.24em] text-[var(--color-muted)]">
              Phong cách yêu thích
            </span>
            <select className="select">
              <option>Tối giản ấm</option>
              <option>Japandi</option>
              <option>Modern luxury</option>
              <option>Resort luxury</option>
            </select>
          </label>
        </div>
        <label className="grid gap-2">
          <span className="text-[0.68rem] uppercase tracking-[0.24em] text-[var(--color-muted)]">
            Mô tả nhu cầu
          </span>
          <textarea
            rows={5}
            className="textarea"
            placeholder="Chia sẻ tình trạng công trình, thời điểm bàn giao, nhu cầu sinh hoạt và điều bạn mong muốn nhất ở không gian mới."
          />
        </label>
        <label className="grid gap-2">
          <span className="text-[0.68rem] uppercase tracking-[0.24em] text-[var(--color-muted)]">
            Ảnh tham khảo
          </span>
          <input type="file" className="field file:mr-4 file:rounded-full file:border-0 file:bg-[var(--color-charcoal)] file:px-4 file:py-2 file:text-[var(--color-ivory)]" />
        </label>
        <div className="mt-2 flex flex-wrap items-center justify-between gap-4">
          <p className="max-w-md text-xs leading-6 text-[var(--color-muted)]">
            {submitted
              ? "Brief mẫu đã được ghi nhận. Khi nối API hoặc CMS, form này có thể gửi dữ liệu thật ngay mà không cần đổi cấu trúc."
              : "Thông tin này giúp buổi tư vấn đầu tiên đi thẳng vào điều quan trọng nhất với công trình của bạn."}
          </p>
          <button type="submit" className="button-primary">
            Gửi yêu cầu tư vấn
          </button>
        </div>
      </form>
    </div>
  );
}
