"use client";

import { useState } from "react";

export function ConsultationForm() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="luxury-card rounded-[2.4rem] p-7 md:p-8">
      <div className="space-y-4">
        <span className="eyebrow">Private consultation brief</span>
        <h2 className="editorial-title max-w-2xl text-[var(--color-charcoal)]">
          Một form ngắn, chia nhịp rõ, để khách hàng dễ điền và studio dễ chuẩn bị.
        </h2>
        <p className="max-w-xl text-sm leading-7 text-[var(--color-muted)]">
          Bạn không cần điền mọi thứ thật hoàn hảo. Chỉ cần đủ thông tin để đội ngũ
          hiểu bối cảnh công trình và chuẩn bị cuộc hẹn đầu tiên đúng trọng tâm.
        </p>
      </div>

      <form
        className="mt-8 grid gap-7"
        onSubmit={(event) => {
          event.preventDefault();
          setSubmitted(true);
        }}
      >
        <section className="grid gap-4">
          <div>
            <p className="section-kicker">Thông tin liên hệ</p>
            <p className="mt-2 text-sm leading-7 text-[var(--color-muted)]">
              Chỉ cần thông tin cơ bản để chúng tôi phản hồi lại lịch hẹn.
            </p>
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
          </div>
          <label className="grid gap-2">
            <span className="text-[0.68rem] uppercase tracking-[0.24em] text-[var(--color-muted)]">
              Email
            </span>
            <input className="field" placeholder="hello@email.com" />
          </label>
        </section>

        <section className="grid gap-4">
          <div>
            <p className="section-kicker">Thông tin công trình</p>
            <p className="mt-2 text-sm leading-7 text-[var(--color-muted)]">
              Những trường này giúp định hình nhanh quy mô và hướng tư vấn phù hợp.
            </p>
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
          </div>
          <div className="grid gap-4 md:grid-cols-2">
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

        <section className="grid gap-4">
          <div>
            <p className="section-kicker">Brief nhu cầu</p>
            <p className="mt-2 text-sm leading-7 text-[var(--color-muted)]">
              Chỉ cần vài dòng về tình trạng hiện tại, điều bạn đang mong muốn nhất và mốc thời gian dự kiến.
            </p>
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
            <input
              type="file"
              className="field file:mr-4 file:rounded-full file:border-0 file:bg-[var(--color-charcoal)] file:px-4 file:py-2 file:text-[var(--color-ivory)]"
            />
          </label>
        </section>

        <div className="rounded-[1.6rem] bg-[rgba(21,19,17,0.03)] px-5 py-4 text-sm leading-7 text-[var(--color-muted)]">
          {submitted
            ? "Brief mẫu đã được ghi nhận. Khi nối API hoặc CMS, form này có thể gửi dữ liệu thật ngay mà không cần đổi lại cấu trúc."
            : "Thông tin của bạn giúp cuộc hẹn đầu tiên đi thẳng vào điều quan trọng nhất: nhu cầu sống, phạm vi công việc và mức đầu tư phù hợp."}
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4">
          <p className="max-w-md text-xs leading-6 text-[var(--color-muted)]">
            Buổi tư vấn đầu tiên thường kéo dài 45 đến 60 phút và phù hợp nhất khi
            khách hàng đã có nhu cầu thực sự trong 1 đến 6 tháng tới.
          </p>
          <button type="submit" className="button-primary">
            Gửi yêu cầu tư vấn
          </button>
        </div>
      </form>
    </div>
  );
}
