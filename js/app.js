/**
 * APEX MODS - Main Application Controller
 * Quản lý tìm kiếm, bộ lọc, hiển thị danh sách mod, tải về và thêm mod mới
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. State
  let modsList = getStoredMods();
  let favoritesList = getStoredFavorites();
  let currentCategory = 'all';
  let searchQuery = '';
  let currentSort = 'popular';
  let activeMod = null;

  // 2. Instances
  const gallery = new ModGallery();

  // 3. DOM Elements
  const modsGrid = document.getElementById('modsGrid');
  const searchInput = document.getElementById('searchInput');
  const clearSearchBtn = document.getElementById('clearSearchBtn');
  const sortSelect = document.getElementById('sortSelect');
  const categoryChips = document.querySelectorAll('.category-chip');
  const resultsCount = document.getElementById('resultsCount');
  const navFavoritesBtn = document.getElementById('navFavoritesBtn');
  const navAddModBtn = document.getElementById('navAddModBtn');
  const siteHeader = document.querySelector('.site-header');

  // Mod Detail Modal Elements
  const modDetailModal = document.getElementById('modDetailModal');
  const modalCloseBtn = document.getElementById('modalCloseBtn');
  const modalAppIcon = document.getElementById('modalAppIcon');
  const modalTitle = document.getElementById('modalTitle');
  const modalDeveloper = document.getElementById('modalDeveloper');
  const modalVersion = document.getElementById('modalVersion');
  const modalRating = document.getElementById('modalRating');
  const modalDownloads = document.getElementById('modalDownloads');
  const modalDescription = document.getElementById('modalDescription');
  const modalFeaturesList = document.getElementById('modalFeaturesList');
  const modalSpecsTable = document.getElementById('modalSpecsTable');
  const modalInstallGuide = document.getElementById('modalInstallGuide');
  const btnDownloadApk = document.getElementById('btnDownloadApk');
  const btnDownloadMirror = document.getElementById('btnDownloadMirror');
  const btnDownloadObb = document.getElementById('btnDownloadObb');

  // Add Mod Modal Elements
  const addModModal = document.getElementById('addModModal');
  const addModForm = document.getElementById('addModForm');
  const addModCloseBtn = document.getElementById('addModCloseBtn');
  const cancelAddModBtn = document.getElementById('cancelAddModBtn');
  const screenshotInputsArea = document.getElementById('modScreenshotsInput');
  const adminThumbsPreview = document.getElementById('adminThumbsPreview');
  const btnExportJson = document.getElementById('btnExportJson');
  const btnResetData = document.getElementById('btnResetData');

  // 4. Header Scroll Effect
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      siteHeader.classList.add('scrolled');
    } else {
      siteHeader.classList.remove('scrolled');
    }
  });

  // 5. Toast Notification System
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
    setTimeout(() => toast.classList.add('show'), 50);

    setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => toast.remove(), 400);
    }, 3500);
  }

  // 6. Render Filtered & Sorted Mods
  function renderMods() {
    let filtered = modsList.filter(mod => {
      // Filter by Category
      if (currentCategory === 'favorites') {
        if (!favoritesList.includes(mod.id)) return false;
      } else if (currentCategory !== 'all' && mod.category !== currentCategory) {
        return false;
      }

      // Filter by Search
      if (searchQuery.trim() !== '') {
        const query = searchQuery.toLowerCase().trim();
        const matchTitle = mod.title.toLowerCase().includes(query);
        const matchDev = mod.developer.toLowerCase().includes(query);
        const matchCategory = mod.categoryLabel.toLowerCase().includes(query);
        const matchFeatures = mod.features && mod.features.some(f => f.toLowerCase().includes(query));
        if (!matchTitle && !matchDev && !matchCategory && !matchFeatures) {
          return false;
        }
      }

      return true;
    });

    // Sorting
    filtered.sort((a, b) => {
      if (currentSort === 'popular') {
        return b.rating - a.rating;
      } else if (currentSort === 'latest') {
        return (b.isUpdated ? 1 : 0) - (a.isUpdated ? 1 : 0);
      } else if (currentSort === 'downloads') {
        const parseDls = str => parseFloat(str) * (str.includes('M') ? 1000000 : (str.includes('K') ? 1000 : 1));
        return parseDls(b.downloads) - parseDls(a.downloads);
      } else if (currentSort === 'name') {
        return a.title.localeCompare(b.title);
      }
      return 0;
    });

    // Update count display
    if (resultsCount) {
      resultsCount.textContent = `Hiển thị ${filtered.length} bản mod`;
    }

    // Render Grid
    if (filtered.length === 0) {
      modsGrid.innerHTML = `
        <div class="empty-state">
          <svg class="empty-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <h3 class="empty-title">Không tìm thấy bản mod nào phù hợp</h3>
          <p class="empty-desc">Thử thay đổi từ khóa tìm kiếm hoặc chọn danh mục khác.</p>
          <button class="reset-filter-btn" id="btnResetFilters">Xem tất cả bản Mod</button>
        </div>
      `;

      const resetBtn = document.getElementById('btnResetFilters');
      if (resetBtn) {
        resetBtn.addEventListener('click', () => {
          searchInput.value = '';
          searchQuery = '';
          clearSearchBtn.style.display = 'none';
          setActiveCategory('all');
        });
      }
      return;
    }

    modsGrid.innerHTML = filtered.map(mod => {
      const isFav = favoritesList.includes(mod.id);
      
      // Lấy danh sách các tính năng kèm ảnh chụp mô tả
      const showcaseItems = (mod.featuresShowcase && mod.featuresShowcase.length > 0)
        ? mod.featuresShowcase
        : (mod.screenshots || [mod.coverImage]).map((url, i) => ({
            image: url,
            title: `Tính Năng #${i + 1}`,
            description: "Ảnh chụp mô tả tính năng"
          }));
      const firstFeat = showcaseItems[0] || { title: "Tính năng bản mod", image: mod.coverImage };

      return `
        <article class="mod-card" data-id="${mod.id}">
          <!-- Cột bên trái: Ảnh chụp tính năng direct link + Dải ảnh chụp mô tả -->
          <div class="card-media-col">
            <div class="card-media" data-open-id="${mod.id}">
              <img class="card-main-image" 
                src="${firstFeat.image}" 
                alt="${mod.title}" 
                loading="lazy"
                onerror="this.src='https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=800&q=80'"
              />
              <div class="card-media-overlay"></div>

              <div class="card-badges">
                ${mod.isVip ? '<span class="badge badge-vip">VIP MOD</span>' : ''}
                ${mod.isUpdated ? '<span class="badge badge-update">UPDATE</span>' : ''}
                <span class="badge badge-category">${mod.categoryLabel}</span>
              </div>

              <div class="card-screenshots-count">
                <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span>${showcaseItems.length} Ảnh tính năng</span>
              </div>

              <!-- Thanh hiển thị tên tính năng của ảnh đang xem -->
              <div class="card-feature-preview-bar">
                <span class="preview-feat-icon">🎯</span>
                <span class="preview-feat-text">${firstFeat.title}</span>
              </div>
            </div>

            <!-- Dải thu nhỏ nhiều ảnh chụp direct link -->
            <div class="card-screenshots-strip">
              ${showcaseItems.map((item, i) => `
                <div class="mini-thumb-wrapper ${i === 0 ? 'active' : ''}" 
                  data-card-img="${item.image}"
                  data-feat-title="${item.title}"
                  title="${item.title}: ${item.description}">
                  <img class="mini-thumb" 
                    src="${item.image}" 
                    alt="${item.title}" 
                    loading="lazy"
                    onerror="this.style.display='none'"
                  />
                  <span class="mini-thumb-num">${i + 1}</span>
                </div>
              `).join('')}
            </div>
          </div>

          <!-- Cột bên phải: Tiêu đề, Mô tả, Tính năng Mod và Nút tải về -->
          <div class="card-body">
            <div class="card-header-row">
              <div class="card-title-group">
                <div class="card-title-line">
                  <h3 class="card-title" data-open-id="${mod.id}">${mod.title}</h3>
                  <span class="card-version-pill">${mod.version}</span>
                </div>
                <div class="card-dev-meta">
                  <span class="dev-name">${mod.developer}</span>
                  <span class="meta-dot">•</span>
                  <span class="category-name">${mod.categoryLabel}</span>
                  <span class="meta-dot">•</span>
                  <span class="card-rating-badge">
                    <svg width="14" height="14" fill="currentColor" viewBox="0 0 20 20" style="color: var(--gold-light)">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    ${mod.rating}
                  </span>
                  <span class="meta-dot">•</span>
                  <span class="card-dls-text">${mod.downloads} lượt tải</span>
                </div>
              </div>

              <button class="card-fav-btn ${isFav ? 'active' : ''}" data-fav-id="${mod.id}" title="${isFav ? 'Bỏ lưu' : 'Lưu vào yêu thích'}">
                <svg width="18" height="18" fill="${isFav ? 'currentColor' : 'none'}" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </button>
            </div>

            <p class="card-desc">${mod.description}</p>

            <div class="card-mod-features">
              ${(mod.features || []).slice(0, 4).map(f => `
                <span class="mod-feature-pill">
                  <svg viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                  </svg>
                  ${f}
                </span>
              `).join('')}
            </div>

            <div class="card-bottom-row">
              <div class="card-specs-bar">
                <div class="spec-cell" title="Yêu cầu Android">
                  <svg width="15" height="15" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                  <span>${mod.androidReq}</span>
                </div>
                <div class="spec-cell" title="Dung lượng tải">
                  <svg width="15" height="15" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  <span>${mod.size}</span>
                </div>
                <div class="spec-cell spec-cell-noroot" title="Không cần Root">
                  <span class="safe-badge-pill">No Root</span>
                </div>
              </div>

              <div class="card-action-buttons">
                <button class="btn-card-detail" data-open-id="${mod.id}">
                  <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                  Xem Chi Tiết & Ảnh
                </button>
                <a href="${mod.downloadUrl}" target="_blank" rel="noopener noreferrer" class="btn-card-download" title="Tải trực tiếp file APK">
                  <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  <span>Tải Về APK</span>
                </a>
            </div>
          </div>
        </article>
      `;
    }).join('');

    // Attach card event listeners
    attachCardEvents();
  }

  function attachCardEvents() {
    // Chuyển ảnh và cập nhật tên tính năng khi rê chuột / chạm vào mini thumbnail
    document.querySelectorAll('.card-screenshots-strip').forEach(strip => {
      const card = strip.closest('.mod-card');
      const mainImg = card.querySelector('.card-main-image');
      const featPreviewText = card.querySelector('.preview-feat-text');
      const miniThumbs = strip.querySelectorAll('.mini-thumb-wrapper');

      miniThumbs.forEach(thumb => {
        const updateThumb = () => {
          const imgUrl = thumb.getAttribute('data-card-img');
          const title = thumb.getAttribute('data-feat-title');
          if (imgUrl) mainImg.src = imgUrl;
          if (featPreviewText && title) featPreviewText.textContent = title;
          miniThumbs.forEach(t => t.classList.remove('active'));
          thumb.classList.add('active');
        };

        thumb.addEventListener('mouseenter', updateThumb);
        thumb.addEventListener('click', (e) => {
          e.stopPropagation();
          updateThumb();
        });
      });
    });

    // Mở modal xem chi tiết
    document.querySelectorAll('[data-open-id]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const id = btn.getAttribute('data-open-id');
        openModDetail(id);
      });
    });

    // Nút lưu / bỏ lưu yêu thích
    document.querySelectorAll('[data-fav-id]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const id = btn.getAttribute('data-fav-id');
        toggleFavorite(id);
      });
    });
  }

  // 7. Cửa sổ Chi Tiết Bản Mod (Tải tính năng kèm ảnh chụp thực tế)
  function openModDetail(modId) {
    const mod = modsList.find(m => m.id === modId);
    if (!mod) return;
    activeMod = mod;

    // Thông tin Header
    modalAppIcon.src = mod.coverImage;
    modalTitle.textContent = mod.title;
    modalDeveloper.textContent = mod.developer;
    modalVersion.textContent = mod.version;
    modalRating.textContent = `${mod.rating} / 5.0`;
    modalDownloads.textContent = `${mod.downloads} lượt tải`;

    // Nạp danh sách các tính năng mod kèm ảnh chụp thực tế vào Gallery
    gallery.loadGallery(mod.featuresShowcase || mod.screenshots, mod.coverImage);

    // Mô tả tổng quan
    modalDescription.textContent = mod.description;

    // Mod Features checklist
    if (modalFeaturesList) {
      modalFeaturesList.innerHTML = (mod.features || []).map(f => `
        <div class="feature-check-item">
          <svg width="18" height="18" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
          </svg>
          <span><strong>${f}</strong></span>
        </div>
      `).join('');
    }

    // Technical Specs
    if (modalSpecsTable) {
      modalSpecsTable.innerHTML = `
        <div class="specs-row">
          <span class="spec-key">Phiên bản Mod</span>
          <span class="spec-val">${mod.version}</span>
        </div>
        <div class="specs-row">
          <span class="spec-key">Yêu cầu Android</span>
          <span class="spec-val">${mod.androidReq}</span>
        </div>
        <div class="specs-row">
          <span class="spec-key">Dung lượng tải</span>
          <span class="spec-val">${mod.size}</span>
        </div>
        <div class="specs-row">
          <span class="spec-key">Yêu cầu Root</span>
          <span class="spec-val" style="color: var(--accent-emerald);">KHÔNG (No Root)</span>
        </div>
        <div class="specs-row">
          <span class="spec-key">Gói dữ liệu OBB</span>
          <span class="spec-val">${mod.hasObb ? 'Có đính kèm' : 'Không cần OBB'}</span>
        </div>
        <div class="specs-row">
          <span class="spec-key">Bảo mật VirusTotal</span>
          <span class="spec-val" style="color: var(--accent-emerald);">Sạch 100% Verified</span>
        </div>
      `;
    }

    // Install Guide
    if (modalInstallGuide) {
      modalInstallGuide.textContent = mod.installGuide || "1. Tải về file APK và cài đặt bình thường.\n2. Cấp quyền truy cập nếu cần.\n3. Khởi động game và tận hưởng tính năng Mod.";
    }

    // Download Buttons
    btnDownloadApk.href = mod.downloadUrl || '#';
    btnDownloadApk.onclick = () => {
      showToast(`Đang kết nối link tải trực tiếp: ${mod.title}`, 'info');
    };

    if (mod.mirrorUrl) {
      btnDownloadMirror.style.display = 'inline-flex';
      btnDownloadMirror.href = mod.mirrorUrl;
    } else {
      btnDownloadMirror.style.display = 'none';
    }

    if (mod.hasObb && mod.obbUrl) {
      btnDownloadObb.style.display = 'inline-flex';
      btnDownloadObb.href = mod.obbUrl;
    } else {
      btnDownloadObb.style.display = 'none';
    }

    // Open Modal
    modDetailModal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeModDetail() {
    modDetailModal.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', closeModDetail);
  }

  if (modDetailModal) {
    modDetailModal.addEventListener('click', (e) => {
      if (e.target === modDetailModal) closeModDetail();
    });
  }

  // 8. Favorites Toggle
  function toggleFavorite(id) {
    const idx = favoritesList.indexOf(id);
    if (idx > -1) {
      favoritesList.splice(idx, 1);
      showToast('Đã xóa khỏi danh sách yêu thích', 'info');
    } else {
      favoritesList.push(id);
      showToast('Đã thêm vào danh sách yêu thích!', 'success');
    }
    saveStoredFavorites(favoritesList);
    renderMods();
  }

  // 9. Categories and Filters
  function setActiveCategory(cat) {
    currentCategory = cat;
    categoryChips.forEach(chip => {
      chip.classList.toggle('active', chip.getAttribute('data-category') === cat);
    });
    renderMods();
  }

  categoryChips.forEach(chip => {
    chip.addEventListener('click', () => {
      const cat = chip.getAttribute('data-category');
      setActiveCategory(cat);
    });
  });

  if (navFavoritesBtn) {
    navFavoritesBtn.addEventListener('click', (e) => {
      e.preventDefault();
      setActiveCategory('favorites');
      window.scrollTo({ top: document.getElementById('modsSection').offsetTop - 100, behavior: 'smooth' });
    });
  }

  // Search input debounce
  let searchTimeout = null;
  searchInput.addEventListener('input', (e) => {
    clearTimeout(searchTimeout);
    searchQuery = e.target.value;
    clearSearchBtn.style.display = searchQuery ? 'block' : 'none';
    searchTimeout = setTimeout(() => {
      renderMods();
    }, 200);
  });

  clearSearchBtn.addEventListener('click', () => {
    searchInput.value = '';
    searchQuery = '';
    clearSearchBtn.style.display = 'none';
    renderMods();
    searchInput.focus();
  });

  // Sort select
  sortSelect.addEventListener('change', (e) => {
    currentSort = e.target.value;
    renderMods();
  });

  // 10. Add Mod Modal & Admin Logic
  function openAddModModal() {
    addModModal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeAddModModal() {
    addModModal.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (navAddModBtn) {
    navAddModBtn.addEventListener('click', (e) => {
      e.preventDefault();
      openAddModModal();
    });
  }

  if (addModCloseBtn) addModCloseBtn.addEventListener('click', closeAddModModal);
  if (cancelAddModBtn) cancelAddModBtn.addEventListener('click', closeAddModModal);

  if (addModModal) {
    addModModal.addEventListener('click', (e) => {
      if (e.target === addModModal) closeAddModModal();
    });
  }

  // Real-time preview of screenshot URLs in Add Mod Form
  if (screenshotInputsArea && adminThumbsPreview) {
    screenshotInputsArea.addEventListener('input', () => {
      const lines = screenshotInputsArea.value
        .split(/[\n,]+/)
        .map(u => u.trim())
        .filter(u => u.startsWith('http'));

      adminThumbsPreview.innerHTML = lines.map(url => `
        <div class="admin-thumb-box">
          <img src="${url}" alt="preview" onerror="this.parentElement.style.display='none'" />
        </div>
      `).join('');
    });
  }

  // Handle Add Mod Submission
  if (addModForm) {
    addModForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const title = document.getElementById('newModTitle').value.trim();
      const developer = document.getElementById('newModDev').value.trim() || 'Hoàng Tấn Mods';
      const category = document.getElementById('newModCategory').value;
      const version = document.getElementById('newModVersion').value.trim() || 'v1.0.0';
      const size = document.getElementById('newModSize').value.trim() || '500 MB';
      const androidReq = document.getElementById('newModAndroid').value.trim() || 'Android 8.0+';
      const coverImage = document.getElementById('newModCover').value.trim() || 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1000&q=80';
      const rawScreenshots = document.getElementById('modScreenshotsInput').value;
      const downloadUrl = document.getElementById('newModDownloadUrl').value.trim() || '#';
      const mirrorUrl = document.getElementById('newModMirrorUrl').value.trim() || '';
      const featuresRaw = document.getElementById('newModFeatures').value.trim();
      const description = document.getElementById('newModDesc').value.trim() || 'Bản mod game Android chất lượng cao, an toàn và tối ưu mượt mà.';

      // Phân tích danh sách ảnh chụp kèm tính năng
      // Hỗ trợ định dạng: Link_Ảnh | Tên Tính Năng | Lời Mô Tả Tính Năng
      let featuresShowcase = [];
      let screenshots = [];

      const lines = rawScreenshots
        .split('\n')
        .map(l => l.trim())
        .filter(l => l.length > 0);

      lines.forEach((line, idx) => {
        if (line.includes('|')) {
          const parts = line.split('|').map(p => p.trim());
          const imgUrl = parts[0];
          const fTitle = parts[1] || `Tính Năng Mod #${idx + 1}`;
          const fDesc = parts[2] || `Mô tả chi tiết về tính năng chụp trong ảnh.`;
          featuresShowcase.push({ image: imgUrl, title: fTitle, description: fDesc });
          screenshots.push(imgUrl);
        } else {
          featuresShowcase.push({
            image: line,
            title: `Tính Năng Mod #${idx + 1}`,
            description: `Ảnh chụp minh họa tính năng hoạt động thực tế trên bản mod Android.`
          });
          screenshots.push(line);
        }
      });

      if (screenshots.length === 0) {
        screenshots = [coverImage];
        featuresShowcase = [{
          image: coverImage,
          title: "Tổng quan bản mod",
          description: description
        }];
      }

      // Parse features list
      const features = featuresRaw 
        ? featuresRaw.split(/[\n,]+/).map(f => f.trim()).filter(f => f.length > 0)
        : ["Mod Menu VIP", "Vô hạn Tiền", "Anti-Ban 100%"];

      // Category label mapping
      const catMap = {
        'action': 'Hành Động',
        'rpg': 'Nhập Vai RPG',
        'racing': 'Đua Xe',
        'open-world': 'Thế Giới Mở',
        'strategy': 'Chiến Thuật',
        'simulation': 'Mô Phỏng'
      };

      const newMod = {
        id: 'mod-' + Date.now(),
        title,
        developer,
        category,
        categoryLabel: catMap[category] || 'Hành Động',
        version,
        androidReq,
        size,
        rating: 4.9,
        downloads: '10K+',
        isVip: true,
        isUpdated: true,
        isHot: true,
        coverImage,
        screenshots,
        featuresShowcase,
        description,
        features,
        downloadUrl,
        mirrorUrl,
        obbUrl: "",
        hasObb: false,
        installGuide: "1. Cài đặt file APK tải về.\n2. Cấp quyền truy cập nếu ứng dụng yêu cầu.\n3. Khởi động game và tận hưởng các tính năng mod."
      };

      // Add to state and save
      modsList.unshift(newMod);
      saveStoredMods(modsList);

      addModForm.reset();
      adminThumbsPreview.innerHTML = '';
      closeAddModModal();
      renderMods();

      showToast(`Đã thêm thành công bản mod: "${title}"!`, 'success');
      window.scrollTo({ top: document.getElementById('modsSection').offsetTop - 100, behavior: 'smooth' });
    });
  }

  // Export JSON helper
  if (btnExportJson) {
    btnExportJson.addEventListener('click', () => {
      const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(modsList, null, 2));
      const downloadAnchor = document.createElement('a');
      downloadAnchor.setAttribute("href", dataStr);
      downloadAnchor.setAttribute("download", "apex_mods_database.json");
      document.body.appendChild(downloadAnchor);
      downloadAnchor.click();
      downloadAnchor.remove();
      showToast('Đã tải xuống file apex_mods_database.json!', 'success');
    });
  }

  // Reset Data helper
  if (btnResetData) {
    btnResetData.addEventListener('click', () => {
      if (confirm('Bạn có chắc chắn muốn đặt lại dữ liệu về danh sách mặc định ban đầu không?')) {
        modsList = [...DEFAULT_MODS_DATA];
        saveStoredMods(modsList);
        renderMods();
        showToast('Đã đặt lại dữ liệu bản mod mặc định!', 'info');
      }
    });
  }

  // Keyboard shortcut: ESC to close modals
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeModDetail();
      closeAddModModal();
    }
  });

  // Initial render
  renderMods();
});
