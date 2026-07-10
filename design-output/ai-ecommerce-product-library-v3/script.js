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

const templates = [
  {
    id: "tpl001",
    name: "蓝调棚拍主图模板",
    type: "主图模板",
    typeShort: "主图",
    category: "文胸",
    source: "官方",
    status: "可使用",
    usage: 12430,
    updatedAt: "2026-07-08 18:20",
    image: "assets/product-cover-03.png",
    coverTone: "main",
    tags: ["棚拍", "浅蓝灰", "内衣", "主图"],
    composition: {
      main: "1 张主图",
      detail: "无",
      sku: "无",
      brand: "可替换 Logo 位",
      material: "卖点角标、活动利益点"
    },
    records: ["蕾丝聚拢文胸主图 · 2026-07-08", "基础无痕内衣主图 · 2026-07-07"]
  },
  {
    id: "tpl002",
    name: "详情长图卖点组合",
    type: "详情图模板",
    typeShort: "详情图",
    category: "内裤",
    source: "自建",
    status: "可上架",
    usage: 286,
    updatedAt: "2026-07-08 16:12",
    image: "assets/product-cover-01.png",
    coverTone: "detail",
    tags: ["详情页", "卖点", "长图", "男士内裤"],
    composition: {
      main: "无",
      detail: "5 个详情模块",
      sku: "无",
      brand: "品牌色与标题样式",
      material: "尺码、面料、洗护说明"
    },
    records: ["男士冰丝平角裤详情长图 · 2026-07-08", "四条装男士内裤组合详情图 · 2026-07-06"]
  },
  {
    id: "tpl003",
    name: "多色 SKU 平铺展示",
    type: "SKU图模板",
    typeShort: "SKU图",
    category: "童装",
    source: "历史生成",
    status: "草稿",
    usage: 48,
    updatedAt: "2026-07-07 20:34",
    image: "assets/product-cover-04.png",
    coverTone: "sku",
    tags: ["SKU", "多颜色", "童装", "平铺"],
    composition: {
      main: "无",
      detail: "无",
      sku: "6 个颜色展示位",
      brand: "无",
      material: "色卡、尺码说明"
    },
    records: ["儿童亲子短袖套装 SKU 图 · 2026-07-07"]
  },
  {
    id: "tpl004",
    name: "五图详情页套图",
    type: "套图模板",
    typeShort: "套图",
    category: "箱包",
    source: "已购买",
    status: "已上架",
    usage: 5821,
    updatedAt: "2026-07-07 15:10",
    image: "assets/product-cover-02.png",
    coverTone: "suite",
    tags: ["套图", "主图", "详情图", "SKU", "箱包"],
    composition: {
      main: "1 张主图",
      detail: "3 张详情图",
      sku: "1 张 SKU 图",
      brand: "品牌元素区",
      material: "尺寸、材质、保养说明"
    },
    records: ["通勤托特包套图 · 2026-07-07", "轻奢手提包套图 · 2026-07-06"]
  },
  {
    id: "tpl005",
    name: "运动鞋白底 SKU 模板",
    type: "SKU图模板",
    typeShort: "SKU图",
    category: "鞋子",
    source: "复制官方资源",
    status: "审核中",
    usage: 913,
    updatedAt: "2026-07-06 19:28",
    image: "assets/product-cover-01.png",
    coverTone: "sku",
    tags: ["鞋子", "SKU", "白底", "多规格"],
    composition: {
      main: "无",
      detail: "无",
      sku: "4 个角度展示位",
      brand: "可替换 Logo 位",
      material: "尺码、颜色、材质说明"
    },
    records: ["白色运动休闲鞋 SKU 图 · 2026-07-06"]
  },
  {
    id: "tpl006",
    name: "可上架内衣套图",
    type: "套图模板",
    typeShort: "套图",
    category: "文胸",
    source: "自建",
    status: "可上架",
    usage: 667,
    updatedAt: "2026-07-06 11:42",
    image: "assets/product-cover-03.png",
    coverTone: "suite",
    tags: ["可上架", "内衣", "套图", "详情页"],
    composition: {
      main: "2 张主图",
      detail: "4 张详情图",
      sku: "2 张颜色图",
      brand: "品牌元素区",
      material: "尺码、资质、面料说明"
    },
    records: ["蕾丝聚拢文胸套图 · 2026-07-06", "无痕内衣套图 · 2026-07-05"]
  }
];

