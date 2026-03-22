import type { FilterOption, Project, ProjectCategory, ProjectFilters } from "@/lib/types";

export const projectCategories: ProjectCategory[] = [
  {
    slug: "can-ho",
    title: "Căn hộ",
    description:
      "Tối ưu diện tích bằng ngôn ngữ sang trọng tiết chế, phù hợp nhịp sống đô thị cao cấp.",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1400&q=80",
    metric: "28 dự án đã bàn giao",
  },
  {
    slug: "nha-pho",
    title: "Nhà phố",
    description:
      "Tái cấu trúc ánh sáng, giao thông và công năng để nhà phố trở nên thoáng, ấm và có chiều sâu.",
    image:
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1400&q=80",
    metric: "16 công trình cải tạo và mới",
  },
  {
    slug: "biet-thu",
    title: "Biệt thự",
    description:
      "Không gian sống mang chuẩn nghỉ dưỡng riêng tư với vật liệu cao cấp và nhịp thị giác tinh lọc.",
    image:
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1400&q=80",
    metric: "12 villa signature",
  },
  {
    slug: "van-phong",
    title: "Văn phòng",
    description:
      "Trải nghiệm thương hiệu được chuyển hóa thành môi trường làm việc rõ bản sắc và thuyết phục.",
    image:
      "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1400&q=80",
    metric: "19 không gian thương hiệu",
  },
];

