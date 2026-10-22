/**
 * TẤN CUTOS - Dữ Liệu Bản Mod Game Liên Quân Mobile (Arena of Valor)
 * Tích hợp đầy đủ 8 tính năng VIP độc quyền theo yêu cầu:
 * 1. Hack map (hiển thị vị trí địch)
 * 2. Cam xa (mở rộng tầm nhìn)
 * 3. Aim Game (Tung chiêu tự trúng)
 * 4. Mod Full skin (mở khóa full trang phục SSS)
 * 5. Hiển thị thời gian hồi chiêu của địch
 * 6. Tự động bộc phá (tự động xài bổ trợ khi địch còn yếu máu)
 * 7. Nghe nhạc (chọn nhạc trên SoundCloud và mở vừa chơi vừa nghe)
 * 8. Tách Gốc (Chạy độc lập song song không cần gỡ game gốc)
 */

const STORAGE_KEY_SINGLE_MOD = 'TAN_CUTOS_AOV_MOD_DATA_V13';

const DEFAULT_SINGLE_MOD = {
  // Thương hiệu & Tiêu đề
  brandName: "Tấn Cutos",
  brandKicker: "Tấn Cutos VIP · Mùa Giải Mới 2026",
  modTitle: "AOV MOD MENU",
  gameName: "Liên Quân Mobile (Arena of Valor)",
  tagline: "Bản Mod Menu Liên Quân Mobile Độc Quyền Số 1 Android",
  subtitle: "Trọn bộ 8 tính năng VIP: Hack Map, Cam Xa, Aim Chiêu Tự Trúng, Mod Full Skin, Hồi Chiêu Địch, Tự Động Bộc Phá, Nghe Nhạc SoundCloud và Tách Gốc Độc Lập (chạy song song không cần gỡ game gốc). Hỗ trợ Android nguyên bản không cần Root máy, tối ưu mượt mà 60-120 FPS.",

  // Ảnh nền phần đầu tiên (Hero Background Direct Link)
  heroBackgroundImage: "https://i.ytimg.com/vi/6XAjI4qxjB0/maxresdefault.jpg",

  // Direct Link Ảnh Chụp Icon App Trên Điện Thoại (Download Section Showcase)
  appIconImage: "https://file.garden/atbpnHNCfPVO2vdb/Screenshot_2026-10-22-18-57-52-10_b783bf344239542886fee7b48fa4b892.jpg",
  appIconTitle: "Icon Ứng Dụng Trên Màn Hình Điện Thoại",

  // Thông tin phiên bản & Phát hành (Release Status)
  version: "1.64.1.7 MOD",
  versionBuild: "v1.64.1.7-aov-elite-edition",
  releaseStatus: "Bản phát hành chính thức (Public Release)",
  supportedGameVersion: "Liên Quân Mobile 1.64.1.7 (Bản Garena Mới Nhất)",
  androidReq: "Android 8.0 – 15+ (No Root)",
  updatedDate: "22/10/2026",
  fileSize: "219 MB",
  fileName: "hoangtan_aov_1.64.apk",
  sha256: "e4d9b28a8f15c327914e6b5d983416a048a127bc0f7112d8479e0134bc582a99",
  virusTotalScore: "0/72 Clean (Sạch 100%)",

  // Direct Link Download & Video
  downloadUrl: "https://drive.google.com/uc?export=download&id=13pPkllSv0_udSoSTmR9x6ILzQvXWiDQ_",
  mirrorDownloadUrl: "https://drive.google.com/uc?export=download&id=13pPkllSv0_udSoSTmR9x6ILzQvXWiDQ_",
  changelogUrl: "#changelog",

  // Direct Link Video Demo
  videoUrl: "https://youtu.be/ShAgSRHNQHk",
  videoPoster: "https://img.youtube.com/vi/ShAgSRHNQHk/maxresdefault.jpg",
  videoDuration: "02:00",
  videoDescription: "Video test Hack Map, Cam Xa x3.0, Mod Full Skin và mở nhạc SoundCloud quẩy cực mượt.",

  // Nhật ký cập nhật phiên bản (What changed in this release)
  changelog: [
    "Tách Gốc Độc Lập (Clone Edition): Cài đặt và chạy độc lập trực tiếp trên máy mà không cần phải xóa hay gỡ cài đặt bản game Liên Quân gốc chính thức (chạy song song 2 bản mượt mà).",
    "Nâng cấp thuật toán Aim Chiêu tự động tính toán hướng di chuyển và tốc độ chạy của mục tiêu.",
    "Bổ sung Widget nghe nhạc SoundCloud nổi: Nghe nhạc remix, vinahouse, lofi trực tiếp trong game không giật lag."
  ],

  // 8 TÍNH NĂNG ĐỘC QUYỀN ĐƯỢC CHIA THÀNH 3 MODULE TƯƠNG TÁC
  featureModules: [
    {
      id: "vision",
      eyebrow: "MODULE 1: THỊ GIÁC & TẦM NHÌN TOÀN BẢN ĐỒ",
      title: "1. Hack Map & 2. Cam Xa Siêu Rộng Bao Quát Chiến Trường",
      subfeatures: [
        {
          id: "hackMap",
          name: "1. Hack Map",
          badge: "Cốt Lõi",
          tabLabel: "1. Hack Map",
          title: "1. Hack Map Toàn Bản Đồ (Hiển Thị Vị Trí Địch)",
          desc: "Hiển thị vị trí, biểu tượng avatar tướng, thanh máu và hướng di chuyển của toàn bộ 5 tướng địch trong bụi cỏ và sương mù theo thời gian thực.",
          image: "https://file.garden/atbpnHNCfPVO2vdb/Screenshot%202026-10-22%20232246.png",
          highlight: "Phát hiện ngay lập tức hướng gank của rừng và mid đối phương, không bao giờ bị bắt lẻ."
        },
        {
          id: "camXa",
          name: "2. Cam Xa",
          badge: "Khả Dụng",
          tabLabel: "2. Cam Xa",
          title: "2. Cam Xa Siêu Rộng (Drone View / Mở Rộng Tầm Nhìn)",
          desc: "Thanh trượt tùy chỉnh góc nhìn camera trên cao từ x0.0 cho đến x30.0, phóng tầm nhìn bao quát toàn bộ đường lane, hang Rồng và hang Tà Thần César.",
          image: "https://file.garden/atbpnHNCfPVO2vdb/Screenshot_2026-10-22-19-08-08-38_8cc629c7e5f500a4ce672df3661b99b6.jpg",
          highlight: "Quan sát toàn bộ giao tranh từ khoảng cách xa, kiểm soát thế trận dễ dàng."
        }
      ]
    },
    {
      id: "combat",
      eyebrow: "MODULE 2: KỸ NĂNG & CHIẾN ĐẤU ĐỈNH CAO",
      title: "3. Aim Game, 5. Hồi Chiêu Địch & 6. Tự Động Bộc Phá",
      subfeatures: [
        {
          id: "aimGame",
          name: "3. Aim Game",
          badge: "VIP PRO",
          tabLabel: "3. Aim Chiêu",
          title: "3. Aim Game (Tung Chiêu Tự Trúng 100%)",
          desc: "Hệ thống tự động khóa tâm và dẫn hướng chuẩn xác cho mọi kỹ năng định hướng: Elsu ngắm bắn viễn trình, Grakk kéo, Enzo Móc...",
          image: "https://file.garden/atbpnHNCfPVO2vdb/Screenshot%202026-10-22%20232518.png",
          highlight: "Tự tính toán trước bước chạy của kẻ địch để xả chiêu trúng đích tuyệt đối."
        },
        {
          id: "enemyCd",
          name: "5. Hồi Chiêu Địch",
          badge: "Chiến Thuật",
          tabLabel: "5. Hồi Chiêu Địch",
          title: "5. Hiển Thị Thời Gian Hồi Chiêu Của Địch",
          desc: "Đếm ngược chính xác từng giây thời gian hồi chiêu 1, chiêu 2, chiêu cuối (Ultimate) và các phép bổ trợ (Tốc biến, Bộc phá, Cấp cứu, Trừng trị) trên đầu tướng địch.",
          image: "https://file.garden/atbpnHNCfPVO2vdb/Screenshot%202026-10-22%20232347.png",
          highlight: "Biết rõ đối thủ có còn Tốc biến hay Ulti hay không để lao vào dồn sát thương an toàn."
        },
        {
          id: "autoBocPha",
          name: "6. Tự Bộc Phá",
          badge: "Tự Động",
          tabLabel: "6. Tự Bộc Phá",
          title: "6. Tự Động Bộc Phá (Auto Execute Khi Địch Yếu Máu)",
          desc: "Máy tự động quét lượng máu thực tế của kẻ địch so với sát thương chuẩn của Bộc Phá. Ngay khi máu đối thủ chạm ngưỡng chết, hệ thống tự động giật Bộc Phá ăn mạng tức thì.",
          image: "https://file.garden/atbpnHNCfPVO2vdb/Screenshot%202026-10-22%20230555.png",
          highlight: "Tốc độ kích hoạt trong mili-giây, không bỏ lỡ bất kỳ mạng hạ gục nào."
        }
      ]
    },
    {
      id: "utility",
      eyebrow: "MODULE 3: TIỆN ÍCH, TRANG PHỤC & ĐỘC LẬP TÁCH GỐC",
      title: "4. Full Skin, 7. SoundCloud & 8. Tách Gốc Chạy Song Song",
      subfeatures: [
        {
          id: "fullSkin",
          name: "4. Mod Full Skin",
          badge: "Mở Khóa",
          tabLabel: "4. Full Skin",
          title: "4. Mod Full Skin (Mở Khóa Mọi Trang Phục SSS)",
          desc: "Trải nghiệm miễn phí toàn bộ kho skin đắt giá nhất Liên Quân: Thứ Nguyên Vệ Thần, Tuyệt Sắc, Anime Collab (Sailor Moon, Bleach, Sword Art Online), đầy đủ hiệu ứng biến về và voice âm thanh.",
          image: "https://file.garden/atbpnHNCfPVO2vdb/Screenshot_2026-10-22-19-06-24-06_8cc629c7e5f500a4ce672df3661b99b6.jpg",
          highlight: "Hiển thị mượt mà trên máy bạn, tăng cảm hứng leo rank Thách Đấu."
        },
        {
          id: "soundCloud",
          name: "7. Nhạc SoundCloud",
          badge: "HOT VIP",
          tabLabel: "7. SoundCloud",
          title: "7. Nghe Nhạc SoundCloud (Vừa Chơi Vừa Nghe Nhạc)",
          desc: "Tích hợp cửa sổ widget nổi SoundCloud ngay trong trận: Cho phép gõ tìm kiếm bài hát, nghe playlist Remix, Vinahouse, Phonk, Lofi không giới hạn mà không bị văng game hay giảm FPS.",
          image: "https://file.garden/atbpnHNCfPVO2vdb/Screenshot%202026-10-22%20230620.png",
          highlight: "Tùy chỉnh âm lượng độc lập với âm thanh game, phím điều khiển mini tiện lợi."
        },
        {
          id: "tachGoc",
          name: "8. Tách Gốc (Chạy Độc Lập)",
          badge: "Độc Quyền",
          tabLabel: "8. Tách Gốc",
          title: "8. Tách Gốc Độc Lập (Chạy Song Song Không Cần Gỡ Game Gốc)",
          desc: "Bản mod được đóng gói với Package Name độc lập hoàn toàn (Clone Version). Bạn có thể cài đặt và khởi chạy bản mod trực tiếp trên máy mà không cần phải gỡ cài đặt bản game Liên Quân gốc chính thức từ Garena hay Google Play Store.",
          image: "https://file.garden/atbpnHNCfPVO2vdb/Screenshot_2026-10-22-18-57-52-10_b783bf344239542886fee7b48fa4b892.jpg",
          highlight: "Cài đặt song song 2 bản Liên Quân trên cùng 1 điện thoại: 1 bản gốc sạch để đánh giải/giao lưu và 1 bản mod để leo rank."
        }
      ]
    }
  ],

  // Lộ trình tính năng tương lai (Roadmap / Incoming Features)
  roadmap: [
    {
      id: "01",
      tag: "Rừng & Mục Tiêu",
      status: "Incoming",
      statusText: "Đang phát triển",
      title: "Auto Trừng Trị Ăn Rồng & Tà Thần Caesar",
      desc: "Tự động đo máu quái rừng lớn và trừng trị chuẩn xác 100% trong mili-giây, chống bị cướp rồng."
    },
    {
      id: "02",
      tag: "Né Kỹ Năng",
      status: "Incoming",
      statusText: "Đang phát triển",
      title: "Auto Dodge (Tự Động Né Kỹ Năng Nguy Hiểm)",
      desc: "Tự động lách người né kéo của Grakk, chiêu cuối Điêu Thuyền và đạn viễn trình Elsu."
    },
    {
      id: "03",
      tag: "Thị Giác",
      status: "Researching",
      statusText: "Đang nghiên cứu",
      title: "Soi Tướng Tàng Hình (Anti-Invisibility)",
      desc: "Hiện bóng mờ rõ ràng cho Ngộ Không, Batman, Quillen và Sinestrea khi chúng đang tàng hình."
    },
    {
      id: "04",
      tag: "Hiệu Năng",
      status: "Researching",
      statusText: "Đang nghiên cứu",
      title: "Mở Khóa 120 FPS Siêu Mượt",
      desc: "Mở khóa giới hạn khung hình cao nhất cho các dòng máy Xiaomi, Samsung, Realme, Oppo màn 120Hz."
    },
    {
      id: "05",
      tag: "Giao Diện",
      status: "Researching",
      statusText: "Đang nghiên cứu",
      title: "Menu Nổi Trong Suốt Thu Gọn 1 Chạm",
      desc: "Thu nhỏ biểu tượng bảng điều khiển thành 1 chấm nhỏ trong suốt, tránh bị đối phương phát hiện khi quay màn hình."
    },
    {
      id: "06",
      tag: "Giải Trí",
      status: "Researching",
      statusText: "Đang nghiên cứu",
      title: "Tích Hợp Thêm Playlist Nhạc ZingMP3 & YouTube Audio",
      desc: "Hỗ trợ dán link bài hát trực tiếp từ YouTube và ZingMP3 để phát song song cùng SoundCloud."
    }
  ],

  // Hướng dẫn cài đặt 3 bước nhanh chóng (Không cần cấp quyền cửa sổ nổi)
  installSteps: [
    {
      step: "01",
      title: "Tải File Cài Đặt APK",
      desc: "Nhấn nút 'Tải APK Trực Tiếp' ở phía trên để tải bản mod Tấn Cutos AOV Menu VIP mới nhất về máy."
    },
    {
      step: "02",
      title: "Cài Đặt File APK Trực Tiếp",
      desc: "Mở file vừa tải về và tiến hành cài đặt. Nếu máy hỏi bảo mật, chọn 'Cho phép cài đặt từ nguồn này' để hoàn tất cài đặt trong tích tắc."
    },
    {
      step: "03",
      title: "Khởi Chạy Bản Mod & Vào Trận",
      desc: "Mở bản mod vừa cài đặt (chạy độc lập song song không ảnh hưởng game gốc) và vào trận tận hưởng trọn bộ 8 tính năng VIP!"
    }
  ],

  // Cộng đồng & Liên hệ (Chưa mở kênh Telegram và Discord)
  community: {
    discordUrl: "",
    telegramUrl: "",
    zaloUrl: "https://zalo.me/g/hoangtanmods"
  },

  // Câu hỏi thường gặp (FAQ) - Đúng 4 câu trọng tâm
  faqs: [
    {
      q: "Bản mod Liên Quân của Tấn Cutos có cần Root máy không?",
      a: "Hoàn toàn KHÔNG cần Root. Bản mod chạy độc lập trên môi trường Android nguyên bản (hỗ trợ Android 8 đến Android 15+), không can thiệp sâu hệ thống, cài đặt dễ dàng như một ứng dụng bình thường."
    },
    {
      q: "Chơi bản mod này có bị khóa tài khoản (Ban nick) không?",
      a: "Bản mod không can thiệp sâu hệ thống, tuy nhiên nếu bạn chơi quá lộ liễu và bị người chơi khác nghi ngờ, bấm tố cáo nhiều lần thì tài khoản vẫn có thể bị khóa tạm thời (cùng lắm 7 ngày). Nếu bạn chơi cẩn thận, biết diễn và giữ kín kẽ thì hoàn toàn yên tâm leo rank."
    },
    {
      q: "Tính năng nghe nhạc SoundCloud trong game hoạt động ra sao?",
      a: "Tính năng này mở một widget audio siêu nhẹ chạy nền song song với game. Bạn có thể tìm kiếm bài hát theo tên hoặc mở danh sách phát Remix/Vinahouse/Phonk trên SoundCloud mà không bị xung đột âm thanh hay giảm FPS."
    },
    {
      q: "Bản mod Tách Gốc có cần gỡ bản game Liên Quân gốc trên máy không?",
      a: "Hoàn toàn KHÔNG cần gỡ. Bản mod Tách Gốc hoạt động với mã gói độc lập (Clone Version), cho phép bạn cài đặt và chạy song song đồng thời bản game gốc chính thức của Garena và bản mod Tấn Cutos trên cùng 1 thiết bị Android mà không hề bị ghi đè hay xung đột dữ liệu."
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