const modelLibrary = [
  {
    id: "m001",
    name: "都市通勤女模特",
    gender: "女性",
    age: "25-34岁",
    race: "亚洲",
    style: "商务",
    category: "女装、箱包、配饰",
    status: "可使用",
    usage: 1286,
    image: "../../../AI视频/ai-ecommerce-video-demo/assets/model-cover-black-dress.png",
    tags: ["女性", "亚洲", "商务", "真实感"]
  },
  {
    id: "m002",
    name: "户外休闲男模特",
    gender: "男性",
    age: "25-34岁",
    race: "亚洲",
    style: "休闲",
    category: "男装、鞋子、箱包",
    status: "可使用",
    usage: 963,
    image: "../../../AI视频/ai-ecommerce-video-demo/assets/model-cover-black-dress.png",
    tags: ["男性", "亚洲", "休闲", "真实感"]
  },
  {
    id: "m003",
    name: "欧美轻奢女模特",
    gender: "女性",
    age: "18-24岁",
    race: "欧美",
    style: "轻奢",
    category: "文胸、女装、配饰",
    status: "可使用",
    usage: 742,
    image: "../../../AI视频/ai-ecommerce-video-demo/assets/model-cover-black-dress.png",
    tags: ["女性", "欧美", "轻奢", "真实感"]
  },
  {
    id: "m004",
    name: "童装活力女童模特",
    gender: "女童",
    age: "7-12岁",
    race: "亚洲",
    style: "休闲",
    category: "童装、亲子用品",
    status: "可使用",
    usage: 681,
    image: "../../../AI视频/ai-ecommerce-video-demo/assets/model-cover-black-dress.png",
    tags: ["女童", "亚洲", "休闲", "真实感"]
  },
  {
    id: "m005",
    name: "商务西装男模特",
    gender: "男性",
    age: "35-44岁",
    race: "欧美",
    style: "商务",
    category: "男装、箱包、配饰",
    status: "可使用",
    usage: 526,
    image: "../../../AI视频/ai-ecommerce-video-demo/assets/model-cover-black-dress.png",
    tags: ["男性", "欧美", "商务", "真实感"]
  },
  {
    id: "m006",
    name: "东方古风女模特",
    gender: "女性",
    age: "18-24岁",
    race: "亚洲",
    style: "古风",
    category: "女装、配饰",
    status: "可使用",
    usage: 318,
    image: "../../../AI视频/ai-ecommerce-video-demo/assets/model-cover-black-dress.png",
    tags: ["女性", "亚洲", "古风", "真实感"]
  },
  {
    id: "m007",
    name: "运动活力男童模特",
    gender: "男童",
    age: "7-12岁",
    race: "亚洲",
    style: "运动",
    category: "童装、鞋子",
    status: "可使用",
    usage: 274,
    image: "../../../AI视频/ai-ecommerce-video-demo/assets/model-cover-black-dress.png",
    tags: ["男童", "亚洲", "休闲", "真实感"]
  },
  {
    id: "m008",
    name: "3D 潮流女模特",
    gender: "女性",
    age: "18-24岁",
    race: "亚洲",
    style: "休闲",
    category: "女装、鞋子、箱包",
    status: "可使用",
    usage: 193,
    image: "../../../AI视频/ai-ecommerce-video-demo/assets/model-cover-black-dress.png",
    tags: ["女性", "亚洲", "休闲", "3D"]
  }
];

