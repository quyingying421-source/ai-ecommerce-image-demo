const products = [
  {
    id: "p001",
    name: "儿童T恤-详情-1",
    brand: "Carter Kids",
    code: "PRD-KD-23018",
    sku: "KD-T-0623",
    category: "童装 / T恤",
    status: "可创作",
    statusClass: "status-ready",
    materialCount: 12,
    updatedAt: "2026-07-03 16:48",
    image: "assets/product-cover-04.png",
    points: {
      core: "亲肤棉质面料，卡通印花清晰，适合儿童日常穿搭与详情页主视觉。",
      audience: "3-8 岁儿童、亲子服装买家、童装渠道商。",
      scene: "详情页首图、主图视频封面、夏季活动海报。",
      material: "精梳棉面料，柔软圆领，数码印花工艺。"
    },
    assets: ["主图 4", "细节图 5", "模特图 2", "场景图 1"],
    records: [
      { type: "最近生成图片", text: "童装户外草地场景主图", status: "已完成", time: "2026-07-03 16:42" },
      { type: "最近扩图任务", text: "1:1 转 3:4 商品居中扩图", status: "已完成", time: "2026-07-03 15:58" },
      { type: "最近复刻任务", text: "参考图复刻详情页氛围图", status: "生成中", time: "2026-07-03 15:21" }
    ]
  },
  {
    id: "p002",
    name: "蕾丝聚拢文胸 883",
    brand: "Lovera",
    code: "PRD-BRA-0883",
    sku: "3BCA24-883",
    category: "内衣 / 文胸",
    status: "可创作",
    statusClass: "status-ready",
    materialCount: 18,
    updatedAt: "2026-07-03 15:36",
    image: "assets/product-cover-03.png",
    points: {
      core: "蕾丝杯面与舒适承托兼具，适合生成模特图、海报图和方图素材。",
      audience: "女性内衣消费者、直播电商用户、品牌私域用户。",
      scene: "商品详情页、活动海报、尺码推荐图、社媒种草图。",
      material: "蕾丝面料、柔软杯里、无痕侧翼工艺。"
    },
    assets: ["主图 6", "细节图 7", "模特图 3", "场景图 2"],
    records: [
      { type: "最近生成图片", text: "9:16 模特精修图", status: "已完成", time: "2026-07-03 15:22" },
      { type: "最近扩图任务", text: "原图比例扩展至 4:5", status: "已完成", time: "2026-07-03 14:52" },
      { type: "最近复刻任务", text: "参考豆包图生成主视觉", status: "已完成", time: "2026-07-03 14:16" }
    ]
  },
  {
    id: "p003",
    name: "男士冰丝平角裤",
    brand: "YunFit",
    code: "PRD-MU-5068",
    sku: "MU-BOXER-2K",
    category: "内衣 / 男士内裤",
    status: "素材缺失",
    statusClass: "status-missing",
    materialCount: 3,
    updatedAt: "2026-07-03 14:24",
    image: "assets/product-cover-01.png",
    points: {
      core: "基础商品资料已建立，但缺少模特图与局部细节素材。",
      audience: "男士基础内衣消费者、运动通勤人群。",
      scene: "商品白底图、详情页卖点图、材质说明图。",
      material: "冰丝混纺，弹力腰头，透气裆部结构。"
    },
    assets: ["主图 1", "细节图 2", "模特图 0", "场景图 0"],
    records: [
      { type: "最近生成图片", text: "平铺商品图生成", status: "失败", time: "2026-07-03 14:17" },
      { type: "最近扩图任务", text: "暂无扩图任务", status: "待处理", time: "-" },
      { type: "最近复刻任务", text: "暂无复刻任务", status: "待处理", time: "-" }
    ]
  },
  {
    id: "p004",
    name: "四条装男士内裤组合",
    brand: "Softline",
    code: "PRD-MU-7091",
    sku: "BOXER-SET-04",
    category: "内衣 / 套装",
    status: "待完善",
    statusClass: "status-pending",
    materialCount: 7,
    updatedAt: "2026-07-03 13:50",
    image: "assets/product-cover-02.png",
    points: {
      core: "多色组合卖点明确，需补齐尺码、价格与更多详情图后进入稳定创作。",
      audience: "家庭装采购用户、日常换洗需求用户。",
      scene: "组合套装主图、详情页对比图、促销活动页。",
      material: "莫代尔混纺，亲肤腰边，多色组合。"
    },
    assets: ["主图 2", "细节图 4", "模特图 0", "场景图 1"],
    records: [
      { type: "最近生成图片", text: "组合平铺场景图", status: "已完成", time: "2026-07-03 13:36" },
      { type: "最近扩图任务", text: "1:1 扩展为 16:9", status: "生成中", time: "2026-07-03 13:12" },
      { type: "最近复刻任务", text: "暂无复刻任务", status: "待处理", time: "-" }
    ]
  },
  {
    id: "p005",
    name: "儿童亲子短袖套装",
    brand: "Carter Kids",
    code: "PRD-KD-24109",
    sku: "KD-FAMILY-01",
    category: "童装 / 套装",
    status: "可创作",
    statusClass: "status-ready",
    materialCount: 15,
    updatedAt: "2026-07-02 18:18",
    image: "assets/product-cover-04.png",
    points: {
      core: "双人模特素材完整，适合批量生成亲子主题营销物料。",
      audience: "亲子家庭、儿童服饰渠道商。",
      scene: "亲子活动页、节日营销海报、直播间封面。",
      material: "棉质针织，宽松版型，童趣印花。"
    },
    assets: ["主图 5", "细节图 5", "模特图 4", "场景图 1"],
    records: [
      { type: "最近生成图片", text: "亲子草地活动海报", status: "已完成", time: "2026-07-02 18:03" },
      { type: "最近扩图任务", text: "横版海报背景扩展", status: "已完成", time: "2026-07-02 17:40" },
      { type: "最近复刻任务", text: "参考图复刻亲子坐姿", status: "已完成", time: "2026-07-02 17:12" }
    ]
  },
  {
    id: "p006",
    name: "基础无痕内衣套装",
    brand: "Lovera",
    code: "PRD-BRA-1021",
    sku: "BRA-SET-1021",
    category: "内衣 / 套装",
    status: "已停用",
    statusClass: "status-disabled",
    materialCount: 9,
    updatedAt: "2026-07-01 11:20",
    image: "assets/product-cover-03.png",
    points: {
      core: "商品已下架，不建议作为默认 AI 创作入口，但保留历史素材与任务结果。",
      audience: "历史商品复盘、老品复用。",
      scene: "历史素材检索、旧款图像复用。",
      material: "无痕面料，轻薄杯面，舒适肩带。"
    },
    assets: ["主图 3", "细节图 4", "模特图 2", "场景图 0"],
    records: [
      { type: "最近生成图片", text: "旧款详情图重绘", status: "已完成", time: "2026-07-01 10:58" },
      { type: "最近扩图任务", text: "暂无扩图任务", status: "待处理", time: "-" },
      { type: "最近复刻任务", text: "暂无复刻任务", status: "待处理", time: "-" }
    ]
  }
];

