import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin", "vietnamese"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://noithat-premium.example"),
  title: {
    default: "Mộc Du Ký Atelier | Nội thất cao cấp đương đại",
    template: "%s | Mộc Du Ký Atelier",
  },
  description:
    "Digital flagship showroom cho thương hiệu nội thất cao cấp, nơi những không gian sống được kiến tạo bằng tỷ lệ, vật liệu và cảm xúc.",
  keywords: [
    "nội thất cao cấp",
    "thiết kế nội thất biệt thự",
    "showroom nội thất",
    "portfolio nội thất",
    "thi công nội thất trọn gói",
  ],
  openGraph: {
    title: "Mộc Du Ký Atelier",
    description:
      "Khám phá dự án, vật liệu và quy trình thiết kế nội thất cao cấp trong một digital flagship showroom hiện đại.",
    type: "website",
    locale: "vi_VN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mộc Du Ký Atelier",
    description:
      "Website flagship showroom cho thương hiệu nội thất cao cấp, tối giản và giàu cảm xúc.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="vi"
      className={`${manrope.variable} ${cormorant.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full bg-[var(--color-cream)] text-[var(--color-charcoal)]">
        <div className="ambient-grid fixed inset-0 -z-10 opacity-80" />
        <div className="ambient-glow fixed inset-x-0 top-0 -z-10 h-[42rem]" />
        <SiteHeader />
        <div className="flex min-h-screen flex-col">
          <main className="flex-1 pt-0">{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
