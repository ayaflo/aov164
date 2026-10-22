/**
 * HOÀNG TẤN MODS - Dữ liệu các bản Mod Game Android cao cấp
 * Mỗi bản mod có nhiều ảnh direct link, mỗi ảnh chụp minh họa 1 tính năng mod kèm mô tả chi tiết
 */

const DEFAULT_MODS_DATA = [
  {
    id: "gta-sa-definitive-mod",
    title: "Grand Theft Auto: San Andreas (Definitive Mod Menu)",
    developer: "Rockstar Games / Hoàng Tấn Mods",
    category: "open-world",
    categoryLabel: "Thế Giới Mở",
    version: "v2.11.233",
    androidReq: "Android 7.0+",
    size: "2.4 GB",
    rating: 4.9,
    downloads: "1.2M+",
    isVip: true,
    isUpdated: true,
    isHot: true,
    coverImage: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1000&q=80",
    featuresShowcase: [
      {
        title: "Bảng Cleo Mod Menu Tiếng Việt VIP",
        description: "Bảng điều khiển nổi vuốt từ trên xuống, cho phép bật/tắt bất tử, tàng hình, dịch chuyển tức thời và nhận đầy đủ súng đạn ngay trong trận.",
        image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1200&q=80"
      },
      {
        title: "Vô Hạn $999,999,999 & Khóa Máu Bất Tử",
        description: "Số tiền được khóa vĩnh viễn ở mức tối đa, thoải mái mua bất động sản, độ xe, mua sắm quần áo và trang bị mà không bao giờ giảm tiền.",
        image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=1200&q=80"
      },
      {
        title: "Triệu Hồi Toàn Bộ Siêu Xe & Máy Bay Trực Thăng",
        description: "Bộ sưu tập xe thể thao, xe cơ bắp, xe tăng quân sự bọc thép và chiến đấu cơ Hydra có thể được gọi ra ngay trước mặt nhân vật.",
        image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1200&q=80"
      },
      {
        title: "Gói Đồ Họa Remastered Ultra 60 FPS Mượt Mà",
        description: "Nâng cấp độ phân giải vân bề mặt nhân vật và xe cộ HD sắc nét, tối ưu hóa chống văng game trên Android 13 và Android 14.",
        image: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?auto=format&fit=crop&w=1200&q=80"
      }
    ],
    description: "Phiên bản Grand Theft Auto: San Andreas tích hợp Cleo Menu VIP tiếng Việt độc quyền bởi Hoàng Tấn Mods. Hỗ trợ đồ họa Remastered 60 FPS, tương thích tốt với chip Snapdragon, MediaTek và Exynos đời mới.",
    features: [
      "Cleo Mod Menu tiếng Việt",
      "Vô hạn tiền ($999,999,999) & đạn",
      "Bất tử nhân vật & xe không nổ",
      "Mở khóa toàn bộ bản đồ 100%",
      "Gói đồ họa Ultra HD 60 FPS",
      "Anti-Crash Android 13/14"
    ],
    downloadUrl: "https://download.hoangtanmods.vip/gta-sa-cleo-v2.11.apk",
    mirrorUrl: "https://drive.google.com/uc?id=sample_gta_sa_apk",
    obbUrl: "https://download.hoangtanmods.vip/gta-sa-main.obb",
    hasObb: true,
    installGuide: "1. Tải về file APK và file OBB.\n2. Cài đặt file APK nhưng KHÔNG mở game.\n3. Giải nén file OBB vào thư mục: Android/obb/com.rockstargames.gtasa/\n4. Mở game và vuốt từ trên xuống để mở Cleo Menu."
  },
  {
    id: "carx-street-unlimited-vip",
    title: "CarX Street (VIP Deluxe Edition)",
    developer: "CarX Technologies / Hoàng Tấn Mods",
    category: "racing",
    categoryLabel: "Đua Xe",
    version: "v1.4.0",
    androidReq: "Android 9.0+",
    size: "1.9 GB",
    rating: 4.8,
    downloads: "850K+",
    isVip: true,
    isUpdated: true,
    isHot: true,
    coverImage: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1000&q=80",
    featuresShowcase: [
      {
        title: "Mở Khóa Toàn Bộ Siêu Xe Hypercar Đỉnh Cao",
        description: "Mở khóa ngay hơn 60 siêu xe tốc độ từ Ferrari, Porsche, Nissan GTR đến Lamborghini mà không cần tích lũy cấp độ đua xe.",
        image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80"
      },
      {
        title: "Vô Hạn Vàng Ròng (Gold) & Tiền Bạc (Silver)",
        description: "Tài khoản game sở hữu kho tiền không giới hạn, thoải mái chi tiêu mua sắm động cơ và gói ngoại hình mà số dư không hề suy giảm.",
        image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80"
      },
      {
        title: "Nâng Cấp Max Động Cơ & Nitro Turbo Vĩnh Viễn",
        description: "Toàn bộ phụ tùng xe được đẩy lên cấp độ tối đa (Max Tuning), tăng tốc vượt trội và bình Nitro không bao giờ cạn kiệt.",
        image: "https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?auto=format&fit=crop&w=1200&q=80"
      },
      {
        title: "Bypass Chống Khóa Tài Khoản & Mở Khóa 90 FPS",
        description: "Hệ thống bảo vệ tích hợp ngăn chặn quét gian lận từ máy chủ game, đồng thời mở khóa tần số quét màn hình 90 FPS mượt mà.",
        image: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=1200&q=80"
      }
    ],
    description: "Tựa game đua xe thế giới mở đỉnh cao đồ họa Sunset City. Bản mod bẻ khóa toàn bộ siêu xe Hypercar, vô hạn tiền Bạc và Vàng Ròng, nâng cấp Turbo cấp độ Max không tốn nguyên liệu.",
    features: [
      "Vô hạn Vàng Ròng & Tiền Bạc",
      "Mở khóa 60+ siêu xe VIP",
      "Max Tuning Engine & Nitro",
      "Mở khóa mức đồ họa 90 FPS",
      "Bypass Anti-Ban chơi an toàn"
    ],
    downloadUrl: "https://download.hoangtanmods.vip/carx-street-v1.4.0.apk",
    mirrorUrl: "https://mediafire.com/download/carx-street-vip",
    obbUrl: "https://download.hoangtanmods.vip/carx-street-data.zip",
    hasObb: true,
    installGuide: "1. Cài đặt APK CarX Street Mod.\n2. Chép thư mục Data vào: Android/data/com.carxtech.sr/\n3. Bật kết nối mạng và vào game thưởng thức toàn bộ siêu xe."
  },
  {
    id: "genshin-impact-private-mod",
    title: "Genshin Impact (Mod Menu & Offline Server)",
    developer: "miHoYo / Hoàng Tấn Mods",
    category: "rpg",
    categoryLabel: "Nhập Vai RPG",
    version: "v4.8.0",
    androidReq: "Android 8.0+",
    size: "3.2 GB",
    rating: 4.9,
    downloads: "2.1M+",
    isVip: true,
    isUpdated: true,
    isHot: true,
    coverImage: "https://images.unsplash.com/photo-1563089145-599997674d42?auto=format&fit=crop&w=1000&q=80",
    featuresShowcase: [
      {
        title: "Mod Menu Tiếng Việt Tùy Biến Trực Quan",
        description: "Giao diện menu nổi cho phép bật/tắt từng tính năng độc lập, tùy chỉnh tốc độ đánh, phạm vi tác động và chế độ bất tử.",
        image: "https://images.unsplash.com/photo-1563089145-599997674d42?auto=format&fit=crop&w=1200&q=80"
      },
      {
        title: "Mở Khóa Toàn Bộ Tướng 5 Sao Full Cung Mệnh 6",
        description: "Trải nghiệm sức mạnh tối thượng của Furina, Raiden Shogun, Hu Tao với đầy đủ Cung Mệnh 6 và vũ khí Trấn Tinh Luyện 5.",
        image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=1200&q=80"
      },
      {
        title: "Thời Gian Hồi Chiêu Kỹ Năng 0 Giây (No Cooldown)",
        description: "Thi triển kỹ năng nguyên tố E và kỹ năng nộ Q liên tục không ngừng nghỉ, dọn sạch la hoàn chỉ trong tích tắc.",
        image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80"
      },
      {
        title: "Hút Toàn Bộ Vật Phẩm & Rương Báu Tự Động",
        description: "Tính năng Vacuum tự động thu thập toàn bộ nguyên liệu rớt ra từ quái và tự động mở rương kho báu trong bán kính 100 mét.",
        image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80"
      }
    ],
    description: "Phiên bản Mod Menu cao cấp kèm tùy chọn kết nối máy chủ độc lập. Người chơi có thể tự do mở khóa toàn bộ tướng 5 sao Cung Mệnh 6, vũ khí Trấn R5, tùy biến sát thương và hồi chiêu kỹ năng ngay lập tức.",
    features: [
      "Mod Menu tùy chỉnh linh hoạt",
      "Vô hạn Nguyên Thạch (Primogems)",
      "Hồi chiêu kỹ năng 0 giây (No CD)",
      "Bất tử (God Mode) & One Hit",
      "Hút rương và vật phẩm tự động",
      "Mở khóa toàn bộ tướng 5 sao C6"
    ],
    downloadUrl: "https://download.hoangtanmods.vip/genshin-modmenu-v4.8.apk",
    mirrorUrl: "https://mega.nz/file/genshin-apex-mod",
    obbUrl: "",
    hasObb: false,
    installGuide: "1. Gỡ bản Genshin Impact gốc nếu có.\n2. Cài đặt file APK Mod Menu.\n3. Cấp quyền 'Hiển thị trên các ứng dụng khác'.\n4. Mở game để tải dữ liệu bổ sung và kích hoạt mod."
  },
  {
    id: "minecraft-bedrock-rtx-unlocked",
    title: "Minecraft Bedrock (Full Unlocked & RTX Shaders)",
    developer: "Mojang Studios / Hoàng Tấn Mods",
    category: "simulation",
    categoryLabel: "Mô Phỏng",
    version: "v1.21.30",
    androidReq: "Android 6.0+",
    size: "650 MB",
    rating: 4.9,
    downloads: "3.5M+",
    isVip: false,
    isUpdated: true,
    isHot: true,
    coverImage: "https://images.unsplash.com/photo-1627856013091-fed6e4e30025?auto=format&fit=crop&w=1000&q=80",
    featuresShowcase: [
      {
        title: "Mở Khóa Toàn Bộ Cửa Hàng Marketplace & Skin VIP",
        description: "Truy cập miễn phí 100% các gói Skin độc quyền, Texture Pack cao cấp và bản đồ phiêu lưu trả phí của Marketplace.",
        image: "https://images.unsplash.com/photo-1627856013091-fed6e4e30025?auto=format&fit=crop&w=1200&q=80"
      },
      {
        title: "Tích Hợp Sẵn Gói Shaders Ánh Sáng Thực RTX",
        description: "Gói hiệu ứng Ray Tracing giả lập cho Android: mặt nước gợn sóng phản chiếu ánh trời, ánh sáng xuyên kẽ lá và bóng đổ mềm mại.",
        image: "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=1200&q=80"
      },
      {
        title: "Bất Tử Máu & Khai Thác Khối 1 Đòn (One Hit Mine)",
        description: "Nhân vật không bị mất máu khi rơi từ trên cao hay bị quái tấn công, đồng thời khai thác mọi loại quặng và đá chỉ với 1 cú gõ.",
        image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1200&q=80"
      }
    ],
    description: "Minecraft PE Bedrock Edition bản quyền đã mở khóa toàn bộ gói Skin cao cấp, bản đồ Marketplace trả phí và tích hợp sẵn bộ Shader siêu thực Ray Tracing (RTX) dành riêng cho Android. Đăng nhập Microsoft Xbox Live bình thường.",
    features: [
      "Mở khóa 100% Marketplace & Skin",
      "Tích hợp Shaders ánh sáng thực RTX",
      "Nhân vật bất tử (God Mode)",
      "Đập block 1 hit (One Hit)",
      "Vũ khí độ bền vô hạn",
      "Hỗ trợ Xbox Live chơi Online"
    ],
    downloadUrl: "https://download.hoangtanmods.vip/minecraft-pe-v1.21-unlocked.apk",
    mirrorUrl: "https://drive.google.com/uc?id=sample_minecraft_apk",
    obbUrl: "",
    hasObb: false,
    installGuide: "1. Tải về file APK Minecraft Bedrock.\n2. Cho phép cài đặt ứng dụng từ nguồn không xác định.\n3. Cài đặt và mở game, đăng nhập Microsoft Account để đồng bộ thế giới."
  },
  {
    id: "shadow-fight-4-special-mod",
    title: "Shadow Fight 4: Arena (Mod Menu VIP)",
    developer: "NEKKI / Hoàng Tấn Mods",
    category: "action",
    categoryLabel: "Hành Động",
    version: "v1.9.12",
    androidReq: "Android 7.0+",
    size: "1.1 GB",
    rating: 4.7,
    downloads: "620K+",
    isVip: true,
    isUpdated: false,
    isHot: false,
    coverImage: "https://images.unsplash.com/photo-1579373903781-fd5c0c30c4cd?auto=format&fit=crop&w=1000&q=80",
    featuresShowcase: [
      {
        title: "Đóng Băng Kẻ Địch (Freeze Dumb AI)",
        description: "Tính năng làm tê liệt hoàn toàn đối thủ trong đấu trường võ đài, khiến đối thủ đứng yên để bạn dễ dàng thi triển chuỗi combo liên hoàn.",
        image: "https://images.unsplash.com/photo-1579373903781-fd5c0c30c4cd?auto=format&fit=crop&w=1200&q=80"
      },
      {
        title: "Vô Hạn Năng Lượng Bóng Tối (Shadow Energy)",
        description: "Thanh nội năng bóng tối luôn đầy 100%, cho phép tung các chiêu thức bóng tối áp đảo liên tục mà không cần chờ nạp.",
        image: "https://images.unsplash.com/photo-1563089145-599997674d42?auto=format&fit=crop&w=1200&q=80"
      },
      {
        title: "Tùy Biến Sát Thương & Phòng Thủ Đa Tầng",
        description: "Thanh trượt điều chỉnh sát thương xuất kích từ x1 đến x50 lần, dễ dàng vượt qua các màn thi đấu khó nhất.",
        image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=1200&q=80"
      }
    ],
    description: "Game đối kháng đỉnh cao đồ họa 3D điện ảnh từ NEKKI. Bản Mod Menu cho phép tùy biến kẻ địch đứng yên, vô hạn năng lượng bóng tối, mở khóa toàn bộ trang phục tướng Huyền Thoại và nâng cấp vũ khí tối đa.",
    features: [
      "Mod Menu thông minh",
      "Kẻ thù bị đóng băng / AI Dumb",
      "Vô hạn Năng lượng Bóng Tối",
      "Bội số sát thương tùy chỉnh",
      "Mở khóa toàn bộ Skin Huyền Thoại",
      "Không quảng cáo làm phiền"
    ],
    downloadUrl: "https://download.hoangtanmods.vip/shadow-fight-4-mod.apk",
    mirrorUrl: "https://mediafire.com/download/sf4-arena-mod",
    obbUrl: "https://download.hoangtanmods.vip/sf4-data.obb",
    hasObb: true,
    installGuide: "1. Cài đặt APK Shadow Fight 4.\n2. Sao chép file OBB vào Android/obb/com.nekki.shadowfightarena/\n3. Khởi động game và tận hưởng các trận đấu võ đài."
  },
  {
    id: "asphalt-9-unlimited-nitro",
    title: "Asphalt Legends (Unlimited Nitro & Mod Menu)",
    developer: "Gameloft SE / Hoàng Tấn Mods",
    category: "racing",
    categoryLabel: "Đua Xe",
    version: "v4.5.0",
    androidReq: "Android 8.0+",
    size: "2.8 GB",
    rating: 4.8,
    downloads: "940K+",
    isVip: true,
    isUpdated: true,
    isHot: true,
    coverImage: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1000&q=80",
    featuresShowcase: [
      {
        title: "Bình Nitro Vô Hạn Không Bao Giờ Cạn (Never-End Nitro)",
        description: "Kích hoạt trạng thái Shockwave Nitro xé gió liên tục suốt toàn bộ chặng đua, bứt phá mọi kỷ lục thời gian về đích.",
        image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80"
      },
      {
        title: "Chế Độ Ghost Car Đi Xuyên Xe Khác",
        description: "Phương tiện của bạn trở nên vô hình trước va chạm, không bao giờ bị xe đối thủ hay xe cảnh sát húc xoay vòng trên đường đua.",
        image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80"
      },
      {
        title: "Mở Khóa Toàn Bộ Siêu Xe Class S & Đồ Họa 120 FPS",
        description: "Sở hữu ngay các siêu phẩm như Bugatti Chiron, Koenigsegg Jesko và mở khóa tần số quét màn hình 120Hz mượt mà.",
        image: "https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?auto=format&fit=crop&w=1200&q=80"
      }
    ],
    description: "Trải nghiệm đường đua rực lửa với loạt siêu xe Bugatti, Ferrari, Lamborghini. Bản Mod Menu hỗ trợ kích hoạt Nitro vĩnh viễn, kiểm soát lái tự động nâng cao Ghost Car, không bị cảnh sát hất tung và hỗ trợ 60-120 FPS mượt mà.",
    features: [
      "Vô hạn Nitro (Shockwave liên tục)",
      "Chế độ Ghost Car không bị va quẹt",
      "Mở khóa toàn bộ siêu xe Class S",
      "Mở khóa 120 FPS mượt mà",
      "Bảo vệ Anti-Ban tối đa",
      "Hỗ trợ chế độ Career & Event"
    ],
    downloadUrl: "https://download.hoangtanmods.vip/asphalt-legends-mod.apk",
    mirrorUrl: "https://drive.google.com/uc?id=sample_asphalt_apk",
    obbUrl: "https://download.hoangtanmods.vip/asphalt-data.obb",
    hasObb: true,
    installGuide: "1. Cài đặt file APK Asphalt Legends.\n2. Chuyển thư mục OBB vào: Android/obb/com.gameloft.android.ANMP.GloftA9HM/\n3. Vào game và mở Mod Menu góc trái màn hình."
  },
  {
    id: "clash-of-clans-private-mod",
    title: "Clash of Clans (Null's Private Server VIP)",
    developer: "Supercell / Hoàng Tấn Mods",
    category: "strategy",
    categoryLabel: "Chiến Thuật",
    version: "v16.350",
    androidReq: "Android 6.0+",
    size: "420 MB",
    rating: 4.9,
    downloads: "2.8M+",
    isVip: true,
    isUpdated: true,
    isHot: true,
    coverImage: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1000&q=80",
    featuresShowcase: [
      {
        title: "Vô Hạn 1,000,000,000 Đá Quý (Gems) & Vàng / Dầu Tiên",
        description: "Khởi đầu game với số tài nguyên khổng lồ, mua thợ xây tối đa và mua sắm không giới hạn mà không cần nạp thẻ.",
        image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80"
      },
      {
        title: "Nâng Cấp Nhà Chính & Quân Lính Trong 0 Giây",
        description: "Mọi công trình phòng thủ, tháp pháo, pháo đài và trại lính đều được nâng cấp tức thì mà không cần chờ đợi thời gian xây dựng.",
        image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=1200&q=80"
      },
      {
        title: "Hệ Thống Lệnh Trực Tiếp: /upgrade, /clean, /max",
        description: "Gõ lệnh trực tiếp trong khung trò chuyện để tự động đẩy toàn bộ làng lên cấp tối đa hoặc thiết lập lại căn cứ nhanh chóng.",
        image: "https://images.unsplash.com/photo-1563089145-599997674d42?auto=format&fit=crop&w=1200&q=80"
      }
    ],
    description: "Máy chủ lậu riêng tư (Private Server) ổn định nhất của Clash of Clans. Người chơi nhận ngay Vô Hạn Đá Quý (Gems), Vàng và Dầu Tiên. Tự do nâng cấp Nhà Chính Town Hall cấp cao nhất, huấn luyện lính không mất thời gian.",
    features: [
      "Vô hạn Đá Quý (Gems 1 Tỷ)",
      "Vô hạn Vàng & Dầu Tiên",
      "Nâng cấp công trình trong 0 giây",
      "Mở khóa toàn bộ Skin Hero VIP",
      "Hệ thống lệnh tắt: /upgrade, /max",
      "Chạy song song không ảnh hưởng bản gốc"
    ],
    downloadUrl: "https://download.hoangtanmods.vip/nulls-clash-v16.apk",
    mirrorUrl: "https://mega.nz/file/nulls-clash-vip",
    obbUrl: "",
    hasObb: false,
    installGuide: "1. Tải về file APK Null's Clash.\n2. Cài đặt trực tiếp (không cần gỡ Clash of Clans gốc).\n3. Mở game và gõ lệnh /help trong khung chat clan để xem các lệnh bí mật."
  },
  {
    id: "roblox-mod-menu-vip",
    title: "Roblox (Hoàng Tấn VIP Mod Menu v2.6)",
    developer: "Roblox Corporation / Hoàng Tấn Mods",
    category: "simulation",
    categoryLabel: "Mô Phỏng",
    version: "v2.645",
    androidReq: "Android 7.0+",
    size: "180 MB",
    rating: 4.7,
    downloads: "4.1M+",
    isVip: true,
    isUpdated: true,
    isHot: true,
    coverImage: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?auto=format&fit=crop&w=1000&q=80",
    featuresShowcase: [
      {
        title: "Chế Độ Bay Tự Do Trên Không (Fly Mode VIP)",
        description: "Điều khiển nhân vật bay lượn tự do khắp bản đồ với tốc độ tùy chỉnh, dễ dàng khám phá mọi khu vực bí mật.",
        image: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?auto=format&fit=crop&w=1200&q=80"
      },
      {
        title: "Đi Xuyên Tường & Vật Cản (Noclip Wallhack)",
        description: "Cho phép nhân vật di chuyển xuyên qua các bức tường kiên cố, cửa khóa và các chướng ngại vật trong các trò chơi obby.",
        image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1200&q=80"
      },
      {
        title: "Nhảy Trên Không Không Giới Hạn (Infinite Air Jump)",
        description: "Nhấn nút nhảy liên tục giữa không trung để leo lên đỉnh các tòa nhà chọc trời hoặc vượt chướng ngại vật dễ như trở bàn tay.",
        image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1200&q=80"
      }
    ],
    description: "Bộ Mod Menu chuyên nghiệp dành cho ứng dụng Roblox Android. Hỗ trợ đa dạng tính năng Bay nhảy xuyên tường (Ghost/Fly Mode), Nhảy cao không giới hạn (Air Jump), Bất tử và Tốc độ di chuyển tùy chỉnh trong hầu hết các mini-game Blox Fruits, Brookhaven, Blade Ball.",
    features: [
      "Mod Menu giao diện tiếng Việt",
      "Chế độ Bay tự do (Fly Mode)",
      "Đi xuyên tường (Noclip)",
      "Nhảy trên không liên tục (Air Jump)",
      "Tăng tốc độ chạy (Speed Hack)",
      "ESP hiện vị trí người chơi & vật phẩm"
    ],
    downloadUrl: "https://download.hoangtanmods.vip/roblox-modmenu-v2.6.apk",
    mirrorUrl: "https://mediafire.com/download/roblox-vip-mod",
    obbUrl: "",
    hasObb: false,
    installGuide: "1. Gỡ ứng dụng Roblox phiên bản CH Play.\n2. Cài đặt APK Roblox Mod Menu.\n3. Cấp quyền Vẽ trên ứng dụng khác.\n4. Đăng nhập tài khoản phụ và trải nghiệm."
  }
];

// Tự động chuẩn hóa screenshots từ featuresShowcase để luôn tương thích ngược
DEFAULT_MODS_DATA.forEach(mod => {
  if (mod.featuresShowcase && mod.featuresShowcase.length > 0) {
    mod.screenshots = mod.featuresShowcase.map(f => f.image);
  }
});

// Quản lý LocalStorage phiên bản V2 mới nhất
const STORAGE_KEY = "HOANG_TAN_MODS_LIST_V2";
const FAVORITES_KEY = "HOANG_TAN_MODS_FAVORITES_V2";

function getStoredMods() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed) && parsed.length > 0) {
        return parsed;
      }
    }
  } catch (e) {
    console.warn("Could not load from localStorage, using default", e);
  }
  return DEFAULT_MODS_DATA;
}

function saveStoredMods(mods) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(mods));
  } catch (e) {
    console.error("Error saving mods to localStorage", e);
  }
}

function getStoredFavorites() {
  try {
    const raw = localStorage.getItem(FAVORITES_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    return [];
  }
}

function saveStoredFavorites(favs) {
  try {
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(favs));
  } catch (e) {
    console.error("Error saving favorites", e);
  }
}