const state = {
  products,
  filtered: products,
  view: "card",
  activeDate: false,
  activeProduct: products[0],
  drawerMode: "view",
  creation: {
    category: "文胸",
    productUploaded: false,
    referenceUploaded: false,
    template: "",
    templateKind: "",
    ratio: "3:4",
    resolution: "2K",
    recordSeq: 0
  }
};

const els = {
  body: document.body,
  searchInput: document.querySelector("[data-search-input]"),
  filters: Array.from(document.querySelectorAll("[data-filter-select]")),
  resetButtons: Array.from(document.querySelectorAll("[data-reset-filter]")),
  viewButtons: Array.from(document.querySelectorAll("[data-view]")),
  cardView: document.querySelector("[data-card-view]"),
  emptyState: document.querySelector("[data-empty-state]"),
  noResultState: document.querySelector("[data-no-result-state]"),
  loadingState: document.querySelector("[data-loading-state]"),
  drawer: document.querySelector("[data-detail-drawer]"),
  drawerBackdrop: document.querySelector("[data-drawer-backdrop]"),
  drawerTitle: document.querySelector("[data-drawer-title]"),
  closeDrawerButtons: Array.from(document.querySelectorAll("[data-close-drawer]")),
  basicInfo: document.querySelector("[data-basic-info]"),
  materialInfo: document.querySelector("[data-material-info]"),
  sellingPoint: document.querySelector("[data-selling-point]"),
  colorImages: document.querySelector("[data-color-images]"),
  sizeConfig: document.querySelector("[data-size-config]"),
  drawerFoot: document.querySelector("[data-drawer-foot]"),
  actionPopover: document.querySelector("[data-action-popover]"),
  toast: document.querySelector("[data-toast]")
};

