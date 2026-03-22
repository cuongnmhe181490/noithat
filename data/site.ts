import type {
  ContactDetail,
  NavigationItem,
  ProcessStep,
  SignaturePillar,
  SiteConfig,
  SiteStat,
  Testimonial,
} from "@/lib/types";

export const siteConfig: SiteConfig = {
  name: "Mộc Du Ký Atelier",
  shortName: "MDK",
  tagline: "Digital flagship showroom cho nội thất cao cấp đương đại",
  description:
    "Mộc Du Ký Atelier kiến tạo những không gian sống cao cấp bằng tư duy biên tập, vật liệu có chiều sâu và trải nghiệm thi công được kiểm soát chặt chẽ.",
  phone: "0912 345 678",
  email: "hello@mocduky.vn",
  address: "128 Nguyễn Văn Hưởng, Thảo Điền, TP. Hồ Chí Minh",
  showroom: "Showroom riêng tư tại Thảo Điền và Hà Nội, đón khách theo lịch hẹn",
  workshop: "Xưởng sản xuất 2.000 m² tại Bình Dương",
  hours: "09:00 - 18:30 | Thứ Hai đến Thứ Bảy",
  socials: [
    { label: "Instagram", href: "https://instagram.com/mocdukyatelier" },
    { label: "Pinterest", href: "https://pinterest.com/mocdukyatelier" },
    { label: "Facebook", href: "https://facebook.com/mocdukyatelier" },
  ],
};

export const navigation: NavigationItem[] = [
  { label: "Trang chủ", href: "/" },
  { label: "Dự án", href: "/projects" },
  { label: "Dịch vụ", href: "/services" },
  { label: "Về chúng tôi", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Liên hệ", href: "/contact" },
];

export const signaturePillars: SignaturePillar[] = [
  {
    title: "Tỷ lệ sống được biên tập",
    description:
      "Không gian được cân lại bằng khoảng thở rộng, nhịp nhìn rõ ràng và bố cục có chủ đích như một spread tạp chí.",
  },
  {
    title: "Vật liệu tạo cảm xúc",
    description:
      "Gỗ, đá, kim loại và vải được chọn theo cách chúng phản ứng với ánh sáng, xúc giác và thời gian sử dụng hằng ngày.",
  },
  {
    title: "Sang trọng không phô trương",
    description:
      "Chúng tôi ưu tiên sự đắt giá đến từ chiều sâu hoàn thiện, không đến từ việc chất đầy chi tiết hay màu sắc gây nhiễu.",
  },
];

export const processSteps: ProcessStep[] = [
  {
    step: "01",
    title: "Lắng nghe bài toán sống",
    description:
      "Hiểu rõ nhịp sinh hoạt, tiêu chuẩn thẩm mỹ, mức đầu tư và kỳ vọng dài hạn của chủ nhà trước khi vẽ bất kỳ đường line nào.",
    deliverable: "Creative brief chiến lược",
  },
  {
    step: "02",
    title: "Định hình concept",
    description:
      "Xây dựng moodboard, bảng vật liệu, kịch bản ánh sáng và trục cảm xúc chủ đạo để dự án có ngôn ngữ nhất quán ngay từ đầu.",
    deliverable: "Concept board và material palette",
  },
  {
    step: "03",
    title: "Triển khai kỹ thuật",
    description:
      "Chuyển concept thành hồ sơ kỹ thuật có thể thi công thực tế, giảm tối đa xung đột giữa hình ảnh và công năng.",
    deliverable: "Bộ hồ sơ triển khai chi tiết",
  },
  {
    step: "04",
    title: "Sản xuất và thi công",
    description:
      "Kiểm soát vật liệu, tay nghề, timeline và chất lượng bề mặt trong suốt quá trình triển khai tại xưởng và công trình.",
    deliverable: "Báo cáo tiến độ và nghiệm thu",
  },
  {
    step: "05",
    title: "Styling và bàn giao",
    description:
      "Hoàn thiện ánh sáng, vật phẩm, phụ kiện và tinh chỉnh cảm xúc không gian để công trình đạt trạng thái trọn vẹn nhất.",
    deliverable: "Biên bản bàn giao hoàn chỉnh",
  },
];

export const stats: SiteStat[] = [
  {
    value: "96+",
    label: "Dự án hoàn thiện",
    detail: "Từ căn hộ cao cấp đến biệt thự nghỉ dưỡng và văn phòng thương hiệu.",
  },
  {
    value: "11 năm",
    label: "Kinh nghiệm thực chiến",
    detail: "Kiểm soát từ concept, hồ sơ kỹ thuật đến sản xuất và bàn giao.",
  },
  {
    value: "02 showroom",
    label: "Không gian trải nghiệm",
    detail: "Đón khách theo lịch hẹn riêng để tư vấn sâu và xem vật liệu thực tế.",
  },
  {
    value: "01 xưởng",
    label: "Sản xuất nội bộ",
    detail: "Chủ động tiến độ, chi tiết hoàn thiện và khả năng bespoke theo dự án.",
  },
];

export const testimonials: Testimonial[] = [
  {
    name: "Minh Anh",
    role: "Chủ căn hộ penthouse",
    project: "The Orchid Residence",
    quote:
      "Chúng tôi không tìm một căn hộ đẹp theo kiểu phô diễn. Điều cần là cảm giác yên, sang và sống rất lâu vẫn thấy đúng gu. Studio làm được điều đó cực kỳ tinh tế.",
    location: "Thảo Điền, TP. Hồ Chí Minh",
    rating: 5,
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Hoàng Nam",
    role: "Gia chủ nhà phố cải tạo",
    project: "Linen House",
    quote:
      "Điểm thuyết phục nhất là cách đội ngũ xử lý ánh sáng và lưu thông. Ngôi nhà cũ vốn chật và khá bí, sau cải tạo lại trở nên mở, ấm và có chiều sâu bất ngờ.",
    location: "Quận 3, TP. Hồ Chí Minh",
    rating: 5,
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Thu Hà",
    role: "Giám đốc vận hành",
    project: "Atelier Horizon Office",
    quote:
      "Văn phòng mới giúp thương hiệu của chúng tôi được cảm nhận ngay từ khoảnh khắc bước vào. Nó vừa đủ trang trọng để đón khách, vừa đủ ấm để đội ngũ muốn ở lại lâu hơn.",
    location: "Cầu Giấy, Hà Nội",
    rating: 5,
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=600&q=80",
  },
];

export const contactDetails: ContactDetail[] = [
  { label: "Hotline", value: siteConfig.phone },
  { label: "Email", value: siteConfig.email },
  { label: "Showroom", value: siteConfig.showroom },
  { label: "Xưởng sản xuất", value: siteConfig.workshop },
];
