/**
 * HOÀNG TẤN MODS - Gallery & Lightbox Controller
 * Xử lý trình chiếu từng ảnh chụp tương ứng với 1 tính năng mod cụ thể kèm lời mô tả chi tiết
 */

class ModGallery {
  constructor() {
    this.currentFeatures = [];
    this.currentIndex = 0;

    // Elements trong Cửa sổ chi tiết Mod
    this.modalMainImg = document.getElementById('modalMainScreenshot');
    this.modalThumbsRow = document.getElementById('modalThumbsRow');
    this.galleryCounter = document.getElementById('galleryCounter');
    this.prevBtn = document.getElementById('galleryPrevBtn');
    this.nextBtn = document.getElementById('galleryNextBtn');

    // Hộp hiển thị thông tin tính năng tương ứng với ảnh
    this.spotlightBadge = document.getElementById('spotlightBadge');
    this.spotlightTitle = document.getElementById('spotlightTitle');
    this.spotlightDesc = document.getElementById('spotlightDesc');

    // Elements trong Lightbox toàn màn hình
    this.lightbox = document.getElementById('lightboxModal');
    this.lightboxImg = document.getElementById('lightboxImg');
    this.lightboxClose = document.getElementById('lightboxClose');
    this.lightboxPrev = document.getElementById('lightboxPrev');
    this.lightboxNext = document.getElementById('lightboxNext');
    this.lightboxFeatBadge = document.getElementById('lightboxFeatBadge');
    this.lightboxCaptionTitle = document.getElementById('lightboxCaptionTitle');
    this.lightboxCaptionDesc = document.getElementById('lightboxCaptionDesc');

    this.initEvents();
  }