els.pages = Array.from(document.querySelectorAll("[data-page]"));
els.creationPrompt = document.querySelector("[data-creation-prompt]");
els.creationMode = document.querySelector("[data-creation-mode]");
els.creationCategories = Array.from(document.querySelectorAll("[data-creation-categories] button"));
els.creationRecordList = document.querySelector("[data-creation-record-list]");
els.creationCost = document.querySelector("[data-cost-label]");
els.templateLabel = document.querySelector("[data-template-label]");
els.templateModal = document.querySelector("[data-template-modal]");
els.paramModal = document.querySelector("[data-param-modal]");
els.ratioLabel = document.querySelector("[data-ratio-label]");
els.resolutionLabel = document.querySelector("[data-resolution-label]");

function statusClass(status) {
  return {
    已完成: "status-ready",
    生成中: "status-generating",
    失败: "status-missing",
    待处理: "status-disabled"
  }[status] || "status-pending";
}

function renderProducts(list) {
  els.cardView.innerHTML = list.map((product) => `
    <article class="product-card ${product.status === "素材缺失" ? "has-warning" : ""}" data-product-id="${product.id}">
      <div class="product-cover">
        <img src="${product.image}" alt="${product.name}">
      </div>
      <div class="product-body">
        <h3 class="product-title">${product.name}</h3>
        <div class="product-identity">
          <span class="product-brand-name">${product.brand}</span>
          <div class="product-category-row">
            <span>${product.category.split("/")[0].trim()}</span>
            <strong>${product.materialCount}张</strong>
          </div>
        </div>
        <div class="product-actions">
          <button class="small-action detail" type="button" data-detail="${product.id}">查看</button>
          <button class="small-action create" type="button" ${product.status === "素材缺失" ? "disabled" : `data-create="${product.id}"`}>去创作</button>
        </div>
      </div>
    </article>
  `).join("");

  updateStates(list);
}

function updateStates(list) {
  const hasFilters = hasActiveFilters();
  els.emptyState.classList.toggle("is-visible", products.length === 0);
  els.noResultState.classList.toggle("is-visible", products.length > 0 && list.length === 0);
  els.cardView.classList.toggle("is-hidden", list.length === 0);
  els.resetButtons.forEach((button) => button.classList.toggle("is-active", hasFilters));
}

function hasActiveFilters() {
  return Boolean(
    els.searchInput.value.trim() ||
    els.filters.some((select) => !select.value.startsWith("全部"))
  );
}

function filterProducts() {
  const keyword = els.searchInput.value.trim().toLowerCase();
  const [brand, category] = els.filters.map((select) => select.value);

  state.filtered = products.filter((product) => {
    const matchKeyword = !keyword || [product.name, product.code, product.sku].some((value) => value.toLowerCase().includes(keyword));
    const matchBrand = brand.startsWith("全部") || product.brand === brand;
    const matchCategory = category.startsWith("全部") || product.category.includes(category);
    return matchKeyword && matchBrand && matchCategory;
  });

  renderProducts(state.filtered);
}

function setView(view) {
  state.view = view;
  els.body.classList.toggle("table-mode", view === "table");
  els.viewButtons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.view === view);
  });
}