const state = {
  products,
  filtered: products,
  templates,
  filteredTemplates: templates,
  models: modelLibrary,
  filteredModels: modelLibrary,
  modelGenderFilter: "全部",
  modelStyleFilters: [],
  modelCreateTimer: null,
  modelPreviewReady: false,
  templateTab: "全部",
  activeTemplate: templates[0],
  publishTemplate: null,
  previewResourceCard: null,
  view: "card",
  activeDate: false,
  activeProduct: products[0],
  drawerMode: "view",
  creation: {
    category: "文胸",
    productUploaded: false,
    referenceUploaded: false,
    modelUploaded: false,
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
els.recordModal = document.querySelector("[data-record-modal]");
els.resourcePreviewModal = document.querySelector("[data-resource-preview-modal]");
els.ratioLabel = document.querySelector("[data-ratio-label]");
els.resolutionLabel = document.querySelector("[data-resolution-label]");
els.templateSearch = document.querySelector("[data-template-search]");
els.templateTypeFilter = document.querySelector("[data-template-type-filter]");
els.templateCategoryFilter = document.querySelector("[data-template-category-filter]");
els.templateStatusFilter = document.querySelector("[data-template-status-filter]");
els.templateGrid = document.querySelector("[data-template-grid]");
els.templateEmptyState = document.querySelector("[data-template-empty-state]");
els.templateNoResultState = document.querySelector("[data-template-no-result-state]");
els.templateCreateMenu = document.querySelector("[data-template-create-menu]");
els.templatePublishModal = document.querySelector("[data-template-publish-modal]");
els.publishName = document.querySelector("[data-publish-name]");
els.publishType = document.querySelector("[data-publish-type]");
els.publishCategory = document.querySelector("[data-publish-category]");
els.publishPrice = document.querySelector("[data-publish-price]");
els.publishDesc = document.querySelector("[data-publish-desc]");
els.publishPreview = document.querySelector("[data-publish-preview]");
els.modelGrid = document.querySelector("[data-model-grid]");
els.modelCount = document.querySelector("[data-model-count]");
els.modelEmpty = document.querySelector("[data-model-empty]");
els.modelSearch = document.querySelector("[data-model-search]");
els.modelCreateModal = document.querySelector("[data-model-create-modal]");

function statusClass(status) {
  return {
    已完成: "status-ready",
    生成中: "status-generating",
    失败: "status-missing",
    待处理: "status-disabled"
  }[status] || "status-pending";
}

function templateStatusClass(status) {
  return {
    草稿: "draft",
    可使用: "ready",
    可上架: "listable",
    已上架: "online",
    审核中: "review",
    已下架: "offline"
  }[status] || "draft";
}

function formatUsage(value) {
  return value >= 10000 ? `${(value / 10000).toFixed(1)}万` : String(value);
}

function renderTemplateCards(list) {
  if (!els.templateGrid) return;

  els.templateGrid.innerHTML = list.map((template) => `
    <article class="template-card" data-template-id="${template.id}">
      <div class="template-cover ${template.coverTone}">
        <img src="${template.image}" alt="${template.name}">
      </div>
      <div class="template-card-body">
        <div class="template-title-row">
          <h3>${template.name}</h3>
          <span class="template-type-badge">${template.typeShort}</span>
        </div>
        <div class="template-meta">
          <span>品类：<strong>${template.category}</strong></span>
          <span>来源：<strong>${template.source}</strong></span>
          <span>状态：<em class="template-status ${templateStatusClass(template.status)}">${template.status}</em></span>
          <span>使用：<strong>${formatUsage(template.usage)}次</strong></span>
          <span>更新：<strong>${template.updatedAt}</strong></span>
        </div>
        <div class="template-card-actions">
          <button class="primary-action" type="button" data-template-create="${template.id}">去创作</button>
          <button type="button" data-template-preview="${template.id}">预览</button>
          <button type="button" data-template-edit="${template.id}">编辑</button>
          <button type="button" data-template-publish="${template.id}">上架到创作广场</button>
          <button class="danger-action" type="button" data-template-delete="${template.id}">删除</button>
        </div>
      </div>
    </article>
  `).join("");

  const hasKeyword = Boolean(els.templateSearch?.value.trim());
  const hasFilter = state.templateTab !== "全部" ||
    els.templateTypeFilter?.value !== "全部类型" ||
    els.templateCategoryFilter?.value !== "全部品类" ||
    els.templateStatusFilter?.value !== "全部状态";
  els.templateGrid.classList.toggle("is-hidden", list.length === 0);
  els.templateEmptyState?.classList.toggle("is-visible", templates.length === 0);
  els.templateNoResultState?.classList.toggle("is-visible", templates.length > 0 && list.length === 0 && (hasKeyword || hasFilter));
}

function filterTemplates() {
  if (!els.templateGrid) return;
  const keyword = els.templateSearch.value.trim().toLowerCase();
  const type = els.templateTypeFilter.value;
  const category = els.templateCategoryFilter.value;
  const status = els.templateStatusFilter.value;

  state.filteredTemplates = templates.filter((template) => {
    const haystack = [template.name, template.type, template.category, template.source, template.status, ...template.tags].join(" ").toLowerCase();
    const matchKeyword = !keyword || haystack.includes(keyword);
    const matchTab = state.templateTab === "全部" ||
      template.type === state.templateTab ||
      (state.templateTab === "可上架" && template.status === "可上架");
    const matchType = type === "全部类型" || template.type === type;
    const matchCategory = category === "全部品类" || template.category === category;
    const matchStatus = status === "全部状态" || template.status === status;
    return matchKeyword && matchTab && matchType && matchCategory && matchStatus;
  });

  renderTemplateCards(state.filteredTemplates);
}

function setTemplateTab(tab) {
  state.templateTab = tab;
  document.querySelectorAll("[data-template-tab]").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.templateTab === tab);
  });
  filterTemplates();
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
            <span class="product-category-meta">
              <span>${product.sku.replace(/\D/g, "").slice(-4).padStart(4, "0")}</span>
              <i></i>
              <span>${product.category.split("/")[0].trim()}</span>
            </span>
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

function setDrawerSectionTitles(titles) {
  Object.entries(titles).forEach(([name, title]) => {
    const section = document.querySelector(`[data-drawer-section="${name}"]`);
    if (!section) return;
    section.style.display = title ? "" : "none";
    const heading = section.querySelector("h3");
    if (heading && title) heading.textContent = title;
  });
}

