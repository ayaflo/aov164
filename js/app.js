/**
 * HOÀNG TẤN MODS - Ứng Dụng Điều Khiển Landing Page Bản Mod Duy Nhất
 * Tham khảo cấu trúc chuẩn: https://magicnte.com/
 * Quản lý Video Player direct link, Interactive Feature Tabs, Roadmap, Download, FAQ và Cấu hình Link
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Lấy dữ liệu bản mod
  let modData = getSingleModData();

  // 2. Khởi tạo Video Player điều khiển direct link MP4
  const videoPlayer = new DirectVideoPlayer({
    videoId: 'demoVideo',
    overlayBtnId: 'videoOverlayPlay',
    playPauseBtnId: 'videoPlayPauseBtn',
    sliderId: 'videoProgressSlider',
    progressFillId: 'videoProgressFill',
    currentTimeId: 'videoTimeCurrent',
    durationId: 'videoTimeDuration',
    muteBtnId: 'videoMuteBtn',
    fullscreenBtnId: 'videoFullscreenBtn',
    containerId: 'videoPlayerContainer',
    errorStateId: 'videoErrorState'
  });

  // 3. Hệ thống Toast thông báo sang trọng
  function showToast(message, type = 'success') {
    let container = document.getElementById('toastContainer');
    if (!container) {
      container = document.createElement('div');
      container.id = 'toastContainer';
      container.className = 'toast-container';
      document.body.appendChild(container);
    }

    const toast = document.createElement('div');
    toast.className = 'toast';
    const iconSvg = type === 'success'
      ? `<svg class="toast-icon success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>`
      : `<svg class="toast-icon info" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>`;

    toast.innerHTML = `
      ${iconSvg}
      <span>${message}</span>
    `;

    container.appendChild(toast);
    setTimeout(() => toast.classList.add('show'), 50);

    setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => toast.remove(), 400);
    }, 3200);
  }

  // 4. Render toàn bộ dữ liệu lên giao diện
  function renderAll() {
    // Header & Hero
    const navBrandName = document.getElementById('navBrandName');
    if (navBrandName) navBrandName.textContent = modData.brandName;

    const brandTitleFirst = document.querySelector('.brand-title-first');
    const brandTitleSecond = document.querySelector('.brand-title-second');
    if (brandTitleFirst && brandTitleSecond && modData.brandName) {
      const parts = modData.brandName.trim().split(' ');
      if (parts.length >= 2) {
        brandTitleFirst.textContent = parts[0].toUpperCase();
        brandTitleSecond.textContent = parts.slice(1).join(' ').toUpperCase();
      } else {
        brandTitleFirst.textContent = modData.brandName.toUpperCase();
        brandTitleSecond.textContent = '';
      }
    }


    const heroKickerText = document.getElementById('heroKickerText');
    if (heroKickerText) heroKickerText.textContent = modData.brandKicker;

    // Ảnh nền direct link phía sau phần đầu tiên
    const heroStageBg = document.getElementById('heroStageBg');
    if (heroStageBg && modData.heroBackgroundImage) {
      heroStageBg.style.backgroundImage = `url('${modData.heroBackgroundImage}')`;
    }

    const heroModTitle = document.getElementById('heroModTitle');
    if (heroModTitle) heroModTitle.textContent = modData.modTitle;

    const heroGameName = document.getElementById('heroGameName');
    if (heroGameName) heroGameName.textContent = modData.gameName;

    const heroSubtitle = document.getElementById('heroSubtitle');
    if (heroSubtitle) heroSubtitle.textContent = modData.subtitle;

    // Các nút tải về
    const downloadBtns = [
      document.getElementById('headerDownloadBtn'),
      document.getElementById('heroDownloadBtn'),
      document.getElementById('btnDownloadApkMain'),
      document.getElementById('mobileBarDownloadBtn')
    ];
    downloadBtns.forEach(btn => {
      if (btn) btn.href = modData.downloadUrl;
    });

    const mirrorBtn = document.getElementById('btnDownloadMirror');
    if (mirrorBtn) {
      mirrorBtn.href = modData.mirrorDownloadUrl || '#';
      mirrorBtn.style.display = modData.mirrorDownloadUrl ? 'inline-flex' : 'none';
    }

    // Release Card Info
    const releaseModVersion = document.getElementById('releaseModVersion');
    if (releaseModVersion) releaseModVersion.textContent = `${modData.modTitle} ${modData.version}`;

    const releaseBuildTag = document.getElementById('releaseBuildTag');
    if (releaseBuildTag) releaseBuildTag.textContent = modData.versionBuild;

    const releaseStatusText = document.getElementById('releaseStatusText');
    if (releaseStatusText) releaseStatusText.textContent = modData.releaseStatus;

    const specGameVersion = document.getElementById('specGameVersion');
    if (specGameVersion) specGameVersion.textContent = modData.supportedGameVersion;

    const specAndroidReq = document.getElementById('specAndroidReq');
    if (specAndroidReq) specAndroidReq.textContent = modData.androidReq;

    const specUpdatedDate = document.getElementById('specUpdatedDate');
    if (specUpdatedDate) specUpdatedDate.textContent = modData.updatedDate;

    // Changelog List
    const changelogList = document.getElementById('changelogList');
    if (changelogList && modData.changelog) {
      changelogList.innerHTML = modData.changelog.map(item => `
        <li class="changelog-item">
          <svg fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
          </svg>
          <span>${item}</span>
        </li>
      `).join('');
    }

    // File info & SHA256 (nếu có phần tử hiển thị)
    const fileInfoLine = document.getElementById('fileInfoLine');
    if (fileInfoLine) {
      fileInfoLine.textContent = `${modData.fileSize} · ${modData.fileName}`;
    }

    const sha256Value = document.getElementById('sha256Value');
    if (sha256Value) sha256Value.textContent = modData.sha256;

    // Mobile Bar Info
    const mobileBarTitle = document.getElementById('mobileBarTitle');
    if (mobileBarTitle) mobileBarTitle.textContent = `${modData.modTitle} Android`;

    const mobileBarSub = document.getElementById('mobileBarSub');
    if (mobileBarSub) mobileBarSub.textContent = `v${modData.version} · ${modData.fileSize} · No Root`;

    // Cập nhật Video Player Direct Link & Mô tả Video
    videoPlayer.loadSource(modData.videoUrl, modData.videoPoster);

    const videoSectionDesc = document.getElementById('videoSectionDesc');
    if (videoSectionDesc && modData.videoDescription) {
      videoSectionDesc.textContent = modData.videoDescription;
    }

    const videoActiveUrlDisplay = document.getElementById('videoActiveUrlDisplay');
    if (videoActiveUrlDisplay) videoActiveUrlDisplay.textContent = modData.videoUrl;

    const videoTimeDuration = document.getElementById('videoTimeDuration');
    if (videoTimeDuration && modData.videoDuration) {
      videoTimeDuration.textContent = modData.videoDuration;
    }

    // Render Features, Guide, FAQ (Roadmap nếu có container)
    renderFeatureModules();
    if (document.getElementById('roadmapGrid')) {
      renderRoadmap();
    }
    renderInstallGuide();
    renderFaq();
  }

  // 5. Render Interactive Feature Modules (Tabs + Screenshots)
  function renderFeatureModules() {
    const container = document.getElementById('featuresContainer');
    if (!container || !modData.featureModules) return;

    container.innerHTML = modData.featureModules.map((module, mIdx) => {
      const activeSub = module.subfeatures[0] || {};

      return `
        <article class="feature-module-card" data-module-id="${module.id}">
          <div class="module-header">
            <span class="module-eyebrow">${module.eyebrow}</span>
            <h3 class="module-title">${module.title}</h3>
          </div>

          <div class="module-layout-grid">
            <!-- Left: Media showcase box with tabs -->
            <div class="feature-media-box">
              <div class="media-window-bar">
                <span class="window-dot red"></span>
                <span class="window-dot yellow"></span>
                <span class="window-dot green"></span>
                <span class="window-label">${module.id.toUpperCase()} MODULE PREVIEW</span>
              </div>

              <div class="feature-media-stage">
                <img class="feature-screenshot-img" 
                  id="featImg_${module.id}" 
                  src="${activeSub.image}" 
                  alt="${activeSub.title}" 
                  loading="lazy"
                />
              </div>

              <!-- Interactive Tabs below media -->
              <div class="feature-tabs-bar" role="tablist">
                ${module.subfeatures.map((sub, sIdx) => `
                  <button type="button" 
                    class="feature-tab-btn ${sIdx === 0 ? 'active' : ''}" 
                    data-module="${module.id}" 
                    data-sub-id="${sub.id}"
                    data-img-url="${sub.image}"
                  >
                    ${sub.tabLabel || sub.name}
                  </button>
                `).join('')}
              </div>
            </div>

            <!-- Right: Sub-features card list -->
            <div class="feature-details-col">
              ${module.subfeatures.map((sub, sIdx) => `
                <div class="subfeature-item-card ${sIdx === 0 ? 'active' : ''}" 
                  data-module="${module.id}" 
                  data-sub-id="${sub.id}"
                  data-img-url="${sub.image}"
                >
                  <div class="subfeature-card-header">
                    <h4 class="subfeature-card-title">${sub.title}</h4>
                    <span class="subfeature-badge">${sub.badge || 'Khả Dụng'}</span>
                  </div>
                  <p class="subfeature-card-desc">${sub.desc}</p>
                  ${sub.highlight ? `
                    <div class="subfeature-highlight-box">
                      ⚡ <strong>Điểm nổi bật:</strong> ${sub.highlight}
                    </div>
                  ` : ''}
                </div>
              `).join('')}
            </div>
          </div>
        </article>
      `;
    }).join('');

    // Gắn sự kiện chuyển tab tương tác
    container.querySelectorAll('.feature-tab-btn, .subfeature-item-card').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const moduleId = btn.getAttribute('data-module');
        const subId = btn.getAttribute('data-sub-id');
        const imgUrl = btn.getAttribute('data-img-url');

        // Đổi ảnh chụp
        const targetImg = document.getElementById(`featImg_${moduleId}`);
        if (targetImg && imgUrl) {
          targetImg.style.opacity = '0.3';
          setTimeout(() => {
            targetImg.src = imgUrl;
            targetImg.style.opacity = '1';
          }, 150);
        }

        // Cập nhật trạng thái active cho tab buttons
        container.querySelectorAll(`.feature-tab-btn[data-module="${moduleId}"]`).forEach(b => {
          b.classList.toggle('active', b.getAttribute('data-sub-id') === subId);
        });

        // Cập nhật trạng thái active cho feature item cards
        container.querySelectorAll(`.subfeature-item-card[data-module="${moduleId}"]`).forEach(c => {
          c.classList.toggle('active', c.getAttribute('data-sub-id') === subId);
        });
      });
    });
  }

  // 6. Render Roadmap Grid
  function renderRoadmap() {
    const grid = document.getElementById('roadmapGrid');
    if (!grid || !modData.roadmap) return;

    grid.innerHTML = modData.roadmap.map(item => `
      <div class="roadmap-card">
        <span class="roadmap-watermark-num">${item.id}</span>
        <div class="roadmap-card-header">
          <span class="roadmap-tag">${item.tag}</span>
          <span class="roadmap-status-badge ${item.status.toLowerCase()}">
            <svg width="6" height="6" fill="currentColor" viewBox="0 0 6 6"><circle cx="3" cy="3" r="3"/></svg>
            ${item.statusText}
          </span>
        </div>
        <h4 class="roadmap-title">${item.title}</h4>
        <p class="roadmap-desc">${item.desc}</p>
      </div>
    `).join('');
  }

  // 7. Render 4 Bước Hướng Dẫn Cài Đặt
  function renderInstallGuide() {
    const grid = document.getElementById('installGrid');
    if (!grid || !modData.installSteps) return;

    grid.innerHTML = modData.installSteps.map(step => `
      <div class="install-step-card">
        <div class="install-step-num">${step.step}</div>
        <h4 class="install-step-title">${step.title}</h4>
        <p class="install-step-desc">${step.desc}</p>
      </div>
    `).join('');
  }

  // 8. Render FAQs Accordion
  function renderFaq() {
    const grid = document.getElementById('faqGrid');
    if (!grid || !modData.faqs) return;

    grid.innerHTML = modData.faqs.map(faq => `
      <div class="faq-item">
        <div class="faq-question-row">
          <h4 class="faq-question">${faq.q}</h4>
          <svg class="faq-chevron" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
        <div class="faq-answer">${faq.a}</div>
      </div>
    `).join('');

    // Toggle FAQ
    grid.querySelectorAll('.faq-item').forEach(item => {
      item.addEventListener('click', () => {
        const isOpen = item.classList.contains('open');
        grid.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
        if (!isOpen) item.classList.add('open');
      });
    });
  }

  // 9. Nút Sao Chép Video Link

  const btnCopyVideoLink = document.getElementById('btnCopyVideoLink');
  if (btnCopyVideoLink) {
    btnCopyVideoLink.addEventListener('click', () => {
      navigator.clipboard.writeText(modData.videoUrl).then(() => {
        showToast('Đã sao chép Direct Link Video!', 'success');
      }).catch(() => {
        showToast('Vui lòng sao chép thủ công.', 'info');
      });
    });
  }

  // 10. Sticky Mobile Bottom Floating Bar & Header Scroll
  const mobileBar = document.getElementById('mobileBottomBar');
  const siteHeader = document.getElementById('siteHeader');

  window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY;

    // Header Blur on Scroll
    if (siteHeader) {
      siteHeader.classList.toggle('scrolled', scrollPos > 30);
    }

    // Mobile Bottom Floating Bar (hiện khi cuộn qua 350px)
    if (mobileBar) {
      mobileBar.classList.toggle('visible', scrollPos > 350);
    }
  });

  // 11. Xử lý nút kênh Telegram & Discord chưa mở
  document.querySelectorAll('.btn-disabled, .btn-community-disabled').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      showToast('Kênh cộng đồng đang được thiết lập và sẽ sớm mở đón toàn thể anh em!', 'info');
    });
  });

  // Khởi chạy render lần đầu
  renderAll();
});
