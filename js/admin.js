/**
 * TẤN CUTOS VIP - ADMIN MANAGEMENT CONTROLLER
 * Điều khiển đăng nhập xác thực và bảng điều khiển cấu hình ảnh từng mục & video direct link
 */

document.addEventListener('DOMContentLoaded', () => {
  // Storage Keys
  const ADMIN_CREDS_KEY = 'TAN_CUTOS_ADMIN_CREDS_V1';
  const ADMIN_SESSION_KEY = 'TAN_CUTOS_ADMIN_SESSION_V1';

  // Default Admin Credentials
  const DEFAULT_ADMIN_CREDS = {
    username: 'admin',
    password: 'tancutos2026'
  };

  function getAdminCreds() {
    try {
      const raw = localStorage.getItem(ADMIN_CREDS_KEY);
      if (raw) return JSON.parse(raw);
    } catch (e) {
      console.warn('Lỗi đọc admin creds:', e);
    }
    return { ...DEFAULT_ADMIN_CREDS };
  }

  function saveAdminCreds(creds) {
    localStorage.setItem(ADMIN_CREDS_KEY, JSON.stringify(creds));
  }

  function getActiveSession() {
    try {
      const sessionStr = sessionStorage.getItem(ADMIN_SESSION_KEY) || localStorage.getItem(ADMIN_SESSION_KEY);
      if (sessionStr) return JSON.parse(sessionStr);
    } catch (e) {
      console.warn('Lỗi kiểm tra session:', e);
    }
    return null;
  }

  function setSession(username, rememberMe = true) {
    const sessionData = {
      username,
      loginAt: Date.now()
    };
    sessionStorage.setItem(ADMIN_SESSION_KEY, JSON.stringify(sessionData));
    if (rememberMe) {
      localStorage.setItem(ADMIN_SESSION_KEY, JSON.stringify(sessionData));
    } else {
      localStorage.removeItem(ADMIN_SESSION_KEY);
    }
  }

  function clearSession() {
    sessionStorage.removeItem(ADMIN_SESSION_KEY);
    localStorage.removeItem(ADMIN_SESSION_KEY);
  }

  // DOM Elements
  const loginView = document.getElementById('loginView');
  const dashboardView = document.getElementById('dashboardView');
  const adminLoginForm = document.getElementById('adminLoginForm');
  const loginUsernameInput = document.getElementById('loginUsername');
  const loginPasswordInput = document.getElementById('loginPassword');
  const loginRememberMe = document.getElementById('loginRememberMe');
  const loginErrorBox = document.getElementById('loginErrorBox');
  const loginErrorText = document.getElementById('loginErrorText');
  const btnTogglePassword = document.getElementById('btnTogglePassword');
  const btnLogoutAdmin = document.getElementById('btnLogoutAdmin');
  const adminSessionUserDisplay = document.getElementById('adminSessionUserDisplay');

  // ========================================================
  // 1. TOAST SYSTEM
  // ========================================================
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
      : `<svg class="toast-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>`;

    toast.innerHTML = `
      ${iconSvg}
      <span>${message}</span>
    `;

    container.appendChild(toast);
    setTimeout(() => toast.classList.add('show'), 40);

    setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => toast.remove(), 400);
    }, 3500);
  }

  // ========================================================
  // 2. AUTHENTICATION LOGIC
  // ========================================================
  function checkAuth() {
    const session = getActiveSession();
    if (session && session.username) {
      showDashboard(session.username);
    } else {
      showLogin();
    }
  }

  function showLogin() {
    if (loginView) loginView.style.display = 'flex';
    if (dashboardView) dashboardView.style.display = 'none';
    if (loginErrorBox) loginErrorBox.classList.remove('show');
    if (loginPasswordInput) loginPasswordInput.value = '';
  }

  function showDashboard(username) {
    if (loginView) loginView.style.display = 'none';
    if (dashboardView) dashboardView.style.display = 'flex';
    if (adminSessionUserDisplay) {
      adminSessionUserDisplay.textContent = `Admin: ${username} · Đã Xác Thực`;
    }
    loadDataIntoDashboard();
  }

  // Toggle Password Visibility
  if (btnTogglePassword && loginPasswordInput) {
    btnTogglePassword.addEventListener('click', () => {
      const isPassword = loginPasswordInput.type === 'password';
      loginPasswordInput.type = isPassword ? 'text' : 'password';
      const pwEyeIcon = document.getElementById('pwEyeIcon');
      if (pwEyeIcon) {
        pwEyeIcon.innerHTML = isPassword
          ? `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l18 18" />`
          : `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />`;
      }
    });
  }

  // Handle Login Form Submit
  if (adminLoginForm) {
    adminLoginForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const enteredUsername = loginUsernameInput.value.trim();
      const enteredPassword = loginPasswordInput.value.trim();
      const remember = loginRememberMe ? loginRememberMe.checked : true;

      const creds = getAdminCreds();

      if (enteredUsername === creds.username && enteredPassword === creds.password) {
        if (loginErrorBox) loginErrorBox.classList.remove('show');
        setSession(enteredUsername, remember);
        showDashboard(enteredUsername);
        showToast(`Đăng nhập thành công! Chào mừng ${enteredUsername}.`, 'success');
      } else {
        if (loginErrorBox) {
          loginErrorBox.classList.remove('show');
          void loginErrorBox.offsetWidth; // Trigger reflow for shake animation
          loginErrorBox.classList.add('show');
          loginErrorText.textContent = 'Tài khoản hoặc mật khẩu không chính xác!';
        }
      }
    });
  }

  // Handle Logout
  if (btnLogoutAdmin) {
    btnLogoutAdmin.addEventListener('click', () => {
      if (confirm('Bạn có chắc chắn muốn đăng xuất khỏi trang quản trị?')) {
        clearSession();
        showLogin();
        showToast('Đã đăng xuất an toàn.', 'info');
      }
    });
  }

  // ========================================================
  // 3. TAB NAVIGATION
  // ========================================================
  const tabButtons = document.querySelectorAll('.admin-tab-btn');
  const tabPanels = document.querySelectorAll('.tab-panel');

  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetTabId = btn.getAttribute('data-tab');
      tabButtons.forEach(b => b.classList.remove('active'));
      tabPanels.forEach(p => p.classList.remove('active'));

      btn.classList.add('active');
      const targetPanel = document.getElementById(targetTabId);
      if (targetPanel) targetPanel.classList.add('active');
    });
  });

  // ========================================================
  // 4. DATA POPULATION & MANAGEMENT
  // ========================================================
  let currentModData = getSingleModData();

  function loadDataIntoDashboard() {
    currentModData = getSingleModData();

    // Tab 1: Hero & Video
    const cfgHeroBgImage = document.getElementById('cfgHeroBgImage');
    const previewHeroBg = document.getElementById('previewHeroBg');
    const previewHeroTitle = document.getElementById('previewHeroTitle');
    const btnOpenHeroBgTab = document.getElementById('btnOpenHeroBgTab');

    if (cfgHeroBgImage) {
      cfgHeroBgImage.value = currentModData.heroBackgroundImage || '';
      updateHeroPreview(currentModData.heroBackgroundImage);
      cfgHeroBgImage.oninput = () => updateHeroPreview(cfgHeroBgImage.value.trim());
    }

    function updateHeroPreview(url) {
      if (previewHeroBg && url) {
        previewHeroBg.src = url;
        if (btnOpenHeroBgTab) btnOpenHeroBgTab.href = url;
      }
      if (previewHeroTitle) {
        previewHeroTitle.textContent = currentModData.modTitle || 'AOV VIP MENU';
      }
    }

    const btnReloadHeroBg = document.getElementById('btnReloadHeroBg');
    if (btnReloadHeroBg && cfgHeroBgImage) {
      btnReloadHeroBg.onclick = () => updateHeroPreview(cfgHeroBgImage.value.trim());
    }

    // Video Demo
    const cfgVideoUrl = document.getElementById('cfgVideoUrl');
    const cfgVideoPoster = document.getElementById('cfgVideoPoster');
    const cfgVideoDuration = document.getElementById('cfgVideoDuration');
    const cfgVideoDescription = document.getElementById('cfgVideoDescription');
    const previewVideoPlayer = document.getElementById('previewVideoPlayer');
    const previewVideoSource = document.getElementById('previewVideoSource');
    const btnOpenVideoTab = document.getElementById('btnOpenVideoTab');
    const btnTestVideoLink = document.getElementById('btnTestVideoLink');

    if (cfgVideoUrl) {
      cfgVideoUrl.value = currentModData.videoUrl || '';
      if (btnOpenVideoTab) btnOpenVideoTab.href = currentModData.videoUrl || '#';
    }
    if (cfgVideoPoster) cfgVideoPoster.value = currentModData.videoPoster || '';
    if (cfgVideoDuration) cfgVideoDuration.value = currentModData.videoDuration || '';
    if (cfgVideoDescription) cfgVideoDescription.value = currentModData.videoDescription || '';

    function loadTestVideo(url, poster) {
      if (previewVideoPlayer && previewVideoSource && url) {
        previewVideoSource.src = url;
        if (poster) previewVideoPlayer.poster = poster;
        previewVideoPlayer.load();
      }
      if (btnOpenVideoTab) btnOpenVideoTab.href = url || '#';
    }

    loadTestVideo(currentModData.videoUrl, currentModData.videoPoster);

    if (btnTestVideoLink && cfgVideoUrl) {
      btnTestVideoLink.onclick = () => {
        loadTestVideo(cfgVideoUrl.value.trim(), cfgVideoPoster ? cfgVideoPoster.value.trim() : '');
        showToast('Đã nạp video vào khung phát test!', 'info');
      };
    }

    // Tab 2: 7 Feature Cards (Từng mục riêng)
    renderFeaturesEditor();

    // Tab 3: Downloads & Changelog
    const cfgDownloadUrl = document.getElementById('cfgDownloadUrl');
    const cfgMirrorUrl = document.getElementById('cfgMirrorUrl');
    const cfgVersion = document.getElementById('cfgVersion');
    const cfgFileSize = document.getElementById('cfgFileSize');
    const cfgFileName = document.getElementById('cfgFileName');
    const cfgVersionBuild = document.getElementById('cfgVersionBuild');
    const cfgSupportedGameVersion = document.getElementById('cfgSupportedGameVersion');
    const cfgAndroidReq = document.getElementById('cfgAndroidReq');
    const cfgUpdatedDate = document.getElementById('cfgUpdatedDate');
    const cfgReleaseStatus = document.getElementById('cfgReleaseStatus');

    if (cfgDownloadUrl) cfgDownloadUrl.value = currentModData.downloadUrl || '';
    if (cfgMirrorUrl) cfgMirrorUrl.value = currentModData.mirrorDownloadUrl || '';
    if (cfgVersion) cfgVersion.value = currentModData.version || '';
    if (cfgFileSize) cfgFileSize.value = currentModData.fileSize || '';
    if (cfgFileName) cfgFileName.value = currentModData.fileName || '';
    if (cfgVersionBuild) cfgVersionBuild.value = currentModData.versionBuild || '';
    if (cfgSupportedGameVersion) cfgSupportedGameVersion.value = currentModData.supportedGameVersion || '';
    if (cfgAndroidReq) cfgAndroidReq.value = currentModData.androidReq || '';
    if (cfgUpdatedDate) cfgUpdatedDate.value = currentModData.updatedDate || '';
    if (cfgReleaseStatus) cfgReleaseStatus.value = currentModData.releaseStatus || '';

    renderChangelogEditor();

    // Tab 4: Brand & Social
    const cfgBrandName = document.getElementById('cfgBrandName');
    const cfgBrandKicker = document.getElementById('cfgBrandKicker');
    const cfgModTitle = document.getElementById('cfgModTitle');
    const cfgGameName = document.getElementById('cfgGameName');
    const cfgSubtitle = document.getElementById('cfgSubtitle');
    const cfgTelegramUrl = document.getElementById('cfgTelegramUrl');
    const cfgDiscordUrl = document.getElementById('cfgDiscordUrl');
    const cfgZaloUrl = document.getElementById('cfgZaloUrl');

    if (cfgBrandName) cfgBrandName.value = currentModData.brandName || '';
    if (cfgBrandKicker) cfgBrandKicker.value = currentModData.brandKicker || '';
    if (cfgModTitle) cfgModTitle.value = currentModData.modTitle || '';
    if (cfgGameName) cfgGameName.value = currentModData.gameName || '';
    if (cfgSubtitle) cfgSubtitle.value = currentModData.subtitle || '';

    if (currentModData.community) {
      if (cfgTelegramUrl) cfgTelegramUrl.value = currentModData.community.telegramUrl || '';
      if (cfgDiscordUrl) cfgDiscordUrl.value = currentModData.community.discordUrl || '';
      if (cfgZaloUrl) cfgZaloUrl.value = currentModData.community.zaloUrl || '';
    }

    // Tab 5: Admin settings
    const cfgAdminUsername = document.getElementById('cfgAdminUsername');
    if (cfgAdminUsername) {
      const creds = getAdminCreds();
      cfgAdminUsername.value = creds.username;
    }
  }

  // ========================================================
  // 5. RENDER 7 FEATURES EDITOR (TỪNG MỤC RIÊNG BIỆT)
  // ========================================================
  function renderFeaturesEditor() {
    const container = document.getElementById('featuresEditContainer');
    if (!container || !currentModData.featureModules) return;

    let allSubfeatures = [];
    currentModData.featureModules.forEach(mod => {
      if (mod.subfeatures) {
        mod.subfeatures.forEach(sub => {
          allSubfeatures.push({
            moduleId: mod.id,
            moduleTitle: mod.title,
            ...sub
          });
        });
      }
    });

    container.innerHTML = allSubfeatures.map((feat, idx) => `
      <div class="feature-edit-card" data-feature-id="${feat.id}">
        <div class="feature-edit-card-header">
          <div>
            <h4 style="font-size: 1.1rem; font-weight: 800; color: #fff; margin:0; display:flex; align-items:center; gap:8px;">
              <span>${feat.name || `Tính Năng #${idx + 1}`}</span>
            </h4>
            <span style="font-size: 0.78rem; color: var(--text-muted);">${feat.moduleTitle || ''}</span>
          </div>
          <span class="feature-edit-badge">${feat.badge || 'VIP'}</span>
        </div>

        <div class="feature-edit-layout">
          <!-- Left: Thumbnail Preview & Live actions -->
          <div class="feature-thumb-preview-wrap">
            <label class="form-label">Xem Trước Ảnh</label>
            <div class="feature-thumb-preview-box">
              <img src="${feat.image}" alt="${feat.name}" class="feature-thumb-preview-img" id="featThumb_${feat.id}" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
              <div class="feature-thumb-fallback">
                <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                <span>Link ảnh lỗi hoặc không tải được</span>
              </div>
            </div>
            <div class="feature-thumb-actions">
              <button type="button" class="btn-thumb-action btn-refresh-thumb" data-id="${feat.id}">Thử Lại</button>
              <a href="${feat.image}" target="_blank" rel="noopener noreferrer" class="btn-thumb-action" id="featOpenLink_${feat.id}">Mở Ảnh ↗</a>
            </div>
          </div>

          <!-- Right: Inputs -->
          <div style="display: flex; flex-direction: column; gap: 14px;">
            <div class="form-group">
              <label class="form-label" for="featImg_${feat.id}">
                <span>Direct Link Ảnh Chụp Màn Hình (URL)</span>
                <span class="required">* Bắt buộc</span>
              </label>
              <input type="url" class="form-input feat-input-img" id="featImg_${feat.id}" data-id="${feat.id}" value="${feat.image || ''}" placeholder="https://domain.com/screenshot.jpg" required>
              <span class="form-hint">Dán link ảnh độ phân giải cao mô tả tính năng này.</span>
            </div>

            <div class="form-grid">
              <div class="form-group">
                <label class="form-label" for="featTitle_${feat.id}">Tiêu Đề Chi Tiết</label>
                <input type="text" class="form-input feat-input-title" id="featTitle_${feat.id}" data-id="${feat.id}" value="${feat.title || ''}" placeholder="Nhập tiêu đề...">
              </div>

              <div class="form-group">
                <label class="form-label" for="featBadge_${feat.id}">Huy Hiệu (Badge)</label>
                <input type="text" class="form-input feat-input-badge" id="featBadge_${feat.id}" data-id="${feat.id}" value="${feat.badge || ''}" placeholder="Ví dụ: VIP, Cốt Lõi, Khả Dụng...">
              </div>
            </div>

            <div class="form-group">
              <label class="form-label" for="featDesc_${feat.id}">Lời Mô Tả Tính Năng</label>
              <textarea class="form-textarea feat-input-desc" id="featDesc_${feat.id}" data-id="${feat.id}" rows="2" placeholder="Mô tả cơ chế hoạt động của tính năng...">${feat.desc || ''}</textarea>
            </div>

            <div class="form-group">
              <label class="form-label" for="featHighlight_${feat.id}">Điểm Nổi Bật (Highlight Text)</label>
              <input type="text" class="form-input feat-input-highlight" id="featHighlight_${feat.id}" data-id="${feat.id}" value="${feat.highlight || ''}" placeholder="Câu chốt nổi bật...">
            </div>
          </div>
        </div>
      </div>
    `).join('');

    // Attach Live Image Preview listeners
    container.querySelectorAll('.feat-input-img').forEach(input => {
      const featId = input.getAttribute('data-id');
      const thumb = document.getElementById(`featThumb_${featId}`);
      const openLink = document.getElementById(`featOpenLink_${featId}`);

      input.addEventListener('input', () => {
        const url = input.value.trim();
        if (thumb) {
          thumb.style.display = 'block';
          if (thumb.nextElementSibling) thumb.nextElementSibling.style.display = 'none';
          thumb.src = url;
        }
        if (openLink) openLink.href = url || '#';
      });
    });

    container.querySelectorAll('.btn-refresh-thumb').forEach(btn => {
      const featId = btn.getAttribute('data-id');
      const input = document.getElementById(`featImg_${featId}`);
      const thumb = document.getElementById(`featThumb_${featId}`);
      btn.addEventListener('click', () => {
        if (input && thumb) {
          thumb.style.display = 'block';
          if (thumb.nextElementSibling) thumb.nextElementSibling.style.display = 'none';
          thumb.src = input.value.trim() + '?t=' + Date.now();
        }
      });
    });
  }

  // ========================================================
  // 6. RENDER CHANGELOG EDITOR
  // ========================================================
  function renderChangelogEditor() {
    const list = document.getElementById('changelogEditList');
    if (!list) return;

    const changelog = currentModData.changelog || [];
    list.innerHTML = changelog.map((item, idx) => `
      <div class="changelog-edit-row">
        <input type="text" class="form-input changelog-row-input" value="${item.replace(/"/g, '&quot;')}" placeholder="Nội dung cập nhật mới...">
        <button type="button" class="btn-remove-row btn-remove-changelog" title="Xóa dòng này">
          <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
          </svg>
        </button>
      </div>
    `).join('');

    list.querySelectorAll('.btn-remove-changelog').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const row = e.target.closest('.changelog-edit-row');
        if (row) row.remove();
      });
    });
  }

  const btnAddChangelogItem = document.getElementById('btnAddChangelogItem');
  if (btnAddChangelogItem) {
    btnAddChangelogItem.addEventListener('click', () => {
      const list = document.getElementById('changelogEditList');
      if (!list) return;

      const newRow = document.createElement('div');
      newRow.className = 'changelog-edit-row';
      newRow.innerHTML = `
        <input type="text" class="form-input changelog-row-input" value="" placeholder="Nhập điểm mới của bản cập nhật...">
        <button type="button" class="btn-remove-row btn-remove-changelog" title="Xóa dòng này">
          <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
          </svg>
        </button>
      `;

      newRow.querySelector('.btn-remove-changelog').addEventListener('click', () => newRow.remove());
      list.appendChild(newRow);
      newRow.querySelector('input').focus();
    });
  }

  // ========================================================
  // 7. SAVE MASTER CONFIGURATION
  // ========================================================
  function saveAllConfig() {
    // 1. Hero & Video
    const cfgHeroBgImage = document.getElementById('cfgHeroBgImage');
    if (cfgHeroBgImage && cfgHeroBgImage.value.trim()) {
      currentModData.heroBackgroundImage = cfgHeroBgImage.value.trim();
    }

    const cfgVideoUrl = document.getElementById('cfgVideoUrl');
    if (cfgVideoUrl && cfgVideoUrl.value.trim()) {
      currentModData.videoUrl = cfgVideoUrl.value.trim();
    }

    const cfgVideoPoster = document.getElementById('cfgVideoPoster');
    if (cfgVideoPoster) currentModData.videoPoster = cfgVideoPoster.value.trim();

    const cfgVideoDuration = document.getElementById('cfgVideoDuration');
    if (cfgVideoDuration) currentModData.videoDuration = cfgVideoDuration.value.trim();

    const cfgVideoDescription = document.getElementById('cfgVideoDescription');
    if (cfgVideoDescription) currentModData.videoDescription = cfgVideoDescription.value.trim();

    // 2. 7 Feature Cards (Từng mục riêng)
    if (currentModData.featureModules) {
      currentModData.featureModules.forEach(mod => {
        if (mod.subfeatures) {
          mod.subfeatures.forEach(sub => {
            const imgInput = document.getElementById(`featImg_${sub.id}`);
            const titleInput = document.getElementById(`featTitle_${sub.id}`);
            const badgeInput = document.getElementById(`featBadge_${sub.id}`);
            const descInput = document.getElementById(`featDesc_${sub.id}`);
            const highlightInput = document.getElementById(`featHighlight_${sub.id}`);

            if (imgInput && imgInput.value.trim()) sub.image = imgInput.value.trim();
            if (titleInput && titleInput.value.trim()) sub.title = titleInput.value.trim();
            if (badgeInput && badgeInput.value.trim()) sub.badge = badgeInput.value.trim();
            if (descInput && descInput.value.trim()) sub.desc = descInput.value.trim();
            if (highlightInput && highlightInput.value.trim()) sub.highlight = highlightInput.value.trim();
          });
        }
      });
    }

    // 3. Download & Release
    const cfgDownloadUrl = document.getElementById('cfgDownloadUrl');
    if (cfgDownloadUrl && cfgDownloadUrl.value.trim()) currentModData.downloadUrl = cfgDownloadUrl.value.trim();

    const cfgMirrorUrl = document.getElementById('cfgMirrorUrl');
    if (cfgMirrorUrl) currentModData.mirrorDownloadUrl = cfgMirrorUrl.value.trim();

    const cfgVersion = document.getElementById('cfgVersion');
    if (cfgVersion && cfgVersion.value.trim()) currentModData.version = cfgVersion.value.trim();

    const cfgFileSize = document.getElementById('cfgFileSize');
    if (cfgFileSize && cfgFileSize.value.trim()) currentModData.fileSize = cfgFileSize.value.trim();

    const cfgFileName = document.getElementById('cfgFileName');
    if (cfgFileName && cfgFileName.value.trim()) currentModData.fileName = cfgFileName.value.trim();

    const cfgVersionBuild = document.getElementById('cfgVersionBuild');
    if (cfgVersionBuild && cfgVersionBuild.value.trim()) currentModData.versionBuild = cfgVersionBuild.value.trim();

    const cfgSupportedGameVersion = document.getElementById('cfgSupportedGameVersion');
    if (cfgSupportedGameVersion) currentModData.supportedGameVersion = cfgSupportedGameVersion.value.trim();

    const cfgAndroidReq = document.getElementById('cfgAndroidReq');
    if (cfgAndroidReq) currentModData.androidReq = cfgAndroidReq.value.trim();

    const cfgUpdatedDate = document.getElementById('cfgUpdatedDate');
    if (cfgUpdatedDate) currentModData.updatedDate = cfgUpdatedDate.value.trim();

    const cfgReleaseStatus = document.getElementById('cfgReleaseStatus');
    if (cfgReleaseStatus) currentModData.releaseStatus = cfgReleaseStatus.value.trim();

    // Changelog
    const changelogInputs = document.querySelectorAll('.changelog-row-input');
    const newChangelog = [];
    changelogInputs.forEach(inp => {
      const val = inp.value.trim();
      if (val) newChangelog.push(val);
    });
    if (newChangelog.length > 0) {
      currentModData.changelog = newChangelog;
    }

    // 4. Brand & Social
    const cfgBrandName = document.getElementById('cfgBrandName');
    if (cfgBrandName && cfgBrandName.value.trim()) currentModData.brandName = cfgBrandName.value.trim();

    const cfgBrandKicker = document.getElementById('cfgBrandKicker');
    if (cfgBrandKicker && cfgBrandKicker.value.trim()) currentModData.brandKicker = cfgBrandKicker.value.trim();

    const cfgModTitle = document.getElementById('cfgModTitle');
    if (cfgModTitle && cfgModTitle.value.trim()) currentModData.modTitle = cfgModTitle.value.trim();

    const cfgGameName = document.getElementById('cfgGameName');
    if (cfgGameName && cfgGameName.value.trim()) currentModData.gameName = cfgGameName.value.trim();

    const cfgSubtitle = document.getElementById('cfgSubtitle');
    if (cfgSubtitle && cfgSubtitle.value.trim()) currentModData.subtitle = cfgSubtitle.value.trim();

    if (!currentModData.community) currentModData.community = {};
    const cfgTelegramUrl = document.getElementById('cfgTelegramUrl');
    const cfgDiscordUrl = document.getElementById('cfgDiscordUrl');
    const cfgZaloUrl = document.getElementById('cfgZaloUrl');

    if (cfgTelegramUrl) currentModData.community.telegramUrl = cfgTelegramUrl.value.trim();
    if (cfgDiscordUrl) currentModData.community.discordUrl = cfgDiscordUrl.value.trim();
    if (cfgZaloUrl) currentModData.community.zaloUrl = cfgZaloUrl.value.trim();

    // Save to LocalStorage
    saveSingleModData(currentModData);
    showToast('Đã lưu toàn bộ cấu hình mới thành công! Trang chủ đã được cập nhật.', 'success');
  }

  const btnSaveMaster = document.getElementById('btnSaveMaster');
  if (btnSaveMaster) {
    btnSaveMaster.addEventListener('click', saveAllConfig);
  }

  const btnDiscardChanges = document.getElementById('btnDiscardChanges');
  if (btnDiscardChanges) {
    btnDiscardChanges.addEventListener('click', () => {
      if (confirm('Khôi phục lại dữ liệu đã lưu gần nhất?')) {
        loadDataIntoDashboard();
        showToast('Đã hoàn tác các thay đổi chưa lưu!', 'info');
      }
    });
  }

  // ========================================================
  // 8. CHANGE PASSWORD FORM
  // ========================================================
  const formChangePassword = document.getElementById('formChangePassword');
  if (formChangePassword) {
    formChangePassword.addEventListener('submit', (e) => {
      e.preventDefault();
      const cfgAdminUsername = document.getElementById('cfgAdminUsername');
      const cfgCurrentPassword = document.getElementById('cfgCurrentPassword');
      const cfgNewPassword = document.getElementById('cfgNewPassword');
      const cfgConfirmPassword = document.getElementById('cfgConfirmPassword');

      const currentCreds = getAdminCreds();

      if (cfgCurrentPassword.value.trim() !== currentCreds.password) {
        alert('Mật khẩu hiện tại không đúng!');
        cfgCurrentPassword.focus();
        return;
      }

      if (cfgNewPassword.value.trim().length < 6) {
        alert('Mật khẩu mới phải có tối thiểu 6 ký tự!');
        cfgNewPassword.focus();
        return;
      }

      if (cfgNewPassword.value.trim() !== cfgConfirmPassword.value.trim()) {
        alert('Mật khẩu mới và xác nhận mật khẩu không khớp!');
        cfgConfirmPassword.focus();
        return;
      }

      const newCreds = {
        username: cfgAdminUsername.value.trim() || currentCreds.username,
        password: cfgNewPassword.value.trim()
      };

      saveAdminCreds(newCreds);
      setSession(newCreds.username, true);

      cfgCurrentPassword.value = '';
      cfgNewPassword.value = '';
      cfgConfirmPassword.value = '';

      if (adminSessionUserDisplay) {
        adminSessionUserDisplay.textContent = `Admin: ${newCreds.username} · Đã Xác Thực`;
      }

      showToast('Đã cập nhật tài khoản & mật khẩu admin mới thành công!', 'success');
    });
  }

  // ========================================================
  // 9. EXPORT & IMPORT BACKUP JSON
  // ========================================================
  const btnExportJson = document.getElementById('btnExportJson');
  if (btnExportJson) {
    btnExportJson.addEventListener('click', () => {
      const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(currentModData, null, 2));
      const downloadAnchor = document.createElement('a');
      downloadAnchor.setAttribute('href', dataStr);
      downloadAnchor.setAttribute('download', `tan-cutos-mod-backup-${new Date().toISOString().slice(0, 10)}.json`);
      document.body.appendChild(downloadAnchor);
      downloadAnchor.click();
      downloadAnchor.remove();
      showToast('Đã xuất file JSON backup thành công!', 'success');
    });
  }

  const btnTriggerImport = document.getElementById('btnTriggerImport');
  const fileImportJson = document.getElementById('fileImportJson');
  if (btnTriggerImport && fileImportJson) {
    btnTriggerImport.addEventListener('click', () => fileImportJson.click());

    fileImportJson.addEventListener('change', (e) => {
      const file = e.target.files[0];
      if (!file) return;

      const reader = new FileReader();
      reader.onload = (event) => {
        try {
          const imported = JSON.parse(event.target.result);
          if (imported && (imported.modTitle || imported.featureModules)) {
            currentModData = { ...DEFAULT_SINGLE_MOD, ...imported };
            saveSingleModData(currentModData);
            loadDataIntoDashboard();
            showToast('Đã nạp và áp dụng file cấu hình JSON thành công!', 'success');
          } else {
            alert('File JSON không hợp lệ hoặc thiếu dữ liệu bản mod.');
          }
        } catch (err) {
          alert('Lỗi đọc file JSON: ' + err.message);
        }
      };
      reader.readAsText(file);
      fileImportJson.value = '';
    });
  }

  const btnResetToFactory = document.getElementById('btnResetToFactory');
  if (btnResetToFactory) {
    btnResetToFactory.addEventListener('click', () => {
      if (confirm('CẢNH BÁO: Thao tác này sẽ xóa mọi chỉnh sửa và khôi phục toàn bộ ảnh và video về mặc định của Tấn Cutos VIP. Bạn có chắc chắn không?')) {
        currentModData = resetSingleModData();
        loadDataIntoDashboard();
        showToast('Đã khôi phục toàn bộ cấu hình gốc ban đầu!', 'info');
      }
    });
  }

  // Khởi chạy kiểm tra đăng nhập
  checkAuth();
});