function buildProductDetail(product) {
  const isInnerwear = product.category.includes("内衣");
  const isKids = product.category.includes("童装");
  const allImages = [
    product.image,
    "assets/product-cover-01.png",
    "assets/product-cover-02.png",
    "assets/product-cover-03.png",
    "assets/product-cover-04.png"
  ].filter((image, index, images) => images.indexOf(image) === index);

  return {
    size69: isKids ? "KD-69-0623" : isInnerwear ? "IN-69-0883" : "MU-69-5068",
    factoryName: isKids ? "卡特加特童装工厂" : isInnerwear ? "柔感内衣制衣厂" : "云适服饰工厂",
    materials: isKids
      ? [
          { name: "精梳棉", desc: "亲肤柔软，适合儿童日常穿着。" },
          { name: "数码印花", desc: "图案清晰，适合详情页展示。" }
        ]
      : isInnerwear
        ? [
            { name: "蕾丝面料", desc: "轻薄透气，纹理清晰。" },
            { name: "柔软杯里", desc: "提升贴肤舒适度。" }
          ]
        : [
            { name: "冰丝混纺", desc: "触感清爽，适合夏季基础款。" },
            { name: "弹力腰头", desc: "稳定包覆，适合组合售卖。" }
          ],
    colors: [
      { name: isKids ? "白色" : isInnerwear ? "肤色" : "蓝色", images: allImages.slice(0, 3) },
      { name: isKids ? "黑色" : isInnerwear ? "浅绿" : "灰色", images: allImages.slice(2, 5) }
    ],
    sizes: isKids ? ["90", "100", "110", "120", "130"] : ["S", "M", "L", "XL", "XXL"],
    parameters: isKids ? ["衣长", "胸围", "肩宽"] : isInnerwear ? ["上胸围", "下胸围", "杯型"] : ["腰围", "裤长", "臀围"],
    rows: isKids
      ? [
          ["90", "38", "32", "26"],
          ["100", "41", "34", "27"],
          ["110", "44", "36", "28"]
        ]
      : isInnerwear
        ? [
            ["S", "78", "68", "B"],
            ["M", "82", "72", "B"],
            ["L", "86", "76", "C"]
          ]
        : [
            ["M", "70-78", "24", "88"],
            ["L", "78-86", "25", "92"],
            ["XL", "86-94", "26", "96"]
          ]
  };
}

function renderBasicInfo(product, detail, mode) {
  const rows = [
    ["品牌", product.brand],
    ["商品唯一码", product.code],
    ["商品名称", product.name],
    ["商品类别", product.category],
    ["货号", product.sku],
    ["69码", detail.size69],
    ["工厂名称", detail.factoryName]
  ];

  if (mode === "edit") {
    return rows.map(([label, value]) => `
      <label class="edit-field">
        <span>${label}</span>
        <input class="drawer-control" type="text" value="${value}">
      </label>
    `).join("");
  }

  return rows.map(([label, value]) => `
    <div class="info-item">
      <span>${label}</span>
      <strong>${value}</strong>
    </div>
  `).join("");
}

function renderMaterialInfo(detail, mode) {
  if (mode === "edit") {
    return detail.materials.map((material) => `
      <div class="material-row is-editing">
        <label class="edit-field">
          <span>面料名称</span>
          <input class="drawer-control" type="text" value="${material.name}">
        </label>
        <label class="edit-field">
          <span>面料描述</span>
          <textarea class="drawer-textarea">${material.desc}</textarea>
        </label>
      </div>
    `).join("");
  }

  return detail.materials.map((material) => `
    <div class="material-row">
      <div>
        <span>面料名称</span>
        <strong>${material.name}</strong>
      </div>
      <div>
        <span>面料描述</span>
        <p>${material.desc}</p>
      </div>
    </div>
  `).join("");
}

function renderSellingPoint(product, mode) {
  if (mode === "edit") {
    return `
      <label class="edit-field full">
        <span>商品卖点</span>
        <textarea class="drawer-textarea selling-edit">${product.points.core}</textarea>
      </label>
    `;
  }

  return `<p>${product.points.core}</p>`;
}

function renderColorImages(detail, mode) {
  return detail.colors.map((color) => `
    <div class="color-image-card">
      ${mode === "edit"
        ? `<input class="drawer-control color-name-control" type="text" value="${color.name}">`
        : `<div class="color-image-title">${color.name}</div>`}
      <div class="color-image-grid">
        ${color.images.map((image) => `<img src="${image}" alt="${color.name}商品图">`).join("")}
      </div>
    </div>
  `).join("");
}

