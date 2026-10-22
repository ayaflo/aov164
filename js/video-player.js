/**
 * HOÀNG TẤN MODS - Trình phát Video Demo Direct Link
 * Điều khiển phát video MP4/WebM từ direct link với giao diện sang trọng chuẩn VIP
 */

class DirectVideoPlayer {
  constructor(options = {}) {
    this.video = document.getElementById(options.videoId || 'demoVideo');
    this.overlayBtn = document.getElementById(options.overlayBtnId || 'videoOverlayPlay');
    this.playPauseBtn = document.getElementById(options.playPauseBtnId || 'videoPlayPauseBtn');
    this.progressSlider = document.getElementById(options.sliderId || 'videoProgressSlider');
    this.progressBarFill = document.getElementById(options.progressFillId || 'videoProgressFill');
    this.currentTimeLabel = document.getElementById(options.currentTimeId || 'videoTimeCurrent');
    this.durationLabel = document.getElementById(options.durationId || 'videoTimeDuration');
    this.muteBtn = document.getElementById(options.muteBtnId || 'videoMuteBtn');
    this.fullscreenBtn = document.getElementById(options.fullscreenBtnId || 'videoFullscreenBtn');
    this.playerContainer = document.getElementById(options.containerId || 'videoPlayerContainer');
    this.errorState = document.getElementById(options.errorStateId || 'videoErrorState');
    
    this.isDragging = false;
    this.init();
  }