function renderDrawer(product, mode = "view") {
  const detail = buildProductDetail(product);
  state.activeProduct = product;
  state.drawerMode = mode;
  els.drawer.dataset.mode = mode;
  els.drawer.dataset.drawerKind = "product";
  setDrawerSectionTitles({
    basic: "基础信息",
    material: "面料信息",
    selling: "商品卖点",
    images: "商品图片",
    size: "尺码配置"
  });
  els.drawerTitle.textContent = product.name;
  els.basicInfo.innerHTML = renderBasicInfo(product, detail, mode);
  els.materialInfo.innerHTML = renderMaterialInfo(detail, mode);
  els.sellingPoint.innerHTML = renderSellingPoint(product, mode);
  els.colorImages.innerHTML = renderColorImages(detail, mode);
  els.sizeConfig.innerHTML = renderSizeConfig(detail, mode);
  renderDrawerFooter(mode);
}

function renderTemplateDrawer(template) {
  state.activeTemplate = template;
  state.drawerMode = "template";
  els.drawer.dataset.mode = "template";
  els.drawer.dataset.drawerKind = "template";
  setDrawerSectionTitles({
    basic: "模板信息",
    material: "模板组成",
    selling: "预览图",
    images: "最近使用记录",
    size: ""
  });
  els.drawerTitle.textContent = template.name;
  els.basicInfo.innerHTML = [
    ["模板类型", template.type],
    ["适用品类", template.category],
    ["来源", template.source],
    ["状态", template.status],
    ["使用次数", `${formatUsage(template.usage)}次`],
    ["更新时间", template.updatedAt]
  ].map(([label, value]) => `
    <div class="info-item">
      <span>${label}</span>
      <strong>${value}</strong>
    </div>
  `).join("");
  els.materialInfo.innerHTML = `
    <div class="template-composition">
      <div class="info-item"><span>主图</span><strong>${template.composition.main}</strong></div>
      <div class="info-item"><span>详情图</span><strong>${template.composition.detail}</strong></div>
      <div class="info-item"><span>SKU图</span><strong>${template.composition.sku}</strong></div>
      <div class="info-item"><span>品牌元素</span><strong>${template.composition.brand}</strong></div>
      <div class="info-item"><span>尺码/资质/说明素材</span><strong>${template.composition.material}</strong></div>
    </div>
  `;
  els.sellingPoint.innerHTML = `
    <div class="template-preview-large">
      <img src="${template.image}" alt="${template.name}">
      <p>${template.name}适用于${template.category}品类的${template.typeShort}生成，可从卡片去创作带入创作广场。</p>
    </div>
  `;
  els.colorImages.innerHTML = `
    <div class="record-list">
      ${template.records.map((record) => `
        <div class="record-item">
          <strong>${record}</strong>
          <p>${template.type} · ${template.category}</p>
        </div>
      `).join("")}
    </div>
  `;
  els.sizeConfig.innerHTML = "";
  els.drawerFoot.innerHTML = `
    <button class="btn ghost" type="button" data-template-drawer-edit="${template.id}">编辑模板</button>
    <button class="btn ghost" type="button" data-template-drawer-publish="${template.id}">上架到创作广场</button>
    <button class="btn primary" type="button" data-template-drawer-create="${template.id}">去创作</button>
  `;
}

function openDrawer(productId) {
  const product = products.find((item) => item.id === productId);
  if (!product) return;

  renderDrawer(product, "view");
  els.drawer.classList.add("is-open");
  els.drawerBackdrop.classList.add("is-open");
}