function renderSizeConfig(detail, mode) {
  const sizeOptions = mode === "edit"
    ? detail.sizes.map((size) => `<input class="size-chip-input" type="text" value="${size}">`).join("")
    : detail.sizes.map((size) => `<span>${size}</span>`).join("");

  const tableRows = detail.rows.map((row) => `
    <tr>
      ${row.map((cell) => `
        <td>${mode === "edit" ? `<input class="table-cell-input" type="text" value="${cell}">` : cell}</td>
      `).join("")}
    </tr>
  `).join("");

  return `
    <div class="size-option-list">
      ${sizeOptions}
    </div>
    <div class="size-table-wrap">
      <table class="size-table">
        <thead>
          <tr>
            <th>尺码</th>
            ${detail.parameters.map((parameter) => `<th>${parameter}</th>`).join("")}
          </tr>
        </thead>
        <tbody>
          ${tableRows}
        </tbody>
      </table>
    </div>
  `;
}

function renderDrawerFooter(mode) {
  els.drawerFoot.innerHTML = mode === "edit"
    ? `
      <button class="btn ghost drawer-cancel-btn" type="button" data-cancel-edit>取消</button>
      <button class="btn primary drawer-save-btn" type="button" data-save-edit>保存</button>
    `
    : `<button class="btn primary drawer-edit-btn" type="button" data-edit-drawer>编辑</button>`;
}

function renderDrawer(product, mode = "view") {
  const detail = buildProductDetail(product);
  state.activeProduct = product;
  state.drawerMode = mode;
  els.drawer.dataset.mode = mode;
  els.drawerTitle.textContent = product.name;
  els.basicInfo.innerHTML = renderBasicInfo(product, detail, mode);
  els.materialInfo.innerHTML = renderMaterialInfo(detail, mode);
  els.sellingPoint.innerHTML = renderSellingPoint(product, mode);
  els.colorImages.innerHTML = renderColorImages(detail, mode);
  els.sizeConfig.innerHTML = renderSizeConfig(detail, mode);
  renderDrawerFooter(mode);
}

function openDrawer(productId) {
  const product = products.find((item) => item.id === productId);
  if (!product) return;

  renderDrawer(product, "view");
  els.drawer.classList.add("is-open");
  els.drawerBackdrop.classList.add("is-open");
}

function closeDrawer() {
  els.drawer.classList.remove("is-open");
  els.drawerBackdrop.classList.remove("is-open");
}

function openCreateMenu(button, productId) {
  const product = products.find((item) => item.id === productId);
  if (!product) return;

  state.activeProduct = product;
  const rect = button.getBoundingClientRect();
  els.actionPopover.style.top = `${rect.bottom + window.scrollY + 8}px`;
  els.actionPopover.style.left = `${Math.min(rect.left + window.scrollX, window.innerWidth - 250)}px`;
  els.actionPopover.querySelector("[data-popover-title]").textContent = `为「${product.name}」创作`;
  els.actionPopover.classList.add("is-open");
}

function closeCreateMenu() {
  els.actionPopover.classList.remove("is-open");
}

function showToast(message) {
  els.toast.textContent = message;
  els.toast.classList.add("is-open");
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => {
    els.toast.classList.remove("is-open");
  }, 1800);
}

function resetFilters() {
  els.searchInput.value = "";
  els.filters.forEach((select) => {
    select.selectedIndex = 0;
  });
  filterProducts();
}

function clearMenuActive() {
  document.querySelectorAll(".nav button").forEach((item) => item.classList.remove("active"));
}

function getNavGroupItems(group) {
  const items = [];
  let current = group.nextElementSibling;
  while (
    current &&
    !current.classList.contains("nav-group") &&
    !current.classList.contains("nav-divider")
  ) {
    items.push(current);
    current = current.nextElementSibling;
  }
  return items;
}

function setNavGroupExpanded(group, expanded) {
  group.classList.toggle("expanded", expanded);
  group.classList.toggle("collapsed", !expanded);
  getNavGroupItems(group).forEach((item) => item.classList.toggle("nav-hidden", !expanded));
}

