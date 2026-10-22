# 💎 HOÀNG TẤN MODS - TRANG QUẢNG BÁ BẢN MOD GAME ANDROID VIP

Website quảng bá chuyên nghiệp & sang trọng dành riêng cho **1 bản mod game Android độc quyền duy nhất**, được lấy cảm hứng và tiêu chuẩn thiết kế trực tiếp từ **[magicnte.com](https://magicnte.com/)** với tông màu đen không gian Midnight Obsidian, ánh sáng vàng kim sang trọng (Gold Amber Glow) và hiệu ứng Cyber Cyan.

---

## ✨ CÁC TÍNH NĂNG NỔI BẬT

1. **Video Demo Phát Từ Direct Link (HTML5 Video Player)**:
   - Trình phát video chuyên nghiệp nhúng và phát trực tiếp từ đường link MP4 direct link tốc độ cao (không qua trang rút gọn hay quảng cáo).
   - Nút Play to bản phát sáng ở giữa khung video.
   - Thanh điều khiển sang trọng: Phát/Tạm dừng, tua video (interactive seekbar), hiển thị thời gian phát `mm:ss`, bật/tắt âm lượng, phóng to toàn màn hình Fullscreen.
   - Thẻ hiển thị Direct Link video đang phát kèm nút **"Sao chép Link"** và nút **"Đổi Link Này"**.

2. **Trạng Thái Phát Hành & Tải Về Trực Tiếp (Release Status & Download Section)**:
   - Hiển thị phiên bản build APK, trạng thái phát hành Public Release.
   - Bảng thông số: Phiên bản game hỗ trợ, phiên bản Android yêu cầu (No Root), ngày cập nhật.
   - Hộp nhật ký thay đổi phiên bản mới (What changed in this release).
   - Tên gói ứng dụng (Package Name) & Dung lượng tải thực tế.
   - Khung mã băm xác thực bảo mật **SHA256 Checksum** kèm nút sao chép nhanh 1 chạm.
   - Nút tải trực tiếp file APK tốc độ cao và nút tải từ server dự phòng (Mirror Download).

3. **Hệ Thống Tiện Ích Tương Tác Độc Quyền (Interactive Feature Showcase)**:
   - Thiết kế giao diện mô phỏng cửa sổ điều khiển với 3 chấm màu macOS/Midnight.
   - Chia thành các Module chuyên sâu (Dịch chuyển Teleport, Bảo hộ chiến đấu God Mode, Thị giác X-Ray ESP & Hút đồ).
   - Mỗi module có các tab con tương tác (`Map TP`, `Quest TP`, `Manual TP`, `God Mode`, `No Cooldown`, `Damage Multiplier`, `Chest Locator`, `Pickup Range`).
   - Nhấp vào từng tab sẽ tự động chuyển đổi ảnh chụp minh họa thực tế sắc nét từ direct link kèm giải thích chi tiết điểm nổi bật.

4. **Lộ Trình Cập Nhật Tính Năng (Incoming Features & Roadmap)**:
   - Các thẻ lộ trình đánh số mờ kích thước lớn (`01`, `02`, `03`, `04`, `05`, `06`).
   - Phân loại rõ ràng trạng thái: `Đang phát triển (Incoming)` và `Đang nghiên cứu (Researching)`.

5. **Hướng Dẫn Cài Đặt 4 Bước (Installation Guide)**:
   - 4 bước trực quan hướng dẫn người chơi cài đặt file APK trên Android (Android 11 đến Android 15+) mà không cần Root máy.

6. **Cộng Đồng & Hỗ Trợ 24/7 (Community Channels)**:
   - Kết nối trực tiếp tới kênh thông báo **Telegram VIP** và máy chủ **Discord / Zalo**.

7. **Bộ Cấu Hình Direct Link Trực Quan (Live Link Config Modal)**:
   - Bấm vào biểu tượng bánh răng ⚙ trên góc phải hoặc chân trang để mở bảng cấu hình.
   - Cho phép bạn tự do thay đổi: **Tên bản mod, Tên game, Direct Link Video MP4, Direct Link Tải APK, Link Dự Phòng, Phiên bản, Dung lượng, SHA256**.
   - Lưu trữ tức thì vào `localStorage` của trình duyệt và cập nhật website ngay lập tức mà không cần chỉnh sửa code thủ công!

---

## 🚀 HƯỚNG DẪN ĐƯA TRANG WEB LÊN VERCEL

Dự án đã được cấu hình sẵn file `vercel.json` để triển khai trong 30 giây:

### Cách 1: Đưa lên Vercel qua GitHub (Khuyên dùng)
1. Đẩy thư mục mã nguồn này lên GitHub:
   ```bash
   git add .
   git commit -m "Trang quang ba 1 ban mod game Android co video demo direct link"
   git push origin main
   ```
2. Truy cập [vercel.com](https://vercel.com) và đăng nhập bằng tài khoản GitHub.
3. Chọn kho lưu trữ vừa tải lên và nhấn **"Deploy"**.
4. Vercel sẽ tự động cung cấp đường dẫn website trực tuyến miễn phí có sẵn chứng chỉ bảo mật HTTPS!

### Cách 2: Triển khai trực tiếp qua lệnh CLI
```bash
npx vercel
```

---

## 💻 CHẠY THỬ TRÊN MÁY LOCAL (Offline / Thử nghiệm)
- Dự án đang được chạy trên cổng `http://localhost:3000`.
- Lệnh chạy:
  ```bash
  npm run dev
  ```

---

## 📂 CẤU TRÚC TỆP TIN
```
Web tool mod/
├── css/
│   ├── variables.css      # Hệ thống màu Gold Luxury, phông chữ, ánh sáng viền
│   └── landing.css        # Giao diện Midnight phong cách magicnte.com, video player, tabs
├── js/
│   ├── data.js            # Dữ liệu bản mod duy nhất, link video demo & download APK
│   ├── video-player.js    # Bộ điều khiển video direct link tùy biến chuyên nghiệp
│   └── app.js             # Xử lý render dữ liệu, chuyển tab tương tác, popup đổi link
├── index.html             # Khung HTML5 chuẩn SEO, VideoObject & OpenGraph
├── vercel.json            # Cấu hình tối ưu tốc độ & cache trên Vercel
├── package.json           # Lệnh khởi chạy server cục bộ
└── README.md              # Tài liệu hướng dẫn sử dụng và triển khai
```