function openTemplateDrawer(templateId) {
  const template = templates.find((item) => item.id === templateId);
  if (!template) return;

  renderTemplateDrawer(template);
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
  if (pageName !== "product-library" || els.drawer.dataset.drawerKind === "template") {
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
  if (els.creationMode) els.creationMode.textContent = mode;
  if (els.creationCost) els.creationCost.textContent = `${getCreationCost(mode)} 融豆`;
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
  button?.classList.toggle("is-filled", uploaded);
  if (label) {
    if (type === "product") {
      label.textContent = uploaded ? "商品图 4 张" : "";
    } else if (type === "reference") {
      label.textContent = uploaded ? "参考图 1 张" : "";
    } else {
      label.textContent = uploaded ? "已选择" : "未选择";
    }
  }
  updateCreationMode();
}

function setCreationTemplate(name, kind) {
  state.creation.template = name;
  state.creation.templateKind = kind;
  if (els.templateLabel) els.templateLabel.textContent = name || "";
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

function getTemplate(templateId) {
  return templates.find((item) => item.id === templateId);
}

function goCreateWithTemplate(templateId) {
  const template = getTemplate(templateId);
  if (!template) return;

  setWorkspacePage("creation-plaza");
  clearMenuActive();
  document.querySelector('[data-single-menu="创作广场"]').classList.add("active");
  setCreationCategory(template.category);
  els.creationPrompt.value = `${template.name}，适用于${template.category}品类，生成符合电商上架标准的${template.typeShort}图片。`;
  setCreationTemplate(template.name, template.type === "套图模板" ? "suite" : "template");
  updateCreationMode();
  closeDrawer();
  showToast(`${template.type === "套图模板" ? "套图创作" : "模板创作"}已带入创作广场`);
}

function openTemplatePublish(templateId) {
  const template = getTemplate(templateId);
  if (!template) return;

  state.publishTemplate = template;
  els.publishName.value = template.name;
  els.publishType.value = template.type;
  els.publishCategory.value = template.category;
  els.publishPrice.value = template.status === "已上架" ? "18 融豆" : "免费";
  els.publishDesc.value = `${template.name}，适合${template.category}品类的${template.typeShort}资源。`;
  els.publishPreview.src = template.image;
  openPrototypeModal(els.templatePublishModal);
}

function submitTemplatePublish() {
  if (!state.publishTemplate) return;
  state.publishTemplate.status = "审核中";
  state.publishTemplate.updatedAt = "2026-07-09 10:30";
  filterTemplates();
  closePrototypeModals();
  closeDrawer();
  showToast("已提交上架审核");
}

function creationRelationText() {
  const relations = [];
  if (state.creation.productUploaded) relations.push("商品图 4 张");
  if (state.creation.referenceUploaded) relations.push("参考图 1 张");
  if (state.creation.modelUploaded) relations.push("模特 1 个");
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

function openResourcePreview(card) {
  state.previewResourceCard = card;
  const image = card.querySelector(".resource-cover img");
  document.querySelector("[data-preview-title]").textContent = card.dataset.title;
  document.querySelector("[data-preview-image]").src = image?.getAttribute("src") || "";
  document.querySelector("[data-preview-category]").textContent = card.dataset.category;
  document.querySelector("[data-preview-type]").textContent = card.dataset.type;
  document.querySelector("[data-preview-source]").textContent = card.dataset.source || "-";
  document.querySelector("[data-preview-price]").textContent = card.dataset.price || "-";
  document.querySelector("[data-preview-usage]").textContent = card.dataset.usage || "-";
  document.querySelector("[data-preview-fit]").textContent = card.dataset.fit || card.dataset.category;
  openPrototypeModal(els.resourcePreviewModal);
}

function renderModelCard(model, index) {
  const genderClass = model.gender.includes("男") ? "model-tag-male" : "model-tag-female";
  const tags = model.tags.map((tag, tagIndex) => {
    const className = tagIndex === 0 ? genderClass : "gray";
    return `<span class="badge ${className}">${tag}</span>`;
  }).join("");
  return `
    <article class="model-card ${index === 0 ? "featured" : ""}" data-model-id="${model.id}" data-model-action="view">
      <div class="model-image model-visual">
        <img src="${model.image}" alt="">
      </div>
      <div class="model-card-body">
        <h3>${model.name}</h3>
        <div class="model-card-tags">${tags}</div>
      </div>
    </article>
  `;
}

function filterModels() {
  const keyword = (els.modelSearch?.value || "").trim().toLowerCase();
  state.filteredModels = state.models.filter((model) => {
    const genderMatched = state.modelGenderFilter === "全部" || model.gender === state.modelGenderFilter;
    const styleMatched = !state.modelStyleFilters.length || state.modelStyleFilters.some((filter) => model.tags.includes(filter) || model.style === filter || model.race === filter);
    const text = [model.name, model.gender, model.age, model.race, model.style, model.category, ...model.tags].join(" ").toLowerCase();
    return genderMatched && styleMatched && (!keyword || text.includes(keyword));
  });
  renderModels();
}

function renderModels() {
  if (!els.modelGrid) return;
  els.modelGrid.innerHTML = state.filteredModels.map(renderModelCard).join("");
  if (els.modelCount) els.modelCount.textContent = `共 ${Math.max(24, state.models.length)} 个模特`;
  const isEmpty = state.filteredModels.length === 0;
  els.modelGrid.style.display = isEmpty ? "none" : "";
  els.modelEmpty?.classList.toggle("is-visible", isEmpty);
}

function getModelCreatePanel() {
  return els.modelCreateModal?.querySelector(".model-create-panel");
}

function getModelSelectionValues() {
  const panel = getModelCreatePanel();
  if (!panel) return [];
  const values = [];
  panel.querySelectorAll(".model-option-grid button.active").forEach((button) => {
    if (button.dataset.value) values.push(button.dataset.value);
  });
  panel.querySelectorAll(".model-text-custom, [data-model-prompt]").forEach((input) => {
    const value = input.value.trim();
    if (value) values.push(value);
  });
  return values;
}

function isModelFormReady() {
  const panel = getModelCreatePanel();
  if (!panel) return false;
  return Array.from(panel.querySelectorAll("[data-model-required]")).every((group) => {
    const field = group.closest(".model-text-field");
    const customValue = field?.querySelector(".model-text-custom")?.value.trim();
    return group.querySelector("button.active") || customValue;
  });
}

function updateModelCreateSummary() {
  const panel = getModelCreatePanel();
  const summary = panel?.querySelector("[data-model-summary]");
  if (!panel || !summary) return;
  const values = getModelSelectionValues();
  summary.innerHTML = "";
  if (!values.length) {
    summary.textContent = "请先选择年龄分段、性别、人种、肤色";
  } else {
    values.slice(0, 12).forEach((value) => {
      const tag = document.createElement("span");
      tag.className = "badge";
      tag.textContent = value;
      summary.append(tag);
    });
  }
  const confirm = panel.querySelector("[data-model-confirm]");
  const generate = panel.querySelector("[data-model-generate]");
  if (confirm) confirm.disabled = !state.modelPreviewReady || !isModelFormReady();
  if (generate) generate.disabled = !isModelFormReady();
}

function setModelCreateState(createState) {
  const panel = getModelCreatePanel();
  if (!panel) return;
  panel.dataset.modelCreateState = createState;
  const generateButton = panel.querySelector("[data-model-generate]");
  const confirmButton = panel.querySelector("[data-model-confirm]");
  state.modelPreviewReady = createState === "complete";
  if (generateButton) {
    generateButton.textContent = createState === "generating" ? "正在生成..." : "生成模特图";
    generateButton.disabled = createState === "generating";
  }
  if (confirmButton) confirmButton.disabled = !state.modelPreviewReady || !isModelFormReady();
}

function resetModelCreateModal() {
  const panel = getModelCreatePanel();
  if (!panel) return;
  window.clearTimeout(state.modelCreateTimer);
  state.modelPreviewReady = false;
  panel.querySelector("[data-model-prompt]").value = "";
  panel.querySelector(".model-text-reference")?.classList.remove("is-analyzed");
  panel.querySelectorAll(".model-option-grid button.active").forEach((button) => button.classList.remove("active"));
  panel.querySelectorAll(".model-text-custom").forEach((input) => {
    input.value = "";
  });
  panel.querySelectorAll("[data-model-section-tab]").forEach((button) => {
    button.classList.toggle("active", button.dataset.modelSectionTab === "basic");
  });
  panel.querySelectorAll("[data-model-section]").forEach((section) => {
    section.classList.toggle("active", section.dataset.modelSection === "basic");
  });
  setModelCreateState("idle");
  updateModelCreateSummary();
}

function openModelCreateModal() {
  resetModelCreateModal();
  openPrototypeModal(els.modelCreateModal);
}

function applyModelReferenceAnalysis() {
  const panel = getModelCreatePanel();
  if (!panel) return;
  panel.querySelector(".model-text-reference")?.classList.add("is-analyzed");
  const values = {
    age: "18-24岁",
    gender: "女性",
    race: "东亚",
    skin: "自然肤色"
  };
  Object.entries(values).forEach(([key, value]) => {
    const group = panel.querySelector(`[data-model-required="${key}"]`);
    group?.querySelectorAll("button").forEach((button) => {
      button.classList.toggle("active", button.dataset.value === value);
    });
  });
  ["长发", "黑发", "鹅蛋脸", "匀称", "正常比例", "通勤"].forEach((value) => {
    const button = panel.querySelector(`.model-option-grid button[data-value="${value}"]`);
    const group = button?.closest(".model-option-grid");
    if (group?.hasAttribute("data-model-single")) {
      group.querySelectorAll("button").forEach((item) => item.classList.toggle("active", item === button));
    } else {
      button?.classList.add("active");
    }
  });
  const prompt = panel.querySelector("[data-model-prompt]");
  if (prompt && !prompt.value.trim()) {
    prompt.value = "参考图分析为年轻亚洲女性，整体通勤自然风，适合服装和箱包商品图。";
  }
  updateModelCreateSummary();
  showToast("参考图特征已填入文生配置");
}

function removeModelReferenceAnalysis() {
  const panel = getModelCreatePanel();
  if (!panel) return;
  panel.querySelector(".model-text-reference")?.classList.remove("is-analyzed");
  updateModelCreateSummary();
  showToast("参考图已删除");
}

function startModelPreviewGeneration() {
  if (!isModelFormReady()) {
    showToast("请先选择年龄分段、性别、人种、肤色");
    return;
  }
  window.clearTimeout(state.modelCreateTimer);
  setModelCreateState("generating");
  state.modelCreateTimer = window.setTimeout(() => {
    const image = getModelCreatePanel()?.querySelector("[data-model-preview-image]");
    if (image) image.src = "../../../AI视频/ai-ecommerce-video-demo/assets/model-detail-source.png";
    setModelCreateState("complete");
    showToast("模特图生成完成");
  }, 1100);
}

function getActiveModelValue(selector, fallback = "") {
  const panel = getModelCreatePanel();
  const group = panel?.querySelector(selector);
  const custom = group?.closest(".model-text-field")?.querySelector(".model-text-custom")?.value.trim();
  return custom || group?.querySelector("button.active")?.dataset.value || fallback;
}

function createModelFromForm() {
  if (!state.modelPreviewReady) {
    startModelPreviewGeneration();
    return;
  }
  if (!isModelFormReady()) {
    showToast("请先选择年龄分段、性别、人种、肤色");
    return;
  }
  const panel = getModelCreatePanel();
  const gender = getActiveModelValue('[data-model-required="gender"]', "女性");
  const age = getActiveModelValue('[data-model-required="age"]', "18-24岁");
  const race = getActiveModelValue('[data-model-required="race"]', "东亚");
  const style = getActiveModelValue('[data-model-section="temperament"] .model-option-grid', "真实感");
  const categoryValues = Array.from(panel.querySelectorAll("[data-model-multi] button.active")).map((button) => button.dataset.value);
  const categoryCustom = panel.querySelector('[data-model-multi]')?.closest(".model-text-field")?.querySelector(".model-text-custom")?.value.trim();
  const name = `${race}${gender}${style}模特`;
  const image = "../../../AI视频/ai-ecommerce-video-demo/assets/model-cover-black-dress.png";
  const raceLabel = race === "东亚" || race === "东南亚" ? "亚洲" : race;
  const model = {
    id: `m${Date.now()}`,
    name,
    gender,
    age,
    race: raceLabel,
    style,
    category: categoryCustom || categoryValues.join("、") || "服装、箱包、配饰",
    status: "可使用",
    usage: 0,
    image,
    tags: [gender, raceLabel, style, "真实感"].filter(Boolean)
  };
  state.models.unshift(model);
  filterModels();
  closePrototypeModals();
  showToast("模特已创建");
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
    if (button.dataset.singleMenu === "模板中心") {
      setWorkspacePage("template-center");
      return;
    }
    if (button.dataset.singleMenu === "模特库") {
      setWorkspacePage("model-library");
      return;
    }
    if (button.dataset.singleMenu === "商品库") {
      setWorkspacePage("product-library");
      return;
    }
    showToast(`${button.dataset.singleMenu}为菜单占位，当前原型仅切换创作广场、模板中心、模特库和商品库`);
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

document.querySelector("[data-record-open]")?.addEventListener("click", () => {
  openPrototypeModal(els.recordModal);
});

document.querySelectorAll("[data-modal-close]").forEach((button) => {
  button.addEventListener("click", closePrototypeModals);
});

document.querySelectorAll(".prototype-modal").forEach((modal) => {
  modal.addEventListener("click", (event) => {
    if (event.target === modal) closePrototypeModals();
  });
});

document.querySelector("[data-model-create-open]")?.addEventListener("click", openModelCreateModal);

els.modelSearch?.addEventListener("input", filterModels);

document.querySelectorAll("[data-model-gender-filter] button").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll("[data-model-gender-filter] button").forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    state.modelGenderFilter = button.dataset.filterValue;
    filterModels();
  });
});