function setWorkspacePage(pageName) {
  els.pages.forEach((page) => {
    page.classList.toggle("active", page.dataset.page === pageName);
  });
  closeCreateMenu();
  if (pageName !== "product-library") {
    closeDrawer();
  }
}

function getCreationMode() {
  const hasPrompt = els.creationPrompt.value.trim().length > 0;
  if (state.creation.templateKind === "suite") return "套图创作";
  if (state.creation.template) return "模板创作";
  if (state.creation.productUploaded && state.creation.referenceUploaded) return "参考图复刻";
  if (state.creation.productUploaded && hasPrompt) return "商品图生成";
  if (hasPrompt) return "自由生图";
  return "待识别";
}

function getCreationCost(mode) {
  return {
    待识别: 0,
    自由生图: 4,
    商品图生成: 6,
    参考图复刻: 10,
    模板创作: 8,
    套图创作: 18
  }[mode] || 0;
}

function updateCreationMode() {
  const mode = getCreationMode();
  els.creationMode.textContent = mode;
  els.creationCost.textContent = `${getCreationCost(mode)} 融豆`;
}

function setCreationCategory(category) {
  state.creation.category = category;
  els.creationCategories.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.category === category);
  });
}

function setCreationUpload(type, uploaded) {
  state.creation[`${type}Uploaded`] = uploaded;
  const button = document.querySelector(`[data-creation-upload="${type}"]`);
  const label = document.querySelector(`[data-upload-label="${type}"]`);
  button.classList.toggle("is-filled", uploaded);
  if (type === "product") {
    label.textContent = uploaded ? "已上传：商品图 4 张" : "正面、背面、细节图";
  } else {
    label.textContent = uploaded ? "已上传：参考图 1 张" : "构图、风格、场景复刻";
  }
  updateCreationMode();
}

function setCreationTemplate(name, kind) {
  state.creation.template = name;
  state.creation.templateKind = kind;
  els.templateLabel.textContent = name || "未选择模板";
  document.querySelector("[data-template-open]").classList.toggle("is-selected", Boolean(name));
  document.querySelectorAll("[data-template-choice]").forEach((button) => {
    button.classList.toggle("is-selected", button.dataset.templateChoice === name);
  });
  updateCreationMode();
}

function openPrototypeModal(modal) {
  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");
}

function closePrototypeModals() {
  document.querySelectorAll(".prototype-modal").forEach((modal) => {
    modal.classList.remove("is-open");
    modal.setAttribute("aria-hidden", "true");
  });
}

function creationRelationText() {
  const relations = [];
  if (state.creation.productUploaded) relations.push("商品图 4 张");
  if (state.creation.referenceUploaded) relations.push("参考图 1 张");
  if (state.creation.template) relations.push(state.creation.template);
  return relations.length ? relations.join(" / ") : "无关联素材";
}

function resultImagesMarkup() {
  return [
    "assets/product-cover-01.png",
    "assets/product-cover-02.png",
    "assets/product-cover-03.png",
    "assets/product-cover-04.png"
  ].map((image) => `<img src="${image}" alt="">`).join("");
}

function updateCreationRecord(record, status) {
  const statusMap = {
    queued: "排队中",
    running: "生成中",
    done: "已完成",
    failed: "失败"
  };
  const statusNode = record.querySelector("[data-record-status]");
  const resultNode = record.querySelector("[data-record-result]");
  statusNode.className = `record-status ${status}`;
  statusNode.textContent = statusMap[status];
  if (status === "done") {
    resultNode.className = "record-result-grid";
    resultNode.innerHTML = resultImagesMarkup();
  } else {
    resultNode.className = "record-result-grid pending";
    resultNode.innerHTML = "";
  }
}

