/**
 * HOÀNG TẤN MODS - Dữ Liệu Bản Mod Game Độc Quyền Duy Nhất
 * Tham khảo phong cách chuẩn: https://magicnte.com/
 * Hỗ trợ Video Demo từ Direct Link, Download APK Direct Link, và các tính năng chi tiết.
 */

const STORAGE_KEY_SINGLE_MOD = 'HOANG_TAN_SINGLE_MOD_DATA_V1';

const DEFAULT_SINGLE_MOD = {
  // Thương hiệu & Tiêu đề
  brandName: "Hoàng Tấn Mods",
  brandKicker: "Hoàng Tấn VIP · Midnight Release",
  modTitle: "Magic NTE",
  gameName: "Neverness to Everness",
  tagline: "Bản Mod NTE Độc Quyền Số 1 Trên Android",
  subtitle: "Bản mod Android độc quyền đầu tiên hỗ trợ đầy đủ Teleport, God Mode, ESP và Antiban Bypass. Được phát triển và kiểm định bởi Hoàng Tấn Mods.",
  
  // Thông tin phiên bản & Phát hành (Release Status)
  version: "1.0.10",
  versionBuild: "1.0.10-api36-runtime-profile",
  releaseStatus: "Bản phát hành chính thức (Public Release)",
  supportedGameVersion: "NTE 1.4.1.88728 (Mới nhất)",
  androidReq: "Android 11 – 15+ (No Root)",
  updatedDate: "22/10/2026",
  fileSize: "122.4 MB",
  fileName: "com.multi.appspace-1.0.10-api36-runtime-profile-aosp-byteguard-release-20261010.apk",
  sha256: "9218fe7fd5cdb14a5d7f276d220f7a005fb6b89665fa7015d05bad0bf44cfd72",
  virusTotalScore: "0/72 Clean (Sạch 100%)",
  
  // Direct Link Download & Video
  downloadUrl: "https://dl.magicnte.com/releases/hypernte/v1.0.10/com.multi.appspace-1.0.10-api36-runtime-profile-aosp-byteguard-release-20261010.apk",
  mirrorDownloadUrl: "https://mega.nz/file/hoangtan-magic-nte-v1010-vip",
  changelogUrl: "#changelog",
  
  // Direct Link Video Demo
  // Hỗ trợ link video MP4/WebM direct link. Có thể đổi link trực tiếp bất cứ lúc nào qua modal cài đặt!
  videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
  videoPoster: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1600&q=85",
  videoDuration: "01:45",
  videoDescription: "Video quay trực tiếp từ thiết bị Android thực tế, hiển thị Map TP, Quest TP và God Mode hoạt động mượt mà 60 FPS không giật lag.",
  
  // Nhật ký cập nhật phiên bản (What changed in this release)
  changelog: [
    "Tương thích hoàn toàn phiên bản game NTE 1.4.1 mới nhất và sửa lỗi crash khi khởi động.",
    "Bổ sung hệ thống Quest Teleport tự động nhận diện mục tiêu nhiệm vụ với khoảng cách bù an toàn.",
    "Nâng cấp công nghệ ByteGuard Antiban Bypass v4.2 chống quét bộ nhớ và bảo vệ tài khoản.",
    "Tối ưu mức tiêu thụ RAM và chống nóng máy khi bật ESP toàn bản đồ liên tục trong nhiều giờ."
  ],

  // Các Module Tính Năng Tương Tác (Features Modules - phong cách Magic NTE)
  featureModules: [
    {
      id: "tp",
      eyebrow: "DỊCH CHUYỂN (TP MODULE)",
      title: "Dịch chuyển thần tốc qua nhiệm vụ, điểm đánh dấu hoặc tọa độ tùy chỉnh.",
      subfeatures: [
        {
          id: "mapTp",
          name: "Map TP",
          badge: "Khả Dụng",
          tabLabel: "Map TP",
          title: "Dịch Chuyển Theo Bản Đồ (Map TP)",
          desc: "Chạm chọn bất kỳ vị trí hoặc điểm đánh dấu nào trên bản đồ in-game để lập tức bay tới điểm đến mà không phải chạy bộ.",
          image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=1200&q=85",
          highlight: "Nhấp chuột trên mini-map -> Tự động tính toán độ cao an toàn để tránh rơi vào hư không."
        },
        {
          id: "questTp",
          name: "Quest TP",
          badge: "Khả Dụng",
          tabLabel: "Quest TP",
          title: "Dịch Chuyển Nhiệm Vụ Tự Động (Quest TP)",
          desc: "Tự động phân tích mục tiêu nhiệm vụ chính tuyến / phụ bản đang kích hoạt và dịch chuyển thẳng tới NPC hoặc quái vật mục tiêu.",
          image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1200&q=85",
          highlight: "Giải quyết chuỗi nhiệm vụ dài 30 phút chỉ trong vòng 3 phút."
        },
        {
          id: "manualTp",
          name: "Manual TP",
          badge: "Khả Dụng",
          tabLabel: "Manual TP",
          title: "Dịch Chuyển Tọa Độ Thủ Công (Manual TP)",
          desc: "Nhập chính xác tọa độ trục X, Y, Z để dịch chuyển vào các hang động bí mật, đỉnh núi cao hoặc các khu vực rương ẩn.",
          image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1200&q=85",
          highlight: "Hỗ trợ lưu danh sách điểm đánh dấu yêu thích (Waypoints Bookmark)."
        }
      ]
    },
    {
      id: "combat",
      eyebrow: "CHIẾN ĐẤU (COMBAT MODULE)",
      title: "Bảo hộ chiến đấu tuyệt đối & Xả chiêu không giới hạn trong bản Android.",
      subfeatures: [
        {
          id: "godMode",
          name: "God Mode",
          badge: "Khả Dụng",
          tabLabel: "God Mode",
          title: "Bất Tử Tuyệt Đối (God Mode)",
          desc: "Kích hoạt chế độ vô địch, miễn nhiễm hoàn toàn mọi sát thương nhận vào từ boss, quái vật tinh anh và bẫy môi trường.",
          image: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?auto=format&fit=crop&w=1200&q=85",
          highlight: "Khóa thanh máu ở mức 100%, không bị hiệu ứng choáng hay hất tung."
        },
        {
          id: "noCooldown",
          name: "No Cooldown",
          badge: "Khả Dụng",
          tabLabel: "No Cooldown",
          title: "Hồi Chiêu 0 Giây (No Cooldown)",
          desc: "Xóa bỏ thời gian hồi chiêu của kỹ năng thường, kỹ năng nguyên tố và chiêu nộ, cho phép tung combo liên hoàn không ngừng nghỉ.",
          image: "https://images.unsplash.com/photo-1563089145-599997674d42?auto=format&fit=crop&w=1200&q=85",
          highlight: "Kỹ năng hồi tức thì ngay sau khi kích hoạt."
        },
        {
          id: "damageMulti",
          name: "Damage Multiplier",
          badge: "Khả Dụng",
          tabLabel: "Damage Multiplier",
          title: "Tùy Chỉnh Sát Thương (Damage Multiplier)",
          desc: "Thanh trượt điều chỉnh sát thương xuất chiêu linh hoạt từ x1, x2, x5 cho đến x50 để cân bằng giữa tốc độ dọn phó bản và độ an toàn.",
          image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=85",
          highlight: "Tùy chỉnh hệ số sát thương thực tế, không bị phát hiện bất thường."
        }
      ]
    },
    {
      id: "visuals",
      eyebrow: "THỊ GIÁC & TỰ ĐỘNG (ESP & UTILITY)",
      title: "X-Ray định vị xuyên địa hình và mở rộng tầm hút vật phẩm.",
      subfeatures: [
        {
          id: "chestLocator",
          name: "Chest Locator",
          badge: "Khả Dụng",
          tabLabel: "Chest Locator",
          title: "Định Vị Rương Báu & Vật Phẩm (Chest ESP)",
          desc: "Vẽ đường định vị xuyên tường, hiển thị khoảng cách bằng mét tới từng rương báu, quặng quý và điểm thu thập trên màn hình.",
          image: "https://images.unsplash.com/photo-1552824796-7c98031d7986?auto=format&fit=crop&w=1200&q=85",
          highlight: "Hiển thị màu sắc phân loại độ hiếm: Trắng, Xanh lục, Tím, Vàng kim."
        },
        {
          id: "pickupRange",
          name: "Pickup Range",
          badge: "Khả Dụng",
          tabLabel: "Pickup Range",
          title: "Hút Vật Phẩm Tầm Xa (Vacuum Pickup)",
          desc: "Tăng bán kính nhặt vật phẩm rơi ra từ quái và rương lên gấp 5 lần, tự động thu gom toàn bộ chiến lợi phẩm xung quanh.",
          image: "https://images.unsplash.com/photo-1579373903781-fd5c0c30c4cd?auto=format&fit=crop&w=1200&q=85",
          highlight: "Tiết kiệm 80% thời gian nhặt đồ khi vượt phụ bản."
        }
      ]
    }
  ],

  // Lộ trình tính năng tương lai (Roadmap / Incoming Features)
  roadmap: [
    {
      id: "01",
      tag: "Automation",
      status: "Incoming",
      statusText: "Đang phát triển",
      title: "Auto Fishing (Câu Cá Tự Động)",
      desc: "Tự động thả câu, bấm nhịp giật cá chuẩn xác và tự động bỏ vào túi đồ mà không cần người chơi phải canh màn hình."
    },
    {
      id: "02",
      tag: "Combat",
      status: "Incoming",
      statusText: "Đang phát triển",
      title: "No Cooldown V2 (Hồi Chiêu Nâng Cao)",
      desc: "Tối ưu hóa thời gian hồi chiêu cho các nhân vật mới ra mắt trong bản update sắp tới của NTE."
    },
    {
      id: "03",
      tag: "Combat",
      status: "Researching",
      statusText: "Đang nghiên cứu",
      title: "One-Hit Kill Boss Selector",
      desc: "Đánh giá tính năng tiêu diệt mục tiêu chỉ định tức thì kết hợp cơ chế bypass chống quét chỉ số sát thương đột biến."
    },
    {
      id: "04",
      tag: "World",
      status: "Researching",
      statusText: "Đang nghiên cứu",
      title: "Fly Mode & No Clip (Bay Xuyên Tường)",
      desc: "Cho phép nhân vật bay tự do trên không trung và đi xuyên qua các chướng ngại vật địa hình phức tạp."
    },
    {
      id: "05",
      tag: "Performance",
      status: "Researching",
      statusText: "Đang nghiên cứu",
      title: "FPS Unlocker 120 FPS",
      desc: "Mở khóa giới hạn 60 FPS để chơi mượt mà với tốc độ 90 FPS và 120 FPS trên các màn hình tần số quét cao."
    },
    {
      id: "06",
      tag: "Exploration",
      status: "Researching",
      statusText: "Đang nghiên cứu",
      title: "Auto Collect Oculus (Thu Thập Thần Đồng)",
      desc: "Tự động bay đến và nhặt toàn bộ các mảnh thần đồng / vật phẩm thám hiểm còn sót lại trên toàn cõi thế giới mở."
    }
  ],

  // Hướng dẫn cài đặt 4 bước
  installSteps: [
    {
      step: "01",
      title: "Tải Bản Cài Đặt APK",
      desc: "Nhấn nút 'Tải APK Trực Tiếp' ở phía trên để tải file cài đặt đã được Hoàng Tấn Mods xác thực sạch mã độc."
    },
    {
      step: "02",
      title: "Bật Cài Đặt Nguồn Không Xác Định",
      desc: "Mở Cài đặt điện thoại > Ứng dụng & Bảo mật > Cho phép trình duyệt hoặc trình quản lý tệp cài đặt file APK ngoài."
    },
    {
      step: "03",
      title: "Cấp Quyền Hiển Thị Cửa Sổ Nổi (Overlay)",
      desc: "Khởi động ứng dụng, cấp quyền 'Xuất hiện trên cùng' (Display over other apps) để bảng Mod Menu có thể hiển thị nổi trong game."
    },
    {
      step: "04",
      title: "Khởi Động Game & Thưởng Thức",
      desc: "Vào game, chạm vào biểu tượng logo nổi của Hoàng Tấn Mods để bật/tắt các tính năng VIP theo ý muốn."
    }
  ],

  // Cộng đồng & Liên hệ
  community: {
    discordUrl: "https://discord.gg/SUSJ2UTqxq",
    telegramUrl: "https://t.me/+iymwkzMj05g1MGI1",
    zaloUrl: "https://zalo.me/g/hoangtanmods"
  },

  // Câu hỏi thường gặp (FAQ)
  faqs: [
    {
      q: "Bản mod Magic NTE có yêu cầu Root máy không?",
      a: "Hoàn toàn KHÔNG cần Root. Bản build Android được thiết kế trên môi trường container ảo (App Space Container) tối tân, cài đặt trực tiếp như một file APK thông thường trên mọi máy Android 11 đến Android 15+."
    },
    {
      q: "Sử dụng mod này có bị khóa tài khoản (Ban nick) không?",
      a: "Bản mod được tích hợp hệ thống ByteGuard Antiban Bypass v4.2 độc quyền từ Hoàng Tấn Mods. Cơ chế này tự động làm sạch gói tin gửi về máy chủ game, giúp bạn an tâm trải nghiệm mà không lo bị hệ thống phát hiện."
    },
    {
      q: "Tại sao bản cập nhật của game có thể làm hỏng tính năng mod?",
      a: "Một số tính năng như Teleport hay God Mode phụ thuộc vào địa chỉ bộ nhớ (Memory Offsets) của game. Khi game có bản vá mới, các vị trí này sẽ thay đổi. Hoàng Tấn Mods luôn cập nhật bản patch tương thích mới chỉ trong vòng 2 - 4 tiếng sau khi game phát hành cập nhật."
    },
    {
      q: "Video demo trên web có phải là video từ direct link không?",
      a: "Chính xác! Video demo được nhúng và phát trực tiếp từ direct link MP4 tốc độ cao, không qua quảng cáo rút gọn, giúp bạn xem trước toàn bộ giao diện và thao tác thực tế trước khi tải về máy."
    },
    {
      q: "Tôi có thể tự đổi link video và link tải APK của riêng mình không?",
      a: "Có! Bạn chỉ cần nhấn vào nút 'Cấu Hình Link' ở góc phải màn hình hoặc chân trang để dán direct link video MP4 và link tải APK của riêng bạn. Hệ thống sẽ lưu và áp dụng ngay lập tức."
    }
  ]
};

/**
 * Lấy dữ liệu mod từ localStorage (nếu có tùy chỉnh) hoặc trả về mặc định
 */
function getSingleModData() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY_SINGLE_MOD);
    if (raw) {
      const parsed = JSON.parse(raw);
      return { ...DEFAULT_SINGLE_MOD, ...parsed };
    }
  } catch (err) {
    console.warn("Lỗi đọc single mod từ localStorage:", err);
  }
  return { ...DEFAULT_SINGLE_MOD };
}

/**
 * Lưu dữ liệu mod vào localStorage
 */
function saveSingleModData(newData) {
  try {
    localStorage.setItem(STORAGE_KEY_SINGLE_MOD, JSON.stringify(newData));
  } catch (err) {
    console.error("Lỗi lưu single mod:", err);
  }
}

/**
 * Khôi phục dữ liệu gốc
 */
function resetSingleModData() {
  localStorage.removeItem(STORAGE_KEY_SINGLE_MOD);
  return { ...DEFAULT_SINGLE_MOD };
}
