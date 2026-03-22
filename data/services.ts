import type { Service } from "@/lib/types";

export const services: Service[] = [
  {
    slug: "tu-van-concept",
    name: "Tư vấn chiến lược và concept",
    summary:
      "Làm rõ gu thẩm mỹ, cách sống và tinh thần không gian trước khi bước vào thiết kế chi tiết.",
    description:
      "Dành cho khách hàng muốn xác lập định hướng thẩm mỹ, bảng vật liệu và cảm xúc tổng thể ngay từ giai đoạn đầu để tránh sửa đổi tốn kém về sau.",
    deliverables: [
      "Creative brief chiến lược",
      "Moodboard phong cách",
      "Material palette sơ bộ",
      "Định hướng ánh sáng và trải nghiệm",
    ],
    outcomes: [
      "Rõ gu thẩm mỹ và mức đầu tư",
      "Giảm thay đổi trong quá trình triển khai",
      "Tạo nền tảng vững cho toàn bộ dự án",
    ],
    suitedFor: [
      "Gia chủ chuẩn bị xây mới",
      "Khách hàng muốn tái định vị không gian sống",
      "Dự án cần chốt direction trước khi đi sâu",
    ],
    faqs: [
      {
        question: "Giai đoạn này phù hợp khi nào?",
        answer:
          "Khi khách hàng muốn làm rõ ngôn ngữ thẩm mỹ, vật liệu và mức đầu tư trước khi bước vào thiết kế chi tiết hoặc thi công.",
      },
    ],
    image:
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1600&q=80",
  },
  {
    slug: "thiet-ke-noi-that",
    name: "Thiết kế nội thất trọn gói",
    summary:
      "Phát triển từ mặt bằng công năng đến 3D và hồ sơ kỹ thuật với ngôn ngữ cao cấp, nhất quán.",
    description:
      "Một quy trình hoàn chỉnh để biến yêu cầu sống thành bộ thiết kế có thể thi công thực tế, cân bằng thẩm mỹ, công năng và ngân sách.",
    deliverables: [
      "Mặt bằng công năng",
      "3D phối cảnh",
      "Bộ hồ sơ kỹ thuật",
      "Danh mục vật liệu hoàn thiện",
    ],
    outcomes: [
      "Không gian có cấu trúc rõ ràng",
      "Tỷ lệ và ánh sáng được kiểm soát tốt",
      "Sẵn sàng chuyển sang thi công",
    ],
    suitedFor: ["Căn hộ cao cấp", "Nhà phố cải tạo", "Biệt thự hoặc second home"],
    faqs: [
      {
        question: "Có thể chỉ thuê thiết kế mà chưa thi công không?",
        answer:
          "Có. Hồ sơ thiết kế được chuẩn hóa để khách hàng có thể triển khai với đội thi công khác nếu cần, dù chúng tôi luôn khuyến nghị một đầu mối đồng bộ hơn.",
      },
    ],
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1600&q=80",
  },
  {
    slug: "thi-cong-tron-goi",
    name: "Thi công hoàn thiện trọn gói",
    summary:
      "Kiểm soát chất lượng và tiến độ từ vật liệu, tay nghề đến nghiệm thu cuối cùng.",
    description:
      "Studio đứng vai trò đầu mối xuyên suốt giữa thiết kế, sản xuất và công trường để bảo toàn chất lượng hoàn thiện như hồ sơ đã duyệt.",
    deliverables: [
      "Kế hoạch triển khai chi tiết",
      "Lịch vật tư và nghiệm thu",
      "Báo cáo tiến độ",
      "Bàn giao hoàn thiện",
    ],
    outcomes: [
      "Giảm rủi ro phát sinh",
      "Đồng nhất chất lượng đầu cuối",
      "Tối ưu thời gian phối hợp giữa các bên",
    ],
    suitedFor: [
      "Khách hàng cần một đầu mối chịu trách nhiệm",
      "Công trình yêu cầu hoàn thiện cao",
      "Dự án muốn bám sát hình ảnh thiết kế",
    ],
    faqs: [
      {
        question: "Làm sao kiểm soát phát sinh khi thi công?",
        answer:
          "Chúng tôi khóa vật liệu, timeline, hồ sơ và cơ chế nghiệm thu theo mốc rõ ràng để giảm tối đa phát sinh cảm tính trong quá trình triển khai.",
      },
    ],
    image:
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1600&q=80",
  },
  {
    slug: "san-xuat-bespoke",
    name: "Sản xuất bespoke và đồ gỗ",
    summary:
      "Gia công đồ gỗ, hệ tủ và chi tiết nội thất riêng theo đúng tỷ lệ, màu sắc và mức hoàn thiện dự án.",
    description:
      "Tận dụng năng lực xưởng để tạo ra những chi tiết cá nhân hóa cao, từ đồ rời đến hệ tủ lớn và các bề mặt hoàn thiện đặc thù.",
    deliverables: [
      "Bản vẽ sản xuất",
      "Mẫu hoàn thiện vật liệu",
      "Gia công tại xưởng",
      "Lắp đặt và cân chỉnh tại công trình",
    ],
    outcomes: [
      "Độ khớp cao với hồ sơ thiết kế",
      "Chi tiết hoàn thiện tinh hơn hàng sản xuất đại trà",
      "Dễ kiểm soát bảo trì và nâng cấp sau này",
    ],
    suitedFor: ["Biệt thự", "Căn hộ penthouse", "Không gian cần tỷ lệ bespoke"],
    faqs: [
      {
        question: "Studio có thể làm bespoke ở mức nào?",
        answer:
          "Từ hệ tủ lớn, island bếp, bàn console cho tới các chi tiết ốp và phần tay nắm hoàn thiện riêng theo từng dự án.",
      },
    ],
    image:
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1600&q=80",
  },
];

export function getServiceBySlug(slug: string) {
  return services.find((service) => service.slug === slug);
}