  initEvents() {
    if (this.prevBtn) {
      this.prevBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        this.prevImage();
      });
    }

    if (this.nextBtn) {
      this.nextBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        this.nextImage();
      });
    }

    if (this.modalMainImg) {
      this.modalMainImg.addEventListener('click', () => {
        this.openLightbox(this.currentIndex);
      });
    }

    // Lightbox events
    if (this.lightboxClose) {
      this.lightboxClose.addEventListener('click', () => this.closeLightbox());
    }

    if (this.lightbox) {
      this.lightbox.addEventListener('click', (e) => {
        if (e.target === this.lightbox) {
          this.closeLightbox();
        }
      });
    }

    if (this.lightboxPrev) {
      this.lightboxPrev.addEventListener('click', (e) => {
        e.stopPropagation();
        this.prevImage();
        this.updateLightbox();
      });
    }

    if (this.lightboxNext) {
      this.lightboxNext.addEventListener('click', (e) => {
        e.stopPropagation();
        this.nextImage();
        this.updateLightbox();
      });
    }

    // Hỗ trợ bàn phím: Mũi tên trái/phải và phím Escape
    window.addEventListener('keydown', (e) => {
      if (this.lightbox && this.lightbox.classList.contains('active')) {
        if (e.key === 'Escape') this.closeLightbox();
        if (e.key === 'ArrowLeft') {
          this.prevImage();
          this.updateLightbox();
        }
        if (e.key === 'ArrowRight') {
          this.nextImage();
          this.updateLightbox();
        }
      }
    });
  }

  /**
   * Tải danh sách tính năng kèm ảnh chụp mô tả
   * @param {Array} featuresShowcase - Mảng các object { title, description, image } hoặc URL ảnh
   * @param {string} fallbackCover - Ảnh bìa dự phòng
   */
  loadGallery(featuresShowcase, fallbackCover) {
    if (Array.isArray(featuresShowcase) && featuresShowcase.length > 0) {
      this.currentFeatures = featuresShowcase.map((item, idx) => {
        if (typeof item === 'string') {
          return {
            image: item,
            title: `Tính Năng Mod #${idx + 1}`,
            description: `Ảnh chụp minh họa tính năng hoạt động thực tế trên bản mod Android.`
          };
        }
        return {
          image: item.image || fallbackCover || 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1200&q=80',
          title: item.title || `Tính Năng Mod #${idx + 1}`,
          description: item.description || `Mô tả chi tiết tính năng của bản mod game Android.`
        };
      });
    } else {
      this.currentFeatures = [{
        image: fallbackCover || 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1200&q=80',
        title: 'Tổng Quan Bản Mod Game',
        description: 'Hình ảnh chụp giao diện tổng quan và cài đặt bản mod trên thiết bị Android.'
      }];
    }

    this.currentIndex = 0;
    this.renderThumbs();
    this.showImage(0);
  }

  renderThumbs() {
    if (!this.modalThumbsRow) return;
    this.modalThumbsRow.innerHTML = '';

    this.currentFeatures.forEach((feat, idx) => {
      const thumb = document.createElement('div');
      thumb.className = `gallery-thumb-item ${idx === this.currentIndex ? 'active' : ''}`;
      thumb.title = feat.title;
      thumb.innerHTML = `
        <img src="${feat.image}" alt="${feat.title}" loading="lazy" 
          onerror="this.src='https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=400&q=80'" />
        <span class="thumb-feat-num">${idx + 1}</span>
      `;
      thumb.addEventListener('click', () => {
        this.showImage(idx);
      });
      this.modalThumbsRow.appendChild(thumb);
    });
  }

  showImage(index) {
    if (index < 0) index = this.currentFeatures.length - 1;
    if (index >= this.currentFeatures.length) index = 0;
    this.currentIndex = index;

    const currentItem = this.currentFeatures[this.currentIndex];

    // Cập nhật ảnh chụp chính
    if (this.modalMainImg) {
      this.modalMainImg.style.opacity = '0.3';
      const newImg = new Image();
      newImg.src = currentItem.image;
      newImg.onload = () => {
        this.modalMainImg.src = currentItem.image;
        this.modalMainImg.style.opacity = '1';
      };
      newImg.onerror = () => {
        this.modalMainImg.src = 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1200&q=80';
        this.modalMainImg.style.opacity = '1';
      };
    }

    // Cập nhật tiêu đề & lời mô tả tính năng tương ứng với ảnh chụp này
    if (this.spotlightBadge) {
      this.spotlightBadge.textContent = `Tính Năng #${this.currentIndex + 1} / ${this.currentFeatures.length}`;
    }

    if (this.spotlightTitle) {
      this.spotlightTitle.textContent = currentItem.title;
    }

    if (this.spotlightDesc) {
      this.spotlightDesc.textContent = currentItem.description;
    }

    if (this.galleryCounter) {
      this.galleryCounter.textContent = `Ảnh ${this.currentIndex + 1} / ${this.currentFeatures.length}`;
    }

    // Cập nhật trạng thái active trên danh sách thumbnail
    const thumbs = this.modalThumbsRow.querySelectorAll('.gallery-thumb-item');
    thumbs.forEach((thumb, idx) => {
      thumb.classList.toggle('active', idx === this.currentIndex);
    });
  }

  prevImage() {
    this.showImage(this.currentIndex - 1);
  }

  nextImage() {
    this.showImage(this.currentIndex + 1);
  }

  openLightbox(index) {
    if (!this.lightbox || !this.lightboxImg) return;
    this.currentIndex = index;
    this.updateLightbox();
    this.lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  updateLightbox() {
    const currentItem = this.currentFeatures[this.currentIndex];
    if (!currentItem) return;

    if (this.lightboxImg) {
      this.lightboxImg.src = currentItem.image;
    }

    if (this.lightboxFeatBadge) {
      this.lightboxFeatBadge.textContent = `Tính Năng #${this.currentIndex + 1} / ${this.currentFeatures.length}`;
    }

    if (this.lightboxCaptionTitle) {
      this.lightboxCaptionTitle.textContent = currentItem.title;
    }

    if (this.lightboxCaptionDesc) {
      this.lightboxCaptionDesc.textContent = currentItem.description;
    }
  }

  closeLightbox() {
    if (!this.lightbox) return;
    this.lightbox.classList.remove('active');
    // Chỉ phục hồi overflow nếu modal chi tiết không mở
    const detailModal = document.getElementById('modDetailModal');
    if (!detailModal || !detailModal.classList.contains('active')) {
      document.body.style.overflow = '';
    }
  }
}
