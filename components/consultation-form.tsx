"use client";

import { useState } from "react";

export function ConsultationForm() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="luxury-card rounded-[2.4rem] p-6 md:p-8">
      <div className="space-y-4">
        <span className="eyebrow">Private consultation brief</span>
        <h2 className="editorial-title max-w-2xl text-[var(--color-charcoal)]">
          Một form ngắn để khách hàng điền nhanh và đủ cho buổi hẹn đầu tiên.
        </h2>
      </div>

      <form
        className="mt-8 grid gap-6"
        onSubmit={(event) => {
          event.preventDefault();
          setSubmitted(true);
        }}
      >
        <section className="rounded-[1.8rem] bg-[rgba(255,255,255,0.38)] p-5 md:p-6">
          <div className="mb-4">
            <p className="section-kicker">Bước 1 · Thông tin liên hệ</p>
          </div>
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
            <label className="grid gap-2 md:col-span-2">
              <span className="text-[0.68rem] uppercase tracking-[0.24em] text-[var(--color-muted)]">
                Email
              </span>
              <input className="field" placeholder="hello@email.com" />
            </label>
          </div>
        </section>

        <section className="rounded-[1.8rem] bg-[rgba(255,255,255,0.3)] p-5 md:p-6">
          <div className="mb-4">
            <p className="section-kicker">Bước 2 · Thông tin công trình</p>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
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
        </section>

        <section className="rounded-[1.8rem] bg-[rgba(255,255,255,0.24)] p-5 md:p-6">
          <div className="mb-4">
            <p className="section-kicker">Bước 3 · Brief nhu cầu</p>
          </div>
          <div className="grid gap-4">
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
              <input
                type="file"
                className="field file:mr-4 file:rounded-full file:border-0 file:bg-[var(--color-charcoal)] file:px-4 file:py-2 file:text-[var(--color-ivory)]"
              />
            </label>
          </div>
        </section>

        <div className="rounded-[1.6rem] bg-[rgba(21,19,17,0.03)] px-5 py-4 text-sm leading-6 text-[var(--color-muted)]">
          {submitted
            ? "Brief mẫu đã được ghi nhận."
            : "Thông tin của bạn giúp buổi hẹn đầu tiên đi thẳng vào điều quan trọng nhất."}
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4">
          <p className="max-w-sm text-xs leading-6 text-[var(--color-muted)]">
            Buổi tư vấn đầu tiên thường kéo dài 45 đến 60 phút.
          </p>
          <button type="submit" className="button-primary">
            Gửi yêu cầu tư vấn
          </button>
        </div>
      </form>
    </div>
  );
}