export const projects: Project[] = [
  {
    slug: "the-orchid-residence",
    name: "The Orchid Residence",
    type: "Căn hộ",
    typeKey: "can-ho",
    style: "Tối giản ấm",
    styleKey: "toi-gian-am",
    area: "128 m²",
    areaValue: 128,
    location: "Thảo Điền, TP. Hồ Chí Minh",
    year: "2025",
    featured: true,
    summary:
      "Căn hộ penthouse được cân chỉnh bằng ánh sáng tự nhiên, veneer gỗ sáng và những khoảng nghỉ đủ yên để mọi chi tiết trở nên đắt giá.",
    concept:
      "Concept xoay quanh cảm giác chậm và ấm. Mặt bằng mở giúp tầm nhìn liên tục từ phòng khách qua bếp đến sân hiên, trong khi bảng vật liệu trung tính giữ lại độ tĩnh cho toàn bộ căn hộ.",
    challenge:
      "Không gian penthouse có nhiều góc chuyển và mặt kính lớn, dễ tạo cảm giác lạnh và rời rạc nếu xử lý vật liệu không đủ tinh.",
    solution:
      "Chúng tôi dùng trục vật liệu ấm liên tục, ánh sáng gián tiếp và hệ nội thất thấp để cân lại tỷ lệ, khiến toàn bộ căn hộ liền mạch và sang theo cách rất yên.",
    materials: ["Oak veneer", "Limestone mài mờ", "Linen tự nhiên", "Brushed brass"],
    signatureDetails: [
      "Bếp đảo nối trực tiếp với bàn ăn như một lõi giao tiếp trung tâm.",
      "Hệ đèn hắt trần giữ khối kiến trúc mềm và không phá cảm giác tối giản.",
      "Các mảng veneer lớn được căn vân liên tục để tăng chiều sâu nhìn gần.",
    ],
    heroImage:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1800&q=80",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1800&q=80",
      "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1800&q=80",
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1800&q=80",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1800&q=80",
    ],
    beforeAfter: {
      before:
        "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1800&q=80",
      after:
        "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1800&q=80",
      caption:
        "Không gian cũ được mở lại bằng các trục nhìn dài, giảm vách chia và thay toàn bộ lớp hoàn thiện nặng nề bằng bảng vật liệu sáng, ấm và giàu xúc giác.",
    },
    timeline: [
      {
        phase: "Khảo sát và briefing",
        duration: "1 tuần",
        details:
          "Đo đạc hiện trạng, làm rõ yêu cầu lưu trữ, tiếp khách và nhịp sinh hoạt thường ngày của gia chủ.",
      },
      {
        phase: "Concept và vật liệu",
        duration: "2 tuần",
        details:
          "Chốt moodboard, tinh thần ánh sáng, các mảng veneer và hệ đá cho khu bếp trung tâm.",
      },
      {
        phase: "Triển khai kỹ thuật",
        duration: "2 tuần",
        details:
          "Hoàn thiện hồ sơ chi tiết cho đồ gỗ, hệ cửa và xử lý trần để thi công chính xác.",
      },
      {
        phase: "Sản xuất và lắp đặt",
        duration: "6 tuần",
        details:
          "Gia công đồ rời, kiểm soát màu hoàn thiện tại xưởng và lắp đặt đồng bộ tại công trình.",
      },
    ],
    tags: ["penthouse", "warm minimal", "thảo điền", "full interior"],
  },
  {
    slug: "linen-house",
    name: "Linen House",
    type: "Nhà phố",
    typeKey: "nha-pho",
    style: "Japandi",
    styleKey: "japandi",
    area: "186 m²",
    areaValue: 186,
    location: "Quận 3, TP. Hồ Chí Minh",
    year: "2025",
    featured: true,
    summary:
      "Dự án cải tạo nhà phố với tinh thần Japandi, thay thế cảm giác chật hẹp bằng cấu trúc mở, ánh sáng dịu và vật liệu mộc có chiều sâu.",
    concept:
      "Ngôi nhà cũ được bóc tách về những thứ thật sự cần thiết. Chúng tôi đưa ánh sáng sâu hơn vào lõi nhà, đồng thời tạo liên kết mềm giữa bếp, bàn ăn và khu sinh hoạt chung để giữ cảm giác ấm cúng.",
    challenge:
      "Nhà phố cũ bị chia cắt mạnh, thiếu ánh sáng và giao thông trong nhà không mượt, làm giảm cả công năng lẫn cảm xúc sống.",
    solution:
      "Studio tái cấu trúc mặt bằng, mở các lớp chia cần thiết và đưa bảng vật liệu Japandi vào để ngôi nhà vừa rộng hơn về thị giác vừa giữ được độ ấm gia đình.",
    materials: ["Oak sáng", "Clay paint", "Mây đan", "Microcement"],
    signatureDetails: [
      "Sân trong nhỏ được tận dụng như điểm lấy sáng cho toàn trục bếp ăn.",
      "Hệ tủ âm tường giúp nhà gọn nhưng không mất cảm giác mềm của vật liệu.",
      "Mảng tường clay paint tạo lớp nền mịn và giàu cảm xúc hơn sơn thông thường.",
    ],
    heroImage:
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1800&q=80",
      "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1800&q=80",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1800&q=80",
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1800&q=80",
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1800&q=80",
    ],
    beforeAfter: {
      before:
        "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1800&q=80",
      after:
        "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1800&q=80",
      caption:
        "Từ một nhà phố có nhiều lớp chia cắt, công trình được tái cấu trúc để ánh sáng đi xa hơn và nhịp sinh hoạt chung trở nên liên tục.",
    },
    timeline: [
      {
        phase: "Đánh giá hiện trạng",
        duration: "1 tuần",
        details:
          "Xác định phần kết cấu cần giữ, các điểm thiếu sáng và những khu vực gây cản trở giao thông trong nhà.",
      },
      {
        phase: "Tái tổ chức mặt bằng",
        duration: "2 tuần",
        details:
          "Chuyển bếp về trục trung tâm, mở các vách chia cũ và xử lý cầu thang để tăng độ thoáng thị giác.",
      },
      {
        phase: "Thi công hoàn thiện",
        duration: "5 tuần",
        details:
          "Triển khai đồ gỗ, ánh sáng gián tiếp và bề mặt hoàn thiện theo tông trung tính ấm.",
      },
      {
        phase: "Styling cuối",
        duration: "1 tuần",
        details:
          "Tinh chỉnh rèm, decor và các điểm tiếp xúc để giữ cho không gian vừa yên vừa sống động.",
      },
    ],
    tags: ["before after", "japandi", "cải tạo", "family living"],
  },
  {
    slug: "serein-villa",
    name: "Serein Villa",
    type: "Biệt thự",
    typeKey: "biet-thu",
    style: "Modern luxury",
    styleKey: "modern-luxury",
    area: "420 m²",
    areaValue: 420,
    location: "Hồ Tràm, Bà Rịa - Vũng Tàu",
    year: "2024",
    featured: true,
    summary:
      "Biệt thự nghỉ dưỡng với ngôn ngữ thanh lịch và tiết chế, tập trung vào cảm giác thư giãn sâu trong từng vùng không gian.",
    concept:
      "Thay vì dùng quá nhiều chi tiết trang trí, dự án tạo cảm giác cao cấp bằng tỷ lệ lớn, các đường cong mềm và bảng vật liệu có độ phản sáng vừa đủ như đá travertine, walnut và kính khói.",
    challenge:
      "Không gian lớn và nhiều mặt thoáng rất dễ trở nên loãng hoặc quá trưng bày nếu không có hệ nhịp vật liệu đủ mạnh.",
    solution:
      "Chúng tôi tạo các khối nghỉ thị giác, dùng đường cong làm cầu nối và kiểm soát độ phản sáng để villa mang cảm giác resort riêng tư thay vì phô diễn.",
    materials: ["Travertine", "Walnut", "Bronze mirror", "Bouclé fabric"],
    signatureDetails: [
      "Sảnh vào như một gallery mở với đá travertine vân lớn và điểm nhấn điêu khắc.",
      "Master suite có lounge riêng để chuyển nhịp từ nghỉ dưỡng sang tiếp khách thân mật.",
      "Các lớp rèm và ánh sáng được điều khiển để thay đổi cảm xúc theo từng thời điểm trong ngày.",
    ],
    heroImage:
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1800&q=80",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1800&q=80",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1800&q=80",
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1800&q=80",
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1800&q=80",
    ],
    beforeAfter: {
      before:
        "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1800&q=80",
      after:
        "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1800&q=80",
      caption:
        "Biệt thự được tái định hình thành trải nghiệm nghỉ dưỡng riêng tư bằng cách giảm nhiễu thị giác và tăng chiều sâu vật liệu.",
    },
    timeline: [
      {
        phase: "Định vị phong cách",
        duration: "10 ngày",
        details:
          "Thiết lập nguyên tắc thẩm mỹ chung cho khu sinh hoạt, master suite và khu đón tiếp ngoài trời.",
      },
      {
        phase: "Thiết kế chi tiết",
        duration: "3 tuần",
        details:
          "Phát triển hồ sơ cho các mảng bo cong, hệ tủ lớn và các chi tiết hoàn thiện bespoke.",
      },
      {
        phase: "Sản xuất nội thất",
        duration: "5 tuần",
        details:
          "Gia công đồ rời và bề mặt hoàn thiện tại xưởng, đối chiếu mẫu liên tục trước khi chuyển ra công trình.",
      },
      {
        phase: "Lắp đặt và styling",
        duration: "2 tuần",
        details:
          "Chốt lớp ánh sáng, phụ kiện và tranh để hoàn thiện trải nghiệm nghỉ dưỡng tinh tế.",
      },
    ],
    tags: ["villa", "resort feel", "travertine", "signature"],
  },
  {
    slug: "atelier-horizon-office",
    name: "Atelier Horizon Office",
    type: "Văn phòng",
    typeKey: "van-phong",
    style: "Đương đại cao cấp",
    styleKey: "duong-dai-cao-cap",
    area: "320 m²",
    areaValue: 320,
    location: "Cầu Giấy, Hà Nội",
    year: "2024",
    featured: false,
    summary:
      "Không gian làm việc kết hợp showroom thương hiệu, mang cảm giác chỉn chu, sáng và đủ chiều sâu để tiếp khách cao cấp.",
    concept:
      "Dự án được xem như một hành trình nhận diện thương hiệu. Mỗi vùng chức năng đều có nhịp vật liệu và ánh sáng riêng nhưng vẫn giữ một tông sang thống nhất xuyên suốt.",
    challenge:
      "Mặt bằng văn phòng có nhiều cột và vùng tối, trong khi doanh nghiệp cần một nơi vừa tiếp khách cao cấp vừa vận hành hiệu quả mỗi ngày.",
    solution:
      "Thiết kế chia không gian thành các lớp thương hiệu rõ ràng, xử lý ánh sáng có chủ đích và dùng vật liệu tối vừa đủ để nâng độ tin cậy khi tiếp xúc trực tiếp.",
    materials: ["Walnut laminate", "Dark stone", "Acoustic felt", "Glass"],
    signatureDetails: [
      "Lễ tân được xử lý như một khung mở đầu cho trải nghiệm thương hiệu.",
      "Meeting room dùng tông tối để tăng tập trung và độ trang trọng khi trao đổi.",
      "Work lounge cân bằng giữa năng lượng làm việc và cảm giác tiếp khách thân thiện.",
    ],
    heroImage:
      "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1800&q=80",
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1800&q=80",
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1800&q=80",
      "https://images.unsplash.com/photo-1560185008-b033106af3fc?auto=format&fit=crop&w=1800&q=80",
    ],
    beforeAfter: {
      before:
        "https://images.unsplash.com/photo-1560185008-b033106af3fc?auto=format&fit=crop&w=1800&q=80",
      after:
        "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1800&q=80",
      caption:
        "Từ mặt bằng văn phòng rời rạc, dự án được nâng cấp thành không gian có trục trải nghiệm rõ ràng cho cả vận hành nội bộ lẫn tiếp khách.",
    },
    timeline: [
      {
        phase: "Nghiên cứu vận hành",
        duration: "1 tuần",
        details:
          "Phân tích dòng di chuyển, nhu cầu tiếp khách, các không gian họp và yêu cầu âm học của đội ngũ.",
      },
      {
        phase: "Thiết kế layout",
        duration: "2 tuần",
        details:
          "Thiết lập khu lễ tân, meeting room, work lounge và các vùng họp nhanh theo thương hiệu.",
      },
      {
        phase: "Thi công",
        duration: "4 tuần",
        details:
          "Lắp đặt nội thất, hệ điện chiếu sáng và hoàn thiện đồng bộ nhận diện vật liệu.",
      },
      {
        phase: "Tinh chỉnh trải nghiệm",
        duration: "1 tuần",
        details:
          "Kiểm tra ánh sáng, signage và cách vận hành thực tế trước ngày đưa vào sử dụng.",
      },
    ],
    tags: ["office", "showroom", "brand space", "hà nội"],
  },
  {
    slug: "sable-penthouse",
    name: "Sable Penthouse",
    type: "Căn hộ",
    typeKey: "can-ho",
    style: "Resort luxury",
    styleKey: "resort-luxury",
    area: "196 m²",
    areaValue: 196,
    location: "Bình Thạnh, TP. Hồ Chí Minh",
    year: "2024",
    featured: true,
    summary:
      "Penthouse mang tinh thần nghỉ dưỡng boutique với lớp vật liệu trầm ấm, bề mặt phản chiếu mềm và trải nghiệm sống chậm.",
    concept:
      "Không gian được xử lý như một suite riêng tư. Các bề mặt tối màu, kính bronzed và gỗ smoked oak tạo nên sự sang trọng sâu nhưng vẫn dễ sống hằng ngày.",
    challenge:
      "Nếu xử lý không khéo, bảng màu tối sẽ khiến penthouse trở nên nặng và thiếu độ thoáng cần thiết cho nhịp sống thường ngày.",
    solution:
      "Chúng tôi cân bằng tông trầm bằng các lớp ánh sáng xiên, mặt đá mờ và điểm phản chiếu mềm để giữ được độ sang mà không mất cảm giác thư thái.",
    materials: ["Smoked oak", "Nero stone", "Leather", "Bronzed glass"],
    signatureDetails: [
      "Bar mini kết hợp lounge như một góc retreat riêng cho buổi tối.",
      "Kính bronzed phản xạ ánh sáng dịu thay vì tạo độ bóng lạnh.",
      "Hệ đầu giường kéo dài đồng bộ với trần giúp master suite có cảm giác suite boutique.",
    ],
    heroImage:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1800&q=80",
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1800&q=80",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1800&q=80",
      "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1800&q=80",
    ],
    beforeAfter: {
      before:
        "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1800&q=80",
      after:
        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1800&q=80",
      caption:
        "Các lớp ánh sáng và vật liệu tối được tiết chế vừa đủ để penthouse vẫn sang nhưng không nặng nề.",
    },
    timeline: [
      {
        phase: "Khung ý tưởng",
        duration: "1 tuần",
        details:
          "Xác lập tinh thần nghỉ dưỡng tại gia và các điểm nhấn thị giác chính cho khu sinh hoạt chung.",
      },
      {
        phase: "Thiết kế hoàn chỉnh",
        duration: "3 tuần",
        details:
          "Triển khai chi tiết cho bếp đảo, hệ bar mini, master suite và các điểm phản chiếu vật liệu.",
      },
      {
        phase: "Sản xuất",
        duration: "5 tuần",
        details:
          "Gia công hệ tủ, đồ bespoke và hoàn thiện lớp gỗ smoked oak cùng các chi tiết kim loại.",
      },
      {
        phase: "Hoàn thiện cuối",
        duration: "2 tuần",
        details:
          "Tinh chỉnh ánh sáng, tác phẩm nghệ thuật và các lớp mềm để khóa lại cảm xúc không gian.",
      },
    ],
    tags: ["penthouse", "dark luxury", "boutique", "resort"],
  },
];