  init() {
    if (!this.video) return;

    // Overlay click to play/pause
    if (this.overlayBtn) {
      this.overlayBtn.addEventListener('click', () => this.togglePlay());
    }

    if (this.video) {
      this.video.addEventListener('click', () => this.togglePlay());
      
      // Video events
      this.video.addEventListener('play', () => this.onPlayStateChange(true));
      this.video.addEventListener('pause', () => this.onPlayStateChange(false));
      this.video.addEventListener('ended', () => this.onEnded());
      this.video.addEventListener('timeupdate', () => this.onTimeUpdate());
      this.video.addEventListener('loadedmetadata', () => this.onLoadedMetadata());
      this.video.addEventListener('error', (e) => this.onError(e));
      this.video.addEventListener('waiting', () => {
        if (this.playerContainer) this.playerContainer.classList.add('buffering');
      });
      this.video.addEventListener('playing', () => {
        if (this.playerContainer) this.playerContainer.classList.remove('buffering');
      });
    }

    // Play/Pause button in controls
    if (this.playPauseBtn) {
      this.playPauseBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        this.togglePlay();
      });
    }

    // Progress slider
    if (this.progressSlider) {
      this.progressSlider.addEventListener('input', (e) => {
        this.isDragging = true;
        const percent = parseFloat(e.target.value);
        if (this.video.duration) {
          const targetTime = (percent / 100) * this.video.duration;
          if (this.currentTimeLabel) {
            this.currentTimeLabel.textContent = this.formatTime(targetTime);
          }
          if (this.progressBarFill) {
            this.progressBarFill.style.width = `${percent}%`;
          }
        }
      });

      this.progressSlider.addEventListener('change', (e) => {
        const percent = parseFloat(e.target.value);
        if (this.video.duration) {
          this.video.currentTime = (percent / 100) * this.video.duration;
        }
        this.isDragging = false;
      });
    }

    // Mute/Unmute
    if (this.muteBtn) {
      this.muteBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        this.toggleMute();
      });
    }

    // Fullscreen
    if (this.fullscreenBtn) {
      this.fullscreenBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        this.toggleFullscreen();
      });
    }

    // Fullscreen change listener
    document.addEventListener('fullscreenchange', () => this.onFullscreenChange());
    document.addEventListener('webkitfullscreenchange', () => this.onFullscreenChange());
  }

  togglePlay() {
    if (!this.video) return;
    if (this.video.paused || this.video.ended) {
      const playPromise = this.video.play();
      if (playPromise !== undefined) {
        playPromise.catch(err => {
          console.warn("Autoplay blocked or playback interrupted:", err);
        });
      }
    } else {
      this.video.pause();
    }
  }

  onPlayStateChange(isPlaying) {
    if (this.playerContainer) {
      this.playerContainer.classList.toggle('is-playing', isPlaying);
    }
    if (this.overlayBtn) {
      this.overlayBtn.style.opacity = isPlaying ? '0' : '1';
      this.overlayBtn.style.pointerEvents = isPlaying ? 'none' : 'auto';
    }
    if (this.playPauseBtn) {
      this.playPauseBtn.innerHTML = isPlaying
        ? `<svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/></svg>`
        : `<svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>`;
      this.playPauseBtn.setAttribute('title', isPlaying ? 'Tạm dừng (Pause)' : 'Phát (Play)');
    }
  }

  onEnded() {
    this.onPlayStateChange(false);
    if (this.overlayBtn) {
      this.overlayBtn.style.opacity = '1';
      this.overlayBtn.style.pointerEvents = 'auto';
    }
  }

  onLoadedMetadata() {
    if (this.durationLabel && this.video.duration) {
      this.durationLabel.textContent = this.formatTime(this.video.duration);
    }
    if (this.errorState) {
      this.errorState.style.display = 'none';
    }
  }

  onTimeUpdate() {
    if (this.isDragging || !this.video || !this.video.duration) return;
    const current = this.video.currentTime;
    const duration = this.video.duration;
    const percent = (current / duration) * 100;

    if (this.currentTimeLabel) {
      this.currentTimeLabel.textContent = this.formatTime(current);
    }
    if (this.progressSlider) {
      this.progressSlider.value = percent;
    }
    if (this.progressBarFill) {
      this.progressBarFill.style.width = `${percent}%`;
    }
  }

  toggleMute() {
    if (!this.video) return;
    this.video.muted = !this.video.muted;
    if (this.muteBtn) {
      this.muteBtn.innerHTML = this.video.muted
        ? `<svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z"/></svg>`
        : `<svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/></svg>`;
      this.muteBtn.setAttribute('title', this.video.muted ? 'Bật âm thanh (Unmute)' : 'Tắt âm thanh (Mute)');
    }
  }

  toggleFullscreen() {
    const container = this.playerContainer || this.video;
    if (!document.fullscreenElement && !document.webkitFullscreenElement) {
      if (container.requestFullscreen) {
        container.requestFullscreen();
      } else if (container.webkitRequestFullscreen) {
        container.webkitRequestFullscreen();
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      }
    }
  }

  onFullscreenChange() {
    const isFull = !!(document.fullscreenElement || document.webkitFullscreenElement);
    if (this.playerContainer) {
      this.playerContainer.classList.toggle('is-fullscreen', isFull);
    }
    if (this.fullscreenBtn) {
      this.fullscreenBtn.innerHTML = isFull
        ? `<svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M5 16h3v3h2v-5H5v2zm3-8H5v2h5V5H8v3zm6 11h2v-3h3v-2h-5v5zm2-14v3h3v2h-5V5h2z"/></svg>`
        : `<svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"/></svg>`;
      this.fullscreenBtn.setAttribute('title', isFull ? 'Thoát toàn màn hình' : 'Xem toàn màn hình');
    }
  }

  onError(e) {
    console.warn("Direct video error or network load error:", e);
    if (this.errorState) {
      this.errorState.style.display = 'flex';
    }
  }

  loadSource(url, poster) {
    if (!this.video) return;
    if (poster) {
      this.video.poster = poster;
    }
    this.video.src = url;
    this.video.load();
    if (this.errorState) {
      this.errorState.style.display = 'none';
    }
  }

  formatTime(seconds) {
    if (isNaN(seconds)) return "00:00";
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins < 10 ? '0' : ''}${mins}:${secs < 10 ? '0' : ''}${secs}`;
  }
}

// Khởi tạo toàn cục
window.DirectVideoPlayer = DirectVideoPlayer;
