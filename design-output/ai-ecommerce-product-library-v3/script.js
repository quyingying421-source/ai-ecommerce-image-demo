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

const materialLibrary = [
  {
    id: "mat001",
    name: "Lovera 品牌 Logo 组合",
    type: "品牌元素",
    category: "文胸",
    relatedProduct: "蕾丝聚拢文胸 883",
    source: "自建",
    status: "可使用",
    usage: 1268,
    updatedAt: "2026-07-09 18:20",
    image: "assets/creation-cover-608.jpg",
    tone: "brand",
    spec: "透明背景 / 1200x600",
    scene: "主图角标、详情页品牌区、套图页头",
    description: "包含品牌 Logo、品牌色、标题样式和基础水印，用于统一内衣商品视觉表达。",
    records: ["蕾丝聚拢文胸主图 · 2026-07-09", "无痕内衣详情图 · 2026-07-08"],
    tags: ["Logo", "水印", "品牌色", "文胸"]
  },
  {
    id: "mat002",
    name: "文胸尺码对照表",
    type: "尺码表",
    category: "文胸",
    relatedProduct: "基础无痕内衣套装",
    source: "历史生成",
    status: "可使用",
    usage: 842,
    updatedAt: "2026-07-09 16:35",
    image: "assets/creation-cover-610.jpg",
    tone: "size",
    spec: "详情模块 / 900x1200",
    scene: "详情图尺码区、套图模板尺码说明",
    description: "标准文胸尺码说明模块，适合在详情长图和套图模板中作为固定素材调用。",
    records: ["无痕内衣套图 · 2026-07-09", "蕾丝聚拢文胸详情图 · 2026-07-07"],
    tags: ["尺码", "详情页", "文胸"]
  },
  {
    id: "mat003",
    name: "质检认证与合规标签",
    type: "资质认证",
    category: "通用",
    relatedProduct: "全部商品",
    source: "自建",
    status: "审核中",
    usage: 394,
    updatedAt: "2026-07-08 20:12",
    image: "assets/product-cover-02.png",
    tone: "cert",
    spec: "证书模块 / 1000x720",
    scene: "详情页资质说明、品牌背书模块",
    description: "用于承载质检报告、认证标识和合规标签，减少每次模板创作时重复上传。",
    records: ["四条装男士内裤组合详情图 · 2026-07-08"],
    tags: ["资质", "认证", "合规", "通用"]
  },
  {
    id: "mat004",
    name: "轻薄透气卖点标题组",
    type: "文字模块",
    category: "内裤",
    relatedProduct: "男士冰丝平角裤",
    source: "自建",
    status: "可使用",
    usage: 721,
    updatedAt: "2026-07-08 18:42",
    image: "assets/creation-cover-606.jpg",
    tone: "text",
    spec: "文字样式 / 可编辑",
    scene: "主图卖点、详情页标题、营销海报",
    description: "预置轻薄、透气、冰丝、无勒感等卖点文案样式，可进入在线编辑器二次调整。",
    records: ["男士冰丝平角裤主图 · 2026-07-08", "组合内裤详情图 · 2026-07-07"],
    tags: ["文字", "卖点", "内裤", "可编辑"]
  },
  {
    id: "mat005",
    name: "7天无理由退换说明",
    type: "物流/退换说明",
    category: "通用",
    relatedProduct: "全部商品",
    source: "官方",
    status: "可使用",
    usage: 2310,
    updatedAt: "2026-07-08 12:28",
    image: "assets/product-cover-04.png",
    tone: "service",
    spec: "详情模块 / 900x500",
    scene: "详情页尾部、上架套图售后说明",
    description: "标准售后说明模块，包含退换规则、发货时效和客服承诺。",
    records: ["儿童亲子短袖套装详情页 · 2026-07-08"],
    tags: ["售后", "物流", "退换", "通用"]
  },
  {
    id: "mat006",
    name: "新品直播专享角标",
    type: "营销角标",
    category: "童装",
    relatedProduct: "儿童T恤-详情-1",
    source: "已购买",
    status: "已上架",
    usage: 566,
    updatedAt: "2026-07-07 19:48",
    image: "assets/creation-cover-616.jpg",
    tone: "badge",
    spec: "透明背景 / 600x360",
    scene: "主图、直播间封面、活动海报",
    description: "适合童装活动图使用的新品和直播专享促销角标，可直接叠加到生成图。",
    records: ["童装活动海报 · 2026-07-07"],
    tags: ["角标", "促销", "童装", "透明背景"]
  },
  {
    id: "mat007",
    name: "浅色卧室场景背景",
    type: "背景素材",
    category: "文胸",
    relatedProduct: "蕾丝聚拢文胸 883",
    source: "创作广场复制",
    status: "草稿",
    usage: 88,
    updatedAt: "2026-07-07 14:16",
    image: "assets/creation-cover-602.jpg",
    tone: "background",
    spec: "背景图 / 1536x2048",
    scene: "文胸模特图、详情页首图、扩图背景",
    description: "浅色卧室自然光背景，适合内衣商品主体居中展示和扩图后补背景。",
    records: ["浅色卧室文胸模特图 · 2026-07-07"],
    tags: ["背景", "卧室", "文胸", "扩图"]
  },
  {
    id: "mat008",
    name: "面料工艺说明模块",
    type: "图片模块",
    category: "内裤",
    relatedProduct: "四条装男士内裤组合",
    source: "自建",
    status: "已停用",
    usage: 205,
    updatedAt: "2026-07-06 21:05",
    image: "assets/product-cover-01.png",
    tone: "image",
    spec: "详情模块 / 900x900",
    scene: "详情页材质说明、模板中心拼接",
    description: "旧版面料工艺说明模块，包含面料结构和裆部透气说明，已被新版模块替代。",
    records: ["男士内裤详情旧版 · 2026-07-06"],
    tags: ["面料", "工艺", "详情页", "内裤"]
  }
];

const productSizePresets = ["XS", "S", "M", "L", "XL", "XXL", "3XL", "4XL", "5XL"];
const productParameterPresets = [
  { name: "衣长", unit: "cm" },
  { name: "胸围", unit: "cm" },
  { name: "腰围", unit: "cm" },
  { name: "臀围", unit: "cm" },
  { name: "肩宽", unit: "cm" },
  { name: "袖长", unit: "cm" },
  { name: "袖口", unit: "cm" },
  { name: "下摆", unit: "cm" }
];