const getAreaBucket = (areaValue: number) => {
  if (areaValue < 150) return "duoi-150";
  if (areaValue < 250) return "150-250";
  return "tren-250";
};

export function filterProjects(items: Project[] = projects, filters: ProjectFilters = {}) {
  return items.filter((project) => {
    if (filters.type && project.typeKey !== filters.type) return false;
    if (filters.style && project.styleKey !== filters.style) return false;
    if (filters.area && getAreaBucket(project.areaValue) !== filters.area) return false;
    return true;
  });
}

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function getFeaturedProjects(limit = 4) {
  return projects.filter((project) => project.featured).slice(0, limit);
}

export function getProjectFilterOptions(): {
  categories: FilterOption[];
  styles: FilterOption[];
  areas: FilterOption[];
} {
  const categories = projectCategories.map((category) => ({
    label: category.title,
    value: category.slug,
    count: projects.filter((project) => project.typeKey === category.slug).length,
  }));

  const styles = Array.from(
    new Map(
      projects.map((project) => [
        project.styleKey,
        {
          label: project.style,
          value: project.styleKey,
          count: projects.filter((item) => item.styleKey === project.styleKey).length,
        },
      ]),
    ).values(),
  );

  const areas: FilterOption[] = [
    {
      label: "Dưới 150 m²",
      value: "duoi-150",
      count: projects.filter((project) => getAreaBucket(project.areaValue) === "duoi-150").length,
    },
    {
      label: "150 - 250 m²",
      value: "150-250",
      count: projects.filter((project) => getAreaBucket(project.areaValue) === "150-250").length,
    },
    {
      label: "Trên 250 m²",
      value: "tren-250",
      count: projects.filter((project) => getAreaBucket(project.areaValue) === "tren-250").length,
    },
  ];

  return { categories, styles, areas };
}