function createGenerationRecord() {
  const mode = getCreationMode();
  const prompt = els.creationPrompt.value.trim();
  if (mode === "待识别") {
    showToast("请先填写提示词、上传图片或选择模板");
    return;
  }

  state.creation.recordSeq += 1;
  const cost = getCreationCost(mode);
  const title = state.creation.template || `${state.creation.category}${mode}`;
  const record = document.createElement("article");
  record.className = "creation-record";
  record.innerHTML = `
    <div class="record-result-grid pending" data-record-result></div>
    <div class="record-copy">
      <div class="record-meta">
        <span class="record-status queued" data-record-status>排队中</span>
        <span>${mode}</span>
        <span>${cost} 融豆</span>
      </div>
      <h3>${title}</h3>
      <p>${prompt || `${state.creation.category}商品图，按${mode}生成。`}</p>
      <small>关联：${creationRelationText()}</small>
      <div class="record-actions">
        <button type="button">查看大图</button>
        <button type="button">下载</button>
        <button type="button">保存为素材</button>
        <button type="button">保存为模板</button>
        <button type="button">上架到创作广场</button>
        <button type="button">继续编辑</button>
        <button type="button">扩图</button>
      </div>
    </div>
  `;
  els.creationRecordList.prepend(record);
  showToast("已提交生成任务");
  window.setTimeout(() => updateCreationRecord(record, "running"), 700);
  window.setTimeout(() => {
    updateCreationRecord(record, "done");
    showToast("生成完成，已展示 4 张结果图");
  }, 1900);
}

function useResource(card) {
  setWorkspacePage("creation-plaza");
  clearMenuActive();
  document.querySelector('[data-single-menu="创作广场"]').classList.add("active");
  setCreationCategory(card.dataset.category);
  els.creationPrompt.value = card.dataset.prompt;

  if (card.dataset.type === "模板") {
    setCreationTemplate(card.dataset.title, "template");
  } else if (card.dataset.type === "套图模板") {
    setCreationTemplate(card.dataset.title, "suite");
  } else {
    setCreationUpload("reference", true);
  }

  updateCreationMode();
  showToast(`已使用资源：${card.dataset.title}`);
}

document.querySelectorAll(".nav-group").forEach((group) => {
  group.addEventListener("click", () => {
    setNavGroupExpanded(group, group.classList.contains("collapsed"));
  });
});

document.querySelectorAll("[data-single-menu]").forEach((button) => {
  button.addEventListener("click", () => {
    clearMenuActive();
    button.classList.add("active");
    if (button.dataset.singleMenu === "创作广场") {
      setWorkspacePage("creation-plaza");
      return;
    }
    if (button.dataset.singleMenu === "商品库") {
      setWorkspacePage("product-library");
      return;
    }
    showToast(`${button.dataset.singleMenu}为菜单占位，当前原型仅切换创作广场和商品库`);
  });
});

els.creationCategories.forEach((button) => {
  button.addEventListener("click", () => {
    setCreationCategory(button.dataset.category);
    updateCreationMode();
  });
});

els.creationPrompt.addEventListener("input", updateCreationMode);

document.querySelectorAll("[data-creation-upload]").forEach((button) => {
  button.addEventListener("click", () => {
    const type = button.dataset.creationUpload;
    const nextValue = !state.creation[`${type}Uploaded`];
    setCreationUpload(type, nextValue);
    showToast(nextValue ? "已模拟上传" : "已移除上传内容");
  });
});

document.querySelector("[data-template-open]").addEventListener("click", () => {
  openPrototypeModal(els.templateModal);
});

document.querySelectorAll("[data-template-choice]").forEach((button) => {
  button.addEventListener("click", () => {
    setCreationTemplate(button.dataset.templateChoice, button.dataset.templateKind);
    closePrototypeModals();
    showToast(`已选择模板：${button.dataset.templateChoice}`);
  });
});

document.querySelector("[data-template-clear]").addEventListener("click", () => {
  setCreationTemplate("", "");
  closePrototypeModals();
  showToast("已取消模板");
});

document.querySelectorAll("[data-param-open]").forEach((button) => {
  button.addEventListener("click", () => openPrototypeModal(els.paramModal));
});

document.querySelectorAll("[data-modal-close]").forEach((button) => {
  button.addEventListener("click", closePrototypeModals);
});

document.querySelectorAll(".prototype-modal").forEach((modal) => {
  modal.addEventListener("click", (event) => {
    if (event.target === modal) closePrototypeModals();
  });
});