document.querySelectorAll("[data-model-style-filter] button").forEach((button) => {
  button.addEventListener("click", () => {
    button.classList.toggle("active");
    state.modelStyleFilters = Array.from(document.querySelectorAll("[data-model-style-filter] button.active")).map((item) => item.dataset.filterValue);
    filterModels();
  });
});

document.querySelectorAll("[data-model-section-tab]").forEach((button) => {
  button.addEventListener("click", () => {
    const panel = getModelCreatePanel();
    panel?.querySelectorAll("[data-model-section-tab]").forEach((item) => item.classList.remove("active"));
    panel?.querySelectorAll("[data-model-section]").forEach((section) => {
      section.classList.toggle("active", section.dataset.modelSection === button.dataset.modelSectionTab);
    });
    button.classList.add("active");
  });
});

document.querySelectorAll(".model-option-grid button").forEach((button) => {
  button.addEventListener("click", () => {
    const group = button.closest(".model-option-grid");
    if (group?.hasAttribute("data-model-single")) {
      group.querySelectorAll("button").forEach((item) => item.classList.remove("active"));
    }
    button.classList.toggle("active");
    window.clearTimeout(state.modelCreateTimer);
    state.modelPreviewReady = false;
    setModelCreateState("idle");
    updateModelCreateSummary();
  });
});