const state = {
  products,
  filtered: products,
  templates,
  filteredTemplates: templates,
  models: modelLibrary,
  filteredModels: modelLibrary,
  materials: materialLibrary,
  filteredMaterials: materialLibrary,
  materialTab: "全部",
  activeMaterial: materialLibrary[0],
  modelGenderFilter: "全部",
  modelStyleFilters: [],
  modelCreateTimer: null,
  modelPreviewReady: false,
  templateTab: "全部",
  activeTemplate: templates[0],
  publishTemplate: null,
  publishMaterial: null,
  previewResourceCard: null,
  view: "card",
  activeDate: false,
  activeProduct: products[0],
  drawerMode: "view",
  productEdit: null,
  productEditSeq: 0,
  detailBackPage: "creation-plaza",
  creation: {
    category: "文胸",
    productUploaded: false,
    referenceUploaded: false,
    modelUploaded: false,
    template: "",
    templateKind: "",
    ratio: "3:4",
    resolution: "2K",
    recordSeq: 0,
    detailSeq: 0
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
els.creationTaskCards = Array.from(document.querySelectorAll("[data-creation-task-card]"));
els.creationTaskStatusButtons = Array.from(document.querySelectorAll("[data-creation-task-status]"));
els.creationTaskTypeButtons = Array.from(document.querySelectorAll("[data-creation-task-type]"));
els.creationTaskSearch = document.querySelector("[data-creation-task-search]");
els.creationTaskEmpty = document.querySelector("[data-creation-task-empty]");
els.creationCost = document.querySelector("[data-cost-label]");
els.templateLabel = document.querySelector("[data-template-label]");
els.detailPrompt = document.querySelector("[data-detail-prompt]");
els.detailRatio = document.querySelector("[data-detail-ratio]");
els.detailResolution = document.querySelector("[data-detail-resolution]");
els.detailTaskList = document.querySelector("[data-detail-task-list]");
els.templateModal = document.querySelector("[data-template-modal]");
els.paramModal = document.querySelector("[data-param-modal]");
els.recordModal = document.querySelector("[data-record-modal]");
els.resourcePreviewModal = document.querySelector("[data-resource-preview-modal]");
els.drawerImagePreview = document.querySelector("[data-drawer-image-preview]");
els.drawerImagePreviewImg = document.querySelector("[data-drawer-image-preview-img]");
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
els.materialSearch = document.querySelector("[data-material-search]");
els.materialTypeFilter = document.querySelector("[data-material-type-filter]");
els.materialCategoryFilter = document.querySelector("[data-material-category-filter]");
els.materialStatusFilter = document.querySelector("[data-material-status-filter]");
els.materialGrid = document.querySelector("[data-material-grid]");
els.materialEmptyState = document.querySelector("[data-material-empty-state]");
els.materialNoResultState = document.querySelector("[data-material-no-result-state]");
els.materialCreateMenu = document.querySelector("[data-material-create-menu]");
els.modelGrid = document.querySelector("[data-model-grid]");
els.modelCount = document.querySelector("[data-model-count]");
els.modelEmpty = document.querySelector("[data-model-empty]");
els.modelSearch = document.querySelector("[data-model-search]");
els.modelCreateModal = document.querySelector("[data-model-create-modal]");
els.modelDetailModal = document.querySelector("[data-model-detail-modal]");
els.customParamModal = document.querySelector("[data-custom-param-modal]");
els.customParamName = document.querySelector("[data-custom-parameter-name]");
els.customParamUnit = document.querySelector("[data-custom-parameter-unit]");

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
    已下架: "offline",
    已停用: "offline"
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

function renderMaterialCards(list) {
  if (!els.materialGrid) return;

  els.materialGrid.innerHTML = list.map((material) => `
    <article class="material-card" data-material-id="${material.id}">
      <div class="material-cover ${material.tone}">
        <img src="${material.image}" alt="${material.name}">
        <span class="material-type-badge">${material.type}</span>
      </div>
      <div class="material-card-body">
        <div class="material-title-row">
          <h3>${material.name}</h3>
          <em class="template-status ${templateStatusClass(material.status)}">${material.status}</em>
        </div>
        <div class="material-meta">
          <span>品类：<strong>${material.category}</strong></span>
          <span>关联：<strong>${material.relatedProduct}</strong></span>
          <span>来源：<strong>${material.source}</strong></span>
          <span>使用：<strong>${formatUsage(material.usage)}次</strong></span>
          <span>更新：<strong>${material.updatedAt}</strong></span>
        </div>
        <div class="material-card-actions">
          <button class="primary-action" type="button" data-material-use="${material.id}">使用</button>
          <button type="button" data-material-preview="${material.id}">预览</button>
          <button type="button" data-material-edit="${material.id}">编辑</button>
          <button type="button" data-material-copy="${material.id}">复制</button>
          <button type="button" data-material-publish="${material.id}">上架到创作广场</button>
          <button class="danger-action" type="button" data-material-delete="${material.id}">删除</button>
        </div>
      </div>
    </article>
  `).join("");

  const hasKeyword = Boolean(els.materialSearch?.value.trim());
  const hasFilter = state.materialTab !== "全部" ||
    els.materialTypeFilter?.value !== "全部类型" ||
    els.materialCategoryFilter?.value !== "全部品类" ||
    els.materialStatusFilter?.value !== "全部状态";
  els.materialGrid.classList.toggle("is-hidden", list.length === 0);
  els.materialEmptyState?.classList.toggle("is-visible", materialLibrary.length === 0);
  els.materialNoResultState?.classList.toggle("is-visible", materialLibrary.length > 0 && list.length === 0 && (hasKeyword || hasFilter));
}

function filterMaterials() {
  if (!els.materialGrid) return;
  const keyword = els.materialSearch.value.trim().toLowerCase();
  const type = els.materialTypeFilter.value;
  const category = els.materialCategoryFilter.value;
  const status = els.materialStatusFilter.value;

  state.filteredMaterials = materialLibrary.filter((material) => {
    const haystack = [material.name, material.type, material.category, material.relatedProduct, material.source, material.status, material.description, material.scene, ...material.tags].join(" ").toLowerCase();
    const matchKeyword = !keyword || haystack.includes(keyword);
    const matchTab = state.materialTab === "全部" || material.type === state.materialTab;
    const matchType = type === "全部类型" || material.type === type;
    const matchCategory = category === "全部品类" || material.category === category;
    const matchStatus = status === "全部状态" || material.status === status;
    return matchKeyword && matchTab && matchType && matchCategory && matchStatus;
  });

  renderMaterialCards(state.filteredMaterials);
}

function setMaterialTab(tab) {
  state.materialTab = tab;
  document.querySelectorAll("[data-material-tab]").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.materialTab === tab);
  });
  filterMaterials();
}

function getMaterial(materialId) {
  return materialLibrary.find((item) => item.id === materialId);
}

function renderMaterialDrawer(material) {
  state.activeMaterial = material;
  state.drawerMode = "material";
  els.drawer.dataset.mode = "material";
  els.drawer.dataset.drawerKind = "material";
  setDrawerSectionTitles({
    basic: "素材信息",
    material: "使用场景",
    selling: "预览图",
    images: "最近使用记录",
    size: ""
  });
  els.drawerTitle.textContent = material.name;
  els.basicInfo.innerHTML = [
    ["素材类型", material.type],
    ["适用品类", material.category],
    ["关联商品", material.relatedProduct],
    ["来源", material.source],
    ["状态", material.status],
    ["规格", material.spec],
    ["使用次数", `${formatUsage(material.usage)}次`],
    ["更新时间", material.updatedAt]
  ].map(([label, value]) => `
    <div class="info-item">
      <span>${label}</span>
      <strong>${value}</strong>
    </div>
  `).join("");
  els.materialInfo.innerHTML = `
    <div class="material-scene-list">
      <div class="info-item"><span>调用位置</span><strong>${material.scene}</strong></div>
      <div class="info-item"><span>素材说明</span><strong>${material.description}</strong></div>
      <div class="material-tag-list">
        ${material.tags.map((tag) => `<span>${tag}</span>`).join("")}
      </div>
    </div>
  `;
  els.sellingPoint.innerHTML = `
    <div class="material-preview-large ${material.tone}">
      <img src="${material.image}" alt="${material.name}">
    </div>
  `;
  els.colorImages.innerHTML = `
    <div class="record-list">
      ${material.records.map((record) => `
        <div class="record-item">
          <strong>${record}</strong>
          <p>${material.type} · ${material.category}</p>
        </div>
      `).join("")}
    </div>
  `;
  els.sizeConfig.innerHTML = "";
  els.drawerFoot.innerHTML = `
    <button class="btn ghost" type="button" data-material-drawer-edit="${material.id}">编辑素材</button>
    <button class="btn ghost" type="button" data-material-drawer-publish="${material.id}">上架到创作广场</button>
    <button class="btn primary" type="button" data-material-drawer-use="${material.id}">使用素材</button>
  `;
}

function openMaterialDrawer(materialId) {
  const material = getMaterial(materialId);
  if (!material) return;

  renderMaterialDrawer(material);
  els.drawer.classList.add("is-open");
  els.drawerBackdrop.classList.add("is-open");
}

function useMaterial(materialId) {
  const material = getMaterial(materialId);
  if (!material) return;

  setWorkspacePage("creation-plaza");
  clearMenuActive();
  document.querySelector('[data-single-menu="创作广场"]').classList.add("active");
  if (material.category !== "通用") setCreationCategory(material.category);
  els.creationPrompt.value = `使用素材「${material.name}」，${material.description}`;
  if (["背景素材", "图片模块", "营销角标"].includes(material.type)) {
    setCreationUpload("reference", true);
  }
  updateCreationMode();
  closeDrawer();
  showToast(`已带入创作广场：${material.name}`);
}