document.querySelectorAll("[data-ratio-options] button").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll("[data-ratio-options] button").forEach((item) => item.classList.remove("is-active"));
    button.classList.add("is-active");
    state.creation.ratio = button.dataset.value;
    els.ratioLabel.textContent = state.creation.ratio;
  });
});

document.querySelectorAll("[data-resolution-options] button").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll("[data-resolution-options] button").forEach((item) => item.classList.remove("is-active"));
    button.classList.add("is-active");
    state.creation.resolution = button.dataset.value;
    els.resolutionLabel.textContent = state.creation.resolution;
  });
});

document.querySelector("[data-creation-generate]").addEventListener("click", createGenerationRecord);

document.querySelectorAll("[data-resource-filter] button").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll("[data-resource-filter] button").forEach((item) => item.classList.remove("is-active"));
    button.classList.add("is-active");
    const filter = button.dataset.filter;
    document.querySelectorAll("[data-resource-card]").forEach((card) => {
      card.style.display = filter === "全部" || card.dataset.tags.includes(filter) ? "" : "none";
    });
  });
});

document.querySelectorAll("[data-resource-use]").forEach((button) => {
  button.addEventListener("click", () => useResource(button.closest("[data-resource-card]")));
});

document.querySelectorAll("[data-resource-preview]").forEach((button) => {
  button.addEventListener("click", () => {
    showToast(`预览资源：${button.closest("[data-resource-card]").dataset.title}`);
  });
});

els.searchInput.addEventListener("input", filterProducts);
els.filters.forEach((select) => select.addEventListener("change", filterProducts));
els.resetButtons.forEach((button) => button.addEventListener("click", resetFilters));
els.viewButtons.forEach((button) => {
  button.addEventListener("click", () => setView(button.dataset.view));
});

document.addEventListener("click", (event) => {
  const detailButton = event.target.closest("[data-detail]");
  const createButton = event.target.closest("[data-create]");
  const popoverAction = event.target.closest("[data-create-action]");
  const editDrawerButton = event.target.closest("[data-edit-drawer]");
  const cancelEditButton = event.target.closest("[data-cancel-edit]");
  const saveEditButton = event.target.closest("[data-save-edit]");

  if (detailButton) {
    openDrawer(detailButton.dataset.detail);
    closeCreateMenu();
    return;
  }

  if (editDrawerButton) {
    renderDrawer(state.activeProduct, "edit");
    return;
  }

  if (cancelEditButton) {
    renderDrawer(state.activeProduct, "view");
    return;
  }

  if (saveEditButton) {
    showToast("编辑内容已保存");
    renderDrawer(state.activeProduct, "view");
    return;
  }

  if (createButton) {
    event.stopPropagation();
    openCreateMenu(createButton, createButton.dataset.create);
    return;
  }

  if (popoverAction) {
    const actionName = popoverAction.dataset.createAction;
    setWorkspacePage("creation-plaza");
    clearMenuActive();
    document.querySelector('[data-single-menu="创作广场"]').classList.add("active");
    els.creationPrompt.value = `${state.activeProduct.name}，${actionName}，生成适合电商详情页的商品图。`;
    setCreationUpload("product", true);
    updateCreationMode();
    showToast(`${actionName}已带入创作广场`);
    closeCreateMenu();
    return;
  }

  if (!event.target.closest("[data-action-popover]")) {
    closeCreateMenu();
  }
});

els.closeDrawerButtons.forEach((button) => button.addEventListener("click", closeDrawer));
els.drawerBackdrop.addEventListener("click", closeDrawer);

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeDrawer();
    closeCreateMenu();
    closePrototypeModals();
  }
});

document.querySelectorAll("[data-drawer-action]").forEach((button) => {
  button.addEventListener("click", () => {
    const action = button.dataset.drawerAction;
    showToast(`${action}入口已展示，后续可接入对应业务页面`);
  });
});

els.loadingState.classList.add("is-visible");
updateCreationMode();
window.setTimeout(() => {
  els.loadingState.classList.remove("is-visible");
  renderProducts(state.filtered);
  setView("card");
}, 350);
