/**
 * APEX MODS - Gallery & Lightbox Controller
 * Xử lý trình chiếu nhiều ảnh chụp màn hình (direct link) & phóng to toàn màn hình
 */

class ModGallery {
  constructor() {
    this.currentImages = [];
    this.currentIndex = 0;

    // Elements
    this.modalMainImg = document.getElementById('modalMainScreenshot');
    this.modalThumbsRow = document.getElementById('modalThumbsRow');
    this.galleryCounter = document.getElementById('galleryCounter');
    this.prevBtn = document.getElementById('galleryPrevBtn');
    this.nextBtn = document.getElementById('galleryNextBtn');

    // Lightbox Elements
    this.lightbox = document.getElementById('lightboxModal');
    this.lightboxImg = document.getElementById('lightboxImg');
    this.lightboxClose = document.getElementById('lightboxClose');
    this.lightboxPrev = document.getElementById('lightboxPrev');
    this.lightboxNext = document.getElementById('lightboxNext');

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

    // Keyboard support
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

  loadGallery(screenshots, fallbackCover) {
    // Đảm bảo luôn có ít nhất 1 ảnh từ direct link
    this.currentImages = (screenshots && screenshots.length > 0) 
      ? screenshots 
      : [fallbackCover || 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1200&q=80'];
    
    this.currentIndex = 0;
    this.renderThumbs();
    this.showImage(0);
  }

  renderThumbs() {
    if (!this.modalThumbsRow) return;
    this.modalThumbsRow.innerHTML = '';

    this.currentImages.forEach((url, idx) => {
      const thumb = document.createElement('div');
      thumb.className = `gallery-thumb-item ${idx === this.currentIndex ? 'active' : ''}`;
      thumb.innerHTML = `
        <img src="${url}" alt="Screenshot ${idx + 1}" loading="lazy" 
          onerror="this.src='https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=400&q=80'" />
      `;
      thumb.addEventListener('click', () => {
        this.showImage(idx);
      });
      this.modalThumbsRow.appendChild(thumb);
    });
  }

  showImage(index) {
    if (index < 0) index = this.currentImages.length - 1;
    if (index >= this.currentImages.length) index = 0;
    this.currentIndex = index;

    if (this.modalMainImg) {
      this.modalMainImg.style.opacity = '0.3';
      const newImg = new Image();
      newImg.src = this.currentImages[this.currentIndex];
      newImg.onload = () => {
        this.modalMainImg.src = this.currentImages[this.currentIndex];
        this.modalMainImg.style.opacity = '1';
      };
      newImg.onerror = () => {
        this.modalMainImg.src = 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1200&q=80';
        this.modalMainImg.style.opacity = '1';
      };
    }

    if (this.galleryCounter) {
      this.galleryCounter.textContent = `Ảnh ${this.currentIndex + 1} / ${this.currentImages.length}`;
    }

    // Cập nhật thumbnail active
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
    this.lightboxImg.src = this.currentImages[this.currentIndex];
    this.lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  updateLightbox() {
    if (this.lightboxImg) {
      this.lightboxImg.src = this.currentImages[this.currentIndex];
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