document.querySelectorAll(".model-text-custom, [data-model-name], [data-model-prompt]").forEach((input) => {
  input.addEventListener("input", () => {
    if (!input.matches("[data-model-name]")) {
      window.clearTimeout(state.modelCreateTimer);
      state.modelPreviewReady = false;
      setModelCreateState("idle");
    }
    updateModelCreateSummary();
  });
});

document.querySelector("[data-model-generate]")?.addEventListener("click", startModelPreviewGeneration);
document.querySelector("[data-model-confirm]")?.addEventListener("click", createModelFromForm);
document.querySelector("[data-model-regenerate]")?.addEventListener("click", startModelPreviewGeneration);
document.querySelector("[data-model-reference]")?.addEventListener("click", applyModelReferenceAnalysis);
document.querySelector("[data-model-reference-remove]")?.addEventListener("click", (event) => {
  event.stopPropagation();
  removeModelReferenceAnalysis();
});

document.addEventListener("click", (event) => {
  const modelAction = event.target.closest("[data-model-action]");
  if (!modelAction) return;
  const card = modelAction.closest("[data-model-id]");
  const model = state.models.find((item) => item.id === card?.dataset.modelId);
  if (!model) return;
  const actionText = { view: "查看", edit: "编辑", use: "使用" }[modelAction.dataset.modelAction] || "操作";
  showToast(`${actionText}模特：${model.name}`);
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
    openResourcePreview(button.closest("[data-resource-card]"));
  });
});