function editMaterial(materialId) {
  const material = getMaterial(materialId);
  if (!material) return;

  const editorTypes = ["品牌元素", "文字模块", "营销角标", "背景素材", "图片模块"];
  showToast(editorTypes.includes(material.type) ? "已进入在线编辑器（原型模拟）" : "已进入素材编辑状态（原型模拟）");
}

function copyMaterial(materialId) {
  const material = getMaterial(materialId);
  if (!material) return;

  const copy = {
    ...material,
    id: `mat${Date.now()}`,
    name: `${material.name} 副本`,
    source: "复制",
    status: "草稿",
    usage: 0,
    updatedAt: "2026-07-10 15:30"
  };
  materialLibrary.unshift(copy);
  filterMaterials();
  showToast(`已复制素材：${material.name}`);
}

function openMaterialPublish(materialId) {
  const material = getMaterial(materialId);
  if (!material) return;

  state.publishTemplate = null;
  state.publishMaterial = material;
  els.publishName.value = material.name;
  els.publishType.value = material.type;
  els.publishCategory.value = material.category;
  els.publishPrice.value = material.status === "已上架" ? "8 融豆" : "免费";
  els.publishDesc.value = `${material.name}，适合${material.category}品类在创作、模板和详情图中调用。`;
  els.publishPreview.src = material.image;
  openPrototypeModal(els.templatePublishModal);
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
  if (product.isNew) return buildEmptyProductDetail();

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

function buildEmptyProductDraft() {
  return {
    id: `new-product-${Date.now()}`,
    isNew: true,
    name: "",
    brand: "",
    code: "",
    sku: "",
    category: "",
    status: "待完善",
    statusClass: "status-pending",
    materialCount: 0,
    updatedAt: "",
    image: "",
    points: {
      core: "",
      audience: "",
      scene: "",
      material: ""
    },
    assets: [],
    records: []
  };
}

function buildEmptyProductDetail() {
  return {
    size69: "",
    factoryName: "",
    materials: [{ name: "", desc: "" }],
    colors: [{ name: "新颜色", images: [] }],
    sizes: [],
    parameters: [],
    rows: []
  };
}

function nextProductEditId(prefix) {
  state.productEditSeq += 1;
  return `${prefix}-${state.productEditSeq}`;
}

function parameterLabel(parameter) {
  return parameter.unit ? `${parameter.name}（${parameter.unit}）` : parameter.name;
}

function buildProductEditState(product, detail) {
  const presetSizeSet = new Set(productSizePresets);
  const detailSizeSet = new Set(detail.sizes);
  const selectedPresetSizes = productSizePresets.filter((size) => detailSizeSet.has(size));
  const fallbackSelectedSizes = product.isNew ? [] : selectedPresetSizes.length ? selectedPresetSizes : ["L", "XL", "XXL"];
  const customDetailSizes = detail.sizes.filter((size) => !presetSizeSet.has(size));
  const detailParameterSet = new Set(detail.parameters);
  const selectedPresetParameters = productParameterPresets.filter((parameter) => detailParameterSet.has(parameter.name));
  const fallbackSelectedParameterNames = new Set(
    product.isNew
      ? []
      : selectedPresetParameters.length
      ? selectedPresetParameters.map((parameter) => parameter.name)
      : ["衣长", "胸围", "腰围"]
  );

  return {
    productId: product.id,
    materials: detail.materials.map((material) => ({
      id: nextProductEditId("material"),
      name: material.name,
      desc: material.desc
    })),
    colors: detail.colors.map((color) => ({
      id: nextProductEditId("color"),
      name: color.name,
      images: [...color.images]
    })),
    sizes: [
      ...productSizePresets.map((size) => ({
        id: `size-${size}`,
        name: size,
        selected: fallbackSelectedSizes.includes(size),
        remark: "",
        custom: false
      })),
      ...customDetailSizes.map((size) => ({
        id: nextProductEditId("size"),
        name: size,
        selected: true,
        remark: "",
        custom: true
      }))
    ],
    parameters: productParameterPresets.map((parameter) => ({
      id: `param-${parameter.name}`,
      name: parameter.name,
      unit: parameter.unit,
      selected: fallbackSelectedParameterNames.has(parameter.name),
      custom: false
    })),
    tableValues: {}
  };
}

function getProductEditState(product, detail) {
  if (!state.productEdit || state.productEdit.productId !== product.id) {
    state.productEdit = buildProductEditState(product, detail);
  }
  return state.productEdit;
}

function selectedEditSizes() {
  return state.productEdit?.sizes.filter((size) => size.selected && size.name.trim()) || [];
}

function selectedEditParameters() {
  return state.productEdit?.parameters.filter((parameter) => parameter.selected && parameter.name.trim()) || [];
}

function tableValueKey(sizeId, parameterId) {
  return `${sizeId}::${parameterId}`;
}

function renderBasicInfo(product, detail, mode) {
  const requiredLabels = new Set(["品牌", "商品唯一码", "商品名称", "商品类别", "商品货号"]);
  const placeholders = {
    品牌: "请输入品牌信息",
    商品唯一码: "请输入商品唯一码",
    商品名称: "请输入商品名称",
    商品类别: "请输入商品类别",
    商品货号: "请输入商品货号",
    "69码": "请输入69码",
    工厂名称: "请输入工厂名称"
  };
  const rows = [
    ["品牌", product.brand],
    ["商品唯一码", product.code],
    ["商品名称", product.name],
    ["商品类别", product.category],
    ["商品货号", product.sku],
    ["69码", detail.size69],
    ["工厂名称", detail.factoryName]
  ];

  if (mode === "edit") {
    return rows.map(([label, value]) => `
      <label class="edit-field ${requiredLabels.has(label) ? "is-required" : ""}">
        <span>${label}</span>
        <input class="drawer-control" type="text" value="${value}" placeholder="${placeholders[label] || "请输入"}">
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
    const edit = state.productEdit;
    return edit.materials.map((material) => `
      <div class="edit-material-row" data-edit-material-row="${material.id}">
        <label class="edit-field">
          <span>材质名称</span>
          <input class="drawer-control" type="text" value="${material.name}" placeholder="请输入材质名称" data-edit-material-field="name" data-edit-material-id="${material.id}">
        </label>
        <label class="edit-field">
          <span>材质描述</span>
          <textarea class="drawer-textarea" placeholder="请输入材质描述" data-edit-material-field="desc" data-edit-material-id="${material.id}">${material.desc}</textarea>
        </label>
        <button class="edit-delete-btn" type="button" data-delete-material="${material.id}" aria-label="删除材质"></button>
      </div>
    `).join("");
  }

  return detail.materials.map((material) => `
    <div class="material-row">
      <div>
        <span>材质名称</span>
        <strong>${material.name}</strong>
      </div>
      <div>
        <span>材质描述</span>
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
        <textarea class="drawer-textarea selling-edit" placeholder="请输入商品卖点">${product.points.core}</textarea>
      </label>
    `;
  }

  return `<p>${product.points.core}</p>`;
}

function renderColorImages(detail, mode) {
  if (mode === "edit") {
    const edit = state.productEdit;
    return edit.colors.map((color) => `
      <div class="edit-color-card" data-edit-color-card="${color.id}">
        <div class="edit-color-head">
          <label class="edit-color-name">
            <input type="text" value="${color.name}" style="width: ${Math.max(2, color.name.length)}em;" data-edit-color-name="${color.id}" aria-label="颜色名称">
            <span class="edit-pencil" aria-hidden="true"></span>
          </label>
          <button class="edit-delete-btn" type="button" data-delete-color="${color.id}" aria-label="删除颜色"></button>
        </div>
        <div class="edit-color-image-grid">
          <button class="edit-upload-card" type="button" data-upload-color="${color.id}">
            <span class="upload-icon" aria-hidden="true"></span>
            <strong>上传图片</strong>
            <small>点击或拖拽到此处</small>
          </button>
          ${color.images.map((image, index) => `
            <div class="edit-image-item">
              <button class="edit-image-remove" type="button" data-delete-color-image="${color.id}" data-image-index="${index}" aria-label="删除图片"></button>
              <img src="${image}" alt="${color.name}商品图" data-preview-drawer-image="${image}" data-preview-label="${color.name}">
            </div>
          `).join("")}
        </div>
      </div>
    `).join("");
  }

  return detail.colors.map((color) => `
    <div class="color-image-card">
      <div class="color-image-title">${color.name}</div>
      <div class="color-image-grid">
        ${color.images.map((image) => `<img src="${image}" alt="${color.name}商品图" data-preview-drawer-image="${image}" data-preview-label="${color.name}">`).join("")}
      </div>
    </div>
  `).join("");
}

function renderSizeConfig(detail, mode) {
  if (mode === "edit") {
    const edit = state.productEdit;
    const selectedSizes = selectedEditSizes();
    const selectedParameters = selectedEditParameters();
    const presetSizes = edit.sizes.filter((size) => !size.custom);
    const customSizes = edit.sizes.filter((size) => size.custom);

    const sizeItems = [...presetSizes, ...customSizes].map((size) => `
      <label class="edit-check-item ${size.custom ? "custom-size-item" : ""}">
        <input type="checkbox" ${size.selected ? "checked" : ""} data-edit-size-toggle="${size.id}">
        <span class="check-mark"></span>
        ${size.custom
          ? `<input class="inline-size-input" type="text" value="${size.name}" placeholder="尺码" data-edit-size-name="${size.id}">`
          : `<strong>${size.name}</strong>`}
        <input class="remark-input" type="text" value="${size.remark}" placeholder="备注" data-edit-size-remark="${size.id}">
      </label>
    `).join("");

    const parameterItems = edit.parameters.map((parameter) => `
      <label class="edit-check-item parameter-check">
        <input type="checkbox" ${parameter.selected ? "checked" : ""} data-edit-parameter-toggle="${parameter.id}">
        <span class="check-mark"></span>
        <strong>${parameterLabel(parameter)}</strong>
      </label>
    `).join("");

    const tableRows = selectedSizes.map((size, index) => `
      <tr>
        <td class="size-name-cell">${size.name}</td>
        ${selectedParameters.map((parameter) => `
          <td>
            <input class="table-cell-input" type="text" placeholder="请输入" value="${edit.tableValues[tableValueKey(size.id, parameter.id)] || ""}" data-size-table-value="${size.id}" data-size-table-param="${parameter.id}">
          </td>
        `).join("")}
        <td>
          <div class="size-row-actions">
            <button type="button" data-move-size="${size.id}" data-direction="down" ${index === selectedSizes.length - 1 ? "disabled" : ""}>下移</button>
            <button type="button" data-move-size="${size.id}" data-direction="up" ${index === 0 ? "disabled" : ""}>上移</button>
          </div>
        </td>
      </tr>
    `).join("");

    return `
      <div class="edit-size-config">
        <div class="edit-size-options">
          ${sizeItems}
          <button class="edit-soft-btn" type="button" data-add-custom-size>自定义尺码</button>
        </div>
        <div class="edit-parameter-options">
          <div class="parameter-grid">
            ${parameterItems}
          </div>
          <button class="edit-soft-btn" type="button" data-open-custom-parameter>自定义参数</button>
        </div>
        <div class="size-table-wrap edit-size-table-wrap">
          <table class="size-table edit-size-table">
            <thead>
              <tr>
                <th>尺码</th>
                ${selectedParameters.map((parameter) => `<th>${parameterLabel(parameter)}</th>`).join("")}
                <th>操作</th>
              </tr>
            </thead>
            <tbody>
              ${tableRows || `<tr><td colspan="${selectedParameters.length + 2}" class="edit-empty-cell">请选择尺码和参数</td></tr>`}
            </tbody>
          </table>
        </div>
      </div>
    `;
  }

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

function renderDrawerSectionActions(mode) {
  document.querySelectorAll(".drawer-title-action").forEach((button) => button.remove());
  if (mode !== "edit") return;

  const materialHeading = document.querySelector('[data-drawer-section="material"] h3');
  if (materialHeading) {
    materialHeading.innerHTML = '<span>商品材质</span>';
    const addMaterialButton = document.createElement("button");
    addMaterialButton.className = "drawer-title-action";
    addMaterialButton.type = "button";
    addMaterialButton.dataset.addMaterial = "";
    addMaterialButton.innerHTML = '<b aria-hidden="true">+</b> 新增材质';
    materialHeading.append(addMaterialButton);
  }

  const imageTitle = document.querySelector('[data-drawer-section="images"] .drawer-section-title');
  if (imageTitle) {
    const addColorButton = document.createElement("button");
    addColorButton.className = "drawer-title-action";
    addColorButton.type = "button";
    addColorButton.dataset.addColor = "";
    addColorButton.innerHTML = '<b aria-hidden="true">+</b> 新增颜色';
    imageTitle.append(addColorButton);
  }
}

function renderDrawer(product, mode = "view") {
  const detail = buildProductDetail(product);
  state.activeProduct = product;
  state.drawerMode = mode;
  els.drawer.dataset.mode = mode;
  els.drawer.dataset.drawerKind = "product";
  if (mode === "edit") {
    getProductEditState(product, detail);
  } else {
    state.productEdit = null;
  }
  setDrawerSectionTitles({
    basic: "基础信息",
    material: "商品材质",
    selling: "商品卖点",
    images: "商品图片",
    size: "尺码配置"
  });
  renderDrawerSectionActions(mode);
  els.drawerTitle.textContent = product.isNew ? "新增商品" : mode === "edit" ? "编辑商品" : product.name;
  els.basicInfo.innerHTML = renderBasicInfo(product, detail, mode);
  els.materialInfo.innerHTML = renderMaterialInfo(detail, mode);
  els.sellingPoint.innerHTML = renderSellingPoint(product, mode);
  els.colorImages.innerHTML = renderColorImages(detail, mode);
  els.sizeConfig.innerHTML = renderSizeConfig(detail, mode);
  renderDrawerFooter(mode);
}

function rerenderProductEditDrawer() {
  if (!state.activeProduct || state.drawerMode !== "edit") return;
  renderDrawer(state.activeProduct, "edit");
}

function openCustomParameterModal() {
  if (!els.customParamModal) return;
  els.customParamModal.classList.add("is-open");
  els.customParamModal.setAttribute("aria-hidden", "false");
  if (els.customParamName) els.customParamName.value = "";
  if (els.customParamUnit) els.customParamUnit.value = "";
  window.setTimeout(() => els.customParamName?.focus(), 0);
}

function closeCustomParameterModal() {
  if (!els.customParamModal) return;
  els.customParamModal.classList.remove("is-open");
  els.customParamModal.setAttribute("aria-hidden", "true");
}

function addCustomParameter() {
  if (!state.productEdit) return;
  const name = els.customParamName?.value.trim();
  const unit = els.customParamUnit?.value.trim();
  if (!name) {
    showToast("请输入参数名称");
    return;
  }
  state.productEdit.parameters.push({
    id: nextProductEditId("param"),
    name,
    unit,
    selected: true,
    custom: true
  });
  closeCustomParameterModal();
  rerenderProductEditDrawer();
}

function openDrawerImagePreview(src) {
  if (!src || !els.drawerImagePreview || !els.drawerImagePreviewImg) return;
  els.drawerImagePreviewImg.src = src;
  els.drawerImagePreview.classList.add("is-open");
  els.drawerImagePreview.setAttribute("aria-hidden", "false");
}

function closeDrawerImagePreview() {
  if (!els.drawerImagePreview || !els.drawerImagePreviewImg) return;
  els.drawerImagePreview.classList.remove("is-open");
  els.drawerImagePreview.setAttribute("aria-hidden", "true");
  els.drawerImagePreviewImg.removeAttribute("src");
}

function moveSelectedSize(sizeId, direction) {
  if (!state.productEdit) return;
  const selected = selectedEditSizes();
  const currentSelectedIndex = selected.findIndex((size) => size.id === sizeId);
  const targetSelectedIndex = direction === "up" ? currentSelectedIndex - 1 : currentSelectedIndex + 1;
  if (currentSelectedIndex < 0 || targetSelectedIndex < 0 || targetSelectedIndex >= selected.length) return;
  const currentIndex = state.productEdit.sizes.findIndex((size) => size.id === selected[currentSelectedIndex].id);
  const targetIndex = state.productEdit.sizes.findIndex((size) => size.id === selected[targetSelectedIndex].id);
  const [item] = state.productEdit.sizes.splice(currentIndex, 1);
  state.productEdit.sizes.splice(targetIndex, 0, item);
  rerenderProductEditDrawer();
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

function openCreateProductDrawer() {
  const product = buildEmptyProductDraft();
  state.productEdit = null;
  renderDrawer(product, "edit");
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
  closeCustomParameterModal();
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
  els.body.classList.toggle("is-creation-detail", pageName === "creation-detail");
  closeCreateMenu();
  if (pageName !== "product-library" || els.drawer.dataset.drawerKind !== "product") {
    closeDrawer();
  }
}

function openCreationRecordsPage() {
  setWorkspacePage("creation-records");
  clearMenuActive();
  document.querySelector('[data-single-menu="创作记录"]')?.classList.add("active");
  filterCreationTasks();
}

function filterCreationTasks() {
  if (!els.creationTaskCards.length) return;

  const activeStatus = document.querySelector("[data-creation-task-status].is-active")?.dataset.creationTaskStatus || "all";
  const activeType = document.querySelector("[data-creation-task-type].is-active")?.dataset.creationTaskType || "all";
  const keyword = (els.creationTaskSearch?.value || "").trim().toLowerCase();
  let visibleCount = 0;

  els.creationTaskCards.forEach((card) => {
    const statusMatched = activeStatus === "all" || card.dataset.status === activeStatus;
    const typeMatched = activeType === "all" || card.dataset.type === activeType;
    const text = `${card.dataset.title || ""} ${card.dataset.product || ""}`.toLowerCase();
    const keywordMatched = !keyword || text.includes(keyword);
    const visible = statusMatched && typeMatched && keywordMatched;
    card.style.display = visible ? "" : "none";
    if (visible) visibleCount += 1;
  });

  els.creationTaskEmpty?.classList.toggle("is-active", visibleCount === 0);
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

function syncDetailParamsFromCreation(promptOverride = "") {
  if (!els.detailPrompt) return;
  els.detailPrompt.value = promptOverride || els.creationPrompt.value.trim() || "浅色卧室场景，自然光，文胸模特图，突出商品材质和版型。";
  if (els.detailRatio) els.detailRatio.value = state.creation.ratio;
  if (els.detailResolution) els.detailResolution.value = state.creation.resolution;
  document.querySelector("[data-detail-material-product]").textContent = state.creation.productUploaded ? "商品图 4 张" : "未上传";
  document.querySelector("[data-detail-material-reference]").textContent = state.creation.referenceUploaded ? "参考图 1 张" : "未上传";
  document.querySelector("[data-detail-material-model]").textContent = state.creation.modelUploaded ? "已选择" : "未选择";
  document.querySelector("[data-detail-material-template]").textContent = state.creation.template || "未选择";
}

function getDetailPrompt() {
  return els.detailPrompt?.value.trim() || els.creationPrompt.value.trim() || "按当前参数生成电商商品图。";
}

function detailResultActionsMarkup() {
  return `
    <button type="button" data-result-action="大图">大图</button>
    <button type="button" data-result-action="下载">下载</button>
    <button type="button" data-result-action="保存到素材库">保存到素材库</button>
    <button type="button" data-result-action="扩图">扩图</button>
    <button type="button" data-detail-regenerate>重新生成</button>
    <button type="button" data-result-action="上架到 AI 图片广场">上架到 AI 图片广场</button>
  `;
}

function detailImagesMarkup() {
  return [
    "assets/product-cover-03.png",
    "assets/product-cover-04.png",
    "assets/product-cover-01.png",
    "assets/product-cover-02.png"
  ].map((image) => `<img src="${image}" alt="">`).join("");
}

function updateDetailTaskCard(card, status) {
  const statusNode = card.querySelector("[data-detail-card-status]");
  const resultNode = card.querySelector("[data-detail-card-result]");
  const actionsNode = card.querySelector("[data-detail-card-actions]");
  const map = {
    queued: "排队中",
    running: "生成中",
    done: "已完成",
    failed: "失败"
  };
  statusNode.className = `record-status ${status}`;
  statusNode.textContent = map[status];
  card.className = `detail-task-card ${status}`;
  if (status === "done") {
    resultNode.className = "detail-result-grid";
    resultNode.innerHTML = detailImagesMarkup();
    actionsNode.innerHTML = detailResultActionsMarkup();
  } else {
    resultNode.className = "detail-result-grid pending";
    resultNode.innerHTML = "";
    actionsNode.innerHTML = "";
  }
}

function appendDetailTask({ prompt = "" } = {}) {
  if (!els.detailTaskList) return null;
  state.creation.detailSeq += 1;
  const mode = getCreationMode() === "待识别" ? "自由生图" : getCreationMode();
  const cost = getCreationCost(mode) || 4;
  const taskId = `IMG-20260713-${String(state.creation.detailSeq).padStart(3, "0")}`;
  const taskTitle = state.creation.template || `${state.creation.category}${mode}`;
  const createdAt = "2026-07-13 14:30";
  const card = document.createElement("article");
  card.className = "detail-task-card queued";
  card.innerHTML = `
    <div class="detail-task-card-head">
      <div>
        <span class="record-status queued" data-detail-card-status>排队中</span>
        <strong>${taskTitle}</strong>
      </div>
      <small>${createdAt} · ${taskId} · ${cost} 融豆</small>
    </div>
    <p>${prompt || getDetailPrompt()}</p>
    <small class="detail-task-relation">关联：${creationRelationText()} / ${state.creation.ratio} / ${state.creation.resolution}</small>
    <div class="detail-result-grid pending" data-detail-card-result></div>
    <div class="detail-result-actions" data-detail-card-actions></div>
  `;
  els.detailTaskList.prepend(card);
  window.setTimeout(() => updateDetailTaskCard(card, "running"), 500);
  window.setTimeout(() => {
    updateDetailTaskCard(card, "done");
    showToast("生成完成，结果已展示在任务记录区");
  }, 1600);
  return card;
}

function openCreationDetail({ fromHistory = false, taskTitle = "", productName = "", backPage = "creation-plaza" } = {}) {
  const historyPrompt = taskTitle ? `继续处理「${taskTitle}」，关联商品：${productName || "未指定商品"}。` : "浅色卧室场景，自然光，文胸模特图，突出蕾丝杯面和舒适承托。";
  state.detailBackPage = backPage;
  const backButton = document.querySelector("[data-back-creation]");
  if (backButton) backButton.textContent = backPage === "creation-records" ? "返回创作记录" : "返回创作广场";
  syncDetailParamsFromCreation(fromHistory ? historyPrompt : "");
  setWorkspacePage("creation-detail");
  closePrototypeModals();
  if (!fromHistory && !els.detailTaskList.children.length) {
    appendDetailTask({ initial: true });
  }
}

function clearDetailParams() {
  if (els.detailPrompt) els.detailPrompt.value = "";
  ["product", "reference", "model", "template"].forEach((key) => {
    const node = document.querySelector(`[data-detail-material-${key}]`);
    if (node) node.textContent = key === "model" || key === "template" ? "未选择" : "未上传";
  });
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
  showToast(`${template.type === "套图模板" ? "套图模板" : "模板"}已带入图片创作`);
}

function openTemplatePublish(templateId) {
  const template = getTemplate(templateId);
  if (!template) return;

  state.publishTemplate = template;
  state.publishMaterial = null;
  els.publishName.value = template.name;
  els.publishType.value = template.type;
  els.publishCategory.value = template.category;
  els.publishPrice.value = template.status === "已上架" ? "18 融豆" : "免费";
  els.publishDesc.value = `${template.name}，适合${template.category}品类的${template.typeShort}资源。`;
  els.publishPreview.src = template.image;
  openPrototypeModal(els.templatePublishModal);
}

function submitTemplatePublish() {
  const target = state.publishMaterial || state.publishTemplate;
  if (!target) return;
  target.status = "审核中";
  target.updatedAt = "2026-07-10 15:30";
  filterTemplates();
  filterMaterials();
  state.publishTemplate = null;
  state.publishMaterial = null;
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
        <button type="button" data-open-creation-detail>继续编辑</button>
        <button type="button">扩图</button>
      </div>
    </div>
  `;
  els.creationRecordList.prepend(record);
  syncDetailParamsFromCreation(prompt);
  setWorkspacePage("creation-detail");
  appendDetailTask({ initial: true, prompt });
  showToast("已进入图片创作详情");
  window.setTimeout(() => updateCreationRecord(record, "running"), 700);
  window.setTimeout(() => {
    updateCreationRecord(record, "done");
  }, 1900);
}

function useResource(card) {
  setWorkspacePage("creation-plaza");
  clearMenuActive();
  document.querySelector('[data-single-menu="创作广场"]').classList.add("active");
  setCreationCategory(card.dataset.category);

  if (card.dataset.type === "模板") {
    els.creationPrompt.value = card.dataset.prompt;
    setCreationTemplate(card.dataset.title, "template");
  } else if (card.dataset.type === "套图模板") {
    els.creationPrompt.value = card.dataset.prompt;
    setCreationTemplate(card.dataset.title, "suite");
  } else {
    els.creationPrompt.value = card.dataset.prompt;
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

function modelTagMarkup(model) {
  const genderClass = model.gender.includes("男") ? "model-tag-male" : "model-tag-female";
  return model.tags.map((tag, index) => {
    const className = index === 0 ? genderClass : "gray";
    return `<span class="badge ${className}">${tag}</span>`;
  }).join("");
}

function openModelDetail(modelId) {
  const model = state.models.find((item) => item.id === modelId);
  if (!model || !els.modelDetailModal) return;
  state.activeModel = model;
  const modal = els.modelDetailModal;
  const detailImage = "../../../AI视频/ai-ecommerce-video-demo/assets/model-detail-source.png";
  const createdAt = model.createdAt || "2026-07-10 14:30";

  modal.querySelector("[data-model-detail-name]").textContent = model.name;
  modal.querySelector("[data-model-detail-source-image]").src = detailImage;
  modal.querySelector("[data-model-detail-main-image]").src = detailImage;
  modal.querySelector("[data-model-detail-thumb]").src = detailImage;
  modal.querySelector("[data-model-detail-method]").textContent = model.createMethod || "模特生成";
  modal.querySelector("[data-model-detail-source-desc]").textContent = `${model.name}，适合${model.category}图片创作。`;
  modal.querySelector("[data-model-detail-tags]").innerHTML = modelTagMarkup(model);
  modal.querySelector("[data-model-detail-category]").textContent = model.category;
  modal.querySelector("[data-model-detail-created]").textContent = createdAt;
  openPrototypeModal(modal);
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
  showToast("参考图特征已填入模特生成配置");
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
    populateModelConfirmFields();
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

function getModelSectionFieldValue(sectionName, fieldIndex, fallback = "") {
  const panel = getModelCreatePanel();
  const fields = Array.from(panel?.querySelectorAll(`[data-model-section="${sectionName}"] .model-text-field`) || []);
  const field = fields[fieldIndex];
  const custom = field?.querySelector(".model-text-custom")?.value.trim();
  return custom || field?.querySelector(".model-option-grid button.active")?.dataset.value || fallback;
}

function splitModelTokens(value) {
  return (value || "")
    .split(/[、,，\s]+/)
    .map((item) => item.trim())
    .filter(Boolean);
}

function formatModelTimestamp(date = new Date()) {
  const pad = (value) => String(value).padStart(2, "0");
  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())} ${pad(date.getHours())}:${pad(date.getMinutes())}`;
}

function getModelCreateSnapshot() {
  const panel = getModelCreatePanel();
  const gender = getActiveModelValue('[data-model-required="gender"]', "女性");
  const age = getActiveModelValue('[data-model-required="age"]', "18-24岁");
  const race = getActiveModelValue('[data-model-required="race"]', "东亚");
  const skin = getActiveModelValue('[data-model-required="skin"]', "自然肤色");
  const hair = getModelSectionFieldValue("face", 0, "长发");
  const hairColor = getModelSectionFieldValue("face", 1, "黑发");
  const face = getModelSectionFieldValue("face", 2, "自然五官");
  const body = getModelSectionFieldValue("body", 0, "匀称");
  const proportion = getModelSectionFieldValue("body", 1, "正常比例");
  const style = getModelSectionFieldValue("temperament", 0, "真实感");
  const categoryValues = Array.from(panel?.querySelectorAll("[data-model-multi] button.active") || []).map((button) => button.dataset.value);
  const categoryCustom = panel?.querySelector('[data-model-multi]')?.closest(".model-text-field")?.querySelector(".model-text-custom")?.value.trim();
  const category = categoryCustom || categoryValues.join("、") || "服装、箱包、配饰";
  const prompt = panel?.querySelector("[data-model-prompt]")?.value.trim() || "";
  const raceLabel = race === "东亚" || race === "东南亚" ? "亚洲" : race;
  return {
    gender,
    age,
    race,
    raceLabel,
    skin,
    hair,
    hairColor,
    face,
    body,
    proportion,
    style,
    category,
    prompt,
    name: `${gender}${age}${style}模特`
  };
}

function populateModelConfirmFields() {
  const panel = getModelCreatePanel();
  if (!panel) return;
  const snapshot = getModelCreateSnapshot();
  const fields = {
    "[data-model-confirm-name]": snapshot.name,
    "[data-model-confirm-gender]": snapshot.gender,
    "[data-model-confirm-age]": snapshot.age,
    "[data-model-confirm-style]": snapshot.style,
    "[data-model-confirm-category]": snapshot.category,
    "[data-model-confirm-note]": snapshot.prompt || `${snapshot.gender}${snapshot.age}，${snapshot.style}风格，适合${snapshot.category}图片创作。`
  };
  Object.entries(fields).forEach(([selector, value]) => {
    const input = panel.querySelector(selector);
    if (input) input.value = value;
  });

  const attributes = [
    `性别 ${snapshot.gender}`,
    `年龄 ${snapshot.age}`,
    `风格 ${snapshot.style}`,
    `人种 ${snapshot.race}`,
    `肤色 ${snapshot.skin}`,
    `发型 ${snapshot.hair}`,
    `发色 ${snapshot.hairColor}`,
    `脸型 ${snapshot.face}`,
    `体型 ${snapshot.body}`,
    `比例 ${snapshot.proportion}`
  ];
  const attributeBox = panel.querySelector("[data-model-ai-attributes]");
  if (attributeBox) {
    attributeBox.innerHTML = "";
    attributes.forEach((item) => {
      const tag = document.createElement("span");
      tag.className = "model-ai-attribute";
      tag.textContent = item;
      attributeBox.append(tag);
    });
  }
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
  const snapshot = getModelCreateSnapshot();
  const name = panel.querySelector("[data-model-confirm-name]")?.value.trim() || snapshot.name;
  const gender = panel.querySelector("[data-model-confirm-gender]")?.value.trim() || snapshot.gender;
  const age = panel.querySelector("[data-model-confirm-age]")?.value.trim() || snapshot.age;
  const style = panel.querySelector("[data-model-confirm-style]")?.value.trim() || snapshot.style;
  const category = panel.querySelector("[data-model-confirm-category]")?.value.trim() || snapshot.category;
  const note = panel.querySelector("[data-model-confirm-note]")?.value.trim() || snapshot.prompt;
  if (!name) {
    showToast("请填写模特名称");
    return;
  }
  const image = "../../../AI视频/ai-ecommerce-video-demo/assets/model-cover-black-dress.png";
  const createdAt = formatModelTimestamp();
  const styleTags = splitModelTokens(style);
  const model = {
    id: `m${Date.now()}`,
    name,
    gender,
    age,
    race: snapshot.raceLabel,
    style,
    category,
    status: "可使用",
    usage: 0,
    image,
    sourceType: "模特生成",
    sourceNote: "单图生成资产",
    createMethod: "模特生成",
    createdAt,
    updatedAt: createdAt,
    note,
    tags: [gender, snapshot.raceLabel, ...styleTags].filter(Boolean)
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
    if (button.dataset.singleMenu === "素材库") {
      setWorkspacePage("material-library");
      return;
    }
    if (button.dataset.singleMenu === "商品库") {
      setWorkspacePage("product-library");
      return;
    }
    if (button.dataset.singleMenu === "创作记录") {
      setWorkspacePage("creation-records");
      filterCreationTasks();
      return;
    }
    showToast(`${button.dataset.singleMenu}为菜单占位，当前原型仅切换创作广场、模板中心、模特库、素材库、商品库和创作记录`);
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
  openCreationRecordsPage();
});

els.creationTaskStatusButtons.forEach((button) => {
  button.addEventListener("click", () => {
    els.creationTaskStatusButtons.forEach((item) => item.classList.toggle("is-active", item === button));
    filterCreationTasks();
  });
});

els.creationTaskTypeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    els.creationTaskTypeButtons.forEach((item) => item.classList.toggle("is-active", item === button));
    filterCreationTasks();
  });
});

els.creationTaskSearch?.addEventListener("input", filterCreationTasks);

document.querySelector("[data-back-creation]")?.addEventListener("click", () => {
  if (state.detailBackPage === "creation-records") {
    openCreationRecordsPage();
    return;
  }
  setWorkspacePage("creation-plaza");
  clearMenuActive();
  document.querySelector('[data-single-menu="创作广场"]')?.classList.add("active");
});

document.querySelectorAll("[data-detail-upload]").forEach((button) => {
  button.addEventListener("click", () => {
    const type = button.dataset.detailUpload;
    const label = document.querySelector(`[data-detail-material-${type}]`);
    if (label) {
      label.textContent = {
        product: "商品图 4 张",
        reference: "参考图 1 张",
        model: "已选择",
        template: state.creation.template || "蓝调棚拍主图模板"
      }[type];
    }
    if (type !== "template") setCreationUpload(type, true);
    if (type === "template") setCreationTemplate("蓝调棚拍主图模板", "template");
    showToast("素材已更新");
  });
});

document.querySelector("[data-detail-regenerate]")?.addEventListener("click", () => {
  if (els.detailRatio) state.creation.ratio = els.detailRatio.value;
  if (els.detailResolution) state.creation.resolution = els.detailResolution.value;
  appendDetailTask({ prompt: getDetailPrompt() });
  showToast("已提交重新生成任务");
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
  if (modelAction.dataset.modelAction === "view") {
    openModelDetail(model.id);
    return;
  }
  const actionText = { edit: "编辑", use: "使用" }[modelAction.dataset.modelAction] || "操作";
  showToast(`${actionText}模特：${model.name}`);
});

document.querySelectorAll("[data-model-detail-use]").forEach((button) => {
  button.addEventListener("click", () => {
    if (!state.activeModel) return;
    setWorkspacePage("creation-plaza");
    clearMenuActive();
    document.querySelector('[data-single-menu="创作广场"]').classList.add("active");
    els.creationPrompt.value = `使用${state.activeModel.name}，生成适合${state.activeModel.category}的电商商品图。`;
    setCreationUpload("reference", true);
    updateCreationMode();
    closePrototypeModals();
    showToast(`已使用模特：${state.activeModel.name}`);
  });
});

document.querySelector("[data-model-detail-edit]")?.addEventListener("click", () => {
  if (!state.activeModel) return;
  showToast(`编辑模特：${state.activeModel.name}`);
});

document.querySelector("[data-model-detail-delete]")?.addEventListener("click", () => {
  if (!state.activeModel) return;
  const index = state.models.findIndex((item) => item.id === state.activeModel.id);
  if (index >= 0) state.models.splice(index, 1);
  filterModels();
  closePrototypeModals();
  showToast("模特已删除");
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

document.querySelectorAll("[data-material-tab]").forEach((button) => {
  button.addEventListener("click", () => setMaterialTab(button.dataset.materialTab));
});

[els.materialSearch, els.materialTypeFilter, els.materialCategoryFilter, els.materialStatusFilter].forEach((control) => {
  control?.addEventListener("input", filterMaterials);
  control?.addEventListener("change", filterMaterials);
});

document.querySelectorAll("[data-material-create-trigger], [data-material-create-trigger-empty]").forEach((button) => {
  button.addEventListener("click", (event) => {
    event.stopPropagation();
    els.materialCreateMenu?.classList.toggle("is-open");
  });
});

document.querySelectorAll("[data-new-material]").forEach((button) => {
  button.addEventListener("click", () => {
    els.materialCreateMenu?.classList.remove("is-open");
    const editorTypes = ["品牌元素", "文字模块", "图片模块", "营销角标", "背景素材"];
    showToast(editorTypes.includes(button.dataset.newMaterial) ? "已进入在线编辑器（原型模拟）" : "已进入素材编辑状态（原型模拟）");
  });
});

els.searchInput.addEventListener("input", filterProducts);
els.filters.forEach((select) => select.addEventListener("change", filterProducts));
els.resetButtons.forEach((button) => button.addEventListener("click", resetFilters));
els.viewButtons.forEach((button) => {
  button.addEventListener("click", () => setView(button.dataset.view));
});

document.addEventListener("click", (event) => {
  const addProductButton = event.target.closest("[data-add-product]");
  const detailButton = event.target.closest("[data-detail]");
  const createButton = event.target.closest("[data-create]");
  const popoverAction = event.target.closest("[data-create-action]");
  const editDrawerButton = event.target.closest("[data-edit-drawer]");
  const cancelEditButton = event.target.closest("[data-cancel-edit]");
  const saveEditButton = event.target.closest("[data-save-edit]");
  const addMaterialButton = event.target.closest("[data-add-material]");
  const deleteMaterialButton = event.target.closest("[data-delete-material]");
  const addColorButton = event.target.closest("[data-add-color]");
  const deleteColorButton = event.target.closest("[data-delete-color]");
  const deleteColorImageButton = event.target.closest("[data-delete-color-image]");
  const drawerImagePreview = event.target.closest("[data-preview-drawer-image]");
  const closeDrawerImagePreviewButton = event.target.closest("[data-close-drawer-image-preview]");
  const addCustomSizeButton = event.target.closest("[data-add-custom-size]");
  const moveSizeButton = event.target.closest("[data-move-size]");
  const openCustomParameterButton = event.target.closest("[data-open-custom-parameter]");
  const closeCustomParameterButton = event.target.closest("[data-close-custom-parameter]");
  const confirmCustomParameterButton = event.target.closest("[data-confirm-custom-parameter]");
  const templatePreviewButton = event.target.closest("[data-template-preview]");
  const templateCreateButton = event.target.closest("[data-template-create], [data-template-drawer-create]");
  const templateEditButton = event.target.closest("[data-template-edit], [data-template-drawer-edit]");
  const templatePublishButton = event.target.closest("[data-template-publish], [data-template-drawer-publish]");
  const templateDeleteButton = event.target.closest("[data-template-delete]");
  const materialPreviewButton = event.target.closest("[data-material-preview]");
  const materialUseButton = event.target.closest("[data-material-use], [data-material-drawer-use]");
  const materialEditButton = event.target.closest("[data-material-edit], [data-material-drawer-edit]");
  const materialCopyButton = event.target.closest("[data-material-copy]");
  const materialPublishButton = event.target.closest("[data-material-publish], [data-material-drawer-publish]");
  const materialDeleteButton = event.target.closest("[data-material-delete]");
  const openCreationDetailButton = event.target.closest("[data-open-creation-detail]");
  const resultActionButton = event.target.closest("[data-result-action]");
  const historyRegenerateButton = event.target.closest("[data-history-regenerate]");
  const detailRegenerateButton = event.target.closest(".detail-result-actions [data-detail-regenerate]");

  if (addProductButton) {
    openCreateProductDrawer();
    closeCreateMenu();
    return;
  }

  if (closeDrawerImagePreviewButton) {
    closeDrawerImagePreview();
    return;
  }

  if (openCreationDetailButton) {
    const taskCard = openCreationDetailButton.closest("[data-creation-task-card]");
    openCreationDetail({
      fromHistory: true,
      taskTitle: taskCard?.dataset.title || "",
      productName: taskCard?.dataset.product || "",
      backPage: taskCard ? "creation-records" : "creation-plaza"
    });
    return;
  }

  if (historyRegenerateButton || detailRegenerateButton) {
    appendDetailTask({ prompt: getDetailPrompt() });
    showToast("已按该任务参数重新生成");
    return;
  }

  if (resultActionButton) {
    const action = resultActionButton.dataset.resultAction;
    if (action === "大图") {
      document.querySelector("[data-preview-title]").textContent = "生成结果大图";
      document.querySelector("[data-preview-image]").src = "assets/product-cover-03.png";
      document.querySelector("[data-preview-category]").textContent = state.creation.category;
      document.querySelector("[data-preview-type]").textContent = "生成结果";
      document.querySelector("[data-preview-source]").textContent = "图片创作详情";
      document.querySelector("[data-preview-price]").textContent = "-";
      document.querySelector("[data-preview-usage]").textContent = "-";
      document.querySelector("[data-preview-fit]").textContent = "当前商品";
      openPrototypeModal(els.resourcePreviewModal);
    } else {
      showToast(`${action}入口已展示`);
    }
    return;
  }

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
    if (state.activeProduct?.isNew) {
      closeDrawer();
      return;
    }
    renderDrawer(state.activeProduct, "view");
    return;
  }

  if (saveEditButton) {
    if (state.activeProduct?.isNew) {
      showToast("商品已新增");
      closeDrawer();
      return;
    }
    showToast("编辑内容已保存");
    renderDrawer(state.activeProduct, "view");
    return;
  }

  if (addMaterialButton && state.productEdit) {
    state.productEdit.materials.push({
      id: nextProductEditId("material"),
      name: "",
      desc: ""
    });
    rerenderProductEditDrawer();
    return;
  }

  if (deleteMaterialButton && state.productEdit) {
    state.productEdit.materials = state.productEdit.materials.filter((material) => material.id !== deleteMaterialButton.dataset.deleteMaterial);
    rerenderProductEditDrawer();
    return;
  }

  if (addColorButton && state.productEdit) {
    state.productEdit.colors.push({
      id: nextProductEditId("color"),
      name: "新颜色",
      images: []
    });
    rerenderProductEditDrawer();
    return;
  }

  if (deleteColorButton && state.productEdit) {
    state.productEdit.colors = state.productEdit.colors.filter((color) => color.id !== deleteColorButton.dataset.deleteColor);
    rerenderProductEditDrawer();
    return;
  }

  if (deleteColorImageButton && state.productEdit) {
    const color = state.productEdit.colors.find((item) => item.id === deleteColorImageButton.dataset.deleteColorImage);
    const index = Number(deleteColorImageButton.dataset.imageIndex);
    if (color && Number.isInteger(index)) color.images.splice(index, 1);
    rerenderProductEditDrawer();
    return;
  }

  if (drawerImagePreview) {
    openDrawerImagePreview(drawerImagePreview.dataset.previewDrawerImage || drawerImagePreview.getAttribute("src"));
    return;
  }

  if (addCustomSizeButton && state.productEdit) {
    state.productEdit.sizes.push({
      id: nextProductEditId("size"),
      name: "自定义尺码",
      selected: true,
      remark: "",
      custom: true
    });
    rerenderProductEditDrawer();
    return;
  }

  if (moveSizeButton) {
    moveSelectedSize(moveSizeButton.dataset.moveSize, moveSizeButton.dataset.direction);
    return;
  }

  if (openCustomParameterButton) {
    openCustomParameterModal();
    return;
  }

  if (closeCustomParameterButton) {
    closeCustomParameterModal();
    return;
  }

  if (confirmCustomParameterButton) {
    addCustomParameter();
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

  if (materialPreviewButton) {
    openMaterialDrawer(materialPreviewButton.dataset.materialPreview);
    return;
  }

  if (materialUseButton) {
    useMaterial(materialUseButton.dataset.materialUse || materialUseButton.dataset.materialDrawerUse);
    return;
  }

  if (materialEditButton) {
    editMaterial(materialEditButton.dataset.materialEdit || materialEditButton.dataset.materialDrawerEdit);
    return;
  }

  if (materialCopyButton) {
    copyMaterial(materialCopyButton.dataset.materialCopy);
    return;
  }

  if (materialPublishButton) {
    openMaterialPublish(materialPublishButton.dataset.materialPublish || materialPublishButton.dataset.materialDrawerPublish);
    return;
  }

  if (materialDeleteButton) {
    const material = getMaterial(materialDeleteButton.dataset.materialDelete);
    if (!material) return;
    const index = materialLibrary.findIndex((item) => item.id === material.id);
    if (index >= 0) materialLibrary.splice(index, 1);
    filterMaterials();
    showToast(`已删除素材：${material.name}`);
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

  if (!event.target.closest(".material-create-wrap")) {
    els.materialCreateMenu?.classList.remove("is-open");
  }
});

document.addEventListener("input", (event) => {
  if (!state.productEdit) return;
  const materialField = event.target.closest("[data-edit-material-field]");
  const colorName = event.target.closest("[data-edit-color-name]");
  const sizeRemark = event.target.closest("[data-edit-size-remark]");
  const sizeName = event.target.closest("[data-edit-size-name]");
  const tableValue = event.target.closest("[data-size-table-value]");

  if (materialField) {
    const material = state.productEdit.materials.find((item) => item.id === materialField.dataset.editMaterialId);
    if (material) material[materialField.dataset.editMaterialField] = materialField.value;
    return;
  }

  if (colorName) {
    const color = state.productEdit.colors.find((item) => item.id === colorName.dataset.editColorName);
    if (color) color.name = colorName.value;
    colorName.style.width = `${Math.max(2, colorName.value.length)}em`;
    return;
  }

  if (sizeRemark) {
    const size = state.productEdit.sizes.find((item) => item.id === sizeRemark.dataset.editSizeRemark);
    if (size) size.remark = sizeRemark.value;
    return;
  }

  if (sizeName) {
    const size = state.productEdit.sizes.find((item) => item.id === sizeName.dataset.editSizeName);
    if (size) size.name = sizeName.value;
    return;
  }

  if (tableValue) {
    state.productEdit.tableValues[tableValueKey(tableValue.dataset.sizeTableValue, tableValue.dataset.sizeTableParam)] = tableValue.value;
  }
});

document.addEventListener("change", (event) => {
  if (!state.productEdit) return;
  const sizeToggle = event.target.closest("[data-edit-size-toggle]");
  const parameterToggle = event.target.closest("[data-edit-parameter-toggle]");

  if (sizeToggle) {
    const size = state.productEdit.sizes.find((item) => item.id === sizeToggle.dataset.editSizeToggle);
    if (size) size.selected = sizeToggle.checked;
    rerenderProductEditDrawer();
    return;
  }

  if (parameterToggle) {
    const parameter = state.productEdit.parameters.find((item) => item.id === parameterToggle.dataset.editParameterToggle);
    if (parameter) parameter.selected = parameterToggle.checked;
    rerenderProductEditDrawer();
  }
});

els.customParamModal?.addEventListener("click", (event) => {
  if (event.target === els.customParamModal) closeCustomParameterModal();
});

els.drawerImagePreview?.addEventListener("click", (event) => {
  if (event.target === els.drawerImagePreview) closeDrawerImagePreview();
});

els.closeDrawerButtons.forEach((button) => button.addEventListener("click", closeDrawer));
els.drawerBackdrop.addEventListener("click", closeDrawer);

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    if (els.drawerImagePreview?.classList.contains("is-open")) {
      closeDrawerImagePreview();
      return;
    }
    closeCustomParameterModal();
    closeDrawer();
    closeCreateMenu();
    closePrototypeModals();
    els.templateCreateMenu?.classList.remove("is-open");
    els.materialCreateMenu?.classList.remove("is-open");
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
filterMaterials();
filterModels();
window.setTimeout(() => {
  els.loadingState.classList.remove("is-visible");
  renderProducts(state.filtered);
  setView("card");
}, 350);
