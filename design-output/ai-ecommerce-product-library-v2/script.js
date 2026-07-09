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
  activeProduct: products[0]
};

const els = {
  body: document.body,
  searchInput: document.querySelector("[data-search-input]"),
  filters: Array.from(document.querySelectorAll("[data-filter-select]")),
  resetButtons: Array.from(document.querySelectorAll("[data-reset-filter]")),
  dateFilter: document.querySelector("[data-date-filter]"),
  viewButtons: Array.from(document.querySelectorAll("[data-view]")),
  cardView: document.querySelector("[data-card-view]"),
  tableBody: document.querySelector("[data-table-body]"),
  emptyState: document.querySelector("[data-empty-state]"),
  noResultState: document.querySelector("[data-no-result-state]"),
  loadingState: document.querySelector("[data-loading-state]"),
  missingTip: document.querySelector("[data-missing-tip]"),
  visibleCount: document.querySelector("[data-visible-count]"),
  drawer: document.querySelector("[data-detail-drawer]"),
  drawerBackdrop: document.querySelector("[data-drawer-backdrop]"),
  drawerTitle: document.querySelector("[data-drawer-title]"),
  closeDrawer: document.querySelector("[data-close-drawer]"),
  basicInfo: document.querySelector("[data-basic-info]"),
  sellingPoints: document.querySelector("[data-selling-points]"),
  assetStrip: document.querySelector("[data-asset-strip]"),
  recordList: document.querySelector("[data-record-list]"),
  actionPopover: document.querySelector("[data-action-popover]"),
  toast: document.querySelector("[data-toast]")
};

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
        <span class="status-badge ${product.statusClass}">${product.status}</span>
        ${product.status === "素材缺失" ? `<span class="warning-mark">缺少模特图</span>` : ""}
      </div>
      <div class="product-body">
        <div class="product-title-row">
          <div>
            <h3 class="product-title">${product.name}</h3>
            <p class="product-brand">${product.brand}</p>
          </div>
          <button class="icon-button more-btn" type="button" data-more="${product.id}" aria-label="更多操作">•••</button>
        </div>
        <div class="product-meta">
          <div class="meta-line"><span>商品唯一码</span><strong>${product.code}</strong></div>
          <div class="meta-line"><span>货号</span><strong>${product.sku}</strong></div>
          <div class="meta-line"><span>品类</span><strong>${product.category}</strong></div>
          <div class="meta-line"><span>素材数量</span><strong>${product.materialCount} 张</strong></div>
          <div class="meta-line"><span>更新时间</span><strong>${product.updatedAt}</strong></div>
        </div>
        <div class="product-actions">
          <button class="small-action detail" type="button" data-detail="${product.id}">查看详情</button>
          <button class="small-action create" type="button" data-create="${product.id}">AI创作</button>
        </div>
      </div>
    </article>
  `).join("");

  els.tableBody.innerHTML = list.map((product) => `
    <tr data-product-id="${product.id}">
      <td>
        <div class="table-product">
          <img class="table-thumb" src="${product.image}" alt="${product.name}">
        </div>
      </td>
      <td>
        <strong>${product.name}</strong>
        <span>${product.status === "素材缺失" ? "素材缺失，建议先补充商品图" : "商品档案已建立"}</span>
      </td>
      <td>${product.brand}</td>
      <td>${product.code}</td>
      <td>${product.sku}</td>
      <td>${product.category}</td>
      <td><span class="status-badge ${product.statusClass}">${product.status}</span></td>
      <td>${product.materialCount} 张</td>
      <td>${product.updatedAt}</td>
      <td>
        <div class="table-actions">
          <button class="link-btn detail" type="button" data-detail="${product.id}">详情</button>
          <button class="link-btn create" type="button" data-create="${product.id}">AI创作</button>
        </div>
      </td>
    </tr>
  `).join("");

  updateStates(list);
}

function updateStates(list) {
  const hasFilters = hasActiveFilters();
  els.emptyState.classList.toggle("is-visible", products.length === 0);
  els.noResultState.classList.toggle("is-visible", products.length > 0 && list.length === 0);
  els.cardView.classList.toggle("is-hidden", list.length === 0);
  document.querySelector(".table-wrap").classList.toggle("is-hidden", list.length === 0);
  els.missingTip.classList.toggle("is-active", list.some((item) => item.status === "素材缺失"));
  els.visibleCount.textContent = `当前展示 ${list.length} / 1,286`;
  els.resetButtons.forEach((button) => button.classList.toggle("is-active", hasFilters));
}

function hasActiveFilters() {
  return Boolean(
    els.searchInput.value.trim() ||
    els.filters.some((select) => !select.value.startsWith("全部")) ||
    state.activeDate
  );
}

function filterProducts() {
  const keyword = els.searchInput.value.trim().toLowerCase();
  const [brand, category, status] = els.filters.map((select) => select.value);

  state.filtered = products.filter((product) => {
    const matchKeyword = !keyword || [product.name, product.code, product.sku].some((value) => value.toLowerCase().includes(keyword));
    const matchBrand = brand.startsWith("全部") || product.brand === brand;
    const matchCategory = category.startsWith("全部") || product.category.includes(category);
    const matchStatus = status.startsWith("全部") || product.status === status;
    return matchKeyword && matchBrand && matchCategory && matchStatus;
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

function openDrawer(productId) {
  const product = products.find((item) => item.id === productId);
  if (!product) return;

  state.activeProduct = product;
  els.drawerTitle.textContent = product.name;
  els.basicInfo.innerHTML = [
    ["商品名称", product.name],
    ["品牌", product.brand],
    ["商品唯一码", product.code],
    ["货号", product.sku],
    ["品类", product.category],
    ["状态", product.status]
  ].map(([label, value]) => `
    <div class="info-item">
      <span>${label}</span>
      <strong>${value}</strong>
    </div>
  `).join("");

  els.sellingPoints.innerHTML = [
    ["核心卖点", product.points.core],
    ["适用人群", product.points.audience],
    ["使用场景", product.points.scene],
    ["材质 / 工艺", product.points.material]
  ].map(([label, value]) => `
    <div class="point-row">
      <span>${label}</span>
      <p>${value}</p>
    </div>
  `).join("");

  els.assetStrip.innerHTML = product.assets.map((asset, index) => `
    <div class="asset-item">
      <img src="${product.image}" alt="${asset}">
      <span>${asset}</span>
      ${index === 2 && product.status === "素材缺失" ? `<em>待补充</em>` : ""}
    </div>
  `).join("");

  els.recordList.innerHTML = product.records.map((record) => `
    <div class="record-item">
      <div>
        <strong>${record.type}</strong>
        <p>${record.text}</p>
      </div>
      <div class="record-meta">
        <span class="status-badge ${statusClass(record.status)}">${record.status}</span>
        <small>${record.time}</small>
      </div>
    </div>
  `).join("");

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
  state.activeDate = false;
  els.dateFilter.classList.remove("is-active");
  filterProducts();
}

function clearMenuActive() {
  document.querySelectorAll(".menu-title").forEach((item) => item.classList.remove("is-active"));
  document.querySelectorAll(".submenu-item").forEach((item) => item.classList.remove("is-active"));
}

document.querySelectorAll("[data-menu-toggle]").forEach((button) => {
  button.addEventListener("click", () => {
    const group = button.closest(".menu-section");
    group.classList.toggle("is-open");
  });
});

document.querySelectorAll(".submenu-item").forEach((button) => {
  button.addEventListener("click", () => {
    clearMenuActive();
    button.classList.add("is-active");
    button.closest(".menu-section").querySelector(".menu-title").classList.add("is-active");
    showToast(`${button.textContent.trim()} 为原型菜单项，暂不跳转`);
  });
});

document.querySelectorAll("[data-single-menu]").forEach((button) => {
  button.addEventListener("click", () => {
    clearMenuActive();
    button.classList.add("is-active");
    if (button.dataset.singleMenu !== "商品库") {
      showToast(`${button.dataset.singleMenu} 将在页面内部用 Tab / 筛选承载细分类`);
    }
  });
});

document.querySelectorAll(".primary-agent").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".primary-agent").forEach((item) => item.classList.remove("is-active"));
    button.classList.add("is-active");
    if (!button.textContent.includes("AI电商智能体")) {
      showToast("当前原型重点展示 AI电商智能体菜单骨架");
    }
  });
});

els.searchInput.addEventListener("input", filterProducts);
els.filters.forEach((select) => select.addEventListener("change", filterProducts));
els.resetButtons.forEach((button) => button.addEventListener("click", resetFilters));
els.dateFilter.addEventListener("click", () => {
  state.activeDate = !state.activeDate;
  els.dateFilter.classList.toggle("is-active", state.activeDate);
  filterProducts();
});

els.viewButtons.forEach((button) => {
  button.addEventListener("click", () => setView(button.dataset.view));
});

document.addEventListener("click", (event) => {
  const detailButton = event.target.closest("[data-detail]");
  const createButton = event.target.closest("[data-create]");
  const moreButton = event.target.closest("[data-more]");
  const popoverAction = event.target.closest("[data-create-action]");

  if (detailButton) {
    openDrawer(detailButton.dataset.detail);
    closeCreateMenu();
    return;
  }

  if (createButton) {
    event.stopPropagation();
    openCreateMenu(createButton, createButton.dataset.create);
    return;
  }

  if (moreButton) {
    showToast("更多操作可承载编辑、停用、删除、复制商品唯一码等动作");
    return;
  }

  if (popoverAction) {
    const actionName = popoverAction.dataset.createAction;
    showToast(`${actionName}入口已展示，当前 HTML 原型不接入真实创作流程`);
    closeCreateMenu();
    return;
  }

  if (!event.target.closest("[data-action-popover]")) {
    closeCreateMenu();
  }
});

els.closeDrawer.addEventListener("click", closeDrawer);
els.drawerBackdrop.addEventListener("click", closeDrawer);

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeDrawer();
    closeCreateMenu();
  }
});

document.querySelectorAll("[data-drawer-action]").forEach((button) => {
  button.addEventListener("click", () => {
    const action = button.dataset.drawerAction;
    showToast(`${action}入口已展示，后续可接入对应业务页面`);
  });
});

els.loadingState.classList.add("is-visible");
window.setTimeout(() => {
  els.loadingState.classList.remove("is-visible");
  renderProducts(state.filtered);
  setView("card");
}, 350);