document.querySelector("[data-preview-use]")?.addEventListener("click", () => {
  if (!state.previewResourceCard) return;
  useResource(state.previewResourceCard);
  closePrototypeModals();
});

document.querySelectorAll("[data-template-tab]").forEach((button) => {
  button.addEventListener("click", () => setTemplateTab(button.dataset.templateTab));
});

[els.templateSearch, els.templateTypeFilter, els.templateCategoryFilter, els.templateStatusFilter].forEach((control) => {
  control?.addEventListener("input", filterTemplates);
  control?.addEventListener("change", filterTemplates);
});

document.querySelectorAll("[data-template-create-trigger], [data-template-create-trigger-empty]").forEach((button) => {
  button.addEventListener("click", (event) => {
    event.stopPropagation();
    els.templateCreateMenu.classList.toggle("is-open");
  });
});

document.querySelectorAll("[data-new-template]").forEach((button) => {
  button.addEventListener("click", () => {
    els.templateCreateMenu.classList.remove("is-open");
    showToast(`${button.dataset.newTemplate}创建状态已模拟`);
  });
});

document.querySelector("[data-publish-submit]")?.addEventListener("click", submitTemplatePublish);

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
  const templatePreviewButton = event.target.closest("[data-template-preview]");
  const templateCreateButton = event.target.closest("[data-template-create], [data-template-drawer-create]");
  const templateEditButton = event.target.closest("[data-template-edit], [data-template-drawer-edit]");
  const templatePublishButton = event.target.closest("[data-template-publish], [data-template-drawer-publish]");
  const templateDeleteButton = event.target.closest("[data-template-delete]");

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

  if (templatePreviewButton) {
    openTemplateDrawer(templatePreviewButton.dataset.templatePreview);
    return;
  }

  if (templateCreateButton) {
    goCreateWithTemplate(templateCreateButton.dataset.templateCreate || templateCreateButton.dataset.templateDrawerCreate);
    return;
  }

  if (templateEditButton) {
    showToast("已进入模板编辑状态（原型模拟）");
    return;
  }

  if (templatePublishButton) {
    openTemplatePublish(templatePublishButton.dataset.templatePublish || templatePublishButton.dataset.templateDrawerPublish);
    return;
  }

  if (templateDeleteButton) {
    const template = getTemplate(templateDeleteButton.dataset.templateDelete);
    if (!template) return;
    const index = templates.findIndex((item) => item.id === template.id);
    if (index >= 0) templates.splice(index, 1);
    filterTemplates();
    showToast(`已删除模板：${template.name}`);
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

  if (!event.target.closest(".template-create-wrap")) {
    els.templateCreateMenu?.classList.remove("is-open");
  }
});

els.closeDrawerButtons.forEach((button) => button.addEventListener("click", closeDrawer));
els.drawerBackdrop.addEventListener("click", closeDrawer);

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeDrawer();
    closeCreateMenu();
    closePrototypeModals();
    els.templateCreateMenu?.classList.remove("is-open");
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
filterTemplates();
filterModels();
window.setTimeout(() => {
  els.loadingState.classList.remove("is-visible");
  renderProducts(state.filtered);
  setView("card");
}, 350);
