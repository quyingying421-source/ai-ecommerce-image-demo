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
    name: "童装上衣模板-1",
    description: "童装主图与详情图组合模板，适合活动套图复刻。",
    category: "童装",
    brand: "Carter Kids",
    scope: "我的模板",
    groups: ["主图", "详情图"],
    usage: 12430,
    updatedAt: "2026-07-15 18:20",
    tags: ["童装", "主图", "详情图"],
    items: [
      { id: "tpl001-1", title: "售后说明条", group: "详情图", purpose: "固定插入", source: "素材库", image: "assets/creation-cover-602.jpg" },
      { id: "tpl001-2", title: "户外童装模特图", group: "主图", purpose: "参考生成", source: "历史创作", image: "assets/creation-cover-608.jpg" },
      { id: "tpl001-3", title: "童装场景图", group: "详情图", purpose: "参考生成", source: "历史创作", image: "assets/creation-cover-610.jpg" }
    ]
  },
  {
    id: "tpl002",
    name: "童装-测试1",
    description: "品牌头图、主图和活动详情图组合。",
    category: "童装",
    brand: "Carter Kids",
    scope: "我的模板",
    groups: ["主图", "详情图", "SKU图"],
    usage: 5821,
    updatedAt: "2026-07-15 16:12",
    tags: ["套图", "童装", "SKU"],
    items: [
      { id: "tpl002-1", title: "30天售后品牌条", group: "详情图", purpose: "固定插入", source: "素材库", image: "assets/creation-cover-602.jpg" },
      { id: "tpl002-2", title: "童装蓝天主图", group: "主图", purpose: "参考生成", source: "历史创作", image: "assets/product-cover-04.png" },
      { id: "tpl002-3", title: "组合 SKU 展示", group: "SKU图", purpose: "参考生成", source: "本地上传", image: "assets/product-cover-02.png" },
      { id: "tpl002-4", title: "亲子详情图", group: "详情图", purpose: "参考生成", source: "历史创作", image: "assets/creation-cover-610.jpg" }
    ]
  },
  {
    id: "tpl003",
    name: "女装内衣模板5",
    description: "文胸详情长图模板，含卖点说明与模特参考。",
    category: "文胸",
    brand: "Lovera",
    scope: "已购模板",
    groups: ["详情图"],
    usage: 3428,
    updatedAt: "2026-07-14 20:34",
    tags: ["文胸", "详情图", "内衣"],
    items: [
      { id: "tpl003-1", title: "聚拢有型文字图", group: "详情图", purpose: "固定插入", source: "文字素材", image: "assets/creation-cover-606.jpg" },
      { id: "tpl003-2", title: "文胸模特参考", group: "详情图", purpose: "参考生成", source: "历史创作", image: "assets/creation-cover-616.jpg" }
    ]
  },
  {
    id: "tpl004",
    name: "测试616",
    description: "内衣主图模板，卧室场景与模特姿态参考。",
    category: "文胸",
    brand: "Lovera",
    scope: "我的模板",
    groups: ["主图"],
    usage: 667,
    updatedAt: "2026-07-14 15:10",
    tags: ["主图", "文胸", "模特"],
    items: [
      { id: "tpl004-1", title: "卧室内衣主图", group: "主图", purpose: "参考生成", source: "历史创作", image: "assets/creation-cover-616.jpg" },
      { id: "tpl004-2", title: "尺码说明固定图", group: "主图", purpose: "固定插入", source: "素材库", image: "assets/product-cover-03.png" }
    ]
  },
  {
    id: "tpl005",
    name: "内裤多色 SKU 模板",
    description: "多色内裤 SKU 展示模板。",
    category: "内裤",
    brand: "Softline",
    scope: "我的模板",
    groups: ["SKU图"],
    usage: 913,
    updatedAt: "2026-07-13 19:28",
    tags: ["SKU", "内裤", "多色"],
    items: [
      { id: "tpl005-1", title: "多色内裤平铺", group: "SKU图", purpose: "参考生成", source: "本地上传", image: "assets/product-cover-01.png" },
      { id: "tpl005-2", title: "浅色内裤 SKU", group: "SKU图", purpose: "参考生成", source: "历史创作", image: "assets/product-cover-02.png" }
    ]
  },
  {
    id: "tpl006",
    name: "童装详情页模板-2",
    description: "童装详情图模板，适合活动卖点与模特图组合。",
    category: "童装",
    brand: "Carter Kids",
    scope: "我的模板",
    groups: ["详情图"],
    usage: 428,
    updatedAt: "2026-07-12 17:20",
    tags: ["童装", "详情图"],
    items: [
      { id: "tpl006-1", title: "童装户外详情", group: "详情图", purpose: "参考生成", source: "历史创作", image: "assets/creation-cover-608.jpg" },
      { id: "tpl006-2", title: "童装蓝天详情", group: "详情图", purpose: "参考生成", source: "历史创作", image: "assets/creation-cover-610.jpg" }
    ]
  },
  {
    id: "tpl007",
    name: "文胸主图模板-浅色",
    description: "文胸主图参考模板，适合浅色背景棚拍。",
    category: "文胸",
    brand: "Lovera",
    scope: "已购模板",
    groups: ["主图"],
    usage: 1260,
    updatedAt: "2026-07-12 15:48",
    tags: ["文胸", "主图"],
    items: [
      { id: "tpl007-1", title: "浅色文胸主图", group: "主图", purpose: "参考生成", source: "历史创作", image: "assets/creation-cover-616.jpg" }
    ]
  },
  {
    id: "tpl008",
    name: "内裤详情+SKU组合",
    description: "内裤详情图与 SKU 展示组合模板。",
    category: "内裤",
    brand: "Softline",
    scope: "我的模板",
    groups: ["详情图", "SKU图"],
    usage: 735,
    updatedAt: "2026-07-11 14:36",
    tags: ["内裤", "详情图", "SKU"],
    items: [
      { id: "tpl008-1", title: "详情卖点图", group: "详情图", purpose: "固定插入", source: "素材库", image: "assets/creation-cover-602.jpg" },
      { id: "tpl008-2", title: "多色 SKU 平铺", group: "SKU图", purpose: "参考生成", source: "本地上传", image: "assets/product-cover-01.png" }
    ]
  },
  {
    id: "tpl009",
    name: "箱包套图模板",
    description: "箱包主图、详情图和 SKU 组合模板。",
    category: "箱包",
    brand: "Urban Bag",
    scope: "已购模板",
    groups: ["主图", "详情图", "SKU图"],
    usage: 319,
    updatedAt: "2026-07-10 19:05",
    tags: ["箱包", "套图"],
    items: [
      { id: "tpl009-1", title: "箱包主图", group: "主图", purpose: "参考生成", source: "历史创作", image: "assets/product-cover-02.png" },
      { id: "tpl009-2", title: "箱包详情说明", group: "详情图", purpose: "固定插入", source: "素材库", image: "assets/product-cover-03.png" }
    ]
  },
  {
    id: "tpl010",
    name: "鞋子 SKU 展示模板",
    description: "鞋子多规格 SKU 展示模板。",
    category: "鞋子",
    brand: "StepGo",
    scope: "我的模板",
    groups: ["SKU图"],
    usage: 205,
    updatedAt: "2026-07-09 13:42",
    tags: ["鞋子", "SKU"],
    items: [
      { id: "tpl010-1", title: "鞋子 SKU 展示", group: "SKU图", purpose: "参考生成", source: "本地上传", image: "assets/product-cover-04.png" }
    ]
  }
];

// 模块模板与套图模板分别维护：套图模板用于编排可复用的整套创作方法，
// 两类模板的数据与操作互不改写。
const suiteSolutions = templates.map((template) => ({
  ...template,
  scope: template.scope === "我的模板" ? "我的套图模板" : "已购套图模板",
  tags: [...template.tags],
  groups: [...template.groups],
  items: template.items.map((item) => ({ ...item }))
}));

const modelLibrary = [
  {
    id: "m001",
    name: "都市通勤女模特",
    gender: "女性",
    age: "25-34岁",
    creator: "AI 模特工场",
    skin: "自然肤色",
    race: "亚洲",
    style: "商务",
    category: "女装、箱包、配饰",
    status: "可使用",
    usage: 1286,
    image: "assets/model-cover-black-dress.png",
    tags: ["女性", "亚洲", "商务", "真实感"]
  },
  {
    id: "m002",
    name: "户外休闲男模特",
    gender: "男性",
    age: "25-34岁",
    creator: "AI 模特工场",
    skin: "小麦肤色",
    race: "亚洲",
    style: "休闲",
    category: "男装、鞋子、箱包",
    status: "可使用",
    usage: 963,
    image: "assets/model-cover-black-dress.png",
    tags: ["男性", "亚洲", "休闲", "真实感"]
  },
  {
    id: "m003",
    name: "欧美轻奢女模特",
    gender: "女性",
    age: "18-24岁",
    creator: "Ava 创作组",
    skin: "白皙肤色",
    race: "欧美",
    style: "轻奢",
    category: "文胸、女装、配饰",
    status: "可使用",
    usage: 742,
    image: "assets/model-cover-black-dress.png",
    tags: ["女性", "欧美", "轻奢", "真实感"]
  },
  {
    id: "m004",
    name: "童装活力女童模特",
    gender: "女童",
    age: "7-12岁",
    creator: "童装创作组",
    skin: "自然肤色",
    race: "亚洲",
    style: "休闲",
    category: "童装、亲子用品",
    status: "可使用",
    usage: 681,
    image: "assets/model-cover-black-dress.png",
    tags: ["女童", "亚洲", "休闲", "真实感"]
  },
  {
    id: "m005",
    name: "商务西装男模特",
    gender: "男性",
    age: "35-44岁",
    creator: "Ava 创作组",
    skin: "深色肤色",
    race: "欧美",
    style: "商务",
    category: "男装、箱包、配饰",
    status: "可使用",
    usage: 526,
    image: "assets/model-cover-black-dress.png",
    tags: ["男性", "欧美", "商务", "真实感"]
  },
  {
    id: "m006",
    name: "东方古风女模特",
    gender: "女性",
    age: "18-24岁",
    creator: "AI 模特工场",
    skin: "白皙肤色",
    race: "亚洲",
    style: "古风",
    category: "女装、配饰",
    status: "可使用",
    usage: 318,
    image: "assets/model-cover-black-dress.png",
    tags: ["女性", "亚洲", "古风", "真实感"]
  },
  {
    id: "m007",
    name: "运动活力男童模特",
    gender: "男童",
    age: "7-12岁",
    creator: "童装创作组",
    skin: "小麦肤色",
    race: "亚洲",
    style: "运动",
    category: "童装、鞋子",
    status: "可使用",
    usage: 274,
    image: "assets/model-cover-black-dress.png",
    tags: ["男童", "亚洲", "休闲", "真实感"]
  },
  {
    id: "m008",
    name: "3D 潮流女模特",
    gender: "女性",
    age: "18-24岁",
    creator: "AI 模特工场",
    skin: "自然肤色",
    race: "亚洲",
    style: "休闲",
    category: "女装、鞋子、箱包",
    status: "可使用",
    usage: 193,
    image: "assets/model-cover-black-dress.png",
    tags: ["女性", "亚洲", "休闲", "3D"]
  }
];

const materialLibrary = [
  {
    id: "boutique-001",
    name: "蕾丝聚拢文胸自然光主图",
    type: "精品图片",
    assetType: "模块生图",
    category: "文胸",
    relatedProduct: "蕾丝聚拢文胸 883",
    source: "创作记录",
    status: "已入库",
    usage: 0,
    updatedAt: "2026-07-21 10:28",
    image: "assets/creation-cover-608.jpg",
    tone: "image",
    spec: "3:4 / 2K",
    scene: "可作为自由创作参考图、参考图复刻主参考图或扩图源图",
    description: "已确认的文胸主图成品，保留自然光卧室氛围和蕾丝杯面细节。",
    records: ["蕾丝聚拢文胸主图生成 · 2026-07-21"],
    tags: ["文胸", "主图", "自然光"]
  },
  {
    id: "boutique-002", name: "冰丝无痕内裤自然光套图", type: "精品图片", assetType: "模块生图", category: "内裤", relatedProduct: "冰丝无痕内裤 4 条装", source: "创作记录", status: "已入库", usage: 12, updatedAt: "2026-07-20 16:45", image: "assets/creation-cover-616.jpg", tone: "image", spec: "3:4 / 2K", scene: "模块生图、主图创作", description: "自然光棚拍风格，保留面料纹理与多色组合细节。", records: ["冰丝无痕内裤商品图 · 2026-07-20"], tags: ["内裤", "自然光", "主图"]
  },
  {
    id: "boutique-003", name: "夏日童装海边场景图", type: "精品图片", assetType: "模块生图", category: "童装", relatedProduct: "儿童速干防晒套装", source: "创作记录", status: "已入库", usage: 6, updatedAt: "2026-07-19 10:18", image: "assets/creation-cover-602.jpg", tone: "image", spec: "3:4 / 2K", scene: "模块生图、场景图", description: "明亮户外场景，突出儿童服饰的轻快与活力。", records: ["儿童防晒衣场景图 · 2026-07-19"], tags: ["童装", "夏日", "场景"]
  },
  {
    id: "boutique-004", name: "轻盈蕾丝内衣主视觉", type: "精品图片", assetType: "模板生图", category: "内衣", relatedProduct: "轻盈蕾丝无痕文胸", source: "模板创作", status: "已入库", usage: 9, updatedAt: "2026-07-18 15:21", image: "assets/creation-cover-610.jpg", tone: "image", spec: "3:4 / 2K", scene: "模板生图、主视觉", description: "沿用品牌主视觉模板，突出产品的轻薄质感。", records: ["内衣主视觉模板 · 2026-07-18"], tags: ["内衣", "模板", "主视觉"]
  },
  {
    id: "boutique-005", name: "奶油卧室文胸氛围图", type: "精品图片", assetType: "单图复刻", category: "文胸", relatedProduct: "蕾丝聚拢文胸 883", source: "参考图复刻", status: "已入库", usage: 4, updatedAt: "2026-07-17 18:05", image: "assets/creation-cover-608.jpg", tone: "image", spec: "3:4 / 2K", scene: "单图复刻、氛围图", description: "复刻奶油卧室构图和自然散射光，保持商品真实细节。", records: ["文胸单图复刻 · 2026-07-17"], tags: ["文胸", "复刻", "卧室"]
  },
  {
    id: "boutique-006", name: "莫代尔内裤套装商详页", type: "精品图片", assetType: "多图复刻", category: "内裤", relatedProduct: "莫代尔高腰内裤礼盒", source: "多图复刻", status: "已入库", usage: 3, updatedAt: "2026-07-16 14:32", image: "assets/product-cover-02.png", tone: "image", spec: "3:4 / 2K", scene: "多图复刻、商详套图", description: "从参考商详拆解多张页面结构，已生成完整卖点套图。", records: ["莫代尔内裤套图复刻 · 2026-07-16"], tags: ["内裤", "套图", "商详"]
  },
  {
    id: "boutique-007", name: "夏日轻薄家居服创意图", type: "精品图片", assetType: "自由创作", category: "家居服", relatedProduct: "天丝轻薄家居服", source: "自由创作", status: "已入库", usage: 7, updatedAt: "2026-07-15 09:48", image: "assets/product-cover-04.png", tone: "image", spec: "3:4 / 2K", scene: "自由创作、生活方式图", description: "基于商品卖点自由创作，适合夏日居家主题推广。", records: ["家居服自由创作 · 2026-07-15"], tags: ["家居服", "夏日", "创意"]
  }
];

const materialCategoryGroups = {
  品牌资产: ["品牌元素"],
  说明模块: ["尺码表", "资质认证", "品控说明", "物流/退换说明"],
  营销组件: ["文字模块", "营销角标"],
  创作素材: ["图片模块", "背景素材"]
};

const moduleLibraryAssets = [
  { id: "module-image-001", type: "image", name: "冰丝内裤自然光主图", category: "内裤", source: "自己创作", status: "可使用", image: "assets/creation-cover-616.jpg", description: "保留商品材质与轮廓，适合自然光棚拍风格的主图生成。", updatedAt: "2026-07-20" },
  { id: "module-image-002", type: "image", name: "日常袜品陈列图", category: "通用", source: "已购模块", status: "可使用", image: "assets/creation-cover-608.jpg", description: "简洁陈列构图，突出多色商品与日常穿着氛围。", updatedAt: "2026-07-19" },
  { id: "module-image-003", type: "image", name: "居家舒适产品图", category: "内衣", source: "自己创作", status: "已上架", image: "assets/creation-cover-610.jpg", description: "柔和室内光线，突出亲肤和舒适的商品卖点。", updatedAt: "2026-07-18" },
  { id: "module-image-004", type: "image", name: "儿童夏日户外图", category: "童装", source: "自己创作", status: "草稿", image: "assets/creation-cover-602.jpg", description: "明亮夏日背景与活力构图，适合儿童商品展示。", updatedAt: "2026-07-17" },
  { id: "module-image-005", type: "image", name: "轻薄内衣平铺主图", category: "内衣", source: "已购模块", status: "可使用", image: "assets/creation-cover-606.jpg", description: "简洁平铺构图，突出轻薄面料与产品轮廓。", updatedAt: "2026-07-16" },
  { id: "module-image-006", type: "image", name: "亲子夏日活动图", category: "童装", source: "自己创作", status: "可使用", image: "assets/product-cover-04.png", description: "自然户外光线，适合亲子装与活动主题展示。", updatedAt: "2026-07-15" },
  { id: "module-image-007", type: "image", name: "基础内裤白底图", category: "内裤", source: "自己创作", status: "可使用", image: "assets/product-cover-01.png", description: "突出商品版型与面料质感的干净白底构图。", updatedAt: "2026-07-14" },
  { id: "module-image-008", type: "image", name: "多色组合陈列图", category: "通用", source: "已购模块", status: "可使用", image: "assets/product-cover-02.png", description: "用于多色套装和 SKU 组合展示的陈列构图。", updatedAt: "2026-07-13" },
  { id: "module-image-009", type: "image", name: "蕾丝细节特写图", category: "内衣", source: "自己创作", status: "已上架", image: "assets/product-cover-03.png", description: "放大呈现蕾丝、纹理和局部工艺的近景画面。", updatedAt: "2026-07-12" },
  { id: "module-image-010", type: "image", name: "都市通勤模特图", category: "通用", source: "已购模块", status: "可使用", image: "assets/creation-cover-616.jpg", description: "自然通勤场景中展示商品穿着效果的模特构图。", updatedAt: "2026-07-11" },
  { id: "module-fixed-001", type: "fixed", name: "保暖内衣面料成分说明", category: "内衣", source: "自己创作", status: "可使用", image: "assets/product-cover-01.png", description: "固定展示面料成分、洗护方式与质感说明，不替换图文内容。", updatedAt: "2026-07-20" },
  { id: "module-fixed-002", type: "fixed", name: "尺码参数对照表", category: "内裤", source: "已购模块", status: "可使用", image: "assets/product-cover-03.png", description: "适合商品详情页的固定尺码与身材参考信息。", updatedAt: "2026-07-18" },
  { id: "module-fixed-003", type: "fixed", name: "品牌售后服务说明", category: "通用", source: "自己创作", status: "已上架", image: "assets/product-cover-04.png", description: "固定售后承诺与服务流程，可直接拼接进详情页。", updatedAt: "2026-07-16" },
  { id: "module-fixed-004", type: "fixed", name: "产品洗护说明卡", category: "内衣", source: "自己创作", status: "草稿", image: "assets/creation-cover-606.jpg", description: "固定洗护符号与注意事项，保持品牌详情页排版一致。", updatedAt: "2026-07-15" },
  { id: "module-fixed-005", type: "fixed", name: "内衣尺码测量图", category: "内衣", source: "已购模块", status: "可使用", image: "assets/product-cover-03.png", description: "固定展示尺码测量方式与选码建议。", updatedAt: "2026-07-14" },
  { id: "module-fixed-006", type: "fixed", name: "童装洗护说明卡", category: "童装", source: "自己创作", status: "可使用", image: "assets/product-cover-04.png", description: "童装商品通用的洗护与安全说明模块。", updatedAt: "2026-07-13" },
  { id: "module-fixed-007", type: "fixed", name: "产品包装清单", category: "通用", source: "自己创作", status: "可使用", image: "assets/product-cover-02.png", description: "用于详情页固定展示包装和配件清单。", updatedAt: "2026-07-12" },
  { id: "module-fixed-008", type: "fixed", name: "内裤面料工艺说明", category: "内裤", source: "已购模块", status: "可使用", image: "assets/product-cover-01.png", description: "固定说明面料成分与透气工艺。", updatedAt: "2026-07-11" },
  { id: "module-fixed-009", type: "fixed", name: "发货时效服务说明", category: "通用", source: "自己创作", status: "已上架", image: "assets/creation-cover-608.jpg", description: "固定展示常规发货、售后和退换服务承诺。", updatedAt: "2026-07-10" },
  { id: "module-fixed-010", type: "fixed", name: "童装安全合规标签", category: "童装", source: "已购模块", status: "可使用", image: "assets/creation-cover-602.jpg", description: "用于儿童商品详情的固定安全合规信息。", updatedAt: "2026-07-09" },
  { id: "module-text-001", type: "text", name: "轻盈裸感卖点标题", category: "内裤", source: "自己创作", status: "可使用", image: "assets/creation-cover-606.jpg", description: "用于内裤主图及详情卖点区的标题排版与文字样式。", updatedAt: "2026-07-20" },
  { id: "module-text-002", type: "text", name: "有氧底档呼吸文案", category: "内裤", source: "已购模块", status: "可使用", image: "assets/creation-cover-602.jpg", description: "强调透气与耐洗卖点的分段信息排版。", updatedAt: "2026-07-18" },
  { id: "module-text-003", type: "text", name: "细节满满品牌标题", category: "内衣", source: "自己创作", status: "已上架", image: "assets/creation-cover-610.jpg", description: "适用于详情图首屏的品牌标题和短卖点组合。", updatedAt: "2026-07-17" },
  { id: "module-text-004", type: "text", name: "颜色一目了然标签", category: "通用", source: "自己创作", status: "草稿", image: "assets/creation-cover-608.jpg", description: "用于 SKU 色彩说明的简洁文字排版样式。", updatedAt: "2026-07-16" },
  { id: "module-text-005", type: "text", name: "轻薄无痕主图文案", category: "内衣", source: "已购模块", status: "可使用", image: "assets/creation-cover-616.jpg", description: "突出轻薄、无痕和舒适体验的标题排版。", updatedAt: "2026-07-15" },
  { id: "module-text-006", type: "text", name: "夏日童装活动标题", category: "童装", source: "自己创作", status: "可使用", image: "assets/product-cover-04.png", description: "适用于童装活动主图的季节标题与短卖点组合。", updatedAt: "2026-07-14" },
  { id: "module-text-007", type: "text", name: "透气底档卖点标签", category: "内裤", source: "自己创作", status: "可使用", image: "assets/product-cover-01.png", description: "强调透气与舒适卖点的标签样式。", updatedAt: "2026-07-13" },
  { id: "module-text-008", type: "text", name: "组合装优惠角标", category: "通用", source: "已购模块", status: "可使用", image: "assets/product-cover-02.png", description: "组合装商品的优惠信息与促销标签排版。", updatedAt: "2026-07-12" },
  { id: "module-text-009", type: "text", name: "蕾丝细节说明标题", category: "内衣", source: "自己创作", status: "已上架", image: "assets/product-cover-03.png", description: "用于内衣详情页的细节说明标题样式。", updatedAt: "2026-07-11" },
  { id: "module-text-010", type: "text", name: "新品上架宣传文案", category: "通用", source: "已购模块", status: "可使用", image: "assets/creation-cover-610.jpg", description: "适用于新品主图和活动页的短文案排版。", updatedAt: "2026-07-10" }
];

function materialPrimaryCategory(type) {
  return Object.entries(materialCategoryGroups).find(([, types]) => types.includes(type))?.[0] || "创作素材";
}

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
  suiteSolutions,
  filteredSuiteSolutions: suiteSolutions,
  models: modelLibrary,
  filteredModels: modelLibrary,
  materials: materialLibrary,
  filteredMaterials: materialLibrary,
  materialPrimary: "全部",
  materialSecondary: "全部",
  moduleLibraryType: "image",
  moduleLibraryCategory: "全部类目",
  moduleLibrarySource: "全部",
  filteredModuleAssets: moduleLibraryAssets,
  activeMaterial: materialLibrary[0],
  rongdouBalance: 1280,
  modelGenderFilter: "全部",
  modelStyleFilters: [],
  modelQuery: { name: "", creator: "", age: "", gender: "", skin: "" },
  modelReferencePickerSource: "local",
  modelReferenceImage: "",
  modelCreateTimer: null,
  modelPreviewReady: false,
  modelPreviewSubmittedAt: "",
  modelCreateTaskId: "",
  templateScope: "全部",
  templateCategory: "全部品类",
  suiteSolutionScope: "全部",
  suiteSolutionCategory: "全部品类",
  activeTemplate: templates[0],
  templateModalEditing: false,
  contentTargetGroup: "多图",
  contentSelections: [],
  modulePickerType: "image",
  modulePickerCategory: "全部",
  modulePickerSource: "全部",
  modulePickerKeyword: "",
  contentPickerMode: "module",
  localContentUploads: [],
  builderMode: "create",
  builderTarget: "template",
  builderEditingId: null,
  builderSeq: 1,
  builder: {
    name: "",
    description: "",
    category: "",
    brand: "",
    groups: ["多图"],
    items: []
  },
  publishTemplate: null,
  publishMaterial: null,
  previewResourceCard: null,
  purchaseResourceCard: null,
  previewMaterial: null,
  brandEditor: {
    backPage: "brand-material-library",
    moduleLibraryReturnType: "image",
    returnToMultiResult: false,
    returnToSuiteReplica: false,
    suiteTextSources: [],
    seq: 1,
    selectedId: "seed-watermark",
    zoom: 0.8,
    minZoom: 0.25,
    maxZoom: 2.5,
    canvas: {
      width: 900,
      height: 500,
      background: "transparent"
    },
    addedImages: [],
    objects: [
      {
        id: "seed-watermark",
        type: "text",
        name: "冷感空调裤",
        x: 160,
        y: 138,
        width: 375,
        height: 112,
        fontSize: 38,
        opacity: 100,
        rotation: 0,
        lockRatio: true,
        flipX: false,
        flipY: false
      }
    ]
  },
  view: "card",
  activeDate: false,
  activeProduct: products[0],
  drawerMode: "view",
  productEdit: null,
  productEditSeq: 0,
  detailBackPage: "creation-plaza",
  creation: {
    category: "文胸",
    inputMode: "module",
    productUploaded: false,
    productImages: [],
    referenceUploaded: false,
    modelUploaded: false,
    modelName: "",
    modelNames: [],
    template: "",
    templateKind: "",
    ratio: "3:4",
    resolution: "2K",
    generationModel: "专业版",
    imageCount: "1张",
    submittedAt: "",
    detailReplicaEditing: false,
    recordSeq: 0,
    detailSeq: 0
  },
  moduleCreateType: "image-generation",
  outpaint: {
    sourceImage: "assets/outpaint-main-product.jpg",
    sourceWidth: 2048,
    sourceHeight: 2048,
    ratio: "3:4",
    scale: 1,
    width: 2048,
    height: 2730,
    generated: false,
    canvasScale: 1,
    canvasX: 0,
    canvasY: 0
  },
  multiCreate: {
    mode: "template",
    templateId: "",
    resourceTemplate: null,
    backPage: "template-center",
    detailReturnPage: "",
    step: "config",
    taskId: "",
    taskStatus: "draft",
    elapsed: 0,
    timer: null,
    selectedModuleId: "",
    pendingDeleteModuleId: "",
    resultStage: "unified",
    previewDrawerOpen: false,
    compositionItems: [],
    compositionExcludedModuleIds: [],
    sourceProduct: null,
    replica: {
      productImages: [],
      referenceImages: [],
      prompt: "",
      preserve: ["构图", "光影", "页面顺序"]
    },
    modules: [],
    resolution: "2K",
    model: "专业版",
    count: "2 套",
    generated: false
  },
  suiteReplicaEditor: {
    backPage: "creation-plaza",
    step: "product",
    product: null,
    template: null,
    templateEntry: false,
    templateProductAnalysis: null,
    templateProductPrompt: "",
    templateScenePrompt: "",
    templateModuleStates: {},
    templateModel: "专业版",
    templateCount: "1张",
    resolution: "2K",
    ratio: "3:4",
    referenceSource: "upload",
    referenceMode: "multi",
    generated: false,
    generationDirty: false,
    generatedPages: [],
    generatedByPage: {},
    regeneratedByPage: {},
    textEditedByPage: {},
    localExportImages: [],
    templateDeletePageId: "",
    selectedReferencePageId: "",
    regeneratePanelOpen: false,
    regeneratePrompt: "",
    regenerateImageText: "",
    regenerateProductImages: [],
    regenerateReferenceImages: [],
    exportDrawerOpen: false,
    exportSelectionIds: [],
    exportLibraryAdded: false,
    copyByPage: {},
    originalCopyByPage: {},
    clearedCopyByPage: {},
    copyLayoutApplied: true,
    settingsCollapsed: false,
    scale: 1,
    x: 0,
    y: 0,
    draggingId: "",
    pointers: new Map(),
    pan: null,
    pinchDistance: 0,
    pinchScale: 1
  }
};

const moduleImageState = {
  intent: "create",
  createStep: 1,
  createEditing: true,
  backPage: "creation-plaza",
  activeMaterial: "product",
  materials: { product: [], model: [], package: [], background: [] },
  analysisImages: [],
  analysisMode: "single",
  scenePromptSource: "ai",
  analysisResult: null,
  analysisApplied: { product: false, scene: false },
  settingsOpen: false,
  resultTrayOpen: false,
  sourceAsset: null,
  productAnalysis: "",
  productAnalyses: [],
  tasks: [],
  selectedTaskId: "",
  selectedCandidateId: "",
  expandedTaskId: "",
  savedModule: null,
  savedModuleCandidateIds: [],
  pendingPersonalModuleCandidateId: "",
  taskSeq: 4810
};

const moduleFlowState = {
  step: 1,
  product: null,
  selectedModule: null,
  showAllModules: false,
  lockedModule: false,
  moduleDrawerSearch: "",
  moduleDrawerCategory: "",
  moduleDrawerSource: ""
};

const moduleProductPickerState = {
  pendingProductId: "",
  pendingProductIds: [],
  target: "module",
  preferredCategory: ""
};

const templateStartState = {
  step: 1,
  product: null,
  selectedTemplate: null,
  showAllTemplates: false
};

const singleReplicaState = {
  step: 1,
  category: "文胸",
  productImages: [],
  reference: null
};

const suiteReplicaStartState = {
  step: "product",
  category: "",
  product: null,
  template: null,
  templateKind: "single",
  singleTemplateDrawer: { keyword: "", category: "", source: "" },
  suiteTemplateDrawer: { keyword: "", category: "", source: "" },
  referenceSource: "upload",
  referenceMode: "multi",
  link: "",
  linkParsing: false,
  referenceImages: [],
  referenceReady: false,
  generation: { ratio: "3:4", resolution: "2K", model: "专业版", count: "1张" }
};

const moduleMaterialLabels = {
  product: "产品图",
  model: "模特图",
  package: "包装图",
  background: "背景图"
};
const moduleCreationPerTypeLimit = 6;
const moduleCreationTotalLimit = 10;

const moduleReuseProfiles = {
  "module-image-001": { product: 4, model: 1, tags: "自然光棚拍 · 商品主图", productPrompt: "突出商品的轻薄亲肤材质、贴身版型和边缘走线细节，保留上传商品的真实颜色、纹理、弹性褶皱和品牌识别点。多件商品按上传顺序对应替换画面中的原商品，不改变商品轮廓和核心卖点。避免生成多余装饰、错误 Logo 或与原商品不一致的花纹。", scenePrompt: "保持自然光棚拍的干净构图与柔和阴影，背景简洁、层次清晰，画面重点集中在商品主体和穿着效果上。延续模块参考图的光线方向、透视关系和留白比例，让商品自然融入原画面。整体风格偏真实电商主图，避免过度滤镜和夸张质感。" },
  "module-image-002": { product: 4, model: 0, tags: "日常陈列 · 多色展示", productPrompt: "按上传顺序展示多款商品，清晰呈现不同颜色、材质、边缘轮廓和组合关系。保留每件商品的真实比例、纹理细节和 SKU 差异，避免颜色串扰或样式混合。商品之间需要有清楚间距，方便用户识别套装数量和搭配关系。", scenePrompt: "保持简洁日常陈列构图与柔和自然光，画面干净、有层次，背景不抢占主体。延续参考模块中的平铺角度、阴影方向和排列节奏，让多件商品看起来统一且真实。整体适合商品主图或详情页 SKU 展示，不添加复杂场景元素。" },
  "module-image-003": { product: 1, model: 1, tags: "居家舒适 · 模特展示", productPrompt: "突出商品贴肤质感、弹性、舒适度和关键版型，保留上传商品的真实颜色、材质纹理、边线和局部工艺。商品需要自然贴合模特身体关系，不改变衣物结构和核心卖点。避免生成与原商品不符的花纹、配件或多余层叠。", scenePrompt: "保持柔和室内自然光和放松的居家氛围，模特姿态自然，商品与人物关系清晰可见。延续模块参考图的构图比例、背景虚实和光影层次，让画面具有真实生活方式感。整体风格偏干净、舒适、可信赖，避免夸张姿态和强烈商业棚拍感。" },
  "module-image-004": { product: 2, model: 1, tags: "夏日户外 · 儿童展示", productPrompt: "展示商品的活力配色、面料细节、儿童穿着特征和套装搭配关系，保留上传商品的真实颜色、图案、领口袖口、裤装轮廓和材质纹理。两张商品图按上传顺序对应替换模块中的商品位置，避免款式混淆、图案丢失或尺寸比例失真。商品呈现需要清晰自然，突出夏日童装轻便、透气、活泼的核心卖点。", scenePrompt: "保持明亮夏日户外光线和活力构图，画面自然、主体清晰，背景有轻微生活场景氛围但不抢商品重点。延续模块参考图的人物关系、动作节奏、构图留白和柔和高光，让模特与商品融合真实。整体风格适合儿童服饰电商主图或活动页，避免过度卡通、复杂道具和不真实的强修图效果。" }
};

const moduleEditMaterialProfiles = {
  "module-image-001": [{ type: "product", images: ["assets/product-cover-01.png", "assets/product-cover-02.png"] }, { type: "reference", images: ["assets/creation-cover-616.jpg"] }],
  "module-image-003": [{ type: "product", images: ["assets/product-cover-03.png"] }, { type: "model", images: ["assets/model-detail-source.png"] }],
  "module-image-004": [{ type: "product", images: ["assets/product-cover-04.png", "assets/product-cover-02.png"] }, { type: "background", images: ["assets/creation-cover-602.jpg"] }]
};

const moduleStaticState = {
  mode: "fixed",
  backPage: "creation-plaza",
  fixedImage: "",
  moduleName: "",
  category: "",
  saved: null,
  text: {
    content: "轻盈裸感\n自在呼吸",
    font: "Source Han Sans",
    weight: "400",
    size: "36",
    color: "#2f3544",
    align: "center"
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
const inspirationPlaza = document.querySelector("[data-inspiration-plaza]");
const inspirationResources = document.querySelector("[data-inspiration-resources]");
if (inspirationPlaza && inspirationResources) {
  inspirationPlaza.append(inspirationResources);
}
const outpaintEls = {
  editor: document.querySelector("[data-outpaint-editor]"),
  canvasShell: document.querySelector("[data-outpaint-canvas-shell]"),
  boardStrip: document.querySelector("[data-outpaint-board-strip]"),
  artboardWrap: document.querySelector("[data-outpaint-artboard-wrap]"),
  artboard: document.querySelector("[data-outpaint-artboard]"),
  sourcePhoto: document.querySelector("[data-outpaint-source-photo]"),
  resultSlot: document.querySelector("[data-outpaint-result-slot]"),
  panel: document.querySelector("[data-outpaint-panel]"),
  selectionSize: document.querySelector("[data-outpaint-selection-size]"),
  scale: document.querySelector("[data-outpaint-scale]"),
  ratioList: document.querySelector("[data-outpaint-ratio-list]"),
  generate: document.querySelector("[data-outpaint-generate]"),
  file: document.querySelector("[data-outpaint-file]"),
  zoom: document.querySelector("[data-outpaint-zoom]"),
  resultMenu: document.querySelector("[data-outpaint-result-menu]")
};
els.creationPrompt = document.querySelector("[data-creation-prompt]");
els.creationMode = document.querySelector("[data-creation-mode-label]");
els.creationInputModeTabs = Array.from(document.querySelectorAll("[data-creation-entry]"));
els.moduleCreateModal = document.querySelector("[data-module-create-modal]");
els.creationCategories = Array.from(document.querySelectorAll("[data-creation-categories] button"));
els.creationRecordList = document.querySelector("[data-free-creation-record-list]");
els.creationTaskFlow = document.querySelector("[data-creation-task-flow]");
els.creationTaskCards = Array.from(document.querySelectorAll("[data-creation-task-card]"));
els.creationTaskStatusButtons = Array.from(document.querySelectorAll("[data-creation-task-status]"));
els.creationTaskTypeButtons = Array.from(document.querySelectorAll("[data-creation-task-type]"));
els.creationTaskAiToolFilter = document.querySelector("[data-creation-ai-tool-filter]");
els.creationTaskAiToolButtons = Array.from(document.querySelectorAll("[data-creation-ai-tool-type]"));
els.creationTaskSearch = document.querySelector("[data-creation-task-search]");
els.creationTaskEmpty = document.querySelector("[data-creation-task-empty]");
els.creationCost = document.querySelector("[data-cost-label]");
els.creationGenerateCost = document.querySelector("[data-creation-cost]");
els.templateLabel = document.querySelector("[data-template-label]");
els.detailPrompt = document.querySelector("[data-detail-prompt]");
els.detailRatio = document.querySelector("[data-detail-ratio]");
els.detailResolution = document.querySelector("[data-detail-resolution]");
els.detailModel = document.querySelector("[data-detail-model]");
els.detailCount = document.querySelector("[data-detail-count]");
els.detailTaskList = document.querySelector("[data-detail-task-list]");
els.templateModal = document.querySelector("[data-template-modal]");
els.paramModal = document.querySelector("[data-param-modal]");
els.creationPolishModal = document.querySelector("[data-creation-polish-modal]");
els.creationPolishOutput = document.querySelector("[data-creation-polish-output]");
els.productSelectModal = document.querySelector("[data-product-select-modal]");
els.referenceSelectModal = document.querySelector("[data-reference-select-modal]");
els.modelSelectModal = document.querySelector("[data-model-select-modal]");
els.recordModal = document.querySelector("[data-record-modal]");
els.resourcePreviewModal = document.querySelector("[data-resource-preview-modal]");
els.resourcePurchaseModal = document.querySelector("[data-resource-purchase-modal]");
els.drawerImagePreview = document.querySelector("[data-drawer-image-preview]");
els.drawerImagePreviewImg = document.querySelector("[data-drawer-image-preview-img]");
els.brandPreviewContent = document.querySelector("[data-brand-preview-content]");
els.drawerLongPreview = document.querySelector("[data-drawer-long-preview]");
els.drawerPreviewCaption = document.querySelector("[data-drawer-preview-caption]");
els.ratioLabel = document.querySelector("[data-ratio-label]");
els.resolutionLabel = document.querySelector("[data-resolution-label]");
els.generationModelLabel = document.querySelector("[data-generation-model-label]");
els.imageCountLabel = document.querySelector("[data-image-count-label]");
els.generationModelMenu = document.querySelector("[data-generation-model-menu]");
els.generationModelTrigger = document.querySelector("[data-generation-model-open]");

let referencePickerSelection = null;
let referenceProductFilter = "all";
let productPickerFilter = "全部";
let productPickerBrand = "全部品牌";
let productPickerColor = "全部颜色";
const productPickerSelections = new Map();
let creationModelGenderFilter = "全部";
let creationModelStyleFilter = "全部";

function renderReferencePickerSelection() {
  const empty = document.querySelector("[data-reference-picker-empty]");
  const selected = document.querySelector("[data-reference-picker-selected]");
  const image = document.querySelector("[data-reference-picker-image]");
  const name = document.querySelector("[data-reference-picker-name]");
  if (!empty || !selected || !image || !name) return;
  const hasSelection = Boolean(referencePickerSelection);
  empty.hidden = hasSelection;
  selected.hidden = !hasSelection;
  if (hasSelection) {
    image.src = referencePickerSelection.image;
    name.textContent = referencePickerSelection.name;
  }
}

function setReferencePickerSelection(selection) {
  referencePickerSelection = selection;
  document.querySelectorAll("[data-reference-color-choice], [data-reference-source-choice]").forEach((button) => {
    button.classList.toggle("is-selected", button.dataset.referenceImage === selection?.image && button.dataset.referenceName === selection?.name);
  });
  renderReferencePickerSelection();
}

function getProductPickerSelections() {
  return Array.from(productPickerSelections.values());
}

function refreshCreationUploadCopy() {
  const productCopy = document.querySelector('[data-creation-upload-copy="product"]');
  const referenceCopy = document.querySelector('[data-creation-upload-copy="reference"]');
  const modelCopy = document.querySelector('[data-creation-upload-copy="model"]');
  const productCount = state.creation.productImages?.length || 0;
  if (productCopy) productCopy.textContent = state.creation.productUploaded ? `商品图 ${productCount || 1} 张` : "上传商品图";
  if (referenceCopy) referenceCopy.textContent = state.creation.referenceUploaded ? "参考图 1 张" : "上传参考图";
  if (modelCopy) {
    const selected = state.creation.modelNames || [];
    modelCopy.textContent = state.creation.modelUploaded ? `模特 ${selected.length || 1} 位` : "选择模特";
  }
}

function refreshCreationParamLabels() {
  if (els.ratioLabel) els.ratioLabel.textContent = state.creation.ratio || "3:4";
  if (els.resolutionLabel) els.resolutionLabel.textContent = state.creation.resolution || "2K";
  if (els.generationModelLabel) els.generationModelLabel.textContent = state.creation.generationModel || "专业版";
  if (els.imageCountLabel) els.imageCountLabel.textContent = state.creation.imageCount || "1张";
}

function renderCreationModelPicker() {
  const selected = new Set(state.creation.modelNames || []);
  document.querySelectorAll("[data-creation-model-option]").forEach((card) => {
    const matchesGender = creationModelGenderFilter === "全部" || card.dataset.modelGender === creationModelGenderFilter;
    const styles = (card.dataset.modelStyles || "").split(" ");
    const matchesStyle = creationModelStyleFilter === "全部" || styles.includes(creationModelStyleFilter);
    card.classList.toggle("is-selected", selected.has(card.dataset.modelName));
    card.hidden = !matchesGender || !matchesStyle;
  });
  document.querySelectorAll("[data-creation-model-gender]").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.creationModelGender === creationModelGenderFilter);
  });
  document.querySelectorAll("[data-creation-model-style]").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.creationModelStyle === creationModelStyleFilter);
  });
  const summary = document.querySelector("[data-creation-model-summary]");
  if (summary) summary.textContent = `已选 ${selected.size}/3`;
}

function renderProductPickerSelection() {
  const selections = getProductPickerSelections();
  const selectedIds = new Set(selections.map((item) => item.id));
  document.querySelectorAll("[data-product-image-choice]").forEach((button) => {
    button.classList.toggle("is-selected", selectedIds.has(button.dataset.productImageId));
  });
  document.querySelectorAll("[data-product-picker-card]").forEach((card) => {
    const imageChoices = Array.from(document.querySelectorAll(`[data-product-image-choice][data-product-id="${card.dataset.productId}"]`));
    const selectedCount = imageChoices.filter((button) => selectedIds.has(button.dataset.productImageId)).length;
    const all = selectedCount === imageChoices.length && selectedCount > 0;
    const partial = selectedCount > 0 && !all;
    card.classList.toggle("has-selection", selectedCount > 0);
    const selectedLabel = document.querySelector(`[data-product-card-selected="${card.dataset.productId}"]`);
    if (selectedLabel) selectedLabel.textContent = selectedCount ? `已选 ${selectedCount} 张` : "未选择";
  });
  document.querySelectorAll("[data-product-picker-all]").forEach((allButton) => {
    const productId = allButton.dataset.productPickerAll;
    const imageChoices = Array.from(document.querySelectorAll(`[data-product-image-choice][data-product-id="${productId}"]`));
    const selectedCount = imageChoices.filter((button) => selectedIds.has(button.dataset.productImageId)).length;
    const all = selectedCount === imageChoices.length && selectedCount > 0;
    const partial = selectedCount > 0 && !all;
    allButton?.classList.toggle("is-selected", all);
    allButton?.classList.toggle("is-partial", partial);
    allButton?.setAttribute("aria-pressed", String(all));
  });
  const count = document.querySelector("[data-product-picker-count]");
  if (count) count.textContent = `已选 ${selections.length} 张图片`;
}

function setProductPickerImage(button, selected) {
  const item = {
    id: button.dataset.productImageId,
    productId: button.dataset.productId,
    productName: button.dataset.productName,
    image: button.dataset.productImage,
    imageName: button.dataset.productImageName
  };
  if (selected) productPickerSelections.set(item.id, item);
  else productPickerSelections.delete(item.id);
  renderProductPickerSelection();
}

function filterProductPicker() {
  const keyword = document.querySelector("[data-product-picker-search]")?.value.trim().toLowerCase() || "";
  let activeVisible = false;
  let firstVisible = null;
  document.querySelectorAll("[data-product-picker-card]").forEach((card) => {
    const matchesKeyword = !keyword || (card.dataset.productSearch || "").toLowerCase().includes(keyword);
    const matchesCategory = productPickerFilter === "全部" || card.dataset.productCategory === productPickerFilter;
    const matchesBrand = productPickerBrand === "全部品牌" || card.dataset.productBrand === productPickerBrand;
    const matchesColor = productPickerColor === "全部颜色" || (card.dataset.productColors || "").includes(productPickerColor);
    const visible = matchesKeyword && matchesCategory && matchesBrand && matchesColor;
    card.classList.toggle("is-hidden", !visible);
    if (visible && !firstVisible) firstVisible = card;
    if (visible && card.classList.contains("is-active")) activeVisible = true;
  });
  if (!activeVisible && firstVisible) selectProductPickerProduct(firstVisible.dataset.productId);
}

function selectProductPickerProduct(productId) {
  document.querySelectorAll("[data-product-picker-card]").forEach((card) => {
    card.classList.toggle("is-active", card.dataset.productId === productId);
  });
  document.querySelectorAll("[data-product-detail-panel]").forEach((panel) => {
    const active = panel.dataset.productDetailPanel === productId;
    panel.classList.toggle("is-active", active);
    panel.setAttribute("aria-hidden", String(!active));
  });
}

function setProductSourcePanel(source) {
  document.querySelectorAll("[data-product-source-panel]").forEach((panel) => {
    const active = panel.dataset.productSourcePanel === source;
    panel.classList.toggle("is-active", active);
    panel.setAttribute("aria-hidden", String(!active));
  });
}

function filterProductDetailColor(productId, color) {
  const panel = document.querySelector(`[data-product-detail-panel="${productId}"]`);
  if (!panel) return;
  panel.querySelectorAll("[data-product-color-filter]").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.productColorFilter === color);
  });
  panel.querySelectorAll("[data-product-image-choice]").forEach((button) => {
    button.classList.toggle("is-hidden", color !== "all" && button.dataset.productColor !== color);
  });
}

function filterReferenceProducts() {
  const keyword = document.querySelector("[data-reference-product-search]")?.value.trim().toLowerCase() || "";
  document.querySelectorAll("[data-reference-product-card]").forEach((card) => {
    const matchesKeyword = !keyword || card.dataset.referenceSearch.includes(keyword);
    const matchesCategory = referenceProductFilter === "all" || card.dataset.referenceCategory === referenceProductFilter;
    card.classList.toggle("is-hidden", !matchesKeyword || !matchesCategory);
  });
}
els.templateSearch = document.querySelector("[data-template-search]");
els.templateTypeFilter = document.querySelector("[data-template-type-filter]");
els.templateCategoryFilter = document.querySelector("[data-template-category-filter]");
els.templateCategoryButtons = Array.from(document.querySelectorAll("[data-template-category-tab]"));
els.templateScopeButtons = Array.from(document.querySelectorAll("[data-template-scope]"));
els.templateStatusFilter = document.querySelector("[data-template-status-filter]");
els.templateGrid = document.querySelector("[data-template-grid]");
els.templateEmptyState = document.querySelector("[data-template-empty-state]");
els.templateNoResultState = document.querySelector("[data-template-no-result-state]");
els.templateCreateMenu = document.querySelector("[data-template-create-menu]");
els.suiteSolutionSearch = document.querySelector("[data-solution-search]");
els.suiteSolutionCategoryButtons = Array.from(document.querySelectorAll("[data-solution-category]"));
els.suiteSolutionGrid = document.querySelector("[data-solution-grid]");
els.suiteSolutionEmptyState = document.querySelector("[data-solution-empty-state]");
els.suiteSolutionNoResultState = document.querySelector("[data-solution-no-result-state]");
els.templateContentModal = document.querySelector("[data-template-content-modal]");
els.contentSourceGrid = document.querySelector("[data-content-source-grid]");
els.contentModalSubtitle = document.querySelector("[data-content-modal-subtitle]");
els.templateDetailModal = document.querySelector("[data-template-detail-modal]");
els.templateDetailPanel = document.querySelector("[data-template-detail-modal] .template-detail-panel");
els.templateDetailTitle = document.querySelector("[data-template-detail-title]");
els.templateDetailSubtitle = document.querySelector("[data-template-detail-subtitle]");
els.templateDetailPreview = document.querySelector("[data-template-detail-preview]");
els.templateDetailMeta = document.querySelector("[data-template-detail-meta]");
els.templateDetailItems = document.querySelector("[data-template-detail-items]");
els.templateDetailEdit = document.querySelector("[data-template-detail-edit]");
els.multiPage = document.querySelector("[data-multi-page]");
els.multiBack = document.querySelector("[data-multi-back]");
els.multiStepButtons = Array.from(document.querySelectorAll("[data-multi-step-button]"));
els.multiTaskKind = document.querySelector("[data-multi-task-kind]");
els.multiTaskRecord = document.querySelector("[data-multi-task-record]");
els.multiTaskRecordCount = document.querySelector("[data-multi-task-record-count]");
els.multiConfigStepName = document.querySelector("[data-multi-config-step-name]");
els.multiTemplateTitle = document.querySelector("[data-multi-template-title]");
els.multiTemplateSubtitle = document.querySelector("[data-multi-template-subtitle]");
els.multiTemplateName = document.querySelector("[data-multi-template-name]");
els.multiTemplateThumb = document.querySelector("[data-multi-template-thumb]");
els.multiLinkedLabel = document.querySelector("[data-multi-linked-label]");
els.multiCountLabel = document.querySelector("[data-multi-count-label]");
els.multiSourceProductList = document.querySelector("[data-multi-source-product-list]");
els.multiModuleList = document.querySelector("[data-multi-module-list]");
els.multiConfigEmpty = document.querySelector("[data-multi-config-empty]");
els.multiConfigContent = document.querySelector("[data-multi-config-content]");
els.multiConfigTitle = document.querySelector("[data-multi-config-title]");
els.multiConfigDescription = document.querySelector("[data-multi-config-description]");
els.multiEnabledCount = document.querySelector("[data-multi-enabled-count]");
els.multiMissingCount = document.querySelector("[data-multi-missing-count]");
els.multiCost = document.querySelector("[data-multi-cost]");
els.multiReadyLabel = document.querySelector("[data-multi-ready-label]");
els.multiResultStatus = document.querySelector("[data-multi-result-status]");
els.multiResultList = document.querySelector("[data-multi-result-list]");
els.multiResultModuleNav = document.querySelector("[data-multi-result-module-nav]");
els.multiLongPreview = document.querySelector("[data-multi-long-preview]");
els.multiPreviewNote = document.querySelector("[data-multi-preview-note]");
els.multiFooterStatus = document.querySelector("[data-multi-footer-status]");
els.multiTaskTimer = document.querySelector("[data-multi-task-timer]");
els.multiAutosave = document.querySelector("[data-multi-autosave]");
els.multiConfirmModal = document.querySelector("[data-multi-confirm-modal]");
els.multiConfirmSummary = document.querySelector("[data-multi-confirm-summary]");
els.multiConfirmList = document.querySelector("[data-multi-confirm-list]");
els.builderName = document.querySelector("[data-builder-name]");
els.builderDescription = document.querySelector("[data-builder-description]");
els.builderCategory = document.querySelector("[data-builder-category]");
els.builderBrand = document.querySelector("[data-builder-brand]");
els.builderGroupBoard = document.querySelector("[data-builder-group-board]");
els.builderPreview = document.querySelector("[data-builder-preview]");
els.builderPreviewCount = document.querySelector("[data-builder-preview-count]");
els.templatePublishModal = document.querySelector("[data-template-publish-modal]");
els.publishName = document.querySelector("[data-publish-name]");
els.publishType = document.querySelector("[data-publish-type]");
els.publishCategory = document.querySelector("[data-publish-category]");
els.publishPrice = document.querySelector("[data-publish-price]");
els.publishDesc = document.querySelector("[data-publish-desc]");
els.publishPreview = document.querySelector("[data-publish-preview]");
els.materialSearch = document.querySelector("[data-material-search]");
els.materialCategoryFilter = document.querySelector("[data-material-category-filter]");
els.materialProductFilter = document.querySelector("[data-material-product-filter]");
els.materialSourceFilter = document.querySelector("[data-material-source-filter]");
els.materialStatusFilter = document.querySelector("[data-material-status-filter]");
els.materialCount = document.querySelector("[data-material-count]");
els.materialPrimaryTabs = document.querySelector("[data-material-primary-tabs]");
els.materialSecondaryTabs = document.querySelector("[data-material-secondary-tabs]");
els.materialGrid = document.querySelector("[data-material-grid]");
els.materialEmptyState = document.querySelector("[data-material-empty-state]");
els.materialNoResultState = document.querySelector("[data-material-no-result-state]");
els.materialCreateMenu = document.querySelector("[data-material-create-menu]");
els.modelGrid = document.querySelector("[data-model-grid]");
els.modelCount = document.querySelector("[data-model-count]");
els.modelEmpty = document.querySelector("[data-model-empty]");
els.modelNameSearch = document.querySelector("[data-model-name-search]");
els.modelCreatorSearch = document.querySelector("[data-model-creator-search]");
els.modelAgeFilter = document.querySelector("[data-model-age-filter]");
els.modelGenderSelect = document.querySelector("[data-model-gender-select]");
els.modelSkinFilter = document.querySelector("[data-model-skin-filter]");
els.brandMaterialCount = document.querySelector("[data-brand-material-count]");
els.modelCreateModal = document.querySelector("[data-model-create-modal]");
els.modelConfirmModal = document.querySelector("[data-model-confirm-modal]");
els.modelReferencePickerModal = document.querySelector("[data-model-reference-picker-modal]");
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

const templateContentOptions = {
  local: [
    { title: "本地上传-内裤平铺", image: "assets/product-cover-01.png", purpose: "参考生成", source: "本地上传" },
    { title: "本地上传-浅色套装", image: "assets/product-cover-02.png", purpose: "参考生成", source: "本地上传" },
    { title: "本地上传-文胸细节", image: "assets/product-cover-03.png", purpose: "参考生成", source: "本地上传" },
    { title: "本地上传-童装主图", image: "assets/product-cover-04.png", purpose: "参考生成", source: "本地上传" }
  ],
  material: [
    { title: "30天售后品牌条", image: "assets/creation-cover-602.jpg", purpose: "固定插入", source: "素材库" },
    { title: "聚拢有型文字图", image: "assets/creation-cover-606.jpg", purpose: "固定插入", source: "素材库" },
    { title: "尺码表说明图", image: "assets/product-cover-03.png", purpose: "固定插入", source: "素材库" },
    { title: "洗护说明图", image: "assets/product-cover-02.png", purpose: "固定插入", source: "素材库" }
  ],
  history: [
    { title: "历史生成-童装户外", image: "assets/creation-cover-608.jpg", purpose: "参考生成", source: "历史创作" },
    { title: "历史生成-童装蓝天", image: "assets/creation-cover-610.jpg", purpose: "参考生成", source: "历史创作" },
    { title: "历史生成-内衣模特", image: "assets/creation-cover-616.jpg", purpose: "参考生成", source: "历史创作" },
    { title: "历史生成-详情卖点", image: "assets/product-cover-04.png", purpose: "参考生成", source: "历史创作" }
  ],
  text: [
    { title: "黑暗无论怎样漫长", image: "assets/creation-cover-606.jpg", purpose: "固定插入", source: "文字素材" },
    { title: "品牌标题文字条", image: "assets/creation-cover-602.jpg", purpose: "固定插入", source: "文字素材" }
  ]
};

function templateComboLabel(template) {
  const groups = template.groups || [];
  if (groups.length === 3 && groups.includes("主图") && groups.includes("详情图") && groups.includes("SKU图")) return "套图";
  return groups.join("+") || "未分组";
}

function isTemplateItemEnabled(item) {
  return item.enabled !== false;
}

function getEnabledTemplateItems(items = []) {
  return items.filter(isTemplateItemEnabled);
}

function renderLongPreview(items = [], options = {}) {
  const emptyText = options.emptyText || "暂无内容，添加图片后实时生成长图预览";
  if (!items.length) return `<div class="template-long-empty">${emptyText}</div>`;
  return items.map((item) => `
    <div class="template-long-piece">
      <img src="${item.image}" alt="${item.title}">
      ${options.showBadges ? `<div class="template-piece-tags"><span>${item.group}</span><span>${item.purpose}</span><span>${item.source}</span></div>` : ""}
    </div>
  `).join("");
}

function renderTemplateCards(list) {
  if (!els.templateGrid) return;

  els.templateGrid.innerHTML = list.map((template) => `
    <article class="template-card long-template-card" data-template-id="${template.id}">
      <div class="template-long-cover" data-template-preview="${template.id}">
        ${template.scope === "已购模板" ? '<span class="asset-purchased-badge">已购</span>' : ""}
        <div class="template-long-stack">
          ${renderLongPreview(getEnabledTemplateItems(template.items), { emptyText: "暂无启用内容" })}
        </div>
        <div class="template-card-title">${template.name}</div>
        <div class="template-library-action-row">
          ${template.scope === "已购模板" ? "" : `
            <div class="brand-asset-hover-actions template-library-cover-actions" aria-label="套图模板操作">
              <button type="button" data-template-publish="${template.id}" title="发布到 AI 图片广场" aria-label="发布到 AI 图片广场"><img src="assets/brand-action-publish.png" alt=""></button>
              <button type="button" data-template-edit="${template.id}" title="编辑" aria-label="编辑"><img src="assets/brand-action-edit.png" alt=""></button>
              <button type="button" data-template-delete="${template.id}" title="删除" aria-label="删除"><img src="assets/brand-action-delete.png" alt=""></button>
            </div>`}
          <button class="template-library-make" type="button" data-template-create="${template.id}">创作图片</button>
        </div>
      </div>
    </article>
  `).join("");

  const hasKeyword = Boolean(els.templateSearch?.value.trim());
  const hasFilter = state.templateScope !== "全部" || state.templateCategory !== "全部品类";
  els.templateGrid.classList.toggle("is-hidden", list.length === 0);
  els.templateEmptyState?.classList.toggle("is-visible", templates.length === 0);
  els.templateNoResultState?.classList.toggle("is-visible", templates.length > 0 && list.length === 0 && (hasKeyword || hasFilter));
}

function filterTemplates() {
  if (!els.templateGrid) return;
  const keyword = els.templateSearch?.value.trim().toLowerCase() || "";
  const category = state.templateCategory;
  const scope = state.templateScope;

  state.filteredTemplates = templates.filter((template) => {
    const haystack = [template.name, template.description, template.category, template.brand, template.scope, ...template.tags].join(" ").toLowerCase();
    const matchKeyword = !keyword || haystack.includes(keyword);
    const matchScope = scope === "全部" || template.scope === scope;
    const matchCategory = category === "全部品类" || template.category === category;
    return matchKeyword && matchScope && matchCategory;
  });

  renderTemplateCards(state.filteredTemplates);
}

function setTemplateCategory(category) {
  state.templateCategory = category;
  els.templateCategoryButtons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.templateCategoryTab === category);
  });
  filterTemplates();
}

function setTemplateScope(scope) {
  state.templateScope = scope;
  els.templateScopeButtons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.templateScope === scope);
  });
  filterTemplates();
}

function renderSuiteSolutionPreview(items = []) {
  if (!items.length) return `<div class="suite-solution-empty-piece">暂无启用内容</div>`;
  return items.map((item) => `
    <div class="suite-solution-piece"><img src="${item.image}" alt="${item.title}"></div>
  `).join("");
}

function renderSuiteSolutionCards(list) {
  if (!els.suiteSolutionGrid) return;
  els.suiteSolutionGrid.innerHTML = list.map((solution) => `
    <article class="suite-solution-card-item" data-solution-id="${solution.id}">
      <div class="suite-solution-cover" data-solution-preview="${solution.id}">
        ${solution.scope === "已购套图模板" ? '<span class="asset-purchased-badge">已购</span>' : ""}
        <div class="suite-solution-stack">${renderSuiteSolutionPreview(getEnabledTemplateItems(solution.items))}</div>
        <div class="suite-solution-title">${solution.name}</div>
        <div class="suite-solution-action-row">
          <div class="brand-asset-hover-actions suite-solution-cover-actions" aria-label="套图模板操作">
            <button type="button" data-solution-publish="${solution.id}" title="发布到 AI 图片广场" aria-label="发布到 AI 图片广场"><img src="assets/brand-action-publish.png" alt=""></button>
            <button type="button" data-solution-edit="${solution.id}" title="编辑" aria-label="编辑"><img src="assets/brand-action-edit.png" alt=""></button>
            <button type="button" data-solution-delete="${solution.id}" title="删除" aria-label="删除"><img src="assets/brand-action-delete.png" alt=""></button>
          </div>
          <button class="suite-solution-make" type="button" data-solution-create-with="${solution.id}">创作图片</button>
        </div>
      </div>
    </article>
  `).join("");

  const hasKeyword = Boolean(els.suiteSolutionSearch?.value.trim());
  const hasFilter = state.suiteSolutionScope !== "全部" ||
    state.suiteSolutionCategory !== "全部品类";
  els.suiteSolutionGrid.classList.toggle("is-hidden", list.length === 0);
  els.suiteSolutionEmptyState?.classList.toggle("is-visible", suiteSolutions.length === 0);
  els.suiteSolutionNoResultState?.classList.toggle("is-visible", suiteSolutions.length > 0 && list.length === 0 && (hasKeyword || hasFilter));
}

function filterSuiteSolutions() {
  if (!els.suiteSolutionGrid) return;
  const keyword = els.suiteSolutionSearch?.value.trim().toLowerCase() || "";
  state.filteredSuiteSolutions = suiteSolutions.filter((solution) => {
    const haystack = [solution.name, solution.description, solution.category, solution.brand, solution.scope, ...solution.tags].join(" ").toLowerCase();
    const matchKeyword = !keyword || haystack.includes(keyword);
    const matchScope = state.suiteSolutionScope === "全部" || solution.scope === state.suiteSolutionScope;
    const matchCategory = state.suiteSolutionCategory === "全部品类" || solution.category === state.suiteSolutionCategory;
    return matchKeyword && matchScope && matchCategory;
  });
  renderSuiteSolutionCards(state.filteredSuiteSolutions);
}

function setSuiteSolutionScope(scope) {
  state.suiteSolutionScope = scope;
  document.querySelectorAll("[data-solution-scope]").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.solutionScope === scope);
  });
  filterSuiteSolutions();
}

function setSuiteSolutionCategory(category) {
  state.suiteSolutionCategory = category;
  els.suiteSolutionCategoryButtons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.solutionCategory === category);
  });
  filterSuiteSolutions();
}

function cloneTemplate(template) {
  return {
    name: template.name,
    description: template.description || "",
    category: template.category || "",
    brand: template.brand || "",
    groups: ["多图"],
    items: template.items.map((item) => ({ ...item, group: "多图", enabled: isTemplateItemEnabled(item) }))
  };
}

function syncBuilderTargetUI() {
  const isSolution = state.builderTarget === "solution";
  const title = document.querySelector("[data-template-builder-title]");
  const saveButton = document.querySelector("[data-template-builder-save]");
  const action = state.builderMode === "edit" ? "编辑" : "新增";
  if (title) title.textContent = `${action}套图模板`;
  if (saveButton) saveButton.textContent = "保存套图模板";
}

function resetTemplateBuilder(template = null, target = "template") {
  state.builderTarget = target;
  state.builderMode = template ? "edit" : "create";
  state.builderEditingId = template?.id || null;
  state.builderSeq = 1;
  state.builder = template ? cloneTemplate(template) : {
    name: "",
    description: "",
    category: "",
    brand: "",
    groups: ["多图"],
    items: []
  };
  syncBuilderTargetUI();
  syncBuilderForm();
  renderTemplateBuilder();
}

function syncBuilderForm() {
  if (!els.builderName) return;
  els.builderName.value = state.builder.name;
  els.builderDescription.value = state.builder.description;
  els.builderCategory.value = state.builder.category;
  els.builderBrand.value = state.builder.brand;
  document.querySelectorAll("[data-builder-group]").forEach((button) => {
    button.classList.toggle("is-active", state.builder.groups.includes(button.dataset.builderGroup));
  });
}

function getGroupItems(group) {
  return state.builder.items.filter((item) => item.group === group);
}

function renderTemplateBuilder() {
  if (!els.builderGroupBoard) return;
  const items = state.builder.items;
  els.builderGroupBoard.innerHTML = `
      <section class="builder-group-section" data-builder-group-section="多图">
        <div class="builder-group-head">
          <div><h3>多图配置</h3><span>${items.length} 张内容</span></div>
          <button class="btn ghost builder-add-content-btn" type="button" data-open-content-picker="多图"><span class="builder-add-plus">+</span>添加内容</button>
        </div>
        <div class="builder-item-list">
          ${items.length ? items.map((item) => renderBuilderItem(item)).join("") : `<div class="builder-empty-group">暂无内容，可从模块列表中选择并按顺序拼接</div>`}
        </div>
      </section>
    `;
  renderBuilderPreview();
}

function renderBuilderItem(item) {
  const enabled = isTemplateItemEnabled(item);
  return `
    <article class="builder-item ${enabled ? "" : "is-disabled"}" draggable="true" data-builder-item="${item.id}">
      <button class="builder-item-enable" type="button" data-builder-toggle-enabled="${item.id}" aria-label="${enabled ? "取消参与拼接" : "启用参与拼接"}">
        ${enabled ? "✓" : ""}
      </button>
      <img src="${item.image}" alt="${item.title}" data-builder-preview-image="${item.image}">
      <button class="builder-item-remove" type="button" data-builder-remove-item="${item.id}" aria-label="删除图片"></button>
    </article>
  `;
}

function renderBuilderPreview() {
  if (!els.builderPreview) return;
  const enabledItems = getEnabledTemplateItems(state.builder.items);
  els.builderPreview.innerHTML = renderLongPreview(enabledItems, { showBadges: false, emptyText: "暂无启用内容，勾选图片后展示长图预览" });
  if (els.builderPreviewCount) els.builderPreviewCount.textContent = "支持拖拽调整顺序";
}

function updateBuilderFromInputs() {
  state.builder.name = els.builderName?.value.trim() || "";
  state.builder.description = els.builderDescription?.value.trim() || "";
  state.builder.category = els.builderCategory?.value || "";
  state.builder.brand = els.builderBrand?.value.trim() || "";
}

function toggleBuilderGroup(group) {
  if (state.builder.groups.includes(group)) {
    if (state.builder.groups.length === 1) {
      showToast("至少选择一个模板分组");
      return;
    }
    state.builder.groups = state.builder.groups.filter((item) => item !== group);
    state.builder.items = state.builder.items.filter((item) => item.group !== group);
  } else {
    state.builder.groups.push(group);
  }
  syncBuilderForm();
  renderTemplateBuilder();
}

function openContentPicker(group) {
  state.contentTargetGroup = group || "多图";
  if (state.builderTarget === "solution") {
    document.querySelector("[data-content-local-file]")?.click();
    return;
  }
  state.contentSelections = [];
  state.localContentUploads = [];
  state.contentPickerMode = "module";
  state.modulePickerType = "image";
  state.modulePickerCategory = "全部";
  state.modulePickerSource = "全部";
  state.modulePickerKeyword = "";
  syncContentPickerMode();
  if (state.contentPickerMode === "module") renderContentOptions();
  else renderLocalContentUploads();
  openPrototypeModal(els.templateContentModal);
}

function getModulePickerAssets() {
  const keyword = state.modulePickerKeyword.trim().toLowerCase();
  return moduleLibraryAssets.filter((asset) => {
    const matchesType = asset.type === state.modulePickerType;
    const matchesCategory = state.modulePickerCategory === "全部" || asset.category === state.modulePickerCategory;
    const matchesSource = state.modulePickerSource === "全部" || asset.source === state.modulePickerSource;
    const searchable = [asset.name, asset.description, asset.category, asset.source].join(" ").toLowerCase();
    return matchesType && matchesCategory && matchesSource && (!keyword || searchable.includes(keyword));
  });
}

function modulePickerTypeLabel(type) {
  return ({ image: "图片生图模块", fixed: "固定图片模块", text: "文字样式模块" })[type] || "模块";
}

function syncModulePickerControls() {
  document.querySelectorAll("[data-module-picker-type]").forEach((button) => {
    const isActive = button.dataset.modulePickerType === state.modulePickerType;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-selected", String(isActive));
  });
  const keywordInput = document.querySelector("[data-module-picker-search]");
  const categorySelect = document.querySelector("[data-module-picker-category]");
  const sourceSelect = document.querySelector("[data-module-picker-source]");
  if (keywordInput) keywordInput.value = state.modulePickerKeyword;
  if (categorySelect) categorySelect.value = state.modulePickerCategory;
  if (sourceSelect) sourceSelect.value = state.modulePickerSource;
}

function syncContentPickerMode() {
  const isLocal = state.contentPickerMode === "local";
  const modalTitle = document.querySelector("[data-content-modal-title]");
  const moduleTabs = document.querySelector(".module-picker-tabs");
  const moduleToolbar = document.querySelector(".module-picker-toolbar");
  const localPanel = document.querySelector("[data-content-local-panel]");
  const pagination = document.querySelector(".module-picker-pagination");
  const confirmButton = document.querySelector("[data-content-confirm]");
  if (modalTitle) modalTitle.textContent = isLocal ? "从本地上传" : "选择模块";
  if (moduleTabs) moduleTabs.hidden = isLocal;
  if (moduleToolbar) moduleToolbar.hidden = isLocal;
  if (els.contentSourceGrid) els.contentSourceGrid.hidden = isLocal;
  if (localPanel) localPanel.hidden = !isLocal;
  if (pagination) pagination.hidden = isLocal;
  if (confirmButton) confirmButton.textContent = isLocal ? "确认添加" : "确认选择";
  if (!isLocal) syncModulePickerControls();
}

function renderLocalContentUploads() {
  const list = document.querySelector("[data-content-local-list]");
  if (!list) return;
  list.innerHTML = state.localContentUploads.length
    ? state.localContentUploads.map((item) => `
      <article class="module-picker-local-item">
        <img src="${item.image}" alt="${item.title}">
        <span>${item.title}</span>
        <button type="button" data-content-local-remove="${item.id}" aria-label="删除${item.title}">×</button>
      </article>
    `).join("")
    : '<div class="module-picker-local-empty">暂未上传图片</div>';
}

function renderContentOptions() {
  if (!els.contentSourceGrid) return;
  const assets = getModulePickerAssets();
  if (!assets.length) {
    els.contentSourceGrid.innerHTML = '<div class="module-picker-empty">暂无符合筛选条件的模块</div>';
    return;
  }
  els.contentSourceGrid.innerHTML = assets.map((asset) => {
    const isSelected = state.contentSelections.includes(asset.id);
    return `
      <button class="module-picker-card ${isSelected ? "is-selected" : ""}" type="button" data-content-option="${asset.id}" aria-pressed="${isSelected}">
        <span class="module-picker-check" aria-hidden="true">${isSelected ? "✓" : ""}</span>
        <img src="${asset.image}" alt="${asset.name}">
        <strong title="${asset.name}">${asset.name}</strong>
        <small>${asset.source} · ${modulePickerTypeLabel(asset.type)}</small>
      </button>
    `;
  }).join("");
}

function setModulePickerType(type) {
  state.modulePickerType = type;
  state.contentSelections = [];
  syncModulePickerControls();
  renderContentOptions();
}

function toggleContentSelection(key) {
  if (state.contentSelections.includes(key)) {
    state.contentSelections = state.contentSelections.filter((item) => item !== key);
  } else {
    state.contentSelections.push(key);
  }
  renderContentOptions();
}

function confirmContentSelection() {
  if (state.contentPickerMode === "local") {
    if (!state.localContentUploads.length) {
      showToast("请先从本地上传图片");
      return;
    }
    state.localContentUploads.forEach((item) => {
      const purpose = "固定插入";
      state.builder.items.push({
        id: `builder-${Date.now()}-${state.builderSeq++}`,
        title: item.title,
        group: state.contentTargetGroup,
        purpose,
        source: "本地上传",
        image: item.image,
        ratio: inferTemplateItemRatio({ group: state.contentTargetGroup, purpose, source: "本地上传" }),
        enabled: true
      });
    });
    closePrototypeModal(els.templateContentModal);
    renderTemplateBuilder();
    showToast(`已添加 ${state.localContentUploads.length} 张图片`);
    return;
  }
  if (!state.contentSelections.length) {
    showToast("请先选择模块");
    return;
  }
  const selectedModules = state.contentSelections
    .map((id) => moduleLibraryAssets.find((asset) => asset.id === id))
    .filter(Boolean);
  selectedModules.forEach((asset) => {
    const purpose = asset.type === "image" ? "参考生成" : "固定插入";
    state.builder.items.push({
      id: `builder-${Date.now()}-${state.builderSeq++}`,
      title: asset.name,
      group: state.contentTargetGroup,
      purpose,
      source: asset.source,
      image: asset.image,
      moduleId: asset.id,
      moduleType: asset.type,
      ratio: inferTemplateItemRatio({ group: state.contentTargetGroup, purpose, source: asset.source }),
      enabled: true
    });
  });
  closePrototypeModal(els.templateContentModal);
  renderTemplateBuilder();
  showToast(`已加入 ${selectedModules.length} 个模块`);
}

function moveBuilderItem(itemId, direction) {
  const index = state.builder.items.findIndex((item) => item.id === itemId);
  if (index < 0) return;
  const nextIndex = direction === "up" ? index - 1 : index + 1;
  if (nextIndex < 0 || nextIndex >= state.builder.items.length) return;
  const [item] = state.builder.items.splice(index, 1);
  state.builder.items.splice(nextIndex, 0, item);
  renderTemplateBuilder();
}

function moveBuilderItemGroup(itemId, group) {
  const item = state.builder.items.find((entry) => entry.id === itemId);
  if (!item) return;
  item.group = group;
  renderTemplateBuilder();
}

function toggleBuilderItemPurpose(itemId) {
  const item = state.builder.items.find((entry) => entry.id === itemId);
  if (!item) return;
  item.purpose = item.purpose === "参考生成" ? "固定插入" : "参考生成";
  renderTemplateBuilder();
}

function toggleBuilderItemEnabled(itemId) {
  const item = state.builder.items.find((entry) => entry.id === itemId);
  if (!item) return;
  item.enabled = !isTemplateItemEnabled(item);
  renderTemplateBuilder();
}

function removeBuilderItem(itemId) {
  state.builder.items = state.builder.items.filter((item) => item.id !== itemId);
  renderTemplateBuilder();
}

function validateBuilder() {
  updateBuilderFromInputs();
  const label = state.builderTarget === "solution" ? "方案" : "模板";
  if (!state.builder.name) return `请输入${label}名称`;
  if (!state.builder.category) return "请选择商品分类";
  if (!state.builder.items.length) return "请至少添加一张图片内容";
  if (!getEnabledTemplateItems(state.builder.items).length) return "请至少启用一张图片参与长图拼接";
  return "";
}

function saveTemplateBuilder() {
  const error = validateBuilder();
  if (error) {
    showToast(error);
    return;
  }
  const now = "2026-07-16 11:30";
  const isSolution = state.builderTarget === "solution";
  const collection = isSolution ? suiteSolutions : templates;
  if (state.builderMode === "edit" && state.builderEditingId) {
    const item = collection.find((entry) => entry.id === state.builderEditingId);
    if (item) {
      Object.assign(item, {
        name: state.builder.name,
        description: state.builder.description,
        category: state.builder.category,
        brand: state.builder.brand,
        groups: [...state.builder.groups],
        tags: [...state.builder.groups, state.builder.category],
        items: state.builder.items.map((item) => ({ ...item })),
        updatedAt: now
      });
    }
  } else {
    collection.unshift({
      id: `${isSolution ? "solution" : "tpl"}${String(Date.now()).slice(-6)}`,
      name: state.builder.name,
      description: state.builder.description,
      category: state.builder.category,
      brand: state.builder.brand,
      scope: isSolution ? "我的套图模板" : "我的模板",
      groups: [...state.builder.groups],
      usage: 0,
      updatedAt: now,
      tags: [...state.builder.groups, state.builder.category],
      items: state.builder.items.map((item) => ({ ...item }))
    });
  }
  if (isSolution) {
    filterSuiteSolutions();
    closePrototypeModals();
    setWorkspacePage("suite-solution-library");
    clearMenuActive();
    document.querySelector('[data-single-menu="模板"]')?.classList.add("active");
    syncModuleTemplateTabs("suite-solution-library");
    showToast("套图模板已保存");
  } else {
    filterTemplates();
    closePrototypeModals();
    setWorkspacePage("template-center");
    clearMenuActive();
    document.querySelector('[data-single-menu="模板"]')?.classList.add("active");
    syncModuleTemplateTabs("template-center");
    showToast("套图模板已保存");
  }
}

function renderMaterialFilterTabs() {
  document.querySelectorAll("[data-material-primary]").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.materialPrimary === state.materialPrimary);
  });

  if (!els.materialSecondaryTabs) return;
  const secondaryTypes = ["全部", ...(materialCategoryGroups[state.materialPrimary] || [])];
  els.materialSecondaryTabs.innerHTML = secondaryTypes.map((type) => `
    <button class="${type === state.materialSecondary ? "is-active" : ""}" type="button" data-material-secondary="${type}">${type}</button>
  `).join("");
}

function setMaterialPrimary(primary) {
  if (!materialCategoryGroups[primary]) return;
  state.materialPrimary = primary;
  state.materialSecondary = "全部";
  filterMaterials();
}

function setMaterialSecondary(secondary) {
  const allowed = ["全部", ...(materialCategoryGroups[state.materialPrimary] || [])];
  if (!allowed.includes(secondary)) return;
  state.materialSecondary = secondary;
  filterMaterials();
}

function renderMaterialCards(list) {
  if (!els.materialGrid) return;
  if (els.materialCount) els.materialCount.textContent = `共 ${list.length} 个作品`;

  els.materialGrid.innerHTML = list.map((material) => {
    const badgeType = getBoutiqueMaterialBadgeType(material);
    return `
    <article class="resource-card boutique-resource-card" data-material-id="${material.id}">
      <div class="resource-cover ${material.tone}">
        <button class="boutique-card-open" type="button" data-preview-drawer-image="${material.image}" aria-label="放大预览${material.name}">
          <img src="${material.image}" alt="${material.name}">
        </button>
        ${badgeType ? `<span class="resource-badge category">${badgeType}</span>` : ""}
        <h3 class="resource-card-title">${material.name}</h3>
        <span class="boutique-card-tags">${material.tags.slice(0, 2).join(" · ")}</span>
        <div class="boutique-card-action-row" aria-label="${material.name} 操作">
          <div class="brand-asset-hover-actions boutique-card-icon-actions">
            <button type="button" data-boutique-download="${material.id}" title="下载" aria-label="下载${material.name}"><img src="assets/module-result-action-download-hover.png" alt=""></button>
            <button type="button" data-boutique-outpaint="${material.id}" title="扩图" aria-label="扩图${material.name}"><img src="assets/module-result-action-outpaint-hover.png" alt=""></button>
            <button type="button" data-boutique-remove="${material.id}" title="取消收藏" aria-label="取消收藏${material.name}"><img src="assets/boutique-action-unfavorite.png" alt=""></button>
          </div>
          <button class="boutique-card-create" type="button" data-boutique-return-task="${material.id}">返回任务</button>
        </div>
      </div>
    </article>
  `;
  }).join("");

  const hasKeyword = Boolean(els.materialSearch?.value.trim());
  const hasFilter = document.querySelector("[data-boutique-filter].is-active")?.dataset.boutiqueFilter !== "all";
  els.materialGrid.classList.toggle("is-hidden", list.length === 0);
  els.materialEmptyState?.classList.toggle("is-visible", materialLibrary.length === 0);
  els.materialNoResultState?.classList.toggle("is-visible", materialLibrary.length > 0 && list.length === 0 && (hasKeyword || hasFilter));
}

function filterMaterials() {
  if (!els.materialGrid) return;
  const keyword = els.materialSearch?.value.trim().toLowerCase() || "";
  const activeFilter = document.querySelector("[data-boutique-filter].is-active")?.dataset.boutiqueFilter || "all";

  state.filteredMaterials = materialLibrary.filter((material) => {
    const haystack = [material.name, material.type, material.category, material.relatedProduct, material.source, material.status, material.description, material.scene, ...material.tags].join(" ").toLowerCase();
    const matchKeyword = !keyword || haystack.includes(keyword);
    const materialType = getBoutiqueMaterialBadgeType(material);
    const matchType = activeFilter === "all" || materialType === activeFilter;
    return matchKeyword && matchType;
  });

  renderMaterialCards(state.filteredMaterials);
}

function getMaterial(materialId) {
  return materialLibrary.find((item) => item.id === materialId);
}

function normalizeCreationTaskType(type) {
  return {
    单图生成: "自由创作",
    套图创作: "复刻生图",
    套图复刻: "复刻生图",
    模块生图: "复刻生图",
    模板生图: "复刻生图",
    单图复刻: "复刻生图",
    多图复刻: "复刻生图",
    扩图: "AI工具",
    模块创建: "新建图生图模块"
  }[type] || type || "all";
}

const boutiquePrimaryTypes = ["复刻生图", "自由创作"];

function getBoutiqueMaterialTaskType(material) {
  return normalizeCreationTaskType(material?.taskType || material?.assetType || material?.type);
}

function getBoutiqueMaterialBadgeType(material) {
  const taskType = getBoutiqueMaterialTaskType(material);
  return boutiquePrimaryTypes.includes(taskType) ? taskType : "";
}

function ensureBoutiqueTaskKey(taskCard) {
  if (!taskCard) return "";
  if (!taskCard.dataset.boutiqueTaskKey) {
    taskCard.dataset.boutiqueTaskKey = `boutique-task-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
  }
  return taskCard.dataset.boutiqueTaskKey;
}

function getBoutiqueSourceTaskCard(material) {
  const taskType = getBoutiqueMaterialTaskType(material);
  const taskCards = Array.from(document.querySelectorAll("[data-creation-task-card]"));
  const sourceTask = material?.sourceTaskKey
    ? taskCards.find((card) => card.dataset.boutiqueTaskKey === material.sourceTaskKey)
    : null;

  if (sourceTask && normalizeCreationTaskType(sourceTask.dataset.type) === taskType) return sourceTask;
  return taskCards.find((card) => normalizeCreationTaskType(card.dataset.type) === taskType) || null;
}

function createBoutiqueTaskFallback(material) {
  const taskCard = document.createElement("article");
  const taskType = getBoutiqueMaterialTaskType(material);
  taskCard.dataset.type = taskType === "all" ? "自由创作" : taskType;
  taskCard.dataset.title = material?.name || "精品库创作任务";
  taskCard.dataset.product = material?.relatedProduct || material?.category || "";
  taskCard.dataset.status = "done";
  if (taskType === "AI工具") taskCard.dataset.aiToolType = material?.aiToolType || "智能扩图";
  return taskCard;
}

function returnToBoutiqueTask(material) {
  if (!material) return;
  openCreationRecordTaskDetail(getBoutiqueSourceTaskCard(material) || createBoutiqueTaskFallback(material));
}

function getCreationTaskAiToolType(card) {
  if (!card) return "all";
  if (card.dataset.aiToolType) return card.dataset.aiToolType;
  return card.dataset.type === "扩图" ? "智能扩图" : "all";
}

function setPreviewMetaLabels({ price = "价格", fit = "适用品类" } = {}) {
  const priceNode = document.querySelector("[data-preview-price]");
  const fitNode = document.querySelector("[data-preview-description]");
  if (priceNode?.previousElementSibling) priceNode.previousElementSibling.textContent = price;
  if (fitNode?.previousElementSibling) fitNode.previousElementSibling.textContent = fit;
}

function openMaterialPreviewModal(materialId) {
  const material = getMaterial(materialId);
  if (!material) return;

  state.previewResourceCard = null;
  state.previewMaterial = material;
  setPreviewMetaLabels({ price: "状态", fit: "关联商品" });
  document.querySelector("[data-preview-title]").textContent = material.name;
  document.querySelector("[data-preview-image]").src = material.image;
  document.querySelector("[data-preview-category]").textContent = material.category;
  document.querySelector("[data-preview-type]").textContent = material.type;
  document.querySelector("[data-preview-price]").textContent = material.status;
  document.querySelector("[data-preview-description]").textContent = material.description || material.relatedProduct || "--";
  const previewUseButton = document.querySelector("[data-preview-use]");
  if (previewUseButton) {
    previewUseButton.hidden = false;
    previewUseButton.textContent = "使用素材";
  }
  openPrototypeModal(els.resourcePreviewModal);
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
  document.querySelector('[data-single-menu="创作中心"]').classList.add("active");
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
  if (editorTypes.includes(material.type)) {
    openBrandMaterialEditor();
    showToast(`正在编辑：${material.name}`);
    return;
  }
  showToast("已进入素材编辑状态（原型模拟）");
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
    : `
      <button class="btn danger drawer-delete-btn" type="button" data-delete-product>删除</button>
      <button class="btn primary drawer-edit-btn" type="button" data-edit-drawer>编辑</button>
    `;
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

const suiteImageComparisonState = {
  page: null,
  productImages: [],
  productIndex: 0,
  view: {
    product: { scale: 1, x: 0, y: 0 },
    output: { scale: 1, x: 0, y: 0 }
  },
  drag: null
};

function clampSuiteImageCompareScale(value) {
  return Math.min(4, Math.max(1, Number(value.toFixed(2))));
}

function updateSuiteImageCompareViewport(kind) {
  const modal = document.querySelector("[data-suite-image-compare-modal]");
  const viewport = modal?.querySelector(`[data-suite-image-compare-viewport="${kind}"]`);
  const scaleLabel = modal?.querySelector(`[data-suite-image-compare-scale="${kind}"]`);
  if (!viewport || !suiteImageComparisonState.view[kind]) return;
  const view = suiteImageComparisonState.view[kind];
  viewport.style.setProperty("--suite-compare-scale", String(view.scale));
  viewport.style.setProperty("--suite-compare-x", `${view.x}px`);
  viewport.style.setProperty("--suite-compare-y", `${view.y}px`);
  viewport.classList.toggle("is-zoomed", view.scale > 1);
  if (scaleLabel) scaleLabel.textContent = `${Math.round(view.scale * 100)}%`;
}

function resetSuiteImageCompareViewport(kind) {
  suiteImageComparisonState.view[kind] = { scale: 1, x: 0, y: 0 };
  updateSuiteImageCompareViewport(kind);
}

function getSuiteImageCompareModal() {
  let modal = document.querySelector("[data-suite-image-compare-modal]");
  if (modal) return modal;
  modal = document.createElement("div");
  modal.className = "suite-image-compare-modal";
  modal.dataset.suiteImageCompareModal = "";
  modal.setAttribute("aria-hidden", "true");
  modal.innerHTML = `
    <div class="suite-image-compare-dialog" role="dialog" aria-modal="true" aria-labelledby="suite-image-compare-title">
      <header class="suite-image-compare-head">
        <div><strong id="suite-image-compare-title">商品图与生成结果对比</strong><span>滚轮缩放，拖拽查看细节</span></div>
        <button type="button" data-suite-image-compare-close aria-label="关闭对比预览">×</button>
      </header>
      <div class="suite-image-compare-grid">
        <div class="suite-image-compare-side">
          <section class="suite-image-compare-panel">
            <div class="suite-image-compare-viewport" data-suite-image-compare-viewport="product"><span class="suite-image-compare-image-tag">商品图</span><img data-suite-image-compare-product-image alt="商品图预览"></div>
            <div class="suite-image-compare-controls" aria-label="商品图缩放控制">
              <button type="button" data-suite-image-compare-zoom="product:out" aria-label="缩小商品图">−</button><span data-suite-image-compare-scale="product">100%</span><button type="button" data-suite-image-compare-zoom="product:in" aria-label="放大商品图">＋</button><button type="button" data-suite-image-compare-zoom="product:reset">重置</button>
            </div>
          </section>
          <div class="suite-image-compare-thumbnails" data-suite-image-compare-thumbnails></div>
        </div>
        <div class="suite-image-compare-direction" aria-hidden="true"><img src="assets/suite-image-compare-arrow.svg" alt=""></div>
        <div class="suite-image-compare-side">
          <section class="suite-image-compare-panel">
            <div class="suite-image-compare-viewport" data-suite-image-compare-viewport="output"><span class="suite-image-compare-image-tag">生成结果</span><img data-suite-image-compare-output-image alt="生成结果预览"></div>
            <div class="suite-image-compare-controls" aria-label="生成结果缩放控制">
              <button type="button" data-suite-image-compare-zoom="output:out" aria-label="缩小生成结果">−</button><span data-suite-image-compare-scale="output">100%</span><button type="button" data-suite-image-compare-zoom="output:in" aria-label="放大生成结果">＋</button><button type="button" data-suite-image-compare-zoom="output:reset">重置</button>
            </div>
          </section>
        </div>
      </div>
    </div>
  `;
  document.body.appendChild(modal);
  modal.addEventListener("click", (event) => {
    const close = event.target.closest("[data-suite-image-compare-close]");
    const thumbnail = event.target.closest("[data-suite-image-compare-thumbnail]");
    const zoom = event.target.closest("[data-suite-image-compare-zoom]");
    if (close) {
      closeSuiteImageComparison();
      return;
    }
    if (thumbnail) {
      const nextIndex = Number(thumbnail.dataset.suiteImageCompareThumbnail || 0);
      const image = suiteImageComparisonState.productImages[nextIndex];
      if (!image) return;
      suiteImageComparisonState.productIndex = nextIndex;
      const productImage = modal.querySelector("[data-suite-image-compare-product-image]");
      if (productImage) productImage.src = image.url || image.image;
      modal.querySelectorAll("[data-suite-image-compare-thumbnail]").forEach((item) => item.classList.toggle("is-active", item === thumbnail));
      resetSuiteImageCompareViewport("product");
      return;
    }
    if (!zoom) return;
    const [kind, action] = zoom.dataset.suiteImageCompareZoom.split(":");
    if (!suiteImageComparisonState.view[kind]) return;
    if (action === "reset") {
      resetSuiteImageCompareViewport(kind);
      return;
    }
    const view = suiteImageComparisonState.view[kind];
    view.scale = clampSuiteImageCompareScale(view.scale + (action === "in" ? 0.2 : -0.2));
    if (view.scale === 1) { view.x = 0; view.y = 0; }
    updateSuiteImageCompareViewport(kind);
  });
  modal.addEventListener("wheel", (event) => {
    const viewport = event.target.closest("[data-suite-image-compare-viewport]");
    if (!viewport) return;
    event.preventDefault();
    const kind = viewport.dataset.suiteImageCompareViewport;
    const view = suiteImageComparisonState.view[kind];
    if (!view) return;
    view.scale = clampSuiteImageCompareScale(view.scale + (event.deltaY < 0 ? 0.12 : -0.12));
    if (view.scale === 1) { view.x = 0; view.y = 0; }
    updateSuiteImageCompareViewport(kind);
  }, { passive: false });
  modal.addEventListener("pointerdown", (event) => {
    const viewport = event.target.closest("[data-suite-image-compare-viewport]");
    if (!viewport) return;
    const kind = viewport.dataset.suiteImageCompareViewport;
    const view = suiteImageComparisonState.view[kind];
    if (!view || view.scale <= 1) return;
    suiteImageComparisonState.drag = { kind, pointerId: event.pointerId, startX: event.clientX, startY: event.clientY, originX: view.x, originY: view.y };
    viewport.setPointerCapture?.(event.pointerId);
    viewport.classList.add("is-panning");
  });
  modal.addEventListener("pointermove", (event) => {
    const drag = suiteImageComparisonState.drag;
    if (!drag || drag.pointerId !== event.pointerId) return;
    const view = suiteImageComparisonState.view[drag.kind];
    view.x = drag.originX + event.clientX - drag.startX;
    view.y = drag.originY + event.clientY - drag.startY;
    updateSuiteImageCompareViewport(drag.kind);
  });
  const finishDrag = (event) => {
    const drag = suiteImageComparisonState.drag;
    if (!drag || drag.pointerId !== event.pointerId) return;
    modal.querySelector(`[data-suite-image-compare-viewport="${drag.kind}"]`)?.classList.remove("is-panning");
    suiteImageComparisonState.drag = null;
  };
  modal.addEventListener("pointerup", finishDrag);
  modal.addEventListener("pointercancel", finishDrag);
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && modal.classList.contains("is-open")) closeSuiteImageComparison();
  });
  return modal;
}

function openSuiteImageComparison(pageId) {
  const editor = getSuiteEditor();
  const page = getSuiteCanvasPageById(pageId, editor);
  const productImages = getSuiteDetailProductImages(editor);
  if (!page || page.status === "loading") return;
  if (!productImages.length) {
    showToast("请先上传商品图后再进行对比");
    return;
  }
  const modal = getSuiteImageCompareModal();
  suiteImageComparisonState.page = page;
  suiteImageComparisonState.productImages = productImages;
  suiteImageComparisonState.productIndex = 0;
  suiteImageComparisonState.drag = null;
  resetSuiteImageCompareViewport("product");
  resetSuiteImageCompareViewport("output");
  const firstProduct = productImages[0];
  modal.querySelector("[data-suite-image-compare-product-image]").src = firstProduct.url || firstProduct.image;
  modal.querySelector("[data-suite-image-compare-output-image]").src = page.image;
  const outputTitle = modal.querySelector("[data-suite-image-compare-output-title]");
  if (outputTitle) outputTitle.textContent = getSuitePageExportTitle(page, editor);
  const thumbnails = modal.querySelector("[data-suite-image-compare-thumbnails]");
  thumbnails.hidden = productImages.length <= 1;
  thumbnails.innerHTML = productImages.map((image, index) => `<button class="${index === 0 ? "is-active" : ""}" type="button" data-suite-image-compare-thumbnail="${index}" aria-label="切换商品图 ${index + 1}"><img src="${image.url || image.image}" alt="商品图 ${index + 1}"><span>${index + 1}</span></button>`).join("");
  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");
}

function closeSuiteImageComparison() {
  const modal = document.querySelector("[data-suite-image-compare-modal]");
  if (!modal) return;
  suiteImageComparisonState.drag = null;
  modal.classList.remove("is-open");
  modal.setAttribute("aria-hidden", "true");
}

function openDrawerImagePreview(src, options = {}) {
  if (!src || !els.drawerImagePreview || !els.drawerImagePreviewImg) return;
  els.drawerImagePreviewImg.src = src;
  els.drawerImagePreview.classList.toggle("is-model-preview", Boolean(options.modelPreview));
  els.drawerImagePreview.classList.toggle("has-caption", Boolean(options.caption));
  els.drawerImagePreview.classList.remove("is-template-long-preview", "is-brand-preview");
  if (els.brandPreviewContent) els.brandPreviewContent.innerHTML = "";
  if (els.drawerLongPreview) els.drawerLongPreview.innerHTML = "";
  if (els.drawerPreviewCaption) els.drawerPreviewCaption.textContent = options.caption || "";
  els.drawerImagePreview.classList.add("is-open");
  els.drawerImagePreview.setAttribute("aria-hidden", "false");
}

function openTemplateLongPreview(template) {
  if (!template || !els.drawerImagePreview || !els.drawerLongPreview || !els.drawerImagePreviewImg) return;
  els.drawerImagePreviewImg.removeAttribute("src");
  if (els.brandPreviewContent) els.brandPreviewContent.innerHTML = "";
  els.drawerLongPreview.innerHTML = renderLongPreview(getEnabledTemplateItems(template.items), { emptyText: "暂无启用内容" });
  if (els.drawerPreviewCaption) els.drawerPreviewCaption.textContent = template.name;
  els.drawerImagePreview.classList.remove("is-model-preview", "is-brand-preview", "has-caption");
  els.drawerImagePreview.classList.add("is-template-long-preview", "is-open");
  els.drawerImagePreview.setAttribute("aria-hidden", "false");
}

function openSuiteExportLongPreview(pages = getSuiteExportSelection(), editor = getSuiteEditor()) {
  if (!pages.length || !els.drawerImagePreview || !els.drawerLongPreview || !els.drawerImagePreviewImg) return;
  const previewItems = pages.map((page) => ({
    image: page.image,
    title: getSuitePageExportTitle(page, editor)
  }));
  els.drawerImagePreviewImg.removeAttribute("src");
  if (els.brandPreviewContent) els.brandPreviewContent.innerHTML = "";
  els.drawerLongPreview.innerHTML = renderLongPreview(previewItems, { emptyText: "暂无可预览图片" });
  if (els.drawerPreviewCaption) els.drawerPreviewCaption.textContent = `组合长图预览 · ${pages.length} 张`;
  els.drawerImagePreview.classList.remove("is-model-preview", "is-brand-preview", "has-caption");
  els.drawerImagePreview.classList.add("is-template-long-preview", "is-open");
  els.drawerImagePreview.setAttribute("aria-hidden", "false");
}

function closeDrawerImagePreview() {
  if (!els.drawerImagePreview || !els.drawerImagePreviewImg) return;
  els.drawerImagePreview.classList.remove("is-open");
  els.drawerImagePreview.classList.remove("is-model-preview");
  els.drawerImagePreview.classList.remove("is-template-long-preview", "is-brand-preview", "has-caption");
  els.drawerImagePreview.setAttribute("aria-hidden", "true");
  els.drawerImagePreviewImg.removeAttribute("src");
  if (els.drawerLongPreview) els.drawerLongPreview.innerHTML = "";
  if (els.drawerPreviewCaption) els.drawerPreviewCaption.textContent = "";
  if (els.brandPreviewContent) els.brandPreviewContent.innerHTML = "";
}

function openBrandAssetPreview(card) {
  const cover = card?.querySelector("[data-brand-asset-preview]");
  if (!cover || !els.drawerImagePreview || !els.brandPreviewContent) return;

  const preview = cover.cloneNode(true);
  preview.removeAttribute("data-brand-asset-preview");
  preview.querySelector(".brand-asset-hover-actions")?.remove();
  els.brandPreviewContent.innerHTML = "";
  els.brandPreviewContent.appendChild(preview);
  els.drawerImagePreviewImg?.removeAttribute("src");
  els.drawerLongPreview && (els.drawerLongPreview.innerHTML = "");
  els.drawerPreviewCaption && (els.drawerPreviewCaption.textContent = "");
  els.drawerImagePreview.classList.remove("is-model-preview", "is-template-long-preview", "has-caption");
  els.drawerImagePreview.classList.add("is-brand-preview", "is-open");
  els.drawerImagePreview.setAttribute("aria-hidden", "false");
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

function renderTemplateDetailModal(template) {
  if (!els.templateDetailModal) return;
  state.activeTemplate = template;
  els.templateDetailTitle.textContent = template.name;
  els.templateDetailSubtitle.textContent = `${templateComboLabel(template)} · ${template.category} · ${template.scope}`;
  els.templateDetailPreview.dataset.templateLongPreview = template.id;
  els.templateDetailPreview.innerHTML = renderLongPreview(getEnabledTemplateItems(template.items), { showBadges: true, emptyText: "暂无启用内容" });
  els.templateDetailMeta.innerHTML = `
    <dl>
      <div><dt>模板名称</dt><dd>${template.name}</dd></div>
      <div><dt>商品分类</dt><dd>${template.category}</dd></div>
      <div><dt>品牌名称</dt><dd>${template.brand || "未填写"}</dd></div>
      <div><dt>模板分组</dt><dd>${template.groups.join(" / ")}</dd></div>
      <div><dt>更新时间</dt><dd>${template.updatedAt}</dd></div>
    </dl>
  `;
  els.templateDetailItems.innerHTML = template.items.map((item, index) => `
    <article class="template-detail-item ${isTemplateItemEnabled(item) ? "" : "is-disabled"}">
      <img src="${item.image}" alt="${item.title}">
      <div>
        <strong>${index + 1}. ${item.title}</strong>
        <span>${item.group} · ${item.purpose} · ${item.source}</span>
      </div>
    </article>
  `).join("");
  els.templateDetailEdit.innerHTML = "";
}

function setTemplateDetailMode(mode) {
  state.templateModalEditing = mode === "edit";
  els.templateDetailPanel?.setAttribute("data-template-detail-mode", mode);
  if (mode === "edit" && state.activeTemplate) {
    resetTemplateBuilder(state.activeTemplate);
    els.templateDetailEdit.innerHTML = `
      <div class="template-modal-edit-note">编辑态已载入模板内容，可保存、添加内容、调整用途或删除模板。</div>
      <div class="template-modal-edit-grid">
        <label><span>模板名称</span><input type="text" data-modal-edit-name value="${state.builder.name}"></label>
        <label><span>商品分类</span><select data-modal-edit-category>
          ${["文胸", "内裤", "童装", "鞋子", "箱包"].map((category) => `<option value="${category}" ${state.builder.category === category ? "selected" : ""}>${category}</option>`).join("")}
        </select></label>
        <label><span>品牌名称</span><input type="text" data-modal-edit-brand value="${state.builder.brand}"></label>
        <label class="wide"><span>模板描述</span><textarea data-modal-edit-description>${state.builder.description}</textarea></label>
      </div>
      <div class="template-modal-edit-list">
        ${state.activeTemplate.items.map((item) => `
          <article class="template-modal-edit-item ${isTemplateItemEnabled(item) ? "" : "is-disabled"}">
            <img src="${item.image}" alt="${item.title}">
            <div>
              <strong>${item.title}</strong>
              <span>${item.group} · ${item.purpose} · ${item.source}</span>
            </div>
            <button type="button" data-modal-toggle-enabled="${item.id}">${isTemplateItemEnabled(item) ? "取消启用" : "启用"}</button>
            <button type="button" data-modal-toggle-purpose="${item.id}">${item.purpose === "参考生成" ? "设为固定插入" : "设为参考生成"}</button>
            <button type="button" data-modal-remove-item="${item.id}">删除</button>
          </article>
        `).join("")}
      </div>
    `;
  } else if (state.activeTemplate) {
    renderTemplateDetailModal(state.activeTemplate);
  }
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

  renderTemplateDetailModal(template);
  setTemplateDetailMode("view");
  openPrototypeModal(els.templateDetailModal);
}

function editTemplateInBuilder(templateId) {
  const template = templates.find((item) => item.id === templateId);
  if (!template) return;

  resetTemplateBuilder(template);
  closePrototypeModals();
  clearMenuActive();
  document.querySelector('[data-single-menu="模板"]')?.classList.add("active");
  openTemplateBuilderModal();
  showToast("已打开套图模板编辑器");
}

function closeDrawer() {
  els.drawer.classList.remove("is-open");
  els.drawerBackdrop.classList.remove("is-open");
  closeCustomParameterModal();
}

function openProductDeleteConfirm() {
  const product = state.activeProduct;
  const modal = document.querySelector("[data-product-delete-modal]");
  const message = document.querySelector("[data-product-delete-message]");
  const confirm = document.querySelector("[data-product-delete-confirm]");
  if (!product || product.isNew || !modal || !confirm) return;
  if (message) message.textContent = `确认删除商品「${product.name}」吗？删除后不可恢复。`;
  confirm.dataset.productDeleteConfirm = product.id;
  openPrototypeModal(modal);
}

function deletePendingProduct(productId) {
  const index = products.findIndex((item) => item.id === productId);
  if (index < 0) return;
  const [product] = products.splice(index, 1);
  state.activeProduct = null;
  filterProducts();
  closePrototypeModals();
  closeDrawer();
  showToast(`已删除商品：${product.name}`);
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
  const target = group.dataset.navTarget;
  if (target) {
    const children = document.querySelector(`[data-nav-children="${target}"]`);
    return children ? [children] : [];
  }
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
  group.setAttribute("aria-expanded", String(expanded));
  getNavGroupItems(group).forEach((item) => item.classList.toggle("nav-hidden", !expanded));
}

function setWorkspacePage(pageName) {
  els.pages.forEach((page) => {
    page.classList.toggle("active", page.dataset.page === pageName);
  });
  els.body.classList.toggle("is-creation-detail", pageName === "creation-detail");
  els.body.classList.toggle("is-module-image-create", pageName === "module-image-create");
  els.body.classList.toggle("is-module-flow", pageName === "module-generation-flow");
  els.body.classList.toggle("is-template-flow", pageName === "template-generation-flow");
  els.body.classList.toggle("is-module-static-create", pageName === "module-static-create");
  els.body.classList.toggle("is-multi-task", pageName === "multi-image-creation");
  els.body.classList.toggle("is-model-create-page", pageName === "model-create-page");
  els.body.classList.toggle("is-suite-replica-editor", pageName === "suite-replica-editor");
  els.body.classList.toggle("is-brand-editor", pageName === "brand-material-editor");
  els.body.classList.toggle("is-outpaint-editor", pageName === "outpaint-editor");
  closeCreateMenu();
  if (pageName !== "product-library" || els.drawer.dataset.drawerKind !== "product") {
    closeDrawer();
  }
  document.querySelectorAll("[data-asset-library-tab]").forEach((tab) => {
    const active = tab.dataset.assetLibraryTab === pageName;
    tab.classList.toggle("is-active", active);
    tab.setAttribute("aria-selected", String(active));
  });
}

const outpaintDragState = {
  active: false,
  pointerId: null,
  startX: 0,
  startY: 0,
  originX: 0,
  originY: 0
};

function outpaintClamp(value) {
  return Math.max(512, Math.min(4096, Math.round(Number(value) || 1200)));
}

function outpaintExceedsLimit(size) {
  return size.width > 4096 || size.height > 4096;
}

function outpaintPresetSize(ratio, scale) {
  const source = state.outpaint;
  if (ratio === "original" || ratio === "1:1") {
    return { width: Math.round(source.sourceWidth * scale), height: Math.round(source.sourceHeight * scale) };
  }
  const [rw, rh] = ratio.split(":").map(Number);
  if (rw <= rh) {
    const width = Math.floor(source.sourceWidth * scale);
    return { width, height: Math.floor(width * rh / rw) };
  }
  const height = Math.floor(source.sourceHeight * scale);
  return { width: Math.floor(height * rw / rh), height };
}

function renderOutpaintTransform() {
  if (!outpaintEls.boardStrip) return;
  outpaintEls.boardStrip.style.transform = `translate(${state.outpaint.canvasX}px, ${state.outpaint.canvasY}px) scale(${state.outpaint.canvasScale})`;
  if (outpaintEls.zoom) outpaintEls.zoom.textContent = `${Math.round(state.outpaint.canvasScale * 100)}%`;
}

function zoomOutpaint(delta, clientX, clientY) {
  if (!outpaintEls.canvasShell) return;
  const rect = outpaintEls.canvasShell.getBoundingClientRect();
  const previous = state.outpaint.canvasScale;
  const next = Math.max(.45, Math.min(2.4, previous + delta));
  if (next === previous) return;
  const originX = clientX - rect.left;
  const originY = clientY - rect.top;
  const ratio = next / previous;
  state.outpaint.canvasX = originX - (originX - state.outpaint.canvasX) * ratio;
  state.outpaint.canvasY = originY - (originY - state.outpaint.canvasY) * ratio;
  state.outpaint.canvasScale = next;
  renderOutpaintTransform();
}

function panOutpaint(deltaX, deltaY) {
  state.outpaint.canvasX += deltaX;
  state.outpaint.canvasY += deltaY;
  renderOutpaintTransform();
}

function renderOutpaint() {
  if (!outpaintEls.editor) return;
  const current = state.outpaint;
  current.width = outpaintClamp(current.width);
  current.height = outpaintClamp(current.height);
  const ratio = current.width / current.height;
  outpaintEls.editor.style.setProperty("--outpaint-source-image", `url("${current.sourceImage}")`);
  outpaintEls.editor.style.setProperty("--outpaint-ratio", `${current.width} / ${current.height}`);
  outpaintEls.editor.style.setProperty("--outpaint-source-size", `${Math.min(94, Math.max(32, current.sourceWidth / current.width * 100))}%`);
  outpaintEls.artboardWrap?.style.setProperty("--outpaint-ratio", `${current.width} / ${current.height}`);
  outpaintEls.artboardWrap?.classList.toggle("wide", ratio > 1.35);
  outpaintEls.artboardWrap?.classList.toggle("tall", ratio < .72);
  if (outpaintEls.selectionSize) outpaintEls.selectionSize.textContent = `${current.width} × ${current.height}`;
  outpaintEls.ratioList?.querySelectorAll("[data-outpaint-ratio]").forEach((button) => {
    button.classList.toggle("active", button.dataset.outpaintRatio === current.ratio);
  });
  renderOutpaintTransform();
}

function resetOutpaintResult() {
  state.outpaint.generated = false;
  outpaintEls.artboard?.classList.remove("generated", "processing");
  outpaintEls.artboard?.classList.add("pending");
  if (outpaintEls.resultSlot) outpaintEls.resultSlot.innerHTML = "";
  if (outpaintEls.generate) {
    outpaintEls.generate.disabled = false;
    outpaintEls.generate.innerHTML = "生成 <span>8</span>";
  }
  outpaintEls.resultMenu?.classList.remove("show");
}

function updateOutpaintRatio(ratio) {
  const nextScale = Number(outpaintEls.scale?.value || 1);
  const next = outpaintPresetSize(ratio, nextScale);
  if (outpaintExceedsLimit(next)) {
    if (outpaintEls.scale) outpaintEls.scale.value = String(state.outpaint.scale);
    showToast("最终尺寸超出扩图限制");
    return;
  }
  state.outpaint.ratio = ratio;
  state.outpaint.scale = nextScale;
  state.outpaint.width = next.width;
  state.outpaint.height = next.height;
  resetOutpaintResult();
  renderOutpaint();
}

function createOutpaintResult() {
  if (!outpaintEls.resultSlot) return;
  outpaintEls.resultSlot.innerHTML = `
    <div class="integrated-outpaint-artboard-wrap integrated-outpaint-result-wrap">
      <div class="integrated-outpaint-selection-label">扩图结果</div>
      <div class="integrated-outpaint-selection-size">${state.outpaint.width} × ${state.outpaint.height}</div>
      <div class="integrated-outpaint-artboard generated" data-outpaint-result-artboard>
        <div class="integrated-outpaint-expanded-bg"></div>
        <div class="integrated-outpaint-source-photo"></div>
        <span class="integrated-outpaint-handle lt"></span><span class="integrated-outpaint-handle rt"></span>
        <span class="integrated-outpaint-handle lb"></span><span class="integrated-outpaint-handle rb"></span>
        <span class="integrated-outpaint-handle tm"></span><span class="integrated-outpaint-handle bm"></span>
        <span class="integrated-outpaint-handle lm"></span><span class="integrated-outpaint-handle rm"></span>
      </div>
    </div>
  `;
  const resultWrap = outpaintEls.resultSlot.querySelector(".integrated-outpaint-result-wrap");
  resultWrap?.style.setProperty("--outpaint-ratio", `${state.outpaint.width} / ${state.outpaint.height}`);
  const ratio = state.outpaint.width / state.outpaint.height;
  resultWrap?.classList.toggle("wide", ratio > 1.35);
  resultWrap?.classList.toggle("tall", ratio < .72);
}

function appendOutpaintTaskRecord() {
  const flow = document.querySelector("[data-creation-task-flow]");
  if (!flow) return;
  const title = `${state.creation.category}商品图扩图`;
  const record = document.createElement("article");
  record.className = "creation-task-card";
  record.dataset.creationTaskCard = "";
  record.dataset.status = "done";
  record.dataset.type = "AI工具";
  record.dataset.aiToolType = "智能扩图";
  record.dataset.title = title;
  record.dataset.product = state.creation.category;
  record.dataset.boutiqueState = "none";
  record.innerHTML = `
    <div class="creation-task-thumb outpaint">
      <div class="outpaint-before"><img src="${state.outpaint.sourceImage}" alt=""></div>
      <div class="outpaint-after"><img src="${state.outpaint.sourceImage}" alt=""></div>
      <span class="creation-task-type">扩图</span>
    </div>
    <div class="creation-task-main">
      <div class="creation-task-title-row"><h2>${title}</h2><span class="creation-task-status done">已完成</span></div>
      <div class="creation-task-meta"><span>1 张图</span><span>${state.outpaint.width} × ${state.outpaint.height}</span><span>刚刚</span></div>
      <div class="creation-task-tags"><span>扩图</span><span>${state.creation.category}</span><span>${state.outpaint.ratio}</span></div>
    </div>
    <div class="creation-task-action"><button class="btn primary" type="button" data-open-outpaint>继续扩图</button></div>
  `;
  flow.prepend(record);
}

function generateOutpaint() {
  if (outpaintEls.generate?.disabled) return;
  outpaintEls.resultMenu?.classList.remove("show");
  outpaintEls.generate.disabled = true;
  outpaintEls.generate.textContent = "生成中";
  outpaintEls.artboard?.classList.remove("generated", "pending");
  outpaintEls.artboard?.classList.add("processing");
  window.setTimeout(() => {
    state.outpaint.generated = true;
    outpaintEls.artboard?.classList.remove("processing", "pending");
    outpaintEls.artboard?.classList.add("generated");
    createOutpaintResult();
    outpaintEls.generate.disabled = false;
    outpaintEls.generate.innerHTML = "重新编辑 <span>8</span>";
    appendOutpaintTaskRecord();
    showToast("扩图完成，已生成新图片并写入创作记录");
  }, 1200);
}

function placeOutpaintResultMenu(event) {
  if (!state.outpaint.generated || !outpaintEls.resultMenu || !outpaintEls.canvasShell) return;
  event.preventDefault();
  const rect = outpaintEls.canvasShell.getBoundingClientRect();
  const width = 190;
  const height = 190;
  const x = Math.min(event.clientX - rect.left, rect.width - width - 16);
  const y = Math.min(event.clientY - rect.top, rect.height - height - 16);
  outpaintEls.resultMenu.style.left = `${Math.max(16, x)}px`;
  outpaintEls.resultMenu.style.top = `${Math.max(16, y)}px`;
  outpaintEls.resultMenu.classList.add("show");
}

function openOutpaintEditor(sourceImage = state.outpaint.sourceImage, backPage = "creation-plaza") {
  state.outpaint.sourceImage = sourceImage || "assets/outpaint-main-product.jpg";
  state.outpaint.backPage = backPage;
  state.outpaint.sourceWidth = 2048;
  state.outpaint.sourceHeight = 2048;
  state.outpaint.ratio = "3:4";
  state.outpaint.scale = 1;
  state.outpaint.width = 2048;
  state.outpaint.height = 2730;
  state.outpaint.canvasScale = 1;
  state.outpaint.canvasX = 0;
  state.outpaint.canvasY = 0;
  setWorkspacePage("outpaint-editor");
  clearMenuActive();
  const returnButton = document.querySelector("[data-outpaint-return]");
  if (returnButton) {
    returnButton.lastChild.textContent = backPage === "creation-records" ? "返回创作记录" : backPage === "material-library" ? "返回精品库" : backPage === "ai-tools" ? "返回AI工具" : backPage === "module-image" ? "返回模块生图" : backPage === "suite-replica-editor" ? "返回复刻生图" : "返回创作中心";
  }
  resetOutpaintResult();
  outpaintEls.panel?.classList.add("show");
  document.querySelector("[data-outpaint-open-panel]")?.classList.add("active");
  renderOutpaint();
}

function closeOutpaintEditor() {
  if (state.outpaint.backPage === "creation-records") {
    openCreationRecordsPage();
    return;
  }
  if (state.outpaint.backPage === "material-library") {
    openBoutiqueLibrary();
    return;
  }
  if (state.outpaint.backPage === "ai-tools") {
    setWorkspacePage("ai-tools");
    clearMenuActive();
    document.querySelector('[data-single-menu="AI工具"]')?.classList.add("active");
    return;
  }
  if (state.outpaint.backPage === "module-image") {
    setWorkspacePage("module-image-create");
    renderModuleImageWorkspace();
    return;
  }
  if (state.outpaint.backPage === "suite-replica-editor") {
    setWorkspacePage("suite-replica-editor");
    clearMenuActive();
    document.querySelector('[data-single-menu="创作中心"]')?.classList.add("active");
    renderSuiteReplicaEditor();
    return;
  }
  setWorkspacePage("creation-plaza");
  clearMenuActive();
  document.querySelector('[data-single-menu="创作中心"]')?.classList.add("active");
}

function openCreationRecordsPage() {
  setWorkspacePage("creation-records");
  clearMenuActive();
  document.querySelector('[data-single-menu="创作记录"]')?.classList.add("active");
  filterCreationTasks();
}

function setMaterialLibraryTitle(title) {
  const heading = document.querySelector("[data-material-library-title]");
  if (heading) heading.textContent = title;
}

function getModuleLibraryAsset(assetId) {
  return moduleLibraryAssets.find((item) => item.id === assetId);
}

function moduleLibraryTypeLabel(type = state.moduleLibraryType) {
  return { image: "图生图模板", fixed: "固定图模板", text: "文字模板" }[type] || "模板";
}

function renderModuleLibrary() {
  const grid = document.querySelector("[data-module-library-grid]");
  const empty = document.querySelector("[data-module-library-empty]");
  if (!grid || !empty) return;

  document.querySelectorAll("[data-module-library-tab]").forEach((button) => {
    const active = button.dataset.moduleLibraryTab === state.moduleLibraryType;
    button.classList.toggle("is-active", active);
    button.setAttribute("aria-selected", String(active));
  });
  document.querySelectorAll("[data-module-library-category]").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.moduleLibraryCategory === state.moduleLibraryCategory);
  });
  document.querySelectorAll("[data-module-library-source]").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.moduleLibrarySource === state.moduleLibrarySource);
  });

  grid.innerHTML = state.filteredModuleAssets.map((asset) => {
    return `
      <article class="module-library-card" data-module-library-card="${asset.id}">
        <div class="module-library-cover">
          <button class="module-library-preview" type="button" data-module-library-preview="${asset.id}" aria-label="预览${asset.name}">
            <img src="${asset.image}" alt="${asset.name}">
          </button>
          ${asset.source === "已购模块" ? '<span class="asset-purchased-badge">已购</span>' : ""}
          <h2 class="module-library-cover-title" title="${asset.name}">${asset.name}</h2>
          <div class="module-library-action-row">
            ${asset.source === "已购模块" ? "" : `
              <div class="brand-asset-hover-actions module-library-cover-actions" aria-label="模板操作">
                <button type="button" data-module-library-publish="${asset.id}" title="发布到 AI 图片广场" aria-label="发布到 AI 图片广场"><img src="assets/brand-action-publish.png" alt=""></button>
                <button type="button" data-module-library-edit="${asset.id}" title="编辑" aria-label="编辑"><img src="assets/brand-action-edit.png" alt=""></button>
                <button type="button" data-module-library-delete="${asset.id}" title="删除" aria-label="删除"><img src="assets/brand-action-delete.png" alt=""></button>
              </div>`}
            ${asset.type === "image" ? `<button class="module-library-make" type="button" data-module-library-make="${asset.id}">创作图片</button>` : ""}
          </div>
        </div>
      </article>`;
  }).join("");
  grid.hidden = !state.filteredModuleAssets.length;
  empty.hidden = Boolean(state.filteredModuleAssets.length);
}

function filterModuleLibrary() {
  const keyword = document.querySelector("[data-module-library-search]")?.value.trim().toLowerCase() || "";
  state.filteredModuleAssets = moduleLibraryAssets.filter((asset) => {
    const haystack = [asset.name, asset.description, asset.category, asset.status].join(" ").toLowerCase();
    return asset.type === state.moduleLibraryType &&
      (!keyword || haystack.includes(keyword)) &&
      (state.moduleLibraryCategory === "全部类目" || asset.category === state.moduleLibraryCategory) &&
      (state.moduleLibrarySource === "全部" || asset.source === state.moduleLibrarySource);
  });
  renderModuleLibrary();
}

function setModuleLibraryType(type) {
  if (!["image", "fixed", "text"].includes(type)) return;
  state.moduleLibraryType = type;
  filterModuleLibrary();
}

function openModuleLibraryPreview(assetId) {
  const asset = getModuleLibraryAsset(assetId);
  if (!asset) return;
  state.previewResourceCard = null;
  state.previewMaterial = null;
  setPreviewMetaLabels({ price: "状态", fit: "模板类目" });
  document.querySelector("[data-preview-title]").textContent = asset.name;
  document.querySelector("[data-preview-image]").src = asset.image;
  document.querySelector("[data-preview-category]").textContent = asset.category;
  document.querySelector("[data-preview-type]").textContent = moduleLibraryTypeLabel(asset.type);
  document.querySelector("[data-preview-price]").textContent = asset.status;
  document.querySelector("[data-preview-description]").textContent = asset.description || "--";
  const previewUseButton = document.querySelector("[data-preview-use]");
  if (previewUseButton) {
    previewUseButton.hidden = false;
    previewUseButton.textContent = asset.type === "image" ? "创作图片" : "编辑模板";
  }
  openPrototypeModal(els.resourcePreviewModal);
}

function openModuleLibraryAsset(assetId, action = "edit") {
  const asset = getModuleLibraryAsset(assetId);
  if (!asset) return;
  if (action === "generate") {
    resetModuleFlow();
    moduleFlowState.selectedModule = asset;
    moduleFlowState.lockedModule = true;
    moduleFlowState.step = 2;
    resetModuleImageWorkspace();
    moduleImageState.intent = "generate";
    moduleImageState.backPage = "module-flow";
    moduleImageState.sourceAsset = asset;
    const profile = moduleReuseProfiles[asset.id] || getModuleReuseProfile();
    document.querySelector("[data-module-product-prompt]").value = profile.productPrompt;
    document.querySelector("[data-module-scene-prompt]").value = profile.scenePrompt;
    openModuleImageWorkspace({ backPage: "module-flow", intent: "generate" });
    showToast(`已带入模板「${asset.name}」，请添加商品图后开始创作`);
    return;
  }
  if (asset.type === "image") {
    openModuleImageWorkspace({ fresh: true, backPage: "module-library", intent: action === "create" ? "generate" : "create" });
    moduleImageState.sourceAsset = asset;
    const profile = getModuleReuseProfile();
    document.querySelector("[data-module-product-prompt]").value = profile.productPrompt;
    document.querySelector("[data-module-scene-prompt]").value = profile.scenePrompt;
    renderModuleImageWorkspace();
    showToast(action === "create" ? `已应用模板：${asset.name}` : `正在编辑：${asset.name}`);
    return;
  }
  if (asset.type === "fixed") {
    openStaticModuleWorkspace("fixed", { backPage: "module-library" });
    moduleStaticState.fixedImage = asset.image;
    moduleStaticState.moduleName = asset.name;
    moduleStaticState.category = asset.category === "内衣" ? "内衣" : asset.category;
    renderStaticModuleWorkspace();
    showToast(`正在编辑：${asset.name}`);
    return;
  }
  openBrandMaterialEditor();
  showToast(`正在编辑：${asset.name}`);
}

function openSingleTemplateReplicaDetail(assetId) {
  const asset = getModuleLibraryAsset(assetId);
  if (!asset || asset.type !== "image") return;
  const template = createSuiteReplicaSingleTemplate(asset);
  const product = {
    id: `single-template-product-${asset.id}`,
    name: "待替换商品图",
    category: asset.category || "其他",
    image: asset.image,
    images: [{ url: asset.image, name: "商品图" }],
    materialCount: 1,
    isLocal: true
  };
  openSuiteReplicaEditor("creation-plaza", {
    product,
    template,
    step: "generate",
    templateEntry: true,
    referenceSource: "template",
    referenceMode: "template"
  });
  showToast(`已选择单图模板「${asset.name}」，进入复刻生图详情`);
}

function openModuleTextLibraryEditor(assetId) {
  const asset = getModuleLibraryAsset(assetId);
  if (!asset) return;
  const imageObjectId = "module-text-editor-image";
  state.brandEditor.canvas = {
    width: 900,
    height: 500,
    background: "transparent"
  };
  state.brandEditor.zoom = 0.8;
  state.brandEditor.objects = [
    {
      id: imageObjectId,
      type: "image",
      name: asset.name,
      imageUrl: asset.image,
      x: 330,
      y: 155,
      width: 240,
      height: 190,
      opacity: 100,
      rotation: 0,
      lockRatio: true,
      flipX: false,
      flipY: false,
      aspectRatio: 240 / 190
    },
    {
      id: "seed-watermark",
      type: "text",
      name: "冷感空调裤",
      x: 330,
      y: 102,
      width: 240,
      height: 44,
      fontSize: 28,
      opacity: 100,
      rotation: 0,
      lockRatio: true,
      flipX: false,
      flipY: false
    }
  ];
  state.brandEditor.selectedId = imageObjectId;
  state.brandEditor.addedImages = [{ id: `module-text-${asset.id}`, name: asset.name, url: asset.image }];
  openBrandMaterialEditor("module-library");
  setBrandPropPanel("element");
  showToast(`正在编辑：${asset.name}`);
}

function getModuleLibraryEditProfile(asset) {
  const reuseProfile = moduleReuseProfiles[asset.id] || {};
  const materials = moduleEditMaterialProfiles[asset.id] || (asset.type === "image" || asset.type === "fixed"
    ? [{ type: "product", images: [asset.image] }]
    : []);
  return {
    materials,
    productPrompt: reuseProfile.productPrompt || "突出商品主体、材质与核心卖点，保留上传商品的真实细节。",
    scenePrompt: reuseProfile.scenePrompt || "保持模块参考效果的构图节奏、光影与整体氛围。"
  };
}

function ensureModuleLibraryEditCategory(select, value) {
  if (!select || !value) return;
  if ([...select.options].some((option) => option.value === value)) return;
  select.appendChild(new Option(value, value));
}

function renderModuleLibraryEditMaterials(materials, options = {}) {
  const isFixed = options.type === "fixed";
  const section = document.querySelector("[data-module-library-edit-material-section]");
  const container = document.querySelector("[data-module-library-edit-materials]");
  if (!section || !container) return;
  section.hidden = !isFixed && !materials.length;
  if (isFixed) {
    const images = materials.flatMap((material) => material.images || []).filter(Boolean);
    container.innerHTML = `
      <article class="module-library-edit-material-group is-fixed-upload">
        <div class="module-library-edit-fixed-upload-list">
          <button type="button" class="module-library-edit-reupload" data-module-library-edit-reupload>
            <b>＋</b>
            <span>上传图片</span>
          </button>
          ${images.map((image, index) => `<span class="module-library-edit-fixed-thumb-wrap"><button type="button" class="module-library-edit-fixed-thumb" data-module-library-edit-source-preview="${image}" data-module-library-edit-source-label="固定图片${index + 1}" aria-label="查看固定图片${index + 1}"><img src="${image}" alt="固定图片${index + 1}"></button><button type="button" class="module-library-edit-fixed-remove" data-module-library-edit-fixed-remove aria-label="移除固定图片${index + 1}">×</button></span>`).join("")}
        </div>
      </article>`;
    return;
  }
  container.innerHTML = materials.map(({ type, images }) => `
    <article class="module-library-edit-material-group">
      <div><strong>${moduleMaterialLabels[type] || "素材"}</strong><span>${images.length} 张</span></div>
      <div class="module-library-edit-material-thumbs">${images.map((image, index) => `<button type="button" data-module-library-edit-source-preview="${image}" data-module-library-edit-source-label="${moduleMaterialLabels[type] || "素材"}${index + 1}" aria-label="查看${moduleMaterialLabels[type] || "素材"}${index + 1}"><img src="${image}" alt="${moduleMaterialLabels[type] || "素材"}${index + 1}"><small>${moduleMaterialLabels[type] || "素材"}${index + 1}</small></button>`).join("")}</div>
    </article>`).join("");
}

function openModuleLibraryEdit(assetId) {
  const asset = getModuleLibraryAsset(assetId);
  const modal = document.querySelector("[data-module-library-edit-modal]");
  const title = document.querySelector("#module-library-edit-title");
  const name = document.querySelector("[data-module-library-edit-name]");
  const category = document.querySelector("[data-module-library-edit-category]");
  const description = document.querySelector("[data-module-library-edit-description]");
  const productPrompt = document.querySelector("[data-module-library-edit-product-prompt]");
  const scenePrompt = document.querySelector("[data-module-library-edit-scene-prompt]");
  const preview = document.querySelector("[data-module-library-edit-result-image]");
  const confirm = document.querySelector("[data-module-library-edit-save]");
  const configTitle = document.querySelector("[data-module-library-edit-config-title]");
  const descriptionField = document.querySelector("[data-module-library-edit-description-field]");
  const materialTitle = document.querySelector("[data-module-library-edit-material-title]");
  const materialNote = document.querySelector("[data-module-library-edit-material-note]");
  const promptSection = document.querySelector("[data-module-library-edit-prompt-section]");
  const footerNote = document.querySelector("[data-module-library-edit-footer-note]");
  if (!asset || !modal || !name || !category || !description || !productPrompt || !scenePrompt || !confirm) return;
  const isFixed = asset.type === "fixed";
  const profile = getModuleLibraryEditProfile(asset);
  modal.dataset.moduleEditType = asset.type;
  if (title) title.textContent = isFixed ? "编辑固定图模板" : "编辑模板";
  if (configTitle) {
    configTitle.hidden = isFixed;
    configTitle.textContent = "基础信息";
  }
  if (descriptionField) descriptionField.hidden = isFixed;
  if (materialTitle) materialTitle.textContent = isFixed ? "图片上传 *" : "已上传素材";
  if (materialNote) {
    materialNote.textContent = isFixed ? "" : "未上传的素材类型不会展示";
    materialNote.hidden = isFixed;
  }
  if (promptSection) promptSection.hidden = isFixed;
  if (footerNote) footerNote.hidden = isFixed;
  confirm.textContent = isFixed ? "确认保存模板" : "确认保存";
  name.value = asset.name;
  ensureModuleLibraryEditCategory(category, asset.category);
  category.value = asset.category;
  description.value = asset.description;
  productPrompt.value = profile.productPrompt;
  scenePrompt.value = profile.scenePrompt;
  if (preview) preview.src = asset.image;
  confirm.dataset.moduleLibraryEditSave = asset.id;
  renderModuleLibraryEditMaterials(profile.materials, { type: asset.type });
  openPrototypeModal(modal);
}

function saveModuleLibraryEdit(assetId) {
  const asset = getModuleLibraryAsset(assetId);
  const name = document.querySelector("[data-module-library-edit-name]");
  const category = document.querySelector("[data-module-library-edit-category]");
  const description = document.querySelector("[data-module-library-edit-description]");
  const productPrompt = document.querySelector("[data-module-library-edit-product-prompt]");
  const scenePrompt = document.querySelector("[data-module-library-edit-scene-prompt]");
  if (!asset || !name || !category || !description || !productPrompt || !scenePrompt) return;
  const nextName = name.value.trim();
  if (!nextName) {
    name.focus();
    showToast("请填写模板名称");
    return;
  }
  asset.name = nextName;
  asset.category = category.value;
  asset.description = description.value.trim();
  asset.updatedAt = "2026-08-18";
  if (asset.type !== "fixed") {
    moduleReuseProfiles[asset.id] = { ...(moduleReuseProfiles[asset.id] || {}), productPrompt: productPrompt.value.trim(), scenePrompt: scenePrompt.value.trim() };
  }
  filterModuleLibrary();
  closePrototypeModals();
  showToast(`已保存模板：${asset.name}`);
}

function deleteModuleLibraryAsset(assetId) {
  const index = moduleLibraryAssets.findIndex((asset) => asset.id === assetId);
  if (index < 0) return;
  const [asset] = moduleLibraryAssets.splice(index, 1);
  filterModuleLibrary();
  showToast(`已删除模板：${asset.name}`);
}

function openModuleLibraryDeleteConfirm(assetId) {
  const asset = getModuleLibraryAsset(assetId);
  const modal = document.querySelector("[data-module-library-delete-modal]");
  const title = document.querySelector("[data-module-library-delete-title]");
  const message = document.querySelector("[data-module-library-delete-message]");
  const confirm = document.querySelector("[data-module-library-delete-confirm]");
  if (!asset || !modal || !confirm) return;
  if (title) title.textContent = "删除模板";
  message.textContent = `确认删除模板「${asset.name}」吗？删除后不可恢复。`;
  confirm.dataset.moduleLibraryDeleteConfirm = asset.id;
  delete confirm.dataset.modelDeleteConfirm;
  openPrototypeModal(modal);
}

function deletePendingModuleLibraryAsset(assetId) {
  if (!assetId) return;
  deleteModuleLibraryAsset(assetId);
  closePrototypeModals();
}

function openModuleLibraryPublish(assetId) {
  const asset = getModuleLibraryAsset(assetId);
  const modal = document.querySelector("[data-module-library-publish-modal]");
  const title = document.querySelector("[data-module-library-publish-title]");
  const preview = document.querySelector("[data-module-library-publish-preview]");
  const name = document.querySelector("[data-module-library-publish-name]");
  const price = document.querySelector("[data-module-library-publish-price]");
  const confirm = document.querySelector("[data-module-library-publish-confirm]");
  const error = document.querySelector("[data-module-library-publish-error]");
  if (!asset || !modal || !price || !confirm) return;
  if (title) title.textContent = "发布到 AI 图片广场";
  if (preview) preview.src = asset.image;
  if (name) name.textContent = asset.name;
  price.value = asset.marketPrice ?? 0;
  confirm.dataset.moduleLibraryPublishConfirm = asset.id;
  delete confirm.dataset.modelPublishConfirm;
  if (error) error.hidden = true;
  openPrototypeModal(modal);
}

function submitModuleLibraryPublish(assetId) {
  const asset = getModuleLibraryAsset(assetId);
  const price = document.querySelector("[data-module-library-publish-price]");
  const error = document.querySelector("[data-module-library-publish-error]");
  if (!asset || !price) return;
  const enteredPrice = price.value.trim();
  const marketPrice = Number(enteredPrice);
  const valid = enteredPrice !== "" && Number.isInteger(marketPrice) && marketPrice >= 0 && marketPrice <= 9999;
  if (!valid) {
    if (error) error.hidden = false;
    price.focus();
    return;
  }
  asset.marketPrice = marketPrice;
  asset.status = "已发布";
  filterModuleLibrary();
  closePrototypeModals();
  showToast(`已提交发布：${asset.name}（${marketPrice === 0 ? "免费" : `${marketPrice} 融豆`}）`);
}

function openModelLibraryPublish(modelId) {
  const model = state.models.find((item) => item.id === modelId);
  const modal = document.querySelector("[data-module-library-publish-modal]");
  const title = document.querySelector("[data-module-library-publish-title]");
  const preview = document.querySelector("[data-module-library-publish-preview]");
  const name = document.querySelector("[data-module-library-publish-name]");
  const price = document.querySelector("[data-module-library-publish-price]");
  const confirm = document.querySelector("[data-module-library-publish-confirm]");
  const error = document.querySelector("[data-module-library-publish-error]");
  if (!model || !modal || !price || !confirm) return;
  if (title) title.textContent = "发布到 AI 模特广场";
  if (preview) preview.src = model.image;
  if (name) name.textContent = model.name;
  price.value = model.marketPrice ?? 0;
  confirm.dataset.modelPublishConfirm = model.id;
  delete confirm.dataset.moduleLibraryPublishConfirm;
  if (error) error.hidden = true;
  openPrototypeModal(modal);
}

function submitModelLibraryPublish(modelId) {
  const model = state.models.find((item) => item.id === modelId);
  const price = document.querySelector("[data-module-library-publish-price]");
  const error = document.querySelector("[data-module-library-publish-error]");
  if (!model || !price) return;
  const enteredPrice = price.value.trim();
  const marketPrice = Number(enteredPrice);
  const valid = enteredPrice !== "" && Number.isInteger(marketPrice) && marketPrice >= 0 && marketPrice <= 9999;
  if (!valid) {
    if (error) error.hidden = false;
    price.focus();
    return;
  }
  model.marketPrice = marketPrice;
  model.status = "已发布";
  closePrototypeModals();
  showToast("已提交发布：" + model.name + "（" + (marketPrice === 0 ? "免费" : marketPrice + " 融豆") + "）");
}

function openModelLibraryDeleteConfirm(modelId) {
  const model = state.models.find((item) => item.id === modelId);
  const modal = document.querySelector("[data-module-library-delete-modal]");
  const title = document.querySelector("[data-module-library-delete-title]");
  const message = document.querySelector("[data-module-library-delete-message]");
  const confirm = document.querySelector("[data-module-library-delete-confirm]");
  if (!model || !modal || !confirm) return;
  if (title) title.textContent = "删除模特";
  if (message) message.textContent = "确认删除模特「" + model.name + "」吗？删除后不可恢复。";
  confirm.dataset.modelDeleteConfirm = model.id;
  delete confirm.dataset.moduleLibraryDeleteConfirm;
  openPrototypeModal(modal);
}

function deletePendingModelLibraryAsset(modelId) {
  const model = state.models.find((item) => item.id === modelId);
  if (!model) return;
  state.models = state.models.filter((item) => item.id !== modelId);
  filterModels();
  closePrototypeModals();
  showToast("已删除模特：" + model.name);
}

function syncModuleTemplateTabs(page) {
  document.querySelectorAll("[data-module-template-page]").forEach((button) => {
    const active = button.dataset.moduleTemplatePage === page;
    button.classList.toggle("is-active", active);
    button.setAttribute("aria-selected", String(active));
  });
}

function openModuleLibrary() {
  state.moduleLibraryType = "image";
  setWorkspacePage("module-library");
  clearMenuActive();
  document.querySelector('[data-single-menu="模板"]')?.classList.add("active");
  syncModuleTemplateTabs("module-library");
  filterModuleLibrary();
}

function openModuleTemplateLibrary() {
  setWorkspacePage("template-center");
  clearMenuActive();
  document.querySelector('[data-single-menu="模板"]')?.classList.add("active");
  syncModuleTemplateTabs("template-center");
  filterTemplates();
}

function openSuiteTemplateLibrary() {
  setWorkspacePage("suite-solution-library");
  clearMenuActive();
  document.querySelector('[data-single-menu="模板"]')?.classList.add("active");
  syncModuleTemplateTabs("suite-solution-library");
  filterSuiteSolutions();
}

function resetModuleFlow() {
  moduleFlowState.step = 1;
  moduleFlowState.product = null;
  moduleFlowState.selectedModule = null;
  moduleFlowState.showAllModules = false;
  moduleFlowState.lockedModule = false;
  moduleFlowState.moduleDrawerSearch = "";
  moduleFlowState.moduleDrawerCategory = "";
  moduleFlowState.moduleDrawerSource = "";
}

function getModuleFlowProducts() {
  const product = moduleFlowState.product;
  const library = products.slice(0, 6);
  return product?.isLocal ? [product, ...library] : library;
}

function getModuleProductImages(product) {
  if (!product) return [];
  if (Array.isArray(product.images) && product.images.length) return product.images;
  return product.image ? [{ url: product.image, name: product.name || "商品图" }] : [];
}

function normalizeSuiteDetailProductImage(item, index = 0, fallbackImage = "") {
  const source = item?.url || item?.image || item?.src || fallbackImage || "";
  if (!source) return null;
  return {
    ...item,
    url: source,
    image: item?.image || source,
    name: item?.name || item?.title || `商品图 ${index + 1}`
  };
}

function getSuiteDetailProductImages(editor = getSuiteEditor()) {
  const images = getModuleProductImages(editor.product);
  return images.map((image, index) => normalizeSuiteDetailProductImage(image, index, editor.product?.image)).filter(Boolean);
}

function syncSuiteDetailProductImages(editor, images) {
  if (!editor.product) return;
  const normalized = images.map((image, index) => normalizeSuiteDetailProductImage(image, index, editor.product?.image)).filter(Boolean);
  editor.product.images = normalized;
  editor.product.materialCount = normalized.length;
  editor.product.image = normalized[0]?.url || editor.product.image || "";
}

function addSuiteDetailProductImage() {
  const editor = getSuiteEditor();
  if (!editor.product) {
    openSuitePicker("product");
    return;
  }
  const images = getSuiteDetailProductImages(editor);
  if (images.length >= 6) {
    showToast("当前最多展示 6 张商品图");
    return;
  }
  const fallbackPool = [
    editor.product.image,
    ...products.map((product) => product.image),
    "assets/product-cover-01.png",
    "assets/product-cover-02.png",
    "assets/product-cover-03.png",
    "assets/product-cover-04.png"
  ].filter(Boolean);
  const currentSources = new Set(images.map((image) => image.url || image.image));
  const nextSource = fallbackPool.find((source) => !currentSources.has(source)) || fallbackPool[images.length % fallbackPool.length] || editor.product.image;
  syncSuiteDetailProductImages(editor, [
    ...images,
    { url: nextSource, image: nextSource, name: `商品图 ${images.length + 1}` }
  ]);
  markSuiteGenerationDirty(editor);
  resetSuiteTemplateStartAnalysis(editor);
  renderSuiteReplicaEditor();
  showToast("已添加商品图");
}

function removeSuiteDetailProductImage(index) {
  const editor = getSuiteEditor();
  if (!editor.product) return;
  const images = getSuiteDetailProductImages(editor);
  if (images.length <= 1) {
    showToast("至少保留 1 张商品图");
    return;
  }
  if (index < 0 || index >= images.length) return;
  images.splice(index, 1);
  syncSuiteDetailProductImages(editor, images);
  markSuiteGenerationDirty(editor);
  resetSuiteTemplateStartAnalysis(editor);
  renderSuiteReplicaEditor();
  showToast("已删除商品图");
}

function renderModuleStart() {
  const product = moduleFlowState.product;
  const empty = document.querySelector("[data-module-start-empty]");
  const selected = document.querySelector("[data-module-start-selected]");
  const next = document.querySelector("[data-module-start-next]");
  const tip = document.querySelector("[data-module-start-tip]");
  document.querySelector("[data-creation-module-start]")?.classList.toggle("is-product-selected", Boolean(product));
  if (empty) empty.hidden = Boolean(product);
  if (selected) {
    selected.hidden = !product;
    selected.innerHTML = product ? `<div class="module-start-image-grid">${getModuleProductImages(product).map((image, index) => `<figure class="module-start-image-card"><img src="${image.url}" alt="商品图 ${index + 1}" data-module-start-preview="${index}"><button type="button" data-module-start-remove="${index}" aria-label="删除商品图">×</button></figure>`).join("")}</div><div class="module-start-add-actions"><button type="button" data-module-start-library-add>商品素材库添加</button><button type="button" data-module-start-local>本地上传</button></div>` : "";
  }
  if (next) next.disabled = !product;
  if (tip) tip.textContent = product ? "" : "请选择一个商品开始匹配模块";
}

function renderModuleFlowStart() {
  const product = moduleFlowState.product;
  const empty = document.querySelector("[data-module-flow-start-empty]");
  const selected = document.querySelector("[data-module-flow-start-selected]");
  document.querySelector("[data-module-flow-start]")?.classList.toggle("is-product-selected", Boolean(product));
  if (empty) empty.hidden = Boolean(product);
  if (selected) {
    selected.hidden = !product;
    selected.innerHTML = product ? `<div class="module-start-image-grid">${getModuleProductImages(product).map((image, index) => `<figure class="module-start-image-card"><img src="${image.url}" alt="商品图 ${index + 1}" data-module-start-preview="${index}"><button type="button" data-module-start-remove="${index}" aria-label="删除商品图">×</button></figure>`).join("")}</div><div class="module-start-add-actions"><button type="button" data-module-start-library-add>商品素材库添加</button><button type="button" data-module-start-local>本地上传</button></div>` : "";
  }
}

function selectModuleStartProduct(product) {
  if (!product) return;
  const images = getModuleProductImages(product);
  product.images = images;
  product.image = images[0]?.url || product.image;
  product.materialCount = images.length || product.materialCount || 1;
  moduleFlowState.product = product;
  moduleFlowState.selectedModule = null;
  moduleFlowState.showAllModules = false;
  moduleFlowState.lockedModule = false;
  renderModuleStart();
}

function appendModuleStartProduct(product) {
  if (!product) return;
  const existing = getModuleProductImages(moduleFlowState.product);
  const additions = getModuleProductImages(product);
  const images = [...existing, ...additions].slice(0, 12);
  if (!images.length) return;
  moduleFlowState.product = {
    ...moduleFlowState.product,
    id: moduleFlowState.product?.id || product.id,
    name: moduleFlowState.product?.name || product.name,
    category: moduleFlowState.product?.category || product.category,
    image: images[0].url,
    images,
    materialCount: images.length,
    points: moduleFlowState.product?.points || product.points
  };
  moduleFlowState.selectedModule = null;
  moduleFlowState.showAllModules = false;
  renderModuleStart();
}

const suiteCategoryRecommendationNames = {
  "文胸": ["法式蕾丝聚拢文胸", "轻盈无痕承托文胸", "薄款舒适文胸", "云感软支撑文胸", "亲肤圆领内衣", "日常透气文胸"],
  "内裤": ["纯棉高腰内裤", "冰丝无痕内裤", "莫代尔舒适内裤", "轻薄透气三角裤", "日常柔软平角裤", "亲肤抗菌内裤"],
  "服装": ["简约针织上衣", "轻盈通勤连衣裙", "基础圆领短袖", "舒适家居套装", "休闲宽松衬衫", "百搭直筒半裙"],
  "童装": ["儿童纯棉短袖", "夏日童趣套装", "儿童轻薄防晒衣", "亲子休闲上衣", "卡通印花卫衣", "儿童运动短裤"],
  "鞋子": ["轻便运动鞋", "透气休闲鞋", "软底儿童鞋", "日常乐福鞋", "简约凉鞋", "舒适平底鞋"],
  "箱包": ["通勤托特包", "轻量斜挎包", "简约双肩包", "日常手提包", "小巧收纳包", "旅行周末包"],
  "帽子": ["百搭棒球帽", "轻薄防晒帽", "简约渔夫帽", "儿童遮阳帽", "针织保暖帽", "休闲盆帽"],
  "配饰": ["简约珍珠耳饰", "日常轻奢项链", "百搭丝巾", "金属细链手链", "复古发饰", "通勤腰带"],
  "其他": ["日常家居用品", "轻奢生活好物", "实用收纳用品", "居家香氛用品", "品质礼赠好物", "通用商品素材"]
};

function getModuleProductPickerProducts() {
  const category = moduleProductPickerState.target === "multi-replica" ? moduleProductPickerState.preferredCategory : "";
  if (!category) return products;
  const matchedProducts = products.filter((product) => product.category.includes(category));
  const names = suiteCategoryRecommendationNames[category] || Array.from({ length: 6 }, (_, index) => `${category}推荐商品 ${index + 1}`);
  const sourceProducts = matchedProducts.length ? matchedProducts : products;
  const recommendationProducts = names.map((name, index) => {
    const source = sourceProducts[index % sourceProducts.length];
    return {
      ...source,
      id: `suite-category-${category}-${index + 1}`,
      name,
      category: category === "文胸" ? "内衣 / 文胸" : category,
      materialCount: Math.max(3, (source.materialCount || 1) - (index % 4)),
      image: products[(index + 1) % products.length]?.image || source.image
    };
  });
  return [...matchedProducts, ...recommendationProducts].slice(0, 6);
}

function renderModuleProductPicker() {
  const grid = document.querySelector("[data-module-product-picker-grid]");
  const confirm = document.querySelector("[data-module-product-picker-confirm]");
  const tip = document.querySelector("[data-module-product-picker-tip]");
  const isTemplateStart = moduleProductPickerState.target === "template";
  const isSuiteReplicaStart = moduleProductPickerState.target === "multi-replica";
  const isMultiProductPicker = isTemplateStart || isSuiteReplicaStart;
  const pickerProducts = getModuleProductPickerProducts();
  const modal = document.querySelector("[data-module-product-picker-modal]");
  const heading = modal?.querySelector("h2");
  const copy = modal?.querySelector("p");
  if (heading) heading.textContent = "从商品库选择";
  if (copy) copy.textContent = isSuiteReplicaStart
    ? moduleProductPickerState.preferredCategory
      ? `已按「${moduleProductPickerState.preferredCategory}」分类推荐商品，可选择多个商品图。`
      : "可选择多个商品图，系统会基于全部商品素材推荐适合的套图模板。"
    : isTemplateStart
      ? "可多选商品，系统会结合全部商品图推荐适合的套图模板。"
      : "选择一个商品后，系统会基于商品类目推荐适合的图片模块。";
  if (grid) {
    grid.innerHTML = pickerProducts.length ? pickerProducts.map((product) => `
      <button class="module-product-picker-card ${(isMultiProductPicker ? moduleProductPickerState.pendingProductIds.includes(product.id) : moduleProductPickerState.pendingProductId === product.id) ? "is-selected" : ""}" type="button" data-module-product-choice="${product.id}">
        <img src="${product.image}" alt="${product.name}"><span><strong>${product.name}</strong><small>${product.category} · ${product.materialCount || 1} 项素材</small></span><i>✓</i>
      </button>`).join("") : `<div class="module-product-picker-empty">商品库暂无「${moduleProductPickerState.preferredCategory}」分类商品</div>`;
  }
  const selectedProducts = isMultiProductPicker
    ? pickerProducts.filter((item) => moduleProductPickerState.pendingProductIds.includes(item.id))
    : pickerProducts.filter((item) => item.id === moduleProductPickerState.pendingProductId);
  if (confirm) {
    confirm.disabled = !selectedProducts.length;
    confirm.textContent = isMultiProductPicker && selectedProducts.length ? `确认选择（${selectedProducts.length}）` : "确认选择";
  }
  if (tip) tip.textContent = selectedProducts.length
    ? isMultiProductPicker ? `已选择 ${selectedProducts.length} 个商品，将合并全部商品图` : `已选择：${selectedProducts[0].name}`
    : isMultiProductPicker ? "可选择多个商品" : "请选择一个商品";
}

function openModuleProductPicker(target = "module") {
  moduleProductPickerState.target = target;
  moduleProductPickerState.preferredCategory = target === "multi-replica" ? suiteReplicaStartState.category : "";
  const currentProduct = target === "template" ? templateStartState.product : target === "multi-replica" ? suiteReplicaStartState.product : target === "single-replica" ? null : moduleFlowState.product;
  moduleProductPickerState.pendingProductId = currentProduct?.isLocal ? "" : (currentProduct?.id || "");
  moduleProductPickerState.pendingProductIds = target === "template" || target === "multi-replica" ? [...(currentProduct?.productIds || (currentProduct?.id && !currentProduct?.isLocal ? [currentProduct.id] : []))] : [];
  if (moduleProductPickerState.preferredCategory) {
    const pickerProductIds = new Set(getModuleProductPickerProducts().map((product) => product.id));
    moduleProductPickerState.pendingProductIds = moduleProductPickerState.pendingProductIds.filter((id) => pickerProductIds.has(id));
  }
  renderModuleProductPicker();
  openPrototypeModal(document.querySelector("[data-module-product-picker-modal]"));
}

function renderSingleReplicaStart() {
  const root = document.querySelector("[data-single-replica-start]");
  if (!root) return;
  const hasProduct = singleReplicaState.productImages.length > 0;
  const hasReference = Boolean(singleReplicaState.reference);
  const step = singleReplicaState.step;
  root.querySelectorAll("[data-single-replica-panel]").forEach((panel) => {
    const active = Number(panel.dataset.singleReplicaPanel) === step;
    panel.hidden = !active;
    panel.classList.toggle("is-active", active);
  });
  root.querySelectorAll("[data-single-replica-step]").forEach((item) => {
    const itemStep = Number(item.dataset.singleReplicaStep);
    item.classList.toggle("is-current", itemStep === step);
    item.classList.toggle("is-done", itemStep < step);
  });
  root.querySelectorAll("[data-single-replica-category]").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.singleReplicaCategory === singleReplicaState.category);
  });
  const productEmpty = root.querySelector("[data-single-replica-product-empty]");
  const productSelected = root.querySelector("[data-single-replica-product-selected]");
  if (productEmpty) productEmpty.hidden = hasProduct;
  if (productSelected) {
    productSelected.hidden = !hasProduct;
    productSelected.innerHTML = hasProduct ? `<div class="module-start-image-grid">${singleReplicaState.productImages.map((image, index) => `<figure class="module-start-image-card"><img src="${image.url}" alt="商品图 ${index + 1}"><button type="button" data-single-replica-product-remove="${index}" aria-label="删除商品图">×</button></figure>`).join("")}</div><div class="module-start-add-actions"><button type="button" data-single-replica-product-library>从商品库添加</button><button type="button" data-single-replica-product-local>本地上传</button></div>` : "";
  }
  const productNext = root.querySelector('[data-single-replica-next="1"]');
  const productTip = root.querySelector("[data-single-replica-step-tip]");
  if (productNext) productNext.disabled = !hasProduct;
  if (productTip) productTip.textContent = hasProduct ? `已选择 ${singleReplicaState.category}商品图，可继续添加参考图` : "请先选择商品分类并上传商品图";
  const sourceSummary = root.querySelector("[data-single-replica-product-summary]");
  if (sourceSummary) sourceSummary.innerHTML = hasProduct ? `<img src="${singleReplicaState.productImages[0].url}" alt="商品图"><span><strong>${singleReplicaState.category} · 已上传 ${singleReplicaState.productImages.length} 张商品图</strong><small>将用于保持商品主体、颜色与材质细节</small></span><button type="button" data-single-replica-back="1">更换商品图</button>` : "";
  const referenceEmpty = root.querySelector("[data-single-replica-reference-empty]");
  const referenceSelected = root.querySelector("[data-single-replica-reference-selected]");
  if (referenceEmpty) referenceEmpty.hidden = hasReference;
  if (referenceSelected) {
    referenceSelected.hidden = !hasReference;
    referenceSelected.innerHTML = hasReference ? `<div class="module-start-image-grid"><figure class="module-start-image-card"><img src="${singleReplicaState.reference.image}" alt="参考图"><button type="button" data-single-replica-reference-remove aria-label="删除参考图">×</button></figure></div><div class="module-start-add-actions"><button type="button" data-single-replica-reference-local>本地上传</button></div>` : "";
  }
  const referenceNext = root.querySelector('[data-single-replica-next="2"]');
  const referenceTip = root.querySelector("[data-single-replica-reference-tip]");
  const generate = root.querySelector("[data-single-replica-generate]");
  if (referenceNext) referenceNext.disabled = !hasReference;
  if (generate) generate.disabled = !hasReference;
  if (referenceTip) referenceTip.textContent = hasReference ? "确认设置后将直接进入自由创作详情" : "请上传一张参考图";
  const prompt = root.querySelector("[data-single-replica-prompt]");
  if (prompt && document.activeElement !== prompt) prompt.value = els.creationPrompt?.value || "";
  const ratioSelect = root.querySelector("[data-single-replica-ratio-options]");
  const resolutionSelect = root.querySelector("[data-single-replica-resolution-options]");
  const modelSelect = root.querySelector("[data-single-replica-model-options]");
  const countSelect = root.querySelector("[data-single-replica-count-options]");
  if (ratioSelect) ratioSelect.value = state.creation.ratio || "3:4";
  if (resolutionSelect) resolutionSelect.value = state.creation.resolution || "2K";
  if (modelSelect) modelSelect.value = state.creation.generationModel || "专业版";
  if (countSelect) countSelect.value = state.creation.imageCount || "1张";
}

function setSingleReplicaStep(step) {
  if (step > 1 && !singleReplicaState.productImages.length) {
    showToast("请先上传商品图");
    return;
  }
  singleReplicaState.step = step;
  renderSingleReplicaStart();
}

function setSingleReplicaProductImages(images) {
  singleReplicaState.productImages = images.slice(0, 6);
  state.creation.productImages = singleReplicaState.productImages.map((image, index) => ({ id: `single-replica-${index}`, image: image.url, imageName: image.name }));
  setCreationUpload("product", singleReplicaState.productImages.length > 0);
  renderSingleReplicaStart();
}

function setSingleReplicaReference(reference) {
  singleReplicaState.reference = reference;
  setCreationUpload("reference", Boolean(reference));
  renderSingleReplicaStart();
}

function getRecommendedTemplates() {
  const category = templateStartState.product?.category || "";
  const keyword = category.includes("童") ? "童装" : category.includes("文胸") ? "文胸" : category.includes("内裤") ? "内裤" : "";
  const matched = keyword ? templates.filter((template) => template.category.includes(keyword) || template.tags?.some((tag) => tag.includes(keyword))) : [];
  const fallback = templates.filter((template) => !matched.includes(template));
  return [...matched, ...fallback].slice(0, 4);
}

function renderTemplateStart() {
  const product = templateStartState.product;
  const root = document.querySelector("[data-creation-template-start]");
  const empty = document.querySelector("[data-template-start-empty]");
  const selected = document.querySelector("[data-template-start-selected]");
  const tip = document.querySelector("[data-template-start-tip]");
  const next = document.querySelector("[data-template-start-next]");
  root?.classList.toggle("is-product-selected", Boolean(product));
  if (empty) empty.hidden = Boolean(product);
  if (selected) {
    selected.hidden = !product;
    selected.innerHTML = product ? `<div class="module-start-image-grid">${getModuleProductImages(product).map((image, index) => `<figure class="module-start-image-card"><img src="${image.url || image.image}" alt="商品图 ${index + 1}"><button type="button" data-template-start-remove="${index}" aria-label="删除商品图">×</button></figure>`).join("")}</div><div class="module-start-add-actions"><button type="button" data-template-start-library>商品素材库添加</button><button type="button" data-template-start-local>本地上传</button></div>` : "";
  }
  if (tip) tip.textContent = product ? "商品图已上传，下一步选择匹配模板" : "请选择一个商品开始匹配模板";
  if (next) {
    next.disabled = !product;
    next.textContent = "下一步";
  }
}

function selectTemplateStartProduct(product) {
  if (!product) return;
  templateStartState.product = product;
  templateStartState.selectedTemplate = null;
  templateStartState.showAllTemplates = false;
  renderTemplateStart();
}

function selectTemplateStartProducts(selectedProducts) {
  if (!selectedProducts?.length) return;
  const previous = templateStartState.product;
  const previousImages = (previous?.images || []).filter((image) => !image.sourceProductId);
  const libraryImages = selectedProducts.flatMap((product) => getModuleProductImages(product).map((image, index) => ({
    url: image.url || image.image || product.image,
    name: image.name || image.title || `${product.name} 商品图 ${index + 1}`,
    sourceProductId: product.id
  })));
  const images = [...previousImages, ...libraryImages];
  const primaryProduct = selectedProducts[0];
  selectTemplateStartProduct({
    id: selectedProducts.length === 1 ? primaryProduct.id : `template-library-${selectedProducts.map((product) => product.id).join("-")}`,
    productIds: selectedProducts.map((product) => product.id),
    name: selectedProducts.length === 1 ? primaryProduct.name : `已选择 ${selectedProducts.length} 个商品`,
    category: selectedProducts.length === 1 ? primaryProduct.category : "多商品",
    image: images[0]?.url || primaryProduct.image,
    images,
    materialCount: images.length,
    isLocal: previousImages.length > 0,
    points: primaryProduct.points
  });
}

function renderTemplateFlowCard(template, { selected = false, drawer = false } = {}) {
  const moduleCount = template.items.filter((item) => isTemplateItemEnabled(item)).length;
  return `<article class="module-flow-module-card ${selected ? "is-selected" : ""}" ${drawer ? `data-template-flow-drawer-template="${template.id}"` : `data-template-flow-template="${template.id}"`} role="button" tabindex="0">
    <div class="module-flow-module-cover"><img src="${template.items[0]?.image || "assets/product-cover-01.png"}" alt="${template.name}"><button class="module-flow-preview-button" type="button" data-template-flow-template-preview="${template.id}"><img src="assets/module-flow-preview-eye-icon.png" alt="">预览</button><span class="module-flow-module-check">✓</span></div>
    <strong>${template.name}</strong><small class="template-flow-card-meta">${template.category} · ${moduleCount} 个版块</small>
  </article>`;
}

function setTemplateFlowDrawer(open) {
  templateStartState.showAllTemplates = open;
  const drawer = document.querySelector("[data-template-flow-template-drawer]");
  const mask = document.querySelector("[data-template-flow-template-mask]");
  drawer?.classList.toggle("is-open", open);
  mask?.classList.toggle("is-open", open);
  drawer?.setAttribute("aria-hidden", String(!open));
}

function renderTemplateGenerationFlow() {
  const product = templateStartState.product;
  const selected = templateStartState.selectedTemplate;
  const productArea = document.querySelector("[data-template-flow-product-area]");
  const productThumb = document.querySelector("[data-template-flow-product-thumb]");
  if (productArea) productArea.hidden = !product;
  if (productThumb && product) { productThumb.src = product.image; productThumb.alt = product.name || "已上传商品"; }
  const grid = document.querySelector("[data-template-flow-template-grid]");
  if (grid) grid.innerHTML = getRecommendedTemplates().map((template) => renderTemplateFlowCard(template, { selected: template.id === selected?.id })).join("");
  const drawerGrid = document.querySelector("[data-template-flow-template-drawer-grid]");
  if (drawerGrid) drawerGrid.innerHTML = templates.map((template) => renderTemplateFlowCard(template, { selected: template.id === selected?.id, drawer: true })).join("");
  const tip = document.querySelector("[data-template-flow-tip]");
  const next = document.querySelector("[data-template-flow-next]");
  if (tip) tip.textContent = selected ? `已选择：${selected.name}` : "请选择一个模板继续";
  if (next) next.disabled = !selected;
}

function openTemplateGenerationFlow() {
  if (!templateStartState.product) { showToast("请先上传商品图"); return; }
  templateStartState.step = 2;
  setTemplateFlowDrawer(false);
  setWorkspacePage("template-generation-flow");
  clearMenuActive();
  document.querySelector('[data-single-menu="创作中心"]')?.classList.add("active");
  renderTemplateGenerationFlow();
}

function startTemplateFlowWorkspace() {
  const template = templateStartState.selectedTemplate;
  const product = templateStartState.product;
  if (!template || !product) { showToast("请先选择模板"); return; }
  templateStartState.step = 3;
  setupMultiImageCreationWithTemplate(template, "template-flow", "template", product);
  showToast(`已选择「${template.name}」，请设置生成参数并完善必填素材`);
}

function resetSuiteReplicaStart() {
  suiteReplicaStartState.step = "product";
  suiteReplicaStartState.category = "";
  suiteReplicaStartState.product = null;
  suiteReplicaStartState.template = null;
  suiteReplicaStartState.templateKind = "single";
  suiteReplicaStartState.singleTemplateDrawer = { keyword: "", category: "", source: "" };
  suiteReplicaStartState.suiteTemplateDrawer = { keyword: "", category: "", source: "" };
  suiteReplicaStartState.referenceSource = "upload";
  suiteReplicaStartState.referenceMode = "multi";
  suiteReplicaStartState.link = "";
  suiteReplicaStartState.linkParsing = false;
  suiteReplicaStartState.referenceImages = [];
  suiteReplicaStartState.referenceReady = false;
  suiteReplicaStartState.generation = { ratio: "3:4", resolution: "2K", model: "专业版", count: "1张" };
}

function getRecommendedSuiteReplicaTemplates() {
  const product = suiteReplicaStartState.product;
  if (!product) return suiteReplicaTemplateOptions.slice(0, 4);
  const category = product.category || "";
  const keyword = category.includes("童") ? "童" : category.includes("内裤") ? "内裤" : category.includes("文胸") || category.includes("内衣") ? "内衣" : "";
  const matched = keyword
    ? suiteReplicaTemplateOptions.filter((template) => `${template.name}${template.category}${template.description}`.includes(keyword))
    : [];
  const fallback = suiteReplicaTemplateOptions.filter((template) => !matched.includes(template));
  return [...matched, ...fallback].slice(0, 4);
}

function renderSuiteReplicaStartTemplateCard(template) {
  const selected = suiteReplicaStartState.template?.id === template.id;
  return `<article class="module-flow-module-card ${selected ? "is-selected" : ""}" data-suite-start-template-choice="${template.id}" role="button" tabindex="0">
    <div class="module-flow-module-cover"><img src="${template.cover}" alt="${template.name}"><button class="module-flow-preview-button" type="button" data-suite-start-template-preview="${template.id}"><img src="assets/module-flow-preview-eye-icon.png" alt="">预览</button><span class="module-flow-module-check">✓</span></div>
    <strong>${template.name}</strong>
    <small class="template-flow-card-meta">${template.productType || "内衣"} · ${template.pages.length}个板块</small>
  </article>`;
}

function getRecommendedSuiteReplicaSingleTemplates() {
  const category = suiteReplicaStartState.product?.category || suiteReplicaStartState.category || "";
  const imageModules = moduleLibraryAssets.filter((asset) => asset.type === "image");
  const keywords = category.includes("童") ? ["童装"] : category.includes("男") || category.includes("内裤") ? ["内裤", "通用"] : ["内衣", "通用"];
  const matched = imageModules.filter((asset) => keywords.includes(asset.category));
  return (matched.length ? matched : imageModules).slice(0, 4);
}

function createSuiteReplicaSingleTemplate(asset) {
  return {
    id: `suite-single-${asset.id}`,
    sourceModuleId: asset.id,
    name: asset.name,
    category: `${asset.category} · 单图模板`,
    cover: asset.image,
    pages: [{
      id: `suite-single-page-${asset.id}`,
      title: asset.name,
      group: "单图模板",
      purpose: "参考复刻",
      source: "推荐模块",
      image: asset.image
    }]
  };
}

function renderSuiteReplicaStartSingleTemplateCard(asset) {
  const selected = suiteReplicaStartState.template?.sourceModuleId === asset.id;
  return `<article class="module-flow-module-card ${selected ? "is-selected" : ""}" data-suite-start-single-template-choice="${asset.id}" role="button" tabindex="0">
    <div class="module-flow-module-cover"><img src="${asset.image}" alt="${asset.name}"><button class="module-flow-preview-button" type="button" data-suite-start-single-template-preview="${asset.id}"><img src="assets/module-flow-preview-eye-icon.png" alt="">预览</button><span class="module-flow-module-check">✓</span></div>
    <strong>${asset.name}</strong>
    <small class="template-flow-card-meta">${asset.category}</small>
  </article>`;
}

function openSuiteReplicaStartTemplatePreview(template) {
  if (!template?.pages?.length) return;
  openSuiteExportLongPreview(template.pages, { template });
  if (els.drawerPreviewCaption) els.drawerPreviewCaption.textContent = `${template.name} · 套图预览`;
}

function getSuiteStartProgressStep() {
  if (suiteReplicaStartState.step === "reference") return "reference";
  return "product";
}

function renderSuiteReplicaStart() {
  const product = suiteReplicaStartState.product;
  const currentStep = getSuiteStartProgressStep();
  const root = document.querySelector("[data-creation-suite-replica-start]");
  const quickActions = document.querySelector(".creation-ai-tools-section");
  const empty = document.querySelector("[data-suite-start-empty]");
  const selected = document.querySelector("[data-suite-start-selected]");
  const tip = document.querySelector("[data-suite-start-tip]");
  const next = document.querySelector("[data-suite-start-next]");
  const referencePanel = document.querySelector("[data-suite-start-reference-panel]");
  const referenceProduct = document.querySelector("[data-suite-start-reference-product]");
  const referenceTemplates = document.querySelector("[data-suite-start-reference-templates]");
  const templateCopy = document.querySelector("[data-suite-start-template-copy]");
  const showAllTemplateButtons = document.querySelectorAll("[data-suite-start-show-all]");
  const referenceNext = document.querySelector("[data-suite-start-reference-next]");
  const startGenerationSettings = document.querySelector("[data-suite-start-generation-settings]");
  const linkInput = document.querySelector("[data-suite-start-link-input]");
  const parseLinkButton = document.querySelector("[data-suite-start-parse-link]");
  const referencePreview = document.querySelector("[data-suite-start-reference-preview]");
  const linkPreview = document.querySelector("[data-suite-start-link-preview]");
  const progressItems = document.querySelectorAll("[data-suite-start-progress-item]");
  const startStages = document.querySelectorAll("[data-suite-start-stage]");
  document.querySelectorAll("[data-suite-start-category]").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.suiteStartCategory === suiteReplicaStartState.category);
  });
  root?.classList.toggle("is-product-selected", Boolean(product));
  root?.setAttribute("data-suite-start-step", suiteReplicaStartState.step);
  if (quickActions) quickActions.hidden = suiteReplicaStartState.step === "reference";
  startStages.forEach((stage) => {
    const active = stage.dataset.suiteStartStage === suiteReplicaStartState.step;
    stage.hidden = !active;
    stage.classList.toggle("is-active", active);
  });
  if (empty) empty.hidden = Boolean(product);
  if (selected) {
    selected.hidden = !product;
    selected.innerHTML = product ? `<div class="module-start-image-grid">${getModuleProductImages(product).map((image, index) => `<figure class="module-start-image-card"><img src="${image.url || image.image}" alt="商品图 ${index + 1}"><button type="button" data-suite-start-remove="${index}" aria-label="删除商品图">×</button></figure>`).join("")}</div><div class="module-start-add-actions"><button type="button" data-suite-start-library>商品素材库添加</button><button type="button" data-suite-start-local>本地上传</button></div>` : "";
  }
  if (referencePanel) referencePanel.hidden = suiteReplicaStartState.step !== "reference";
  if (referenceProduct) {
    const images = getModuleProductImages(product);
    referenceProduct.innerHTML = product ? `
      <span>已上传 ${images.length} 张商品图</span>
      <div>${images.slice(0, 6).map((image, index) => `<img src="${image.url || image.image}" alt="商品图 ${index + 1}">`).join("")}</div>
    ` : "";
  }
  if (referenceTemplates) {
    const isSingleTemplate = suiteReplicaStartState.templateKind === "single";
    referenceTemplates.innerHTML = isSingleTemplate
      ? getRecommendedSuiteReplicaSingleTemplates().map((asset) => renderSuiteReplicaStartSingleTemplateCard(asset)).join("")
      : getRecommendedSuiteReplicaTemplates().map((template) => renderSuiteReplicaStartTemplateCard(template)).join("");
  }
  if (templateCopy) templateCopy.textContent = suiteReplicaStartState.templateKind === "single"
    ? "从推荐模块中选择一张参考结构，用于生成单图商品图。"
    : "从推荐套图模板中选择一个参考结构，也可以查看完整模板库。";
  showAllTemplateButtons.forEach((button) => {
    const isSingle = button.dataset.suiteStartShowAll === "single";
    button.hidden = isSingle !== (suiteReplicaStartState.templateKind === "single");
  });
  const activeMode = suiteReplicaStartState.referenceSource === "template" ? "template" : suiteReplicaStartState.referenceMode;
  if (startGenerationSettings) startGenerationSettings.hidden = activeMode === "template";
  document.querySelectorAll("[data-suite-start-reference-mode]").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.suiteStartReferenceMode === activeMode);
  });
  document.querySelectorAll("[data-suite-start-template-kind]").forEach((button) => {
    const active = button.dataset.suiteStartTemplateKind === suiteReplicaStartState.templateKind;
    button.classList.toggle("is-active", active);
    button.setAttribute("aria-selected", String(active));
  });
  document.querySelectorAll("[data-suite-start-reference-panel-mode]").forEach((panel) => {
    panel.classList.toggle("is-active", panel.dataset.suiteStartReferencePanelMode === activeMode);
  });
  document.querySelectorAll("[data-suite-start-generation-param]").forEach((select) => {
    const value = suiteReplicaStartState.generation?.[select.dataset.suiteStartGenerationParam];
    if (value && document.activeElement !== select) select.value = value;
  });
  if (linkInput && document.activeElement !== linkInput) linkInput.value = suiteReplicaStartState.link || "";
  if (parseLinkButton) {
    parseLinkButton.disabled = suiteReplicaStartState.linkParsing;
    parseLinkButton.classList.toggle("is-loading", suiteReplicaStartState.linkParsing);
    parseLinkButton.innerHTML = suiteReplicaStartState.linkParsing ? "解析中" : `解析链接 <em>10</em><img src="assets/creation-rongdou-icon.png" alt="融豆">`;
  }
  const renderReferenceImages = (target) => {
    if (!target) return;
    target.innerHTML = suiteReplicaStartState.referenceImages.length ? `
      <div class="suite-start-reference-preview-head"><strong>${suiteReplicaStartState.referenceMode === "link" ? "已解析商详图片" : "已上传商详图片"}</strong><span>${suiteReplicaStartState.referenceImages.length} 张</span></div>
      <div class="suite-start-reference-preview-grid">${suiteReplicaStartState.referenceImages.map((image, index) => `<figure><img src="${image.url}" alt="参考商详图 ${index + 1}"><button class="suite-start-reference-remove" type="button" data-suite-start-reference-remove="${index}" aria-label="删除参考商详图 ${index + 1}">×</button><figcaption>${index + 1}</figcaption></figure>`).join("")}</div>
    ` : "";
  };
  renderReferenceImages(referencePreview);
  renderReferenceImages(linkPreview);
  progressItems.forEach((item) => {
    const order = ["product", "reference", "detail"];
    const itemIndex = order.indexOf(item.dataset.suiteStartProgressItem);
    const currentIndex = order.indexOf(currentStep);
    item.classList.toggle("is-current", itemIndex === currentIndex);
    item.classList.toggle("is-done", itemIndex < currentIndex);
  });
  if (tip) tip.textContent = product ? `已上传 ${getModuleProductImages(product).length} 张商品图，点击下一步选择参考方式` : "请选择一个或多个商品图开始复刻";
  if (next) {
    next.disabled = !product;
    next.textContent = "下一步";
  }
  if (referenceNext) referenceNext.disabled = !suiteReplicaStartState.referenceReady;
}

function createSuiteReplicaStartProductFromImages(images, meta = {}) {
  const normalizedImages = images.map((image, index) => ({
    url: image.url || image.image || "",
    image: image.url || image.image || "",
    name: image.name || image.title || `商品图 ${index + 1}`,
    title: image.title || image.name || `商品图 ${index + 1}`,
    sourceProductId: image.sourceProductId
  })).filter((image) => image.url);
  const firstImage = normalizedImages[0];
  return {
    id: meta.id || `suite-product-${Date.now()}`,
    productIds: meta.productIds || [],
    name: meta.name || (normalizedImages.length > 1 ? `已选择 ${normalizedImages.length} 张商品图` : firstImage?.name || "商品图"),
    category: suiteReplicaStartState.category || meta.category || "其他",
    image: firstImage?.url || "",
    isLocal: Boolean(meta.isLocal),
    materialCount: normalizedImages.length,
    images: normalizedImages,
    points: meta.points || { core: "请保留上传商品图中的主体、真实颜色、材质与细节。" }
  };
}

function setSuiteReplicaStartProductImages(images, meta = {}) {
  const product = createSuiteReplicaStartProductFromImages(images, meta);
  if (!product.images.length) return;
  suiteReplicaStartState.product = product;
  suiteReplicaStartState.template = null;
  suiteReplicaStartState.referenceSource = "upload";
  suiteReplicaStartState.referenceMode = "multi";
  suiteReplicaStartState.link = "";
  suiteReplicaStartState.linkParsing = false;
  suiteReplicaStartState.referenceImages = [];
  suiteReplicaStartState.referenceReady = false;
  renderSuiteReplicaStart();
}

function selectSuiteReplicaStartProduct(product, { append = false } = {}) {
  if (!product) return;
  const existingImages = append ? getModuleProductImages(suiteReplicaStartState.product) : [];
  const productImages = getModuleProductImages(product).map((image, index) => ({
    url: image.url || image.image || product.image,
    name: image.name || image.title || `${product.name || "商品"} ${index + 1}`,
    sourceProductId: product.id
  }));
  setSuiteReplicaStartProductImages([...existingImages, ...productImages].slice(0, 12), {
    id: append && suiteReplicaStartState.product ? suiteReplicaStartState.product.id : product.id,
    productIds: product.id && !product.isLocal ? [product.id] : [],
    name: productImages.length > 1 ? `${product.name || "商品"} · ${productImages.length} 张` : product.name,
    category: product.category,
    isLocal: Boolean(product.isLocal),
    points: product.points
  });
}

function selectSuiteReplicaStartProducts(selectedProducts) {
  if (!selectedProducts?.length) return;
  const previous = suiteReplicaStartState.product;
  const previousImages = (previous?.images || []).filter((image) => !image.sourceProductId);
  const libraryImages = selectedProducts.flatMap((product) => getModuleProductImages(product).map((image, index) => ({
    url: image.url || image.image || product.image,
    name: image.name || image.title || `${product.name} 商品图 ${index + 1}`,
    sourceProductId: product.id
  })));
  const images = [...previousImages, ...libraryImages].slice(0, 12);
  const primaryProduct = selectedProducts[0];
  setSuiteReplicaStartProductImages(images, {
    id: selectedProducts.length === 1 ? primaryProduct.id : `suite-library-${selectedProducts.map((product) => product.id).join("-")}`,
    productIds: selectedProducts.map((product) => product.id),
    name: selectedProducts.length === 1 ? primaryProduct.name : `已选择 ${selectedProducts.length} 个商品`,
    category: selectedProducts.length === 1 ? primaryProduct.category : "多商品",
    isLocal: previousImages.length > 0,
    points: primaryProduct.points
  });
}

function selectSuiteReplicaStartTemplate(templateId) {
  const template = suiteReplicaTemplateOptions.find((item) => item.id === templateId);
  if (!template) return;
  suiteReplicaStartState.template = template;
  suiteReplicaStartState.referenceSource = "template";
  suiteReplicaStartState.referenceMode = "template";
  suiteReplicaStartState.referenceReady = true;
  closePrototypeModals();
  renderSuiteReplicaStart();
  showToast(`已选择模板：${template.name}`);
}

function selectSuiteReplicaStartSingleTemplate(moduleId) {
  const asset = moduleLibraryAssets.find((item) => item.id === moduleId && item.type === "image");
  if (!asset) return;
  suiteReplicaStartState.template = createSuiteReplicaSingleTemplate(asset);
  suiteReplicaStartState.referenceSource = "template";
  suiteReplicaStartState.referenceMode = "template";
  suiteReplicaStartState.referenceReady = true;
  closePrototypeModals();
  renderSuiteReplicaStart();
  showToast(`已选择单图模板：${asset.name}`);
}

function getSuiteReplicaStartSingleTemplateDrawerModules() {
  const { keyword, category, source } = suiteReplicaStartState.singleTemplateDrawer;
  const normalizedKeyword = keyword.trim().toLowerCase();
  return moduleLibraryAssets.filter((asset) => {
    if (asset.type !== "image") return false;
    if (category && asset.category !== category) return false;
    if (source && asset.source !== source) return false;
    if (!normalizedKeyword) return true;
    return [asset.name, asset.description, asset.category, asset.source].join(" ").toLowerCase().includes(normalizedKeyword);
  });
}

function renderSuiteReplicaStartSingleTemplateDrawer() {
  const modal = document.querySelector("[data-suite-start-single-template-modal]");
  if (!modal) return;
  const drawer = suiteReplicaStartState.singleTemplateDrawer;
  const categorySelect = modal.querySelector("[data-suite-start-single-template-drawer-category]");
  const sourceSelect = modal.querySelector("[data-suite-start-single-template-drawer-source]");
  const search = modal.querySelector("[data-suite-start-single-template-drawer-search]");
  const categories = [...new Set(moduleLibraryAssets.filter((asset) => asset.type === "image").map((asset) => asset.category).filter(Boolean))];
  if (search) search.value = drawer.keyword;
  if (categorySelect) {
    categorySelect.innerHTML = `<option value="">类目</option>${categories.map((item) => `<option value="${item}">${item}</option>`).join("")}`;
    categorySelect.value = categories.includes(drawer.category) ? drawer.category : "";
  }
  if (sourceSelect) sourceSelect.value = drawer.source;
  const grid = modal.querySelector("[data-suite-start-single-template-drawer-grid]");
  if (!grid) return;
  const modules = getSuiteReplicaStartSingleTemplateDrawerModules();
  grid.innerHTML = modules.length ? modules.map((asset) => {
    const selected = suiteReplicaStartState.template?.sourceModuleId === asset.id;
    return `<article class="module-flow-module-card ${selected ? "is-selected" : ""}" data-suite-start-single-template-drawer-choice="${asset.id}" role="button" tabindex="0">
      <div class="module-flow-module-cover">
        <img src="${asset.image}" alt="${asset.name}">
        <button class="module-flow-preview-button" type="button" data-suite-start-single-template-drawer-preview="${asset.id}"><img src="assets/module-flow-preview-eye-icon.png" alt="">预览</button>
        <span class="module-flow-module-check">✓</span>
      </div>
      <div class="module-flow-module-body"><strong>${asset.name}</strong></div>
    </article>`;
  }).join("") : `<div class="module-flow-template-empty">未找到匹配模块，请调整筛选条件</div>`;
}

function openSuiteReplicaStartSingleTemplateModal() {
  let modal = document.querySelector("[data-suite-start-single-template-modal]");
  if (!modal) {
    modal = document.createElement("div");
    modal.className = "prototype-modal suite-picker-modal suite-start-template-drawer-modal";
    modal.dataset.suiteStartSingleTemplateModal = "";
    modal.setAttribute("aria-hidden", "true");
    modal.innerHTML = `
      <div class="module-flow-template-mask is-open" data-modal-close></div>
      <aside class="module-flow-template-drawer is-open" role="dialog" aria-modal="true" aria-labelledby="suite-start-all-single-template-title">
        <button class="module-flow-template-close" type="button" data-modal-close aria-label="关闭全部单图模板">×</button>
        <div class="module-flow-template-drawer-head"><div><h2 id="suite-start-all-single-template-title">全部单图模板</h2></div></div>
        <div class="module-flow-template-filter">
          <label class="module-flow-template-search"><input type="search" placeholder="模块名称 / 描述" data-suite-start-single-template-drawer-search></label>
          <label class="module-flow-template-select"><select data-suite-start-single-template-drawer-category aria-label="类目"><option value="">类目</option></select></label>
          <label class="module-flow-template-select"><select data-suite-start-single-template-drawer-source aria-label="模块来源"><option value="">全部</option><option value="已购模块">已购模块</option><option value="自己创作">自创模块</option></select></label>
          <button class="module-flow-template-query" type="button" data-suite-start-single-template-drawer-query><span aria-hidden="true"></span>查询</button>
        </div>
        <div class="module-flow-template-drawer-grid" data-suite-start-single-template-drawer-grid></div>
      </aside>`;
    document.body.appendChild(modal);
  }
  renderSuiteReplicaStartSingleTemplateDrawer();
  openPrototypeModal(modal);
}

function getSuiteReplicaStartTemplateDrawerTemplates() {
  const { keyword, source } = suiteReplicaStartState.suiteTemplateDrawer;
  const normalizedKeyword = keyword.trim().toLowerCase();
  return suiteReplicaTemplateOptions.filter((template) => {
    const templateSource = template.category === "我的模板" ? "自己创作" : "已购模块";
    if (source && templateSource !== source) return false;
    if (!normalizedKeyword) return true;
    return [template.name, template.description, template.category].join(" ").toLowerCase().includes(normalizedKeyword);
  });
}

function renderSuiteReplicaStartTemplateDrawer() {
  const modal = document.querySelector("[data-suite-start-template-modal]");
  if (!modal) return;
  const drawer = suiteReplicaStartState.suiteTemplateDrawer;
  const categorySelect = modal.querySelector("[data-suite-start-template-drawer-category]");
  const sourceSelect = modal.querySelector("[data-suite-start-template-drawer-source]");
  const search = modal.querySelector("[data-suite-start-template-drawer-search]");
  const categories = [...new Set(moduleLibraryAssets.filter((asset) => asset.type === "image").map((asset) => asset.category).filter(Boolean))];
  if (search) search.value = drawer.keyword;
  if (categorySelect) {
    categorySelect.innerHTML = `<option value="">类目</option>${categories.map((item) => `<option value="${item}">${item}</option>`).join("")}`;
    categorySelect.value = categories.includes(drawer.category) ? drawer.category : "";
  }
  if (sourceSelect) sourceSelect.value = drawer.source;
  const grid = modal.querySelector("[data-suite-start-template-drawer-grid]");
  if (!grid) return;
  const templates = getSuiteReplicaStartTemplateDrawerTemplates();
  grid.innerHTML = templates.length
    ? templates.map((template) => renderSuiteReplicaStartTemplateCard(template)).join("")
    : `<div class="module-flow-template-empty">未找到匹配模板，请调整筛选条件</div>`;
}

function openSuiteReplicaStartTemplateModal() {
  let modal = document.querySelector("[data-suite-start-template-modal]");
  if (!modal) {
    modal = document.createElement("div");
    modal.className = "prototype-modal suite-picker-modal suite-start-template-drawer-modal";
    modal.dataset.suiteStartTemplateModal = "";
    modal.setAttribute("aria-hidden", "true");
    modal.innerHTML = `
      <div class="module-flow-template-mask is-open" data-modal-close></div>
      <aside class="module-flow-template-drawer is-open" role="dialog" aria-modal="true" aria-labelledby="suite-start-all-template-title">
        <button class="module-flow-template-close" type="button" data-modal-close aria-label="关闭全部套图模板">×</button>
        <div class="module-flow-template-drawer-head"><div><h2 id="suite-start-all-template-title">全部套图模板</h2></div></div>
        <div class="module-flow-template-filter">
          <label class="module-flow-template-search"><input type="search" placeholder="模块名称 / 描述" data-suite-start-template-drawer-search></label>
          <label class="module-flow-template-select"><select data-suite-start-template-drawer-category aria-label="类目"><option value="">类目</option></select></label>
          <label class="module-flow-template-select"><select data-suite-start-template-drawer-source aria-label="模块来源"><option value="">全部</option><option value="已购模块">已购模块</option><option value="自己创作">自创模块</option></select></label>
          <button class="module-flow-template-query" type="button" data-suite-start-template-drawer-query><span aria-hidden="true"></span>查询</button>
        </div>
        <div class="module-flow-template-drawer-grid" data-suite-start-template-drawer-grid></div>
      </aside>`;
    document.body.appendChild(modal);
  }
  renderSuiteReplicaStartTemplateDrawer();
  openPrototypeModal(modal);
}

function enterSuiteReplicaWorkspaceFromStart(referenceTextMode = "original", options = {}) {
  const { product, template } = suiteReplicaStartState;
  if (!product) {
    showToast("请先上传商品图");
    return;
  }
  openSuiteReplicaEditor("creation-plaza", {
    product,
    template,
    templateId: template?.id,
    templateEntry: suiteReplicaStartState.referenceSource === "template",
    referenceSource: suiteReplicaStartState.referenceSource,
    referenceMode: suiteReplicaStartState.referenceMode,
    link: suiteReplicaStartState.link,
    autoReference: !template,
    referenceTextMode,
    templateStartEntry: suiteReplicaStartState.referenceSource === "template",
    generationConfiguredAtStart: true,
    hideCopyEditor: Boolean(options.autoGenerate),
    autoGenerationNotice: Boolean(options.autoGenerate),
    ratio: suiteReplicaStartState.generation.ratio,
    resolution: suiteReplicaStartState.generation.resolution,
    templateModel: suiteReplicaStartState.generation.model,
    templateCount: suiteReplicaStartState.generation.count
  });
  if (options.autoGenerate) window.setTimeout(() => submitSuiteGeneration({ showLoading: true }), 0);
}

function openSuiteStartReferenceTextModal() {
  const modal = document.querySelector("[data-suite-start-reference-text-modal]");
  if (!modal) return;
  const count = modal.querySelector("[data-suite-start-reference-text-count]");
  const source = modal.querySelector("[data-suite-start-reference-text-source]");
  if (count) count.textContent = String(suiteReplicaStartState.referenceImages.length || 1);
  if (source) source.textContent = suiteReplicaStartState.referenceMode === "link" ? "已解析" : "已上传";
  modal.querySelectorAll("[data-suite-start-reference-text-mode]").forEach((button) => {
    button.disabled = false;
    button.classList.remove("is-loading");
    button.innerHTML = button.dataset.suiteStartReferenceTextMode === "parsed"
      ? '是，修改文案 <span class="suite-reference-text-parse-cost"><b>1</b><img src="assets/creation-rongdou-icon.png" alt="融豆"></span>'
      : '否，直接生成图片 <span class="suite-reference-text-parse-cost"><b>10</b><img src="assets/creation-rongdou-icon.png" alt="融豆"></span>';
  });
  openPrototypeModal(modal);
}

function getRecommendedModuleAssets() {
  const imageModules = moduleLibraryAssets.filter((asset) => asset.type === "image");
  const category = moduleFlowState.product?.category || "";
  const keywords = category.includes("童") ? ["童装"] : category.includes("男") || category.includes("内裤") ? ["内裤", "通用"] : ["内衣", "通用"];
  const recommended = imageModules.filter((asset) => keywords.includes(asset.category));
  const list = (recommended.length ? recommended : imageModules).slice(0, 5);
  if (moduleFlowState.selectedModule && !list.some((asset) => asset.id === moduleFlowState.selectedModule.id)) {
    return [moduleFlowState.selectedModule, ...list].slice(0, 5);
  }
  return list;
}

function renderModuleFlowModuleCard(asset, { selected = false, drawer = false } = {}) {
  const selectAttr = drawer ? "data-module-flow-drawer-module" : "data-module-flow-module";
  const previewAttr = drawer ? "data-module-flow-drawer-preview" : "data-module-flow-module-preview";
  return `
    <article class="module-flow-module-card ${selected ? "is-selected" : ""}" ${selectAttr}="${asset.id}" role="button" tabindex="0">
      <div class="module-flow-module-cover">
        <img src="${asset.image}" alt="${asset.name}">
        <button class="module-flow-preview-button" type="button" ${previewAttr}="${asset.id}"><img src="assets/module-flow-preview-eye-icon.png" alt="">预览</button>
        <span class="module-flow-module-check">✓</span>
      </div>
      <div class="module-flow-module-body">
        <strong>${asset.name}</strong>
      </div>
    </article>`;
}

function getModuleFlowDrawerModules() {
  const keyword = moduleFlowState.moduleDrawerSearch.trim().toLowerCase();
  return moduleLibraryAssets.filter((asset) => {
    if (asset.type !== "image") return false;
    if (moduleFlowState.moduleDrawerCategory && asset.category !== moduleFlowState.moduleDrawerCategory) return false;
    if (moduleFlowState.moduleDrawerSource && asset.source !== moduleFlowState.moduleDrawerSource) return false;
    if (!keyword) return true;
    return [asset.name, asset.description, asset.category, asset.source].join(" ").toLowerCase().includes(keyword);
  });
}

function renderModuleFlowTemplateFilters() {
  const search = document.querySelector("[data-module-flow-template-search]");
  const category = document.querySelector("[data-module-flow-template-category]");
  const source = document.querySelector("[data-module-flow-template-source]");
  if (search) search.value = moduleFlowState.moduleDrawerSearch;
  if (category) {
    const categories = [...new Set(moduleLibraryAssets.filter((asset) => asset.type === "image").map((asset) => asset.category).filter(Boolean))];
    const current = moduleFlowState.moduleDrawerCategory;
    category.innerHTML = `<option value="">类目</option>${categories.map((item) => `<option value="${item}">${item}</option>`).join("")}`;
    category.value = categories.includes(current) ? current : "";
    if (category.value !== current) moduleFlowState.moduleDrawerCategory = "";
  }
  if (source) source.value = moduleFlowState.moduleDrawerSource;
}

function renderModuleFlowTemplateDrawer() {
  const grid = document.querySelector("[data-module-flow-template-drawer-grid]");
  if (!grid) return;
  renderModuleFlowTemplateFilters();
  const modules = getModuleFlowDrawerModules();
  grid.innerHTML = modules.length
    ? modules.map((asset) => renderModuleFlowModuleCard(asset, { selected: moduleFlowState.selectedModule?.id === asset.id, drawer: true })).join("")
    : `<div class="module-flow-template-empty">未找到匹配模块，请调整筛选条件</div>`;
}

function setModuleFlowTemplateDrawer(open) {
  const drawer = document.querySelector("[data-module-flow-template-drawer]");
  const mask = document.querySelector("[data-module-flow-template-mask]");
  if (open) renderModuleFlowTemplateDrawer();
  drawer?.classList.toggle("is-open", open);
  mask?.classList.toggle("is-open", open);
  drawer?.setAttribute("aria-hidden", String(!open));
}

function renderModuleFlow() {
  const currentStep = moduleFlowState.step;
  const product = moduleFlowState.product;
  const selectedModule = moduleFlowState.selectedModule;

  document.querySelectorAll("[data-module-flow-stage]").forEach((stage) => {
    const active = Number(stage.dataset.moduleFlowStage) === currentStep;
    stage.hidden = !active;
    stage.classList.toggle("is-active", active);
  });
  document.querySelectorAll("[data-module-flow-step]").forEach((button) => {
    const step = Number(button.dataset.moduleFlowStep);
    const active = step === currentStep;
    button.classList.toggle("is-active", active);
    button.classList.toggle("is-complete", step < currentStep || (step === 2 && currentStep === 2 && selectedModule));
    button.disabled = step > currentStep && !(step === 3 && selectedModule);
  });

  const productGrid = document.querySelector("[data-module-flow-product-grid]");
  if (productGrid) {
    productGrid.innerHTML = getModuleFlowProducts().map((item) => `
      <button class="module-flow-product-card ${product?.id === item.id ? "is-selected" : ""}" type="button" data-module-flow-product="${item.id}">
        <img src="${item.image}" alt="${item.name}">
        <span><strong>${item.name}</strong><small>${item.category}</small><em>${item.isLocal ? "本地上传" : `${item.materialCount || 1} 项素材`}</em></span><i>✓</i>
	      </button>`).join("");
  }

  const productArea = document.querySelector("[data-module-flow-product-area]");
  const productThumb = document.querySelector("[data-module-flow-product-thumb]");
  renderModuleFlowStart();
  if (productArea) productArea.hidden = currentStep !== 2 || !product;
  if (productThumb && product) {
    productThumb.src = product.image;
    productThumb.alt = product.name || "已选商品";
  }

  const modules = getRecommendedModuleAssets();
  const grid = document.querySelector("[data-module-flow-module-grid]");
  if (grid) {
    grid.innerHTML = modules.map((asset) => renderModuleFlowModuleCard(asset, { selected: selectedModule?.id === asset.id })).join("");
  }
  const moduleHeading = document.querySelector("[data-module-flow-module-heading]");
  const showAllButton = document.querySelector("[data-module-flow-show-all]");
  if (moduleHeading) moduleHeading.textContent = "推荐模块";
  if (showAllButton) showAllButton.textContent = "查看全部模块";
  renderModuleFlowTemplateDrawer();

  const previous = document.querySelector("[data-module-flow-previous]");
  const next = document.querySelector("[data-module-flow-next]");
  const tip = document.querySelector("[data-module-flow-selection-tip]");
  if (previous) previous.hidden = currentStep === 1;
  if (next) {
    next.disabled = currentStep === 1 ? !product : !selectedModule;
    next.textContent = "下一步";
  }
  if (tip) tip.textContent = currentStep === 1 ? (product ? `已选择：${product.name}` : "请选择一个商品开始匹配模块") : (selectedModule ? "已选模块-0206" : "请选择一个模块继续");
}

function setModuleFlowStep(step) {
  const target = Number(step);
  if (target === 2 && !moduleFlowState.product) {
    showToast("请先选择商品");
    return;
  }
  if (target === 3) {
    if (!moduleFlowState.selectedModule) {
      showToast("请先选择模块");
      return;
    }
    startModuleFlowCreation();
    return;
  }
  moduleFlowState.step = Math.max(1, Math.min(target, 2));
  renderModuleFlow();
}

function openModuleGenerationFlow({ resume = false } = {}) {
  if (!resume) resetModuleFlow();
  setModuleFlowTemplateDrawer(false);
  setWorkspacePage("module-generation-flow");
  clearMenuActive();
  document.querySelector('[data-single-menu="创作中心"]')?.classList.add("active");
  renderModuleFlow();
}

function startModuleFlowCreation() {
  const product = moduleFlowState.product;
  const asset = moduleFlowState.selectedModule;
  if (!product || !asset) return;
  resetModuleImageWorkspace();
  moduleImageState.intent = "generate";
  moduleImageState.backPage = "module-flow";
  moduleImageState.sourceAsset = asset;
  moduleImageState.materials.product = getModuleProductImages(product).map((image, index) => ({
    url: image.url,
    name: image.name || `${product.name || "商品图"} ${index + 1}`,
    source: product.isLocal ? "本地上传" : "商品库"
  }));
  const profile = moduleReuseProfiles[asset.id] || getModuleReuseProfile();
  document.querySelector("[data-module-product-prompt]").value = profile.productPrompt;
  document.querySelector("[data-module-scene-prompt]").value = profile.scenePrompt;
  openModuleImageWorkspace({ backPage: "module-flow", intent: "generate" });
  showToast("商品与模块已带入创作工作台");
}

function openBoutiqueLibrary() {
  setMaterialLibraryTitle("精品库");
  setWorkspacePage("material-library");
  filterMaterials();
}

function openBrandMaterialLibrary() {
  setWorkspacePage("brand-material-library");
  clearMenuActive();
  document.querySelector('[data-single-menu="资产库"]')?.classList.add("active");
}

function openBrandMaterialEditor(backPage = "brand-material-library", options = {}) {
  const target = ["creation-plaza", "ai-tools", "module-library", "module-image", "suite-replica-editor"].includes(backPage) ? backPage : "brand-material-library";
  state.brandEditor.backPage = target;
  if (target === "module-library") state.brandEditor.moduleLibraryReturnType = state.moduleLibraryType;
  state.brandEditor.returnToMultiResult = Boolean(options.returnToMultiResult);
  state.brandEditor.returnToSuiteReplica = Boolean(options.returnToSuiteReplica);
  setWorkspacePage("brand-material-editor");
  clearMenuActive();
  const menuName = target === "creation-plaza" || target === "module-image" || target === "suite-replica-editor" ? "创作中心" : target === "ai-tools" ? "AI工具" : target === "module-library" ? "模板" : "资产库";
  document.querySelector(`[data-single-menu="${menuName}"]`)?.classList.add("active");
  const backButton = document.querySelector("[data-back-brand-library]");
  if (backButton) {
    const backText = "返回";
    backButton.hidden = Boolean(options.hideBackButton);
    backButton.lastChild.textContent = backText;
    backButton.setAttribute("aria-label", backText);
  }
  setBrandEditorTool("add");
  renderBrandAddedImages();
  renderBrandCanvas();
}

function leaveBrandMaterialEditor() {
  if (state.brandEditor.returnToSuiteReplica) {
    state.brandEditor.returnToSuiteReplica = false;
    state.brandEditor.suiteTextSources = [];
    setWorkspacePage("suite-replica-editor");
    clearMenuActive();
    document.querySelector('[data-single-menu="创作中心"]')?.classList.add("active");
    renderSuiteReplicaEditor();
    return;
  }
  if (state.brandEditor.returnToMultiResult) {
    state.brandEditor.returnToMultiResult = false;
    state.multiCreate.step = "result";
    setWorkspacePage("multi-image-creation");
    renderMultiImageCreation();
    return;
  }
  if (state.brandEditor.backPage === "module-library") {
    state.moduleLibraryType = state.brandEditor.moduleLibraryReturnType || "image";
    setWorkspacePage("module-library");
    clearMenuActive();
    document.querySelector('[data-single-menu="模板"]')?.classList.add("active");
    syncModuleTemplateTabs("module-library");
    filterModuleLibrary();
    return;
  }
  if (state.brandEditor.backPage === "module-image") {
    setWorkspacePage("module-image");
    clearMenuActive();
    document.querySelector('[data-single-menu="创作中心"]')?.classList.add("active");
    renderModuleImageWorkspace();
    return;
  }
  const backPage = ["creation-plaza", "ai-tools"].includes(state.brandEditor.backPage) ? state.brandEditor.backPage : "brand-material-library";
  setWorkspacePage(backPage);
  clearMenuActive();
  const menuName = backPage === "creation-plaza" ? "创作中心" : backPage === "ai-tools" ? "AI工具" : "资产库";
  document.querySelector(`[data-single-menu="${menuName}"]`)?.classList.add("active");
}

function openBrandEditorLeaveConfirm() {
  openPrototypeModal(document.querySelector("[data-brand-editor-leave-modal]"));
}

function saveBrandEditorAndReturn() {
  closePrototypeModals();
  if (state.brandEditor.returnToSuiteReplica) {
    applySuiteTextEditingResult();
    return;
  }
  leaveBrandMaterialEditor();
  showToast("编辑内容已保存");
}

function setBrandEditorTool(tool) {
  document.querySelectorAll("[data-brand-editor-tool]").forEach((button) => {
    button.classList.toggle("active", button.dataset.brandEditorTool === tool);
  });
  document.querySelectorAll("[data-brand-tool-panel]").forEach((panel) => {
    panel.classList.toggle("active", panel.dataset.brandToolPanel === tool);
  });
  const propMap = {
    add: "canvas",
    text: "text",
    element: "element",
    layer: "layer",
    import: "canvas"
  };
  const propPanel = propMap[tool] || "canvas";
  document.querySelectorAll("[data-brand-prop-panel]").forEach((panel) => {
    panel.classList.toggle("active", panel.dataset.brandPropPanel === propPanel);
  });
  if (tool === "add") renderBrandAddedImages();
  syncBrandEditorProps(propPanel);
}

function escapeBrandText(value) {
  return String(value).replace(/[&<>"']/g, (char) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "\"": "&quot;",
    "'": "&#39;"
  }[char]));
}

function getSelectedBrandObject() {
  return state.brandEditor.objects.find((item) => item.id === state.brandEditor.selectedId) || null;
}

function getBrandObjectPropPanel(object, fallback = "element") {
  if (!object) return fallback;
  return object.type === "text" ? "text" : fallback;
}

function setBrandPropPanel(panelName) {
  document.querySelectorAll("[data-brand-prop-panel]").forEach((panel) => {
    panel.classList.toggle("active", panel.dataset.brandPropPanel === panelName);
  });
  syncBrandEditorProps(panelName);
}

function brandObjectHandles() {
  return '<i class="handle tl"></i><i class="handle tr"></i><i class="handle bl"></i><i class="handle br"></i>';
}

function getBrandElementVisual(name) {
  const map = {
    星环: '<i class="planet"></i><span>星环</span>',
    流光: '<i class="meteor"></i><span>流光</span>',
    绿植: '<i class="leaf"></i><span>绿植</span>',
    新春字: '<i class="pin"></i><span>新春字</span>',
    气泡: '<i class="planet"></i><span>气泡</span>',
    闪光: '<i class="spark-shape"></i><span>闪光</span>',
    开心: '<i>🙂</i><span>开心</span>',
    爱心: '<i>☺</i><span>爱心</span>',
    欢呼: '<i>😊</i><span>欢呼</span>',
    十字光: '<i class="spark-shape"></i><span>十字光</span>',
    耀斑: '<i class="spark-shape"></i><span>耀斑</span>',
    极光: '<i class="meteor"></i><span>极光</span>'
  };
  return map[name] || `<span>${escapeBrandText(name)}</span>`;
}

function renderBrandObject(object) {
  const selected = object.id === state.brandEditor.selectedId ? " is-selected" : "";
  const flipX = object.flipX ? -1 : 1;
  const flipY = object.flipY ? -1 : 1;
  const style = [
    `left:${object.x}px`,
    `top:${object.y}px`,
    `width:${object.width}px`,
    `height:${object.height}px`,
    `opacity:${(Number(object.opacity) || 100) / 100}`,
    `transform:rotate(${Number(object.rotation) || 0}deg) scale(${flipX}, ${flipY})`
  ].join(";");

  if (object.type === "text") {
    return `
      <div class="brand-canvas-object brand-canvas-text${selected}" data-brand-object="${object.id}" style="${style};font-size:${object.fontSize || 34}px">
        ${escapeBrandText(object.name)}
        ${brandObjectHandles()}
      </div>
    `;
  }

  if (object.type === "shape") {
    const shapeClass = object.shape === "圆形" ? " circle" : object.shape === "星形" ? " star" : "";
    return `
      <div class="brand-canvas-object brand-canvas-shape${shapeClass}${selected}" data-brand-object="${object.id}" style="${style}">
        ${brandObjectHandles()}
      </div>
    `;
  }

  if (object.type === "image") {
    return `
      <div class="brand-canvas-object brand-canvas-image${selected}" data-brand-object="${object.id}" style="${style}">
        ${object.imageUrl ? `<img src="${object.imageUrl}" alt="${escapeBrandText(object.name)}">` : `<div class="brand-object-element"><span>${escapeBrandText(object.name)}</span></div>`}
        ${brandObjectHandles()}
      </div>
    `;
  }

  return `
    <div class="brand-canvas-object brand-canvas-image${selected}" data-brand-object="${object.id}" style="${style}">
      <div class="brand-object-element">${getBrandElementVisual(object.name)}</div>
      ${brandObjectHandles()}
    </div>
  `;
}

function renderBrandCanvas() {
  const artboard = document.querySelector("[data-brand-artboard]");
  if (!artboard) return;
  const { width, height, background } = state.brandEditor.canvas;
  artboard.style.width = `${width}px`;
  artboard.style.height = `${height}px`;
  artboard.classList.toggle("canvas-bg-color", background === "color");
  artboard.classList.toggle("canvas-bg-image", background === "image");
  artboard.classList.toggle("canvas-bg-transparent", background === "transparent");
  artboard.innerHTML = `${state.brandEditor.objects.map(renderBrandObject).join("")}<div class="brand-demo-label">-5°<small>冰感凉爽</small></div>`;
  syncBrandCanvasZoom();
  renderBrandLayers();
  syncBrandEditorProps();
}

function clampBrandCanvasZoom(zoom) {
  return Math.min(state.brandEditor.maxZoom, Math.max(state.brandEditor.minZoom, zoom));
}

function syncBrandCanvasZoom() {
  const artboard = document.querySelector("[data-brand-artboard]");
  const frame = document.querySelector("[data-brand-artboard-frame]");
  const label = document.querySelector("[data-brand-zoom-label]");
  if (!artboard || !frame) return;
  const zoom = clampBrandCanvasZoom(state.brandEditor.zoom);
  state.brandEditor.zoom = zoom;
  frame.style.width = `${state.brandEditor.canvas.width * zoom}px`;
  frame.style.height = `${state.brandEditor.canvas.height * zoom}px`;
  artboard.style.transform = `scale(${zoom})`;
  if (label) label.textContent = `${Math.round(zoom * 100)}%`;
}

function setBrandCanvasZoom(nextZoom, focusPoint) {
  const stage = document.querySelector("[data-brand-canvas-stage]");
  const previousZoom = state.brandEditor.zoom;
  const zoom = clampBrandCanvasZoom(nextZoom);
  if (Math.abs(zoom - previousZoom) < 0.001) return;

  let pointerX = 0;
  let pointerY = 0;
  if (stage && focusPoint) {
    const rect = stage.getBoundingClientRect();
    pointerX = focusPoint.clientX - rect.left;
    pointerY = focusPoint.clientY - rect.top;
  }

  state.brandEditor.zoom = zoom;
  syncBrandCanvasZoom();

  if (stage && focusPoint) {
    const ratio = zoom / previousZoom;
    stage.scrollLeft = (stage.scrollLeft + pointerX) * ratio - pointerX;
    stage.scrollTop = (stage.scrollTop + pointerY) * ratio - pointerY;
  }
}

function fitBrandCanvasToStage() {
  const stage = document.querySelector("[data-brand-canvas-stage]");
  if (!stage) return;
  const availableWidth = Math.max(stage.clientWidth - 120, 180);
  const availableHeight = Math.max(stage.clientHeight - 160, 180);
  const fitZoom = Math.min(
    availableWidth / state.brandEditor.canvas.width,
    availableHeight / state.brandEditor.canvas.height,
    1
  );
  setBrandCanvasZoom(fitZoom);
  stage.scrollTo({ left: 0, top: 0 });
}

function renderBrandLayers() {
  const list = document.querySelector(".layer-stack-list");
  if (!list) return;
  const items = [...state.brandEditor.objects].reverse();
  list.innerHTML = items.map((object) => `
    <button class="${object.id === state.brandEditor.selectedId ? "active" : ""}" type="button" data-brand-layer-object="${object.id}">
      <i class="layer-thumb ${object.type === "text" ? "text" : "image"}">${object.type === "text" ? "T" : ""}</i>
      <strong>${escapeBrandText(object.name)}</strong>
      <span class="layer-action ${object.lockRatio ? "lock" : "unlock"}" title="${object.lockRatio ? "锁定" : "解锁"}" data-brand-layer-action="lock" data-brand-layer-target="${object.id}"></span>
      <span class="layer-action up" title="上移" data-brand-layer-action="up" data-brand-layer-target="${object.id}"></span>
      <span class="layer-action down" title="下移" data-brand-layer-action="down" data-brand-layer-target="${object.id}"></span>
      <span class="layer-action remove" title="删除" data-brand-layer-action="remove" data-brand-layer-target="${object.id}"></span>
    </button>
  `).join("");
}

function syncBrandEditorProps(preferredPanel) {
  const object = getSelectedBrandObject();
  const panelName = preferredPanel || document.querySelector("[data-brand-prop-panel].active")?.dataset.brandPropPanel || "canvas";
  document.querySelectorAll("[data-brand-canvas-width]").forEach((input) => input.value = state.brandEditor.canvas.width);
  document.querySelectorAll("[data-brand-canvas-height]").forEach((input) => input.value = state.brandEditor.canvas.height);
  document.querySelectorAll("[data-brand-canvas-bg]").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.brandCanvasBg === state.brandEditor.canvas.background);
  });
  if (!object || panelName === "canvas") return;

  document.querySelectorAll("[data-brand-object-width]").forEach((input) => input.value = Math.round(object.width));
  document.querySelectorAll("[data-brand-object-height]").forEach((input) => input.value = Math.round(object.height));
  document.querySelectorAll("[data-brand-object-x]").forEach((input) => input.value = Math.round(object.x));
  document.querySelectorAll("[data-brand-object-y]").forEach((input) => input.value = Math.round(object.y));
  document.querySelectorAll("[data-brand-object-rotation]").forEach((input) => input.value = Math.round(object.rotation || 0));
  document.querySelectorAll("[data-brand-object-opacity]").forEach((input) => input.value = Math.round(object.opacity || 100));
  document.querySelectorAll("[data-brand-lock-ratio]").forEach((input) => input.checked = Boolean(object.lockRatio));
  document.querySelectorAll("[data-brand-text-size]").forEach((input) => input.value = Math.round(object.fontSize || 34));
  document.querySelectorAll("[data-brand-rotation-label]").forEach((label) => label.textContent = `${Math.round(object.rotation || 0)}°`);
  document.querySelectorAll("[data-brand-opacity-label]").forEach((label) => label.textContent = `${Math.round(object.opacity || 100)}%`);
}

function selectBrandObject(objectId, preferredPanel) {
  if (!state.brandEditor.objects.some((item) => item.id === objectId)) return;
  state.brandEditor.selectedId = objectId;
  renderBrandCanvas();
  const selected = getSelectedBrandObject();
  setBrandPropPanel(preferredPanel || getBrandObjectPropPanel(selected));
}

function addBrandObject(partial, preferredPanel) {
  const id = `brand-object-${state.brandEditor.seq++}`;
  const next = {
    id,
    type: "element",
    name: "素材",
    x: 220 + (state.brandEditor.seq % 4) * 28,
    y: 150 + (state.brandEditor.seq % 3) * 24,
    width: 180,
    height: 120,
    opacity: 100,
    rotation: 0,
    lockRatio: true,
    flipX: false,
    flipY: false,
    ...partial
  };
  next.aspectRatio = next.width / Math.max(next.height, 1);
  state.brandEditor.objects.push(next);
  state.brandEditor.selectedId = id;
  renderBrandCanvas();
  setBrandPropPanel(preferredPanel || getBrandObjectPropPanel(next));
  showToast(`${next.name}已添加到画布`);
}

function renderBrandAddedImages() {
  const section = document.querySelector("[data-brand-added-images]");
  const count = document.querySelector("[data-brand-added-image-count]");
  const grid = document.querySelector("[data-brand-added-image-grid]");
  if (!section || !count || !grid) return;
  const images = state.brandEditor.addedImages || [];
  section.hidden = !images.length;
  count.textContent = images.length;
  grid.innerHTML = images.map((image) => `
    <button class="brand-added-image-card" type="button" data-brand-added-image="${image.id}">
      <img src="${image.url}" alt="${escapeBrandText(image.name)}">
      <span>${escapeBrandText(image.name)}</span><b>＋</b>
    </button>`).join("");
}

function openGeneratedImageTextEditor(imageUrl, { backPage = "creation-plaza", name = "生成结果图片" } = {}) {
  if (!imageUrl) {
    showToast("请等待图片生成完成后再编辑");
    return;
  }
  const imageObjectId = "generated-result-image";
  state.brandEditor.canvas = {
    width: 900,
    height: 500,
    background: "transparent"
  };
  state.brandEditor.zoom = 0.8;
  state.brandEditor.objects = [
    {
      id: imageObjectId,
      type: "image",
      name,
      imageUrl,
      x: 330,
      y: 155,
      width: 240,
      height: 190,
      opacity: 100,
      rotation: 0,
      lockRatio: true,
      flipX: false,
      flipY: false,
      aspectRatio: 240 / 190
    },
    {
      id: "seed-watermark",
      type: "text",
      name: "冷感空调裤",
      x: 330,
      y: 102,
      width: 240,
      height: 44,
      fontSize: 28,
      opacity: 100,
      rotation: 0,
      lockRatio: true,
      flipX: false,
      flipY: false
    }
  ];
  state.brandEditor.selectedId = imageObjectId;
  state.brandEditor.addedImages = [{ id: "selected-generated-image", name, url: imageUrl }];
  openBrandMaterialEditor(backPage);
  setBrandPropPanel("element");
  showToast("已将选中图片带入编辑器");
}

function openSuiteExportTextEditor() {
  const editor = getSuiteEditor();
  const pages = getSuiteExportSelection(editor);
  if (!pages.length) {
    showToast("请先选择至少一张图片");
    return;
  }
  const primary = pages[0];
  openGeneratedImageTextEditor(primary.image, {
    backPage: "suite-replica-editor",
    name: getSuitePageExportTitle(primary, editor)
  });
  state.brandEditor.returnToSuiteReplica = true;
  state.brandEditor.suiteTextSources = pages.map((page) => ({ ...page }));
  state.brandEditor.addedImages = pages.map((page, index) => ({
    id: `suite-text-source-${index + 1}-${page.id}`,
    name: getSuitePageExportTitle(page, editor),
    url: page.image
  }));
  renderBrandAddedImages();
  showToast(`已带入 ${pages.length} 张图片，可统一添加文字`);
}

function applySuiteTextEditingResult() {
  const editor = getSuiteEditor();
  const sources = state.brandEditor.suiteTextSources || [];
  if (!sources.length) {
    leaveBrandMaterialEditor();
    return;
  }
  const stamp = Date.now();
  const textPages = sources.map((source, index) => {
    const parentId = getSuiteParentPageId(source.id, editor);
    const item = {
      ...source,
      id: `text-${source.id}-${stamp}-${index + 1}`,
      parentId,
      sourceId: source.id,
      title: source.title || `文字版 ${index + 1}`,
      textEdited: true,
      status: "done"
    };
    editor.textEditedByPage[parentId] = [...(editor.textEditedByPage[parentId] || []), item];
    return item;
  });
  state.brandEditor.returnToSuiteReplica = false;
  state.brandEditor.suiteTextSources = [];
  editor.exportSelectionIds = textPages.map((page) => page.id);
  editor.exportDrawerOpen = false;
  editor.selectedReferencePageId = textPages[0]?.id || editor.selectedReferencePageId;
  setWorkspacePage("suite-replica-editor");
  clearMenuActive();
  document.querySelector('[data-single-menu="创作中心"]')?.classList.add("active");
  renderSuiteReplicaEditor();
  showToast("文字版已添加到画布，并默认选中用于导出");
}

function bringModuleImagesToBrandEditor(task) {
  state.brandEditor.addedImages = task.candidates.map((candidate, index) => ({
    id: `${task.id}-brand-image-${index + 1}`,
    name: `生成图 ${index + 1}`,
    url: candidate.image
  }));
  openBrandMaterialEditor();
}

function removeBrandObject(objectId = state.brandEditor.selectedId) {
  const index = state.brandEditor.objects.findIndex((item) => item.id === objectId);
  if (index < 0) return;
  const removedObject = state.brandEditor.objects[index];
  state.brandEditor.objects.splice(index, 1);
  state.brandEditor.selectedId = state.brandEditor.objects[Math.min(index, state.brandEditor.objects.length - 1)]?.id || null;
  renderBrandCanvas();
  if (!state.brandEditor.selectedId) setBrandPropPanel("canvas");
  showToast(`${removedObject.type === "text" ? "文字" : "素材"}已删除`);
}

function moveBrandLayer(objectId, direction) {
  const index = state.brandEditor.objects.findIndex((item) => item.id === objectId);
  const target = direction === "up" ? index + 1 : index - 1;
  if (index < 0 || target < 0 || target >= state.brandEditor.objects.length) return;
  const [object] = state.brandEditor.objects.splice(index, 1);
  state.brandEditor.objects.splice(target, 0, object);
  state.brandEditor.selectedId = objectId;
  renderBrandCanvas();
}

function updateSelectedBrandObject(field, rawValue) {
  const object = getSelectedBrandObject();
  if (!object) return;
  const value = Number(rawValue);
  if (!Number.isFinite(value)) return;

  if (field === "width" || field === "height") {
    const nextValue = Math.max(24, value);
    object[field] = nextValue;
    if (object.lockRatio) {
      const ratio = object.aspectRatio || object.width / Math.max(object.height, 1) || 1;
      if (field === "width") object.height = Math.max(24, Math.round(nextValue / ratio));
      if (field === "height") object.width = Math.max(24, Math.round(nextValue * ratio));
    } else {
      object.aspectRatio = object.width / Math.max(object.height, 1);
    }
  } else if (field === "opacity") {
    object.opacity = Math.max(0, Math.min(100, value));
  } else if (field === "rotation") {
    object.rotation = Math.max(0, Math.min(360, value));
  } else if (field === "fontSize") {
    object.fontSize = Math.max(12, Math.min(160, value));
  } else if (field === "x" || field === "y") {
    object[field] = Math.max(0, value);
  }
  renderBrandCanvas();
}

function handleBrandEditorInput(target) {
  if (target.matches("[data-brand-object-width]")) return updateSelectedBrandObject("width", target.value), true;
  if (target.matches("[data-brand-object-height]")) return updateSelectedBrandObject("height", target.value), true;
  if (target.matches("[data-brand-object-x]")) return updateSelectedBrandObject("x", target.value), true;
  if (target.matches("[data-brand-object-y]")) return updateSelectedBrandObject("y", target.value), true;
  if (target.matches("[data-brand-object-rotation]")) return updateSelectedBrandObject("rotation", target.value), true;
  if (target.matches("[data-brand-object-opacity]")) return updateSelectedBrandObject("opacity", target.value), true;
  if (target.matches("[data-brand-text-size]")) return updateSelectedBrandObject("fontSize", target.value), true;
  if (target.matches("[data-brand-lock-ratio]")) {
    const object = getSelectedBrandObject();
    if (object) {
      object.lockRatio = target.checked;
      object.aspectRatio = object.width / Math.max(object.height, 1);
      renderBrandCanvas();
    }
    return true;
  }
  return false;
}

function applyBrandCanvasSize(width, height) {
  state.brandEditor.canvas.width = Math.max(240, Number(width) || 900);
  state.brandEditor.canvas.height = Math.max(240, Number(height) || 500);
  renderBrandCanvas();
}

function handleBrandImport(action) {
  if (action === "image") {
    const help = document.querySelector("[data-brand-import-help]");
    if (help) help.textContent = "已选择：brand-demo-import.png";
    addBrandObject({ type: "image", name: "导入图片", width: 210, height: 156 }, "element");
    return;
  }
  if (action === "import-json") {
    addBrandObject({ type: "text", name: "JSON导入标题", width: 240, height: 64, fontSize: 28 }, "text");
    showToast("已模拟导入 JSON");
    return;
  }
  showToast(action === "export-json" ? "已模拟导出 JSON" : "已模拟导出 PNG 图片");
}

function filterBrandAssetCards(type) {
  document.querySelectorAll("[data-brand-material-tab]").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.brandMaterialTab === type);
  });
  filterBrandMaterialsByControls();
}

function filterBrandMaterialsByControls() {
  const activeType = document.querySelector("[data-brand-material-tab].is-active")?.dataset.brandMaterialTab || "全部";
  const activeCategory = document.querySelector("[data-brand-material-category].is-active")?.dataset.brandMaterialCategory || "全部";
  const activeOwnership = document.querySelector("[data-brand-material-ownership].is-active")?.dataset.brandMaterialOwnership || "全部";
  const keyword = document.querySelector("[data-brand-material-search]")?.value.trim().toLowerCase() || "";

  document.querySelectorAll("[data-brand-asset-type]").forEach((card) => {
    const title = card.querySelector("h3")?.textContent.toLowerCase() || "";
    const category = card.querySelector(".brand-asset-category")?.textContent.toLowerCase() || "";
    const matchesType = activeType === "全部" || category.includes(activeType.toLowerCase());
    const matchesCategory = activeCategory === "全部" || card.dataset.brandAssetCategoryFilter === activeCategory;
    const matchesOwnership = activeOwnership === "全部" || card.dataset.brandAssetOwnership === activeOwnership;
    const matchesKeyword = !keyword || `${title} ${category}`.includes(keyword);
    card.classList.toggle("is-hidden", !matchesType || !matchesCategory || !matchesOwnership || !matchesKeyword);
  });

  if (els.brandMaterialCount) {
    els.brandMaterialCount.textContent = `共 ${document.querySelectorAll("[data-brand-asset-type]:not(.is-hidden)").length} 个素材`;
  }
}

function filterCreationTasks() {
  if (!els.creationTaskCards.length) return;

  const activeStatus = document.querySelector("[data-creation-task-status].is-active")?.dataset.creationTaskStatus || "all";
  const activeType = document.querySelector("[data-creation-task-type].is-active")?.dataset.creationTaskType || "all";
  const activeAiToolType = document.querySelector("[data-creation-ai-tool-type].is-active")?.dataset.creationAiToolType || "all";
  const keyword = (els.creationTaskSearch?.value || "").trim().toLowerCase();
  const showAiToolTabs = activeType === "AI工具";
  let visibleCount = 0;

  if (els.creationTaskAiToolFilter) {
    els.creationTaskAiToolFilter.hidden = !showAiToolTabs;
  }

  els.creationTaskCards.forEach((card) => {
    const statusMatched = activeStatus === "all" || card.dataset.status === activeStatus;
    const normalizedType = normalizeCreationTaskType(card.dataset.type);
    const aiToolType = getCreationTaskAiToolType(card);
    const typeMatched = activeType === "all" || normalizedType === activeType;
    const aiToolMatched = !showAiToolTabs || activeAiToolType === "all" || aiToolType === activeAiToolType;
    const text = `${card.dataset.title || ""} ${card.dataset.product || ""} ${normalizedType} ${aiToolType}`.toLowerCase();
    const keywordMatched = !keyword || text.includes(keyword);
    const visible = statusMatched && typeMatched && aiToolMatched && keywordMatched;
    card.style.display = visible ? "" : "none";
    if (visible) visibleCount += 1;
  });

  els.creationTaskEmpty?.classList.toggle("is-active", visibleCount === 0);
}

function ensureFailureDemoRecords() {
  if (!els.creationTaskFlow || els.creationTaskFlow.querySelector("[data-failure-demo-record]")) return;
  const demos = [
    ["复刻生图", "部分失败", "儿童亲子短袖套装复刻生图（部分失败示例）", "儿童亲子短袖套装", "商品主体识别不完整，2 张图片未生成。", "assets/product-cover-04.png"],
    ["复刻生图", "全部失败", "法式蕾丝文胸复刻生图（全部失败示例）", "法式蕾丝文胸", "参考图与商品主体匹配失败。", "assets/product-cover-03.png"],
    ["自由创作", "部分失败", "儿童 T 恤夏季主图自由创作（部分失败示例）", "儿童T恤-详情-1", "其中 1 张图片因内容解析失败未生成。", "assets/product-cover-04.png"],
    ["自由创作", "全部失败", "冰丝内裤自由创作（全部失败示例）", "男士冰丝平角裤", "生成服务超时，未返回可用图片。", "assets/product-cover-01.png"],
    ["新建图生图模块", "部分失败", "高腰塑形裤卖点图生图模板（部分失败示例）", "高腰塑形裤", "候选图 2 生成失败，已保留成功候选图。", "assets/product-cover-02.png"],
    ["新建图生图模块", "全部失败", "蕾丝文胸图生图模板（全部失败示例）", "蕾丝聚拢文胸 883", "生成服务异常，暂无可用候选图。", "assets/product-cover-03.png"],
    ["新建模特", "部分失败", "无痕内衣新建模特（部分失败示例）", "无痕内衣套装", "定妆图中有 1 张未通过质量校验。", "assets/model-detail-source.png"],
    ["新建模特", "全部失败", "童装女模特新建（全部失败示例）", "儿童亲子短袖套装", "模特特征生成失败，请调整参考图后重试。", "assets/model-detail-source.png"]
  ];
  const markup = demos.map(([type, outcome, title, product, reason, image]) => {
    const partial = outcome === "部分失败";
    const cost = partial ? 8 : 10;
    return `<article class="creation-task-card" data-creation-task-card data-failure-demo-record data-status="failed" data-result-status="${partial ? "partial" : "failed"}" data-type="${type}" data-title="${title}" data-product="${product}">
      <div class="creation-task-thumb single"><img src="${image}" alt=""><span class="creation-task-type">${type === "新建模特" ? "模特" : type === "新建图生图模块" ? "模板" : type === "自由创作" ? "自由" : "复刻"}</span></div>
      <div class="creation-task-main"><div class="creation-task-title-row"><h2>${title}</h2><span class="creation-task-status ${partial ? "warning" : "failed"}">${outcome}</span></div>
      <div class="creation-task-meta"><span>${partial ? "已完成 2/4" : "已完成 0/4"}</span><span>${partial ? "失败 2 项" : "失败 4 项"}</span><span>失败示例</span></div>
      <div class="creation-task-tags"><span>失败状态示例</span><span>${type}</span><span>创作人：林夏</span></div><div class="creation-task-reason">失败原因：${reason}</div></div>
      <div class="creation-task-action"><button class="creation-task-retry-button" type="button" data-record-retry data-retry-cost="${cost}">重试 <b>${cost}</b><img src="assets/creation-rongdou-icon.png" alt="融豆"></button><button class="btn primary" type="button" data-open-creation-detail>查看详情</button></div></article>`;
  }).join("");
  els.creationTaskFlow.insertAdjacentHTML("beforeend", markup);
  els.creationTaskCards = Array.from(document.querySelectorAll("[data-creation-task-card]"));
}

function getCreationMode() {
  const hasPrompt = els.creationPrompt.value.trim().length > 0;
  if (state.creation.templateKind === "suite" || state.creation.template || ["template", "module", "reference", "multi-replica"].includes(state.creation.inputMode)) return "复刻生图";
  if (hasPrompt || state.creation.productUploaded || state.creation.referenceUploaded) return "自由创作";
  return "待识别";
}

function getCreationCost(mode) {
  return {
    待识别: 0,
    自由创作: 4,
    复刻生图: 10
  }[mode] || 0;
}

function updateCreationMode() {
  const mode = getCreationMode();
  if (els.creationMode) els.creationMode.textContent = mode;
  if (els.creationCost) els.creationCost.textContent = `${getCreationCost(mode)} 融豆`;
  if (els.creationGenerateCost) els.creationGenerateCost.textContent = getCreationCost(mode);
}

const creationPolishTemplates = [
  "画面保持电商主图质感，商品主体清晰，突出材质、版型和核心卖点；使用自然柔和光线，背景干净，整体风格高级真实，适合投放和商品详情页展示。",
  "强化商品主体的视觉层级，保留真实细节与自然质感；画面采用干净高级的电商摄影风格，光线柔和通透，背景简洁，突出商品卖点与购买吸引力。",
  "以高品质电商大片为方向，强调商品轮廓、材质纹理和场景氛围；构图稳定，主体突出，色彩干净协调，整体呈现专业、真实、易转化的商品视觉。"
];

let creationPolishTemplateIndex = 0;
let creationPolishTarget = "creation";

function getCreationPolishPromptElement() {
  if (creationPolishTarget === "single-replica") {
    return document.querySelector("[data-single-replica-prompt]");
  }
  return els.creationPrompt;
}

function buildCreationPolishPrompt(baseText) {
  let trimmedText = baseText.trim();
  trimmedText = /^\d+\s*$/u.test(trimmedText) ? "" : trimmedText.replace(/^\d+[.。)、]\s*/u, "");
  trimmedText = trimmedText.replace(/[。；;，,\s]+$/u, "");
  const polishCopy = creationPolishTemplates[creationPolishTemplateIndex % creationPolishTemplates.length];
  return trimmedText ? `${trimmedText}。${polishCopy}` : polishCopy;
}

function updateCreationPolishOutput() {
  const prompt = getCreationPolishPromptElement();
  if (!prompt || !els.creationPolishOutput) return false;
  const text = prompt.value.trim();
  if (!text) {
    showToast("请先输入需求描述");
    return false;
  }
  els.creationPolishOutput.textContent = buildCreationPolishPrompt(text);
  return true;
}

function positionCreationPolishPopover(trigger) {
  const modal = els.creationPolishModal;
  if (!modal || !trigger) return;
  const rect = trigger.getBoundingClientRect();
  const panelWidth = 420;
  const gap = 10;
  const left = Math.min(Math.max(16, rect.right - panelWidth), window.innerWidth - panelWidth - 16);
  const top = Math.min(Math.max(16, rect.bottom + gap), window.innerHeight - 260);
  modal.style.setProperty("--creation-polish-left", `${left}px`);
  modal.style.setProperty("--creation-polish-top", `${top}px`);
}

function polishCreationPrompt(event) {
  creationPolishTarget = event?.currentTarget?.matches?.("[data-single-replica-polish]") ? "single-replica" : "creation";
  if (!updateCreationPolishOutput()) return;
  if (els.creationPolishModal) {
    positionCreationPolishPopover(event?.currentTarget || document.querySelector(creationPolishTarget === "single-replica" ? "[data-single-replica-polish]" : "[data-creation-polish]"));
    openPrototypeModal(els.creationPolishModal);
  }
}

function regenerateCreationPolishPrompt() {
  creationPolishTemplateIndex += 1;
  updateCreationPolishOutput();
}

function applyCreationPolishPrompt() {
  const prompt = getCreationPolishPromptElement();
  const optimizedText = els.creationPolishOutput?.textContent.trim();
  if (!prompt || !optimizedText) return;
  prompt.value = optimizedText;
  if (creationPolishTarget === "single-replica" && els.creationPrompt) {
    els.creationPrompt.value = optimizedText;
  }
  prompt.focus();
  updateCreationMode();
  closePrototypeModal(els.creationPolishModal);
  showToast("AI已润色需求描述");
}

function setCreationInputMode(mode) {
  const copy = mode === "reference"
    ? {
        placeholder: "（非必填）描述需保留或调整的构图、背景、光影等元素，例如：保留人物姿势与构图，背景改为奶油白，替换为我的商品。",
        productLabel: "上传商品图",
        referenceLabel: "上传参考图"
      }
    : {
        placeholder: "描述商品、场景与视觉风格，AI 将结合商品图生成图片，例如：自然光卧室场景的文胸模特主图，突出蕾丝杯面与舒适承托。",
        productLabel: "上传商品图",
        referenceLabel: "上传参考图"
  };
  state.creation.inputMode = mode;
  // 单图复刻与自由创作均不使用模特素材，避免从其他工作流带入历史选择。
  if (mode === "reference" || mode === "free") {
    state.creation.modelUploaded = false;
    state.creation.modelName = "";
    state.creation.modelNames = [];
  }
  const activeEntry = mode === "module" ? "module" : mode === "template" ? "template" : mode === "multi-replica" ? "multi-replica" : mode === "reference" ? "single-replica" : "free";
  const creationModeTabs = document.querySelector(".creation-mode-tabs");
  creationModeTabs?.setAttribute("data-active-entry", activeEntry);
  els.creationInputModeTabs.forEach((button) => {
    const selected = button.dataset.creationEntry === activeEntry;
    button.classList.toggle("is-active", selected);
    button.setAttribute("aria-selected", String(selected));
  });
  if (els.creationPrompt) els.creationPrompt.placeholder = copy.placeholder;
  const productLabel = document.querySelector('[data-creation-upload-copy="product"]');
  if (productLabel) productLabel.textContent = copy.productLabel;
  const referenceLabel = document.querySelector('[data-creation-upload-copy="reference"]');
  if (referenceLabel) referenceLabel.textContent = copy.referenceLabel;
  document.querySelectorAll("[data-creation-upload-required]").forEach((required) => {
    required.hidden = mode !== "reference";
  });
  const generateLabel = document.querySelector("[data-creation-generate] span");
  if (generateLabel) generateLabel.textContent = mode === "reference" ? "开始复刻" : "生成图片";
  const moduleStart = document.querySelector("[data-creation-module-start]");
  const templateStart = document.querySelector("[data-creation-template-start]");
  const suiteReplicaStart = document.querySelector("[data-creation-suite-replica-start]");
  const singleReplicaStart = document.querySelector("[data-single-replica-start]");
  const quickActions = document.querySelector(".creation-ai-tools-section");
  const promptShell = document.querySelector(".creation-prompt-shell");
  if (moduleStart) moduleStart.hidden = mode !== "module";
  if (templateStart) templateStart.hidden = mode !== "template";
  if (suiteReplicaStart) suiteReplicaStart.hidden = mode !== "multi-replica";
  if (singleReplicaStart) singleReplicaStart.hidden = mode !== "reference";
  if (quickActions) quickActions.hidden = mode === "multi-replica" && suiteReplicaStartState.step === "reference";
  if (promptShell) {
    const usesStartFlow = mode === "module" || mode === "template" || mode === "multi-replica" || mode === "reference";
    promptShell.hidden = usesStartFlow;
    promptShell.style.display = usesStartFlow ? "none" : "";
    promptShell.setAttribute("data-input-mode", mode);
  }
  if (mode === "module") renderModuleStart();
  if (mode === "template") renderTemplateStart();
  if (mode === "multi-replica") renderSuiteReplicaStart();
  if (mode === "reference") renderSingleReplicaStart();
  refreshCreationUploadCopy();
  renderDetailMaterialCards();
  updateCreationMode();
}

function updateFreeCreationTaskCount() {
  const count = document.querySelector("[data-free-creation-task-count]");
  const list = document.querySelector("[data-free-creation-record-list]");
  if (count && list) count.textContent = String(list.querySelectorAll(".creation-record, .module-task-item").length);
}

function normalizeFreeCreationTaskExpansion() {
  const list = document.querySelector("[data-free-creation-record-list]");
  const records = Array.from(list?.querySelectorAll(".module-task-item") || []);
  if (!records.length) return;
  const active = records.find((record) => record.classList.contains("is-active")) || records[0];
  records.forEach((record) => {
    const isActive = record === active;
    record.classList.toggle("is-active", isActive);
    record.querySelector(".module-task-summary")?.setAttribute("aria-expanded", String(isActive));
  });
}

function setFreeCreationTaskDrawer(open) {
  const panel = document.querySelector("[data-free-creation-task-drawer-panel]");
  const mask = document.querySelector("[data-free-creation-task-mask]");
  const trigger = document.querySelector("[data-free-creation-task-drawer]");
  if (open) normalizeFreeCreationTaskExpansion();
  panel?.classList.toggle("is-open", open);
  mask?.classList.toggle("is-open", open);
  panel?.setAttribute("aria-hidden", String(!open));
  trigger?.setAttribute("aria-expanded", String(open));
}

function openCreationEntry(entry) {
  document.querySelector(".creation-mode-tabs")?.setAttribute("data-active-entry", entry);
  if (entry === "free") {
    setCreationInputMode("free");
    return;
  }
  if (entry === "single-replica") {
    singleReplicaState.step = 1;
    setCreationInputMode("reference");
    return;
  }
  if (entry === "module") {
    resetModuleFlow();
    setCreationInputMode("module");
    return;
  }
  if (entry === "template") {
    templateStartState.step = 1;
    templateStartState.selectedTemplate = null;
    templateStartState.showAllTemplates = false;
    setCreationInputMode("template");
    return;
  }
  if (entry === "multi-replica") {
    resetSuiteReplicaStart();
    setCreationInputMode("multi-replica");
  }
}

function setCreationCategory(category) {
  state.creation.category = category;
  els.creationCategories.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.category === category);
  });
}

function setCreationUpload(type, uploaded) {
  state.creation[`${type}Uploaded`] = uploaded;
  if (type === "model") {
    if (uploaded) {
      if (!state.creation.modelNames?.length) state.creation.modelNames = [state.creation.modelName || "都市通勤女模特"];
      state.creation.modelName = state.creation.modelNames[0];
    } else {
      state.creation.modelName = "";
      state.creation.modelNames = [];
    }
  }
  const button = document.querySelector(`[data-creation-upload="${type}"]`);
  button?.classList.toggle("is-filled", uploaded);
  refreshCreationUploadCopy();
  updateCreationMode();
  renderDetailMaterialCards();
}

function setCreationTemplate(name, kind) {
  state.creation.template = name;
  state.creation.templateKind = kind;
  if (els.templateLabel) els.templateLabel.textContent = name || "";
  document.querySelector("[data-template-open]")?.classList.toggle("is-selected", Boolean(name));
  document.querySelectorAll("[data-template-choice]").forEach((button) => {
    button.classList.toggle("is-selected", button.dataset.templateChoice === name);
  });
  updateCreationMode();
}

function renderDetailMaterialCards() {
  const materialState = {
    product: state.creation.productUploaded,
    reference: state.creation.referenceUploaded,
    model: state.creation.modelUploaded
  };
  const hasPromptOnly = state.creation.inputMode === "free"
    && Boolean((els.detailPrompt?.value || els.creationPrompt?.value || "").trim())
    && !state.creation.productUploaded
    && !state.creation.referenceUploaded;
  Object.entries(materialState).forEach(([type, uploaded]) => {
    document.querySelector(`[data-detail-material-card="${type}"]`)?.classList.toggle("is-filled", Boolean(uploaded));
  });
  const emptyLabels = {
    product: hasPromptOnly ? "未添加商品图" : "上传商品图",
    reference: hasPromptOnly ? "未添加参考图" : "上传参考图"
  };
  Object.entries(emptyLabels).forEach(([type, label]) => {
    const emptyCopy = document.querySelector(`[data-detail-material-card="${type}"] .detail-material-empty strong`);
    if (emptyCopy) emptyCopy.textContent = label;
  });
  const modelCard = document.querySelector('[data-detail-material-card="model"]');
  if (modelCard) {
    modelCard.hidden = state.creation.inputMode === "reference" || state.creation.inputMode === "free";
  }
  const modelName = document.querySelector("[data-detail-model-name]");
  if (modelName) {
    const selected = state.creation.modelNames || [];
    modelName.textContent = selected.length > 1 ? `已选 ${selected.length} 位模特` : state.creation.modelName || "已选择模特";
  }
  const productSummary = document.querySelector('[data-detail-material-card="product"] .detail-material-filled strong');
  if (productSummary) productSummary.textContent = `商品图 ${state.creation.productImages?.length || 1} 张`;
  const productPreview = document.querySelector('[data-detail-material-card="product"] [data-detail-material-preview]');
  const productImage = state.creation.productImages?.[0]?.image;
  if (productPreview && productImage) {
    productPreview.src = productImage;
    productPreview.dataset.detailImagePreview = productImage;
  }
  const referencePreview = document.querySelector('[data-detail-material-card="reference"] [data-detail-material-preview]');
  if (referencePreview && singleReplicaState.reference?.image) {
    referencePreview.src = singleReplicaState.reference.image;
    referencePreview.dataset.detailImagePreview = singleReplicaState.reference.image;
  }
}

function syncDetailPageMode() {
  const isSingleReplica = state.creation.inputMode === "reference";
  const isDetailEditing = Boolean(state.creation.detailReplicaEditing);
  const page = document.querySelector(".creation-detail-page");
  page?.classList.toggle("is-single-replica-detail", isSingleReplica);
  page?.classList.toggle("is-detail-editing", isDetailEditing);
  page?.classList.toggle("is-replica-editing", isSingleReplica && isDetailEditing);
  page?.classList.toggle("is-free-detail", !isSingleReplica);

  const pageTitle = document.querySelector("[data-detail-page-title]");
  if (pageTitle) pageTitle.textContent = isSingleReplica ? "单图复刻" : "自由创作";

  const productTitle = document.querySelector('[data-detail-material-title="product"]');
  const referenceTitle = document.querySelector('[data-detail-material-title="reference"]');
  if (productTitle) productTitle.textContent = "商品图";
  if (referenceTitle) referenceTitle.textContent = "参考图";

  const submitTime = document.querySelector("[data-detail-submit-time]");
  if (submitTime) submitTime.textContent = state.creation.submittedAt ? `提交时间 ${state.creation.submittedAt}` : "";

  if (els.detailPrompt) els.detailPrompt.readOnly = !isDetailEditing;
  document.querySelectorAll(".detail-generation-options select").forEach((select) => {
    select.disabled = !isDetailEditing;
  });
}

function syncDetailParamsFromCreation(promptOverride = "") {
  if (!els.detailPrompt) return;
  els.detailPrompt.value = promptOverride || els.creationPrompt.value.trim() || "浅色卧室场景，自然光，文胸模特图，突出商品材质和版型。";
  const detailCost = document.querySelector("[data-detail-cost]");
  if (detailCost) {
    const cost = getCreationCost(getCreationMode());
    detailCost.textContent = cost;
    detailCost.dataset.detailCost = cost;
  }
  if (els.detailRatio) els.detailRatio.value = state.creation.ratio;
  if (els.detailResolution) els.detailResolution.value = state.creation.resolution;
  if (els.detailModel) els.detailModel.value = state.creation.generationModel || "专业版";
  if (els.detailCount) els.detailCount.value = state.creation.imageCount || "1张";
  renderDetailMaterialCards();
  syncDetailPageMode();
}

function getDetailPrompt() {
  return els.detailPrompt?.value.trim() || els.creationPrompt.value.trim() || "按当前参数生成电商商品图。";
}

function detailImageActionsMarkup() {
  return `
    <div class="detail-result-hover-actions">
      <button type="button" data-detail-image-action="下载" title="下载" aria-label="下载"><img src="assets/download-icon.png" alt=""></button>
      <button type="button" data-detail-image-action="扩图" title="扩图" aria-label="扩图"><img src="assets/outpaint-icon.png" alt=""></button>
      <button type="button" data-detail-image-action="编辑文字" title="编辑文字" aria-label="编辑文字"><span class="detail-text-edit-icon" aria-hidden="true">T</span></button>
    </div>
  `;
}

function detailImagesMarkup() {
  const selectedCount = Math.min(4, Math.max(1, parseInt(document.querySelector("[data-detail-count]")?.value, 10) || 1));
  return [
    "assets/product-cover-03.png",
    "assets/product-cover-04.png",
    "assets/product-cover-01.png",
    "assets/product-cover-02.png"
  ].slice(0, selectedCount).map((image) => `
    <figure class="detail-result-item">
      <button class="detail-result-preview" type="button" data-detail-image-preview="${image}" aria-label="全屏预览图片"><img src="${image}" alt=""></button>
      ${detailImageActionsMarkup()}
    </figure>
  `).join("");
}

function formatDetailSubmitTime(date = new Date()) {
  const pad = (value) => String(value).padStart(2, "0");
  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())} ${pad(date.getHours())}:${pad(date.getMinutes())}:${pad(date.getSeconds())}`;
}

function beginDetailRegenerationEdit() {
  state.creation.detailReplicaEditing = true;
  syncDetailPageMode();
  showToast("可修改素材、需求描述和参数后重新提交");
}

function submitDetailRegeneration() {
  if (els.detailRatio) state.creation.ratio = els.detailRatio.value;
  if (els.detailResolution) state.creation.resolution = els.detailResolution.value;
  if (els.detailModel) state.creation.generationModel = els.detailModel.value;
  if (els.detailCount) state.creation.imageCount = els.detailCount.value || "1张";
  if (!state.creation.detailReplicaEditing) {
    beginDetailRegenerationEdit();
    return;
  }
  if (state.creation.inputMode === "reference" && (!state.creation.productUploaded || !state.creation.referenceUploaded)) {
    showToast("请先补齐商品图和参考图");
    return;
  }
  if (els.creationPrompt) els.creationPrompt.value = getDetailPrompt();
  state.creation.detailReplicaEditing = false;
  refreshCreationParamLabels();
  createGenerationRecord();
}

function retryDetailFailedTask(button) {
  const card = button.closest(".detail-task-card");
  if (!card) return;
  const cost = button.dataset.retryCost || "0";
  updateDetailTaskCard(card, "running");
  showToast(`正在重新生成失败图片，将扣除 ${cost} 融豆`);
  window.setTimeout(() => {
    updateDetailTaskCard(card, "done");
    showToast("失败图片已重新生成完成");
  }, 900);
}

function detailFailureMarkup(status, reason = "生成服务暂时不可用，请稍后重新生成。", retryCost = 8) {
  const isPartial = status === "partial";
  return `
    <section class="detail-failure-panel ${isPartial ? "is-partial" : ""}">
      <div class="detail-failure-icon">!</div>
      <div><strong>${isPartial ? "部分图片生成失败" : "本次生成失败"}</strong><p>${reason}</p><small>${isPartial ? "已成功的图片可继续下载、编辑或扩图；仅失败项需要重新生成。" : "请根据失败原因调整素材或参数后重新生成。"}</small></div>
      <button class="detail-failure-retry" type="button" data-detail-retry-failed data-retry-cost="${retryCost}">
      <span>${isPartial ? "重新生成失败项" : "重新生成"}</span><i class="detail-task-regenerate-cost"><b>${retryCost}</b><img src="assets/creation-rongdou-icon.png" alt="融豆"></i>
      </button>
    </section>`;
}

function updateDetailTaskCard(card, status, options = {}) {
  const statusNode = card.querySelector("[data-detail-card-status]");
  const resultNode = card.querySelector("[data-detail-card-result]");
  const map = {
    queued: "排队中",
    running: "生成中",
    done: "已完成",
    partial: "部分完成",
    failed: "全部失败"
  };
  statusNode.className = `record-status ${status}`;
  statusNode.textContent = map[status];
  card.className = `detail-task-card ${status}`;
  card.querySelector(".detail-failure-panel")?.remove();
  card.querySelector(".detail-failure-retry")?.remove();
  if (["partial", "failed"].includes(status)) {
    card.querySelector(".detail-task-card-regenerate:not(.detail-failure-retry)")?.remove();
  }
  if (status === "done") {
    resultNode.className = "detail-result-grid";
    resultNode.innerHTML = detailImagesMarkup();
  } else if (status === "partial") {
    resultNode.className = "detail-result-grid";
    resultNode.innerHTML = detailImagesMarkup();
    resultNode.insertAdjacentHTML("afterend", detailFailureMarkup(status, options.reason, options.retryCost));
  } else if (status === "failed") {
    resultNode.className = "detail-result-grid detail-result-failed";
    resultNode.innerHTML = "";
    resultNode.insertAdjacentHTML("afterend", detailFailureMarkup(status, options.reason, options.retryCost));
  } else {
    resultNode.className = "detail-result-grid pending";
    resultNode.innerHTML = "";
  }
}

function appendDetailTask({ prompt = "", status = "", reason = "", retryCost = 8 } = {}) {
  if (!els.detailTaskList) return null;
  state.creation.detailSeq += 1;
  const mode = getCreationMode() === "待识别" ? "自由生图" : getCreationMode();
  const taskType = mode === "参考图复刻" ? "参考图复刻" : "创意生图";
  const taskTypeClass = mode === "参考图复刻" ? "reference" : "creative";
  const taskTitle = state.creation.template || `${state.creation.category}${mode}`;
  const createdAt = "2026-07-13 14:30";
  const regenerateCost = Math.max(getCreationCost(mode), 4);
  const card = document.createElement("article");
  card.className = "detail-task-card queued";
  card.innerHTML = `
    <div class="detail-task-card-head">
      <div>
        <strong>${taskTitle}</strong>
        <span class="record-status queued" data-detail-card-status>排队中</span>
      </div>
      <span class="detail-task-type ${taskTypeClass}">${taskType}</span>
    </div>
    <div class="detail-task-prompt-row">
      <p data-detail-prompt-text>${prompt || getDetailPrompt()}</p>
      <button class="detail-copy-prompt" type="button" data-copy-detail-prompt aria-label="复制描述" title="复制描述"><img src="assets/detail-copy-icon.png" alt=""></button>
    </div>
    <div class="detail-task-relation"><span>关联：${creationRelationText()} / ${state.creation.ratio} / ${state.creation.resolution} / ${state.creation.imageCount || "1张"}</span><time>创建于 ${createdAt}</time></div>
    <div class="detail-result-grid pending" data-detail-card-result></div>
    <button class="detail-task-regenerate detail-task-card-regenerate" type="button" data-detail-regenerate-all>
      <span>重新编辑</span>
      <i class="detail-task-regenerate-cost"><b>${regenerateCost}</b><img src="assets/creation-rongdou-icon.png" alt="融豆"></i>
    </button>
  `;
  els.detailTaskList.replaceChildren(card);
  if (status) {
    updateDetailTaskCard(card, status, { reason, retryCost });
  } else {
    window.setTimeout(() => updateDetailTaskCard(card, "running"), 500);
    window.setTimeout(() => {
      updateDetailTaskCard(card, "done");
      showToast("生成完成，结果已展示");
    }, 1600);
  }
  return card;
}

function openCreationDetail({ fromHistory = false, taskTitle = "", productName = "", backPage = "creation-plaza" } = {}) {
  const historyPrompt = taskTitle ? `继续处理「${taskTitle}」，关联商品：${productName || "未指定商品"}。` : "浅色卧室场景，自然光，文胸模特图，突出蕾丝杯面和舒适承托。";
  state.detailBackPage = backPage;
  state.creation.detailReplicaEditing = false;
  const backButton = document.querySelector("[data-back-creation]");
  if (backButton) backButton.textContent = "返回";
  syncDetailParamsFromCreation(fromHistory ? historyPrompt : "");
  syncDetailPageMode();
  setWorkspacePage("creation-detail");
  closePrototypeModals();
  if (!fromHistory && !els.detailTaskList.children.length) {
    appendDetailTask({ initial: true });
  }
}

function setModuleCreateType(type) {
  const typeConfig = {
    "image-generation": {
      title: "图生图模块",
      description: "用商品图和提示词，沉淀可复用的视觉效果。"
    },
    "fixed-image": {
      title: "固定图模块",
      description: "固定图片与版式，让素材呈现始终一致。"
    },
    "text-style": {
      title: "文字模块",
      description: "保存品牌文案与排版，快速复用文字表达。"
    }
  };
  const config = typeConfig[type] || typeConfig["image-generation"];
  state.moduleCreateType = typeConfig[type] ? type : "image-generation";
  document.querySelectorAll("[data-module-create-type]").forEach((button) => {
    const selected = button.dataset.moduleCreateType === state.moduleCreateType;
    button.classList.toggle("is-active", selected);
    button.setAttribute("aria-selected", String(selected));
  });
  const title = document.querySelector("[data-module-create-type-title]");
  const description = document.querySelector("[data-module-create-type-description]");
  if (title) title.textContent = config.title;
  if (description) description.textContent = config.description;
}

function moduleTimestamp() {
  return "2026-07-20 16:24";
}

function resetModuleImageWorkspace() {
  moduleImageState.createStep = 1;
  moduleImageState.createEditing = true;
  moduleImageState.activeMaterial = "product";
  moduleImageState.materials = { product: [], model: [], package: [], background: [] };
  moduleImageState.analysisImages = [];
  moduleImageState.analysisMode = "single";
  moduleImageState.scenePromptSource = "ai";
  moduleImageState.analysisResult = null;
  moduleImageState.analysisApplied = { product: false, scene: false };
  moduleImageState.settingsOpen = false;
  moduleImageState.resultTrayOpen = false;
  moduleImageState.sourceAsset = null;
  moduleImageState.productAnalysis = "";
  moduleImageState.productAnalyses = [];
  moduleImageState.tasks = [];
  moduleImageState.selectedTaskId = "";
  moduleImageState.selectedCandidateId = "";
  moduleImageState.expandedTaskId = "";
  moduleImageState.savedModule = null;
  moduleImageState.savedModuleCandidateIds = [];
  moduleImageState.pendingPersonalModuleCandidateId = "";
  document.querySelector("[data-module-product-prompt]").value = "";
  document.querySelector("[data-module-scene-prompt]").value = "";
  document.querySelector("[data-module-analysis-result]").hidden = true;
  setModuleSidebarStep("analysis");
}

function isModuleReuse() {
  return moduleImageState.intent === "generate" && Boolean(moduleImageState.sourceAsset);
}

function getModuleReuseProfile() {
  return moduleReuseProfiles[moduleImageState.sourceAsset?.id] || {
    product: 1,
    model: 0,
    tags: "商品展示 · 通用创作",
    productPrompt: "突出商品主体、材质与核心卖点，保留上传商品的真实细节。",
    scenePrompt: "保持模块参考图的构图节奏、光影与整体氛围。"
  };
}

function getModuleReuseReadiness() {
  const profile = getModuleReuseProfile();
  const productReady = moduleImageState.materials.product.length >= profile.product;
  const modelReady = !profile.model || moduleImageState.materials.model.length >= profile.model;
  return { productReady, modelReady, ready: productReady && modelReady };
}

function getModuleSelectedTask() {
  return moduleImageState.tasks.find((task) => task.id === moduleImageState.selectedTaskId) || null;
}

function getModulePrompt() {
  return [
    document.querySelector("[data-module-product-prompt]")?.value.trim(),
    document.querySelector("[data-module-scene-prompt]")?.value.trim()
  ].filter(Boolean).join("；");
}

function moduleHasMaterial() {
  if (isModuleReuse()) return getModuleReuseReadiness().ready;
  return Object.values(moduleImageState.materials).some((items) => items.length > 0);
}

function getModuleMaterialSnapshot() {
  const creationMaterials = Object.entries(moduleImageState.materials).flatMap(([type, items]) => (
    items.map((item, index) => ({
      type,
      label: moduleMaterialLabels[type] || "素材图",
      index: index + 1,
      url: item.url
    }))
  ));
  const referenceImages = !isModuleReuse()
    ? moduleImageState.analysisImages.map((item, index) => ({ type: "reference", label: "参考图", index: index + 1, url: item.url }))
    : [];
  return [...creationMaterials, ...referenceImages];
}

function getModuleMaterialCount(snapshot = getModuleMaterialSnapshot()) {
  return snapshot.length;
}

function getModuleCreationUploadTotal() {
  return moduleImageState.analysisImages.length + Object.values(moduleImageState.materials).reduce((total, items) => total + items.length, 0);
}

function getModuleTaskPreviewImages(task, limit = 6) {
  const images = task.referenceImages?.length ? task.referenceImages : [];
  return images.slice(0, limit);
}

function renderModuleMaterialPanel() {
  const grid = document.querySelector("[data-module-material-grid]");
  if (!grid) return;
  const staticTitle = document.querySelector("[data-module-material-static-title]");
  if (isModuleReuse()) {
    const profile = getModuleReuseProfile();
    document.querySelector("[data-module-material-section]")?.classList.remove("is-collapsed");
    if (staticTitle) staticTitle.hidden = false;
    const itemMarkup = (type, label, needed, hint) => {
      const items = moduleImageState.materials[type];
      const remaining = Math.max(0, needed - items.length);
      const slots = Array.from({ length: needed }, (_, index) => {
        const item = items[index];
        if (item) return `<span class="module-required-thumb" data-module-material-preview="${type}" data-module-material-index="${index}" role="button" tabindex="0" aria-label="预览${label}第 ${index + 1}张"><img src="${item.url}" alt="${label} ${index + 1}"><b data-module-material-remove="${type}" data-module-material-index="${index}">×</b><i>${index + 1}</i></span>`;
        return `<label class="module-required-slot"><input type="file" accept="image/*" data-module-material-input="${type}"><span>＋</span><small>${index + 1}</small></label>`;
      }).join("");
      return `<section class="module-required-material-card ${remaining ? "is-incomplete" : "is-complete"}"><div class="module-required-card-head"><div><strong>${label}</strong><em>必填</em></div><span>${items.length}/${needed} 张</span></div><p>${hint}</p><div class="module-required-slots">${slots}</div>${remaining ? `<small class="module-required-warning">还需上传 ${remaining} 张${label}</small>` : `<small class="module-required-success">✓ 素材数量已满足</small>`}</section>`;
    };
    grid.innerHTML = itemMarkup("product", "商品图", profile.product, "请按模块中商品的展示顺序上传，AI 将对应替换画面中的商品。") + (profile.model ? itemMarkup("model", "模特图", profile.model, "上传一张清晰的全身或半身模特图，用于保持模块中的人物展示关系。") : "");
    return;
  }
  if (staticTitle) staticTitle.hidden = true;
  const creationTotal = getModuleCreationUploadTotal();
  grid.innerHTML = Object.entries(moduleMaterialLabels).map(([type, label]) => {
    const items = moduleImageState.materials[type];
    const canAdd = items.length < moduleCreationPerTypeLimit && creationTotal < moduleCreationTotalLimit;
    return `
      <section class="module-material-item">
        <div class="module-material-card-head"><strong>${label}</strong><span>${items.length}/${moduleCreationPerTypeLimit} 张</span></div>
        <div class="module-material-card"><div class="module-material-row">
            <label class="module-material-upload ${canAdd ? "" : "is-disabled"}"><input type="file" accept="image/*" multiple data-module-material-input="${type}" ${canAdd ? "" : "disabled"}><i>＋</i><span>${canAdd ? "上传" : "已达上限"}</span></label>
            <div class="module-material-thumbs">${items.map((item, index) => `<span class="module-material-thumb" data-module-material-preview="${type}" data-module-material-index="${index}" role="button" tabindex="0" aria-label="预览${label}第 ${index + 1} 张"><img src="${item.url}" alt="${label}第 ${index + 1} 张"><i>${index + 1}</i><b data-module-material-remove="${type}" data-module-material-index="${index}" aria-label="删除${label}第 ${index + 1} 张">×</b></span>`).join("")}</div>
          </div></div>
      </section>`;
  }).join("");
}

function openModuleMaterialPreview(type, index) {
  const item = moduleImageState.materials[type]?.[Number(index)];
  const modal = document.querySelector("[data-module-image-preview-modal]");
  if (!item || !modal) return;
  const label = moduleMaterialLabels[type] || "素材图";
  modal.querySelector("[data-module-image-preview-image]").src = item.url;
  modal.querySelector("[data-module-image-preview-image]").alt = `${label}第 ${Number(index) + 1} 张预览`;
  modal.querySelector("[data-module-image-preview-title]").textContent = `${label} · 第 ${Number(index) + 1} 张`;
  openPrototypeModal(modal);
}

function renderModuleAnalysisImages() {
  const thumbs = document.querySelector("[data-module-analysis-thumbs]");
  const count = document.querySelector("[data-module-analysis-count]");
  const input = document.querySelector("[data-module-analysis-input]");
  const uploadCopy = document.querySelector("[data-module-analysis-upload-copy]");
  const dropzone = document.querySelector(".module-analysis-dropzone");
  const hasImages = moduleImageState.analysisImages.length > 0;
  if (!thumbs || !count) return;
  if (!hasImages && moduleImageState.scenePromptSource === "ai") {
    moduleImageState.analysisResult = null;
    moduleImageState.analysisApplied = { product: false, scene: false };
    const scenePrompt = document.querySelector("[data-module-scene-prompt]");
    if (scenePrompt) scenePrompt.value = "";
  }
  const totalUploadCount = getModuleCreationUploadTotal();
  const canAddImage = moduleImageState.analysisImages.length < moduleCreationPerTypeLimit && totalUploadCount < moduleCreationTotalLimit;
  if (input) {
    input.multiple = true;
    input.disabled = !canAddImage;
  }
  if (uploadCopy) uploadCopy.textContent = hasImages ? (canAddImage ? "添加参考图" : "已达上传上限") : "上传参考图";
  if (dropzone) {
    dropzone.classList.toggle("has-analysis-images", hasImages);
    dropzone.classList.toggle("is-multi-analysis", hasImages);
    dropzone.classList.toggle("is-upload-limit", !canAddImage);
  }
  thumbs.innerHTML = `${hasImages && canAddImage ? '<span class="module-analysis-upload-tile">＋<small>添加</small></span>' : ""}${moduleImageState.analysisImages.map((item, index) => `<span class="module-analysis-thumb"><img src="${item.url}" alt="参考图 ${index + 1}"><b data-module-analysis-remove="${index}">×</b></span>`).join("")}`;
  count.textContent = hasImages
    ? `已上传 ${moduleImageState.analysisImages.length}/${moduleCreationPerTypeLimit} 张参考图 · 总计 ${totalUploadCount}/${moduleCreationTotalLimit} 张`
    : `最多支持 ${moduleCreationPerTypeLimit} 张`;
}

function getModuleAutoScenePrompt() {
  const referenceCount = moduleImageState.analysisImages.length;
  if (!referenceCount) return "";
  const referenceLead = referenceCount > 1 ? "综合多张参考图的共同视觉特征" : "以参考图的构图与视觉节奏为基础";
  return `${referenceLead}：主体清晰突出，背景保留适度留白与空间层次；采用柔和均匀的自然光或漫射光，突出商品材质与轮廓；整体使用低饱和、协调的色彩，营造干净、舒适且具有电商展示感的画面。`;
}

function ensureModuleAutoScenePrompt() {
  if (moduleImageState.scenePromptSource !== "ai") return false;
  const scene = getModuleAutoScenePrompt();
  if (!scene) return false;
  moduleImageState.analysisResult = { mode: "scene", product: "", scene };
  moduleImageState.analysisApplied.scene = true;
  const scenePrompt = document.querySelector("[data-module-scene-prompt]");
  if (scenePrompt) scenePrompt.value = scene;
  return true;
}

function setModuleScenePromptSource(source) {
  const nextSource = source === "ai" ? "ai" : "manual";
  moduleImageState.scenePromptSource = nextSource;
  if (nextSource === "ai") ensureModuleAutoScenePrompt();
  renderModuleImageWorkspace();
}

function renderModuleScenePromptSource() {
  const isAi = moduleImageState.scenePromptSource === "ai";
  document.querySelectorAll("[data-module-scene-source]").forEach((button) => {
    const selected = button.dataset.moduleSceneSource === moduleImageState.scenePromptSource;
    button.classList.toggle("is-active", selected);
    button.setAttribute("aria-checked", String(selected));
    button.disabled = false;
  });
  document.querySelector("[data-module-manual-scene-field]")?.toggleAttribute("hidden", isAi);
  if (isAi) {
    ensureModuleAutoScenePrompt();
    renderModulePromptDisplays();
  }
}

function renderModuleAnalysisResult() {
  const result = document.querySelector("[data-module-analysis-result]");
  if (!result) return;
  const analysis = moduleImageState.analysisResult;
  result.hidden = !analysis || moduleImageState.scenePromptSource !== "ai";
  if (!analysis) return;
  const sceneCopy = result.querySelector("[data-module-analysis-scene-copy]");
  if (sceneCopy) sceneCopy.textContent = analysis.scene;
}

function addModuleAnalysisToPrompt(type) {
  const analysis = moduleImageState.analysisResult;
  const prompt = document.querySelector(type === "product" ? "[data-module-product-prompt]" : "[data-module-scene-prompt]");
  const text = analysis?.[type]?.trim();
  if (!text || !prompt || moduleImageState.analysisApplied[type]) return;
  prompt.value = text;
  moduleImageState.analysisApplied[type] = true;
  renderModulePromptDisplays();
  renderModuleAnalysisResult();
  showToast("AI 场景描述已写入，可继续编辑");
}

function renderModuleReuseProductAnalysis() {
  const section = document.querySelector("[data-module-product-analysis-section]");
  const submit = document.querySelector("[data-module-product-analysis-submit]");
  const state = document.querySelector("[data-module-product-analysis-state]");
  const result = document.querySelector("[data-module-product-analysis-result]");
  const list = document.querySelector("[data-module-product-analysis-list]");
  if (!section || !submit || !state || !result || !list) return;
  const hasProduct = moduleImageState.materials.product.length > 0;
  section.hidden = !isModuleReuse();
  submit.disabled = !hasProduct;
  submit.querySelector("em").textContent = moduleImageState.materials.product.length || 1;
  state.textContent = "";
  result.hidden = !moduleImageState.productAnalyses.length;
  list.innerHTML = moduleImageState.productAnalyses.map((item, index) => `
    <label class="module-product-analysis-card">
      <span>${item.title}</span>
      <textarea rows="4" data-module-product-analysis-text data-module-product-analysis-index="${index}" aria-label="${item.title}">${item.text}</textarea>
    </label>`).join("");
}

function renderModuleReuseSource() {
  const source = moduleImageState.sourceAsset;
  if (!source) return;
  document.querySelector("[data-module-source-image]")?.setAttribute("src", source.image);
  document.querySelector("[data-module-source-name]").textContent = source.name;
}

function renderModulePromptDisplays() {
  const productPrompt = document.querySelector("[data-module-product-prompt]")?.value.trim();
  const scenePrompt = document.querySelector("[data-module-scene-prompt]")?.value.trim();
  const productDisplay = document.querySelector("[data-module-product-prompt-display]");
  const sceneDisplay = document.querySelector("[data-module-scene-prompt-display]");
  const resultScenePrompt = document.querySelector("[data-module-result-scene-prompt]");
  if (productDisplay) productDisplay.textContent = productPrompt;
  if (sceneDisplay) sceneDisplay.textContent = scenePrompt;
  if (resultScenePrompt && document.activeElement !== resultScenePrompt) resultScenePrompt.value = scenePrompt || "";
}

function renderModuleCreateSidebar() {
  const materialCount = getModuleMaterialCount();
  const productPrompt = document.querySelector("[data-module-product-prompt]")?.value.trim() || "";
  const scenePrompt = document.querySelector("[data-module-scene-prompt]")?.value.trim() || "";
  const ratio = document.querySelector("[data-module-ratio]")?.value || "3:4";
  const resolution = document.querySelector("[data-module-resolution]")?.value || "2K";
  const model = document.querySelector("[data-module-model]")?.value || "专业版";
  const count = document.querySelector("[data-module-count]")?.value || "1张";
  const materialLabel = document.querySelector("[data-module-sidebar-material-count]");
  const promptLabel = document.querySelector("[data-module-sidebar-prompt-status]");
  const settingLabel = document.querySelector("[data-module-sidebar-setting-summary]");
  const settingSummary = document.querySelector("[data-module-setting-summary-copy]");
  const settingContent = document.querySelector("[data-module-setting-content]");
  const settingToggle = document.querySelector("[data-module-setting-toggle]");
  if (materialLabel) materialLabel.textContent = materialCount ? `已添加 ${materialCount} 项素材` : "至少上传 1 项";
  if (promptLabel) promptLabel.textContent = productPrompt || scenePrompt ? "已补充创作描述" : "待补充描述";
  if (settingLabel) settingLabel.textContent = `${ratio} · ${resolution}`;
  if (settingSummary) settingSummary.textContent = `${ratio} · ${resolution} · ${model} · ${count}`;
  if (settingContent) settingContent.hidden = !moduleImageState.settingsOpen;
  if (settingToggle) settingToggle.setAttribute("aria-expanded", String(moduleImageState.settingsOpen));
}

function renderModuleConfirmMaterialSummary() {
  const list = document.querySelector("[data-module-confirm-material-list]");
  if (!list) return;
  const rows = [];
  if (moduleImageState.analysisImages.length) {
    const label = moduleImageState.analysisResult ? "已分析参考图" : "参考图";
    rows.push(`<article class="module-confirm-material-row is-analysis"><div><strong>${label}</strong><span>${moduleImageState.analysisImages.length} 张</span></div><div class="module-confirm-material-thumbs">${moduleImageState.analysisImages.slice(0, 3).map((item, index) => `<span><img src="${item.url}" alt="参考图 ${index + 1}"></span>`).join("")}${moduleImageState.analysisImages.length > 3 ? `<em>+${moduleImageState.analysisImages.length - 3}</em>` : ""}</div></article>`);
  }
  Object.entries(moduleImageState.materials).forEach(([type, items]) => {
    if (!items.length) return;
    const label = moduleMaterialLabels[type] || "素材图";
    rows.push(`<article class="module-confirm-material-row"><div><strong>${label}</strong><span>${items.length} 张</span></div><div class="module-confirm-material-thumbs">${items.slice(0, 3).map((item, index) => `<span><img src="${item.url}" alt="${label} ${index + 1}"></span>`).join("")}${items.length > 3 ? `<em>+${items.length - 3}</em>` : ""}</div></article>`);
  });
  list.innerHTML = rows.length ? rows.join("") : '<div class="module-confirm-material-empty">暂无已上传素材，请返回第 1 步补充。</div>';
}

function setModuleCreateStep(step) {
  if (moduleImageState.intent !== "create") return;
  const nextStep = Number(step) === 2 ? 2 : 1;
  if (nextStep === 2 && !moduleHasMaterial()) {
    showToast("请至少上传一项创作素材后再继续");
    return;
  }
  moduleImageState.createStep = nextStep;
  if (nextStep === 2 && !getModuleSelectedTask()) moduleImageState.createEditing = true;
  renderModuleImageWorkspace();
}

function setModuleSidebarStep(step, { scroll = false } = {}) {
  const sectionMap = {
    analysis: "[data-module-reverse-section]",
    material: "[data-module-material-section]",
    prompt: ".module-product-description-section",
    setting: ".module-setting-section"
  };
  document.querySelectorAll("[data-module-sidebar-step]").forEach((item) => {
    item.classList.toggle("is-active", item.dataset.moduleSidebarStep === step);
  });
  if (scroll) document.querySelector(sectionMap[step])?.scrollIntoView({ behavior: "smooth", block: "start" });
}

function renderModuleAssetWorkspace() {
  const empty = document.querySelector("[data-module-asset-empty]");
  const zone = document.querySelector("[data-module-candidate-zone]");
  const grid = document.querySelector("[data-module-candidate-grid]");
  const stateBadge = document.querySelector("[data-module-asset-state]");
  const subtitle = document.querySelector("[data-module-asset-subtitle]");
  const submitTime = document.querySelector("[data-module-submit-time]");
  const editButton = document.querySelector("[data-module-create-edit]");
  const task = getModuleSelectedTask();

  if (!task) {
    empty.hidden = false;
    zone.hidden = true;
    stateBadge.textContent = isModuleReuse() ? "" : "未生成";
    stateBadge.className = "module-asset-state";
    subtitle.textContent = isModuleReuse() ? "" : "点击左侧生成图片后，在这里查看本次生成结果。";
    if (submitTime) {
      submitTime.hidden = true;
      submitTime.textContent = "";
    }
    if (editButton) editButton.hidden = true;
    if (isModuleReuse() && moduleImageState.sourceAsset) {
      empty.innerHTML = `<div class="module-asset-empty-icon">✦</div><h3>暂无生成结果</h3><p>点击左侧生成图片后，将在这里展示生成结果。</p>`;
    } else {
      empty.innerHTML = `<div class="module-asset-empty-icon">✦</div><h3>等待生成图片</h3><p>确认左侧创作要求与生成参数后，点击生成图片即可在这里查看结果。</p>`;
    }
  } else {
    empty.hidden = true;
    zone.hidden = false;
    const statusLabelMap = { running: "生成中", done: "已完成", failed: "生成失败" };
    const statusClassMap = { running: "is-running", done: "is-complete", failed: "is-failed" };
    stateBadge.textContent = isModuleReuse() ? "" : (statusLabelMap[task.status] || "已完成");
    stateBadge.className = `module-asset-state ${statusClassMap[task.status] || "is-complete"}`;
    subtitle.textContent = task.status === "running"
      ? "任务已提交，正在生成预览图。"
      : task.status === "failed"
        ? "任务生成失败，可返回创作记录查看失败原因或重新发起生成。"
        : "";
    if (submitTime) {
      submitTime.hidden = false;
      submitTime.textContent = `提交时间 ${task.createdAt}`;
    }
    if (editButton) editButton.hidden = moduleImageState.intent !== "create" || moduleImageState.createStep !== 2 || task.status === "running";
    const canUseResult = task.status === "done";
    grid.classList.toggle("is-multi", task.candidates.length > 1);
    if (!task.candidates.length && task.status === "failed") {
      grid.classList.remove("is-multi");
      grid.innerHTML = '<div class="module-task-failed-empty">生成失败，暂无可用结果</div>';
      return;
    }
    grid.innerHTML = task.candidates.map((candidate, index) => {
      const addedToModule = task.moduleAddedCandidates?.includes(candidate.id) || moduleImageState.savedModuleCandidateIds.includes(candidate.id);
      const showPersonalModuleAction = moduleImageState.intent === "create" && moduleImageState.createStep === 2;
      return `
      <article class="module-candidate-card module-preview-card ${candidate.id === moduleImageState.selectedCandidateId ? "is-selected" : ""} ${addedToModule ? "is-added-to-module" : ""}">
        <button class="module-candidate-preview" type="button" data-module-candidate="${candidate.id}" aria-label="预览生成图 ${index + 1}">
          <img src="${candidate.image}" alt="生成预览图 ${index + 1}"><b>✓</b>
        </button>
        ${showPersonalModuleAction ? `<button class="module-candidate-save" type="button" data-module-candidate-action="personal-module" data-module-candidate-id="${candidate.id}" ${(!canUseResult || addedToModule) ? "disabled" : ""}>${addedToModule ? "已加入个人模块" : "加入个人模块"}</button>` : ""}
        <div class="module-result-actions module-candidate-hover-actions" aria-label="生成图 ${index + 1} 操作">
          <button type="button" data-module-candidate-action="outpaint" data-module-candidate-id="${candidate.id}" title="智能扩图" aria-label="智能扩图第 ${index + 1} 张" ${canUseResult ? "" : "disabled"}>智能扩图</button>
          <button type="button" data-module-candidate-action="text" data-module-candidate-id="${candidate.id}" title="文案编辑" aria-label="文案编辑第 ${index + 1} 张" ${canUseResult ? "" : "disabled"}>文案编辑</button>
          <button class="is-primary" type="button" data-module-candidate-action="download" data-module-candidate-id="${candidate.id}" title="下载" aria-label="下载第 ${index + 1} 张" ${canUseResult ? "" : "disabled"}>下载</button>
        </div>
      </article>`;
    }).join("");
  }
}

function setModuleResultTray() {
  renderModuleAssetWorkspace();
}

function renderModuleTaskList() {
  const list = document.querySelector("[data-module-task-list]");
  const count = document.querySelector("[data-module-task-count]");
  if (!list || !count) return;
  count.textContent = moduleImageState.tasks.length;
  if (!moduleImageState.tasks.length) {
    list.innerHTML = '<div class="module-task-empty">暂未产生任务记录<br>提交创作后将在这里保留每次结果。</div>';
    return;
  }
  list.innerHTML = moduleImageState.tasks.map((task) => {
    const active = task.id === moduleImageState.selectedTaskId;
    const referenceExpanded = task.id === moduleImageState.expandedTaskId;
    const references = getModuleTaskPreviewImages(task);
    const results = task.candidates || [];
    const statusText = task.status === "done" ? "已完成" : task.status === "failed" ? "失败" : "生成中";
    const statusClass = task.status === "done" ? "done" : task.status === "failed" ? "failed" : "";
    return `
    <article class="module-task-item ${active ? "is-active" : ""} ${referenceExpanded ? "is-reference-expanded" : ""}" data-module-task-select="${task.id}">
      <div class="module-task-summary" role="button" tabindex="0" data-module-task-summary="${task.id}" aria-expanded="${referenceExpanded}">
        <div class="module-task-item-head"><h3>${task.recordId ? `任务ID：${task.recordId}` : task.title}</h3><span class="module-task-status ${statusClass}">${statusText}</span></div>
        <dl class="module-task-meta-list">
          <div><dt>描述文案</dt><dd class="module-task-prompt"><span>${task.prompt}</span><button type="button" data-module-task-copy="${task.id}" aria-label="复制描述文案">复制</button></dd></div>
          <div><dt>参考素材</dt><dd>${task.materialCount || 0} 张</dd></div>
          <div><dt>提交时间</dt><dd>${task.createdAt}</dd></div>
        </dl>
      </div>
      <div class="module-task-detail">
        <div class="module-task-reference-row">
          <button type="button" data-module-task-reference-toggle="${task.id}" aria-expanded="${referenceExpanded}">参考图（${references.length}）<i>${referenceExpanded ? "收起" : "展开"}</i></button>
          <div ${referenceExpanded ? "" : "hidden"}>${references.length ? references.map((item) => `<button class="module-task-image-preview" type="button" data-module-task-image-preview="${item.url}" data-module-task-image-alt="${item.label} ${item.index}" aria-label="放大预览${item.label} ${item.index}"><img src="${item.url}" alt="${item.label} ${item.index}"></button>`).join("") : "<em>未上传参考图</em>"}</div>
        </div>
        <div class="module-task-result-row">
          <span>生成结果</span>
          <div class="module-task-result-grid">${results.length ? results.slice(0, 4).map((result, index) => `
            <figure class="module-task-result-card">
              <button class="module-task-image-preview" type="button" data-module-task-image-preview="${result.image}" data-module-task-image-alt="生成结果 ${index + 1}" aria-label="放大预览生成结果 ${index + 1}"><img src="${result.image}" alt="生成结果 ${index + 1}"></button>
              <div class="module-result-actions" aria-label="生成结果 ${index + 1} 操作">
                <button type="button" data-module-candidate-action="outpaint" data-module-candidate-id="${result.id}" title="智能扩图" aria-label="智能扩图第 ${index + 1} 张">智能扩图</button>
                <button type="button" data-module-candidate-action="text" data-module-candidate-id="${result.id}" title="文案编辑" aria-label="文案编辑第 ${index + 1} 张">文案编辑</button>
                <button class="is-primary" type="button" data-module-candidate-action="download" data-module-candidate-id="${result.id}" title="下载" aria-label="下载第 ${index + 1} 张">下载</button>
              </div>
            </figure>`).join("") : "<em>等待生成</em>"}</div>
        </div>
      </div>
    </article>`;
  }).join("");
}

function renderModuleImageWorkspace() {
  const isGenerate = moduleImageState.intent === "generate";
  const reuse = isModuleReuse();
  const title = document.querySelector("[data-module-image-title]");
  const subtitle = document.querySelector("[data-module-image-subtitle]");
  const page = document.querySelector("[data-module-image-page]");
  const flowSteps = document.querySelector("[data-module-image-flow-steps]");
  const createSteps = document.querySelector("[data-module-create-flow-steps]");
  const createFooter = document.querySelector("[data-module-create-flow-footer]");
  const isCreateStepTwo = !isGenerate && moduleImageState.createStep === 2;
  const activeTask = getModuleSelectedTask();
  const hasCreateResult = isCreateStepTwo && Boolean(activeTask);
  // 创建模块与“模块生图”复用同一工作台节点；用显式工作流标识隔离两套布局样式。
  if (page) page.dataset.moduleWorkflow = isGenerate ? "reuse" : "create";
  page?.classList.toggle("is-module-reuse", reuse);
  page?.classList.toggle("is-module-create-flow", !isGenerate);
  page?.classList.toggle("is-module-create-step-two", isCreateStepTwo);
  page?.classList.toggle("is-module-create-has-result", hasCreateResult);
  if (flowSteps) flowSteps.hidden = !(isGenerate && ["module-flow", "creation-records"].includes(moduleImageState.backPage));
  if (createSteps) createSteps.hidden = isGenerate;
  if (createFooter) createFooter.hidden = isGenerate || isCreateStepTwo;
  const createStepButtons = document.querySelectorAll("[data-module-create-step]");
  const isSingleCreateStep = createStepButtons.length === 1;
  createStepButtons.forEach((button) => {
    const step = Number(button.dataset.moduleCreateStep);
    const active = isSingleCreateStep || step === moduleImageState.createStep;
    button.classList.toggle("is-active", active);
    button.classList.toggle("is-complete", !isSingleCreateStep && step < moduleImageState.createStep);
    button.setAttribute("aria-current", active ? "step" : "false");
  });
  const previous = document.querySelector("[data-module-create-previous]");
  const next = document.querySelector("[data-module-create-next]");
  const flowStatus = document.querySelector("[data-module-create-flow-status]");
  if (previous) previous.hidden = moduleImageState.createStep === 1;
  if (next) next.hidden = moduleImageState.createStep === 2;
  if (flowStatus) flowStatus.textContent = "请至少上传 1 张创作素材后继续";
  if (title) title.textContent = isGenerate ? "模板生图" : "创建图生图模板";
  if (subtitle) subtitle.textContent = reuse ? `已选模块：${moduleImageState.sourceAsset.name} · 请按解析结果补齐素材` : "草稿已自动保存";
  const assetHeading = document.querySelector("[data-module-asset-heading]");
  if (assetHeading) assetHeading.textContent = reuse ? "生成结果" : "生成图片";
  document.querySelector("[data-module-reverse-section]")?.toggleAttribute("hidden", reuse);
  const generateButton = document.querySelector("[data-module-generate]");
  const generateLabel = generateButton?.querySelector("span");
  const isCreateGenerating = isCreateStepTwo && activeTask?.status === "running";
  const isCreateLocked = isCreateStepTwo && Boolean(activeTask) && !moduleImageState.createEditing;
  if (generateLabel) generateLabel.textContent = !isGenerate && isCreateStepTwo ? (isCreateGenerating ? "图片生成中" : "创作图片") : "生成图片";
  if (generateButton) {
    const readiness = getModuleReuseReadiness();
    generateButton.disabled = !isGenerate && isCreateStepTwo ? (isCreateGenerating || isCreateLocked) : reuse && !readiness.ready;
    generateButton.title = !isGenerate && isCreateStepTwo && isCreateLocked ? "请点击重新编辑后再创作图片" : reuse && !readiness.ready ? "请先补齐模块要求的素材" : "";
  }
  const createFieldsLocked = !isGenerate && isCreateStepTwo && (isCreateGenerating || isCreateLocked);
  document.querySelectorAll("[data-module-product-prompt], [data-module-result-scene-prompt], [data-module-ratio], [data-module-resolution], [data-module-model], [data-module-count]").forEach((field) => {
    field.disabled = createFieldsLocked;
  });
  renderModuleReuseSource();
  renderModulePromptDisplays();
  renderModuleMaterialPanel();
  renderModuleAnalysisImages();
  renderModuleScenePromptSource();
  renderModuleAnalysisResult();
  renderModuleConfirmMaterialSummary();
  renderModuleReuseProductAnalysis();
  renderModuleAssetWorkspace();
  renderModuleTaskList();
}

function setModuleTaskDrawer(open) {
  const panel = document.querySelector("[data-module-task-drawer-panel]");
  const mask = document.querySelector("[data-module-task-mask]");
  const trigger = document.querySelector("[data-module-task-drawer]");
  panel?.classList.toggle("is-open", open);
  mask?.classList.toggle("is-open", open);
  panel?.setAttribute("aria-hidden", String(!open));
  trigger?.setAttribute("aria-expanded", String(open));
}

function openModuleImageWorkspace({ taskId = "", backPage = "creation-plaza", fresh = false, intent = "create" } = {}) {
  if (fresh) resetModuleImageWorkspace();
  moduleImageState.intent = intent;
  moduleImageState.backPage = backPage;
  if (taskId) {
    const task = moduleImageState.tasks.find((item) => item.id === taskId);
    moduleImageState.selectedTaskId = taskId;
    moduleImageState.selectedCandidateId = task?.candidates[0]?.id || "";
  }
  setWorkspacePage("module-image-create");
  closePrototypeModals();
  setModuleTaskDrawer(false);
  renderModuleImageWorkspace();
}

function leaveModuleImageWorkspace() {
  setModuleTaskDrawer(false);
  if (moduleImageState.backPage === "creation-records") {
    openCreationRecordsPage();
    return;
  }
  if (moduleImageState.backPage === "module-library") {
    openModuleLibrary();
    return;
  }
  if (moduleImageState.backPage === "module-flow") {
    openModuleGenerationFlow({ resume: true });
    return;
  }
  setWorkspacePage("creation-plaza");
  clearMenuActive();
  document.querySelector('[data-single-menu="创作中心"]')?.classList.add("active");
}

function appendModuleImageTaskToRecords(task) {
  if (!els.creationTaskFlow) return;
  const card = document.createElement("article");
  card.className = "creation-task-card";
  card.dataset.creationTaskCard = "";
  card.dataset.moduleImageTask = task.id;
  card.dataset.status = "running";
  card.dataset.type = "新建图生图模块";
  card.dataset.title = task.title;
  card.dataset.product = "图生图模块";
  const references = getModuleTaskPreviewImages(task, 4);
  const result = task.candidates[0];
  card.innerHTML = `
    <div class="creation-task-thumb single"><img src="${result.image}" alt=""><span class="creation-task-type">模块</span></div>
    <div class="creation-task-main">
      <div class="creation-task-title-row"><h2>${task.title}</h2><span class="creation-task-status running">生成中</span></div>
      <div class="creation-task-meta"><span>描述文案：${task.prompt}</span><span>参考素材 ${task.materialCount} 张</span><span>提交时间 ${task.createdAt}</span></div>
      <div class="creation-task-tags"><span>图生图模块</span><span>${task.materialSummary || "未上传素材"}</span><span>${task.ratio}</span></div>
      <section class="module-monitor-asset">
        <div class="module-monitor-reference"><span>参考图</span><div>${references.length ? references.map((item) => `<img src="${item.url}" alt="${item.label} ${item.index}">`).join("") : "<em>未上传参考图</em>"}</div></div>
        <div class="module-monitor-result"><span>生成结果</span><img src="${result.image}" alt="生成结果"></div>
      </section>
      <div class="creation-task-progress"><span>任务正在后台生成，可在创作记录继续查看</span><div class="creation-task-progress-line"><i style="width: 54%;"></i></div></div>
    </div>
    <div class="creation-task-action"><button class="btn ghost" type="button" data-module-task-regenerate="${task.id}">重新编辑</button><button class="btn ghost" type="button" data-module-task-add-module="${task.id}">加入个人模块</button><button class="btn primary" type="button" data-module-task-add-text="${task.id}">继续添加文字创作</button><button class="btn ghost" type="button" data-open-module-image-task="${task.id}">查看详情</button></div>`;
  els.creationTaskFlow.prepend(card);
  els.creationTaskCards = Array.from(document.querySelectorAll("[data-creation-task-card]"));
  window.setTimeout(() => {
    if (!card.isConnected) return;
    card.dataset.status = "done";
    card.querySelector(".creation-task-status")?.classList.replace("running", "done");
    const badge = card.querySelector(".creation-task-status");
    if (badge) badge.textContent = "已完成";
    const meta = card.querySelector(".creation-task-meta");
    if (meta) meta.innerHTML = `<span>描述文案：${task.prompt}</span><span>参考素材 ${task.materialCount} 张</span><span>提交时间 ${task.createdAt}</span>`;
    card.querySelector(".creation-task-progress")?.remove();
  }, 1200);
}

function ensureModuleCreationPrompts() {
  if (isModuleReuse()) return;
  const productPrompt = document.querySelector("[data-module-product-prompt]");
  const scenePrompt = document.querySelector("[data-module-scene-prompt]");
  if (moduleImageState.scenePromptSource === "ai") ensureModuleAutoScenePrompt();
  if (productPrompt && !productPrompt.value.trim()) {
    const primaryType = Object.keys(moduleMaterialLabels).find((type) => moduleImageState.materials[type]?.length) || "reference";
    const primaryLabel = primaryType === "reference" ? "参考图" : moduleMaterialLabels[primaryType];
    productPrompt.value = primaryType === "product"
      ? "已自动解析上传产品图：保留商品主体、真实颜色、材质纹理、版型轮廓与关键细节，突出核心卖点并避免改变商品结构。"
      : `已自动识别上传${primaryLabel}：保留主体特征、真实颜色、材质纹理与关键细节，使其在生成画面中自然清晰地呈现。`;
  }
  if (scenePrompt && !scenePrompt.value.trim() && moduleImageState.analysisResult?.scene) scenePrompt.value = moduleImageState.analysisResult.scene;
  renderModulePromptDisplays();
}

function generateModuleImageTask() {
  if (moduleImageState.intent === "create" && moduleImageState.createStep === 2 && getModuleSelectedTask() && !moduleImageState.createEditing) return;
  ensureModuleCreationPrompts();
  const prompt = getModulePrompt();
  if (!moduleHasMaterial()) {
    const profile = getModuleReuseProfile();
    const readiness = getModuleReuseReadiness();
    showToast(isModuleReuse() ? (!readiness.productReady ? `商品图数量不足，请上传 ${profile.product} 张商品图` : "请上传所需模特图") : "请至少上传一类创作素材");
    return;
  }
  const count = Math.min(4, Math.max(1, parseInt(document.querySelector("[data-module-count]")?.value, 10) || 1));
  const candidateImages = ["assets/creation-cover-608.jpg", "assets/creation-cover-610.jpg", "assets/creation-cover-616.jpg", "assets/creation-cover-606.jpg"];
  const candidates = Array.from({ length: count }, (_, index) => ({ id: `module-candidate-${Date.now()}-${index}`, image: candidateImages[index] || candidateImages[0] }));
  const materialParts = Object.entries(moduleImageState.materials).filter(([, items]) => items.length).map(([type, items]) => `${moduleMaterialLabels[type]} ${items.length} 张`);
  if (!isModuleReuse() && moduleImageState.analysisImages.length) materialParts.push(`参考图 ${moduleImageState.analysisImages.length} 张`);
  const materialSnapshot = getModuleMaterialSnapshot();
  const task = {
    id: `module-task-${++moduleImageState.taskSeq}`,
    recordId: 19501 + moduleImageState.tasks.length,
    title: isModuleReuse() ? `${moduleImageState.sourceAsset.name} · ${moduleImageState.tasks.length ? "重新生成" : "创作"}` : (moduleImageState.tasks.length ? "图生图模块重新生成" : "图生图模块创作"),
    status: "running",
    prompt,
    materialSummary: materialParts.join(" / "),
    materialCount: getModuleMaterialCount(materialSnapshot),
    referenceImages: materialSnapshot,
    ratio: document.querySelector("[data-module-ratio]")?.value || "3:4",
    count: `${count}张`,
    createdAt: moduleTimestamp(),
    candidates
  };
  moduleImageState.tasks.unshift(task);
  if (moduleImageState.intent === "create" && moduleImageState.createStep === 2) moduleImageState.createEditing = false;
  moduleImageState.selectedTaskId = task.id;
  moduleImageState.selectedCandidateId = "";
  moduleImageState.expandedTaskId = "";
  appendModuleImageTaskToRecords(task);
  renderModuleImageWorkspace();
  window.setTimeout(() => {
    task.status = "done";
    moduleImageState.selectedCandidateId = task.candidates[0]?.id || "";
    renderModuleImageWorkspace();
    showToast("图生图模块候选资产已生成");
  }, 1200);
}

function runModulePromptAnalysis() {
  setModuleScenePromptSource("ai");
}

function runModuleProductAnalysis() {
  if (!moduleImageState.materials.product.length) return;
  const profile = getModuleReuseProfile();
  const count = moduleImageState.materials.product.length;
  moduleImageState.productAnalyses = moduleImageState.materials.product.map((item, index) => ({
    title: `图${index + 1}文案`,
    text: `图${index + 1}：该产品图主体清晰，需保留真实颜色、材质纹理、边缘轮廓与关键细节；生成时对应替换参考模块中的第 ${index + 1} 个商品展示位，重点突出商品版型、亲肤质感和核心卖点。`
  }));
  moduleImageState.productAnalysis = moduleImageState.productAnalyses.map((item) => item.text).join("\n");
  renderModuleReuseProductAnalysis();
  showToast(`已解析 ${count} 张商品图，可确认替换产品描述`);
}

function appendProductAnalysisToPrompt() {
  const prompt = document.querySelector("[data-module-product-prompt]");
  const text = moduleImageState.productAnalyses.map((item) => item.text.trim()).filter(Boolean).join("\n");
  if (!text || !prompt) return;
  prompt.value = text;
  renderModulePromptDisplays();
  showToast("已用解析结果替换产品描述");
}

function copyModuleProductAnalysis() {
  const text = moduleImageState.productAnalyses.map((item) => item.text.trim()).filter(Boolean).join("\n");
  if (!text) return;
  navigator.clipboard?.writeText(text).catch(() => {});
  showToast("商品解析文案已复制");
}

function addModuleImageAsset() {
  const task = getModuleSelectedTask();
  const candidate = task?.candidates.find((item) => item.id === moduleImageState.selectedCandidateId);
  if (!candidate) {
    showToast("请先选择一张生成图片");
    return;
  }
  if (isModuleReuse()) {
    showToast("已选择图片，可下载或继续添加文字");
    return;
  }
  openModulePersonalInfoModal(candidate.id);
}

function getDefaultPersonalModuleName() {
  return `模块创作-${String(Date.now()).slice(-5)}`;
}

function getModulePersonalInfoModal() {
  return document.querySelector("[data-module-personal-info-modal]");
}

function updateModulePersonalDescriptionCount() {
  const description = document.querySelector("[data-module-personal-description]");
  const count = document.querySelector("[data-module-personal-description-count]");
  if (count) count.textContent = String(description?.value.length || 0);
}

function openModulePersonalInfoModal(candidateId = "") {
  if (moduleImageState.intent !== "create" || moduleImageState.createStep !== 2) {
    showToast("模块生图结果可下载或继续编辑，不加入个人模块");
    return;
  }
  const selected = getModuleCandidateSelection(candidateId);
  if (!selected) {
    showToast("请先选择一张已生成的图片");
    return;
  }
  const { task, candidate } = selected;
  if (task.moduleAddedCandidates?.includes(candidate.id) || moduleImageState.savedModuleCandidateIds.includes(candidate.id)) {
    showToast("该图片已加入个人模块");
    return;
  }
  const modal = getModulePersonalInfoModal();
  if (!modal) return;
  moduleImageState.pendingPersonalModuleCandidateId = candidate.id;
  const name = modal.querySelector("[data-module-personal-name]");
  const category = modal.querySelector("[data-module-personal-category]");
  const description = modal.querySelector("[data-module-personal-description]");
  if (name) name.value = getDefaultPersonalModuleName();
  if (category) category.value = "服装";
  if (description) description.value = "";
  updateModulePersonalDescriptionCount();
  openPrototypeModal(modal);
  name?.focus();
}

function confirmModulePersonalInfo() {
  const modal = getModulePersonalInfoModal();
  if (!modal) return;
  const name = modal.querySelector("[data-module-personal-name]")?.value.trim() || "";
  const category = modal.querySelector("[data-module-personal-category]")?.value.trim() || "";
  const description = modal.querySelector("[data-module-personal-description]")?.value.trim() || "";
  if (!name) {
    showToast("请填写模块名称");
    modal.querySelector("[data-module-personal-name]")?.focus();
    return;
  }
  if (!category) {
    showToast("请选择类目");
    modal.querySelector("[data-module-personal-category]")?.focus();
    return;
  }
  addModuleCandidateToPersonalLibrary(moduleImageState.pendingPersonalModuleCandidateId, { name, category, description });
  moduleImageState.pendingPersonalModuleCandidateId = "";
  closePrototypeModal(modal);
}

function addModuleCandidateToPersonalLibrary(candidateId = "", meta = {}) {
  const selected = getModuleCandidateSelection(candidateId);
  if (!selected) {
    showToast("请先选择一张已生成的图片");
    return;
  }
  if (moduleImageState.intent !== "create") {
    showToast("模块生图结果可下载或继续编辑，不加入个人模块");
    return;
  }
  const { task, candidate } = selected;
  if (task.moduleAddedCandidates?.includes(candidate.id) || moduleImageState.savedModuleCandidateIds.includes(candidate.id)) {
    showToast("该图片已加入个人模块");
    return;
  }
  const candidateIndex = task.candidates.findIndex((item) => item.id === candidate.id) + 1;
  const assetId = `module-image-created-${Date.now()}-${candidateIndex || 1}`;
  const productPrompt = document.querySelector("[data-module-product-prompt]")?.value.trim() || "";
  const scenePrompt = document.querySelector("[data-module-scene-prompt]")?.value.trim() || "";
  const moduleName = meta.name?.trim() || getDefaultPersonalModuleName();
  const moduleCategory = meta.category?.trim() || "服装";
  const moduleDescription = meta.description?.trim() || productPrompt || scenePrompt || "由图生图模块生成并手动加入个人模块。";
  const groupedMaterials = Object.entries((task.referenceImages || []).reduce((acc, item) => {
    if (!acc[item.type]) acc[item.type] = [];
    acc[item.type].push(item.url);
    return acc;
  }, {})).map(([type, images]) => ({ type, images }));
  moduleLibraryAssets.unshift({
    id: assetId,
    type: "image",
    name: moduleName,
    category: moduleCategory,
    source: "自己创作",
    status: "可使用",
    image: candidate.image,
    description: moduleDescription,
    updatedAt: "刚刚",
    sourceTaskId: task.id,
    sourceCandidateId: candidate.id
  });
  moduleReuseProfiles[assetId] = {
    productPrompt: productPrompt || "突出商品主体、材质与核心卖点，保留上传商品的真实细节。",
    scenePrompt: scenePrompt || "保持生成结果的构图节奏、光影与整体氛围。"
  };
  if (groupedMaterials.length) moduleEditMaterialProfiles[assetId] = groupedMaterials;
  task.moduleAddedCandidates = Array.from(new Set([...(task.moduleAddedCandidates || []), candidate.id]));
  moduleImageState.savedModuleCandidateIds = Array.from(new Set([...moduleImageState.savedModuleCandidateIds, candidate.id]));
  moduleImageState.savedModule = { name: moduleName, image: candidate.image, taskId: task.id, assetId };
  filterModuleLibrary();
  renderModuleTaskList();
  renderModuleAssetWorkspace();
  showToast("已加入个人模块");
}

function getSelectedModuleCandidate() {
  const task = getModuleSelectedTask();
  const candidate = task?.candidates.find((item) => item.id === moduleImageState.selectedCandidateId);
  return candidate && task?.status === "done" ? { task, candidate } : null;
}

function getModuleCandidateSelection(candidateId = "") {
  if (candidateId) {
    const task = moduleImageState.tasks.find((item) => item.status === "done" && item.candidates?.some((candidate) => candidate.id === candidateId));
    const candidate = task?.candidates.find((item) => item.id === candidateId);
    return candidate && task ? { task, candidate } : null;
  }
  const task = getModuleSelectedTask();
  const candidate = task?.candidates.find((item) => item.id === moduleImageState.selectedCandidateId);
  return candidate && task?.status === "done" ? { task, candidate } : null;
}

function addSelectedModuleResultToBoutique(candidateId = "") {
  const selected = getModuleCandidateSelection(candidateId);
  if (!selected) {
    showToast("请先选择一张已生成的图片");
    return;
  }
  const { task, candidate } = selected;
  const sourceTaskCard = Array.from(document.querySelectorAll("[data-creation-task-card]"))
    .find((card) => card.dataset.moduleImageTask === task.id);
  const material = {
    id: `boutique-module-${Date.now()}-${materialLibrary.length + 1}`,
    name: task.title,
    type: "精品图片",
    assetType: "模块生图",
    taskType: "模块生图",
    sourceTaskKey: ensureBoutiqueTaskKey(sourceTaskCard),
    category: "图生图模块",
    relatedProduct: "模块生图结果",
    source: "模块生图",
    status: "已入库",
    usage: 0,
    updatedAt: "刚刚",
    image: candidate.image,
    tone: "image",
    spec: "精品图片 / 可作为参考素材",
    scene: "模块生图、自由创作、参考图复刻",
    description: "来自模块生图的已确认结果，可作为参考素材带入下一次创作。",
    records: [task.title],
    tags: ["精品图", "模块生图"]
  };
  materialLibrary.unshift(material);
  task.boutiqueAddedCandidates = Array.from(new Set([...(task.boutiqueAddedCandidates || []), candidate.id]));
  task.boutiqueAdded = task.boutiqueAddedCandidates.length >= task.candidates.length;
  renderModuleAssetWorkspace();
  showToast("已添加到精品库");
}

function downloadSelectedModuleResult(candidateId = "") {
  const selected = getModuleCandidateSelection(candidateId);
  if (!selected) {
    showToast("请先选择一张已生成的图片");
    return;
  }
  const link = document.createElement("a");
  link.href = selected.candidate.image;
  const candidateIndex = selected.task.candidates.findIndex((item) => item.id === selected.candidate.id) + 1;
  link.download = `${selected.task.title || "模块生图结果"}-${candidateIndex || 1}.jpg`;
  document.body.append(link);
  link.click();
  link.remove();
  showToast("已下载到本地");
}

function selectModuleTask(taskId) {
  const task = moduleImageState.tasks.find((item) => item.id === taskId);
  if (!task) return null;
  moduleImageState.selectedTaskId = task.id;
  moduleImageState.selectedCandidateId = task.candidates[0]?.id || "";
  renderModuleAssetWorkspace();
  renderModuleTaskList();
  return task;
}

function continueModuleTaskToText(taskId) {
  const task = selectModuleTask(taskId);
  if (!task || task.status !== "done" || !task.candidates.length) {
    showToast("请等待图片生成完成后再进行文案编辑");
    return;
  }
  openGeneratedImageTextEditor(task.candidates[0].image, {
    backPage: "module-image",
    name: task.title || "模块生图结果"
  });
}

function renderStaticModuleWorkspace() {
  const isText = moduleStaticState.mode === "text";
  const title = document.querySelector("[data-module-static-title]");
  const type = document.querySelector("[data-module-static-type]");
  const previewTitle = document.querySelector("[data-static-preview-title]");
  const previewCopy = document.querySelector("[data-static-preview-copy]");
  const stateBadge = document.querySelector("[data-static-preview-state]");
  const saveLabel = document.querySelector("[data-static-save-label]");
  document.querySelectorAll("[data-static-fixed-panel]").forEach((panel) => { panel.hidden = isText; });
  document.querySelectorAll("[data-static-text-panel]").forEach((panel) => { panel.hidden = !isText; });
  document.querySelector("[data-static-fixed-preview]").hidden = isText;
  document.querySelector("[data-static-text-preview]").hidden = !isText;
  title.textContent = isText ? "创建文字模块" : "创建固定图模块";
  if (type) type.textContent = isText ? "文字模块" : "固定图模块";
  previewTitle.textContent = isText ? "文字效果预览" : "固定图预览";
  previewCopy.textContent = isText ? "设置文字内容、样式和排版后，保存为可复用模块。" : "上传图片后可预览最终固定图资产。";
  saveLabel.textContent = isText ? "保存文字模块" : "保存固定图模块";
  if (stateBadge) {
    stateBadge.textContent = moduleStaticState.saved ? "已保存" : isText ? "编辑中" : moduleStaticState.fixedImage ? "待保存" : "待配置";
    stateBadge.className = `module-asset-state ${moduleStaticState.saved ? "is-complete" : ""}`;
  }

  const uploadEmpty = document.querySelector(".static-image-upload-empty");
  const uploadFilled = document.querySelector(".static-image-upload-filled");
  const uploadThumb = document.querySelector("[data-static-upload-thumb]");
  const previewEmpty = document.querySelector("[data-static-fixed-empty]");
  const previewImage = document.querySelector("[data-static-fixed-preview-image]");
  uploadEmpty.hidden = Boolean(moduleStaticState.fixedImage);
  uploadFilled.hidden = !moduleStaticState.fixedImage;
  previewEmpty.hidden = Boolean(moduleStaticState.fixedImage);
  previewImage.hidden = !moduleStaticState.fixedImage;
  if (moduleStaticState.fixedImage) {
    uploadThumb.src = moduleStaticState.fixedImage;
    previewImage.src = moduleStaticState.fixedImage;
  }

  const moduleNameInput = document.querySelector("[data-static-module-name]");
  const categorySelect = document.querySelector("[data-static-module-category]");
  if (moduleNameInput) moduleNameInput.value = moduleStaticState.moduleName;
  if (categorySelect) categorySelect.value = moduleStaticState.category;

  const textArea = document.querySelector("[data-static-text-content]");
  const canvas = document.querySelector("[data-static-text-canvas]");
  const render = document.querySelector("[data-static-text-render]");
  if (textArea) textArea.value = moduleStaticState.text.content;
  if (render) {
    render.textContent = moduleStaticState.text.content;
    render.style.fontFamily = moduleStaticState.text.font;
    render.style.fontWeight = moduleStaticState.text.weight;
    render.style.fontSize = `${moduleStaticState.text.size}px`;
    render.style.color = moduleStaticState.text.color;
    render.style.textAlign = moduleStaticState.text.align;
    render.style.alignSelf = moduleStaticState.text.align === "left" ? "flex-start" : moduleStaticState.text.align === "right" ? "flex-end" : "center";
  }
  canvas?.style.setProperty("justify-content", moduleStaticState.text.align === "left" ? "flex-start" : moduleStaticState.text.align === "right" ? "flex-end" : "center");
  document.querySelector("[data-static-font]").value = moduleStaticState.text.font;
  document.querySelector("[data-static-weight]").value = moduleStaticState.text.weight;
  document.querySelectorAll("[data-static-size-value]").forEach((button) => button.classList.toggle("is-active", button.dataset.staticSizeValue === moduleStaticState.text.size));
  document.querySelectorAll("[data-static-color-value]").forEach((button) => button.classList.toggle("is-active", button.dataset.staticColorValue === moduleStaticState.text.color));
  document.querySelectorAll("[data-static-align-value]").forEach((button) => button.classList.toggle("is-active", button.dataset.staticAlignValue === moduleStaticState.text.align));
}

function openStaticModuleWorkspace(mode, { backPage = "creation-plaza" } = {}) {
  moduleStaticState.mode = mode;
  moduleStaticState.backPage = backPage;
  moduleStaticState.saved = null;
  moduleStaticState.fixedImage = "";
  moduleStaticState.moduleName = "";
  moduleStaticState.category = "";
  const modal = ensureStaticModuleModal();
  if (!modal) return;
  els.body.classList.remove("is-module-static-create");
  closePrototypeModals();
  renderStaticModuleWorkspace();
  openPrototypeModal(modal);
}

function ensureStaticModuleModal() {
  let modal = document.querySelector("[data-static-module-modal]");
  if (modal) return modal;

  const staticPage = document.querySelector("[data-module-static-page]");
  if (!staticPage) return null;

  modal = document.createElement("div");
  modal.className = "prototype-modal module-static-modal";
  modal.dataset.staticModuleModal = "";
  modal.setAttribute("aria-hidden", "true");
  modal.innerHTML = `
    <div class="prototype-modal-panel module-static-modal-panel" role="dialog" aria-modal="true" aria-label="创建固定图模块">
      <button class="prototype-close module-static-modal-close" type="button" data-modal-close aria-label="关闭"></button>
    </div>`;
  modal.querySelector(".module-static-modal-panel")?.appendChild(staticPage);
  document.body.appendChild(modal);
  return modal;
}

function leaveStaticModuleWorkspace() {
  if (moduleStaticState.backPage === "creation-records") {
    openCreationRecordsPage();
    return;
  }
  if (moduleStaticState.backPage === "module-library") {
    openModuleLibrary();
    return;
  }
  setWorkspacePage("creation-plaza");
  clearMenuActive();
  document.querySelector('[data-single-menu="创作中心"]')?.classList.add("active");
}

function saveStaticModuleAsset() {
  const isText = moduleStaticState.mode === "text";
  if (!isText && !moduleStaticState.fixedImage) {
    showToast("请先上传一张固定图片");
    return;
  }
  if (isText && !moduleStaticState.text.content.trim()) {
    showToast("请先填写示例文字");
    return;
  }
  let name = moduleStaticState.moduleName.trim();
  let category = moduleStaticState.category;
  if (!isText && !name) {
    showToast("请输入模块名称");
    return;
  }
  if (!isText && !category) {
    showToast("请选择类目");
    return;
  }
  name ||= "未命名文字模块";
  category ||= "未分类";
  moduleStaticState.saved = { name, category, mode: moduleStaticState.mode };
  closePrototypeModal(document.querySelector("[data-static-module-modal]"));
  showToast(`${isText ? "文字模块" : "固定图模块"}已保存`);
}

function leaveCreationDetail() {
  if (state.detailBackPage === "creation-records") {
    openCreationRecordsPage();
    return;
  }
  setWorkspacePage("creation-plaza");
  clearMenuActive();
  document.querySelector('[data-single-menu="创作中心"]')?.classList.add("active");
}

function clearDetailParams() {
  if (els.detailPrompt) els.detailPrompt.value = "";
  ["product", "reference", "model"].forEach((key) => {
    state.creation[`${key}Uploaded`] = false;
  });
  state.creation.modelName = "";
  state.creation.modelNames = [];
  renderDetailMaterialCards();
}

function openPrototypeModal(modal) {
  closeCreationModelMenu();
  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");
}

function ensureTemplateBuilderModal() {
  let modal = document.querySelector("[data-template-builder-modal]");
  if (modal) return modal;

  const builderPage = document.querySelector(".template-builder-page");
  if (!builderPage) return null;

  modal = document.createElement("div");
  modal.className = "prototype-modal template-builder-modal";
  modal.dataset.templateBuilderModal = "";
  modal.setAttribute("aria-hidden", "true");
  modal.innerHTML = `
    <div class="prototype-modal-panel template-builder-modal-panel" role="dialog" aria-modal="true" aria-label="模块模板编辑">
      <button class="prototype-close template-builder-modal-close" type="button" data-modal-close aria-label="关闭"></button>
    </div>`;
  modal.querySelector(".template-builder-modal-panel")?.appendChild(builderPage);
  document.body.appendChild(modal);
  return modal;
}

function openTemplateBuilderModal() {
  const modal = ensureTemplateBuilderModal();
  if (modal) openPrototypeModal(modal);
}

function closeCreationModelMenu() {
  els.generationModelMenu?.classList.remove("is-open");
  els.generationModelMenu?.setAttribute("aria-hidden", "true");
  els.generationModelTrigger?.setAttribute("aria-expanded", "false");
}

function closePrototypeModals() {
  closeCreationModelMenu();
  document.querySelectorAll(".prototype-modal").forEach((modal) => {
    closePrototypeModal(modal);
  });
}

function closePrototypeModal(modal) {
  if (!modal) return;
  modal.classList.remove("is-open");
  modal.setAttribute("aria-hidden", "true");
}

function getTemplate(templateId) {
  return templates.find((item) => item.id === templateId);
}

function isMultiModuleFixed(module) {
  return module.purpose === "固定插入" || module.source === "文字素材";
}

function getMultiModuleRequiredCount(module) {
  return isMultiModuleFixed(module) ? 0 : (module.requiredProductCount || 1);
}

function getMultiModuleStatus(module) {
  if (!module.enabled) return { key: "closed", text: "已关闭" };
  if (isMultiModuleFixed(module)) return { key: "fixed", text: "固定图片" };
  const missing = Math.max(getMultiModuleRequiredCount(module) - module.productImages.length, 0);
  if (missing > 0) return { key: "missing", text: missing === 1 ? "缺商品图" : `缺 ${missing} 张商品图` };
  if (module.requiresModel && !module.modelImages.length) return { key: "missing", text: "缺模特图" };
  if (module.generated) return { key: "done", text: "已生成" };
  return { key: "ready", text: "已就绪" };
}

function getEnabledMultiModules() {
  return state.multiCreate.modules.filter((module) => module.enabled);
}

function getGenerativeMultiModules() {
  return getEnabledMultiModules().filter((module) => !isMultiModuleFixed(module));
}

function getMissingMultiModules() {
  return getEnabledMultiModules().filter((module) => getMultiModuleStatus(module).key === "missing");
}

function inferTemplateItemRatio(item) {
  if (item.ratio) return item.ratio;
  if (item.originalRatio) return item.originalRatio;
  if (item.purpose === "固定插入" || item.source === "文字素材") return "原图比例";
  if (item.group === "SKU图") return "1:1";
  if (item.group === "主图") return "3:4";
  if (item.group === "详情图") return "3:4";
  return "3:4";
}

function getMultiModuleRatioValue(module) {
  return module.templateRatio || "原图比例";
}

function getMultiModuleRatioLabel(module) {
  const ratio = getMultiModuleRatioValue(module);
  return ratio === "原图比例" ? ratio : `原始比例 ${ratio}`;
}

function formatMultiElapsed(seconds) {
  const mins = String(Math.floor(seconds / 60)).padStart(2, "0");
  const secs = String(seconds % 60).padStart(2, "0");
  return `<b>${mins}</b><i>:</i><b>${secs}</b>`;
}

function renderMultiTimer() {
  if (els.multiTaskTimer) els.multiTaskTimer.innerHTML = formatMultiElapsed(state.multiCreate.elapsed);
}

function startMultiTimer(reset = false) {
  if (reset) state.multiCreate.elapsed = 0;
  window.clearInterval(state.multiCreate.timer);
  renderMultiTimer();
  state.multiCreate.timer = window.setInterval(() => {
    state.multiCreate.elapsed += 1;
    renderMultiTimer();
  }, 1000);
}

function setMultiStep(step) {
  state.multiCreate.step = step;
  if (step !== "result") state.multiCreate.previewDrawerOpen = false;
  if (els.multiPage) els.multiPage.dataset.multiStep = step;
  const stepOrder = ["upload", "choose", "config", "result"];
  const currentIndex = stepOrder.indexOf(step);
  els.multiStepButtons.forEach((button) => {
    const buttonIndex = stepOrder.indexOf(button.dataset.multiStepButton);
    button.classList.toggle("is-active", buttonIndex === currentIndex);
    button.classList.toggle("is-complete", buttonIndex >= 0 && buttonIndex < currentIndex);
  });
  renderMultiImageCreation();
}

function parseMultiGenerateCount(module = null) {
  const count = Number.parseInt(module?.generationCount || state.multiCreate.count, 10);
  return Number.isFinite(count) ? Math.max(1, Math.min(count, 4)) : 2;
}

function getMultiCandidateImage(module, index) {
  const images = [
    module.productImages[0]?.image,
    module.image,
    "assets/creation-cover-610.jpg",
    "assets/creation-cover-616.jpg",
    "assets/product-cover-02.png",
    "assets/product-cover-04.png"
  ].filter(Boolean);
  return images[index % images.length];
}

function getModuleResultStatus(module) {
  if (!module.enabled) return { key: "closed", text: "已关闭" };
  if (isMultiModuleFixed(module)) return { key: "fixed", text: "固定图片" };
  if (module.generationStatus === "failed") return { key: "failed", text: "失败" };
  if (module.generationStatus === "done") return { key: "done", text: "已完成" };
  if (module.generationStatus === "running") return { key: "running", text: "生成中" };
  return { key: "queued", text: "排队中" };
}

function buildMultiCreateModule(item, index) {
  const templateRatio = inferTemplateItemRatio(item);
  const title = item.title || `${item.group}模块 ${index + 1}`;
  const requiresModel = /模特|上身|穿搭/.test(`${title} ${item.purpose || ""}`);
  const requiredProductCount = /SKU|组合|多色|对比/.test(`${title} ${item.group || ""}`) ? 2 : 1;
  return {
    id: item.id || `multi-${index}`,
    title,
    group: item.group || "详情图",
    purpose: item.purpose || "参考生成",
    source: item.source || "模板",
    image: item.image,
    referenceImage: item.image,
    useReferenceImage: true,
    enabled: isTemplateItemEnabled(item),
    templateRatio,
    generationCount: "2 张",
    generationResolution: "2K",
    generationModel: "专业版",
    textMode: isMultiModuleFixed(item) ? "跟随模板文案" : "生成后编辑",
    generationStatus: "draft",
    candidates: [],
    selectedCandidateId: "",
    productImages: [],
    modelImages: [],
    requiredProductCount,
    requiresModel,
    productDescription: "保留商品真实颜色、材质和关键结构细节。",
    sceneDescription: item.purpose || "按模板示例的构图与场景节奏生成。",
    generated: false,
    resultImage: ""
  };
}

function setupMultiImageCreationWithTemplate(template, backPage = "template-center", mode = "template", sourceProduct = null) {
  if (!template) return;

  state.multiCreate.mode = mode;
  state.multiCreate.templateId = template.id || "";
  state.multiCreate.resourceTemplate = template.fromResource || mode === "solution" ? template : null;
  state.multiCreate.backPage = backPage;
  state.multiCreate.detailReturnPage = "";
  state.multiCreate.step = "config";
  state.multiCreate.taskId = "";
  state.multiCreate.taskStatus = "draft";
  state.multiCreate.selectedModuleId = "";
  state.multiCreate.resultStage = "unified";
  state.multiCreate.previewDrawerOpen = false;
  state.multiCreate.compositionItems = [];
  state.multiCreate.compositionExcludedModuleIds = [];
  state.multiCreate.sourceProduct = sourceProduct;
  state.multiCreate.generated = false;
  state.multiCreate.replica = {
    productImages: [],
    referenceImages: mode === "replica" ? template.items.map((item) => ({ image: item.image, title: item.title })) : [],
    prompt: "",
    preserve: ["构图", "光影", "页面顺序"]
  };
  state.multiCreate.modules = template.items.map((item, index) => buildMultiCreateModule(item, index));
  if (sourceProduct) {
    const sourceImages = sourceProduct.images?.length
      ? sourceProduct.images
      : Array.from({ length: Math.min(sourceProduct.materialCount || 1, 3) }, (_, index) => ({ image: sourceProduct.image, title: `${sourceProduct.name || "商品图"} ${index + 1}` }));
    const productImages = sourceImages.map((image, index) => ({
      image: image.image || image.url || sourceProduct.image,
      title: image.title || image.name || `${sourceProduct.name || "商品图"} ${index + 1}`
    })).filter((image) => image.image);
    state.multiCreate.modules.forEach((module) => {
      if (!isMultiModuleFixed(module)) module.productImages = productImages.slice(0, getMultiModuleRequiredCount(module));
    });
  }
  const firstEnabled = state.multiCreate.modules.find((module) => module.enabled) || state.multiCreate.modules[0];
  state.multiCreate.selectedModuleId = firstEnabled?.id || "";
  startMultiTimer(true);

  clearMenuActive();
  document.querySelector('[data-single-menu="创作中心"]')?.classList.add("active");
  setWorkspacePage("multi-image-creation");
  renderMultiImageCreation();
  closeDrawer();
  closePrototypeModals();
}

function setupMultiImageCreation(templateId, backPage = "template-center") {
  const template = getTemplate(templateId);
  setupMultiImageCreationWithTemplate(template, backPage);
}

function isSuiteReplicaMode() {
  return state.multiCreate.mode === "replica";
}

function buildSuiteReplicaTemplate() {
  return {
    id: "suite-replica-reference",
    name: "轻盈裸感内衣参考套图",
    description: "整套参考图共享同一套复刻提示词。",
    category: "内衣",
    brand: "参考套图",
    groups: ["参考页"],
    items: [
      { id: "replica-1", title: "自然光视觉页", group: "参考页", purpose: "参考复刻", source: "参考套图", image: "assets/product-cover-03.png" },
      { id: "replica-2", title: "蕾丝材质页", group: "参考页", purpose: "参考复刻", source: "参考套图", image: "assets/creation-cover-608.jpg" },
      { id: "replica-3", title: "舒适承托页", group: "参考页", purpose: "参考复刻", source: "参考套图", image: "assets/creation-cover-610.jpg" },
      { id: "replica-4", title: "细节展示页", group: "参考页", purpose: "参考复刻", source: "参考套图", image: "assets/creation-cover-606.jpg" }
    ]
  };
}

function setupSuiteReplicaCreation() {
  setupMultiImageCreationWithTemplate(buildSuiteReplicaTemplate(), "creation-plaza", "replica");
  showToast("已进入套图复刻：整套图片将使用同一套复刻要求");
}

const suiteReplicaTemplateOptions = [
  {
    id: "classic-innerwear",
    name: "轻盈裸感内衣套图",
    category: "经典画册风",
    description: "奶油白底、柔和自然光，突出面料与承托细节。",
    cover: "assets/creation-cover-608.jpg",
    pages: [
      { id: "page-01", title: "自然光视觉页", image: "assets/product-cover-03.png" },
      { id: "page-02", title: "轻薄贴合页", image: "assets/creation-cover-608.jpg" },
      { id: "page-03", title: "蕾丝材质页", image: "assets/creation-cover-610.jpg" },
      { id: "page-04", title: "颜色陈列页", image: "assets/creation-cover-606.jpg", fixed: true }
    ]
  },
  {
    id: "blue-studio",
    name: "蓝调棚拍商品套图",
    category: "官方模板",
    description: "干净棚拍背景，适合商品质感、结构与信息层级呈现。",
    cover: "assets/creation-cover-602.jpg",
    pages: [
      { id: "page-01", title: "蓝调棚拍页", image: "assets/creation-cover-602.jpg" },
      { id: "page-02", title: "核心信息页", image: "assets/creation-cover-616.jpg" },
      { id: "page-03", title: "材质近景页", image: "assets/creation-cover-606.jpg" },
      { id: "page-04", title: "组合陈列页", image: "assets/product-cover-04.png", fixed: true }
    ]
  },
  {
    id: "summer-sale",
    name: "夏日上新营销套图",
    category: "我的模板",
    description: "轻快色彩与大字信息层级，适合新品营销与活动页。",
    cover: "assets/creation-cover-616.jpg",
    pages: [
      { id: "page-01", title: "上新活动页", image: "assets/creation-cover-616.jpg" },
      { id: "page-02", title: "场景氛围页", image: "assets/product-cover-04.png" },
      { id: "page-03", title: "产品质感页", image: "assets/creation-cover-608.jpg" },
      { id: "page-04", title: "选择引导页", image: "assets/product-cover-02.png", fixed: true }
    ]
  },
  {
    id: "minimal-white",
    name: "极简白底质感套图",
    category: "精选模板",
    description: "留白充足、信息克制，适合干净高级的商品表达。",
    cover: "assets/product-cover-02.png",
    pages: [
      { id: "page-01", title: "白底视觉页", image: "assets/product-cover-02.png" },
      { id: "page-02", title: "面料纹理页", image: "assets/creation-cover-606.jpg" },
      { id: "page-03", title: "穿搭场景页", image: "assets/creation-cover-608.jpg" },
      { id: "page-04", title: "信息收束页", image: "assets/creation-cover-610.jpg", fixed: true }
    ]
  },
  {
    id: "warm-lifestyle",
    name: "暖调生活方式套图",
    category: "官方模板",
    description: "温暖居家光线与柔和构图，适合舒适感商品。",
    cover: "assets/product-cover-04.png",
    pages: [
      { id: "page-01", title: "居家氛围页", image: "assets/product-cover-04.png" },
      { id: "page-02", title: "柔光展示页", image: "assets/creation-cover-610.jpg" },
      { id: "page-03", title: "触感说明页", image: "assets/creation-cover-608.jpg" },
      { id: "page-04", title: "组合推荐页", image: "assets/creation-cover-616.jpg", fixed: true }
    ]
  },
  {
    id: "bold-campaign",
    name: "强视觉活动套图",
    category: "我的模板",
    description: "高对比色块与清晰信息区，适合活动投放和上新专题。",
    cover: "assets/creation-cover-610.jpg",
    pages: [
      { id: "page-01", title: "活动视觉页", image: "assets/creation-cover-610.jpg" },
      { id: "page-02", title: "重点卖点页", image: "assets/creation-cover-616.jpg" },
      { id: "page-03", title: "商品聚焦页", image: "assets/product-cover-03.png" },
      { id: "page-04", title: "转化引导页", image: "assets/creation-cover-602.jpg", fixed: true }
    ]
  }
];

function openSuiteReplicaEditor(backPage = "creation-plaza", options = {}) {
  const editor = state.suiteReplicaEditor;
  const canvasViewport = document.querySelector("[data-suite-canvas-viewport]");
  canvasViewport?.querySelector(".native-record-outcome")?.remove();
  canvasViewport?.classList.remove("has-native-record-outcome");
  editor.backPage = backPage;
  editor.step = options.step || (options.product ? "generate" : "product");
  editor.product = options.product || null;
  const selectedTemplate = options.template || suiteReplicaTemplateOptions.find((item) => item.id === options.templateId);
  editor.template = selectedTemplate ? { ...selectedTemplate, pages: selectedTemplate.pages.map((page) => ({ ...page })) } : null;
  editor.templateEntry = Boolean(options.templateEntry);
  editor.templateStartEntry = Boolean(options.templateStartEntry);
  editor.templateWorkflowStage = editor.templateEntry ? "prepare" : "confirm";
  editor.generationConfiguredAtStart = Boolean(options.generationConfiguredAtStart);
  editor.templateProductAnalysis = null;
  editor.templateProductPrompt = "";
  editor.templateScenePrompt = "";
  editor.templateReferenceDescriptionOpen = false;
  editor.templateModuleStates = {};
  editor.templateModel = options.templateModel || "专业版";
  editor.templateCount = options.templateCount || "1张";
  editor.resolution = options.resolution || "2K";
  editor.ratio = options.ratio || "3:4";
  editor.referenceSource = options.referenceSource || "upload";
  editor.referenceMode = options.referenceMode || "multi";
  editor.referenceLink = options.link || "";
  editor.referenceTextMode = options.referenceTextMode === "parsed" ? "parsed" : "original";
  editor.hideCopyEditor = Boolean(options.hideCopyEditor);
  editor.autoGenerationNotice = Boolean(options.autoGenerationNotice);
  editor.isGenerating = false;
  editor.generated = false;
  editor.generationDirty = false;
  editor.generatedPages = [];
  editor.generatedByPage = {};
  editor.regeneratedByPage = {};
  editor.textEditedByPage = {};
  editor.localExportImages = [];
  editor.templateDeletePageId = "";
  editor.selectedReferencePageId = "";
  editor.regeneratePanelOpen = false;
  editor.regeneratePrompt = "";
  editor.exportDrawerOpen = false;
  editor.exportSelectionIds = [];
  editor.exportLibraryAdded = false;
  editor.copyByPage = {};
  editor.originalCopyByPage = {};
  editor.clearedCopyByPage = {};
  editor.templateModuleStates = {};
  editor.copyLayoutApplied = true;
  editor.settingsCollapsed = false;
  editor.scale = 1;
  editor.x = 0;
  editor.y = 0;
  if (options.autoReference && editor.product) ensureSuiteReferenceTemplate(editor);
  if (editor.template) {
    syncSuiteCopyState(editor);
    if (editor.referenceTextMode === "parsed") applySuiteParsedReferenceCopy(editor);
  }
  clearMenuActive();
  document.querySelector('[data-single-menu="创作中心"]')?.classList.add("active");
  setWorkspacePage("suite-replica-editor");
  renderSuiteReplicaEditor();
}

function openMultiResultCanvasEditor() {
  const compositionItems = (state.multiCreate.compositionItems || []).filter((item) => item.image);
  if (!compositionItems.length) {
    showToast("请先选择至少一张图片");
    return;
  }
  state.brandEditor.addedImages = compositionItems.map((item, index) => ({
    id: `multi-result-brand-image-${index + 1}-${item.id}`,
    name: item.title || `已选图片 ${index + 1}`,
    url: item.image
  }));
  openBrandMaterialEditor("brand-material-library", { returnToMultiResult: true });
  showToast("已带入画布编辑");
}

function returnSuiteReplicaToCreationCenter() {
  const editor = getSuiteEditor();
  editor.regeneratePanelOpen = false;
  editor.exportDrawerOpen = false;
  closePrototypeModals();
  setWorkspacePage("creation-plaza");
  clearMenuActive();
  document.querySelector('[data-single-menu="创作中心"]')?.classList.add("active");
}

function returnSuiteReplicaToCreationRecords() {
  const editor = getSuiteEditor();
  editor.regeneratePanelOpen = false;
  editor.exportDrawerOpen = false;
  closePrototypeModals();
  openCreationRecordsPage();
}

function hasSuitePendingGeneration(editor = getSuiteEditor()) {
  return getSuiteCanvasPages(editor).some((page) => page?.status === "loading");
}

function openSuiteReturnConfirmModal() {
  const modal = document.querySelector("[data-suite-return-modal]");
  if (!modal) {
    showToast("图片仍在生成中，可稍后在创作记录中查看创作详情");
    returnSuiteReplicaToCreationCenter();
    return;
  }
  openPrototypeModal(modal);
}

function handleSuiteReplicaBack() {
  if (hasSuitePendingGeneration()) {
    openSuiteReturnConfirmModal();
    return;
  }
  returnSuiteReplicaToCreationCenter();
}

function isSuiteReplicaEditorActive() {
  return document.body.classList.contains("is-suite-replica-editor") && Boolean(document.querySelector("[data-suite-replica-editor]"));
}

function getSuiteEditor() {
  return state.suiteReplicaEditor;
}

function getSuitePageOriginalCopy(page, index) {
  const title = page?.title || `参考图 ${index + 1}`;
  const copyMap = {
    "搭配推荐": "轻盈裸感\n自在贴合",
    "核心卖点": "柔软支撑\n透气不闷",
    "服装平铺图": "细节一目了然\n版型清晰可见",
    "面料展示": "亲肤面料\n细腻透气",
    "场景模特图": "自然舒适\n轻松出行"
  };
  return copyMap[title] || `${title}\n参考图卖点文案 ${index + 1}`;
}

function getSuitePageParsedCopy(page, index) {
  const title = page?.title || `参考图 ${index + 1}`;
  const copyMap = {
    "搭配推荐": "轻盈裸感，自在贴合\n从参考图提取搭配标题与卖点结构，已替换为当前商品的舒适表达。",
    "核心卖点": "柔软支撑，透气不闷\n根据参考图文案层级提取核心卖点，可继续修改为本商品的真实优势。",
    "服装平铺图": "细节一目了然\n保留平铺图中的短标题和说明结构，突出商品版型、颜色与材质。",
    "面料展示": "亲肤面料，细腻透气\n已提取材质说明文案，可按实际面料成分和工艺继续调整。",
    "场景模特图": "自然舒适，轻松出行\n已提取场景标题与氛围描述，可根据商品风格修改文案。"
  };
  return copyMap[title] || `${title}\n已从参考图提取文案结构，可修改标题、卖点与说明后应用到生成图片。`;
}

function applySuiteParsedReferenceCopy(editor = getSuiteEditor()) {
  syncSuiteCopyState(editor);
  (editor.template?.pages || []).forEach((page, index) => {
    editor.copyByPage[page.id] = editor.originalCopyByPage[page.id] || getSuitePageOriginalCopy(page, index);
    editor.clearedCopyByPage[page.id] = false;
  });
  editor.copyLayoutApplied = true;
}

function getSuiteRegeneratedPages(editor = getSuiteEditor()) {
  return Object.values(editor.regeneratedByPage || {}).flat();
}

function getSuiteTextEditedPages(editor = getSuiteEditor()) {
  return Object.values(editor.textEditedByPage || {}).flat();
}

function getSuiteGeneratedPagesByParent(pageId, editor = getSuiteEditor()) {
  if (editor.generatedByPage?.[pageId]) return editor.generatedByPage[pageId];
  return (editor.generatedPages || []).filter((page) => page.parentId === pageId || page.id === `generated-${pageId}`);
}

function getSuiteCanvasPages(editor = getSuiteEditor()) {
  return [
    ...(editor.template?.pages || []),
    ...(Object.keys(editor.generatedByPage || {}).length ? Object.values(editor.generatedByPage).flat() : (editor.generatedPages || [])),
    ...getSuiteRegeneratedPages(editor),
    ...getSuiteTextEditedPages(editor)
  ];
}

function getSuiteCanvasPageById(pageId, editor = getSuiteEditor()) {
  return getSuiteCanvasPages(editor).find((page) => page.id === pageId) || null;
}

function getSuiteExportPageById(pageId, editor = getSuiteEditor()) {
  return getSuiteCanvasPageById(pageId, editor)
    || (editor.localExportImages || []).find((page) => page.id === pageId)
    || null;
}

function getSuiteParentPageId(pageId, editor = getSuiteEditor()) {
  const page = getSuiteCanvasPageById(pageId, editor);
  if (page?.parentId) return page.parentId;
  if (String(pageId || "").startsWith("generated-")) return String(pageId).replace(/^generated-/, "");
  return pageId;
}

function getSuitePageExportTitle(page, editor = getSuiteEditor()) {
  if (!page) return "当前选中图片";
  const parent = page.parentId ? getSuiteCanvasPageById(page.parentId, editor) : null;
  if (page.localExport) return page.title || "本地图片";
  if (page.textEdited) return `${parent?.title || page.title} · 已添加文字`;
  return page.regenerated ? `${parent?.title || page.title} · 重新生成` : page.title;
}

function isSuiteExportablePage(page) {
  return Boolean(page && (page.localExport || page.textEdited || page.regenerated || String(page.id || "").startsWith("generated-")) && page.status !== "loading");
}

function getSuiteExportSelection(editor = getSuiteEditor()) {
  const uniqueIds = Array.from(new Set(editor.exportSelectionIds || []));
  return uniqueIds.map((id) => getSuiteExportPageById(id, editor)).filter(isSuiteExportablePage);
}

function syncSuiteExportReopenButton(editor = getSuiteEditor()) {
  const summary = document.querySelector("[data-suite-export-selection-summary]");
  const count = document.querySelector("[data-suite-export-selection-count]");
  const pages = getSuiteExportSelection(editor);
  const visible = Boolean(editor.generated && pages.length);
  if (summary) summary.hidden = !visible;
  if (count) count.textContent = String(pages.length);
  document.querySelectorAll("[data-suite-export-add-text], [data-suite-export-preview-open], [data-suite-export-download]").forEach((button) => {
    button.hidden = !visible;
    button.disabled = !pages.length;
  });
}

function toggleSuiteExportSelection(pageId, options = {}) {
  const editor = getSuiteEditor();
  const page = getSuiteCanvasPageById(pageId, editor);
  if (!isSuiteExportablePage(page)) return false;
  const current = Array.from(new Set(editor.exportSelectionIds || []));
  const exists = current.includes(pageId);
  if (options.replace) {
    editor.exportSelectionIds = [pageId];
  } else if (exists) {
    editor.exportSelectionIds = current.filter((id) => id !== pageId);
  } else if (!exists) {
    editor.exportSelectionIds = [...current, pageId];
  } else {
    editor.exportSelectionIds = current;
  }
  return true;
}

function syncSuiteCopyState(editor) {
  const pages = editor.template?.pages || [];
  editor.copyByPage = editor.copyByPage || {};
  editor.originalCopyByPage = editor.originalCopyByPage || {};
  editor.clearedCopyByPage = editor.clearedCopyByPage || {};
  pages.forEach((page, index) => {
    if (!editor.originalCopyByPage[page.id]) editor.originalCopyByPage[page.id] = getSuitePageOriginalCopy(page, index);
    if (!Object.prototype.hasOwnProperty.call(editor.copyByPage, page.id)) editor.copyByPage[page.id] = editor.originalCopyByPage[page.id];
  });
  if (!getSuiteCanvasPageById(editor.selectedReferencePageId, editor)) editor.selectedReferencePageId = pages[0]?.id || "";
  if (typeof editor.copyLayoutApplied !== "boolean") editor.copyLayoutApplied = true;
}

function selectSuiteReferencePage(pageId) {
  const editor = getSuiteEditor();
  if (!getSuiteCanvasPageById(pageId, editor)) return;
  editor.selectedReferencePageId = pageId;
  renderSuiteReplicaEditor();
}

function getSuiteCopyLines(value) {
  const lines = String(value || "").split(/\r?\n/).map((line) => line.trim()).filter(Boolean);
  return lines.length ? lines : [""];
}

function updateSuiteCopyLine(input) {
  if (!input?.matches?.("[data-suite-copy-line-input]")) return;
  const editor = getSuiteEditor();
  const pageId = getSuiteParentPageId(editor.selectedReferencePageId, editor);
  if (!pageId) return;
  const lineIndex = Number(input.dataset.suiteCopyLineIndex);
  if (!Number.isInteger(lineIndex) || lineIndex < 0) return;
  const originalLines = getSuiteCopyLines(editor.originalCopyByPage[pageId]);
  const editableLines = getSuiteCopyLines(editor.copyByPage[pageId]);
  const lineCount = Math.max(originalLines.length, editableLines.length, lineIndex + 1);
  const nextLines = Array.from({ length: lineCount }, (_, index) => editableLines[index] ?? originalLines[index] ?? "");
  nextLines[lineIndex] = input.value;
  editor.copyByPage[pageId] = nextLines.join("\n");
  editor.clearedCopyByPage[pageId] = false;
  markSuiteGenerationDirty(editor);
}

function renderSuiteCopyEditor() {
  const editor = getSuiteEditor();
  syncSuiteCopyState(editor);
  const lineList = document.querySelector("[data-suite-copy-line-list]");
  const pageIndicator = document.querySelector("[data-suite-copy-page-indicator]");
  const previousButton = document.querySelector("[data-suite-copy-prev]");
  const nextButton = document.querySelector("[data-suite-copy-next]");
  const description = document.querySelector("[data-suite-copy-description]");
  const pageId = getSuiteParentPageId(editor.selectedReferencePageId, editor);
  const pages = editor.template?.pages || [];
  const pageIndex = Math.max(0, pages.findIndex((page) => page.id === pageId));
  const originalLines = getSuiteCopyLines(editor.originalCopyByPage[pageId]);
  const editableLines = getSuiteCopyLines(editor.copyByPage[pageId]);
  const lineCount = Math.max(originalLines.length, editableLines.length);
  if (pageIndicator) pageIndicator.textContent = `第 ${pageIndex + 1} 张 / 共 ${pages.length} 张`;
  if (previousButton) previousButton.disabled = pageIndex <= 0;
  if (nextButton) nextButton.disabled = !pages.length || pageIndex >= pages.length - 1;
  if (lineList) {
    lineList.innerHTML = Array.from({ length: lineCount }, (_, index) => {
      const original = originalLines[index] || "";
      const editable = editableLines[index] ?? original;
      return `<div class="suite-copy-line-card">
        <div class="suite-copy-original"><span>原文案 ${index + 1}</span><p>${escapeBrandText(original)}</p></div>
        <label class="suite-copy-new"><span>新文案</span><input type="text" value="${escapeBrandText(editable)}" data-suite-copy-line-input data-suite-copy-line-index="${index}" aria-label="第 ${index + 1} 行新文案"></label>
      </div>`;
    }).join("");
  }
  if (description) description.textContent = editor.referenceTextMode === "parsed"
    ? "已识别参考图中的文字内容，请逐行修改生成图片所需的新文案。"
    : "请逐行核对原文案，并填写生成图片所需的新文案。";
}

function getSuiteTemplateActivePage(editor = getSuiteEditor()) {
  const pages = editor.template?.pages || [];
  const pageId = getSuiteParentPageId(editor.selectedReferencePageId, editor);
  return pages.find((page) => page.id === pageId) || pages[0] || null;
}

function isSuiteTemplateFixedPage(page) {
  return Boolean(page?.fixed || /固定图|固定插入|尺码说明/.test(`${page?.title || ""} ${page?.purpose || ""}`));
}

function getSuiteTemplateDisplayRatio(page, editor = getSuiteEditor()) {
  return page?.ratio || page?.originalRatio || page?.generationRatio || editor.ratio || "3:4";
}

function getSuiteTemplateModuleState(editor = getSuiteEditor(), page = getSuiteTemplateActivePage(editor)) {
  if (!editor.templateModuleStates) editor.templateModuleStates = {};
  const key = page?.id || "default";
  if (!editor.templateModuleStates[key]) {
    editor.templateModuleStates[key] = {
      useReference: true,
      analysis: null,
      productPrompt: "",
      scenePrompt: "",
      modelImages: [],
      generationRatio: editor.ratio || "3:4",
      generationResolution: editor.resolution || "2K",
      generationModel: editor.templateModel || "专业版",
      generationCount: editor.templateCount || "1张"
    };
  }
  return editor.templateModuleStates[key];
}

function getSuiteTemplateRequiredProductCount(editor = getSuiteEditor(), page = getSuiteTemplateActivePage(editor)) {
  if (!page || isSuiteTemplateFixedPage(page)) return 0;
  if (editor.template?.sourceModuleId) return 4;
  return /组合|陈列|多色|SKU/.test(page.title || "") ? 2 : 1;
}

function getSuiteTemplateNeedsModel(editor = getSuiteEditor(), page = getSuiteTemplateActivePage(editor)) {
  if (!page || isSuiteTemplateFixedPage(page)) return false;
  const copy = editor.template?.sourceModuleId
    ? `${editor.template?.name || ""} ${editor.template?.description || ""} ${page.title || ""}`
    : `${page.title || ""} ${page.description || ""}`;
  return editor.template?.sourceModuleId === "module-image-003" || /模特|人物|穿着|上身|生活方式|场景/.test(copy);
}

function getSuiteTemplateReferenceDescriptions(editor = getSuiteEditor(), page = getSuiteTemplateActivePage(editor)) {
  const profile = editor.template?.sourceModuleId ? moduleReuseProfiles[editor.template.sourceModuleId] : null;
  const pageLabel = page?.title || editor.template?.name || "当前参考图";
  const detailedScene = editor.template?.sourceModuleId === "module-image-002"
    ? "【背景、光影、色彩、构图、镜头】: 背景为室内家居式产品陈列场景，底部是木质地板或木纹桌面，右侧放置圆形木质托盘，托盘内摆放多件折叠内裤，后方有一本打开或摊放的书本/杂志作为装饰道具，旁边还有浅色纸质物件，整体氛围温柔、精致、生活化，带有日系杂货风和居家陈列感。光线为柔和室内自然光或漫射光，整体明亮均匀，阴影较浅，明暗对比低，光源偏上方或左上方，突出产品与手部的柔软质感。色彩以暖木色、米白色、浅奶油色为主，辅以浅粉、浅灰等低饱和色调，整体色彩柔和温暖，营造干净、亲肤、舒适的视觉情绪。构图采用俯拍近景视角，主体产品占据画面中央和下半部分，双手形成左右对称支撑，背景托盘与书本位于右上方形成层次；画面为竖幅构图，主体突出，周围道具错落分布增强生活感。镜头为近距离拍摄，焦距感接近手机广角或标准镜头，景深较深，主体产品、手部及背景陈列基本清晰。"
    : profile?.scenePrompt || `沿用“${pageLabel}”的构图、光线、背景和视觉风格。`;
  return {
    productPrompt: profile?.referenceProductPrompt || profile?.productPrompt || `参考图“${pageLabel}”中的商品材质、版型和展示方式已由模板预置。`,
    scenePrompt: detailedScene
  };
}

function getSuiteTemplateEntryProductAnalysis(editor = getSuiteEditor(), page = getSuiteTemplateActivePage(editor)) {
  const productImages = getSuiteDetailProductImages(editor);
  const requiredProductCount = getSuiteTemplateRequiredProductCount(editor, page);
  const needsModel = getSuiteTemplateNeedsModel(editor, page);
  const pageLabel = page?.title || editor.template?.name || "当前模块";
  const referenceDescriptions = getSuiteTemplateReferenceDescriptions(editor, page);
  if (editor.template?.sourceModuleId === "module-image-002") {
    return {
      pageId: page?.id || "",
      fixed: isSuiteTemplateFixedPage(page),
      requiredProductCount,
      uploadedProductCount: productImages.length || editor.product?.materialCount || 0,
      needsModel,
      productPrompt: "图1：该产品材质为针织棉面料，底色为米白色，面料表面带有天蓝色与淡黄色相间的横向肌理条纹。腰部采用藏青色弹性松紧带，顶边呈波浪牙边结构。两侧裤腿开孔边缘采用藏青色面料包边固定。前幅正中上部带有小型卡通人物印花图案。各接缝处采用双针平缝与压缝工艺。",
      scenePrompt: referenceDescriptions.scenePrompt
    };
  }
  return {
    pageId: page?.id || "",
    fixed: isSuiteTemplateFixedPage(page),
    requiredProductCount,
    uploadedProductCount: productImages.length || editor.product?.materialCount || 0,
    needsModel,
    productPrompt: `保留商品主体、真实颜色、材质纹理、版型轮廓与关键细节；生成时对应替换“${pageLabel}”中的商品展示位，突出商品卖点并避免改变商品结构。`,
    scenePrompt: referenceDescriptions.scenePrompt
  };
}

function getSuiteTemplateGenerativePages(editor = getSuiteEditor()) {
  return (editor.template?.pages || []).filter((page) => !isSuiteTemplateFixedPage(page));
}

function getSuiteTemplateMaterialIssues(editor = getSuiteEditor()) {
  const productCount = getSuiteDetailProductImages(editor).length || editor.product?.materialCount || 0;
  return getSuiteTemplateGenerativePages(editor).map((page) => {
    const requiredProductCount = getSuiteTemplateRequiredProductCount(editor, page);
    const needsModel = getSuiteTemplateNeedsModel(editor, page);
    const modelCount = getSuiteTemplateModuleState(editor, page).modelImages.length;
    return {
      page,
      missingProducts: Math.max(requiredProductCount - productCount, 0),
      missingModel: needsModel && modelCount < 1
    };
  }).filter((issue) => issue.missingProducts || issue.missingModel);
}

function resetSuiteTemplateStartAnalysis(editor = getSuiteEditor()) {
  if (!editor.templateEntry) return;
  editor.templateWorkflowStage = "prepare";
  getSuiteTemplateGenerativePages(editor).forEach((page) => {
    getSuiteTemplateModuleState(editor, page).analysis = null;
  });
}

function startSuiteTemplateProductAnalysis() {
  const editor = getSuiteEditor();
  const pages = getSuiteTemplateGenerativePages(editor);
  const issues = getSuiteTemplateMaterialIssues(editor);
  if (issues.length) {
    editor.selectedReferencePageId = issues[0].page.id;
    renderSuiteReplicaEditor();
    showToast("请先补齐各模块所需的商品图或模特图");
    return;
  }
  editor.templateWorkflowStage = "analyzing";
  renderSuiteReplicaEditor();
  window.setTimeout(() => {
    if (getSuiteEditor() !== editor || editor.templateWorkflowStage !== "analyzing") return;
    pages.forEach((page) => {
      const moduleState = getSuiteTemplateModuleState(editor, page);
      const analysis = getSuiteTemplateEntryProductAnalysis(editor, page);
      moduleState.analysis = analysis;
      moduleState.productPrompt = analysis.productPrompt;
      moduleState.scenePrompt = analysis.scenePrompt;
    });
    editor.templateWorkflowStage = "confirm";
    renderSuiteReplicaEditor();
    showToast(editor.template?.sourceModuleId ? "商品解析完成，请确认内容后生成图片" : "全部模块解析完成，请确认各页内容后生成套图");
  }, 900);
}

function addSuiteTemplateModelImage() {
  const editor = getSuiteEditor();
  const page = getSuiteTemplateActivePage(editor);
  const moduleState = getSuiteTemplateModuleState(editor, page);
  if (moduleState.modelImages.length >= 1) {
    showToast("当前模块最多上传 1 张模特图");
    return;
  }
  moduleState.modelImages.push({ image: "assets/product-cover-04.png", title: "模特图 1" });
  markSuiteGenerationDirty(editor);
  resetSuiteTemplateStartAnalysis(editor);
  renderSuiteReplicaEditor();
  showToast("已添加模特图");
}

function removeSuiteTemplateModelImage(index) {
  const editor = getSuiteEditor();
  const moduleState = getSuiteTemplateModuleState(editor);
  if (index < 0 || index >= moduleState.modelImages.length) return;
  moduleState.modelImages.splice(index, 1);
  markSuiteGenerationDirty(editor);
  resetSuiteTemplateStartAnalysis(editor);
  renderSuiteReplicaEditor();
  showToast("已删除模特图");
}

function syncSuiteGenerateButtons(editor = getSuiteEditor()) {
  const waitingForTemplateAnalysis = Boolean(editor.templateEntry && editor.templateWorkflowStage !== "confirm");
  const generationComplete = Boolean(editor.generated && !editor.generationDirty && !editor.isGenerating);
  document.querySelectorAll("[data-suite-generate]").forEach((button) => {
    const isGenerating = Boolean(editor.isGenerating);
    const disabled = !editor.product || isGenerating || waitingForTemplateAnalysis || generationComplete;
    button.disabled = disabled;
    button.classList.toggle("is-disabled", disabled);
    button.classList.toggle("is-generating", isGenerating);
    button.classList.toggle("is-complete", generationComplete);
    const label = button.querySelector("span");
    if (label) label.textContent = isGenerating ? "生成中" : generationComplete ? "已生成" : editor.generated ? "重新编辑" : "生成图片";
  });
}

function markSuiteGenerationDirty(editor = getSuiteEditor()) {
  if (!editor.generated && !editor.isGenerating) return;
  editor.generationDirty = true;
  if (!editor.isGenerating) syncSuiteGenerateButtons(editor);
}

function renderSuiteReplicaEditor() {
  const editor = getSuiteEditor();
  if (!editor.step) editor.step = "product";
  const editorRoot = document.querySelector("[data-suite-replica-editor]");
  editorRoot?.setAttribute("data-suite-step", editor.step);
  editorRoot?.toggleAttribute("data-suite-template-entry", Boolean(editor.templateEntry));
  editorRoot?.toggleAttribute("data-suite-template-start-entry", Boolean(editor.templateStartEntry));
  editorRoot?.toggleAttribute("data-suite-settings-collapsed", Boolean(editor.settingsCollapsed));
  const settingsToggle = document.querySelector("[data-suite-settings-toggle]");
  if (settingsToggle) {
    const collapsed = Boolean(editor.settingsCollapsed);
    settingsToggle.setAttribute("aria-expanded", String(!collapsed));
    settingsToggle.setAttribute("aria-label", collapsed ? "展开左侧参数区" : "收起左侧参数区");
  }
  const productSlot = document.querySelector("[data-suite-product-selected]");
  const templateSlot = document.querySelector("[data-suite-template-selected]");
  const workspaceProduct = document.querySelector("[data-suite-workspace-product]");
  const recommendationsSlot = document.querySelector("[data-suite-template-recommendations]");
  const workbenchRecommendationsSlot = document.querySelector("[data-suite-workbench-template-recommendations]");
  const detailProductPreview = document.querySelector("[data-suite-detail-product-preview]");
  const detailReferencePreview = document.querySelector("[data-suite-detail-reference-preview]");
  const templateDetailProductPreview = document.querySelector("[data-suite-template-detail-product-preview]");
  const templateDetailReferencePreview = document.querySelector("[data-suite-template-detail-reference-preview]");
  const standardDetailParams = document.querySelector("[data-suite-standard-detail-params]");
  const standardGenerationSettings = document.querySelector("[data-suite-standard-generation-settings]");
  const copySection = document.querySelector("[data-suite-copy-section]");
  const generationTip = document.querySelector("[data-suite-replica-generation-tip]");
  const templateDetailParams = document.querySelector("[data-suite-template-detail-params]");
  const templateProductAnalysisPanel = document.querySelector("[data-suite-template-product-analysis]");
  const templateProductAnalysisResult = document.querySelector("[data-suite-template-product-analysis-result]");
  const templateProductAnalysisTitle = document.querySelector("[data-suite-template-product-analysis-title]");
  const templateProductAnalysisState = document.querySelector("[data-suite-template-product-analysis-state]");
  const templateProductAnalysisSummary = document.querySelector("[data-suite-template-product-analysis-summary]");
  const templateProductAnalysisButton = document.querySelector("[data-suite-template-product-analysis-submit]");
  const templateGenerationLabel = document.querySelector("[data-suite-template-generation-label]");
  const templateGenerationSettings = document.querySelector("[data-suite-template-generation-settings]");
  const templateProductPrompt = document.querySelector("[data-suite-template-product-prompt]");
  const templateScenePrompt = document.querySelector("[data-suite-template-scene-prompt]");
  const templateResolution = document.querySelector("[data-suite-template-resolution]");
  const templateModel = document.querySelector("[data-suite-template-model]");
  const templateCount = document.querySelector("[data-suite-template-count]");
  const templateGenerateBar = templateDetailParams?.querySelector(".suite-generate-bar");
  const resolutionSelect = document.querySelector("[data-suite-resolution-select]");
  const ratioSelect = document.querySelector("[data-suite-ratio-select]");
  const stepButtons = document.querySelectorAll("[data-suite-step]");
  const stepPanels = document.querySelectorAll("[data-suite-step-panel]");
  const generateButtons = document.querySelectorAll("[data-suite-generate]");
  const resolutionOptions = document.querySelectorAll("[data-suite-resolution]");
  const stepEnabled = {
    product: true,
    template: Boolean(editor.product),
    generate: Boolean(editor.product)
  };
  if (standardDetailParams) standardDetailParams.hidden = Boolean(editor.templateEntry);
  if (standardGenerationSettings) standardGenerationSettings.hidden = Boolean(editor.generationConfiguredAtStart && !editor.templateEntry);
  if (copySection) copySection.hidden = Boolean(editor.hideCopyEditor);
  if (generationTip) generationTip.hidden = editor.step !== "generate";
  if (templateDetailParams) templateDetailParams.hidden = !editor.templateEntry;
  const templateActivePage = getSuiteTemplateActivePage(editor);
  const templatePageIsFixed = isSuiteTemplateFixedPage(templateActivePage);
  const requiresTemplateProductAnalysis = Boolean(editor.templateEntry);
  const templateWorkflowStage = editor.templateWorkflowStage || (requiresTemplateProductAnalysis ? "prepare" : "confirm");
  const isTemplateAnalysisComplete = templateWorkflowStage === "confirm";
  editorRoot?.toggleAttribute("data-suite-template-analysis-pending", requiresTemplateProductAnalysis && !isTemplateAnalysisComplete);
  const showTemplateGenerationSettings = Boolean(editor.templateEntry && !templatePageIsFixed && isTemplateAnalysisComplete);
  if (templateProductAnalysisPanel) templateProductAnalysisPanel.hidden = !editor.templateEntry || isTemplateAnalysisComplete || templatePageIsFixed;
  if (templateGenerationLabel) templateGenerationLabel.hidden = !showTemplateGenerationSettings;
  if (templateGenerationSettings) templateGenerationSettings.hidden = !showTemplateGenerationSettings;
  if (templateGenerateBar) templateGenerateBar.hidden = requiresTemplateProductAnalysis && !isTemplateAnalysisComplete;
  document.querySelectorAll("[data-suite-template-prompt-section]").forEach((section) => {
    section.hidden = !editor.templateEntry || templatePageIsFixed || !isTemplateAnalysisComplete;
  });
  if (productSlot) {
    productSlot.innerHTML = editor.product ? `
      <img src="${editor.product.image}" alt="${editor.product.name}">
      <div><strong>${editor.product.name}</strong><small>${editor.product.category} · 已上传商品图 ${editor.product.materialCount} 张</small></div>
      <button type="button" data-suite-open-product aria-label="重新选择商品">×</button>
    ` : `<div class="suite-product-empty"><span>＋</span><strong>暂未选择商品</strong><small>请选择商品图或上传本地商品素材</small></div>`;
  }
  if (templateSlot) {
    templateSlot.innerHTML = editor.template ? `
      <img src="${editor.template.cover}" alt="${editor.template.name}">
      <div><strong>${editor.template.name}</strong><small>${editor.template.category} · ${editor.template.pages.length} 页</small></div>
      <button type="button" data-suite-open-template aria-label="重新选择模板">×</button>
    ` : `<div class="suite-template-empty"><span>▧</span><strong>选择一套参考模板</strong><small>支持从模板库或我的模板中选择</small></div>`;
  }
  if (workspaceProduct) {
    workspaceProduct.innerHTML = editor.product ? `
      <img src="${editor.product.image}" alt="${editor.product.name}">
      <span><small>已上传商品图</small><strong>${editor.product.name}</strong><em>${editor.product.category} · ${editor.product.materialCount || 1} 张素材</em></span>
      <button type="button" data-suite-open-product>更换</button>
    ` : "";
  }
  if (recommendationsSlot) {
    recommendationsSlot.innerHTML = suiteReplicaTemplateOptions.slice(0, 4).map((template) => `
      <button class="${editor.template?.id === template.id ? "is-active" : ""}" type="button" data-suite-template-choice="${template.id}">
        <img src="${template.cover}" alt="${template.name}">
        <span><strong>${template.name}</strong><small>${template.category} · ${template.pages.length} 页</small><em>${template.description}</em></span>
      </button>
    `).join("");
  }
  if (workbenchRecommendationsSlot) {
    workbenchRecommendationsSlot.innerHTML = suiteReplicaTemplateOptions.slice(0, 4).map((template) => `
      <button class="${editor.template?.id === template.id ? "is-active" : ""}" type="button" data-suite-template-choice="${template.id}">
        <img src="${template.cover}" alt="${template.name}">
        <span><strong>${template.name}</strong><small>${template.pages.length} 页</small></span>
      </button>
    `).join("");
  }
  if (detailProductPreview) {
    const productImages = getSuiteDetailProductImages(editor).slice(0, 6);
    detailProductPreview.innerHTML = editor.product ? `
      <div class="suite-detail-preview-head"><strong>已上传商品图</strong><span>${productImages.length || editor.product.materialCount || 1} 张</span></div>
      <div class="suite-detail-thumb-grid">${productImages.map((image, index) => {
        const source = image.url || image.image;
        return `<figure data-suite-preview-image="${source}" data-suite-preview-title="商品图 ${index + 1}" role="button" tabindex="0"><img src="${source}" alt="商品图 ${index + 1}"><button class="suite-detail-thumb-remove" type="button" data-suite-detail-product-remove="${index}" aria-label="删除商品图 ${index + 1}">×</button><figcaption>${index + 1}</figcaption></figure>`;
      }).join("")}<button class="suite-detail-product-upload is-compact" type="button" data-suite-detail-product-add aria-label="添加商品图"><span>＋</span><strong>添加图片</strong></button></div>
    ` : `<button class="suite-detail-product-upload" type="button" data-suite-open-product><span>＋</span><strong>上传商品图</strong><small>支持上传或从商品库选择，可添加多张商品图片</small></button>`;
  }
  if (templateDetailProductPreview) {
    const page = templateActivePage;
    const moduleState = getSuiteTemplateModuleState(editor, page);
    const fixed = isSuiteTemplateFixedPage(page);
    const productImages = getSuiteDetailProductImages(editor);
    const requiredCount = getSuiteTemplateRequiredProductCount(editor, page);
    const needsModel = getSuiteTemplateNeedsModel(editor, page);
    const shownProductImages = productImages.slice(0, Math.max(requiredCount, 1));
    if (fixed) {
      templateDetailProductPreview.innerHTML = `<div class="suite-template-fixed-notice"><strong>固定图模块</strong><p>当前“${page?.title || "固定内容"}”为固定内容，已直接加入套图，不参与本次生成，也无需上传商品图或模特图。</p></div>`;
    } else {
      const missingSlots = Math.max(requiredCount - shownProductImages.length, 0);
      templateDetailProductPreview.innerHTML = `
        <section class="suite-template-material-card">
          <div class="suite-template-material-head"><strong>商品图 <em>必填</em></strong><span>${Math.min(productImages.length, requiredCount)}/${requiredCount} 张</span></div>
          <p>请按模块中商品的展示顺序上传，AI 将对应替换画面中的商品。</p>
          <div class="suite-template-material-grid">${shownProductImages.map((image, index) => {
            const source = image.url || image.image;
            return `<figure data-suite-preview-image="${source}" data-suite-preview-title="商品图 ${index + 1}" role="button" tabindex="0"><img src="${source}" alt="商品图 ${index + 1}"><button type="button" data-suite-detail-product-remove="${index}" aria-label="删除商品图 ${index + 1}">×</button><figcaption>${index + 1}</figcaption></figure>`;
          }).join("")}${Array.from({ length: missingSlots }, (_, index) => `<button class="suite-template-add-material" type="button" data-suite-detail-product-add><span>＋</span><small>${shownProductImages.length + index + 1}</small></button>`).join("")}</div>
          ${missingSlots ? `<small class="suite-template-material-missing">还需上传 ${missingSlots} 张商品图</small>` : ""}
        </section>
        ${needsModel ? `<section class="suite-template-material-card suite-template-model-card">
          <div class="suite-template-material-head"><strong>模特图 <em>必填</em></strong><span>${moduleState.modelImages.length}/1 张</span></div>
          <p>当前模块包含模特展示位，请补充 1 张清晰的模特参考图。</p>
          <div class="suite-template-material-grid">${moduleState.modelImages.map((image, index) => `<figure data-suite-preview-image="${image.image}" data-suite-preview-title="模特图 ${index + 1}" role="button" tabindex="0"><img src="${image.image}" alt="模特图 ${index + 1}"><button type="button" data-suite-template-model-remove="${index}" aria-label="删除模特图 ${index + 1}">×</button><figcaption>${index + 1}</figcaption></figure>`).join("")}${moduleState.modelImages.length ? "" : `<button class="suite-template-add-material" type="button" data-suite-template-model-add><span>＋</span><small>模特图</small></button>`}</div>
          ${moduleState.modelImages.length ? "" : `<small class="suite-template-material-missing">还需上传 1 张模特图</small>`}
        </section>` : ""}`;
    }
  }
  if (detailReferencePreview) {
    const referencePages = editor.template?.pages || [];
    syncSuiteCopyState(editor);
    const referenceLabel = editor.referenceSource === "template" ? `已选择模板 · ${editor.template?.name || "参考模板"}` : editor.referenceMode === "link" ? "淘宝解析图" : "已上传多图";
    detailReferencePreview.innerHTML = referencePages.length ? `
      <div class="suite-detail-preview-head"><strong>${referenceLabel}</strong><span>${referencePages.length} 张</span></div>
      <div class="suite-detail-thumb-grid">${referencePages.map((page, index) => `<figure data-suite-preview-image="${page.image}" data-suite-preview-title="${page.title || `参考图 ${index + 1}`}" role="button" tabindex="0"><img src="${page.image}" alt="${page.title}"><figcaption>${index + 1}</figcaption></figure>`).join("")}</div>
    ` : `<div class="suite-detail-empty">暂无参考内容</div>`;
  }
  if (templateDetailReferencePreview) {
    const page = templateActivePage;
    const moduleState = getSuiteTemplateModuleState(editor, page);
    const referenceDescriptions = getSuiteTemplateReferenceDescriptions(editor, page);
    const pageRatio = getSuiteTemplateDisplayRatio(page, editor);
    syncSuiteCopyState(editor);
    const referenceLabel = editor.template?.sourceModuleId ? "已选择单图模板" : "已选择套图模板";
    templateDetailReferencePreview.innerHTML = page ? `
      <div class="suite-template-module-card ${isSuiteTemplateFixedPage(page) ? "is-fixed" : ""}">
        <img src="${page.image}" alt="${page.title || editor.template?.name || "已选模块"}">
        <div><small>${referenceLabel}${editor.template?.sourceModuleId ? "" : ` · 第 ${(editor.template?.pages || []).findIndex((item) => item.id === page.id) + 1} 页`}</small><strong>${page.title || editor.template?.name || "已选模块"}</strong>${isSuiteTemplateFixedPage(page) ? `<em>固定图模块 · 不参与生成</em>` : ""}</div>
        <span class="suite-template-module-ratio">图片比例 ${escapeBrandText(pageRatio)}</span>
      </div>
      <button class="suite-template-reference-description-toggle" type="button" data-suite-template-reference-description-toggle aria-expanded="${editor.templateReferenceDescriptionOpen ? "true" : "false"}"><span>${editor.templateReferenceDescriptionOpen ? "收起参考图商品描述" : "查看参考图商品描述"}</span><b>${editor.templateReferenceDescriptionOpen ? "⌃" : "⌄"}</b></button>
      <div class="suite-template-reference-description" ${editor.templateReferenceDescriptionOpen ? "" : "hidden"}><strong>参考图商品描述</strong><p>${escapeBrandText(referenceDescriptions.productPrompt)}</p></div>
      ${isSuiteTemplateFixedPage(page) ? "" : `<label class="suite-template-reference-toggle"><input type="checkbox" data-suite-template-reference-toggle ${moduleState.useReference ? "checked" : ""}><span>调用本图片作为本次创作参考图</span></label><p class="suite-template-reference-hint">提示：若包含敏感信息，建议不选，以增加生成成功率。</p>`}
      ${editor.template?.sourceModuleId ? "" : `<div class="suite-template-page-switcher"><span>切换套图模块</span><div>${(editor.template?.pages || []).map((item, index) => `<button class="${item.id === page.id ? "is-active" : ""} ${isSuiteTemplateFixedPage(item) ? "is-fixed" : ""}" type="button" data-suite-reference-page="${item.id}">${index + 1}</button>`).join("")}</div></div>`}
    ` : `<div class="suite-detail-empty">暂无参考内容</div>`;
  }
  if (requiresTemplateProductAnalysis) {
    const analysisPages = getSuiteTemplateGenerativePages(editor);
    const materialIssues = getSuiteTemplateMaterialIssues(editor);
    const issueByPage = new Map(materialIssues.map((issue) => [issue.page.id, issue]));
    const isSuiteTemplate = !editor.template?.sourceModuleId;
    const uploadedProductCount = getSuiteDetailProductImages(editor).length || editor.product?.materialCount || 0;
    const requiredProductCount = Math.max(0, ...analysisPages.map((page) => getSuiteTemplateRequiredProductCount(editor, page)));
    const missingProductCount = Math.max(requiredProductCount - uploadedProductCount, 0);
    const missingModelCount = materialIssues.filter((issue) => issue.missingModel).length;
    const hasMaterialIssues = materialIssues.length > 0;
    templateProductAnalysisPanel?.classList.toggle("is-material-incomplete", templateWorkflowStage !== "analyzing" && hasMaterialIssues);
    if (templateProductAnalysisTitle) templateProductAnalysisTitle.textContent = isSuiteTemplate ? "解析全部商品提示词" : "解析商品提示词";
    if (templateProductAnalysisState) {
      templateProductAnalysisState.hidden = false;
      templateProductAnalysisState.classList.toggle("is-warning", templateWorkflowStage !== "analyzing" && hasMaterialIssues);
      templateProductAnalysisState.textContent = templateWorkflowStage === "analyzing"
        ? "解析中"
        : missingProductCount
          ? "待补充商品图"
          : missingModelCount
            ? "待补充模特图"
          : "素材已齐全";
    }
    if (templateProductAnalysisSummary) {
      const statusRows = isSuiteTemplate ? `<ul>${analysisPages.map((page, index) => {
        const issue = issueByPage.get(page.id);
        const missing = [
          issue?.missingProducts ? `缺 ${issue.missingProducts} 张商品图` : "",
          issue?.missingModel ? `缺${issue.missingModel}张素材图` : ""
        ].filter(Boolean).join("、");
        const status = templateWorkflowStage === "analyzing" ? "解析中" : (missing || "待解析");
        return `<li class="${missing ? "is-missing" : ""}"><span>第 ${index + 1} 页</span><em>${status}</em></li>`;
      }).join("")}</ul>` : "";
      const materialSummary = missingProductCount
        ? `当前已上传 ${uploadedProductCount}/${requiredProductCount} 张商品图，还需补齐 ${missingProductCount} 张后才能解析。`
        : missingModelCount
          ? `还有 ${missingModelCount} 个页面缺少模特图，请补齐素材后再解析。`
          : isSuiteTemplate
            ? `套图共 ${analysisPages.length} 个可生成模块，完成素材匹配后统一解析。`
            : "素材齐全后解析商品信息，自动带入产品描述；场景描述沿用参考图内容。";
      templateProductAnalysisSummary.innerHTML = `<p>${materialSummary}</p>${statusRows}`;
    }
    if (templateProductAnalysisButton) {
      const analyzing = templateWorkflowStage === "analyzing";
      templateProductAnalysisButton.disabled = analyzing || hasMaterialIssues;
      templateProductAnalysisButton.innerHTML = analyzing ? "解析中…" : hasMaterialIssues ? (missingProductCount ? "请先补齐商品图" : "请先补齐素材") : (isSuiteTemplate ? "解析全部商品提示词" : "解析商品提示词");
    }
  }
  if (templateProductAnalysisResult) {
    templateProductAnalysisResult.hidden = true;
    templateProductAnalysisResult.innerHTML = "";
  }
  const activeModuleState = getSuiteTemplateModuleState(editor, templateActivePage);
  const activeReferenceDescriptions = getSuiteTemplateReferenceDescriptions(editor, templateActivePage);
  if (editor.templateEntry && !activeModuleState.scenePrompt) activeModuleState.scenePrompt = activeReferenceDescriptions.scenePrompt;
  if (templateProductPrompt && document.activeElement !== templateProductPrompt) templateProductPrompt.value = activeModuleState.productPrompt || "";
  if (templateScenePrompt) templateScenePrompt.value = activeModuleState.scenePrompt || activeReferenceDescriptions.scenePrompt;
  if (templateResolution) templateResolution.value = activeModuleState.generationResolution || editor.resolution || "2K";
  if (templateModel) templateModel.value = activeModuleState.generationModel || "专业版";
  if (templateCount) templateCount.value = activeModuleState.generationCount || "1张";
  renderSuiteCopyEditor();
  renderSuiteReferenceControls();
  bindSuiteWorkbenchControls();
  if (resolutionSelect) resolutionSelect.value = editor.resolution || "2K";
  if (ratioSelect) ratioSelect.value = editor.ratio || "3:4";
  document.querySelector("[data-suite-canvas-hand]")?.classList.toggle("is-active", (editor.canvasTool || "hand") === "hand");
  document.querySelector("[data-suite-canvas-select]")?.classList.toggle("is-active", editor.canvasTool === "select");
  stepButtons.forEach((button) => {
    const step = button.dataset.suiteStep;
    button.classList.toggle("is-active", editor.step === step);
    button.classList.toggle("is-complete", (step === "product" && editor.product) || (step === "template" && editor.template) || (step === "generate" && editor.generated));
    button.disabled = !stepEnabled[step];
  });
  stepPanels.forEach((panel) => panel.classList.toggle("is-active", panel.dataset.suiteStepPanel === editor.step));
  syncSuiteGenerateButtons(editor);
  resolutionOptions.forEach((button) => button.classList.toggle("is-active", button.dataset.suiteResolution === editor.resolution));
  renderSuiteCanvas();
}

function renderSuiteCanvas() {
  const editor = getSuiteEditor();
  const stage = document.querySelector("[data-suite-canvas-stage]");
  const zoomLabel = document.querySelector("[data-suite-canvas-zoom-label]");
  const bottomZoomLabel = document.querySelector("[data-suite-bottom-zoom-label]");
  if (!stage) return;
  stage.classList.toggle("has-template", Boolean(editor.template));
  stage.style.transform = `translate(${editor.x}px, ${editor.y}px) scale(${editor.scale})`;
  if (zoomLabel) zoomLabel.textContent = `${Math.round(editor.scale * 100)}%`;
  if (bottomZoomLabel) bottomZoomLabel.textContent = `${Math.round(editor.scale * 100)}%`;
  if (!editor.template) {
    if (editor.step === "generate") {
      stage.classList.add("has-template");
      stage.innerHTML = `
        <div class="suite-detail-example suite-detail-input">
          <strong>输入参考详情页</strong>
          <span>请先在左侧上传参考商详，AI 将自动分析模块结构</span>
          <div><img src="assets/creation-cover-608.jpg" alt=""><img src="assets/creation-cover-610.jpg" alt=""></div>
        </div>
        <div class="suite-detail-arrow">›</div>
        <div class="suite-detail-example suite-detail-output">
          <strong>生成对标效果</strong>
          <span>选择参考方式后，右侧会预览可复刻的模块页面</span>
          <div><img src="${editor.product?.image || "assets/product-cover-03.png"}" alt=""><img src="assets/creation-cover-606.jpg" alt=""></div>
        </div>
      `;
      return;
    }
    stage.innerHTML = `<div class="suite-canvas-empty"><span>▧</span><strong>选择参考模板后，在这里预览整套图片</strong><small>模板会按竖向顺序展示，也可使用滚轮或双指缩放画布</small></div>`;
    return;
  }
  const tagColors = ["#ff6f66", "#ff8b6b", "#9edd5c", "#35a9ff", "#7d71ff", "#f6b548"];
  const renderCanvasCard = (page, index, variant = "template", childIndex = 0) => {
    const selected = editor.selectedReferencePageId === page.id;
    const loading = page.status === "loading";
    const failed = page.status === "failed";
    const fixed = isSuiteTemplateFixedPage(page);
    const actionable = !fixed && !failed && (variant === "result" || page.regenerated || page.textEdited);
    const deletableTemplateReference = editor.templateEntry && variant === "template";
    const exportSelected = (editor.exportSelectionIds || []).includes(page.id);
    const exportable = isSuiteExportablePage(page);
    const tagText = page.regenerated
      ? `重新生成 ${childIndex + 1}`
      : page.textEdited
        ? "已添加文字"
      : fixed
        ? `固定图 · ${page.title}`
        : variant === "result"
          ? failed ? "生成失败" : `生成图 ${page.generatedOutputIndex || childIndex + 1}`
          : `原图 ${index + 1}`;
    return `
    <article class="suite-canvas-card ${variant === "result" || page.textEdited ? "is-result" : ""} ${page.regenerated ? "is-regenerated" : ""} ${page.textEdited ? "is-text-edited" : ""} ${loading ? "is-loading" : ""} ${failed ? "is-failed" : ""} ${selected ? "is-selected" : ""} ${exportSelected ? "is-export-selected" : ""}" data-suite-canvas-item="${page.id}" ${variant === "template" && !page.regenerated ? `draggable="${editor.canvasTool !== "hand"}" data-suite-page-id="${page.id}"` : ""}>
      ${actionable && !loading ? `<div class="suite-canvas-card-toolbar" aria-label="图片快捷操作">
        <button type="button" data-suite-card-compare data-suite-toolbar-tooltip="图片对比" aria-label="对比商品图与生成结果"><img src="assets/suite-card-action-compare.png" alt=""></button>
        <button type="button" data-suite-card-regenerate data-suite-toolbar-tooltip="重新编辑" aria-label="重新编辑"><img src="assets/suite-card-action-regenerate.png" alt=""></button>
        <button type="button" data-suite-card-outpaint data-suite-toolbar-tooltip="扩图" aria-label="扩图"><img src="assets/module-result-action-outpaint-hover.png" alt=""></button>
        <button type="button" data-suite-card-download data-suite-toolbar-tooltip="下载" aria-label="下载"><img src="assets/suite-card-action-download.png" alt=""></button>
      </div>` : ""}
      <div class="suite-canvas-card-image">
        ${failed ? `<div class="suite-canvas-failure"><i>!</i><strong>生成失败</strong><small>${page.failureReason || "当前图片未成功生成，请重试。"}</small><button type="button" data-suite-card-retry="${page.id}" data-retry-cost="${page.retryCost || 2}">重新生成 <b>${page.retryCost || 2}</b><img src="assets/creation-rongdou-icon.png" alt="融豆"></button></div>` : `<img src="${page.image}" alt="${page.title}" ${actionable && !loading ? `data-suite-card-preview="${page.id}" role="button" tabindex="0"` : ""}>`}
        <span class="suite-page-tag" style="background:${page.regenerated ? "#5cc88a" : tagColors[index % tagColors.length]}">${tagText}</span>
        ${deletableTemplateReference ? `<button class="suite-template-reference-delete" type="button" data-suite-template-reference-delete="${page.id}" aria-label="删除参考图 ${page.title}">×</button>` : ""}
        ${exportable ? `<button class="suite-export-check" type="button" data-suite-card-export-toggle aria-pressed="${exportSelected}" aria-label="${exportSelected ? "取消选择导出" : "选择导出"}"><span>✓</span></button>` : ""}
        ${loading ? `<div class="suite-canvas-loading"><b></b><strong>正在重新生成...</strong><small>完成后会替换此占位图</small></div>` : ""}
      </div>
      <div class="suite-canvas-card-foot"><strong>${page.title}</strong><small>${fixed ? "固定图模块 · 不参与生成" : page.textEdited ? "已添加文字" : page.regenerated ? "局部重新生成" : variant === "template" ? "参考模板页" : "已按商品图复刻"}</small></div>
    </article>
  `; };
  const renderCanvasCardWithChildren = (page, index, variant = "template") => `
    ${renderCanvasCard(page, index, variant)}
    ${(editor.regeneratedByPage?.[page.id] || []).map((child, childIndex) => renderCanvasCard(child, index, "regenerated", childIndex)).join("")}
  `;
  if (editor.templateEntry) {
    const renderCompareCell = (label, content, kind = "") => `<div class="suite-canvas-compare-cell ${kind}"><small>${label}</small>${content}</div>`;
    const renderCompareRow = (page, index) => {
      const outputs = editor.generated ? getSuiteGeneratedPagesByParent(page.id, editor) : [];
      const regenerated = editor.regeneratedByPage?.[page.id] || [];
      const textEdited = editor.textEditedByPage?.[page.id] || [];
      return `<section class="suite-canvas-compare-row">
        <div class="suite-canvas-compare-row-cards">
          ${renderCompareCell("参考图", renderCanvasCard(page, index, "template"), "is-reference")}
          ${outputs.map((output, outputIndex) => renderCompareCell(`生成图 ${outputIndex + 1}`, renderCanvasCard(output, index, "result", outputIndex), "is-output")).join("")}
          ${regenerated.map((output, outputIndex) => renderCompareCell(`重新生成 ${outputIndex + 1}`, renderCanvasCard(output, index, "regenerated", outputIndex), "is-regenerated")).join("")}
          ${textEdited.map((output, outputIndex) => renderCompareCell(`文字版 ${outputIndex + 1}`, renderCanvasCard(output, index, "text-edited", outputIndex), "is-text-edited")).join("")}
        </div>
      </section>`;
    };
    stage.innerHTML = `<div class="suite-canvas-compare"><div class="suite-canvas-compare-heading"><strong>参考图与生成结果</strong><span>同一行横向对比；多次生成和重新生成会依次向右排列</span></div>${editor.template.pages.map(renderCompareRow).join("")}</div>`;
  } else {
    const referencePages = editor.template.pages || [];
    const regenerationColumns = Math.max(0, ...referencePages.map((page) => (editor.regeneratedByPage?.[page.id] || []).length));
    const textEditedColumns = Math.max(0, ...referencePages.map((page) => (editor.textEditedByPage?.[page.id] || []).length));
    const renderRegenerationPlaceholder = () => `<div class="suite-canvas-card-placeholder" aria-hidden="true"></div>`;
    const renderGeneratedResult = (page, index) => {
      const output = getSuiteGeneratedPagesByParent(page.id, editor)[0] || editor.generatedPages?.[index] || page;
      return renderCanvasCard(output, index, "result");
    };
    stage.innerHTML = `
      <div class="suite-canvas-lane">
        <div class="suite-canvas-lane-title"><strong>参考图预览</strong></div>
        ${referencePages.map((page, index) => renderCanvasCard(page, index)).join("")}
      </div>
      ${editor.generated ? `<div class="suite-canvas-lane suite-result-lane"><div class="suite-canvas-lane-title"><strong>生成结果</strong></div>${referencePages.map(renderGeneratedResult).join("")}</div>` : ""}
      ${Array.from({ length: regenerationColumns }, (_, columnIndex) => `<div class="suite-canvas-lane suite-regenerated-lane"><div class="suite-canvas-lane-title"><strong>重新生成 ${columnIndex + 1}</strong></div>${referencePages.map((page, index) => {
        const regenerated = editor.regeneratedByPage?.[page.id]?.[columnIndex];
        return regenerated ? renderCanvasCard(regenerated, index, "regenerated", columnIndex) : renderRegenerationPlaceholder();
      }).join("")}</div>`).join("")}
      ${Array.from({ length: textEditedColumns }, (_, columnIndex) => `<div class="suite-canvas-lane suite-text-edited-lane"><div class="suite-canvas-lane-title"><strong>文字版 ${columnIndex + 1}</strong></div>${referencePages.map((page, index) => {
        const textEdited = editor.textEditedByPage?.[page.id]?.[columnIndex];
        return textEdited ? renderCanvasCard(textEdited, index, "text-edited", columnIndex) : renderRegenerationPlaceholder();
      }).join("")}</div>`).join("")}
    `;
  }
  renderSuiteExportDrawer();
  stage.querySelectorAll("[data-suite-card-regenerate]").forEach((button) => {
    button.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();
      event.stopImmediatePropagation();
      handleSuiteCanvasToolbarAction(button, event);
    });
  });
  stage.querySelectorAll("[data-suite-card-retry]").forEach((button) => {
    button.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();
      retrySuiteFailedPage(button.dataset.suiteCardRetry);
    });
  });
  stage.querySelectorAll("[data-suite-card-compare]").forEach((button) => {
    button.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();
      event.stopImmediatePropagation();
      openSuiteImageComparison(button.closest("[data-suite-canvas-item]")?.dataset.suiteCanvasItem);
    });
  });
  stage.querySelectorAll("[data-suite-template-reference-delete]").forEach((button) => {
    button.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();
      openSuiteTemplateReferenceDeleteConfirm(button.dataset.suiteTemplateReferenceDelete);
    });
  });
  stage.querySelectorAll("[data-suite-card-download]").forEach((button) => {
    button.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();
      event.stopImmediatePropagation();
      handleSuiteCanvasToolbarAction(button, event);
    });
  });
  stage.querySelectorAll("[data-suite-card-outpaint]").forEach((button) => {
    button.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();
      event.stopImmediatePropagation();
      handleSuiteCanvasToolbarAction(button, event);
    });
  });
  stage.querySelectorAll("[data-suite-card-export-toggle]").forEach((button) => {
    button.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();
      event.stopImmediatePropagation();
      handleSuiteCanvasToolbarAction(button, event);
    });
  });
  stage.querySelectorAll("[data-suite-card-preview]").forEach((image) => {
    const openPreview = (event) => {
      event.preventDefault();
      event.stopPropagation();
      const page = getSuiteCanvasPageById(image.dataset.suiteCardPreview, editor);
      if (page) openDrawerImagePreview(page.image, { caption: getSuitePageExportTitle(page, editor) });
    };
    image.addEventListener("click", openPreview);
    image.addEventListener("keydown", (event) => {
      if (event.key !== "Enter" && event.key !== " ") return;
      openPreview(event);
    });
  });
  stage.querySelectorAll("[data-suite-canvas-item]").forEach((card) => {
    card.addEventListener("click", (event) => {
      if (event.target.closest(".suite-canvas-card-toolbar") || event.target.closest("[data-suite-card-export-toggle]")) {
        event.stopPropagation();
        return;
      }
      event.stopPropagation();
      selectSuiteReferencePage(card.dataset.suiteCanvasItem);
    });
  });
  stage.querySelectorAll("[data-suite-page-id]").forEach((card) => {
    card.addEventListener("dragstart", () => { editor.draggingId = card.dataset.suitePageId; card.classList.add("is-dragging"); });
    card.addEventListener("dragend", () => { editor.draggingId = ""; card.classList.remove("is-dragging"); stage.querySelectorAll(".is-drop-target").forEach((item) => item.classList.remove("is-drop-target")); });
    card.addEventListener("dragover", (event) => { event.preventDefault(); if (editor.draggingId && editor.draggingId !== card.dataset.suitePageId) card.classList.add("is-drop-target"); });
    card.addEventListener("dragleave", () => card.classList.remove("is-drop-target"));
    card.addEventListener("drop", (event) => {
      event.preventDefault();
      const from = editor.template.pages.findIndex((item) => item.id === editor.draggingId);
      const to = editor.template.pages.findIndex((item) => item.id === card.dataset.suitePageId);
      if (from >= 0 && to >= 0 && from !== to) {
        const [moved] = editor.template.pages.splice(from, 1);
        editor.template.pages.splice(to, 0, moved);
        renderSuiteCanvas();
        showToast("已调整套图页面顺序");
      }
    });
  });
}

function renderSuiteExportDrawer() {
  const editor = getSuiteEditor();
  editor.exportDrawerOpen = false;
  syncSuiteExportReopenButton(editor);
}

function renderSuiteReferenceControls() {
  const editor = getSuiteEditor();
  document.querySelectorAll("[data-suite-reference-source]").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.suiteReferenceSource === editor.referenceSource);
  });
  document.querySelectorAll("[data-suite-reference-panel]").forEach((panel) => {
    const active = panel.dataset.suiteReferencePanel === editor.referenceSource;
    panel.hidden = !active;
    panel.classList.toggle("is-active", active);
  });
  document.querySelectorAll("[data-suite-reference-mode]").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.suiteReferenceMode === editor.referenceMode);
  });
  document.querySelectorAll("[data-suite-reference-mode-panel]").forEach((panel) => {
    panel.classList.toggle("is-active", panel.dataset.suiteReferenceModePanel === editor.referenceMode);
  });
}

function bindSuiteWorkbenchControls() {
  document.querySelectorAll("[data-suite-replica-back]").forEach((button) => {
    button.onclick = (event) => {
      event.preventDefault();
      event.stopImmediatePropagation();
      event.stopPropagation();
      handleSuiteReplicaBack();
    };
  });
  document.querySelectorAll("[data-suite-reference-source]").forEach((button) => {
    button.onclick = (event) => {
      event.stopPropagation();
      const editor = getSuiteEditor();
      editor.referenceSource = button.dataset.suiteReferenceSource;
      renderSuiteReplicaEditor();
    };
  });
  document.querySelectorAll("[data-suite-reference-mode]").forEach((button) => {
    button.onclick = (event) => {
      event.stopPropagation();
      const editor = getSuiteEditor();
      editor.referenceSource = "upload";
      editor.referenceMode = button.dataset.suiteReferenceMode;
      editor.template = null;
      editor.generated = false;
      renderSuiteReplicaEditor();
    };
  });
  document.querySelectorAll("[data-suite-reference-upload]").forEach((button) => {
    button.onclick = (event) => {
      event.stopPropagation();
      const editor = getSuiteEditor();
      editor.referenceSource = "upload";
      editor.referenceMode = "multi";
      editor.template = null;
      ensureSuiteReferenceTemplate(editor);
      editor.step = "generate";
      editor.generated = false;
      renderSuiteReplicaEditor();
      showToast("已模拟上传 5 张参考商详图，AI 已拆解模块结构");
    };
  });
  document.querySelectorAll("[data-suite-reference-parse-link]").forEach((button) => {
    button.onclick = (event) => {
      event.stopPropagation();
      const editor = getSuiteEditor();
      const input = button.closest(".suite-reference-link")?.querySelector("[data-suite-reference-link-input]");
      editor.referenceSource = "upload";
      editor.referenceMode = "link";
      editor.template = null;
      ensureSuiteReferenceTemplate(editor);
      editor.step = "generate";
      editor.generated = false;
      renderSuiteReplicaEditor();
      showToast(input?.value ? "链接已解析，参考商详结构已加载" : "已模拟解析链接，参考商详结构已加载");
    };
  });
  document.querySelectorAll("[data-suite-add-module]").forEach((button) => {
    button.onclick = (event) => {
      event.stopPropagation();
      openSuitePicker("template");
    };
  });
  document.querySelectorAll("[data-suite-generate]").forEach((button) => {
    button.onclick = (event) => {
      event.stopPropagation();
      submitSuiteGeneration();
    };
  });
  document.querySelectorAll("[data-suite-workbench-template-recommendations] [data-suite-template-choice]").forEach((button) => {
    button.onclick = (event) => {
      event.stopPropagation();
      selectSuiteTemplate(button.dataset.suiteTemplateChoice);
    };
  });
  const moveCopyPage = (direction) => {
    const editor = getSuiteEditor();
    const pages = editor.template?.pages || [];
    const currentId = getSuiteParentPageId(editor.selectedReferencePageId, editor);
    const currentIndex = pages.findIndex((page) => page.id === currentId);
    const nextIndex = Math.max(0, Math.min(pages.length - 1, (currentIndex < 0 ? 0 : currentIndex) + direction));
    if (!pages[nextIndex] || nextIndex === currentIndex) return;
    editor.selectedReferencePageId = pages[nextIndex].id;
    renderSuiteReplicaEditor();
  };
  const copyPreviousButton = document.querySelector("[data-suite-copy-prev]");
  if (copyPreviousButton) copyPreviousButton.onclick = (event) => {
    event.stopPropagation();
    moveCopyPage(-1);
  };
  const copyNextButton = document.querySelector("[data-suite-copy-next]");
  if (copyNextButton) copyNextButton.onclick = (event) => {
    event.stopPropagation();
    moveCopyPage(1);
  };
  const regeneratePrompt = document.querySelector("[data-suite-regenerate-prompt]");
  if (regeneratePrompt) {
    regeneratePrompt.oninput = () => {
      getSuiteEditor().regeneratePrompt = regeneratePrompt.value;
    };
  }
  document.querySelectorAll("[data-suite-regenerate-image-text-line]").forEach((input) => {
    input.oninput = () => syncSuiteRegenerateImageTextFromInputs();
  });
}

function setSuiteCanvasZoom(nextScale) {
  const editor = getSuiteEditor();
  editor.scale = Math.max(0.5, Math.min(1.8, Number(nextScale.toFixed(2))));
  renderSuiteCanvas();
}

function selectSuiteProduct(product) {
  const editor = getSuiteEditor();
  editor.product = product;
  editor.step = "template";
  editor.template = null;
  editor.generated = false;
  editor.generatedPages = [];
  editor.generatedByPage = {};
  editor.regeneratedByPage = {};
  editor.selectedReferencePageId = "";
  editor.regeneratePanelOpen = false;
  editor.regeneratePrompt = "";
  editor.regenerateImageText = "";
  editor.regenerateProductImages = [];
  editor.regenerateReferenceImages = [];
  editor.exportDrawerOpen = false;
  editor.exportSelectionIds = [];
  editor.copyByPage = {};
  editor.originalCopyByPage = {};
  editor.clearedCopyByPage = {};
  editor.copyLayoutApplied = true;
  closePrototypeModals();
  renderSuiteReplicaEditor();
  showToast(`已上传商品图：${product.name}`);
}

function selectSuiteTemplate(templateId) {
  const source = suiteReplicaTemplateOptions.find((item) => item.id === templateId);
  if (!source) return;
  const editor = getSuiteEditor();
  editor.template = { ...source, pages: source.pages.map((page) => ({ ...page })) };
  editor.referenceSource = "template";
  editor.referenceMode = "template";
  editor.templateWorkflowStage = editor.templateEntry ? "prepare" : "confirm";
  editor.step = "generate";
  editor.generated = false;
  editor.generatedPages = [];
  editor.generatedByPage = {};
  editor.regeneratedByPage = {};
  editor.selectedReferencePageId = "";
  editor.regeneratePanelOpen = false;
  editor.regeneratePrompt = "";
  editor.regenerateImageText = "";
  editor.regenerateProductImages = [];
  editor.regenerateReferenceImages = [];
  editor.exportDrawerOpen = false;
  editor.exportSelectionIds = [];
  editor.copyByPage = {};
  editor.originalCopyByPage = {};
  editor.clearedCopyByPage = {};
  editor.templateModuleStates = {};
  editor.copyLayoutApplied = true;
  syncSuiteCopyState(editor);
  closePrototypeModals();
  renderSuiteReplicaEditor();
  showToast("模板已加载到参考套图画布");
}

function syncSuiteReplicaStartFromEditor(editor = getSuiteEditor()) {
  const productImages = getModuleProductImages(editor.product).map((image) => ({ ...image }));
  const product = editor.product ? {
    ...editor.product,
    images: productImages,
    image: productImages[0]?.url || productImages[0]?.image || editor.product.image,
    materialCount: productImages.length || editor.product.materialCount || 1
  } : null;
  const template = editor.template ? {
    ...editor.template,
    pages: (editor.template.pages || []).map((page) => ({ ...page }))
  } : null;
  const usesTemplate = Boolean(editor.templateEntry || editor.referenceSource === "template");

  suiteReplicaStartState.category = product?.category || suiteReplicaStartState.category || "";
  suiteReplicaStartState.product = product;
  suiteReplicaStartState.template = template;
  suiteReplicaStartState.templateKind = template?.sourceModuleId ? "single" : "suite";
  suiteReplicaStartState.referenceSource = usesTemplate ? "template" : "upload";
  suiteReplicaStartState.referenceMode = usesTemplate ? "template" : (editor.referenceMode || "multi");
  suiteReplicaStartState.link = editor.referenceLink || "";
  suiteReplicaStartState.linkParsing = false;
  suiteReplicaStartState.generation = {
    ratio: editor.ratio || "3:4",
    resolution: editor.resolution || "2K",
    model: editor.templateModel || "专业版",
    count: editor.templateCount || "1张"
  };
  suiteReplicaStartState.referenceImages = usesTemplate
    ? []
    : (template?.pages || []).map((page) => ({ url: page.image }));
  suiteReplicaStartState.referenceReady = usesTemplate
    ? Boolean(template)
    : Boolean(suiteReplicaStartState.referenceImages.length);
}

function openSuiteReplicaStartStepFromEditor(step = "reference") {
  const editor = getSuiteEditor();
  syncSuiteReplicaStartFromEditor(editor);
  suiteReplicaStartState.step = step;
  setWorkspacePage("creation-plaza");
  setCreationInputMode("multi-replica");
  renderSuiteReplicaStart();
}

function setSuiteStep(step) {
  const editor = getSuiteEditor();
  // 新版复刻生图的前两步在创作中心完成，避免再次回到旧版左侧流程。
  if (step === "product" || step === "template") {
    openSuiteReplicaStartStepFromEditor(step === "template" ? "reference" : "product");
    return;
  }
  if (step === "generate" && !editor.product) {
    showToast("请先上传商品图");
    return;
  }
  if (step === "generate" && !editor.template) {
    ensureSuiteReferenceTemplate(editor);
  }
  editor.step = step;
  renderSuiteReplicaEditor();
}

function ensureSuiteReferenceTemplate(editor) {
  if (editor.template) return;
  const modeLabel = editor.referenceSource === "template" ? "模板" : editor.referenceMode === "link" ? "链接解析" : "上传多图";
  editor.template = {
    id: `reference-${editor.referenceSource}-${editor.referenceMode}`,
    name: `${modeLabel}参考商详`,
    category: "智能详情解析",
    description: "根据参考商详自动拆解页面模块。",
    cover: "assets/creation-cover-608.jpg",
    pages: [
      { id: "page-match", title: "搭配推荐", image: editor.product?.image || "assets/product-cover-03.png" },
      { id: "page-selling", title: "核心卖点", image: "assets/creation-cover-610.jpg" },
      { id: "page-flat", title: "服装平铺图", image: "assets/creation-cover-606.jpg" },
      { id: "page-fabric", title: "面料展示", image: "assets/creation-cover-608.jpg" },
      { id: "page-model", title: "场景模特图", image: "assets/product-cover-04.png" }
    ]
  };
  editor.selectedReferencePageId = "";
  editor.regeneratedByPage = {};
  editor.regeneratePanelOpen = false;
  editor.regenerateImageText = "";
  editor.regenerateProductImages = [];
  editor.regenerateReferenceImages = [];
  editor.exportDrawerOpen = false;
  editor.exportSelectionIds = [];
  editor.copyByPage = {};
  editor.originalCopyByPage = {};
  editor.clearedCopyByPage = {};
  editor.copyLayoutApplied = true;
  syncSuiteCopyState(editor);
}

function submitSuiteGeneration(options = {}) {
  const editor = getSuiteEditor();
  if (editor.isGenerating) return;
  if (!editor.product) { showToast("请先上传商品图"); return; }
  if (editor.templateEntry && editor.templateWorkflowStage !== "confirm") {
    showToast("请先完成商品解析");
    return;
  }
  ensureSuiteReferenceTemplate(editor);
  const productImages = getModuleProductImages(editor.product);
  if (editor.templateEntry) {
    const generativePages = (editor.template?.pages || []).filter((page) => !isSuiteTemplateFixedPage(page));
    const requiredProductCount = Math.max(1, ...generativePages.map((page) => getSuiteTemplateRequiredProductCount(editor, page)));
    if (productImages.length < requiredProductCount) {
      const activePage = generativePages.find((page) => getSuiteTemplateRequiredProductCount(editor, page) === requiredProductCount) || generativePages[0];
      if (activePage) editor.selectedReferencePageId = activePage.id;
      renderSuiteReplicaEditor();
      showToast(`请先补齐 ${requiredProductCount} 张商品图`);
      return;
    }
    const missingModelPage = generativePages.find((page) => getSuiteTemplateNeedsModel(editor, page) && !getSuiteTemplateModuleState(editor, page).modelImages.length);
    if (missingModelPage) {
      editor.selectedReferencePageId = missingModelPage.id;
      renderSuiteReplicaEditor();
      showToast("请先补充该模块所需的模特图");
      return;
    }
  }
  if (!options.finalize) editor.generationDirty = false;
  if (options.showLoading) {
    editor.isGenerating = true;
    editor.step = "generate";
    renderSuiteReplicaEditor();
    window.setTimeout(() => {
      if (getSuiteEditor() !== editor || !editor.isGenerating) return;
      editor.isGenerating = false;
      submitSuiteGeneration({ finalize: true });
    }, 1400);
    return;
  }
  const fallbackImages = [
    editor.product?.image,
    productImages[1]?.url || productImages[1]?.image,
    "assets/creation-cover-606.jpg",
    "assets/product-cover-03.png",
    "assets/product-cover-04.png"
  ].filter(Boolean);
  editor.generatedByPage = Object.fromEntries(editor.template.pages.map((page, index) => {
    const moduleState = getSuiteTemplateModuleState(editor, page);
    const count = isSuiteTemplateFixedPage(page) ? 1 : Math.max(1, Number.parseInt(moduleState.generationCount, 10) || 1);
    return [page.id, Array.from({ length: count }, (_, outputIndex) => ({
      ...page,
      id: `generated-${page.id}-${outputIndex + 1}`,
      parentId: page.id,
      title: page.title,
      generatedOutputIndex: outputIndex + 1,
      image: isSuiteTemplateFixedPage(page) ? page.image : (fallbackImages[(index + outputIndex) % fallbackImages.length] || page.image)
    }))];
  }));
  editor.generatedPages = Object.values(editor.generatedByPage).flat();
  editor.exportSelectionIds = editor.generatedPages.map((page) => page.id);
  editor.exportDrawerOpen = Boolean(editor.exportSelectionIds.length);
  editor.step = "generate";
  editor.generated = true;
  renderSuiteReplicaEditor();
  showToast("多图复刻任务已提交，生成结果已展示在画布中");
}

const suiteRegenerateFallbackImages = [
  { image: "assets/product-cover-01.png", title: "补充商品图" },
  { image: "assets/product-cover-02.png", title: "补充细节图" },
  { image: "assets/product-cover-03.png", title: "补充上身图" },
  { image: "assets/product-cover-04.png", title: "补充陈列图" },
  { image: "assets/creation-cover-608.jpg", title: "补充参考图" },
  { image: "assets/creation-cover-610.jpg", title: "补充场景图" },
  { image: "assets/creation-cover-616.jpg", title: "补充氛围图" }
];

function normalizeSuiteRegenerateImage(item, fallbackTitle = "图片") {
  if (!item) return null;
  const image = item.image || item.url || item.src || "";
  if (!image) return null;
  return {
    image,
    title: item.title || item.name || fallbackTitle
  };
}

function getSuiteRegenerateProductImages(editor = getSuiteEditor()) {
  const source = getModuleProductImages(editor.product);
  return source.map((item, index) => normalizeSuiteRegenerateImage(item, `商品图 ${index + 1}`)).filter(Boolean);
}

function getSuiteRegenerateReferenceImages(selectedPage, editor = getSuiteEditor()) {
  const parentId = getSuiteParentPageId(selectedPage?.id, editor);
  const parentPage = parentId ? getSuiteCanvasPageById(parentId, editor) : null;
  const candidates = [parentPage, selectedPage].filter(Boolean);
  const unique = [];
  candidates.forEach((item, index) => {
    const normalized = normalizeSuiteRegenerateImage(item, index ? "当前生成图" : "参考图");
    if (!normalized || unique.some((image) => image.image === normalized.image)) return;
    unique.push(normalized);
  });
  return unique;
}

function getDefaultSuiteRegenerateImageText(page, editor = getSuiteEditor()) {
  const title = page?.title || "参考页";
  const productName = editor.product?.name || "商品卖点";
  return [`1 ${title}`, `2 ${productName}`, "3 保持参考图文字层级"].join("\n");
}

function syncSuiteRegenerateAssets(selectedPage, options = {}) {
  const editor = getSuiteEditor();
  if (options.reset || !Array.isArray(editor.regenerateProductImages) || !editor.regenerateProductImages.length) {
    editor.regenerateProductImages = getSuiteRegenerateProductImages(editor).slice(0, 4);
  }
  if (options.reset || !Array.isArray(editor.regenerateReferenceImages) || !editor.regenerateReferenceImages.length) {
    editor.regenerateReferenceImages = getSuiteRegenerateReferenceImages(selectedPage, editor).slice(0, 4);
  }
  if (editor.referenceTextMode === "parsed" && (options.reset || !editor.regenerateImageText)) {
    editor.regenerateImageText = getDefaultSuiteRegenerateImageText(selectedPage, editor);
  }
}

function renderSuiteRegenerateImageList(container, images, kind) {
  if (!container) return;
  const label = kind === "product" ? "商品图" : "参考图";
  container.innerHTML = `
    ${images.map((item, index) => `
      <figure class="suite-regenerate-image-card">
        <img src="${item.image}" alt="${escapeBrandText(item.title || `${label} ${index + 1}`)}">
        <button class="suite-regenerate-image-remove" type="button" data-suite-regenerate-remove-image="${kind}" data-index="${index}" aria-label="删除${label}">×</button>
      </figure>
    `).join("")}
    <button class="suite-regenerate-image-add" type="button" data-suite-regenerate-add-image="${kind}">
      <span>＋</span><strong>添加${label}</strong>
    </button>
  `;
}

function getSuiteRegenerateImageTextLines(editor = getSuiteEditor()) {
  const raw = editor.regenerateImageText || "";
  const lines = raw.split(/\n+/).map((line) => line.trim()).filter(Boolean);
  return lines.length ? lines : ["1 商品核心卖点", "2 细节说明文案", "3 转化引导文案"];
}

function renderSuiteRegenerateImageText(container) {
  if (!container) return;
  container.innerHTML = getSuiteRegenerateImageTextLines().map((line, index) => `
    <input type="text" value="${escapeBrandText(line)}" data-suite-regenerate-image-text-line="${index}" aria-label="图片文字 ${index + 1}">
  `).join("");
}

function syncSuiteRegenerateImageTextFromInputs(root = document) {
  const inputs = Array.from(root.querySelectorAll("[data-suite-regenerate-image-text-line]"));
  if (!inputs.length) return;
  getSuiteEditor().regenerateImageText = inputs.map((input) => input.value.trim()).filter(Boolean).join("\n");
}

function renderSuiteRegenerateModalContent(modal, selectedPage) {
  const editor = getSuiteEditor();
  const imageTextEnabled = editor.referenceTextMode === "parsed";
  syncSuiteRegenerateAssets(selectedPage);
  renderSuiteRegenerateImageList(modal.querySelector("[data-suite-regenerate-products]"), editor.regenerateProductImages || [], "product");
  renderSuiteRegenerateImageList(modal.querySelector("[data-suite-regenerate-references]"), editor.regenerateReferenceImages || [], "reference");
  const imageTextBlock = modal.querySelector("[data-suite-regenerate-image-text-block]");
  if (imageTextBlock) imageTextBlock.hidden = !imageTextEnabled;
  if (imageTextEnabled) renderSuiteRegenerateImageText(modal.querySelector("[data-suite-regenerate-image-text-list]"));
  const prompt = modal.querySelector("[data-suite-regenerate-prompt]");
  if (prompt) prompt.value = editor.regeneratePrompt || "";
}

function updateSuiteRegenerateImage(kind, action, index = -1) {
  const editor = getSuiteEditor();
  const selectedPage = getSuiteCanvasPageById(editor.selectedReferencePageId, editor);
  if (!selectedPage) return;
  syncSuiteRegenerateAssets(selectedPage);
  const key = kind === "product" ? "regenerateProductImages" : "regenerateReferenceImages";
  const current = Array.isArray(editor[key]) ? [...editor[key]] : [];
  if (action === "remove") {
    if (current.length <= 1) {
      showToast(kind === "product" ? "至少保留 1 张商品图" : "至少保留 1 张参考图");
      return;
    }
    current.splice(index, 1);
    editor[key] = current;
    showToast(kind === "product" ? "已删除商品图" : "已删除参考图");
  } else {
    if (action === "add" && current.length >= 6) {
      showToast(kind === "product" ? "商品图最多添加 6 张" : "参考图最多添加 6 张");
      return;
    }
    const pool = suiteRegenerateFallbackImages;
    const seed = Math.max(0, index) + current.length + Date.now();
    const next = pool[seed % pool.length];
    current.push({ image: next.image, title: next.title });
    showToast(kind === "product" ? "已添加商品图" : "已添加参考图");
    editor[key] = current.slice(0, 6);
  }
  const modal = document.querySelector("[data-suite-regenerate-modal]");
  if (modal) renderSuiteRegenerateModalContent(modal, selectedPage);
}

function openSuiteRegeneratePanel() {
  const editor = getSuiteEditor();
  const page = getSuiteCanvasPageById(editor.selectedReferencePageId, editor);
  if (!page) {
    showToast("请先在画布中选择一张图片");
    return;
  }
  const modal = getSuiteRegenerateModal();
  modal.style.zIndex = "1300";
  modal.style.background = "rgba(26, 31, 45, .34)";
  modal.style.backdropFilter = "blur(5px)";
  modal.style.webkitBackdropFilter = "blur(5px)";
  syncSuiteRegenerateAssets(page, { reset: true });
  renderSuiteRegenerateModalContent(modal, page);
  editor.regeneratePanelOpen = true;
  editor.exportDrawerOpen = false;
  openPrototypeModal(modal);
}

function getSuiteTemplateReferenceDeleteModal() {
  let modal = document.querySelector("[data-suite-template-reference-delete-modal]");
  if (modal) return modal;
  modal = document.createElement("div");
  modal.className = "prototype-modal suite-template-reference-delete-modal";
  modal.dataset.suiteTemplateReferenceDeleteModal = "";
  modal.setAttribute("aria-hidden", "true");
  modal.innerHTML = `
    <div class="prototype-modal-panel suite-template-reference-delete-panel" role="dialog" aria-modal="true" aria-labelledby="suite-template-reference-delete-title">
      <div class="suite-template-reference-delete-icon" aria-hidden="true">!</div>
      <h2 id="suite-template-reference-delete-title">删除参考模板图片？</h2>
      <p>删除后，该图片及对应生成结果将从当前画布移除，且无法恢复。</p>
      <div class="suite-template-reference-delete-actions">
        <button type="button" data-suite-template-reference-delete-cancel>取消</button>
        <button class="is-danger" type="button" data-suite-template-reference-delete-confirm>确认删除</button>
      </div>
    </div>
  `;
  modal.addEventListener("click", (event) => {
    if (event.target === modal) closePrototypeModal(modal);
  });
  modal.querySelector("[data-suite-template-reference-delete-cancel]")?.addEventListener("click", () => closePrototypeModal(modal));
  modal.querySelector("[data-suite-template-reference-delete-confirm]")?.addEventListener("click", () => confirmSuiteTemplateReferenceDelete());
  document.body.appendChild(modal);
  return modal;
}

function openSuiteTemplateReferenceDeleteConfirm(pageId) {
  const editor = getSuiteEditor();
  const page = editor.templateEntry ? editor.template?.pages?.find((item) => item.id === pageId) : null;
  if (!page) return;
  editor.templateDeletePageId = pageId;
  openPrototypeModal(getSuiteTemplateReferenceDeleteModal());
}

function confirmSuiteTemplateReferenceDelete() {
  const editor = getSuiteEditor();
  const pageId = editor.templateDeletePageId;
  const pageIndex = editor.templateEntry ? editor.template?.pages?.findIndex((item) => item.id === pageId) : -1;
  if (pageIndex == null || pageIndex < 0) return;
  editor.template.pages.splice(pageIndex, 1);
  delete editor.templateModuleStates?.[pageId];
  delete editor.generatedByPage?.[pageId];
  delete editor.regeneratedByPage?.[pageId];
  delete editor.textEditedByPage?.[pageId];
  delete editor.copyByPage?.[pageId];
  delete editor.originalCopyByPage?.[pageId];
  delete editor.clearedCopyByPage?.[pageId];
  editor.generatedPages = Object.values(editor.generatedByPage || {}).flat();
  const remainingIds = new Set(getSuiteCanvasPages(editor).map((page) => page.id));
  editor.exportSelectionIds = (editor.exportSelectionIds || []).filter((id) => remainingIds.has(id));
  editor.selectedReferencePageId = editor.template.pages[0]?.id || "";
  editor.templateDeletePageId = "";
  closePrototypeModal(getSuiteTemplateReferenceDeleteModal());
  renderSuiteReplicaEditor();
  showToast("参考模板图片已删除");
}

function appendSuiteTemplateRegeneration(pageId, options = {}) {
  const editor = getSuiteEditor();
  const selectedPage = editor.templateEntry ? getSuiteCanvasPageById(pageId, editor) : null;
  if (!selectedPage || isSuiteTemplateFixedPage(selectedPage)) return;
  const parentId = getSuiteParentPageId(selectedPage.id, editor);
  const templatePage = editor.template?.pages?.find((page) => page.id === parentId);
  const moduleState = getSuiteTemplateModuleState(editor, templatePage);
  const list = editor.regeneratedByPage[parentId] || [];
  const outputIndex = list.length + 1;
  const variantId = `regen-${parentId}-${Date.now()}`;
  const fallbackImages = [
    editor.product?.image,
    "assets/creation-cover-606.jpg",
    "assets/product-cover-03.png",
    "assets/product-cover-04.png",
    selectedPage.image
  ].filter(Boolean);
  const variant = {
    id: variantId,
    parentId,
    title: selectedPage.title,
    image: selectedPage.image,
    status: "loading",
    regenerated: true,
    prompt: options.scenePrompt || moduleState.scenePrompt || "",
    productPrompt: options.productPrompt || moduleState.productPrompt || "",
    regeneratePrompt: options.regeneratePrompt || "",
    imageText: ""
  };
  editor.regeneratedByPage[parentId] = [...list, variant];
  editor.selectedReferencePageId = variantId;
  editor.exportDrawerOpen = false;
  renderSuiteReplicaEditor();
  showToast("正在重新生成，新图片将追加在当前行右侧");
  window.setTimeout(() => {
    const pending = editor.regeneratedByPage[parentId]?.find((item) => item.id === variantId);
    if (!pending) return;
    pending.status = "done";
    pending.image = fallbackImages[outputIndex % fallbackImages.length] || selectedPage.image;
    editor.exportSelectionIds = Array.from(new Set([...(editor.exportSelectionIds || []), variantId]));
    renderSuiteReplicaEditor();
    showToast("重新生成完成，已追加新图片");
  }, 650);
}

function getSuiteTemplateRegenerateValues(page, editor = getSuiteEditor()) {
  const moduleState = getSuiteTemplateModuleState(editor, page);
  const analysis = moduleState.analysis || getSuiteTemplateEntryProductAnalysis(editor, page);
  return {
    productPrompt: moduleState.productPrompt || analysis.productPrompt || "",
    scenePrompt: moduleState.scenePrompt || analysis.scenePrompt || "",
    regeneratePrompt: editor.regeneratePrompt || ""
  };
}

function getSuiteTemplateRegenerateModal() {
  let modal = document.querySelector("[data-suite-template-regenerate-modal]");
  if (modal) return modal;
  modal = document.createElement("div");
  modal.className = "prototype-modal suite-template-regenerate-modal";
  modal.dataset.suiteTemplateRegenerateModal = "";
  modal.setAttribute("aria-hidden", "true");
  modal.innerHTML = `
    <div class="prototype-modal-panel suite-template-regenerate-modal-panel" role="dialog" aria-modal="true" aria-labelledby="suite-template-regenerate-title">
      <div class="prototype-modal-head">
        <div><h2 id="suite-template-regenerate-title">调整后重新生成</h2><p>确认商品与参考模板，并按需调整描述后重新生成当前图片。</p></div>
        <button class="prototype-close" type="button" data-suite-template-regenerate-close aria-label="关闭"></button>
      </div>
      <div class="suite-template-regenerate-modal-body" data-suite-template-regenerate-body></div>
      <div class="suite-regenerate-modal-footer">
        <button type="button" data-suite-template-regenerate-close>取消</button>
        <button class="is-primary" type="button" data-suite-template-regenerate-submit><img src="assets/creation-send-icon.png" alt="">确认重新编辑 <em>1</em><img src="assets/creation-rongdou-icon.png" alt="融豆"></button>
      </div>
    </div>
  `;
  const closeModal = () => {
    getSuiteEditor().regeneratePanelOpen = false;
    closePrototypeModal(modal);
  };
  modal.addEventListener("click", (event) => {
    if (event.target === modal) closeModal();
  });
  modal.querySelectorAll("[data-suite-template-regenerate-close]").forEach((button) => {
    button.addEventListener("click", closeModal);
  });
  modal.querySelector("[data-suite-template-regenerate-submit]")?.addEventListener("click", () => {
    const editor = getSuiteEditor();
    const pageId = modal.dataset.suiteTemplateRegeneratePageId;
    const page = editor.template?.pages?.find((item) => item.id === getSuiteParentPageId(pageId, editor));
    if (!page) return;
    const productPrompt = modal.querySelector("[data-suite-template-regenerate-product]")?.value.trim() || "";
    const scenePrompt = modal.querySelector("[data-suite-template-regenerate-scene]")?.value.trim() || "";
    if (!getSuiteDetailProductImages(editor).length) {
      showToast("请至少添加 1 张商品图");
      return;
    }
    const moduleState = getSuiteTemplateModuleState(editor, page);
    moduleState.productPrompt = productPrompt;
    moduleState.scenePrompt = scenePrompt;
    moduleState.generationResolution = modal.querySelector("[data-suite-template-regenerate-resolution]")?.value || moduleState.generationResolution;
    moduleState.generationModel = modal.querySelector("[data-suite-template-regenerate-model]")?.value || moduleState.generationModel;
    appendSuiteTemplateRegeneration(pageId, { productPrompt, scenePrompt });
    closeModal();
  });
  modal.addEventListener("click", (event) => {
    const remove = event.target.closest("[data-suite-template-regenerate-product-remove]");
    const add = event.target.closest("[data-suite-template-regenerate-product-add]");
    const referencePreview = event.target.closest("[data-suite-template-regenerate-reference-preview]");
    if (referencePreview) {
      event.preventDefault();
      const pageId = modal.dataset.suiteTemplateRegeneratePageId;
      const page = getSuiteEditor().template?.pages?.find((item) => item.id === getSuiteParentPageId(pageId, getSuiteEditor()));
      if (page?.image) openDrawerImagePreview(page.image, { caption: page.title || "参考模板图" });
      return;
    }
    if (!remove && !add) return;
    event.preventDefault();
    const editor = getSuiteEditor();
    const pageId = modal.dataset.suiteTemplateRegeneratePageId;
    const page = editor.template?.pages?.find((item) => item.id === getSuiteParentPageId(pageId, editor));
    if (!page) return;
    const images = getSuiteDetailProductImages(editor);
    if (remove) {
      const index = Number(remove.dataset.suiteTemplateRegenerateProductRemove);
      if (index >= 0 && index < images.length) {
        images.splice(index, 1);
        syncSuiteDetailProductImages(editor, images);
        renderSuiteReplicaEditor();
        renderSuiteTemplateRegenerateModal(modal, page);
        showToast("已删除商品图");
      }
      return;
    }
    const slotCount = Number(modal.dataset.suiteTemplateRegenerateSlotCount || 1);
    if (images.length >= slotCount) return;
    const fallbackPool = [editor.product?.image, ...products.map((product) => product.image), "assets/product-cover-01.png", "assets/product-cover-02.png", "assets/product-cover-03.png", "assets/product-cover-04.png"].filter(Boolean);
    const currentSources = new Set(images.map((image) => image.url || image.image));
    const source = fallbackPool.find((item) => !currentSources.has(item)) || fallbackPool[images.length % fallbackPool.length] || editor.product?.image;
    if (!source) return;
    syncSuiteDetailProductImages(editor, [...images, { url: source, image: source, name: `商品图 ${images.length + 1}` }]);
    renderSuiteReplicaEditor();
    renderSuiteTemplateRegenerateModal(modal, page);
    showToast("已添加商品图");
  });
  document.body.appendChild(modal);
  return modal;
}

function renderSuiteTemplateRegenerateModal(modal, page) {
  const editor = getSuiteEditor();
  const templatePage = editor.template?.pages?.find((item) => item.id === getSuiteParentPageId(page.id, editor)) || page;
  const values = getSuiteTemplateRegenerateValues(templatePage, editor);
  const productImages = getSuiteDetailProductImages(editor).slice(0, 6);
  const slotCount = Math.max(1, Number(modal.dataset.suiteTemplateRegenerateSlotCount || productImages.length || 1));
  modal.dataset.suiteTemplateRegenerateSlotCount = String(slotCount);
  const imageFigures = productImages.map((item, index) => {
    const image = item.url || item.image || item.src;
    return `<figure class="suite-template-regenerate-product"><img src="${image}" alt="商品图 ${index + 1}"><figcaption>商品图 ${index + 1}</figcaption><button type="button" data-suite-template-regenerate-product-remove="${index}" aria-label="删除商品图 ${index + 1}">×</button></figure>`;
  }).join("");
  const addSlots = Array.from({ length: Math.max(0, slotCount - productImages.length) }, () => `<button class="suite-template-regenerate-product-add" type="button" data-suite-template-regenerate-product-add aria-label="添加商品图"><span>＋</span><small>添加图片</small></button>`).join("");
  const state = getSuiteTemplateModuleState(editor, templatePage);
  const body = modal.querySelector("[data-suite-template-regenerate-body]");
  if (!body) return;
  modal.dataset.suiteTemplateRegeneratePageId = page.id;
  body.innerHTML = `
    <section class="suite-template-regenerate-assets">
      <div class="suite-regenerate-section-head"><strong>已上传商品图</strong><span>用于保留商品主体、颜色与材质细节</span></div>
      <div class="suite-template-regenerate-image-grid">${imageFigures}${addSlots}</div>
    </section>
    <section class="suite-template-regenerate-assets">
      <div class="suite-regenerate-section-head"><strong>对应参考模板图</strong><span>${escapeBrandText(editor.template?.name || "参考模板")} · ${escapeBrandText(templatePage.title || "当前页面")}</span></div>
      <button class="suite-template-regenerate-reference" type="button" data-suite-template-regenerate-reference-preview aria-label="放大预览参考模板图"><img src="${templatePage.image}" alt="${escapeBrandText(templatePage.title || "参考模板图")}"></button>
    </section>
    <label class="suite-regenerate-prompt"><span>产品描述</span><textarea rows="4" data-suite-template-regenerate-product>${escapeBrandText(values.productPrompt)}</textarea></label>
    <label class="suite-regenerate-prompt"><span>场景描述</span><textarea rows="4" data-suite-template-regenerate-scene>${escapeBrandText(values.scenePrompt)}</textarea></label>
    <section class="suite-template-regenerate-settings">
      <strong>生成参数</strong>
      <div class="suite-template-regenerate-settings-grid">
        <label><span>分辨率</span><select data-suite-template-regenerate-resolution><option${(state.generationResolution || editor.resolution || "2K") === "2K" ? " selected" : ""}>2K</option><option${(state.generationResolution || editor.resolution) === "1K" ? " selected" : ""}>1K</option><option${(state.generationResolution || editor.resolution) === "4K" ? " selected" : ""}>4K</option></select></label>
        <label><span>生图模型</span><select data-suite-template-regenerate-model><option${(state.generationModel || "专业版") === "专业版" ? " selected" : ""}>专业版</option><option${state.generationModel === "极速版" ? " selected" : ""}>极速版</option></select></label>
      </div>
    </section>
  `;
}

function openSuiteTemplateRegeneratePanel() {
  const editor = getSuiteEditor();
  const page = getSuiteCanvasPageById(editor.selectedReferencePageId, editor);
  if (!page) {
    showToast("请先在画布中选择一张图片");
    return;
  }
  const modal = getSuiteTemplateRegenerateModal();
  modal.dataset.suiteTemplateRegenerateSlotCount = String(Math.max(1, getSuiteDetailProductImages(editor).length));
  renderSuiteTemplateRegenerateModal(modal, page);
  editor.regeneratePanelOpen = true;
  editor.exportDrawerOpen = false;
  openPrototypeModal(modal);
}

function getSuiteCanvasActionPageId(button) {
  if (!button || !button.closest("[data-suite-canvas-stage]")) return "";
  if (button.matches("[data-suite-card-export-toggle]")) {
    return button.closest("[data-suite-canvas-item]")?.dataset.suiteCanvasItem || "";
  }
  if (!button.closest(".suite-canvas-card-toolbar")) return "";
  return button.closest("[data-suite-canvas-item]")?.dataset.suiteCanvasItem || "";
}

function handleSuiteCanvasToolbarAction(button, event) {
  const pageId = getSuiteCanvasActionPageId(button);
  if (!pageId) return false;
  event?.preventDefault?.();
  event?.stopPropagation?.();
  event?.stopImmediatePropagation?.();
  const editor = getSuiteEditor();
  editor.selectedReferencePageId = pageId;
  if (button.matches("[data-suite-card-regenerate]")) {
    if (editor.templateEntry) {
      openSuiteTemplateRegeneratePanel();
      return true;
    }
    openSuiteRegeneratePanel();
    return true;
  }
  if (button.matches("[data-suite-card-download]")) {
    showToast("已下载当前选中图片");
    return true;
  }
  if (button.matches("[data-suite-card-outpaint]")) {
    const page = getSuiteCanvasPageById(pageId, editor);
    openOutpaintEditor(page?.image, "suite-replica-editor");
    return true;
  }
  if (button.matches("[data-suite-card-export-toggle]")) {
    if (toggleSuiteExportSelection(pageId)) {
      editor.regeneratePanelOpen = false;
      renderSuiteCanvas();
      showToast("已更新导出选择");
    }
    return true;
  }
  return false;
}

function getSuiteRegenerateModal() {
  let modal = document.querySelector("[data-suite-regenerate-modal]");
  if (modal) {
    modal.style.zIndex = "1300";
    modal.style.background = "rgba(26, 31, 45, .34)";
    modal.style.backdropFilter = "blur(5px)";
    modal.style.webkitBackdropFilter = "blur(5px)";
    return modal;
  }
  modal = document.createElement("div");
  modal.className = "prototype-modal suite-regenerate-modal";
  modal.dataset.suiteRegenerateModal = "";
  modal.setAttribute("aria-hidden", "true");
  modal.style.zIndex = "1300";
  modal.style.background = "rgba(26, 31, 45, .34)";
  modal.style.backdropFilter = "blur(5px)";
  modal.style.webkitBackdropFilter = "blur(5px)";
  modal.innerHTML = `
    <div class="prototype-modal-panel suite-regenerate-modal-panel">
      <div class="prototype-modal-head">
        <div><h2>重新生成</h2></div>
        <button class="prototype-close" type="button" data-modal-close aria-label="关闭"></button>
      </div>
      <div class="suite-regenerate-modal-body">
        <section class="suite-regenerate-image-section">
          <div class="suite-regenerate-section-head"><strong>商品图</strong><span>用于保持商品主体、颜色与材质细节</span></div>
          <div class="suite-regenerate-image-grid" data-suite-regenerate-products></div>
        </section>
        <section class="suite-regenerate-image-section">
          <div class="suite-regenerate-section-head"><strong>参考图</strong><span>用于参考构图、场景、光影与视觉氛围</span></div>
          <div class="suite-regenerate-image-grid" data-suite-regenerate-references></div>
        </section>
        <div class="suite-regenerate-prompt suite-regenerate-image-text-block" data-suite-regenerate-image-text-block><span>图片文字</span><div class="suite-regenerate-text-lines" data-suite-regenerate-image-text-list></div></div>
        <label class="suite-regenerate-prompt"><span>需求描述 <em>非必填</em></span><textarea rows="5" data-suite-regenerate-prompt placeholder="例如：保留排版和构图，背景改为浅米色，光影更柔和。"></textarea></label>
      </div>
      <div class="suite-regenerate-modal-footer">
        <button type="button" data-modal-close>取消</button>
        <button class="is-primary" type="button" data-suite-regenerate-submit><img src="assets/creation-send-icon.png" alt="">生成图片 <em>1</em><img src="assets/creation-rongdou-icon.png" alt="融豆"></button>
      </div>
    </div>
  `;
  modal.addEventListener("click", (event) => {
    if (event.target === modal) {
      getSuiteEditor().regeneratePanelOpen = false;
      closePrototypeModals();
    }
  });
  modal.addEventListener("input", (event) => {
    const editor = getSuiteEditor();
    if (event.target.matches("[data-suite-regenerate-prompt]")) {
      editor.regeneratePrompt = event.target.value;
    }
    if (event.target.matches("[data-suite-regenerate-image-text-line]")) {
      syncSuiteRegenerateImageTextFromInputs(modal);
    }
  });
  modal.querySelectorAll("[data-modal-close]").forEach((button) => {
    button.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();
      getSuiteEditor().regeneratePanelOpen = false;
      closePrototypeModals();
    });
  });
  document.body.appendChild(modal);
  return modal;
}

function submitSuiteRegeneration() {
  const editor = getSuiteEditor();
  const selectedPage = getSuiteCanvasPageById(editor.selectedReferencePageId, editor);
  if (!selectedPage) {
    showToast("请先在画布中选择一张图片");
    return;
  }
  const input = document.querySelector(".suite-regenerate-modal [data-suite-regenerate-prompt]") || document.querySelector("[data-suite-regenerate-prompt]");
  const modal = document.querySelector(".suite-regenerate-modal");
  const imageTextEnabled = editor.referenceTextMode === "parsed";
  if (imageTextEnabled) syncSuiteRegenerateImageTextFromInputs(modal || document);
  editor.regeneratePrompt = input?.value || editor.regeneratePrompt || "";
  if (imageTextEnabled) {
    editor.regenerateImageText = editor.regenerateImageText || getDefaultSuiteRegenerateImageText(selectedPage, editor);
  } else {
    editor.regenerateImageText = "";
  }
  syncSuiteRegenerateAssets(selectedPage);
  const productImages = (editor.regenerateProductImages || []).map((item) => normalizeSuiteRegenerateImage(item, "商品图")).filter(Boolean);
  const referenceImages = (editor.regenerateReferenceImages || []).map((item) => normalizeSuiteRegenerateImage(item, "参考图")).filter(Boolean);
  const fallbackImages = [
    ...productImages.map((item) => item.image),
    ...referenceImages.map((item) => item.image),
    "assets/creation-cover-606.jpg",
    "assets/product-cover-03.png",
    "assets/product-cover-04.png",
    selectedPage.image
  ].filter(Boolean);
  const parentId = getSuiteParentPageId(selectedPage.id, editor);
  const list = editor.regeneratedByPage[parentId] || [];
  const newIndex = list.length;
  const variantId = `regen-${parentId}-${Date.now()}`;
  const variant = {
    id: variantId,
    parentId,
    title: selectedPage.title,
    image: selectedPage.image,
    status: "loading",
    regenerated: true,
    prompt: editor.regeneratePrompt,
    imageText: imageTextEnabled ? editor.regenerateImageText : "",
    productImages,
    referenceImages
  };
  editor.regeneratedByPage[parentId] = [...list, variant];
  editor.selectedReferencePageId = variantId;
  editor.regeneratePanelOpen = false;
  closePrototypeModals();
  renderSuiteReplicaEditor();
  showToast("已开始重新生成，结果会追加到当前图片右侧");
  window.setTimeout(() => {
    const pending = editor.regeneratedByPage[parentId]?.find((item) => item.id === variantId);
    if (!pending) return;
    pending.status = "done";
    pending.image = fallbackImages[newIndex % fallbackImages.length] || selectedPage.image;
    editor.exportSelectionIds = Array.from(new Set([...(editor.exportSelectionIds || []), variantId]));
    renderSuiteReplicaEditor();
    showToast("重新生成完成，已添加到当前图片右侧");
  }, 650);
}

function getSuiteModal(kind) {
  const selector = kind === "product" ? "[data-suite-product-modal]" : "[data-suite-template-modal]";
  let modal = document.querySelector(selector);
  if (modal) return modal;
  const isProduct = kind === "product";
  modal = document.createElement("div");
  modal.className = "prototype-modal suite-picker-modal";
  modal.dataset[isProduct ? "suiteProductModal" : "suiteTemplateModal"] = "";
  modal.setAttribute("aria-hidden", "true");
  modal.innerHTML = isProduct ? `
    <div class="prototype-modal-panel suite-picker-panel">
      <div class="prototype-modal-head"><div><h2>选择商品图</h2><p>选择商品库素材，或上传本地商品图用于整套复刻。</p></div><button class="prototype-close" type="button" data-modal-close aria-label="关闭"></button></div>
      <div class="suite-picker-tabs" data-suite-product-tabs><button class="is-active" type="button" data-suite-product-tab="library">从商品库选择</button><button type="button" data-suite-product-tab="local">本地上传</button></div>
      <div class="suite-product-picker-panel is-active" data-suite-product-panel="library"><div class="suite-product-picker-grid">${products.slice(0, 6).map((product) => `<button type="button" data-suite-product-choice="${product.id}"><img src="${product.image}" alt=""><span><strong>${product.name}</strong><small>${product.category} · ${product.materialCount} 张商品图</small></span><i>选择</i></button>`).join("")}</div></div>
      <div class="suite-product-picker-panel" data-suite-product-panel="local"><div class="suite-local-upload"><span>⇧</span><h3>上传本地商品图</h3><p>支持 JPG、PNG、WEBP，建议上传正面、侧面和细节图，可一次选择多张。</p><input type="file" accept="image/*" data-suite-local-file multiple hidden><button class="btn primary" type="button" data-suite-local-upload>选择本地图片</button></div></div>
    </div>` : `
    <div class="prototype-modal-panel suite-picker-panel suite-template-picker-panel">
      <div class="prototype-modal-head"><div><h2>选择模板</h2><p>模板图片会加载到右侧画布，可在生成前自由调整页面顺序。</p></div><button class="prototype-close" type="button" data-modal-close aria-label="关闭"></button></div>
      <div class="suite-picker-tabs"><button class="is-active" type="button">精选模板</button><button type="button">官方模板</button><button type="button">我的模板</button></div>
      <div class="suite-template-picker-grid">${suiteReplicaTemplateOptions.map((template) => `<button type="button" data-suite-template-choice="${template.id}"><div><img src="${template.cover}" alt="${template.name}"><span>${template.pages.length} 页</span></div><strong>${template.name}</strong><small>${template.category}</small><p>${template.description}</p></button>`).join("")}</div>
    </div>`;
  document.body.appendChild(modal);
  return modal;
}

function openSuitePicker(kind) {
  openPrototypeModal(getSuiteModal(kind));
}

function bindSuiteCanvasInteractions() {
  const viewport = document.querySelector("[data-suite-canvas-viewport]");
  if (!viewport || viewport.dataset.suiteBound) return;
  viewport.dataset.suiteBound = "true";
  const editor = getSuiteEditor();
  editor.canvasTool = editor.canvasTool || "hand";
  viewport.addEventListener("click", (event) => {
    const toolbarButton = event.target.closest("[data-suite-card-regenerate], [data-suite-card-outpaint], [data-suite-card-download], [data-suite-card-export-toggle]");
    if (!toolbarButton) return;
    if (handleSuiteCanvasToolbarAction(toolbarButton, event)) return;
  }, true);
  viewport.addEventListener("wheel", (event) => {
    event.preventDefault();
    setSuiteCanvasZoom(editor.scale + (event.deltaY < 0 ? 0.08 : -0.08));
  }, { passive: false });
  viewport.addEventListener("pointerdown", (event) => {
    if (event.target.closest(".suite-bottom-toolbar")) return;
    if (event.target.closest(".suite-canvas-card-toolbar")) return;
    if (event.target.closest("[data-suite-card-export-toggle]")) return;
    if (event.target.closest("[data-suite-card-preview]")) return;
    if (event.target.closest(".native-record-outcome")) return;
    if (event.target.closest(".suite-canvas-failure")) return;
    const pageCard = event.target.closest("[data-suite-canvas-item]");
    if (pageCard) selectSuiteReferencePage(pageCard.dataset.suiteCanvasItem);
    if (event.target.closest(".suite-canvas-card") && editor.canvasTool !== "hand") return;
    event.preventDefault();
    editor.pointers.set(event.pointerId, { x: event.clientX, y: event.clientY });
    viewport.setPointerCapture?.(event.pointerId);
    if (editor.pointers.size === 1) editor.pan = { startX: event.clientX, startY: event.clientY, x: editor.x, y: editor.y };
    if (editor.pointers.size === 2) {
      const [first, second] = [...editor.pointers.values()];
      editor.pinchDistance = Math.hypot(first.x - second.x, first.y - second.y);
      editor.pinchScale = editor.scale;
    }
  });
  viewport.addEventListener("pointermove", (event) => {
    if (!editor.pointers.has(event.pointerId)) return;
    editor.pointers.set(event.pointerId, { x: event.clientX, y: event.clientY });
    if (editor.pointers.size === 2) {
      const [first, second] = [...editor.pointers.values()];
      const distance = Math.hypot(first.x - second.x, first.y - second.y);
      if (editor.pinchDistance) setSuiteCanvasZoom(editor.pinchScale * distance / editor.pinchDistance);
      return;
    }
    if (editor.pan) {
      editor.x = editor.pan.x + event.clientX - editor.pan.startX;
      editor.y = editor.pan.y + event.clientY - editor.pan.startY;
      renderSuiteCanvas();
    }
  });
  const end = (event) => { editor.pointers.delete(event.pointerId); if (editor.pointers.size < 2) editor.pinchDistance = 0; if (!editor.pointers.size) editor.pan = null; };
  viewport.addEventListener("pointerup", end);
  viewport.addEventListener("pointercancel", end);
}

function getActiveMultiTemplate() {
  if (state.multiCreate.resourceTemplate) return state.multiCreate.resourceTemplate;
  return getTemplate(state.multiCreate.templateId);
}

function getSelectedMultiModule() {
  return state.multiCreate.modules.find((module) => module.id === state.multiCreate.selectedModuleId) || state.multiCreate.modules[0];
}

function getMultiSourceProductImages() {
  const product = state.multiCreate.sourceProduct;
  if (!product) return [];
  if (Array.isArray(product.images)) return product.images;
  return product.image ? [{ image: product.image, title: product.name || "商品图" }] : [];
}

function syncMultiSourceProductImages(images) {
  const sourceProduct = state.multiCreate.sourceProduct || {};
  const normalizedImages = images.map((image, index) => ({
    image: image.image || image.url || "",
    title: image.title || image.name || `商品图 ${index + 1}`
  })).filter((image) => image.image);
  sourceProduct.images = normalizedImages;
  sourceProduct.image = normalizedImages[0]?.image || "";
  sourceProduct.name = sourceProduct.name || normalizedImages[0]?.title || "本地商品图";
  sourceProduct.materialCount = normalizedImages.length;
  state.multiCreate.sourceProduct = sourceProduct;
  state.multiCreate.modules.forEach((module) => {
    if (!isMultiModuleFixed(module)) module.productImages = normalizedImages.slice(0, getMultiModuleRequiredCount(module));
  });
}

function renderMultiImageCreation() {
  const template = getActiveMultiTemplate();
  if (!template || !els.multiModuleList) return;

  const isReplica = isSuiteReplicaMode();
  const enabledModules = getEnabledMultiModules();
  const generativeModules = getGenerativeMultiModules();
  const missingModules = getMissingMultiModules();
  const readyCount = enabledModules.filter((module) => ["ready", "fixed", "done"].includes(getMultiModuleStatus(module).key)).length;
  const cost = generativeModules.length * 20;
  const doneCount = enabledModules.filter((module) => ["done", "fixed", "closed"].includes(getModuleResultStatus(module).key)).length;
  const isTemplateFlow = state.multiCreate.backPage === "template-flow";

  if (els.multiPage) {
    els.multiPage.dataset.multiStep = state.multiCreate.step;
    els.multiPage.dataset.multiResultStage = state.multiCreate.resultStage;
    els.multiPage.classList.toggle("is-template-flow-detail", isTemplateFlow);
  }
  const stepOrder = ["upload", "choose", "config", "result"];
  const currentIndex = stepOrder.indexOf(state.multiCreate.step);
  els.multiStepButtons.forEach((button) => {
    const buttonIndex = stepOrder.indexOf(button.dataset.multiStepButton);
    button.classList.toggle("is-active", buttonIndex === currentIndex);
    button.classList.toggle("is-complete", buttonIndex >= 0 && buttonIndex < currentIndex);
    button.hidden = isTemplateFlow && state.multiCreate.step !== "result" && button.dataset.multiStepButton === "result";
  });
  if (els.multiBack) {
    const backText = isTemplateFlow ? "返回" : state.multiCreate.backPage === "creation-plaza" ? "返回创作广场" : state.multiCreate.backPage === "creation-records" ? "返回创作记录" : state.multiCreate.backPage === "suite-solution-library" ? "返回套图模板" : "返回单图模板";
    els.multiBack.innerHTML = `<span></span>${backText}`;
  }
  if (els.multiTaskKind) els.multiTaskKind.textContent = isReplica ? "套图复刻" : "模板生图";
  if (els.multiConfigStepName) els.multiConfigStepName.textContent = isReplica ? "配置复刻" : "配置素材与参数";
  if (els.multiTemplateTitle) els.multiTemplateTitle.textContent = isTemplateFlow ? "模板生图" : isReplica ? `${template.name} - 套图复刻` : `${template.name} - 模板生图`;
  if (els.multiTemplateSubtitle) els.multiTemplateSubtitle.textContent = isReplica
    ? "一套提示词控制整套视觉表达，保留参考图的构图、光影与页面节奏"
    : `${templateComboLabel(template)} · ${template.category} · 已带入商品图，可设置生成参数并补充缺失素材`;
  if (els.multiTaskRecord) els.multiTaskRecord.hidden = !isTemplateFlow;
  if (els.multiTaskRecordCount) els.multiTaskRecordCount.textContent = state.multiCreate.taskId ? "1" : "0";
  if (els.multiTemplateName) els.multiTemplateName.textContent = template.name;
  if (els.multiTemplateThumb) els.multiTemplateThumb.src = template.items[0]?.image || "assets/product-cover-01.png";
  if (els.multiLinkedLabel) els.multiLinkedLabel.textContent = isReplica ? "参考套图" : "已使用模板";
  if (els.multiCountLabel) els.multiCountLabel.textContent = isReplica ? "参考页数" : "启用模块";
  if (els.multiSourceProductList) {
    const product = state.multiCreate.sourceProduct;
    const images = getMultiSourceProductImages();
    const renderImages = images.slice(0, 4).map((image, index) => {
      const source = image.image || image.url;
      return `<span class="multi-source-product-thumb"><button class="multi-source-product-preview" type="button" data-multi-source-preview="${source}" data-multi-source-preview-alt="商品图 ${index + 1}"><img src="${source}" alt="商品图 ${index + 1}"></button><button class="multi-source-product-remove" type="button" data-multi-source-product-remove="${index}" aria-label="移除商品图 ${index + 1}">×</button></span>`;
    }).join("");
    const addButton = isTemplateFlow
      ? `<button class="multi-source-product-add" type="button" data-multi-source-product-add aria-label="添加图片"><b>＋</b></button>`
      : `<button class="multi-source-product-add" type="button" data-multi-source-product-add><b>＋</b><span>添加图片</span></button>`;
    els.multiSourceProductList.innerHTML = isTemplateFlow
      ? `<div class="template-source-material-card"><div class="template-source-material-head"><div><strong>商品图</strong><em>${images.length ? "已带入" : "待补充"}</em></div><span>${images.length} 张</span></div><div class="multi-source-product-thumbs">${addButton}${renderImages}</div></div>`
      : images.length
        ? `<div class="multi-source-product-thumbs">${renderImages}${addButton}</div><p>${product?.name || "已上传商品"} · ${images.length} 张</p>`
        : `<div class="multi-source-product-empty-state"><p class="multi-source-product-empty">未带入商品图</p>${addButton}</div>`;
  }
  if (els.multiConfigTitle) els.multiConfigTitle.textContent = isReplica ? "整套复刻配置" : "模板生成参数";
  if (els.multiConfigDescription) els.multiConfigDescription.textContent = isReplica
    ? "所有页面共享商品图、参考套图和同一套复刻要求"
    : "按模板版块补齐商品图或模特图，并设置产品与场景描述";
  if (els.multiEnabledCount) els.multiEnabledCount.textContent = `${enabledModules.length} 个`;
  if (els.multiMissingCount) els.multiMissingCount.textContent = `${missingModules.length} 个`;
  if (els.multiCost) els.multiCost.textContent = `${cost} 融豆`;
  if (els.multiReadyLabel) els.multiReadyLabel.textContent = `${readyCount}/${enabledModules.length} 已就绪`;
  if (els.multiResultStatus) els.multiResultStatus.textContent = state.multiCreate.taskStatus === "running"
    ? `${doneCount}/${enabledModules.length} 已完成`
    : state.multiCreate.taskStatus === "done"
      ? "全部完成"
      : state.multiCreate.taskStatus === "failed"
        ? "生成失败"
        : "等待生成";
  const resultTitle = document.querySelector("[data-multi-result-title]");
  const resultDescription = document.querySelector("[data-multi-result-description]");
  const isResultStep = state.multiCreate.step === "result";
  if (state.multiCreate.resultStage !== "unified") state.multiCreate.resultStage = "unified";
  if (resultTitle) resultTitle.textContent = "生成结果";
  if (resultDescription) resultDescription.textContent = "选择各模块的入选图；已选图片可补充本地图片并拼接为套图";
  updateMultiResultFooter();
  const previewDrawer = document.querySelector("[data-multi-preview-drawer]");
  const previewDrawerOpen = isResultStep && state.multiCreate.previewDrawerOpen;
  if (previewDrawer) {
    previewDrawer.classList.toggle("is-open", previewDrawerOpen);
    previewDrawer.setAttribute("aria-hidden", String(!previewDrawerOpen));
  }
  if (els.multiFooterStatus) {
    els.multiFooterStatus.textContent = state.multiCreate.step === "config"
      ? isReplica ? `同一套复刻提示词将用于 ${enabledModules.length} 个页面` : `预计生成 ${generativeModules.length} 个模块`
      : "";
  }
  if (els.multiAutosave) els.multiAutosave.textContent = state.multiCreate.taskStatus === "running" ? "已自动保存" : "自动保存";

  els.multiModuleList.innerHTML = state.multiCreate.modules.map((module, index) => {
    const status = getMultiModuleStatus(module);
    const selected = module.id === state.multiCreate.selectedModuleId;
    const productCount = module.productImages.length;
    return `
      <article class="multi-module-card ${selected ? "is-selected" : ""} ${module.enabled ? "" : "is-closed"}" data-multi-module="${module.id}">
        ${isTemplateFlow ? "" : `<div class="multi-module-index">${index + 1}</div>`}
        ${isReplica ? `<span class="multi-replica-page-tag">参考页</span>` : `<div class="multi-module-actions">${isTemplateFlow ? "" : `<button class="multi-module-switch ${module.enabled ? "is-on" : ""}" type="button" data-multi-toggle="${module.id}" aria-label="${module.enabled ? "关闭模块" : "启用模块"}"></button>`}<button class="multi-module-delete" type="button" data-multi-module-delete="${module.id}" aria-label="删除${module.title}">×</button></div>`}
        ${module.enabled ? `
          <div class="multi-module-cover">
            <img src="${module.generated && module.resultImage ? module.resultImage : module.image}" alt="${module.title}" data-multi-module-preview="${module.generated && module.resultImage ? module.resultImage : module.image}" data-multi-module-preview-alt="${module.title}">
            ${isTemplateFlow ? `<div class="multi-module-index">${index + 1}</div>` : ""}
            ${isTemplateFlow ? "" : `<span class="multi-module-type">${module.group} · ${getMultiModuleRatioLabel(module)}</span><em class="multi-status ${status.key}">${status.text}</em>`}
          </div>
          <div class="multi-module-copy">
            <div class="multi-module-copy-head"><strong>${module.title}</strong></div>
            <span class="multi-module-meta">${isReplica ? "共享整套复刻要求 · 保持参考页面关系" : `${isMultiModuleFixed(module) ? "无需补充素材" : `商品图 ${productCount}/${getMultiModuleRequiredCount(module)}${module.requiresModel ? " · 需模特图" : ""}`} · ${module.generationCount}`}</span>
            ${isReplica ? "" : `<span class="multi-module-original-ratio">${getMultiModuleRatioLabel(module)}</span>`}
          </div>
        ` : `
          <div class="multi-module-closed">
            <strong>${module.title}</strong>
            <span>${module.group} · 已关闭，不参与生成</span>
          </div>
        `}
      </article>
    `;
  }).join("");

  renderMultiConfigPanel();
  renderMultiResultModuleNav();
  renderMultiResultList();
  renderMultiLongPreview();
}

function renderMultiConfigPanel() {
  if (isSuiteReplicaMode()) {
    renderSuiteReplicaConfigPanel();
    return;
  }
  const module = getSelectedMultiModule();
  if (!els.multiConfigContent || !els.multiConfigEmpty) return;
  if (!module) {
    els.multiConfigEmpty.classList.add("is-visible");
    els.multiConfigContent.innerHTML = "";
    return;
  }
  els.multiConfigEmpty.classList.remove("is-visible");
  const isTemplateFlow = state.multiCreate.backPage === "template-flow";
  const status = getMultiModuleStatus(module);
  if (isMultiModuleFixed(module)) {
    els.multiConfigContent.innerHTML = `
      <div class="multi-fixed-module-note">
        <img src="${module.image}" alt="${module.title}">
        <div class="multi-fixed-module-copy">
          <span>固定内容</span>
          <strong>将按模版自动保留</strong>
          <p>无需补充素材、设置参数或填写描述。</p>
        </div>
      </div>
    `;
    return;
  }
  const generationSettingsMarkup = `
    <section class="multi-config-section multi-config-section--plain multi-module-generation-settings">
      <h4>生成参数</h4>
      <div class="multi-module-param-grid multi-generation-param-grid">
        <label><span>生成数量</span><select data-multi-module-count="${module.id}"><option ${module.generationCount === "1 张" ? "selected" : ""}>1 张</option><option ${module.generationCount === "2 张" ? "selected" : ""}>2 张</option><option ${module.generationCount === "4 张" ? "selected" : ""}>4 张</option></select></label>
        <label><span>分辨率</span><select data-multi-module-resolution="${module.id}"><option ${module.generationResolution === "1K" ? "selected" : ""}>1K</option><option ${module.generationResolution === "2K" ? "selected" : ""}>2K</option><option ${module.generationResolution === "4K" ? "selected" : ""}>4K</option></select></label>
        <label><span>生图模型</span><select data-multi-module-model="${module.id}"><option ${module.generationModel === "专业版" ? "selected" : ""}>专业版</option><option ${module.generationModel === "通用版" ? "selected" : ""}>通用版</option><option ${module.generationModel === "精修版" ? "selected" : ""}>精修版</option></select></label>
      </div>
    </section>`;
  els.multiConfigContent.innerHTML = `
    ${isTemplateFlow ? "" : `<div class="multi-config-head">
      <div>
        <h3>${module.title}</h3>
        <p>${module.group} · ${module.purpose}</p>
      </div>
      <button class="multi-inline-switch ${module.enabled ? "is-on" : ""}" type="button" data-multi-toggle="${module.id}">${module.enabled ? "关闭" : "启用"}</button>
    </div>
    <div class="multi-config-preview ${module.enabled ? "" : "is-disabled"}">
      <img src="${module.image}" alt="${module.title}">
      <span class="multi-status ${status.key}">${status.text}</span>
    </div>`}
    ${module.enabled ? `
      ${isTemplateFlow ? "" : generationSettingsMarkup}
      <section class="multi-config-section multi-reference-setting">
        <h4>参考图</h4>
        <div class="multi-reference-row">
          <img src="${module.referenceImage || module.image}" alt="${module.title}参考图">
          <div>
            <label class="multi-reference-toggle">
              <input type="checkbox" data-multi-reference-toggle="${module.id}" ${module.useReferenceImage ? "checked" : ""}>
              <span>调用本图片作为本次创作参考图</span>
            </label>
            <p>提示：若包含敏感信息，建议不选，以增加生成成功率。</p>
          </div>
        </div>
      </section>
      <section class="multi-config-section multi-material-upload-section">
        <div class="multi-material-upload-head"><h4>商品图 <em>必填</em></h4><span>${module.productImages.length}/${getMultiModuleRequiredCount(module)} 张</span></div>
        <p>上传清晰的商品图，用于保持商品主体、细节和材质一致。</p>
        <div class="multi-material-slot-list">
          ${module.productImages.map((image, index) => {
            const source = image.image || image.url;
            return `<span class="multi-material-slot is-filled"><button class="multi-material-preview" type="button" data-multi-material-preview="${source}" data-multi-material-preview-alt="商品图 ${index + 1}" aria-label="预览商品图 ${index + 1}"><img src="${source}" alt="商品图 ${index + 1}"></button><button class="multi-material-remove" type="button" data-multi-material-remove="${module.id}" data-multi-material-kind="product" data-multi-material-index="${index}" aria-label="移除商品图 ${index + 1}">×</button><i>${index + 1}</i></span>`;
          }).join("")}
          ${module.productImages.length < getMultiModuleRequiredCount(module) ? `<button class="multi-material-slot is-upload" type="button" data-multi-upload-product="${module.id}" aria-label="上传商品图"><b>＋</b><i>${Math.min(module.productImages.length + 1, getMultiModuleRequiredCount(module))}</i></button>` : ""}
        </div>
        ${module.productImages.length < getMultiModuleRequiredCount(module) ? `<strong class="multi-material-missing">还需上传 ${getMultiModuleRequiredCount(module) - module.productImages.length} 张商品图</strong>` : `<strong class="multi-material-ready">商品图已准备完成</strong>`}
      </section>
      ${module.requiresModel ? `<section class="multi-config-section multi-material-upload-section">
        <div class="multi-material-upload-head"><h4>模特图 <em>必填</em></h4><span>${module.modelImages.length}/1 张</span></div>
        <p>上传一张清晰的全身或半身模特图，用于保持模板中的人物展示关系。</p>
        <div class="multi-material-slot-list">
          ${module.modelImages.map((image, index) => {
            const source = image.image || image.url;
            return `<span class="multi-material-slot is-filled"><button class="multi-material-preview" type="button" data-multi-material-preview="${source}" data-multi-material-preview-alt="模特图 ${index + 1}" aria-label="预览模特图 ${index + 1}"><img src="${source}" alt="模特图 ${index + 1}"></button><button class="multi-material-remove" type="button" data-multi-material-remove="${module.id}" data-multi-material-kind="model" data-multi-material-index="${index}" aria-label="移除模特图 ${index + 1}">×</button><i>${index + 1}</i></span>`;
          }).join("")}
          ${module.modelImages.length < 1 ? `<button class="multi-material-slot is-upload" type="button" data-multi-upload-model="${module.id}" aria-label="上传模特图"><b>＋</b><i>${Math.min(module.modelImages.length + 1, 1)}</i></button>` : ""}
        </div>
        ${module.modelImages.length ? `<strong class="multi-material-ready">模特图已准备完成</strong>` : `<strong class="multi-material-missing">还需上传 1 张模特图</strong>`}
      </section>` : ""}
      <label class="multi-config-section multi-config-section--plain">
        <h4>产品描述</h4>
        <textarea data-multi-product-description="${module.id}" placeholder="描述需要重点呈现的商品卖点。">${module.productDescription}</textarea>
      </label>
      <label class="multi-config-section multi-config-section--plain">
        <h4>场景描述</h4>
        <textarea data-multi-scene-description="${module.id}" placeholder="补充本模块的场景、氛围或视觉要求。">${module.sceneDescription}</textarea>
      </label>
      ${isTemplateFlow ? generationSettingsMarkup : ""}
    ` : `<p class="multi-disabled-note">该模块已关闭，本次不生成、不校验、不计费。重新启用后可继续配置。</p>`}
  `;
}

function renderSuiteReplicaConfigPanel() {
  if (!els.multiConfigContent || !els.multiConfigEmpty) return;
  const replica = state.multiCreate.replica;
  els.multiConfigEmpty.classList.remove("is-visible");
  els.multiConfigContent.innerHTML = `
    <div class="suite-replica-intro">
      <span>整套共享</span>
      <strong>不需要逐张填写提示词</strong>
      <p>上传商品图并填写一次复刻要求，系统会按参考套图的页面顺序生成全部图片。</p>
    </div>
    <section class="multi-config-section suite-replica-section">
      <h4>待替换商品图 <em>必填</em></h4>
      <p>同一商品图将用于整套图片，保证商品主体一致。</p>
      <div class="multi-thumb-row suite-replica-thumbs">
        ${replica.productImages.map((image, index) => `<img src="${image.image}" alt="商品图 ${index + 1}">`).join("")}
        <button type="button" data-suite-replica-upload-product>+ 选择商品图</button>
      </div>
    </section>
    <section class="multi-config-section suite-replica-section">
      <h4>参考套图 <em>已关联</em></h4>
      <p>系统已按参考图顺序识别页面结构。</p>
      <div class="suite-replica-reference-grid">
        ${replica.referenceImages.map((image, index) => `<figure><img src="${image.image}" alt="${image.title}"><figcaption>${index + 1}. ${image.title}</figcaption></figure>`).join("")}
      </div>
    </section>
    <label class="multi-config-section suite-replica-section">
      <h4>整套复刻要求 <em>选填</em></h4>
      <textarea data-suite-replica-prompt placeholder="例如：保留参考套图的页面顺序、人物姿势与自然光氛围；将商品替换为本款文胸，背景改为奶油白。">${replica.prompt}</textarea>
      <p>无需逐张描述；这里填写相对参考套图需要统一调整的内容。</p>
    </label>
    <section class="multi-config-section suite-replica-section">
      <h4>默认保留</h4>
      <div class="suite-replica-preserve-list">
        ${["构图", "光影", "页面顺序", "模特姿势"].map((item) => `<button class="${replica.preserve.includes(item) ? "is-active" : ""}" type="button" data-suite-replica-preserve="${item}">${item}</button>`).join("")}
      </div>
    </section>
  `;
}

function fillSuiteReplicaProductImages() {
  const images = [
    { image: "assets/product-cover-03.png", title: "蕾丝聚拢文胸" },
    { image: "assets/product-cover-04.png", title: "商品细节图" }
  ];
  state.multiCreate.replica.productImages = images;
  state.multiCreate.modules.forEach((module) => {
    if (!isMultiModuleFixed(module)) module.productImages = images;
  });
  renderMultiImageCreation();
  showToast("已添加商品图，整套复刻将共享该商品素材");
}

function updateSuiteReplicaPrompt(value) {
  state.multiCreate.replica.prompt = value;
}

function toggleSuiteReplicaPreserve(item) {
  const preserve = state.multiCreate.replica.preserve;
  const index = preserve.indexOf(item);
  if (index >= 0) preserve.splice(index, 1);
  else preserve.push(item);
  renderSuiteReplicaConfigPanel();
}

function renderMultiResultList() {
  if (!els.multiResultList) return;
  const enabledModules = getEnabledMultiModules();
  if (!enabledModules.length) {
    els.multiResultList.innerHTML = `<div class="multi-result-placeholder">暂无启用模块</div>`;
    return;
  }
  syncMultiCompositionItems();
  const compositionItems = state.multiCreate.compositionItems;
  const module = enabledModules.find((entry) => entry.id === state.multiCreate.selectedModuleId) || enabledModules[0];
  const status = getModuleResultStatus(module);
  const candidates = module.candidates || [];
  const isFixed = isMultiModuleFixed(module);
  els.multiResultList.innerHTML = `
    <section class="multi-result-module is-focus">
      <div class="multi-result-module-head">
        ${isFixed ? `<div><h4>${module.title}</h4></div>` : `<p>共 ${candidates.length} 张候选图，请选择 1 张入选</p>`}
        <span class="multi-status ${status.key}">${status.text}</span>
      </div>
      ${isFixed ? `
        <div class="multi-result-fixed">
          <img src="${module.image}" alt="${module.title}">
          <div><strong>固定内容已加入长图</strong><p>该模块无需生成和选图，会按模板原图保留。</p></div>
        </div>
      ` : candidates.length ? `
        <div class="multi-candidate-grid">
          ${candidates.map((candidate, index) => `
            <article class="multi-candidate-card ${candidate.id === module.selectedCandidateId ? "is-selected" : ""}">
              <button class="multi-candidate-preview" type="button" data-multi-candidate-preview="${candidate.image}" data-multi-candidate-preview-alt="${module.title}候选 ${index + 1}" aria-label="预览候选图 ${index + 1}">
                <img src="${candidate.image}" alt="${module.title}候选 ${index + 1}">
              </button>
              <button class="multi-candidate-select ${candidate.id === module.selectedCandidateId ? "is-selected" : ""}" type="button" data-multi-candidate="${module.id}" data-candidate-id="${candidate.id}" aria-label="选择候选图 ${index + 1}">✓</button>
            </article>
          `).join("")}
        </div>
      ` : `<div class="multi-result-placeholder">${status.text}</div>`}
      ${isFixed ? "" : `<div class="multi-result-actions">
        <button class="multi-regenerate-button" type="button" data-multi-regenerate-module="${module.id}"><img src="assets/multi-regenerate-icon.png" alt="">重新编辑</button>
      </div>`}
    </section>
    <section class="multi-selected-result-board">
      <div class="multi-selected-result-head">
        <h4>已选图片 <span>${compositionItems.length} 张</span></h4>
        <button class="multi-selected-result-add-button" type="button" data-multi-compose-upload><b>＋</b><span>添加图片</span></button>
      </div>
      <div class="multi-selected-result-list">
        ${compositionItems.map((item, index) => `
          <article class="multi-selected-result-item" data-multi-compose-item="${item.id}" draggable="true" title="可左右拖拽调整顺序">
            <em class="multi-selected-result-order" aria-hidden="true">${index + 1}</em>
            <button class="multi-selected-result-preview" type="button" data-multi-selected-preview="${item.image}" data-multi-selected-preview-alt="${item.title}" aria-label="预览${item.title}"><img src="${item.image}" alt="${item.title}"></button>
            <button class="multi-selected-result-remove" type="button" data-multi-compose-remove="${item.id}" aria-label="移除${item.title}">×</button>
          </article>
        `).join("")}
      </div>
    </section>
  `;
}

function renderMultiResultModuleNav() {
  if (!els.multiResultModuleNav) return;
  const enabledModules = getEnabledMultiModules();
  const selectedModule = enabledModules.find((module) => module.id === state.multiCreate.selectedModuleId) || enabledModules[0];
  const selectedCount = enabledModules.filter((module) => Boolean(getSelectedModuleImage(module))).length;
  els.multiResultModuleNav.innerHTML = enabledModules.length ? `
    <div class="multi-result-module-nav-head">
      <div><h3>图片模块</h3><p>选择模块确认入选图</p></div>
      <strong>${selectedCount}/${enabledModules.length}</strong>
    </div>
    <div class="multi-result-module-nav-list">
      ${enabledModules.map((module, index) => {
        const isSelected = module.id === selectedModule?.id;
        const image = getSelectedModuleImage(module) || module.image;
        const isFixed = isMultiModuleFixed(module);
        const status = getModuleResultStatus(module);
        const selected = Boolean(getSelectedModuleImage(module));
        return `
          <button class="multi-result-module-nav-item ${isSelected ? "is-selected" : ""}" type="button" data-multi-module="${module.id}">
            <span class="multi-result-module-nav-thumb"><img src="${image}" alt="${module.title}" data-multi-nav-preview="${image}" data-multi-nav-preview-alt="${module.title}"><i>${index + 1}</i></span>
            <span class="multi-result-module-nav-copy"><strong>${module.title}</strong><small>${isFixed ? "固定内容 · 已加入长图" : selected ? "已选择入选图" : status.text}</small></span>
            ${selected ? `<em>✓</em>` : ""}
          </button>
        `;
      }).join("")}
    </div>
  ` : `<div class="multi-result-placeholder">暂无启用模块</div>`;
}

function getSelectedModuleImage(module) {
  const selected = module.candidates?.find((candidate) => candidate.id === module.selectedCandidateId);
  if (selected) return selected.image;
  if (isMultiModuleFixed(module)) return module.image;
  return "";
}

function getMultiSelectedResultItems() {
  return getEnabledMultiModules().map((module) => ({
    id: `module-${module.id}`,
    moduleId: module.id,
    type: "module",
    title: module.title,
    image: getSelectedModuleImage(module)
  })).filter((item) => item.image);
}

function syncMultiCompositionItems() {
  const selectedItems = getMultiSelectedResultItems();
  const selectedByModule = new Map(selectedItems.map((item) => [item.moduleId, item]));
  const excluded = new Set(state.multiCreate.compositionExcludedModuleIds || []);
  const currentItems = state.multiCreate.compositionItems || [];
  const nextItems = currentItems.flatMap((item) => {
    if (item.type === "local") return [item];
    const current = selectedByModule.get(item.moduleId);
    return current && !excluded.has(item.moduleId) ? [{ ...item, ...current }] : [];
  });
  const existingModuleIds = new Set(nextItems.filter((item) => item.type === "module").map((item) => item.moduleId));
  selectedItems.forEach((item) => {
    if (!excluded.has(item.moduleId) && !existingModuleIds.has(item.moduleId)) nextItems.push(item);
  });
  state.multiCreate.compositionItems = nextItems;
}

function useMultiModuleFirstCandidates() {
  getEnabledMultiModules().forEach((module) => {
    if (!isMultiModuleFixed(module) && !module.selectedCandidateId && module.candidates?.length) {
      module.selectedCandidateId = module.candidates[0].id;
      module.resultImage = module.candidates[0].image;
    }
  });
  state.multiCreate.compositionExcludedModuleIds = [];
  renderMultiImageCreation();
  showToast("已使用每个模块的首选图");
}

function enterMultiCompositionStage() {
  const selectedCount = getMultiSelectedResultItems().length;
  if (!selectedCount) {
    showToast("请先为至少一个模块选择入选图");
    return;
  }
  state.multiCreate.resultStage = "unified";
  state.multiCreate.compositionExcludedModuleIds = [];
  state.multiCreate.compositionItems = [];
  syncMultiCompositionItems();
  state.multiCreate.previewDrawerOpen = true;
  renderMultiImageCreation();
}

function leaveMultiCompositionStage() {
  state.multiCreate.resultStage = "unified";
  state.multiCreate.previewDrawerOpen = false;
  renderMultiImageCreation();
}

function moveMultiCompositionItem(id, direction) {
  const items = state.multiCreate.compositionItems;
  const index = items.findIndex((item) => item.id === id);
  const targetIndex = direction === "up" ? index - 1 : index + 1;
  if (index < 0 || targetIndex < 0 || targetIndex >= items.length) return;
  [items[index], items[targetIndex]] = [items[targetIndex], items[index]];
  renderMultiImageCreation();
}

function removeMultiCompositionItem(id) {
  const item = state.multiCreate.compositionItems.find((entry) => entry.id === id);
  if (!item) return;
  if (item.type === "module") {
    state.multiCreate.compositionExcludedModuleIds = [...new Set([...state.multiCreate.compositionExcludedModuleIds, item.moduleId])];
  }
  state.multiCreate.compositionItems = state.multiCreate.compositionItems.filter((entry) => entry.id !== id);
  renderMultiImageCreation();
}

function reorderMultiCompositionItem(sourceId, targetId) {
  if (!sourceId || !targetId || sourceId === targetId) return;
  const items = state.multiCreate.compositionItems;
  const sourceIndex = items.findIndex((item) => item.id === sourceId);
  const targetIndex = items.findIndex((item) => item.id === targetId);
  if (sourceIndex < 0 || targetIndex < 0) return;
  const [source] = items.splice(sourceIndex, 1);
  items.splice(targetIndex, 0, source);
  renderMultiImageCreation();
}

function updateMultiResultFooter() {
  const isResultStep = state.multiCreate.step === "result";
  const previousButton = document.querySelector("[data-multi-flow-previous]");
  const nextButton = document.querySelector("[data-multi-flow-next]");
  const navigation = document.querySelector("[data-multi-footer-navigation]");
  const resultActions = document.querySelector("[data-multi-result-footer-actions]");
  if (previousButton) previousButton.textContent = "上一步";
  if (nextButton) nextButton.textContent = state.multiCreate.step === "config" ? "下一步：生成图片" : "下一步";
  if (navigation) navigation.hidden = isResultStep;
  if (resultActions) resultActions.hidden = !isResultStep;
}

function renderMultiLongPreview() {
  if (!els.multiLongPreview) return;
  const compositionItems = state.multiCreate.step === "result"
    ? state.multiCreate.compositionItems
    : getEnabledMultiModules().map((module) => ({ title: module.title, image: getSelectedModuleImage(module) }));
  els.multiLongPreview.innerHTML = compositionItems.length ? `
    <div class="multi-long-preview-card">
      ${compositionItems.map((item) => {
        const image = item.image;
        if (!image) {
          return `<figure class="multi-long-item empty" aria-label="等待入选图"></figure>`;
        }
        return `
          <figure class="multi-long-item">
            <img src="${image}" alt="${item.title}">
          </figure>
        `;
      }).join("")}
    </div>
  ` : `<div class="multi-result-placeholder">暂无可预览的模块</div>`;
  if (els.multiPreviewNote) {
    els.multiPreviewNote.textContent = state.multiCreate.step === "result" ? "实时拼接已入选结果" : "按模板顺序展示结构";
  }
}

function selectMultiModule(moduleId) {
  state.multiCreate.selectedModuleId = moduleId;
  renderMultiImageCreation();
}

function toggleMultiModule(moduleId) {
  const module = state.multiCreate.modules.find((entry) => entry.id === moduleId);
  if (!module) return;
  module.enabled = !module.enabled;
  state.multiCreate.selectedModuleId = module.id;
  renderMultiImageCreation();
}

function openMultiModuleDeleteConfirm(moduleId) {
  const module = state.multiCreate.modules.find((item) => item.id === moduleId);
  if (!module) return;
  state.multiCreate.pendingDeleteModuleId = moduleId;
  const message = document.querySelector("[data-multi-module-delete-message]");
  if (message) message.textContent = `确认删除模块「${module.title}」吗？`;
  openPrototypeModal(document.querySelector("[data-multi-module-delete-modal]"));
}

function deletePendingMultiModule() {
  const moduleId = state.multiCreate.pendingDeleteModuleId;
  const index = state.multiCreate.modules.findIndex((module) => module.id === moduleId);
  if (index < 0) return;
  const [removed] = state.multiCreate.modules.splice(index, 1);
  const nextModule = state.multiCreate.modules[index] || state.multiCreate.modules[index - 1] || null;
  state.multiCreate.selectedModuleId = nextModule?.id || "";
  state.multiCreate.pendingDeleteModuleId = "";
  closePrototypeModals();
  renderMultiImageCreation();
  showToast(`已删除「${removed.title}」`);
}

function fillMultiProductImages(moduleId = "", silent = false) {
  const targets = moduleId
    ? state.multiCreate.modules.filter((module) => module.id === moduleId)
    : getGenerativeMultiModules();
  const mockImages = [
    { image: "assets/product-cover-01.png", title: "商品图 1" },
    { image: "assets/product-cover-02.png", title: "商品图 2" },
    { image: "assets/product-cover-03.png", title: "商品图 3" }
  ];
  targets.forEach((module, index) => {
    if (isMultiModuleFixed(module) || !module.enabled) return;
    const need = getMultiModuleRequiredCount(module);
    const images = [...module.productImages];
    while (images.length < need) images.push(mockImages[(index + images.length) % mockImages.length]);
    module.productImages = images;
  });
  renderMultiImageCreation();
  if (!silent) showToast(moduleId ? "已选择商品图" : "已为启用模块匹配商品图");
}

function fillMultiModelImages(moduleId) {
  const module = state.multiCreate.modules.find((entry) => entry.id === moduleId);
  if (!module) return;
  module.modelImages = [{ image: "assets/model-detail-source.png", title: "都市通勤女模特" }];
  renderMultiImageCreation();
  showToast("已选择模特图");
}

function updateMultiProductDescription(moduleId, value) {
  const module = state.multiCreate.modules.find((entry) => entry.id === moduleId);
  if (!module) return;
  module.productDescription = value;
}

function updateMultiSceneDescription(moduleId, value) {
  const module = state.multiCreate.modules.find((entry) => entry.id === moduleId);
  if (!module) return;
  module.sceneDescription = value;
}

function updateMultiGenerationSetting(moduleId, field, value) {
  const module = state.multiCreate.modules.find((entry) => entry.id === moduleId);
  if (!module) return;
  const fields = { count: "generationCount", resolution: "generationResolution", model: "generationModel" };
  if (fields[field]) module[fields[field]] = value;
  renderMultiImageCreation();
}

function updateMultiTextMode(moduleId, mode) {
  const module = state.multiCreate.modules.find((entry) => entry.id === moduleId);
  if (!module) return;
  module.textMode = mode;
  renderMultiConfigPanel();
}

function createModuleCandidates(module) {
  const count = parseMultiGenerateCount(module);
  return Array.from({ length: count }, (_, index) => ({
    id: `${module.id}-candidate-${index + 1}`,
    image: getMultiCandidateImage(module, index),
    title: `候选 ${index + 1}`
  }));
}

function completeMultiModule(moduleId) {
  const module = state.multiCreate.modules.find((entry) => entry.id === moduleId);
  if (!module || !module.enabled) return;
  module.generationStatus = "done";
  module.candidates = createModuleCandidates(module);
  module.selectedCandidateId = module.candidates[0]?.id || "";
  module.generated = true;
  module.resultImage = module.candidates[0]?.image || module.image;
  const pending = getGenerativeMultiModules().filter((entry) => entry.generationStatus !== "done");
  if (!pending.length) {
    state.multiCreate.taskStatus = "done";
    if (els.multiAutosave) els.multiAutosave.textContent = "已自动保存";
  }
  renderMultiImageCreation();
}

function startMultiGeneration({ reset = true } = {}) {
  const enabledModules = getEnabledMultiModules();
  if (!enabledModules.length) {
    showToast("请至少启用一个模块");
    return;
  }
  const missingModules = getMissingMultiModules();
  if (missingModules.length) {
    state.multiCreate.selectedModuleId = missingModules[0].id;
    setMultiStep("config");
    showToast(`还有 ${missingModules.length} 个启用模块缺商品图`);
    return;
  }

  state.multiCreate.taskId = state.multiCreate.taskId || `multi-${Date.now()}`;
  state.multiCreate.taskStatus = "running";
  state.multiCreate.generated = true;
  if (reset) {
    getEnabledMultiModules().forEach((module) => {
      module.candidates = [];
      module.selectedCandidateId = "";
      module.generationStatus = isMultiModuleFixed(module) ? "done" : "queued";
      if (isMultiModuleFixed(module)) {
        module.candidates = [{ id: `${module.id}-fixed`, image: module.image, title: "固定图片" }];
        module.selectedCandidateId = `${module.id}-fixed`;
      }
    });
  }
  createOrUpdateMultiTaskRecord();
  setMultiStep("result");
  showToast("已进入结果确认，任务将在后台生成");
  getGenerativeMultiModules().forEach((module, index) => {
    module.generationStatus = index === 0 ? "running" : "queued";
    window.setTimeout(() => {
      module.generationStatus = "running";
      renderMultiImageCreation();
    }, 500 + index * 900);
    window.setTimeout(() => {
      completeMultiModule(module.id);
      createOrUpdateMultiTaskRecord();
    }, 1300 + index * 1200);
  });
  renderMultiImageCreation();
}

function selectMultiCandidate(moduleId, candidateId) {
  const module = state.multiCreate.modules.find((entry) => entry.id === moduleId);
  if (!module) return;
  module.selectedCandidateId = candidateId;
  const selected = module.candidates.find((candidate) => candidate.id === candidateId);
  module.resultImage = selected?.image || module.resultImage;
  renderMultiImageCreation();
}

function regenerateMultiModule(moduleId) {
  const module = state.multiCreate.modules.find((entry) => entry.id === moduleId);
  if (!module || isMultiModuleFixed(module)) {
    showToast("固定图片不参与重新生成");
    return;
  }
  module.generationStatus = "running";
  module.candidates = [];
  module.selectedCandidateId = "";
  state.multiCreate.taskStatus = "running";
  renderMultiImageCreation();
  window.setTimeout(() => {
    completeMultiModule(module.id);
    showToast("模块已重新生成");
  }, 1200);
}

function createOrUpdateMultiTaskRecord() {
  if (!els.creationTaskFlow || !state.multiCreate.taskId) return;
  const template = getActiveMultiTemplate();
  const isReplica = isSuiteReplicaMode();
  const enabledModules = getEnabledMultiModules();
  const doneCount = enabledModules.filter((module) => ["done", "fixed"].includes(getModuleResultStatus(module).key)).length;
  const status = state.multiCreate.taskStatus === "done" ? "done" : "running";
  let card = els.creationTaskFlow.querySelector(`[data-multi-task-id="${state.multiCreate.taskId}"]`);
  const title = isReplica ? `${template?.name || "参考套图"}复刻` : `${template?.name || "模板"}多图创作`;
  const thumbs = enabledModules.slice(0, 3).map((module) => `<img src="${getSelectedModuleImage(module) || module.image}" alt="">`).join("");
  const sourceProduct = state.multiCreate.sourceProduct;
  const replicaUsesTemplate = suiteReplicaStartState.referenceSource === "template";
  const replicaTags = [
    `<span data-tag-source="product_category">商品类型：${sourceProduct?.category || template?.category || "未分类"}</span>`,
    `<span data-tag-source="product_name">引用商品：${sourceProduct?.name || "当前商品"}</span>`,
    ...(replicaUsesTemplate ? [`<span data-tag-source="reference_template">参考模板：${template?.name || "参考套图模板"}</span>`] : []),
    `<span data-tag-source="creator">创作人：林夏</span>`
  ].join("");
  const html = `
    <div class="creation-task-thumb suite">
      ${thumbs}
      <span class="creation-task-type">套图</span>
    </div>
    <div class="creation-task-main">
      <div class="creation-task-title-row">
        <h2>${title}</h2>
        <span class="creation-task-status ${status === "done" ? "done" : "running"}">${status === "done" ? "已完成" : "生成中"}</span>
      </div>
      <div class="creation-task-meta">
        <span>${isReplica ? `${enabledModules.length} 个页面` : `${enabledModules.length} 个模块`}</span>
        <span>已完成 ${doneCount}/${enabledModules.length}</span>
        <span>刚刚</span>
      </div>
      <div class="creation-task-tags">
        ${isReplica ? replicaTags : `<span data-tag-source="product_name">${template?.name || "模板创作"}</span><span data-tag-source="product_category">${template?.category || "未分类"}</span><span data-tag-source="output_ratio">按模块比例</span>`}
      </div>
      <div class="creation-task-progress">
        <span>${status === "done" ? (isReplica ? "整套复刻结果已生成，可继续确认入选图" : "候选图已生成，可继续确认结果") : "后台生成中，可返回任务继续查看"}</span>
        <div class="creation-task-progress-line">
          <i style="width: ${enabledModules.length ? Math.round((doneCount / enabledModules.length) * 100) : 0}%;"></i>
        </div>
      </div>
    </div>
    <div class="creation-task-action">
      <button class="btn primary" type="button" data-open-creation-detail>查看详情</button>
    </div>
  `;
  if (!card) {
    card = document.createElement("article");
    card.className = "creation-task-card";
    card.dataset.creationTaskCard = "";
    card.dataset.multiTaskId = state.multiCreate.taskId;
    card.dataset.type = "复刻生图";
    card.dataset.product = isReplica ? "参考套图" : template?.name || "模板创作";
    els.creationTaskFlow.prepend(card);
    els.creationTaskCards = Array.from(document.querySelectorAll("[data-creation-task-card]"));
  }
  card.dataset.status = status;
  card.dataset.title = title;
  card.dataset.type = "复刻生图";
  card.dataset.multiMode = state.multiCreate.mode;
  card.innerHTML = html;
}

function openMultiTaskFromRecord(taskCard) {
  const isCurrentTask = taskCard?.dataset.multiTaskId && taskCard.dataset.multiTaskId === state.multiCreate.taskId;
  if (!isCurrentTask) {
    if (taskCard?.dataset.multiMode === "replica" || ["多图复刻", "套图复刻"].includes(taskCard?.dataset.type)) {
      setupMultiImageCreationWithTemplate(buildSuiteReplicaTemplate(), "creation-records", "replica");
      fillSuiteReplicaProductImages();
    } else {
      setupMultiImageCreation("tpl002", "creation-records");
      fillMultiProductImages("", true);
    }
  }
  state.multiCreate.backPage = "creation-records";
  applyMultiRecordModulesStatus(taskCard);
  clearMenuActive();
  document.querySelector('[data-single-menu="创作中心"]')?.classList.add("active");
  setWorkspacePage("multi-image-creation");
  setMultiStep("result");
}

function setCreationRecordMenuActive() {
  clearMenuActive();
  document.querySelector('[data-single-menu="创作记录"]')?.classList.add("active");
}

function getRecordProduct(taskCard) {
  const productName = taskCard?.dataset.product || "";
  return products.find((product) => product.name === productName || productName.includes(product.name) || product.name.includes(productName))
    || products.find((product) => /文胸|内衣/.test(productName) && /文胸|内衣/.test(product.category))
    || products[1]
    || products[0];
}

function getRecordTaskStatus(taskCard) {
  if (taskCard?.dataset.resultStatus === "partial") return "partial";
  const status = taskCard?.dataset.status || "done";
  return ["running", "done", "partial", "failed"].includes(status) ? status : "done";
}

function getRecordTaskTitle(taskCard, fallback = "创作任务") {
  return taskCard?.dataset.title || fallback;
}

function createRecordModuleTask(taskCard, product, { intent = "generate" } = {}) {
  const status = getRecordTaskStatus(taskCard);
  const candidateImages = [
    product?.image,
    "assets/creation-cover-608.jpg",
    "assets/creation-cover-610.jpg",
    "assets/creation-cover-616.jpg"
  ].filter(Boolean);
  const candidates = status === "done"
    ? candidateImages.slice(0, 4).map((image, index) => ({ id: `record-module-candidate-${Date.now()}-${index}`, image }))
    : [];
  const materialSnapshot = getModuleMaterialSnapshot();
  const task = {
    id: `record-module-task-${Date.now()}`,
    recordId: taskCard?.dataset.taskId || taskCard?.dataset.multiTaskId || "CR-202607",
    title: getRecordTaskTitle(taskCard, intent === "create" ? "新建图生图模块" : "模块生图"),
    status,
    prompt: getModulePrompt() || `保留${product?.name || "商品"}的主体、材质、颜色和电商视觉风格。`,
    materialSummary: `${product?.name || "商品图"} 1 张`,
    materialCount: getModuleMaterialCount(materialSnapshot) || 1,
    referenceImages: materialSnapshot.length ? materialSnapshot : [{ type: "product", url: product?.image || candidateImages[0], name: product?.name || "商品图" }],
    ratio: document.querySelector("[data-module-ratio]")?.value || "3:4",
    count: status === "done" ? `${Math.max(1, candidates.length)}张` : "4张",
    createdAt: moduleTimestamp(),
    candidates,
    boutiqueAddedCandidates: [],
    moduleAddedCandidates: []
  };
  moduleImageState.tasks = [task];
  moduleImageState.selectedTaskId = task.id;
  moduleImageState.selectedCandidateId = task.candidates[0]?.id || "";
  moduleImageState.expandedTaskId = "";
}

function applyMultiRecordModulesStatus(taskCard) {
  const recordStatus = getRecordTaskStatus(taskCard);
  const enabledModules = getEnabledMultiModules();
  enabledModules.forEach((module, index) => {
    if (isMultiModuleFixed(module)) {
      module.generationStatus = "done";
      module.generated = true;
      module.candidates = [{ id: `${module.id}-fixed`, image: module.image, title: "固定图片" }];
    } else if (recordStatus === "done") {
      module.generationStatus = "done";
      module.generated = true;
      module.candidates = createModuleCandidates(module);
    } else if (recordStatus === "failed") {
      module.generationStatus = index === 0 ? "failed" : "queued";
      module.generated = false;
      module.candidates = [];
    } else {
      module.generationStatus = index < 1 ? "done" : index === 1 ? "running" : "queued";
      module.generated = index < 1;
      module.candidates = index < 1 ? createModuleCandidates(module) : [];
    }
    module.selectedCandidateId = module.candidates[0]?.id || "";
    module.resultImage = module.candidates[0]?.image || "";
  });
  state.multiCreate.taskStatus = recordStatus;
  state.multiCreate.generated = true;
}

function focusLatestMultiResultModule() {
  const enabledModules = getEnabledMultiModules();
  const generativeModules = enabledModules.filter((module) => !isMultiModuleFixed(module));
  const focusModule = generativeModules[generativeModules.length - 1] || enabledModules[enabledModules.length - 1] || enabledModules[0];
  state.multiCreate.selectedModuleId = focusModule?.id || "";
}

function applySuiteRecordStatus(taskCard) {
  const editor = getSuiteEditor();
  const recordStatus = getRecordTaskStatus(taskCard);
  if (!editor.product || !editor.template) return;
  ensureSuiteReferenceTemplate(editor);
  const productImages = getModuleProductImages(editor.product);
  const fallbackImages = [
    editor.product?.image,
    productImages[1]?.url || productImages[1]?.image,
    "assets/creation-cover-606.jpg",
    "assets/product-cover-03.png",
    "assets/product-cover-04.png"
  ].filter(Boolean);
  editor.step = "generate";
  editor.regeneratePanelOpen = false;
  if (["done", "partial"].includes(recordStatus)) {
    editor.generatedPages = editor.template.pages.map((page, index) => ({
      ...page,
      id: `record-generated-${page.id}`,
      parentId: page.id,
      title: page.title,
      generatedOutputIndex: 1,
      status: recordStatus === "partial" && index >= Math.max(1, editor.template.pages.length - 2) ? "failed" : "done",
      failureReason: "商品主体识别不完整，请核对本图素材后重新生成。",
      retryCost: 2,
      image: fallbackImages[index % fallbackImages.length] || page.image
    }));
    editor.exportSelectionIds = editor.generatedPages.map((page) => page.id);
    editor.exportDrawerOpen = Boolean(editor.exportSelectionIds.length);
    editor.generated = true;
  } else {
    editor.generatedPages = editor.template.pages.map((page) => ({
      ...page,
      id: `record-generated-${page.id}`,
      parentId: page.id,
      title: page.title,
      generatedOutputIndex: 1,
      status: "failed",
      failureReason: "参考图与商品主体匹配失败，请调整当前图片素材后重新生成。",
      retryCost: 2,
      image: page.image
    }));
    editor.exportSelectionIds = [];
    editor.exportDrawerOpen = false;
    editor.generated = true;
    editor.regeneratePrompt = recordStatus === "failed" ? "生成失败：参考图主体识别不完整，请调整商品图或参考套图后重新生成。" : "";
  }
  renderSuiteReplicaEditor();
}

function retrySuiteFailedPage(pageId) {
  const editor = getSuiteEditor();
  const page = (editor.generatedPages || []).find((item) => item.id === pageId);
  if (!page || page.status !== "failed") return;
  const cost = page.retryCost || 2;
  page.status = "loading";
  renderSuiteCanvas();
  showToast(`正在重新生成当前图片，将扣除 ${cost} 融豆`);
  window.setTimeout(() => {
    page.status = "done";
    page.image = editor.product?.image || page.image || "assets/creation-cover-606.jpg";
    renderSuiteCanvas();
    showToast("当前图片已重新生成完成");
  }, 900);
}

function retryAllSuiteFailedPages() {
  const editor = getSuiteEditor();
  const failedPages = (editor.generatedPages || []).filter((page) => page.status === "failed");
  if (!failedPages.length) return;
  const cost = failedPages.reduce((total, page) => total + (page.retryCost || 2), 0);
  failedPages.forEach((page) => { page.status = "loading"; });
  const canvasViewport = document.querySelector("[data-suite-canvas-viewport]");
  canvasViewport?.querySelector(".native-record-outcome")?.remove();
  canvasViewport?.classList.remove("has-native-record-outcome");
  renderSuiteCanvas();
  showToast(`正在重新生成 ${failedPages.length} 张失败图片，将扣除 ${cost} 融豆`);
  window.setTimeout(() => {
    failedPages.forEach((page, index) => {
      page.status = "done";
      page.image = index % 2 ? "assets/creation-cover-606.jpg" : (editor.product?.image || page.image);
    });
    renderSuiteCanvas();
    showToast("失败图片已重新生成完成");
  }, 900);
}

function appendRecordDetailTask(taskCard, fallbackTitle) {
  const status = getRecordTaskStatus(taskCard);
  const productName = taskCard?.dataset.product || "关联商品";
  const prompt = `查看「${getRecordTaskTitle(taskCard, fallbackTitle)}」，关联商品：${productName}。`;
  const reason = taskCard?.querySelector(".creation-task-reason")?.textContent.replace(/^失败原因：/, "").trim()
    || (status === "partial" ? "其中 2 张图片因主体识别不完整而未生成。" : "原图边缘裁切过紧，主体外轮廓识别不完整。");
  appendDetailTask({ prompt, status, reason, retryCost: status === "partial" ? 8 : 10 });
}

function renderNativeRecordOutcome(taskCard, host) {
  const status = getRecordTaskStatus(taskCard);
  host?.querySelector(".native-record-outcome")?.remove();
  host?.classList.remove("has-native-record-outcome");
  if (!host || !["partial", "failed"].includes(status)) return;
  const isPartial = status === "partial";
  const suiteFailureCount = host.matches("[data-suite-canvas-viewport]")
    ? (getSuiteEditor().generatedPages || []).filter((page) => page.status === "failed").length
    : 0;
  const retryCost = suiteFailureCount ? suiteFailureCount * 2 : (isPartial ? 8 : 10);
  const reason = taskCard?.querySelector(".creation-task-reason")?.textContent.replace(/^失败原因：/, "").trim()
    || (isPartial ? "部分目标图片未成功生成，请重新生成失败项。" : "任务未成功生成，请调整素材或参数后重新提交。");
  host.classList.add("has-native-record-outcome");
  host.insertAdjacentHTML("afterbegin", `<section class="native-record-outcome ${isPartial ? "is-partial" : "is-failed"}">
    <div><strong>${isPartial ? "部分完成" : "全部失败"}</strong><p>${reason}</p></div>
    <button type="button" data-native-record-retry data-retry-cost="${retryCost}">${isPartial ? "重新生成失败项" : "重新生成"}<span>·</span><b>${retryCost}</b><img src="assets/creation-rongdou-icon.png" alt="融豆"></button>
  </section>`);
  if (host.matches("[data-suite-canvas-viewport]")) {
    host.querySelector("[data-native-record-retry]")?.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();
      retryAllSuiteFailedPages();
    });
  }
}

function openModuleImageRecordDetail(taskCard) {
  const product = getRecordProduct(taskCard);
  moduleFlowState.product = {
    ...product,
    images: getModuleProductImages(product).map((image) => ({ image: image.url || image.image, title: image.name || image.title || product.name }))
  };
  moduleFlowState.selectedModule = moduleLibraryAssets.find((asset) => asset.type === "image") || moduleLibraryAssets[0];
  moduleFlowState.lockedModule = true;
  startModuleFlowCreation();
  moduleImageState.backPage = "creation-records";
  createRecordModuleTask(taskCard, product);
  renderModuleImageWorkspace();
  setCreationRecordMenuActive();
}

function openTemplateImageRecordResult(taskCard) {
  const product = getRecordProduct(taskCard);
  const template = getTemplate("tpl002") || templates[0];
  setupMultiImageCreationWithTemplate(template, "template-flow", "template", product);
  state.multiCreate.detailReturnPage = "creation-records";
  state.multiCreate.taskId = taskCard?.dataset.multiTaskId || taskCard?.dataset.taskId || `record-template-${Date.now()}`;
  applyMultiRecordModulesStatus(taskCard);
  focusLatestMultiResultModule();
  setMultiStep("result");
  setCreationRecordMenuActive();
}

function openSingleReplicaRecordDetail(taskCard) {
  const product = getRecordProduct(taskCard);
  setCreationCategory(product.category?.split(" / ")[1] || product.category || "文胸");
  state.creation.inputMode = "reference";
  state.creation.productUploaded = true;
  state.creation.referenceUploaded = true;
  state.creation.productImages = [{ id: `${product.id}-record`, image: product.image, imageName: product.name }];
  singleReplicaState.productImages = [{ url: product.image, name: product.name }];
  singleReplicaState.reference = { image: "assets/creation-cover-608.jpg", name: "复刻参考图" };
  openCreationDetail({
    fromHistory: true,
    taskTitle: taskCard?.dataset.title || "单图复刻详情",
    productName: product.name,
    backPage: "creation-records"
  });
  appendRecordDetailTask(taskCard, "单图复刻详情");
  setCreationRecordMenuActive();
}

function openMultiReplicaRecordDetail(taskCard) {
  const product = getRecordProduct(taskCard);
  openSuiteReplicaEditor("creation-records", {
    product,
    templateId: suiteReplicaTemplateOptions[0]?.id,
    referenceSource: "template",
    referenceMode: "template",
    autoReference: true
  });
  applySuiteRecordStatus(taskCard);
  renderNativeRecordOutcome(taskCard, document.querySelector("[data-suite-canvas-viewport]"));
  setCreationRecordMenuActive();
}

function openFreeCreationRecordDetail(taskCard) {
  const product = getRecordProduct(taskCard);
  setCreationCategory(product.category?.split(" / ")[1] || product.category || "文胸");
  state.creation.inputMode = "free";
  state.creation.productUploaded = true;
  state.creation.referenceUploaded = false;
  state.creation.productImages = [{ id: `${product.id}-record`, image: product.image, imageName: product.name }];
  openCreationDetail({
    fromHistory: true,
    taskTitle: taskCard?.dataset.title || "自由创作详情",
    productName: product.name,
    backPage: "creation-records"
  });
  appendRecordDetailTask(taskCard, "自由创作详情");
  setCreationRecordMenuActive();
}

function openModuleCreateRecordConfirm(taskCard) {
  const product = getRecordProduct(taskCard);
  resetModuleImageWorkspace();
  moduleImageState.intent = "create";
  moduleImageState.backPage = "creation-records";
  moduleImageState.createStep = 2;
  moduleImageState.materials.product = [{ url: product.image, name: product.name, source: "创作记录" }];
  document.querySelector("[data-module-product-prompt]").value = `保留${product.name}的商品主体、颜色、材质与核心卖点。`;
  document.querySelector("[data-module-scene-prompt]").value = "生成可沉淀为图生图模块的干净电商视觉，构图稳定，便于后续复用。";
  openModuleImageWorkspace({ backPage: "creation-records", intent: "create" });
  createRecordModuleTask(taskCard, product, { intent: "create" });
  renderModuleImageWorkspace();
  renderNativeRecordOutcome(taskCard, document.querySelector(".module-asset-workspace"));
  setCreationRecordMenuActive();
}

function openModelCreateRecordDetail(taskCard) {
  openModelCreateModal();
  const panel = getModelCreatePanel();
  if (!panel) return;
  [
    ["gender", "女性"],
    ["age", "18-24岁"],
    ["race", "东亚"],
    ["skin", "自然肤色"]
  ].forEach(([name, value]) => {
    const group = panel.querySelector(`[data-model-required="${name}"]`);
    group?.querySelectorAll("button").forEach((button) => button.classList.toggle("active", button.dataset.value === value));
  });
  const prompt = panel.querySelector("[data-model-prompt]");
  if (prompt) prompt.value = "适合内衣商品展示的自然真实女模特，干净光线，姿态舒展，适合电商主图与详情页。";
  setModelReferenceUploaded("assets/model-detail-source.png");
  state.modelPreviewSubmittedAt = formatModelTimestamp();
  const recordStatus = getRecordTaskStatus(taskCard);
  setModelCreateState(recordStatus === "running" ? "generating" : recordStatus === "done" ? "complete" : "failed");
  updateModelResultSubmittedAt();
  updateModelCreateSummary();
  renderNativeRecordOutcome(taskCard, panel.querySelector(".model-create-result-panel"));
  setCreationRecordMenuActive();
}

function openCreationRecordTaskDetail(taskCard) {
  const taskType = normalizeCreationTaskType(taskCard?.dataset.type);
  if (taskType === "复刻生图") {
    openMultiReplicaRecordDetail(taskCard);
    return;
  }
  if (taskType === "自由创作") {
    openFreeCreationRecordDetail(taskCard);
    return;
  }
  if (taskType === "新建图生图模块") {
    openModuleCreateRecordConfirm(taskCard);
    return;
  }
  if (taskType === "新建模特") {
    openModelCreateRecordDetail(taskCard);
    return;
  }
  if (taskType === "AI工具" && getCreationTaskAiToolType(taskCard) === "智能扩图") {
    const sourceImage = taskCard.querySelector(".outpaint-before img")?.getAttribute("src") || state.outpaint.sourceImage;
    openOutpaintEditor(sourceImage, "creation-records");
    setCreationRecordMenuActive();
    return;
  }
  openCreationDetail({
    fromHistory: true,
    taskTitle: taskCard?.dataset.title || "",
    productName: taskCard?.dataset.product || "",
    backPage: taskCard ? "creation-records" : "creation-plaza"
  });
  setCreationRecordMenuActive();
}

function openMultiGenerateConfirm() {
  startMultiGeneration();
}

function confirmMultiGenerate() {
  closePrototypeModals();
  startMultiGeneration();
}

function goCreateWithTemplate(templateId) {
  const template = getTemplate(templateId);
  if (!template) return;
  const replicaTemplate = createSuiteReplicaTemplateFromTemplate(template);
  const product = createReplicaProductFromTemplate(template, replicaTemplate.cover);
  openSuiteReplicaEditor("creation-plaza", {
    product,
    template: replicaTemplate,
    step: "generate",
    templateEntry: true,
    referenceSource: "template",
    referenceMode: "template"
  });
  showToast(`已选择套图模板「${template.name}」，进入复刻生图详情`);
}

function createReplicaProductFromTemplate(template, fallbackImage = "assets/product-cover-03.png") {
  const image = template.items?.find((item) => item.image)?.image || fallbackImage;
  return {
    id: `suite-template-product-${template.id}`,
    name: "待替换商品图",
    category: template.category || "其他",
    image,
    images: [{ url: image, name: "商品图" }],
    materialCount: 1,
    isLocal: true
  };
}

function createSuiteReplicaTemplateFromTemplate(template) {
  const items = getEnabledTemplateItems(template.items || []);
  const pages = items.map((item, index) => ({
    id: item.id || `suite-template-page-${index + 1}`,
    title: item.title || `参考图 ${index + 1}`,
    image: item.image || "assets/product-cover-03.png",
    fixed: item.purpose === "固定插入"
  }));
  return {
    id: `suite-template-${template.id}`,
    name: template.name,
    category: template.category || "套图模板",
    description: template.description || "按模板页面结构复刻生成整套图片。",
    cover: pages[0]?.image || "assets/product-cover-03.png",
    pages: pages.length ? pages : [{ id: `suite-template-page-${template.id}`, title: template.name, image: "assets/product-cover-03.png" }]
  };
}

function openSuiteSolutionBuilder(solutionId = "") {
  const solution = solutionId ? suiteSolutions.find((item) => item.id === solutionId) : null;
  resetTemplateBuilder(solution, "solution");
  clearMenuActive();
  document.querySelector('[data-single-menu="模板"]')?.classList.add("active");
  openTemplateBuilderModal();
  showToast(solution ? "已进入套图模板编辑页" : "已新增套图模板");
}

function goCreateWithSuiteSolution(solutionId) {
  const solution = suiteSolutions.find((item) => item.id === solutionId);
  if (!solution) return;
  const template = {
    id: `replica-${solution.id}`,
    name: solution.name,
    category: solution.category || "套图模板",
    description: solution.description || "按模板页面顺序复刻整套图片。",
    cover: solution.items?.[0]?.image || "assets/creation-cover-608.jpg",
    pages: (solution.items || []).map((item, index) => ({
      id: item.id || `replica-page-${index + 1}`,
      title: item.title || `参考图 ${index + 1}`,
      image: item.image || "assets/creation-cover-608.jpg"
    }))
  };
  openSuiteReplicaEditor("suite-solution-library", {
    template,
    step: "generate",
    templateEntry: true,
    referenceSource: "template",
    referenceMode: "template"
  });
  showToast(`已进入「${solution.name}」多图复刻详情页`);
}

function buildResourceTemplate(card) {
  const title = card.dataset.title || "创作广场模板";
  const category = card.dataset.category || "未分类";
  const source = card.dataset.source || "创作广场";
  const prompt = card.dataset.prompt || "";
  const coverImage = card.querySelector(".resource-cover img")?.getAttribute("src") || "assets/product-cover-01.png";
  const isSuite = card.dataset.type === "套图模板";
  const groups = isSuite ? ["主图", "详情图", "SKU图"] : ["主图", "详情图"];
  const idPrefix = `resource-${title.replace(/\s+/g, "-")}`;

  return {
    id: idPrefix,
    fromResource: true,
    name: title,
    description: prompt,
    category,
    brand: source,
    scope: source === "官方" ? "已购模板" : "我的模板",
    groups,
    usage: 0,
    updatedAt: "2026-07-17 15:00",
    tags: groups,
    items: groups.map((group, index) => ({
      id: `${idPrefix}-${index}`,
      title: `${title}${group}`,
      group,
      purpose: "参考生成",
      source: "创作广场",
      image: index === 0 ? coverImage : `assets/product-cover-0${Math.min(index + 1, 4)}.png`,
      ratio: inferTemplateItemRatio({ group, purpose: "参考生成", source: "创作广场" }),
      enabled: true
    }))
  };
}

function openResourceTemplateCreation(card) {
  const template = buildResourceTemplate(card);
  setupMultiImageCreationWithTemplate(template, "creation-plaza");
  showToast(`已进入「${template.name}」模板创作详情`);
}

function openTemplatePublish(templateId) {
  const template = getTemplate(templateId);
  if (!template) return;
  openSuiteTemplatePublish(template);
}

function openSuiteSolutionPublish(solutionId) {
  const solution = suiteSolutions.find((item) => item.id === solutionId);
  if (!solution) return;

  openSuiteTemplatePublish(solution);
}

function openSuiteTemplatePublish(template) {
  const modal = document.querySelector("[data-suite-template-publish-modal]");
  const name = modal?.querySelector("[data-suite-template-publish-name]");
  const preview = modal?.querySelector("[data-suite-template-publish-preview]");
  const price = modal?.querySelector("[data-suite-template-publish-price]");
  if (!modal || !name || !preview || !price) return;
  state.publishTemplate = template;
  state.publishMaterial = null;
  name.textContent = template.name;
  preview.src = template.items?.[0]?.image || "assets/product-cover-03.png";
  price.value = Number.isInteger(template.marketPrice) ? template.marketPrice : 0;
  openPrototypeModal(modal);
}

function submitTemplatePublish() {
  const target = state.publishMaterial || state.publishTemplate;
  if (!target) return;
  const suitePublishModal = document.querySelector("[data-suite-template-publish-modal]");
  const isSuiteTemplatePublish = state.publishTemplate === target && suitePublishModal?.classList.contains("is-open");
  const priceInput = document.querySelector("[data-suite-template-publish-price]");
  if (isSuiteTemplatePublish && priceInput) {
    const price = Number(priceInput.value);
    if (!Number.isInteger(price) || price < 0 || price > 9999) {
      showToast("请输入 0–9999 的整数");
      priceInput.focus();
      return;
    }
    target.marketPrice = price;
  }
  target.status = isSuiteTemplatePublish ? "已上架" : "审核中";
  target.updatedAt = "2026-07-10 15:30";
  filterTemplates();
  filterSuiteSolutions();
  filterMaterials();
  state.publishTemplate = null;
  state.publishMaterial = null;
  closePrototypeModals();
  closeDrawer();
  showToast(isSuiteTemplatePublish ? "已发布到 AI 图片广场" : "已提交上架审核");
}

function creationRelationText() {
  const relations = [];
  if (state.creation.productUploaded) relations.push(`商品图 ${state.creation.productImages?.length || 1} 张`);
  if (state.creation.referenceUploaded) relations.push("参考图 1 张");
  if (state.creation.modelUploaded) relations.push(`模特 ${state.creation.modelNames?.length || 1} 位`);
  if (state.creation.template) relations.push(state.creation.template);
  return relations.length ? relations.join(" / ") : "无关联素材";
}

function resultImagesMarkup() {
  return [
    "assets/product-cover-01.png",
    "assets/product-cover-02.png",
    "assets/product-cover-03.png",
    "assets/product-cover-04.png"
  ].map((image, index) => `
    <figure class="module-task-result-card">
      <button class="module-task-image-preview" type="button" data-module-task-image-preview="${image}" data-module-task-image-alt="生成结果 ${index + 1}" aria-label="放大预览生成结果 ${index + 1}"><img src="${image}" alt="生成结果 ${index + 1}"></button>
      <div class="module-result-actions" aria-label="生成结果 ${index + 1} 操作">
        <button type="button" data-free-task-image-action="outpaint" data-free-task-image="${image}" title="智能扩图" aria-label="智能扩图第 ${index + 1} 张">智能扩图</button>
        <button type="button" data-free-task-image-action="text" data-free-task-image="${image}" title="文案编辑" aria-label="文案编辑第 ${index + 1} 张">文案编辑</button>
        <button class="is-primary" type="button" data-free-task-image-action="download" data-free-task-image="${image}" title="下载" aria-label="下载第 ${index + 1} 张">下载</button>
      </div>
    </figure>`).join("");
}

function addTaskToBoutique(card) {
  if (!card) return null;
  const existingId = card.dataset.boutiqueAssetId;
  if (existingId) return getMaterial(existingId);

  const taskTitle = card.dataset.title || "未命名创作结果";
  const taskTags = [...card.querySelectorAll(".creation-task-tags span")].map((tag) => tag.textContent.trim());
  const category = taskTags.find((tag) => tag.includes("/")) || taskTags[0] || "通用";
  const image = card.querySelector(".creation-task-thumb img")?.getAttribute("src") || "assets/product-cover-03.png";
  const material = {
    id: `boutique-${Date.now()}-${materialLibrary.length + 1}`,
    name: taskTitle,
    type: "精品图片",
    assetType: card.dataset.type || "单图生成",
    taskType: normalizeCreationTaskType(card.dataset.type),
    aiToolType: getCreationTaskAiToolType(card),
    sourceTaskKey: ensureBoutiqueTaskKey(card),
    category,
    relatedProduct: card.dataset.product || "未关联商品",
    source: "创作记录",
    status: "已入库",
    usage: 0,
    updatedAt: "刚刚",
    image,
    tone: "image",
    spec: "精品图片 / 可作为参考素材",
    scene: "自由创作、参考图复刻、套图模板创作",
    description: "来自创作记录的已确认图片，可作为参考素材带入下一次创作。",
    records: [taskTitle],
    tags: ["精品图", "创作记录", category]
  };
  materialLibrary.unshift(material);
  card.dataset.boutiqueAssetId = material.id;
  return material;
}

function updateTaskBoutiqueState(card, state = "saved", count = "") {
  if (!card) return;
  card.dataset.boutiqueState = state;
  const label = state === "partial" ? `已加入 ${count || "部分"}` : "已加入精品库";
  let badge = card.querySelector("[data-boutique-status]");
  if (!badge) {
    badge = document.createElement("span");
    badge.dataset.boutiqueStatus = "";
    const titleRow = card.querySelector(".creation-task-title-row");
    titleRow?.append(badge);
  }
  if (badge) {
    badge.className = `creation-task-boutique-state ${state}`;
    badge.textContent = label;
  }
  const action = card.querySelector("[data-add-to-boutique]");
  if (action) {
    const boutiqueAction = document.createElement("span");
    boutiqueAction.className = "creation-task-boutique-action";
    boutiqueAction.dataset.boutiqueAction = "";
    boutiqueAction.textContent = "已加入精品库";
    action.replaceWith(boutiqueAction);
  }
}

document.querySelectorAll('[data-creation-task-card][data-boutique-state="saved"], [data-creation-task-card][data-boutique-state="partial"]').forEach(addTaskToBoutique);

function appendSingleImageTaskRecord({ title, mode }) {
  if (!els.creationTaskFlow) return null;
  const taskType = mode === "自由创作" ? "自由创作" : "复刻生图";
  const card = document.createElement("article");
  card.className = "creation-task-card";
  card.dataset.creationTaskCard = "";
  card.dataset.status = "running";
  card.dataset.type = taskType;
  card.dataset.title = title;
  card.dataset.product = state.creation.category;
  card.dataset.boutiqueState = "none";
  card.innerHTML = `
    <div class="creation-task-thumb single">
      <img src="assets/product-cover-03.png" alt="">
      <span class="creation-task-type">${taskType === "复刻生图" ? "复刻" : "自由"}</span>
    </div>
    <div class="creation-task-main">
      <div class="creation-task-title-row"><h2>${title}</h2><span class="creation-task-status running">生成中</span></div>
      <div class="creation-task-meta"><span>4 张图</span><span>正在解析创作条件</span><span>刚刚</span></div>
      <div class="creation-task-tags"><span>${state.creation.category}</span><span>${state.creation.ratio}</span><span>${taskType}</span></div>
      <div class="creation-task-progress"><span>任务正在后台生成，可在创作记录继续查看</span><div class="creation-task-progress-line"><i style="width: 42%;"></i></div></div>
    </div>
    <div class="creation-task-action"><button class="btn primary" type="button" data-open-creation-detail>查看详情</button></div>
  `;
  els.creationTaskFlow.prepend(card);
  els.creationTaskCards = Array.from(document.querySelectorAll("[data-creation-task-card]"));
  window.setTimeout(() => {
    if (!card.isConnected) return;
    card.dataset.status = "done";
    const status = card.querySelector(".creation-task-status");
    if (status) {
      status.className = "creation-task-status done";
      status.textContent = "已完成";
    }
    const progress = card.querySelector(".creation-task-progress");
    if (progress) progress.remove();
    const meta = card.querySelector(".creation-task-meta");
    if (meta) meta.innerHTML = `<span>4 张图</span><span>已完成 4/4</span><span>刚刚</span>`;
  }, 2000);
  return card;
}

function appendAssetCreationTask({ type, title, assetLabel, image = "assets/creation-cover-608.jpg" }) {
  if (!els.creationTaskFlow) return null;
  const card = document.createElement("article");
  card.className = "creation-task-card";
  card.dataset.creationTaskCard = "";
  card.dataset.status = "running";
  card.dataset.type = type;
  card.dataset.title = title;
  card.dataset.product = state.creation.category;
  card.innerHTML = `
    <div class="creation-task-thumb single"><img src="${image}" alt=""><span class="creation-task-type">${type}</span></div>
    <div class="creation-task-main">
      <div class="creation-task-title-row"><h2>${title}</h2><span class="creation-task-status running">生成中</span></div>
      <div class="creation-task-meta"><span>正在处理</span><span>刚刚</span></div>
      <div class="creation-task-tags"><span>${type}</span><span>${state.creation.category}</span></div>
      <div class="creation-task-progress"><span>任务正在后台执行，可在创作记录继续查看</span><div class="creation-task-progress-line"><i style="width: 48%;"></i></div></div>
    </div>
    <div class="creation-task-action"><button class="btn primary" type="button" data-open-creation-detail>查看详情</button></div>
  `;
  els.creationTaskFlow.prepend(card);
  els.creationTaskCards = Array.from(document.querySelectorAll("[data-creation-task-card]"));
  window.setTimeout(() => {
    if (!card.isConnected) return;
    card.dataset.status = "done";
    const status = card.querySelector(".creation-task-status");
    if (status) {
      status.className = "creation-task-status done";
      status.textContent = "已完成";
    }
    card.querySelector(".creation-task-progress")?.remove();
    const titleRow = card.querySelector(".creation-task-title-row");
    titleRow?.insertAdjacentHTML("beforeend", `<span class="creation-task-boutique-state asset" data-boutique-status>${assetLabel}</span>`);
  }, 1200);
  return card;
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
  statusNode.className = `module-task-status ${status === "done" ? "done" : ""}`;
  statusNode.textContent = statusMap[status];
  if (status === "done") {
    resultNode.className = "module-task-result-grid";
    resultNode.innerHTML = resultImagesMarkup();
  } else {
    resultNode.className = "module-task-result-grid";
    resultNode.innerHTML = "<em>等待生成</em>";
  }
}

function createGenerationRecord() {
  const mode = getCreationMode();
  const prompt = els.creationPrompt.value.trim();
  if (mode === "待识别" || (mode === "自由创作" && !prompt && !state.creation.productUploaded)) {
    showToast("请先填写创作描述或上传商品图");
    return;
  }
  if (mode === "参考图复刻" && (!state.creation.productUploaded || !state.creation.referenceUploaded)) {
    showToast("参考图复刻请先上传商品图和主参考图");
    return;
  }

  state.creation.recordSeq += 1;
  state.creation.submittedAt = formatDetailSubmitTime();
  const title = state.creation.template || `${state.creation.category}${mode}`;
  const taskId = 19501 + state.creation.recordSeq;
  const description = prompt || `${state.creation.category}商品图，按${mode}生成。`;
  const referenceImages = state.creation.referenceUploaded
    ? [{ url: singleReplicaState.reference?.image || referencePickerSelection?.image || "assets/product-cover-03.png", label: "参考图" }]
    : (state.creation.productImages || []).slice(0, 2).map((item, index) => ({
      url: item.image,
      label: "商品图",
      index: index + 1
    }));
  els.creationRecordList?.querySelectorAll(".module-task-item.is-active").forEach((item) => {
    item.classList.remove("is-active");
    item.querySelector(".module-task-summary")?.setAttribute("aria-expanded", "false");
  });
  const record = document.createElement("article");
  record.className = "creation-record module-task-item is-active";
  record.innerHTML = `
    <div class="module-task-summary" role="button" tabindex="0" aria-expanded="true" data-open-creation-detail>
      <div class="module-task-item-head"><h3>任务ID：${taskId}</h3><span class="module-task-status" data-record-status>排队中</span></div>
      <dl class="module-task-meta-list">
        <div><dt>描述文案</dt><dd class="module-task-prompt"><span>${description}</span><button type="button" data-free-task-copy aria-label="复制描述文案">复制</button></dd></div>
        <div><dt>参考素材</dt><dd>${referenceImages.length} 张</dd></div>
        <div><dt>提交时间</dt><dd>${state.creation.submittedAt}</dd></div>
      </dl>
    </div>
    <div class="module-task-detail">
      <div class="module-task-reference-row">
        <button type="button" data-free-task-reference-toggle aria-expanded="false">参考图（${referenceImages.length}）<i>展开</i></button>
        <div hidden>${referenceImages.length ? referenceImages.map((item, index) => `<button class="module-task-image-preview" type="button" data-module-task-image-preview="${item.url}" data-module-task-image-alt="${item.label} ${index + 1}" aria-label="放大预览${item.label} ${index + 1}"><img src="${item.url}" alt="${item.label} ${index + 1}"></button>`).join("") : "<em>未上传参考图</em>"}</div>
      </div>
      <div class="module-task-result-row">
        <span>生成结果</span>
        <div class="module-task-result-grid" data-record-result><em>等待生成</em></div>
      </div>
    </div>
  `;
  els.creationRecordList.prepend(record);
  updateFreeCreationTaskCount();
  appendSingleImageTaskRecord({ title, mode });
  syncDetailParamsFromCreation(prompt);
  setWorkspacePage("creation-detail");
  appendDetailTask({ initial: true, prompt });
  showToast("已进入自由创作详情");
  window.setTimeout(() => updateCreationRecord(record, "running"), 700);
  window.setTimeout(() => {
    updateCreationRecord(record, "done");
  }, 1900);
}

function useResource(card) {
  if (card.dataset.type === "模板" || card.dataset.type === "套图模板") {
    openResourceTemplateCreation(card);
    return;
  }

  setWorkspacePage("creation-plaza");
  clearMenuActive();
  document.querySelector('[data-single-menu="创作中心"]').classList.add("active");
  setCreationCategory(card.dataset.category);

  els.creationPrompt.value = card.dataset.prompt;
  setCreationUpload("reference", true);

  updateCreationMode();
  showToast(`已使用资源：${card.dataset.title}`);
}

function openResourcePreview(card) {
  state.previewResourceCard = card;
  state.previewMaterial = null;
  setPreviewMetaLabels({ price: "费用", fit: "模块功能描述" });
  const image = card.querySelector(".resource-cover img");
  const moduleTypeMap = {
    模板: "图片创作模块",
    单图案例: "图片创作模块",
    套图模板: "模块模板",
    模特: "模特模块",
    素材模块: "文字素材模块"
  };
  document.querySelector("[data-preview-title]").textContent = card.dataset.title;
  document.querySelector("[data-preview-image]").src = image?.getAttribute("src") || "";
  document.querySelector("[data-preview-category]").textContent = card.dataset.category;
  document.querySelector("[data-preview-type]").textContent = moduleTypeMap[card.dataset.type] || card.dataset.type || "图片创作模块";
  document.querySelector("[data-preview-price]").textContent = card.dataset.price || "-";
  document.querySelector("[data-preview-description]").textContent = card.dataset.prompt || "--";
  const previewUseButton = document.querySelector("[data-preview-use]");
  if (previewUseButton) previewUseButton.hidden = true;
  openPrototypeModal(els.resourcePreviewModal);
}

function openResourcePurchase(card) {
  if (!card || card.dataset.purchased === "true") return;
  state.purchaseResourceCard = card;
  const title = card.dataset.title || "该资源";
  const price = card.dataset.price || "10 融豆";
  const isFree = price === "免费";
  document.querySelector("[data-purchase-title]").textContent = isFree ? "确认使用资源" : "确认购买资源";
  document.querySelector("[data-purchase-name]").textContent = `「${title}」`;
  document.querySelector("[data-purchase-price]").textContent = price;
  document.querySelector("[data-purchase-message]").innerHTML = isFree
    ? "该资源免费，确认后即可使用。"
    : `本次购买将消耗 <strong data-purchase-price>${price}</strong>，购买后即可使用该资源。`;
  openPrototypeModal(els.resourcePurchaseModal);
}

function markResourcePurchased(card) {
  if (!card) return;
  card.dataset.purchased = "true";
  const button = card.querySelector("[data-resource-use]");
  if (!button) return;
  button.textContent = "已购买";
  button.disabled = true;
  button.dataset.resourcePurchased = "true";
  button.setAttribute("aria-label", `已购买${card.dataset.title || "资源"}`);
}

function renderModelCard(model, index) {
  return `
    <article class="model-card ${index === 0 ? "featured" : ""}" data-model-id="${model.id}" data-model-action="view">
      <div class="model-image model-visual">
        <img src="${model.image}" alt="">
        <div class="brand-asset-hover-actions model-card-hover-actions" aria-label="模特操作">
          <button type="button" data-model-action="publish" title="发布到 AI 图片广场" aria-label="发布到 AI 图片广场"><img src="assets/brand-action-publish.png" alt=""></button>
          <button type="button" data-model-action="edit" title="编辑" aria-label="编辑"><img src="assets/brand-action-edit.png" alt=""></button>
          <button type="button" data-model-action="delete" title="删除" aria-label="删除"><img src="assets/brand-action-delete.png" alt=""></button>
        </div>
      </div>
      <div class="model-card-body">
        <div class="model-card-title-row"><h3>${model.name}</h3></div>
        <div class="model-card-info"><span>${model.gender} · ${model.age}</span><span>创作人：${model.creator || "AI 模特工场"}</span></div>
        <div class="model-card-actions">
          <button class="primary-action" type="button" data-model-action="use">创作引用</button>
        </div>
      </div>
    </article>
  `;
}

function filterModels() {
  const { name, creator, age, gender, skin } = state.modelQuery;
  const keyword = name.trim().toLowerCase();
  const creatorKeyword = creator.trim().toLowerCase();
  state.filteredModels = state.models.filter((model) => {
    const modelCreator = model.creator || "AI 模特工场";
    const modelSkin = model.skin || "自然肤色";
    const text = [model.name, model.gender, model.age, model.race, model.style, model.category, modelCreator, modelSkin, ...model.tags].join(" ").toLowerCase();
    return (!keyword || text.includes(keyword))
      && (!creatorKeyword || modelCreator.toLowerCase().includes(creatorKeyword))
      && (!age || model.age === age)
      && (!gender || model.gender === gender)
      && (!skin || modelSkin === skin);
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
  const detailImage = "assets/model-detail-source.png";
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
  return document.querySelector(".model-create-panel");
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
  const addToLibrary = panel.querySelector("[data-model-add-library]");
  const generate = panel.querySelector("[data-model-generate]");
  if (addToLibrary) addToLibrary.disabled = !state.modelPreviewReady || !isModelFormReady();
  if (generate) generate.disabled = !isModelFormReady();
}

function setModelCreateState(createState) {
  const panel = getModelCreatePanel();
  if (!panel) return;
  panel.dataset.modelCreateState = createState;
  const generateButton = panel.querySelector("[data-model-generate]");
  const addToLibraryButton = panel.querySelector("[data-model-add-library]");
  state.modelPreviewReady = createState === "complete";
  if (generateButton) {
    const label = generateButton.querySelector("[data-model-generate-label]");
    const buttonText = createState === "generating" ? "正在生成..." : createState === "failed" ? "重新编辑" : "生成模特图";
    if (label) label.textContent = buttonText;
    else generateButton.textContent = buttonText;
    generateButton.disabled = createState === "generating";
  }
  if (addToLibraryButton) addToLibraryButton.disabled = !state.modelPreviewReady || !isModelFormReady();
}

function updateModelResultSubmittedAt() {
  const submittedAt = document.querySelector("[data-model-result-submitted-at]");
  if (submittedAt) submittedAt.textContent = `提交时间：${state.modelPreviewSubmittedAt || "--"}`;
}

function resetModelCreateModal() {
  const panel = getModelCreatePanel();
  if (!panel) return;
  window.clearTimeout(state.modelCreateTimer);
  state.modelPreviewReady = false;
  state.modelPreviewSubmittedAt = "";
  state.modelReferenceImage = "";
  panel.querySelector("[data-model-prompt]").value = "";
  panel.querySelector(".model-text-reference")?.classList.remove("is-uploaded", "is-analyzed");
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
  updateModelResultSubmittedAt();
  updateModelCreateSummary();
}

function openModelCreateModal() {
  const panel = getModelCreatePanel();
  const host = document.querySelector("[data-model-create-page-host]");
  if (!panel || !host) return;
  host.append(panel);
  resetModelCreateModal();
  setWorkspacePage("model-create-page");
  clearMenuActive();
  document.querySelector('[data-single-menu="资产库"]')?.classList.add("active");
}

function openModelCreateWithReference(image) {
  openModelCreateModal();
  if (image) setModelReferenceUploaded(image);
}

function leaveModelCreatePage() {
  const panel = getModelCreatePanel();
  if (panel && els.modelCreateModal) els.modelCreateModal.append(panel);
  setModelCreateTaskDrawer(false);
  closePrototypeModal(els.modelConfirmModal);
  setWorkspacePage("model-library");
  clearMenuActive();
  document.querySelector('[data-single-menu="资产库"]')?.classList.add("active");
  filterModels();
}

function updateModelCreateTaskCount() {
  const count = document.querySelector("[data-model-create-task-count]");
  const list = document.querySelector("[data-model-create-task-list]");
  if (count && list) count.textContent = String(list.querySelectorAll(".model-create-task-item").length);
}

function setModelCreateTaskDrawer(open) {
  const panel = document.querySelector("[data-model-create-task-drawer-panel]");
  const mask = document.querySelector("[data-model-create-task-mask]");
  const trigger = document.querySelector("[data-model-create-task-drawer]");
  panel?.classList.toggle("is-open", open);
  mask?.classList.toggle("is-open", open);
  panel?.setAttribute("aria-hidden", String(!open));
  trigger?.setAttribute("aria-expanded", String(open));
}

function appendModelCreateTask(status = "generating") {
  const list = document.querySelector("[data-model-create-task-list]");
  if (!list) return;
  const snapshot = getModelCreateSnapshot();
  const taskId = `model-task-${Date.now()}`;
  const taskCode = `MT${formatModelTimestamp().replace(/[- :]/g, "")}${String(Date.now()).slice(-6)}`;
  const referenceImage = state.modelReferenceImage || "assets/model-detail-source.png";
  const outputImage = "assets/model-detail-source.png";
  const genderLabel = snapshot.gender === "女性" ? "女" : snapshot.gender === "男性" ? "男" : snapshot.gender;
  state.modelCreateTaskId = taskId;
  list.querySelector(".model-create-task-empty")?.remove();
  const item = document.createElement("article");
  item.className = "model-create-task-item";
  item.dataset.modelCreateTaskId = taskId;
  item.dataset.modelCreateTaskStatus = status;
  item.innerHTML = `
    <div class="model-create-task-item-head">
      <div><h3>ID: ${taskCode}</h3><p>提交时间：${formatModelTimestamp()}</p></div>
      <span class="is-${status}" data-model-task-status>${status === "complete" ? "✓ 已完成" : "生成中"}</span>
    </div>
    <details class="model-create-task-detail" open>
      <summary><span>参考图（1）</span><em>收起参考图</em></summary>
      <img class="model-create-task-reference" src="${referenceImage}" alt="参考图">
    </details>
    <details class="model-create-task-detail" open>
      <summary><span>分析结果</span><em>收起分析结果</em></summary>
      <div class="model-create-task-analysis">
        <div><span>性别</span><strong>${genderLabel}</strong></div>
        <div><span>年龄段</span><strong>${snapshot.age}</strong></div>
        <div><span>肤色</span><strong>${snapshot.skin}</strong></div>
      </div>
    </details>
    <div class="model-create-task-output-title"><span>◇</span>输出结果</div>
    <img class="model-create-task-output" src="${outputImage}" alt="模特生成结果">
    <div class="model-create-task-actions">
      <button type="button" data-model-task-regenerate>重新编辑</button>
      <button type="button" data-model-task-add-library>添加到模特库</button>
    </div>
  `;
  list.prepend(item);
  updateModelCreateTaskCount();
}

function finishModelCreateTask() {
  const item = document.querySelector(`[data-model-create-task-id="${state.modelCreateTaskId}"]`);
  if (!item) return;
  const status = item.querySelector("[data-model-task-status]");
  item.dataset.modelCreateTaskStatus = "complete";
  if (status) { status.className = "is-complete"; status.textContent = "✓ 已完成"; }
}

function renderModelReferenceLibrary() {
  const grid = document.querySelector("[data-model-reference-library-grid]");
  if (!grid) return;
  grid.innerHTML = state.models.slice(0, 8).map((model) => `
    <button class="model-reference-library-card" type="button" data-model-reference-select="${model.id}">
      <img src="${model.image}" alt="${model.name}">
      <span>${model.name}</span>
      <i>选择</i>
    </button>
  `).join("");
}

function setModelReferencePickerSource(source) {
  state.modelReferencePickerSource = source;
  document.querySelectorAll("[data-model-reference-source]").forEach((button) => {
    const active = button.dataset.modelReferenceSource === source;
    button.classList.toggle("is-active", active);
    button.setAttribute("aria-selected", String(active));
  });
  document.querySelectorAll("[data-model-reference-source-panel]").forEach((panel) => {
    const active = panel.dataset.modelReferenceSourcePanel === source;
    panel.hidden = !active;
    panel.classList.toggle("is-active", active);
  });
  if (source === "library") renderModelReferenceLibrary();
}

function openModelReferencePicker() {
  setModelReferencePickerSource("local");
  openPrototypeModal(els.modelReferencePickerModal);
}

function closeModelReferencePicker() {
  closePrototypeModal(els.modelReferencePickerModal);
}

function applyModelReferenceAnalysis(image = "") {
  const panel = getModelCreatePanel();
  if (!panel) return;
  if (image) state.modelReferenceImage = image;
  const referenceImage = panel.querySelector(".model-ref-preview img");
  if (referenceImage && state.modelReferenceImage) referenceImage.src = state.modelReferenceImage;
  const reference = panel.querySelector(".model-text-reference");
  reference?.classList.remove("is-uploaded");
  reference?.classList.add("is-analyzed");
  const status = panel.querySelector("[data-model-reference-status]");
  if (status) status.textContent = "已解析";
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
  showToast("解析完成，已扣除 1 融豆并填入模特生成配置");
}

function setModelReferenceUploaded(image = "") {
  const panel = getModelCreatePanel();
  if (!panel || !image) return;
  state.modelReferenceImage = image;
  const referenceImage = panel.querySelector(".model-ref-preview img");
  if (referenceImage) referenceImage.src = image;
  const reference = panel.querySelector(".model-text-reference");
  reference?.classList.remove("is-analyzed");
  reference?.classList.add("is-uploaded");
  const status = panel.querySelector("[data-model-reference-status]");
  if (status) status.textContent = "待解析";
}

function removeModelReferenceAnalysis() {
  const panel = getModelCreatePanel();
  if (!panel) return;
  state.modelReferenceImage = "";
  panel.querySelector(".model-text-reference")?.classList.remove("is-uploaded", "is-analyzed");
  updateModelCreateSummary();
  showToast("参考图已删除");
}

function consumeModelAnalysisCredit() {
  if (state.rongdouBalance < 1) {
    showToast("融豆不足，无法解析图片");
    return false;
  }
  state.rongdouBalance -= 1;
  const balance = document.querySelector("[data-rongdou-balance]");
  if (balance) balance.textContent = String(state.rongdouBalance);
  return true;
}

function startModelPreviewGeneration() {
  if (!isModelFormReady()) {
    showToast("请先选择年龄分段、性别、人种、肤色");
    return;
  }
  window.clearTimeout(state.modelCreateTimer);
  state.modelPreviewSubmittedAt = formatModelTimestamp();
  updateModelResultSubmittedAt();
  appendModelCreateTask("generating");
  setModelCreateState("generating");
  state.modelCreateTimer = window.setTimeout(() => {
    const image = getModelCreatePanel()?.querySelector("[data-model-preview-image]");
    if (image) image.src = "assets/model-detail-source.png";
    setModelCreateState("complete");
    finishModelCreateTask();
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
  const modal = els.modelConfirmModal;
  if (!modal) return;
  const snapshot = getModelCreateSnapshot();
  const fields = {
    "[data-model-library-confirm-name]": snapshot.name,
    "[data-model-library-confirm-gender]": snapshot.gender,
    "[data-model-library-confirm-age]": snapshot.age,
    "[data-model-library-confirm-note]": snapshot.prompt || `${snapshot.gender}${snapshot.age}，${snapshot.style}风格，适合${snapshot.category}图片创作。`
  };
  Object.entries(fields).forEach(([selector, value]) => {
    const input = modal.querySelector(selector);
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
  const attributeBox = modal.querySelector("[data-model-library-ai-attributes]");
  if (attributeBox) {
    attributeBox.innerHTML = "";
    attributes.forEach((item) => {
      const tag = document.createElement("span");
      tag.className = "model-ai-attribute";
      tag.textContent = item;
      attributeBox.append(tag);
    });
  }

  const image = getModelCreatePanel()?.querySelector("[data-model-preview-image]")?.src;
  const preview = modal.querySelector("[data-model-confirm-preview]");
  if (preview && image) preview.src = image;
}

function openModelLibraryConfirmModal() {
  if (!state.modelPreviewReady) {
    showToast("请先生成模特图");
    return;
  }
  const title = els.modelConfirmModal?.querySelector("#model-confirm-title");
  if (title) title.textContent = "确认模特信息";
  const modal = els.modelConfirmModal;
  if (modal) {
    modal.dataset.modelModalMode = "create";
    const submit = modal.querySelector("[data-model-library-confirm-submit]");
    if (submit) submit.textContent = "确认添加到模特库";
  }
  populateModelConfirmFields();
  openPrototypeModal(els.modelConfirmModal);
}

function openModelLibraryDetailModal(modelId) {
  const model = state.models.find((item) => item.id === modelId);
  const modal = els.modelConfirmModal;
  if (!model || !modal) return;
  state.activeModel = model;
  modal.dataset.modelModalMode = "detail";
  const title = modal.querySelector("#model-confirm-title");
  if (title) title.textContent = "模特详情";
  const submit = modal.querySelector("[data-model-library-confirm-submit]");
  if (submit) submit.textContent = "确认";
  const fields = {
    "[data-model-library-confirm-name]": model.name,
    "[data-model-library-confirm-gender]": model.gender,
    "[data-model-library-confirm-age]": model.age,
    "[data-model-library-confirm-note]": model.note || `${model.gender}${model.age}，适合${model.category || "服装、箱包、配饰"}图片创作。`
  };
  Object.entries(fields).forEach(([selector, value]) => {
    const input = modal.querySelector(selector);
    if (input) input.value = value || "";
  });
  const preview = modal.querySelector("[data-model-confirm-preview]");
  if (preview) preview.src = model.image;
  const attributeBox = modal.querySelector("[data-model-library-ai-attributes]");
  if (attributeBox) {
    const attributes = [
      `性别 ${model.gender}`,
      `年龄 ${model.age}`,
      model.style ? `风格 ${model.style}` : "",
      model.race ? `人种 ${model.race}` : "",
      model.skin ? `肤色 ${model.skin}` : ""
    ].filter(Boolean);
    attributeBox.innerHTML = attributes.map((item) => `<span class="model-ai-attribute">${item}</span>`).join("");
  }
  openPrototypeModal(modal);
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
  const panel = els.modelConfirmModal;
  if (!panel) return;
  const submit = panel.querySelector("[data-model-library-confirm-submit]");
  if (submit) submit.textContent = "确认添加到模特库";
  const snapshot = getModelCreateSnapshot();
  const name = panel.querySelector("[data-model-library-confirm-name]")?.value.trim() || snapshot.name;
  const gender = panel.querySelector("[data-model-library-confirm-gender]")?.value.trim() || snapshot.gender;
  const age = panel.querySelector("[data-model-library-confirm-age]")?.value.trim() || snapshot.age;
  const style = snapshot.style;
  const category = snapshot.category;
  const note = panel.querySelector("[data-model-library-confirm-note]")?.value.trim() || snapshot.prompt;
  if (!name) {
    showToast("请填写模特名称");
    return;
  }
  const image = getModelCreatePanel()?.querySelector("[data-model-preview-image]")?.src || "assets/model-cover-black-dress.png";
  const createdAt = formatModelTimestamp();
  const styleTags = splitModelTokens(style);
  const model = {
    id: `m${Date.now()}`,
    name,
    gender,
    age,
    race: snapshot.raceLabel,
    skin: snapshot.skin,
    style,
    category,
    creator: "AI 模特工场",
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
  appendAssetCreationTask({
    type: "模特创建",
    title: `${name}创建`,
    assetLabel: "已保存至模特库",
    image
  });
  filterModels();
  leaveModelCreatePage();
  showToast("模特已添加到模特库");
}

document.querySelectorAll(".nav-group").forEach((group) => {
  group.addEventListener("click", () => {
    setNavGroupExpanded(group, group.classList.contains("collapsed"));
  });
});

document.querySelectorAll("[data-module-template-page]").forEach((button) => {
  button.addEventListener("click", () => {
    const page = button.dataset.moduleTemplatePage;
    if (page === "module-library") openModuleLibrary();
    if (page === "template-center") openModuleTemplateLibrary();
    if (page === "suite-solution-library") openSuiteTemplateLibrary();
  });
});

document.querySelectorAll("[data-single-menu]").forEach((button) => {
  button.addEventListener("click", () => {
    clearMenuActive();
    button.classList.add("active");
    if (button.dataset.singleMenu === "创作中心") {
      setWorkspacePage("creation-plaza");
      openCreationEntry("multi-replica");
      return;
    }
    if (button.dataset.singleMenu === "AI广场") {
      setWorkspacePage("inspiration-plaza");
      return;
    }
    if (button.dataset.singleMenu === "模板") {
      openModuleLibrary();
      return;
    }
    if (button.dataset.singleMenu === "资产库") {
      setWorkspacePage("model-library");
      return;
    }
    if (button.dataset.singleMenu === "创作记录") {
      openCreationRecordsPage();
      return;
    }
    if (button.dataset.singleMenu === "AI工具") {
      setWorkspacePage("ai-tools");
      return;
    }
  });
});

document.querySelectorAll("[data-asset-library-tab]").forEach((button) => {
  button.addEventListener("click", () => {
    setWorkspacePage(button.dataset.assetLibraryTab);
    clearMenuActive();
    document.querySelector('[data-single-menu="资产库"]')?.classList.add("active");
  });
});

document.querySelectorAll("[data-ecommerce-video]").forEach((button) => {
  button.addEventListener("click", () => {
    showToast("AI电商视频功能即将上线");
  });
});

els.creationCategories.forEach((button) => {
  button.addEventListener("click", () => {
    setCreationCategory(button.dataset.category);
    updateCreationMode();
  });
});

els.creationPrompt.addEventListener("input", updateCreationMode);

els.creationInputModeTabs.forEach((button) => {
  button.addEventListener("click", () => openCreationEntry(button.dataset.creationEntry));
});

document.querySelectorAll("[data-ai-tool]").forEach((button) => {
  button.addEventListener("click", () => {
    const action = button.dataset.aiTool;
    if (action === "outpaint") {
      openOutpaintEditor(state.outpaint.sourceImage, "ai-tools");
      return;
    }
    if (action === "white-background") {
      showToast("已进入批量转白底图");
      return;
    }
    if (action === "model-pose") {
      showToast("已进入模特换姿势");
      return;
    }
    if (action === "model-background") {
      showToast("已进入模特换背景");
      return;
    }
    showToast("该工具已在独立项目完成设计，本版本暂不重复实现");
  });
});

document.addEventListener("click", (event) => {
  const library = event.target.closest("[data-module-start-library]");
  const libraryAdd = event.target.closest("[data-module-start-library-add]");
  const local = event.target.closest("[data-module-start-local]");
  const templateLibrary = event.target.closest("[data-template-start-library]");
  const templateLocal = event.target.closest("[data-template-start-local]");
  const templateStartNext = event.target.closest("[data-template-start-next]");
  const suiteStartLibrary = event.target.closest("[data-suite-start-library]");
  const suiteStartLocal = event.target.closest("[data-suite-start-local]");
  const suiteStartCategory = event.target.closest("[data-suite-start-category]");
  const suiteStartShowAll = event.target.closest("[data-suite-start-show-all]");
  const suiteStartTemplatePreview = event.target.closest("[data-suite-start-template-preview]");
  const suiteStartTemplateChoice = event.target.closest("[data-suite-start-template-choice]");
  const suiteStartSingleTemplatePreview = event.target.closest("[data-suite-start-single-template-preview]");
  const suiteStartSingleTemplateChoice = event.target.closest("[data-suite-start-single-template-choice]");
  const suiteStartSingleDrawerChoice = event.target.closest("[data-suite-start-single-template-drawer-choice]");
  const suiteStartSingleDrawerPreview = event.target.closest("[data-suite-start-single-template-drawer-preview]");
  const suiteStartSingleDrawerQuery = event.target.closest("[data-suite-start-single-template-drawer-query]");
  const suiteStartTemplateDrawerQuery = event.target.closest("[data-suite-start-template-drawer-query]");
  const suiteStartTemplateKind = event.target.closest("[data-suite-start-template-kind]");
  const suiteStartNext = event.target.closest("[data-suite-start-next]");
  const suiteStartPrev = event.target.closest("[data-suite-start-prev]");
  const suiteStartReferenceNext = event.target.closest("[data-suite-start-reference-next]");
  const suiteStartReferenceMode = event.target.closest("[data-suite-start-reference-mode]");
  const suiteStartReferenceUpload = event.target.closest("[data-suite-start-reference-upload]");
  const suiteStartReferenceRemove = event.target.closest("[data-suite-start-reference-remove]");
  const suiteStartParseLink = event.target.closest("[data-suite-start-parse-link]");
  const suiteStartReferenceTextMode = event.target.closest("[data-suite-start-reference-text-mode]");
  const templateStartRemove = event.target.closest("[data-template-start-remove]");
  const suiteStartRemove = event.target.closest("[data-suite-start-remove]");
  const moduleStartPreview = event.target.closest("[data-module-start-preview]");
  const moduleStartRemove = event.target.closest("[data-module-start-remove]");
  const choice = event.target.closest("[data-module-product-choice]");
  const confirm = event.target.closest("[data-module-product-picker-confirm]");
  const close = event.target.closest("[data-module-product-picker-close]");
  if (library) {
    openModuleProductPicker();
    return;
  }
  if (libraryAdd) {
    openModuleProductPicker("module-add");
    return;
  }
  if (templateLibrary) {
    openModuleProductPicker("template");
    return;
  }
  if (suiteStartCategory) {
    suiteReplicaStartState.category = suiteStartCategory.dataset.suiteStartCategory || "其他";
    if (suiteReplicaStartState.product) suiteReplicaStartState.product.category = suiteReplicaStartState.category;
    renderSuiteReplicaStart();
    return;
  }
  if (suiteStartLibrary) {
    openModuleProductPicker("multi-replica");
    return;
  }
  if (local) {
    document.querySelector("[data-module-start-file]")?.click();
    return;
  }
  if (templateLocal) {
    document.querySelector("[data-template-start-file]")?.click();
    return;
  }
  if (suiteStartLocal) {
    document.querySelector("[data-suite-start-file]")?.click();
    return;
  }
  if (templateStartNext) { openTemplateGenerationFlow(); return; }
  if (suiteStartShowAll) {
    if (!suiteReplicaStartState.product) {
      showToast("请先上传商品图");
      return;
    }
    if (suiteStartShowAll.dataset.suiteStartShowAll === "single") {
      openSuiteReplicaStartSingleTemplateModal();
      return;
    }
    openSuiteReplicaStartTemplateModal();
    return;
  }
  if (suiteStartTemplatePreview) {
    event.preventDefault();
    event.stopPropagation();
    const template = suiteReplicaTemplateOptions.find((item) => item.id === suiteStartTemplatePreview.dataset.suiteStartTemplatePreview);
    openSuiteReplicaStartTemplatePreview(template);
    return;
  }
  if (suiteStartSingleTemplatePreview) {
    event.preventDefault();
    event.stopPropagation();
    const asset = moduleLibraryAssets.find((item) => item.id === suiteStartSingleTemplatePreview.dataset.suiteStartSingleTemplatePreview);
    if (asset) openDrawerImagePreview(asset.image, { caption: asset.name });
    return;
  }
  if (suiteStartSingleDrawerPreview) {
    const asset = moduleLibraryAssets.find((item) => item.id === suiteStartSingleDrawerPreview.dataset.suiteStartSingleTemplateDrawerPreview);
    if (asset) openDrawerImagePreview(asset.image, { caption: asset.name });
    return;
  }
  if (suiteStartSingleDrawerChoice) {
    selectSuiteReplicaStartSingleTemplate(suiteStartSingleDrawerChoice.dataset.suiteStartSingleTemplateDrawerChoice);
    return;
  }
  if (suiteStartSingleDrawerQuery) {
    const modal = suiteStartSingleDrawerQuery.closest("[data-suite-start-single-template-modal]");
    suiteReplicaStartState.singleTemplateDrawer.keyword = modal?.querySelector("[data-suite-start-single-template-drawer-search]")?.value || "";
    suiteReplicaStartState.singleTemplateDrawer.category = modal?.querySelector("[data-suite-start-single-template-drawer-category]")?.value || "";
    suiteReplicaStartState.singleTemplateDrawer.source = modal?.querySelector("[data-suite-start-single-template-drawer-source]")?.value || "";
    renderSuiteReplicaStartSingleTemplateDrawer();
    return;
  }
  if (suiteStartTemplateDrawerQuery) {
    const modal = suiteStartTemplateDrawerQuery.closest("[data-suite-start-template-modal]");
    suiteReplicaStartState.suiteTemplateDrawer.keyword = modal?.querySelector("[data-suite-start-template-drawer-search]")?.value || "";
    suiteReplicaStartState.suiteTemplateDrawer.category = modal?.querySelector("[data-suite-start-template-drawer-category]")?.value || "";
    suiteReplicaStartState.suiteTemplateDrawer.source = modal?.querySelector("[data-suite-start-template-drawer-source]")?.value || "";
    renderSuiteReplicaStartTemplateDrawer();
    return;
  }
  if (suiteStartTemplateKind) {
    suiteReplicaStartState.templateKind = suiteStartTemplateKind.dataset.suiteStartTemplateKind || "suite";
    suiteReplicaStartState.template = null;
    suiteReplicaStartState.referenceReady = false;
    renderSuiteReplicaStart();
    return;
  }
  if (suiteStartTemplateChoice) {
    selectSuiteReplicaStartTemplate(suiteStartTemplateChoice.dataset.suiteStartTemplateChoice);
    return;
  }
  if (suiteStartSingleTemplateChoice) {
    selectSuiteReplicaStartSingleTemplate(suiteStartSingleTemplateChoice.dataset.suiteStartSingleTemplateChoice);
    return;
  }
  if (suiteStartPrev) {
    suiteReplicaStartState.step = "product";
    renderSuiteReplicaStart();
    return;
  }
  if (suiteStartReferenceMode) {
    const mode = suiteStartReferenceMode.dataset.suiteStartReferenceMode;
    const modeChanged = mode !== suiteReplicaStartState.referenceMode;
    if (mode === "template" && modeChanged) suiteReplicaStartState.templateKind = "single";
    suiteReplicaStartState.referenceSource = mode === "template" ? "template" : "upload";
    suiteReplicaStartState.referenceMode = mode;
    suiteReplicaStartState.linkParsing = false;
    if (modeChanged) {
      suiteReplicaStartState.referenceImages = [];
      if (mode !== "link") suiteReplicaStartState.link = "";
    }
    suiteReplicaStartState.referenceReady = mode === "template" ? Boolean(suiteReplicaStartState.template) : false;
    renderSuiteReplicaStart();
    return;
  }
  if (suiteStartReferenceUpload) {
    if (!suiteReplicaStartState.product) {
      showToast("请先上传商品图");
      return;
    }
    document.querySelector("[data-suite-start-reference-file]")?.click();
    return;
  }
  if (suiteStartReferenceRemove) {
    event.preventDefault();
    event.stopPropagation();
    const index = Number(suiteStartReferenceRemove.dataset.suiteStartReferenceRemove);
    if (!Number.isInteger(index)) return;
    suiteReplicaStartState.referenceImages.splice(index, 1);
    suiteReplicaStartState.referenceReady = Boolean(suiteReplicaStartState.referenceImages.length);
    if (!suiteReplicaStartState.referenceImages.length) suiteReplicaStartState.template = null;
    renderSuiteReplicaStart();
    showToast(suiteReplicaStartState.referenceImages.length ? "参考图片已删除" : "已删除全部参考图片");
    return;
  }
  if (suiteStartParseLink) {
    if (!suiteReplicaStartState.product) {
      showToast("请先上传商品图");
      return;
    }
    const input = document.querySelector("[data-suite-start-link-input]");
    suiteReplicaStartState.template = null;
    suiteReplicaStartState.referenceSource = "upload";
    suiteReplicaStartState.referenceMode = "link";
    suiteReplicaStartState.link = input?.value?.trim() || "";
    suiteReplicaStartState.linkParsing = true;
    suiteReplicaStartState.referenceReady = false;
    suiteReplicaStartState.referenceImages = [];
    renderSuiteReplicaStart();
    window.setTimeout(() => {
      suiteReplicaStartState.linkParsing = false;
      suiteReplicaStartState.referenceImages = [
        { url: "assets/creation-cover-608.jpg" },
        { url: "assets/creation-cover-610.jpg" },
        { url: "assets/creation-cover-616.jpg" },
        { url: "assets/product-cover-01.png" },
        { url: "assets/product-cover-02.png" }
      ];
      suiteReplicaStartState.referenceReady = true;
      renderSuiteReplicaStart();
      showToast(suiteReplicaStartState.link ? "淘宝链接已解析，已提取商详图片" : "已模拟解析淘宝链接，已提取商详图片");
    }, 900);
    return;
  }
  if (suiteStartReferenceTextMode) {
    event.preventDefault();
    const mode = suiteStartReferenceTextMode.dataset.suiteStartReferenceTextMode;
    const modal = suiteStartReferenceTextMode.closest("[data-suite-start-reference-text-modal]");
    if (mode !== "parsed") {
      closePrototypeModal(modal);
      enterSuiteReplicaWorkspaceFromStart("original", { autoGenerate: true });
      showToast("将保留参考图原文案及排版，直接开始生成");
      return;
    }
    if (state.rongdouBalance < 10) {
      showToast("融豆不足，无法解析图片");
      return;
    }
    state.rongdouBalance -= 10;
    const balance = document.querySelector("[data-rongdou-balance]");
    if (balance) balance.textContent = String(state.rongdouBalance);
    modal?.querySelectorAll("[data-suite-start-reference-text-mode]").forEach((button) => {
      button.disabled = true;
      button.classList.toggle("is-loading", button === suiteStartReferenceTextMode);
    });
    suiteStartReferenceTextMode.textContent = "正在识别文案…";
    window.setTimeout(() => {
      closePrototypeModal(modal);
      enterSuiteReplicaWorkspaceFromStart("parsed");
      showToast("参考图文案解析完成，可在详情页修改并应用");
    }, 850);
    return;
  }
  if (suiteStartReferenceNext) {
    if (!suiteReplicaStartState.referenceReady) {
      showToast("请先选择一种参考方式");
      return;
    }
    if (suiteReplicaStartState.referenceSource === "upload" && ["multi", "link"].includes(suiteReplicaStartState.referenceMode)) {
      openSuiteStartReferenceTextModal();
      return;
    }
    enterSuiteReplicaWorkspaceFromStart("original");
    return;
  }
  if (suiteStartNext) {
    if (!suiteReplicaStartState.product) {
      showToast("请先上传商品图");
      return;
    }
    suiteReplicaStartState.step = "reference";
    renderSuiteReplicaStart();
    return;
  }
  if (templateStartRemove) {
    const images = getModuleProductImages(templateStartState.product);
    images.splice(Number(templateStartRemove.dataset.templateStartRemove), 1);
    if (!images.length) {
      templateStartState.product = null;
      renderTemplateStart();
      showToast("已删除全部商品图");
      return;
    }
    templateStartState.product.images = images;
    templateStartState.product.image = images[0]?.url || images[0]?.image || "";
    templateStartState.product.name = images[0]?.name || images[0]?.title || "本地商品图";
    templateStartState.product.materialCount = images.length;
    renderTemplateStart();
    showToast("商品图已删除");
    return;
  }
  if (suiteStartRemove) {
    const images = getModuleProductImages(suiteReplicaStartState.product);
    images.splice(Number(suiteStartRemove.dataset.suiteStartRemove), 1);
    if (!images.length) {
      suiteReplicaStartState.product = null;
      suiteReplicaStartState.template = null;
      renderSuiteReplicaStart();
      showToast("已删除全部商品图");
      return;
    }
    suiteReplicaStartState.product.images = images;
    suiteReplicaStartState.product.image = images[0]?.url || images[0]?.image || "";
    suiteReplicaStartState.product.name = images[0]?.name || images[0]?.title || "本地商品图";
    suiteReplicaStartState.product.materialCount = images.length;
    renderSuiteReplicaStart();
    showToast("商品图已删除");
    return;
  }
  if (moduleStartRemove) {
    const images = getModuleProductImages(moduleFlowState.product);
    images.splice(Number(moduleStartRemove.dataset.moduleStartRemove), 1);
    if (!images.length) {
      resetModuleFlow();
      renderModuleStart();
      showToast("已删除全部商品图");
      return;
    }
    moduleFlowState.product.images = images;
    moduleFlowState.product.image = images[0].url;
    moduleFlowState.product.name = images[0].name || "本地商品图";
    moduleFlowState.product.materialCount = images.length;
    moduleFlowState.selectedModule = null;
    moduleFlowState.showAllModules = false;
    renderModuleStart();
    showToast("商品图已删除");
    return;
  }
  if (moduleStartPreview) {
    const image = getModuleProductImages(moduleFlowState.product)[Number(moduleStartPreview.dataset.moduleStartPreview)];
    if (image?.url) openDrawerImagePreview(image.url);
    return;
  }
  if (choice) {
    const productId = choice.dataset.moduleProductChoice || "";
    if (moduleProductPickerState.target === "template" || moduleProductPickerState.target === "multi-replica") {
      const index = moduleProductPickerState.pendingProductIds.indexOf(productId);
      if (index >= 0) moduleProductPickerState.pendingProductIds.splice(index, 1);
      else moduleProductPickerState.pendingProductIds.push(productId);
    } else {
      moduleProductPickerState.pendingProductId = productId;
    }
    renderModuleProductPicker();
    return;
  }
  if (confirm) {
    const pickerProducts = getModuleProductPickerProducts();
    const selectedProducts = moduleProductPickerState.target === "template" || moduleProductPickerState.target === "multi-replica"
      ? pickerProducts.filter((item) => moduleProductPickerState.pendingProductIds.includes(item.id))
      : pickerProducts.filter((item) => item.id === moduleProductPickerState.pendingProductId);
    const product = selectedProducts[0];
    if (!selectedProducts.length || !product) {
      showToast("请先选择商品");
      return;
    }
    if (moduleProductPickerState.target === "template") selectTemplateStartProducts(selectedProducts);
    else if (moduleProductPickerState.target === "multi-replica") selectSuiteReplicaStartProducts(selectedProducts);
    else if (moduleProductPickerState.target === "single-replica") {
      setCreationCategory(product.category || singleReplicaState.category);
      singleReplicaState.category = product.category || singleReplicaState.category;
      setSingleReplicaProductImages(getModuleProductImages(product));
    }
    else if (moduleProductPickerState.target === "module-add") appendModuleStartProduct(product);
    else selectModuleStartProduct(product);
    renderModuleFlow();
    closePrototypeModals();
    showToast(moduleProductPickerState.target === "template"
      ? `已选择 ${selectedProducts.length} 个商品，已为你更新模板推荐`
      : moduleProductPickerState.target === "multi-replica"
        ? `已选择 ${selectedProducts.length} 个商品，共 ${getModuleProductImages(suiteReplicaStartState.product).length} 张商品图，请选择参考方式`
        : moduleProductPickerState.target === "single-replica"
          ? `已选择商品：${product.name}`
        : moduleProductPickerState.target === "module-add"
          ? `已添加商品素材：${product.name}`
          : `已选择商品：${product.name}`);
    return;
  }
  if (close) {
    closePrototypeModals();
  }
});

document.addEventListener("change", (event) => {
  const singleTemplateDrawerFilter = event.target.closest("[data-suite-start-single-template-drawer-category], [data-suite-start-single-template-drawer-source]");
  if (singleTemplateDrawerFilter) {
    const modal = singleTemplateDrawerFilter.closest("[data-suite-start-single-template-modal]");
    suiteReplicaStartState.singleTemplateDrawer.keyword = modal?.querySelector("[data-suite-start-single-template-drawer-search]")?.value || "";
    suiteReplicaStartState.singleTemplateDrawer.category = modal?.querySelector("[data-suite-start-single-template-drawer-category]")?.value || "";
    suiteReplicaStartState.singleTemplateDrawer.source = modal?.querySelector("[data-suite-start-single-template-drawer-source]")?.value || "";
    renderSuiteReplicaStartSingleTemplateDrawer();
    return;
  }
  const suiteTemplateDrawerFilter = event.target.closest("[data-suite-start-template-drawer-category], [data-suite-start-template-drawer-source]");
  if (suiteTemplateDrawerFilter) {
    const modal = suiteTemplateDrawerFilter.closest("[data-suite-start-template-modal]");
    suiteReplicaStartState.suiteTemplateDrawer.keyword = modal?.querySelector("[data-suite-start-template-drawer-search]")?.value || "";
    suiteReplicaStartState.suiteTemplateDrawer.category = modal?.querySelector("[data-suite-start-template-drawer-category]")?.value || "";
    suiteReplicaStartState.suiteTemplateDrawer.source = modal?.querySelector("[data-suite-start-template-drawer-source]")?.value || "";
    renderSuiteReplicaStartTemplateDrawer();
    return;
  }
  const singleReplicaSelect = event.target.closest("[data-single-replica-ratio-options], [data-single-replica-resolution-options], [data-single-replica-model-options], [data-single-replica-count-options]");
  if (!singleReplicaSelect) return;
  if (singleReplicaSelect.matches("[data-single-replica-ratio-options]")) state.creation.ratio = singleReplicaSelect.value;
  if (singleReplicaSelect.matches("[data-single-replica-resolution-options]")) state.creation.resolution = singleReplicaSelect.value;
  if (singleReplicaSelect.matches("[data-single-replica-model-options]")) state.creation.generationModel = singleReplicaSelect.value;
  if (singleReplicaSelect.matches("[data-single-replica-count-options]")) state.creation.imageCount = singleReplicaSelect.value;
  refreshCreationParamLabels();
  renderSingleReplicaStart();
});

document.querySelector("[data-module-start-file]")?.addEventListener("change", (event) => {
  const files = Array.from(event.target.files || []).filter((file) => file.type.startsWith("image/")).slice(0, 12);
  if (!files.length) return;
  const existing = getModuleProductImages(moduleFlowState.product);
  const uploadedImages = [];
  let remaining = files.length;
  files.forEach((file) => {
    const reader = new FileReader();
    reader.onload = () => {
      uploadedImages.push({ url: String(reader.result), name: file.name || "本地商品图" });
      remaining -= 1;
      if (remaining) return;
      const images = [...existing, ...uploadedImages].slice(0, 12);
      selectModuleStartProduct({
        id: moduleFlowState.product?.id || `module-local-product-${Date.now()}`,
        name: images[0]?.name || "本地商品图",
        category: "本地上传商品",
        image: images[0]?.url || "",
        images,
        isLocal: true,
        points: { core: "请保留上传商品图中的主体、真实颜色、材质与细节。" }
      });
      showToast(`已上传 ${uploadedImages.length} 张商品图，将共同用于生成 1 张模块图`);
    };
    reader.readAsDataURL(file);
  });
  event.target.value = "";
});

document.querySelector("[data-template-start-file]")?.addEventListener("change", (event) => {
  const files = Array.from(event.target.files || []).filter((file) => file.type.startsWith("image/")).slice(0, 6);
  if (!files.length) return;
  const uploadedImages = [];
  let remaining = files.length;
  files.forEach((file) => {
    const reader = new FileReader();
    reader.onload = () => {
      uploadedImages.push({ url: String(reader.result), name: file.name || "本地商品图" });
      remaining -= 1;
      if (remaining) return;
      const firstImage = uploadedImages[0];
      selectTemplateStartProduct({
        id: `template-local-product-${Date.now()}`,
        name: firstImage.name,
        category: "本地上传商品",
        image: firstImage.url,
        isLocal: true,
        materialCount: uploadedImages.length,
        images: uploadedImages,
        points: { core: "请保留上传商品图中的主体、真实颜色、材质与细节。" }
      });
      showToast(`已上传 ${uploadedImages.length} 张商品图，已为你推荐 4 个模板`);
    };
    reader.readAsDataURL(file);
  });
  event.target.value = "";
});

document.querySelector("[data-multi-source-product-file]")?.addEventListener("change", (event) => {
  const existingImages = getMultiSourceProductImages();
  const files = Array.from(event.target.files || [])
    .filter((file) => file.type.startsWith("image/"))
    .slice(0, Math.max(0, 12 - existingImages.length));
  if (!files.length) return;
  const uploadedImages = new Array(files.length);
  let remaining = files.length;
  files.forEach((file, index) => {
    const reader = new FileReader();
    reader.onload = () => {
      uploadedImages[index] = { image: String(reader.result), title: file.name || "本地商品图" };
      remaining -= 1;
      if (!remaining) {
        syncMultiSourceProductImages([...existingImages, ...uploadedImages]);
        renderMultiImageCreation();
        showToast(`已添加 ${uploadedImages.length} 张商品图`);
      }
    };
    reader.readAsDataURL(file);
  });
  event.target.value = "";
});

document.querySelector("[data-multi-compose-file]")?.addEventListener("change", (event) => {
  const files = Array.from(event.target.files || []).filter((file) => file.type.startsWith("image/")).slice(0, 12);
  if (!files.length) return;
  const uploadedItems = new Array(files.length);
  let remaining = files.length;
  files.forEach((file, index) => {
    const reader = new FileReader();
    reader.onload = () => {
      uploadedItems[index] = {
        id: `local-${Date.now()}-${index}`,
        type: "local",
        title: file.name || `本地补图 ${index + 1}`,
        image: String(reader.result)
      };
      remaining -= 1;
      if (!remaining) {
        state.multiCreate.compositionItems.push(...uploadedItems);
        renderMultiImageCreation();
        showToast(`已添加 ${uploadedItems.length} 张本地图片到套图`);
      }
    };
    reader.readAsDataURL(file);
  });
  event.target.value = "";
});

document.addEventListener("click", (event) => {
  const category = event.target.closest("[data-single-replica-category]");
  const productLibrary = event.target.closest("[data-single-replica-product-library]");
  const productLocal = event.target.closest("[data-single-replica-product-local]");
  const productRemove = event.target.closest("[data-single-replica-product-remove]");
  const referenceLibrary = event.target.closest("[data-single-replica-reference-library]");
  const referenceLocal = event.target.closest("[data-single-replica-reference-local]");
  const referenceRemove = event.target.closest("[data-single-replica-reference-remove]");
  const next = event.target.closest("[data-single-replica-next]");
  const back = event.target.closest("[data-single-replica-back]");
  const generate = event.target.closest("[data-single-replica-generate]");
  const option = event.target.closest("[data-single-replica-ratio-options] button, [data-single-replica-resolution-options] button, [data-single-replica-model-options] button");
  if (category) {
    singleReplicaState.category = category.dataset.singleReplicaCategory;
    setCreationCategory(singleReplicaState.category);
    renderSingleReplicaStart();
    return;
  }
  if (productLibrary) { openModuleProductPicker("single-replica"); return; }
  if (productLocal) { document.querySelector("[data-single-replica-product-file]")?.click(); return; }
  if (productRemove) {
    const images = [...singleReplicaState.productImages];
    images.splice(Number(productRemove.dataset.singleReplicaProductRemove), 1);
    setSingleReplicaProductImages(images);
    return;
  }
  if (referenceLibrary) {
    document.querySelectorAll("[data-reference-tab]").forEach((button) => {
      button.classList.toggle("is-active", button.dataset.referenceTab === "local");
    });
    document.querySelectorAll("[data-reference-panel]").forEach((panel) => {
      const active = panel.dataset.referencePanel === "local";
      panel.classList.toggle("is-active", active);
      panel.setAttribute("aria-hidden", String(!active));
    });
    openPrototypeModal(els.referenceSelectModal);
    return;
  }
  if (referenceLocal) { document.querySelector("[data-single-replica-reference-file]")?.click(); return; }
  if (referenceRemove) { setSingleReplicaReference(null); return; }
  if (option) {
    const group = option.parentElement;
    group.querySelectorAll("button").forEach((button) => button.classList.toggle("is-active", button === option));
    if (group.matches("[data-single-replica-ratio-options]")) state.creation.ratio = option.dataset.value;
    if (group.matches("[data-single-replica-resolution-options]")) state.creation.resolution = option.dataset.value;
    if (group.matches("[data-single-replica-model-options]")) state.creation.generationModel = option.dataset.value;
    refreshCreationParamLabels();
    renderSingleReplicaStart();
    return;
  }
  if (back) { setSingleReplicaStep(Number(back.dataset.singleReplicaBack)); return; }
  if (next) { setSingleReplicaStep(Number(next.dataset.singleReplicaNext) + 1); return; }
  if (generate) {
    if (!singleReplicaState.productImages.length || !singleReplicaState.reference) {
      showToast("请先完成商品图和参考图上传");
      return;
    }
    if (els.creationPrompt) els.creationPrompt.value = document.querySelector("[data-single-replica-prompt]")?.value.trim() || "";
    createGenerationRecord();
  }
});

document.querySelector("[data-single-replica-product-file]")?.addEventListener("change", (event) => {
  const files = Array.from(event.target.files || []).filter((file) => file.type.startsWith("image/")).slice(0, 6);
  if (!files.length) return;
  const images = [];
  let remaining = files.length;
  files.forEach((file) => {
    const reader = new FileReader();
    reader.onload = () => {
      images.push({ url: String(reader.result), name: file.name || "本地商品图" });
      remaining -= 1;
      if (!remaining) {
        setSingleReplicaProductImages(images);
        showToast(`已上传 ${images.length} 张商品图`);
      }
    };
    reader.readAsDataURL(file);
  });
  event.target.value = "";
});

document.querySelector("[data-single-replica-reference-file]")?.addEventListener("change", (event) => {
  const [file] = event.target.files || [];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = () => {
    setSingleReplicaReference({ image: String(reader.result), name: file.name || "本地参考图" });
    showToast("已上传参考图");
  };
  reader.readAsDataURL(file);
  event.target.value = "";
});

document.querySelector("[data-suite-start-file]")?.addEventListener("change", (event) => {
  const existingImages = getModuleProductImages(suiteReplicaStartState.product);
  const files = Array.from(event.target.files || [])
    .filter((file) => file.type.startsWith("image/"))
    .slice(0, Math.max(0, 12 - existingImages.length));
  if (!files.length) return;
  const uploadedImages = new Array(files.length);
  let remaining = files.length;
  files.forEach((file, index) => {
    const reader = new FileReader();
    reader.onload = () => {
      uploadedImages[index] = { url: String(reader.result), name: file.name || "本地商品图" };
      remaining -= 1;
      if (remaining) return;
      const images = [...existingImages, ...uploadedImages].slice(0, 12);
      setSuiteReplicaStartProductImages(images, {
        id: suiteReplicaStartState.product?.id || `suite-local-product-${Date.now()}`,
        productIds: suiteReplicaStartState.product?.productIds || [],
        name: images.length > 1 ? `已上传 ${images.length} 张商品图` : images[0]?.name,
        category: suiteReplicaStartState.product?.category || "本地上传商品",
        isLocal: true,
        points: suiteReplicaStartState.product?.points || { core: "请保留上传商品图中的主体、真实颜色、材质与细节。" }
      });
      showToast(`已上传 ${uploadedImages.length} 张商品图，当前共 ${images.length} 张`);
    };
    reader.readAsDataURL(file);
  });
  event.target.value = "";
});

document.querySelector("[data-suite-start-reference-file]")?.addEventListener("change", (event) => {
  const files = Array.from(event.target.files || []).filter((file) => file.type.startsWith("image/")).slice(0, 12);
  if (!files.length) return;
  const uploadedImages = [];
  let remaining = files.length;
  files.forEach((file) => {
    const reader = new FileReader();
    reader.onload = () => {
      uploadedImages.push({ url: String(reader.result), name: file.name || "本地商详参考图" });
      remaining -= 1;
      if (remaining) return;
      suiteReplicaStartState.template = null;
      suiteReplicaStartState.referenceSource = "upload";
      suiteReplicaStartState.referenceMode = "multi";
      suiteReplicaStartState.linkParsing = false;
      suiteReplicaStartState.referenceImages = uploadedImages;
      suiteReplicaStartState.referenceReady = true;
      renderSuiteReplicaStart();
      showToast(`已上传 ${uploadedImages.length} 张商详参考图`);
    };
    reader.readAsDataURL(file);
  });
  event.target.value = "";
});

document.querySelector("[data-module-start-next]")?.addEventListener("click", () => {
  if (!moduleFlowState.product) {
    showToast("请先选择商品");
    return;
  }
  moduleFlowState.step = 2;
  openModuleGenerationFlow({ resume: true });
});

document.addEventListener("click", (event) => {
  const templatePreview = event.target.closest("[data-template-flow-template-preview]");
  const templateCard = event.target.closest("[data-template-flow-template]");
  const templateDrawerCard = event.target.closest("[data-template-flow-drawer-template]");
  const showAll = event.target.closest("[data-template-flow-show-all]");
  const closeAll = event.target.closest("[data-template-flow-template-close]");
  const back = event.target.closest("[data-template-flow-back]");
  const previous = event.target.closest("[data-template-flow-previous]");
  const next = event.target.closest("[data-template-flow-next]");
  const record = event.target.closest("[data-template-flow-record]");
  const productPreview = event.target.closest("[data-template-flow-product-preview]");
  if (templatePreview) {
    const template = getTemplate(templatePreview.dataset.templateFlowTemplatePreview);
    if (template) openTemplateLongPreview(template);
    return;
  }
  if (templateCard || templateDrawerCard) {
    const templateId = templateCard?.dataset.templateFlowTemplate || templateDrawerCard?.dataset.templateFlowDrawerTemplate;
    const template = getTemplate(templateId);
    if (!template) return;
    templateStartState.selectedTemplate = template;
    setTemplateFlowDrawer(false);
    renderTemplateGenerationFlow();
    return;
  }
  if (showAll) { setTemplateFlowDrawer(true); return; }
  if (closeAll) { setTemplateFlowDrawer(false); return; }
  if (back || previous) {
    templateStartState.step = 1;
    setWorkspacePage("creation-plaza");
    clearMenuActive();
    document.querySelector('[data-single-menu="创作中心"]')?.classList.add("active");
    setCreationInputMode("template");
    return;
  }
  if (next) { startTemplateFlowWorkspace(); return; }
  if (record) { openCreationRecordsPage(); return; }
  if (productPreview) {
    const product = templateStartState.product;
    if (product?.image) openDrawerImagePreview(product.image, { caption: product.name || "已上传商品" });
  }
});

document.querySelector("[data-template-flow-template-mask]")?.addEventListener("click", () => setTemplateFlowDrawer(false));

document.addEventListener("click", (event) => {
  if (event.target.closest("[data-module-flow-start-library]")) {
    openModuleProductPicker();
    return;
  }
  if (event.target.closest("[data-module-flow-start-local]")) {
    document.querySelector("[data-module-flow-file]")?.click();
  }
});

document.querySelector("[data-module-flow-product-grid]")?.addEventListener("click", (event) => {
  const card = event.target.closest("[data-module-flow-product]");
  if (!card) return;
  const product = getModuleFlowProducts().find((item) => item.id === card.dataset.moduleFlowProduct);
  if (!product) return;
  moduleFlowState.product = product;
  if (!moduleFlowState.lockedModule) moduleFlowState.selectedModule = null;
  moduleFlowState.showAllModules = false;
  renderModuleFlow();
});

document.querySelector("[data-module-flow-file]")?.addEventListener("change", (event) => {
  const files = Array.from(event.target.files || []).filter((file) => file.type.startsWith("image/")).slice(0, 12);
  if (!files.length) return;
  const uploadedImages = [];
  let remaining = files.length;
  files.forEach((file) => {
    const reader = new FileReader();
    reader.onload = () => {
      uploadedImages.push({ url: String(reader.result), name: file.name || "本地商品图" });
      remaining -= 1;
      if (remaining) return;
      selectModuleStartProduct({
        id: `module-local-product-${Date.now()}`,
        name: uploadedImages[0]?.name || "本地商品图",
        category: "本地上传商品",
        image: uploadedImages[0]?.url || "",
        images: uploadedImages,
        isLocal: true,
        points: { core: "请保留上传商品图中的主体、真实颜色、材质与细节。" }
      });
      renderModuleFlow();
      showToast(`已上传 ${uploadedImages.length} 张商品图，将共同用于生成 1 张模块图`);
    };
    reader.readAsDataURL(file);
  });
  event.target.value = "";
});

document.querySelector("[data-module-flow-module-grid]")?.addEventListener("click", (event) => {
  const preview = event.target.closest("[data-module-flow-module-preview]");
  if (preview) {
    const asset = getModuleLibraryAsset(preview.dataset.moduleFlowModulePreview);
    if (asset) openDrawerImagePreview(asset.image, { caption: asset.name });
    return;
  }
  const card = event.target.closest("[data-module-flow-module]");
  if (!card) return;
  const asset = getModuleLibraryAsset(card.dataset.moduleFlowModule);
  if (!asset) return;
  moduleFlowState.selectedModule = asset;
  moduleFlowState.lockedModule = false;
  renderModuleFlow();
});

document.querySelector("[data-module-flow-product-preview]")?.addEventListener("click", () => {
  const product = moduleFlowState.product;
  if (!product?.image) return;
  openDrawerImagePreview(product.image, { caption: product.name || "已选商品" });
});

document.querySelector("[data-module-flow-template-drawer-grid]")?.addEventListener("click", (event) => {
  const preview = event.target.closest("[data-module-flow-drawer-preview]");
  if (preview) {
    const asset = getModuleLibraryAsset(preview.dataset.moduleFlowDrawerPreview);
    if (asset) openDrawerImagePreview(asset.image, { caption: asset.name });
    return;
  }
  const card = event.target.closest("[data-module-flow-drawer-module]");
  if (!card) return;
  const asset = getModuleLibraryAsset(card.dataset.moduleFlowDrawerModule);
  if (!asset) return;
  moduleFlowState.selectedModule = asset;
  moduleFlowState.lockedModule = false;
  setModuleFlowTemplateDrawer(false);
  renderModuleFlow();
});

document.querySelector("[data-module-flow-template-search]")?.addEventListener("input", (event) => {
  moduleFlowState.moduleDrawerSearch = event.target.value;
});

function syncModuleFlowTemplateFilters() {
  moduleFlowState.moduleDrawerSearch = document.querySelector("[data-module-flow-template-search]")?.value || "";
  moduleFlowState.moduleDrawerCategory = document.querySelector("[data-module-flow-template-category]")?.value || "";
  moduleFlowState.moduleDrawerSource = document.querySelector("[data-module-flow-template-source]")?.value || "";
}

document.querySelector("[data-module-flow-template-search]")?.addEventListener("keydown", (event) => {
  if (event.key !== "Enter") return;
  event.preventDefault();
  syncModuleFlowTemplateFilters();
  renderModuleFlowTemplateDrawer();
});

document.querySelector("[data-module-flow-template-category]")?.addEventListener("change", (event) => {
  syncModuleFlowTemplateFilters();
  moduleFlowState.moduleDrawerCategory = event.target.value;
  renderModuleFlowTemplateDrawer();
});

document.querySelector("[data-module-flow-template-source]")?.addEventListener("change", (event) => {
  syncModuleFlowTemplateFilters();
  moduleFlowState.moduleDrawerSource = event.target.value;
  renderModuleFlowTemplateDrawer();
});

document.querySelector("[data-module-flow-template-query]")?.addEventListener("click", () => {
  syncModuleFlowTemplateFilters();
  renderModuleFlowTemplateDrawer();
});

document.querySelectorAll("[data-module-flow-step]").forEach((button) => {
  button.addEventListener("click", () => setModuleFlowStep(button.dataset.moduleFlowStep));
});

document.querySelectorAll("[data-module-image-flow-step]").forEach((button) => {
  button.addEventListener("click", () => {
    const target = Number(button.dataset.moduleImageFlowStep);
    if (target === 3) return;
    moduleFlowState.step = target === 1 ? 1 : 2;
    openModuleGenerationFlow({ resume: true });
  });
});

document.querySelector("[data-module-flow-next]")?.addEventListener("click", () => {
  if (moduleFlowState.step === 2) {
    startModuleFlowCreation();
    return;
  }
  setModuleFlowStep(moduleFlowState.step + 1);
});

document.querySelector("[data-module-flow-previous]")?.addEventListener("click", () => setModuleFlowStep(moduleFlowState.step - 1));
document.querySelectorAll("[data-module-flow-change-product]").forEach((button) => button.addEventListener("click", () => setModuleFlowStep(1)));
document.querySelectorAll("[data-module-flow-change-module]").forEach((button) => button.addEventListener("click", () => setModuleFlowStep(2)));
document.querySelector("[data-module-flow-show-all]")?.addEventListener("click", () => setModuleFlowTemplateDrawer(true));
document.querySelector("[data-module-flow-template-close]")?.addEventListener("click", () => setModuleFlowTemplateDrawer(false));
document.querySelector("[data-module-flow-template-mask]")?.addEventListener("click", () => setModuleFlowTemplateDrawer(false));
document.querySelector("[data-module-flow-back]")?.addEventListener("click", () => {
  setWorkspacePage("creation-plaza");
  clearMenuActive();
  document.querySelector('[data-single-menu="创作中心"]')?.classList.add("active");
  setCreationInputMode("module");
});
document.querySelector("[data-module-flow-record]")?.addEventListener("click", openCreationRecordsPage);

document.querySelectorAll("[data-module-create-type]").forEach((button) => {
  button.addEventListener("click", () => {
    setModuleCreateType(button.dataset.moduleCreateType);
    closePrototypeModals();
    if (state.moduleCreateType === "image-generation") {
      openModuleImageWorkspace({ fresh: true });
      showToast("已进入图生图模块创作详情");
      return;
    }
    if (state.moduleCreateType === "fixed-image") {
      openStaticModuleWorkspace("fixed");
      showToast("已打开固定图模块创建弹窗");
      return;
    }
    openBrandMaterialEditor("module-library");
    showToast("已进入品牌画板编辑器");
  });
});

document.querySelector("[data-module-library-search]")?.addEventListener("input", filterModuleLibrary);

document.addEventListener("click", (event) => {
  const tab = event.target.closest("[data-module-library-tab]");
  const category = event.target.closest("[data-module-library-category]");
  const source = event.target.closest("[data-module-library-source]");
  const create = event.target.closest("[data-module-library-create]");
  const preview = event.target.closest("[data-module-library-preview]");
  const make = event.target.closest("[data-module-library-make]");
  const edit = event.target.closest("[data-module-library-edit]");
  const editSave = event.target.closest("[data-module-library-edit-save]");
  const editResultPreview = event.target.closest("[data-module-library-edit-result-preview]");
  const editSourcePreview = event.target.closest("[data-module-library-edit-source-preview]");
  const editReupload = event.target.closest("[data-module-library-edit-reupload]");
  const editFixedRemove = event.target.closest("[data-module-library-edit-fixed-remove]");
  const remove = event.target.closest("[data-module-library-delete]");
  const deleteConfirm = event.target.closest("[data-module-library-delete-confirm]");
  const publish = event.target.closest("[data-module-library-publish]");
  const publishConfirm = event.target.closest("[data-module-library-publish-confirm]");
  const modelDeleteConfirm = event.target.closest("[data-model-delete-confirm]");
  const modelPublishConfirm = event.target.closest("[data-model-publish-confirm]");
  if (tab) {
    setModuleLibraryType(tab.dataset.moduleLibraryTab);
    return;
  }
  if (category) {
    state.moduleLibraryCategory = category.dataset.moduleLibraryCategory;
    filterModuleLibrary();
    return;
  }
  if (source) {
    state.moduleLibrarySource = source.dataset.moduleLibrarySource;
    filterModuleLibrary();
    return;
  }
  if (create) {
    openPrototypeModal(els.moduleCreateModal);
    return;
  }
  if (preview) {
    const asset = getModuleLibraryAsset(preview.dataset.moduleLibraryPreview);
    openDetailImageLightbox(asset?.image, asset?.name || "模块图片全屏预览");
    return;
  }
  if (make) {
    openSingleTemplateReplicaDetail(make.dataset.moduleLibraryMake);
    return;
  }
  if (edit) {
    const asset = getModuleLibraryAsset(edit.dataset.moduleLibraryEdit);
    if (asset?.type === "text") {
      openModuleTextLibraryEditor(asset.id);
      return;
    }
    openModuleLibraryEdit(edit.dataset.moduleLibraryEdit);
    return;
  }
  if (editSave) {
    saveModuleLibraryEdit(editSave.dataset.moduleLibraryEditSave);
    return;
  }
  if (editResultPreview) {
    const image = document.querySelector("[data-module-library-edit-result-image]");
    openDetailImageLightbox(image?.src, "生成效果预览");
    return;
  }
  if (editReupload) {
    showToast("原型演示：点击后可重新上传固定图片");
    return;
  }
  if (editFixedRemove) {
    editFixedRemove.closest(".module-library-edit-fixed-thumb-wrap")?.remove();
    showToast("已移除图片");
    return;
  }
  if (editSourcePreview) {
    openDetailImageLightbox(editSourcePreview.dataset.moduleLibraryEditSourcePreview, editSourcePreview.dataset.moduleLibraryEditSourceLabel || "素材预览");
    return;
  }
  if (modelDeleteConfirm) {
    deletePendingModelLibraryAsset(modelDeleteConfirm.dataset.modelDeleteConfirm);
    return;
  }
  if (deleteConfirm) {
    deletePendingModuleLibraryAsset(deleteConfirm.dataset.moduleLibraryDeleteConfirm);
    return;
  }
  if (remove) {
    openModuleLibraryDeleteConfirm(remove.dataset.moduleLibraryDelete);
    return;
  }
  if (modelPublishConfirm) {
    submitModelLibraryPublish(modelPublishConfirm.dataset.modelPublishConfirm);
    return;
  }
  if (publishConfirm) {
    submitModuleLibraryPublish(publishConfirm.dataset.moduleLibraryPublishConfirm);
    return;
  }
  if (publish) {
    openModuleLibraryPublish(publish.dataset.moduleLibraryPublish);
  }
});

function loadModuleImageFiles(files, callback) {
  const selected = Array.from(files || []).filter((file) => file.type.startsWith("image/")).slice(0, 6);
  if (!selected.length) return;
  let remaining = selected.length;
  selected.forEach((file) => {
    const reader = new FileReader();
    reader.addEventListener("load", () => {
      callback({ name: file.name, url: reader.result });
      remaining -= 1;
      if (!remaining) renderModuleImageWorkspace();
    });
    reader.readAsDataURL(file);
  });
}

document.querySelector("[data-module-reverse-toggle]")?.addEventListener("click", () => {
  const section = document.querySelector("[data-module-reverse-section]");
  const content = section?.querySelector(".module-reverse-content");
  const isOpen = !section.classList.contains("is-open");
  section?.classList.toggle("is-open", isOpen);
  content.hidden = !isOpen;
  document.querySelector("[data-module-reverse-toggle]")?.setAttribute("aria-expanded", String(isOpen));
});

document.querySelectorAll("[data-module-create-step]").forEach((button) => {
  button.addEventListener("click", () => setModuleCreateStep(button.dataset.moduleCreateStep));
});
document.querySelector("[data-module-create-next]")?.addEventListener("click", () => {
  if (!moduleHasMaterial()) {
    showToast("请至少上传 1 张创作素材后再继续");
    return;
  }
  ensureModuleCreationPrompts();
  moduleImageState.createStep = 2;
  moduleImageState.createEditing = true;
  renderModuleImageWorkspace();
});
document.querySelector("[data-module-create-previous]")?.addEventListener("click", () => setModuleCreateStep(1));
document.querySelector("[data-module-create-edit]")?.addEventListener("click", () => {
  if (moduleImageState.intent !== "create" || moduleImageState.createStep !== 2) return;
  moduleImageState.createEditing = true;
  renderModuleImageWorkspace();
});
document.querySelectorAll("[data-module-analysis-mode-choice]").forEach((button) => {
  button.addEventListener("click", () => {
    const nextMode = button.dataset.moduleAnalysisModeChoice;
    if (!nextMode || nextMode === moduleImageState.analysisMode) return;
    moduleImageState.analysisMode = nextMode;
    if (nextMode === "single" && moduleImageState.analysisImages.length > 1) {
      moduleImageState.analysisImages = moduleImageState.analysisImages.slice(0, 1);
      showToast("已保留第 1 张图片用于单图解析");
    }
    moduleImageState.analysisResult = null;
    moduleImageState.analysisApplied = { product: false, scene: false };
    renderModuleAnalysisImages();
    renderModuleAnalysisResult();
  });
});

document.querySelector("[data-module-analysis-input]")?.addEventListener("change", (event) => {
  const available = Math.max(0, Math.min(
    moduleCreationPerTypeLimit - moduleImageState.analysisImages.length,
    moduleCreationTotalLimit - getModuleCreationUploadTotal()
  ));
  loadModuleImageFiles(Array.from(event.target.files).slice(0, available), (image) => moduleImageState.analysisImages.push(image));
  moduleImageState.analysisResult = null;
  moduleImageState.analysisApplied = { product: false, scene: false };
  renderModuleAnalysisResult();
  event.target.value = "";
});

document.querySelectorAll("[data-module-scene-source]").forEach((button) => {
  button.addEventListener("click", () => setModuleScenePromptSource(button.dataset.moduleSceneSource));
});

document.addEventListener("change", (event) => {
  const input = event.target.closest("[data-module-material-input]");
  if (!input) return;
  setModuleSidebarStep("material");
  const type = input.dataset.moduleMaterialInput;
  const profile = getModuleReuseProfile();
  const reuseLimit = isModuleReuse() && (type === "product" || type === "model") ? profile[type] || 0 : moduleCreationPerTypeLimit;
  const available = Math.max(0, isModuleReuse()
    ? reuseLimit - moduleImageState.materials[type].length
    : Math.min(reuseLimit - moduleImageState.materials[type].length, moduleCreationTotalLimit - getModuleCreationUploadTotal()));
  loadModuleImageFiles(Array.from(input.files).slice(0, available), (image) => {
    moduleImageState.materials[type].push(image);
    if (type === "product") {
      moduleImageState.productAnalysis = "";
      moduleImageState.productAnalyses = [];
    }
  });
  input.value = "";
});

document.querySelector("[data-module-setting-toggle]")?.addEventListener("click", () => {
  moduleImageState.settingsOpen = !moduleImageState.settingsOpen;
  setModuleSidebarStep("setting");
  renderModuleCreateSidebar();
});

document.querySelector("[data-module-result-tray-toggle]")?.addEventListener("click", () => setModuleResultTray(true));
document.querySelector("[data-module-result-tray-close]")?.addEventListener("click", () => setModuleResultTray(false));

document.querySelectorAll("[data-module-sidebar-step]").forEach((item) => {
  item.addEventListener("click", () => {
    const step = item.dataset.moduleSidebarStep;
    if (step === "setting" && !moduleImageState.settingsOpen) {
      moduleImageState.settingsOpen = true;
      renderModuleCreateSidebar();
    }
    setModuleSidebarStep(step, { scroll: true });
  });
});

document.querySelectorAll("[data-module-ratio], [data-module-resolution], [data-module-model], [data-module-count]").forEach((field) => {
  field.addEventListener("change", () => {
    setModuleSidebarStep("setting");
    renderModuleCreateSidebar();
  });
});

document.querySelector("[data-module-product-analysis-submit]")?.addEventListener("click", runModuleProductAnalysis);
document.querySelector("[data-module-product-analysis-add]")?.addEventListener("click", appendProductAnalysisToPrompt);
document.querySelector("[data-module-product-analysis-copy]")?.addEventListener("click", copyModuleProductAnalysis);
document.addEventListener("input", (event) => {
  const singleReplicaPrompt = event.target.closest("[data-single-replica-prompt]");
  if (singleReplicaPrompt && els.creationPrompt) {
    els.creationPrompt.value = singleReplicaPrompt.value;
    updateCreationMode();
  }
  if (event.target.closest("[data-module-product-prompt], [data-module-scene-prompt]")) {
    renderModulePromptDisplays();
    setModuleSidebarStep("prompt");
    renderModuleCreateSidebar();
  }
  const resultScenePrompt = event.target.closest("[data-module-result-scene-prompt]");
  if (resultScenePrompt) {
    const scenePrompt = document.querySelector("[data-module-scene-prompt]");
    if (scenePrompt) scenePrompt.value = resultScenePrompt.value;
    renderModulePromptDisplays();
  }
  if (event.target.closest("[data-module-personal-description]")) {
    updateModulePersonalDescriptionCount();
  }
  const text = event.target.closest("[data-module-product-analysis-text]");
  if (!text) return;
  const index = Number(text.dataset.moduleProductAnalysisIndex);
  if (moduleImageState.productAnalyses[index]) {
    moduleImageState.productAnalyses[index].text = text.value;
    moduleImageState.productAnalysis = moduleImageState.productAnalyses.map((item) => item.text).join("\n");
  }
});
document.querySelector("[data-module-generate]")?.addEventListener("click", generateModuleImageTask);
document.querySelector("[data-module-personal-confirm]")?.addEventListener("click", confirmModulePersonalInfo);
document.querySelector("[data-module-task-drawer]")?.addEventListener("click", () => setModuleTaskDrawer(true));
document.querySelector("[data-module-task-drawer-close]")?.addEventListener("click", () => setModuleTaskDrawer(false));
document.querySelector("[data-module-task-mask]")?.addEventListener("click", () => setModuleTaskDrawer(false));
document.querySelector("[data-free-creation-task-drawer]")?.addEventListener("click", () => setFreeCreationTaskDrawer(true));
document.querySelector("[data-free-creation-task-drawer-close]")?.addEventListener("click", () => setFreeCreationTaskDrawer(false));
document.querySelector("[data-free-creation-task-mask]")?.addEventListener("click", () => setFreeCreationTaskDrawer(false));
document.querySelector("[data-module-image-back]")?.addEventListener("click", leaveModuleImageWorkspace);
document.querySelector("[data-module-source-preview]")?.addEventListener("click", () => {
  const source = moduleImageState.sourceAsset;
  if (!source?.image) return;
  openDrawerImagePreview(source.image, { caption: source.name || "已选模块" });
});
document.querySelector("[data-module-static-back]")?.addEventListener("click", leaveStaticModuleWorkspace);
document.querySelector("[data-static-image-input]")?.addEventListener("change", (event) => {
  const file = event.target.files?.[0];
  if (!file || !file.type.startsWith("image/")) return;
  const reader = new FileReader();
  reader.addEventListener("load", () => {
    moduleStaticState.fixedImage = reader.result;
    moduleStaticState.saved = null;
    renderStaticModuleWorkspace();
  });
  reader.readAsDataURL(file);
  event.target.value = "";
});
document.querySelector("[data-static-text-content]")?.addEventListener("input", (event) => {
  moduleStaticState.text.content = event.target.value;
  moduleStaticState.saved = null;
  renderStaticModuleWorkspace();
});
document.querySelector("[data-static-module-name]")?.addEventListener("input", (event) => {
  moduleStaticState.moduleName = event.target.value;
  moduleStaticState.saved = null;
});
document.querySelector("[data-static-module-category]")?.addEventListener("change", (event) => {
  moduleStaticState.category = event.target.value;
  moduleStaticState.saved = null;
});
document.querySelector("[data-static-font]")?.addEventListener("change", (event) => { moduleStaticState.text.font = event.target.value; moduleStaticState.saved = null; renderStaticModuleWorkspace(); });
document.querySelector("[data-static-weight]")?.addEventListener("change", (event) => { moduleStaticState.text.weight = event.target.value; moduleStaticState.saved = null; renderStaticModuleWorkspace(); });
document.querySelector("[data-static-save-open]")?.addEventListener("click", () => {
  const isText = moduleStaticState.mode === "text";
  if ((!isText && !moduleStaticState.fixedImage) || (isText && !moduleStaticState.text.content.trim())) {
    showToast(isText ? "请先填写示例文字" : "请先上传一张固定图片");
    return;
  }
  saveStaticModuleAsset();
});
document.addEventListener("click", (event) => {
  const materialRemove = event.target.closest("[data-module-material-remove]");
  const materialPreview = event.target.closest("[data-module-material-preview]");
  const analysisRemove = event.target.closest("[data-module-analysis-remove]");
  const candidateAction = event.target.closest("[data-module-candidate-action]");
  const candidate = event.target.closest("[data-module-candidate]");
  const taskImagePreview = event.target.closest("[data-module-task-image-preview]");
  const freeTaskImageAction = event.target.closest("[data-free-task-image-action]");
  const freeTaskCopy = event.target.closest("[data-free-task-copy]");
  const freeTaskReferenceToggle = event.target.closest("[data-free-task-reference-toggle]");
  const freeTaskSummary = event.target.closest(".free-creation-task-list .module-task-summary");
  const taskSelect = event.target.closest("[data-module-task-select]");
  const taskReferenceToggle = event.target.closest("[data-module-task-reference-toggle]");
  const taskRegenerate = event.target.closest("[data-module-task-regenerate]");
  const taskAddModule = event.target.closest("[data-module-task-add-module]");
  const taskCopy = event.target.closest("[data-module-task-copy]");
  const taskEditImage = event.target.closest("[data-module-task-edit-image]");
  const taskOutpaint = event.target.closest("[data-module-task-outpaint]");
  const taskBoutique = event.target.closest("[data-module-task-boutique]");
  const taskAddText = event.target.closest("[data-module-task-add-text]");
  const moduleTaskLink = event.target.closest("[data-open-module-image-task]");
  if (materialRemove) {
    const type = materialRemove.dataset.moduleMaterialRemove;
    moduleImageState.materials[type].splice(Number(materialRemove.dataset.moduleMaterialIndex), 1);
    if (type === "product") {
      moduleImageState.productAnalysis = "";
      moduleImageState.productAnalyses = [];
    }
    renderModuleImageWorkspace();
    return;
  }
  if (materialPreview) {
    openModuleMaterialPreview(materialPreview.dataset.moduleMaterialPreview, materialPreview.dataset.moduleMaterialIndex);
    return;
  }
  if (analysisRemove) {
    event.preventDefault();
    event.stopPropagation();
    moduleImageState.analysisImages.splice(Number(analysisRemove.dataset.moduleAnalysisRemove), 1);
    moduleImageState.analysisResult = null;
    moduleImageState.analysisApplied = { product: false, scene: false };
    renderModuleImageWorkspace();
    return;
  }
  if (candidateAction) {
    event.preventDefault();
    event.stopPropagation();
    const candidateId = candidateAction.dataset.moduleCandidateId || "";
    if (candidateId) moduleImageState.selectedCandidateId = candidateId;
    const selected = getModuleCandidateSelection(candidateId);
    switch (candidateAction.dataset.moduleCandidateAction) {
      case "regenerate":
        generateModuleImageTask();
        break;
      case "outpaint":
        if (!selected) {
          showToast("请先选择一张已生成的图片");
          break;
        }
        openOutpaintEditor(selected.candidate.image, "module-image");
        break;
      case "text":
        openGeneratedImageTextEditor(selected?.candidate.image, {
          backPage: "module-image",
          name: selected?.task.title || "模块生图结果"
        });
        break;
      case "boutique":
        addSelectedModuleResultToBoutique(candidateId);
        break;
      case "personal-module":
        openModulePersonalInfoModal(candidateId);
        break;
      case "download":
        downloadSelectedModuleResult(candidateId);
        break;
    }
    renderModuleAssetWorkspace();
    return;
  }
  if (freeTaskReferenceToggle) {
    event.preventDefault();
    event.stopPropagation();
    const record = freeTaskReferenceToggle.closest(".module-task-item");
    const taskList = record?.closest("[data-free-creation-record-list]");
    taskList?.querySelectorAll(".module-task-item.is-active").forEach((item) => {
      if (item !== record) {
        item.classList.remove("is-active");
        item.querySelector(".module-task-summary")?.setAttribute("aria-expanded", "false");
      }
    });
    record?.classList.add("is-active");
    record?.querySelector(".module-task-summary")?.setAttribute("aria-expanded", "true");
    const referenceRow = freeTaskReferenceToggle.closest(".module-task-reference-row");
    const referenceList = referenceRow?.querySelector(":scope > div");
    const expanded = freeTaskReferenceToggle.getAttribute("aria-expanded") === "true";
    freeTaskReferenceToggle.setAttribute("aria-expanded", String(!expanded));
    const label = freeTaskReferenceToggle.querySelector("i");
    if (label) label.textContent = expanded ? "展开" : "收起";
    if (referenceList) referenceList.hidden = expanded;
    return;
  }
  if (taskImagePreview) {
    openDrawerImagePreview(taskImagePreview.dataset.moduleTaskImagePreview, { caption: taskImagePreview.dataset.moduleTaskImageAlt || "图片预览" });
    return;
  }
  if (freeTaskImageAction) {
    const action = freeTaskImageAction.dataset.freeTaskImageAction;
    if (action === "outpaint") openOutpaintEditor(freeTaskImageAction.dataset.freeTaskImage || "assets/product-cover-01.png", "creation-plaza");
    else if (action === "boutique") showToast("已添加到精品库");
    else if (action === "text") openGeneratedImageTextEditor(freeTaskImageAction.dataset.freeTaskImage || "assets/product-cover-01.png", {
      backPage: "creation-plaza",
      name: "自由创作结果"
    });
    else if (action === "download") showToast("已开始下载生成结果");
    return;
  }
  if (freeTaskCopy) {
    showToast("描述文案已复制");
    return;
  }
  if (freeTaskSummary) {
    event.preventDefault();
    event.stopPropagation();
    const record = freeTaskSummary.closest(".module-task-item");
    const taskList = record?.closest("[data-free-creation-record-list]");
    taskList?.querySelectorAll(".module-task-item.is-active").forEach((item) => {
      if (item !== record) {
        item.classList.remove("is-active");
        item.querySelector(".module-task-summary")?.setAttribute("aria-expanded", "false");
      }
    });
    record?.classList.add("is-active");
    freeTaskSummary.setAttribute("aria-expanded", "true");
    return;
  }
  if (candidate) {
    if (moduleImageState.selectedCandidateId === candidate.dataset.moduleCandidate) {
      const image = candidate.querySelector("img")?.getAttribute("src");
      if (image) openDrawerImagePreview(image);
      return;
    }
    moduleImageState.selectedCandidateId = candidate.dataset.moduleCandidate;
    renderModuleAssetWorkspace();
    return;
  }
  if (taskRegenerate) {
    selectModuleTask(taskRegenerate.dataset.moduleTaskRegenerate);
    generateModuleImageTask();
    return;
  }
  if (taskAddModule) {
    const task = selectModuleTask(taskAddModule.dataset.moduleTaskAddModule);
    if (task?.status === "done") addModuleImageAsset();
    else showToast("请等待图片生成完成后再加入个人模块");
    return;
  }
  if (taskCopy) {
    const task = moduleImageState.tasks.find((item) => item.id === taskCopy.dataset.moduleTaskCopy);
    if (task?.prompt) navigator.clipboard?.writeText(task.prompt).catch(() => {});
    showToast("描述文案已复制");
    return;
  }
  if (taskEditImage) {
    const task = selectModuleTask(taskEditImage.dataset.moduleTaskEditImage);
    const image = task?.candidates[0]?.image;
    if (!image) { showToast("请等待图片生成完成后再编辑"); return; }
    setModuleTaskDrawer(false);
    openDrawerImagePreview(image, { caption: "图片编辑（原型模拟）" });
    showToast("已进入图片编辑");
    return;
  }
  if (taskOutpaint) {
    const task = selectModuleTask(taskOutpaint.dataset.moduleTaskOutpaint);
    const image = task?.candidates[0]?.image;
    if (!image) { showToast("请等待图片生成完成后再扩图"); return; }
    openOutpaintEditor(image, "module-image");
    return;
  }
  if (taskBoutique) {
    const task = selectModuleTask(taskBoutique.dataset.moduleTaskBoutique);
    if (!task?.candidates[0]) { showToast("请等待图片生成完成后再加入精品库"); return; }
    addSelectedModuleResultToBoutique(task.candidates[0].id);
    return;
  }
  if (taskAddText) {
    continueModuleTaskToText(taskAddText.dataset.moduleTaskAddText);
    return;
  }
  if (taskReferenceToggle || (taskSelect && event.target.closest("[data-module-task-summary]"))) {
    const taskId = taskReferenceToggle?.dataset.moduleTaskReferenceToggle || taskSelect.dataset.moduleTaskSelect;
    const isReferenceExpanded = moduleImageState.expandedTaskId === taskId;
    moduleImageState.selectedTaskId = taskId;
    moduleImageState.expandedTaskId = isReferenceExpanded ? "" : taskId;
    moduleImageState.selectedCandidateId = getModuleSelectedTask()?.candidates[0]?.id || "";
    renderModuleAssetWorkspace();
    renderModuleTaskList();
    return;
  }
  if (moduleTaskLink) {
    openModuleImageWorkspace({ taskId: moduleTaskLink.dataset.openModuleImageTask, backPage: "creation-records" });
    return;
  }
  const staticSize = event.target.closest("[data-static-size-value]");
  const staticColor = event.target.closest("[data-static-color-value]");
  const staticAlign = event.target.closest("[data-static-align-value]");
  if (staticSize) {
    moduleStaticState.text.size = staticSize.dataset.staticSizeValue;
    moduleStaticState.saved = null;
    renderStaticModuleWorkspace();
    return;
  }
  if (staticColor) {
    moduleStaticState.text.color = staticColor.dataset.staticColorValue;
    moduleStaticState.saved = null;
    renderStaticModuleWorkspace();
    return;
  }
  if (staticAlign) {
    moduleStaticState.text.align = staticAlign.dataset.staticAlignValue;
    moduleStaticState.saved = null;
    renderStaticModuleWorkspace();
  }
});


document.addEventListener("click", (event) => {
  const addToBoutique = event.target.closest("[data-add-to-boutique]");
  if (addToBoutique) {
    const card = addToBoutique.closest("[data-creation-task-card]");
    addTaskToBoutique(card);
    updateTaskBoutiqueState(card, "saved");
    state.materialPrimary = "创作素材";
    state.materialSecondary = "图片模块";
    setMaterialLibraryTitle("精品库");
    filterMaterials();
    showToast("已加入精品库，可作为素材继续创作");
    return;
  }
});

document.querySelectorAll("[data-creation-upload]").forEach((button) => {
  button.addEventListener("click", () => {
    const type = button.dataset.creationUpload;
    const modalMap = {
      product: els.productSelectModal,
      reference: els.referenceSelectModal,
      model: els.modelSelectModal
    };
    if (modalMap[type]) {
      if (type === "model") renderCreationModelPicker();
      openPrototypeModal(modalMap[type]);
      return;
    }
    const nextValue = !state.creation[`${type}Uploaded`];
    setCreationUpload(type, nextValue);
    showToast(nextValue ? "已模拟上传" : "已移除上传内容");
  });
});

document.querySelector("[data-template-open]")?.addEventListener("click", () => {
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

els.generationModelTrigger?.addEventListener("click", () => {
  const open = !els.generationModelMenu?.classList.contains("is-open");
  closePrototypeModals();
  els.generationModelMenu?.classList.toggle("is-open", open);
  els.generationModelMenu?.setAttribute("aria-hidden", String(!open));
  els.generationModelTrigger?.setAttribute("aria-expanded", String(open));
});

document.querySelectorAll("[data-generation-model-option]").forEach((button) => {
  button.addEventListener("click", () => {
    state.creation.generationModel = button.dataset.generationModelOption;
    document.querySelectorAll("[data-generation-model-option]").forEach((item) => {
      item.classList.toggle("is-active", item === button);
    });
    refreshCreationParamLabels();
    closeCreationModelMenu();
    showToast(`已切换为${state.creation.generationModel}`);
  });
});

document.addEventListener("click", (event) => {
  if (!event.target.closest("[data-generation-model-selector]")) closeCreationModelMenu();
});

document.querySelectorAll(".creation-select-filters button, .creation-reference-tabs button, .creation-model-subfilters button").forEach((button) => {
  button.addEventListener("click", () => {
    const group = button.parentElement;
    group?.querySelectorAll("button").forEach((item) => item.classList.toggle("is-active", item === button));
  });
});

document.querySelectorAll("[data-reference-tab]").forEach((button) => {
  button.addEventListener("click", () => {
    const tab = button.dataset.referenceTab;
    document.querySelectorAll("[data-reference-panel]").forEach((panel) => {
      const active = panel.dataset.referencePanel === tab;
      panel.classList.toggle("is-active", active);
      panel.setAttribute("aria-hidden", String(!active));
    });
  });
});

document.querySelectorAll("[data-creation-select-product]").forEach((button) => {
  button.addEventListener("click", () => {
    setCreationUpload("product", true);
    closePrototypeModals();
    showToast("已选择商品图");
  });
});

document.querySelectorAll("[data-product-image-choice]").forEach((button) => {
  button.addEventListener("click", () => {
    setProductPickerImage(button, !productPickerSelections.has(button.dataset.productImageId));
  });
});

document.querySelectorAll("[data-product-source-tab]").forEach((button) => {
  button.addEventListener("click", () => {
    setProductSourcePanel(button.dataset.productSourceTab || "local");
  });
});

document.querySelectorAll("[data-product-picker-card]").forEach((button) => {
  button.addEventListener("click", () => {
    selectProductPickerProduct(button.dataset.productId);
  });
});

document.querySelectorAll("[data-product-color-filter]").forEach((button) => {
  button.addEventListener("click", () => {
    const panel = button.closest("[data-product-detail-panel]");
    filterProductDetailColor(panel?.dataset.productDetailPanel, button.dataset.productColorFilter || "all");
  });
});

document.querySelectorAll("[data-product-picker-all]").forEach((button) => {
  button.addEventListener("click", () => {
    const productId = button.dataset.productPickerAll;
    const choices = Array.from(document.querySelectorAll(`[data-product-image-choice][data-product-id="${productId}"]`));
    const allSelected = choices.length > 0 && choices.every((choice) => productPickerSelections.has(choice.dataset.productImageId));
    choices.forEach((choice) => setProductPickerImage(choice, !allSelected));
  });
});

document.querySelector("[data-product-picker-clear]")?.addEventListener("click", () => {
  closePrototypeModals();
});

document.querySelector("[data-product-picker-confirm]")?.addEventListener("click", () => {
  const selections = getProductPickerSelections();
  if (!selections.length) {
    showToast("请至少选择一张商品图");
    return;
  }
  state.creation.productImages = selections;
  setCreationUpload("product", true);
  closePrototypeModals();
  showToast(`已选择 ${selections.length} 张商品图，来自 ${new Set(selections.map((item) => item.productId)).size} 个商品`);
});

document.querySelector("[data-product-picker-search]")?.addEventListener("input", filterProductPicker);

document.querySelector("[data-product-picker-filter]")?.addEventListener("change", (event) => {
  productPickerFilter = event.target.value || "全部";
  filterProductPicker();
});

document.querySelector("[data-product-picker-brand]")?.addEventListener("change", (event) => {
  productPickerBrand = event.target.value || "全部品牌";
  filterProductPicker();
});

document.querySelector("[data-product-picker-color]")?.addEventListener("change", (event) => {
  productPickerColor = event.target.value || "全部颜色";
  filterProductPicker();
});

document.querySelector("[data-product-local-upload]")?.addEventListener("click", () => {
  document.querySelector("[data-product-local-file]")?.click();
});

document.querySelector("[data-product-local-file]")?.addEventListener("change", (event) => {
  const [file] = event.target.files || [];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = () => {
    const id = `local-product-${Date.now()}`;
    productPickerSelections.set(id, {
      id,
      productId: "本地上传",
      productName: "本地上传",
      image: reader.result,
      imageName: file.name || "本地商品图"
    });
    renderProductPickerSelection();
    showToast("已上传本地商品图");
  };
  reader.readAsDataURL(file);
});

document.querySelector("[data-reference-local-upload]")?.addEventListener("click", () => {
  document.querySelector("[data-reference-local-file]")?.click();
});

document.querySelector("[data-reference-local-file]")?.addEventListener("change", (event) => {
  const [file] = event.target.files || [];
  if (!file) return;
  const reader = new FileReader();
  reader.addEventListener("load", () => {
    setReferencePickerSelection({ image: String(reader.result), name: file.name });
    showToast("本地参考图已加入待选区");
  });
  reader.readAsDataURL(file);
});

document.querySelectorAll("[data-reference-color-choice]").forEach((button) => {
  button.addEventListener("click", () => {
    setReferencePickerSelection({ image: button.dataset.referenceImage, name: button.dataset.referenceName });
  });
});

document.querySelectorAll("[data-reference-source-choice]").forEach((button) => {
  button.addEventListener("click", () => {
    setReferencePickerSelection({ image: button.dataset.referenceImage, name: button.dataset.referenceName });
  });
});

document.querySelectorAll("[data-reference-more-colors]").forEach((button) => {
  button.addEventListener("click", () => {
    const card = button.closest("[data-reference-product-card]");
    if (!button.dataset.referenceCollapsedLabel) button.dataset.referenceCollapsedLabel = button.textContent;
    const expanded = card?.classList.toggle("is-expanded");
    button.textContent = expanded ? "收起" : button.dataset.referenceCollapsedLabel;
    button.setAttribute("aria-label", expanded ? "收起其余颜色" : button.dataset.referenceMoreColors || "展开其余颜色");
  });
});

document.querySelector("[data-reference-product-search]")?.addEventListener("input", filterReferenceProducts);

document.querySelector("[data-reference-filter-toggle]")?.addEventListener("click", () => {
  const menu = document.querySelector("[data-reference-filter-menu]");
  const open = menu?.hidden;
  if (!menu) return;
  menu.hidden = !open;
  document.querySelector("[data-reference-filter-toggle]")?.setAttribute("aria-expanded", String(open));
});

document.querySelectorAll("[data-reference-filter]").forEach((button) => {
  button.addEventListener("click", () => {
    referenceProductFilter = button.dataset.referenceFilter || "all";
    document.querySelectorAll("[data-reference-filter]").forEach((item) => item.classList.toggle("is-active", item === button));
    document.querySelector("[data-reference-filter-menu]").hidden = true;
    document.querySelector("[data-reference-filter-toggle]")?.setAttribute("aria-expanded", "false");
    filterReferenceProducts();
  });
});

document.querySelector("[data-reference-picker-clear]")?.addEventListener("click", () => {
  setReferencePickerSelection(null);
});

document.querySelector("[data-reference-picker-cancel]")?.addEventListener("click", () => {
  closePrototypeModals();
});

document.querySelector("[data-reference-picker-confirm]")?.addEventListener("click", () => {
  if (!referencePickerSelection) {
    showToast("请先选择一张参考图");
    return;
  }
  setCreationUpload("reference", true);
  if (state.creation.inputMode === "reference") setSingleReplicaReference(referencePickerSelection);
  closePrototypeModals();
  showToast(`已选择参考图：${referencePickerSelection.name}`);
});

document.querySelectorAll("[data-creation-model-gender]").forEach((button) => {
  button.addEventListener("click", () => {
    creationModelGenderFilter = button.dataset.creationModelGender || "全部";
    renderCreationModelPicker();
  });
});

document.querySelectorAll("[data-creation-model-style]").forEach((button) => {
  button.addEventListener("click", () => {
    creationModelStyleFilter = button.dataset.creationModelStyle || "全部";
    renderCreationModelPicker();
  });
});

document.querySelectorAll("[data-creation-model-option]").forEach((button) => {
  button.addEventListener("click", () => {
    const name = button.dataset.modelName || "";
    if (!name) return;
    const selected = new Set(state.creation.modelNames || []);
    if (selected.has(name)) {
      selected.delete(name);
    } else if (selected.size >= 3) {
      showToast("最多选择 3 位模特");
      return;
    } else {
      selected.add(name);
    }
    state.creation.modelNames = Array.from(selected);
    state.creation.modelName = state.creation.modelNames[0] || "";
    renderCreationModelPicker();
  });
});

document.querySelector("[data-creation-model-confirm]")?.addEventListener("click", () => {
  if (!state.creation.modelNames?.length) {
    showToast("请先选择模特");
    return;
  }
  setCreationUpload("model", true);
  closePrototypeModals();
  showToast(`已选择 ${state.creation.modelNames.length} 位模特`);
});

document.querySelector("[data-record-open]")?.addEventListener("click", () => {
  openCreationRecordsPage();
});

document.addEventListener("click", (event) => {
  const openOutpaintButton = event.target.closest("[data-open-outpaint]");
  const outpaintResultAction = event.target.closest("[data-outpaint-result-action]");

  if (openOutpaintButton) {
    const taskCard = openOutpaintButton.closest("[data-creation-task-card]");
    const sourceImage = taskCard?.querySelector(".outpaint-before img")?.getAttribute("src") || state.outpaint.sourceImage;
    openOutpaintEditor(sourceImage, taskCard ? "creation-records" : "creation-plaza");
    return;
  }

  if (outpaintResultAction) {
    outpaintEls.resultMenu?.classList.remove("show");
    const action = outpaintResultAction.dataset.outpaintResultAction;
    const messages = {
      download: "已模拟下载扩图结果",
      text: "已打开文字编辑入口",
      save: "扩图结果已保存到成品图片",
      source: "来源：创作广场生成结果"
    };
    if (action === "continue") {
      outpaintEls.panel?.classList.add("show");
      document.querySelector("[data-outpaint-open-panel]")?.classList.add("active");
      showToast("已打开扩图参数，可继续扩图");
    } else {
      showToast(messages[action] || "操作已完成");
    }
    return;
  }

  if (outpaintEls.resultMenu?.classList.contains("show") && !event.target.closest("[data-outpaint-result-menu]")) {
    outpaintEls.resultMenu.classList.remove("show");
  }
});

document.querySelector("[data-outpaint-return]")?.addEventListener("click", closeOutpaintEditor);

document.querySelector("[data-outpaint-open-panel]")?.addEventListener("click", () => {
  const open = outpaintEls.panel?.classList.toggle("show");
  document.querySelector("[data-outpaint-open-panel]")?.classList.toggle("active", Boolean(open));
});

document.querySelector("[data-outpaint-cancel]")?.addEventListener("click", () => {
  outpaintEls.panel?.classList.remove("show");
  document.querySelector("[data-outpaint-open-panel]")?.classList.remove("active");
  showToast("已取消扩图设置");
});

document.querySelector("[data-outpaint-generate]")?.addEventListener("click", generateOutpaint);

document.querySelector("[data-outpaint-upload]")?.addEventListener("click", () => {
  outpaintEls.file?.click();
});

document.querySelector("[data-outpaint-download]")?.addEventListener("click", () => {
  showToast(state.outpaint.generated ? "已模拟下载扩图结果" : "请先生成扩图结果");
});

outpaintEls.file?.addEventListener("change", () => {
  const file = outpaintEls.file.files?.[0];
  if (!file) return;
  outpaintEls.file.value = "";
  if (!file.type.startsWith("image/")) {
    showToast("请选择图片文件");
    return;
  }
  const imageUrl = URL.createObjectURL(file);
  const image = new Image();
  image.onload = () => {
    state.outpaint.sourceImage = imageUrl;
    state.outpaint.sourceWidth = image.naturalWidth || 2048;
    state.outpaint.sourceHeight = image.naturalHeight || 2048;
    const next = outpaintPresetSize(state.outpaint.ratio, Number(outpaintEls.scale?.value || 1));
    if (outpaintExceedsLimit(next)) {
      state.outpaint.scale = 1;
      if (outpaintEls.scale) outpaintEls.scale.value = "1";
      const fallback = outpaintPresetSize(state.outpaint.ratio, 1);
      state.outpaint.width = fallback.width;
      state.outpaint.height = fallback.height;
    } else {
      state.outpaint.width = next.width;
      state.outpaint.height = next.height;
    }
    resetOutpaintResult();
    renderOutpaint();
    showToast(`已上传：${file.name}`);
  };
  image.onerror = () => {
    URL.revokeObjectURL(imageUrl);
    showToast("图片读取失败，请重新上传");
  };
  image.src = imageUrl;
});

outpaintEls.ratioList?.addEventListener("click", (event) => {
  const button = event.target.closest("[data-outpaint-ratio]");
  if (!button) return;
  updateOutpaintRatio(button.dataset.outpaintRatio);
});

outpaintEls.scale?.addEventListener("change", () => {
  updateOutpaintRatio(state.outpaint.ratio);
});

outpaintEls.boardStrip?.addEventListener("pointerdown", (event) => {
  if (!event.target.closest(".integrated-outpaint-artboard")) return;
  outpaintDragState.active = true;
  outpaintDragState.pointerId = event.pointerId;
  outpaintDragState.startX = event.clientX;
  outpaintDragState.startY = event.clientY;
  outpaintDragState.originX = state.outpaint.canvasX;
  outpaintDragState.originY = state.outpaint.canvasY;
  outpaintEls.boardStrip.classList.add("dragging");
  outpaintEls.boardStrip.setPointerCapture?.(event.pointerId);
});

outpaintEls.boardStrip?.addEventListener("pointermove", (event) => {
  if (!outpaintDragState.active || event.pointerId !== outpaintDragState.pointerId) return;
  state.outpaint.canvasX = outpaintDragState.originX + event.clientX - outpaintDragState.startX;
  state.outpaint.canvasY = outpaintDragState.originY + event.clientY - outpaintDragState.startY;
  renderOutpaintTransform();
});

const endOutpaintDrag = () => {
  outpaintDragState.active = false;
  outpaintDragState.pointerId = null;
  outpaintEls.boardStrip?.classList.remove("dragging");
};

outpaintEls.boardStrip?.addEventListener("pointerup", endOutpaintDrag);
outpaintEls.boardStrip?.addEventListener("pointercancel", endOutpaintDrag);

outpaintEls.canvasShell?.addEventListener("wheel", (event) => {
  if (!document.body.classList.contains("is-outpaint-editor")) return;
  if (event.target.closest("[data-outpaint-panel], .integrated-outpaint-dock, .integrated-outpaint-right-rail, [data-outpaint-return], [data-outpaint-result-menu]")) return;
  event.preventDefault();
  if (event.ctrlKey || event.metaKey) {
    zoomOutpaint(event.deltaY > 0 ? -.08 : .08, event.clientX, event.clientY);
  } else {
    panOutpaint(-event.deltaX, -event.deltaY);
  }
}, { passive: false });

outpaintEls.resultSlot?.addEventListener("contextmenu", placeOutpaintResultMenu);

els.creationTaskStatusButtons.forEach((button) => {
  button.addEventListener("click", () => {
    els.creationTaskStatusButtons.forEach((item) => item.classList.toggle("is-active", item === button));
    filterCreationTasks();
  });
});

els.creationTaskTypeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    els.creationTaskTypeButtons.forEach((item) => item.classList.toggle("is-active", item === button));
    if (button.dataset.creationTaskType !== "AI工具") {
      els.creationTaskAiToolButtons.forEach((item) => item.classList.toggle("is-active", item.dataset.creationAiToolType === "all"));
    }
    filterCreationTasks();
  });
});

els.creationTaskAiToolButtons.forEach((button) => {
  button.addEventListener("click", () => {
    els.creationTaskAiToolButtons.forEach((item) => item.classList.toggle("is-active", item === button));
    filterCreationTasks();
  });
});

els.creationTaskSearch?.addEventListener("input", filterCreationTasks);

document.querySelector("[data-back-creation]")?.addEventListener("click", () => {
  leaveCreationDetail();
});

document.querySelectorAll("[data-detail-upload]").forEach((button) => {
  button.addEventListener("click", (event) => {
    const preview = event.target.closest("[data-detail-material-preview]");
    if (preview) {
      event.preventDefault();
      event.stopPropagation();
      openDetailImageLightbox(preview.dataset.detailImagePreview, preview.alt || "素材全屏预览");
      return;
    }
    const type = button.dataset.detailUpload;
    if (!state.creation.detailReplicaEditing) return;
    if (state.creation.inputMode === "reference" && type === "product") {
      openModuleProductPicker("single-replica");
      return;
    }
    if (state.creation.inputMode === "reference" && type === "reference") {
      document.querySelectorAll("[data-reference-tab]").forEach((tab) => tab.classList.toggle("is-active", tab.dataset.referenceTab === "local"));
      document.querySelectorAll("[data-reference-panel]").forEach((panel) => {
        const active = panel.dataset.referencePanel === "local";
        panel.classList.toggle("is-active", active);
        panel.setAttribute("aria-hidden", String(!active));
      });
      openPrototypeModal(els.referenceSelectModal);
      return;
    }
    if (type === "model") {
      renderCreationModelPicker();
      openPrototypeModal(els.modelSelectModal);
      return;
    }
    setCreationUpload(type, true);
    showToast("素材已更新");
  });
});

document.querySelectorAll("[data-detail-remove]").forEach((button) => {
  button.addEventListener("click", (event) => {
    event.stopPropagation();
    if (!state.creation.detailReplicaEditing) return;
    const type = button.dataset.detailRemove;
    if (state.creation.inputMode === "reference") {
      if (type === "product") setSingleReplicaProductImages([]);
      if (type === "reference") setSingleReplicaReference(null);
      showToast("素材已移除");
      return;
    }
    setCreationUpload(type, false);
    showToast(type === "model" ? "模特已移除" : "素材已移除");
  });
});

function openDetailImageLightbox(source, alt = "图片全屏预览") {
  const lightbox = document.querySelector("[data-detail-image-lightbox]");
  const image = lightbox?.querySelector("[data-detail-image-lightbox-image]");
  if (!lightbox || !image || !source) return;
  image.src = source;
  image.alt = alt;
  lightbox.classList.add("is-open");
  lightbox.setAttribute("aria-hidden", "false");
}

function closeDetailImageLightbox() {
  const lightbox = document.querySelector("[data-detail-image-lightbox]");
  if (!lightbox) return;
  lightbox.classList.remove("is-open");
  lightbox.setAttribute("aria-hidden", "true");
}

document.addEventListener("click", (event) => {
  const actionButton = event.target.closest("[data-detail-image-action]");
  if (actionButton) {
    const item = actionButton.closest(".detail-result-item");
    const source = item?.querySelector("[data-detail-image-preview]")?.dataset.detailImagePreview || "";
    const action = actionButton.dataset.detailImageAction;
    if (action === "下载" && source) {
      const link = document.createElement("a");
      link.href = source;
      link.download = "AI商品图.png";
      link.click();
    } else if (action === "扩图") {
      openOutpaintEditor(source || state.outpaint.sourceImage);
    } else if (action === "编辑文字") {
      openGeneratedImageTextEditor(source, {
        backPage: state.creation.inputMode === "reference" ? "creation-plaza" : state.detailBackPage || "creation-plaza",
        name: state.creation.inputMode === "reference" ? "单图复刻结果" : "自由创作结果"
      });
    } else {
      showToast("已加入精品库，可作为素材继续创作");
    }
    return;
  }

  const previewButton = event.target.closest("[data-detail-image-preview]");
  if (previewButton) {
    openDetailImageLightbox(previewButton.dataset.detailImagePreview, previewButton.alt || "生成结果全屏预览");
    return;
  }

  const lightbox = event.target.closest("[data-detail-image-lightbox]");
  if (event.target.closest("[data-detail-image-lightbox-close]") || (lightbox && event.target === lightbox)) {
    closeDetailImageLightbox();
  }
});

document.addEventListener("keydown", (event) => {
  if ((event.key === "Enter" || event.key === " ") && event.target.closest("[data-suite-preview-image]")) {
    event.preventDefault();
    event.target.click();
    return;
  }
  if (event.key === "Escape") {
    closeDetailImageLightbox();
    return;
  }
  const preview = event.target.closest?.("[data-detail-material-preview]");
  if (preview && ["Enter", " "].includes(event.key)) {
    event.preventDefault();
    openDetailImageLightbox(preview.dataset.detailImagePreview, preview.alt || "素材全屏预览");
  }
});

document.addEventListener("click", (event) => {
  const button = event.target.closest("[data-copy-detail-prompt]");
  if (!button) return;
  const prompt = button.closest(".detail-task-prompt-row")?.querySelector("[data-detail-prompt-text]")?.textContent.trim() || "";
  if (navigator.clipboard?.writeText) navigator.clipboard.writeText(prompt).catch(() => {});
  showToast("文本描述已复制");
});

document.querySelector("[data-detail-regenerate]")?.addEventListener("click", submitDetailRegeneration);
document.querySelector("[data-detail-start-regenerate]")?.addEventListener("click", beginDetailRegenerationEdit);

document.addEventListener("click", (event) => {
  const button = event.target.closest("[data-suite-canvas-viewport] [data-native-record-retry]");
  if (!button) return;
  event.preventDefault();
  event.stopImmediatePropagation();
  retryAllSuiteFailedPages();
}, true);

document.addEventListener("click", (event) => {
  const button = event.target.closest("[data-detail-retry-failed]");
  if (!button) return;
  event.preventDefault();
  retryDetailFailedTask(button);
});

document.addEventListener("click", (event) => {
  if (!event.target.closest("[data-detail-regenerate-all]")) return;
  submitDetailRegeneration();
});

document.addEventListener("click", (event) => {
  const button = event.target.closest("[data-native-record-retry]");
  if (!button) return;
  const cost = button.dataset.retryCost || "0";
  if (button.closest("[data-suite-canvas-viewport]")) {
    retryAllSuiteFailedPages();
    return;
  }
  const outcome = button.closest(".native-record-outcome");
  const outcomeHost = outcome?.parentElement;
  outcome?.remove();
  outcomeHost?.classList.remove("has-native-record-outcome");
  if (outcomeHost?.matches(".model-create-result-panel")) {
    setModelCreateState("generating");
    window.setTimeout(() => {
      setModelCreateState("complete");
      showToast("模特图已重新生成完成");
    }, 900);
  }
  showToast(`正在重新生成，将扣除 ${cost} 融豆`);
});

document.addEventListener("click", (event) => {
  const button = event.target.closest("[data-record-retry]");
  if (!button) return;
  const cost = button.dataset.retryCost || "0";
  button.disabled = true;
  button.textContent = "图片生成中";
  showToast(`正在重新生成，将扣除 ${cost} 融豆`);
});

document.querySelectorAll("[data-modal-close]").forEach((button) => {
  button.addEventListener("click", (event) => {
    const contentPicker = button.closest("[data-template-content-modal]");
    if (contentPicker) {
      event.preventDefault();
      event.stopPropagation();
      closePrototypeModal(contentPicker);
      return;
    }
    closePrototypeModals();
  });
});

document.addEventListener("click", (event) => {
  if (!event.target.closest(".prototype-modal [data-modal-close]")) return;
  event.preventDefault();
  const contentPicker = event.target.closest("[data-template-content-modal]");
  if (contentPicker) {
    closePrototypeModal(contentPicker);
    return;
  }
  closePrototypeModals();
});

document.querySelectorAll(".prototype-modal").forEach((modal) => {
  modal.addEventListener("click", (event) => {
    if (event.target === modal) closePrototypeModals();
  });
});

document.querySelector("[data-model-create-open]")?.addEventListener("click", openModelCreateModal);
document.querySelectorAll("[data-model-create-page-back]").forEach((button) => {
  button.addEventListener("click", leaveModelCreatePage);
});
document.querySelector("[data-model-create-task-drawer]")?.addEventListener("click", () => setModelCreateTaskDrawer(true));
document.querySelector("[data-model-create-task-drawer-close]")?.addEventListener("click", () => setModelCreateTaskDrawer(false));
document.querySelector("[data-model-create-task-mask]")?.addEventListener("click", () => setModelCreateTaskDrawer(false));
document.addEventListener("click", (event) => {
  if (event.target.closest("[data-model-task-regenerate]")) {
    setModelCreateTaskDrawer(false);
    startModelPreviewGeneration();
    return;
  }
  if (event.target.closest("[data-model-task-add-library]")) {
    setModelCreateTaskDrawer(false);
    openModelLibraryConfirmModal();
  }
});

document.querySelector("[data-model-query-form]")?.addEventListener("submit", (event) => {
  event.preventDefault();
  state.modelQuery = {
    name: els.modelNameSearch?.value || "",
    creator: els.modelCreatorSearch?.value || "",
    age: els.modelAgeFilter?.value || "",
    gender: els.modelGenderSelect?.value || "",
    skin: els.modelSkinFilter?.value || ""
  };
  filterModels();
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
document.querySelector("[data-model-add-library]")?.addEventListener("click", openModelLibraryConfirmModal);
document.querySelector("[data-model-library-confirm-submit]")?.addEventListener("click", () => {
  const modal = els.modelConfirmModal;
  if (modal?.dataset.modelModalMode !== "detail") {
    createModelFromForm();
    return;
  }
  const model = state.activeModel;
  if (!model) {
    closePrototypeModal(modal);
    return;
  }
  const name = modal.querySelector("[data-model-library-confirm-name]")?.value.trim();
  const gender = modal.querySelector("[data-model-library-confirm-gender]")?.value.trim();
  const age = modal.querySelector("[data-model-library-confirm-age]")?.value.trim();
  const note = modal.querySelector("[data-model-library-confirm-note]")?.value.trim();
  if (name) model.name = name;
  if (gender) model.gender = gender;
  if (age) model.age = age;
  if (note) model.note = note;
  filterModels();
  closePrototypeModal(modal);
  showToast("模特信息已确认");
});
document.querySelector("[data-model-regenerate]")?.addEventListener("click", startModelPreviewGeneration);
const modelReferencePreview = document.querySelector("[data-model-reference-preview]");
const openModelReferencePreview = (event) => {
  event.stopPropagation();
  openDrawerImagePreview(modelReferencePreview?.getAttribute("src"));
};
modelReferencePreview?.addEventListener("click", openModelReferencePreview);
modelReferencePreview?.addEventListener("keydown", (event) => {
  if (event.key !== "Enter" && event.key !== " ") return;
  event.preventDefault();
  openModelReferencePreview(event);
});
document.querySelector("[data-model-reference]")?.addEventListener("click", openModelReferencePicker);
document.querySelector("[data-model-reference-remove]")?.addEventListener("click", (event) => {
  event.stopPropagation();
  removeModelReferenceAnalysis();
});
document.querySelector("[data-model-reference-picker-close]")?.addEventListener("click", closeModelReferencePicker);
document.querySelectorAll("[data-model-reference-source]").forEach((button) => {
  button.addEventListener("click", () => setModelReferencePickerSource(button.dataset.modelReferenceSource));
});
document.querySelector("[data-model-reference-file-trigger]")?.addEventListener("click", () => {
  document.querySelector("[data-model-reference-file]")?.click();
});
document.querySelector("[data-model-reference-file]")?.addEventListener("change", (event) => {
  const file = event.target.files?.[0];
  if (!file) return;
  const reader = new FileReader();
  reader.addEventListener("load", () => {
    setModelReferenceUploaded(String(reader.result || ""));
    closeModelReferencePicker();
    showToast("人物参考图已上传，请点击“解析图片”提取人物特征");
  });
  reader.readAsDataURL(file);
  event.target.value = "";
});
document.addEventListener("click", (event) => {
  const choice = event.target.closest("[data-model-reference-select]");
  if (!choice) return;
  const model = state.models.find((item) => item.id === choice.dataset.modelReferenceSelect);
  if (!model) return;
  setModelReferenceUploaded(model.image);
  closeModelReferencePicker();
  showToast(`已选择人物参考图：${model.name}，请点击“解析图片”提取人物特征`);
});

document.querySelector("[data-model-reference-parse]")?.addEventListener("click", (event) => {
  event.stopPropagation();
  if (!state.modelReferenceImage) {
    showToast("请先上传人物图片");
    return;
  }
  if (!consumeModelAnalysisCredit()) return;
  applyModelReferenceAnalysis();
});

document.addEventListener("click", (event) => {
  const modelCardImage = event.target.closest(".model-card .model-image > img");
  if (modelCardImage) {
    event.stopPropagation();
    openDrawerImagePreview(modelCardImage.getAttribute("src"));
    return;
  }
  const modelAction = event.target.closest("[data-model-action]");
  if (!modelAction) return;
  const card = modelAction.closest("[data-model-id]");
  const model = state.models.find((item) => item.id === card?.dataset.modelId);
  if (!model) return;
  if (modelAction.dataset.modelAction === "view") {
    openModelDetail(model.id);
    return;
  }
  if (modelAction.dataset.modelAction === "edit") {
    openModelLibraryDetailModal(model.id);
    return;
  }
  if (modelAction.dataset.modelAction === "publish") {
    openModelLibraryPublish(model.id);
    return;
  }
  if (modelAction.dataset.modelAction === "delete") {
    openModelLibraryDeleteConfirm(model.id);
    return;
  }
  if (modelAction.dataset.modelAction === "use") {
    openModelCreateWithReference(model.image || "assets/model-detail-source.png");
    showToast(`已带入模特图：${model.name}`);
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
    document.querySelector('[data-single-menu="创作中心"]').classList.add("active");
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
    refreshCreationParamLabels();
  });
});

document.querySelectorAll("[data-resolution-options] button").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll("[data-resolution-options] button").forEach((item) => item.classList.remove("is-active"));
    button.classList.add("is-active");
    state.creation.resolution = button.dataset.value;
    refreshCreationParamLabels();
  });
});

document.querySelectorAll("[data-image-count-options] button").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll("[data-image-count-options] button").forEach((item) => item.classList.remove("is-active"));
    button.classList.add("is-active");
    state.creation.imageCount = button.dataset.value || "1张";
    refreshCreationParamLabels();
  });
});

els.detailCount?.addEventListener("change", () => {
  state.creation.imageCount = els.detailCount.value || "1张";
  refreshCreationParamLabels();
});

document.querySelector("[data-creation-polish]")?.addEventListener("click", polishCreationPrompt);
document.querySelector("[data-single-replica-polish]")?.addEventListener("click", polishCreationPrompt);
document.querySelector("[data-creation-polish-regenerate]")?.addEventListener("click", regenerateCreationPolishPrompt);
document.querySelector("[data-creation-polish-use]")?.addEventListener("click", applyCreationPolishPrompt);
document.querySelector("[data-creation-generate]").addEventListener("click", createGenerationRecord);

const resourceFilterGroups = Array.from(document.querySelectorAll("[data-resource-filter]"));
const inspirationSearch = document.querySelector("[data-inspiration-search]");
const inspirationPriceFilterRow = document.querySelector(".inspiration-secondary-filter-row");

function filterResourceCards() {
  const activeType = resourceFilterGroups
    .find((group) => group.dataset.resourceFilter === "type")
    ?.querySelector("button.is-active")?.dataset.filter || "all";
  const activePrice = resourceFilterGroups
    .find((group) => group.dataset.resourceFilter === "price")
    ?.querySelector("button.is-active")?.dataset.filter || "all";
  const keyword = inspirationSearch?.value.trim().toLowerCase() || "";
  const resourceType = {
    模板: "module",
    单图案例: "single",
    套图模板: "suite",
    模特: "model",
    素材模块: "text"
  };

  document.querySelectorAll("[data-resource-card]").forEach((card) => {
    const searchText = [
      card.dataset.title,
      card.dataset.type,
      card.dataset.category,
      card.dataset.source,
      card.dataset.fit,
      card.dataset.tags
    ].filter(Boolean).join(" ").toLowerCase();
    const cardType = resourceType[card.dataset.type] || "module";
    const cardPrice = card.dataset.price === "免费" ? "free" : "paid";
    const visible = (activeType === "all" || cardType === activeType)
      && (activeType === "text" || activePrice === "all" || cardPrice === activePrice)
      && (!keyword || searchText.includes(keyword));
    card.style.display = visible ? "" : "none";
  });

  inspirationPriceFilterRow?.classList.toggle("is-hidden", activeType === "text");
}

resourceFilterGroups.forEach((group) => {
  group.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", () => {
      group.querySelectorAll("button").forEach((item) => item.classList.toggle("is-active", item === button));
      filterResourceCards();
    });
  });
});

filterResourceCards();
inspirationSearch?.addEventListener("input", filterResourceCards);

document.querySelectorAll("[data-resource-use]").forEach((button) => {
  button.addEventListener("click", () => {
    const card = button.closest("[data-resource-card]");
    if (card?.dataset.purchased === "true") return;
    openResourcePurchase(card);
  });
});

document.querySelectorAll("[data-resource-preview]").forEach((button) => {
  button.addEventListener("click", () => {
    openResourcePreview(button.closest("[data-resource-card]"));
  });
});

document.querySelector("[data-inspiration-plaza]")?.addEventListener("click", (event) => {
  if (event.target.closest(".resource-hover-actions button")) return;
  const cover = event.target.closest("[data-resource-card] .resource-cover");
  const card = cover?.closest("[data-resource-card]");
  const image = cover?.querySelector("img");
  if (!card || !image) return;
  openDrawerImagePreview(image.getAttribute("src"), { caption: card.dataset.title || "图片预览" });
});

document.querySelector("[data-resource-preview-modal] [data-preview-image]")?.addEventListener("click", (event) => {
  const image = event.currentTarget;
  const src = image?.getAttribute("src");
  if (!src) return;
  const caption = document.querySelector("[data-preview-title]")?.textContent || "图片预览";
  openDrawerImagePreview(src, { caption });
});

document.querySelector("[data-preview-use]")?.addEventListener("click", () => {
  if (state.previewMaterial) {
    useMaterial(state.previewMaterial.id);
  } else if (state.previewResourceCard) {
    useResource(state.previewResourceCard);
  }
  closePrototypeModals();
});

document.querySelector("[data-purchase-confirm]")?.addEventListener("click", () => {
  const card = state.purchaseResourceCard;
  markResourcePurchased(card);
  closePrototypeModals();
  state.purchaseResourceCard = null;
  showToast(card ? `购买成功，已获得「${card.dataset.title}」` : "购买成功");
});

document.querySelectorAll("[data-solution-scope]").forEach((button) => {
  button.addEventListener("click", () => setSuiteSolutionScope(button.dataset.solutionScope));
});

els.suiteSolutionCategoryButtons.forEach((button) => {
  button.addEventListener("click", () => setSuiteSolutionCategory(button.dataset.solutionCategory));
});

els.suiteSolutionSearch?.addEventListener("input", filterSuiteSolutions);

document.querySelectorAll("[data-solution-create]").forEach((button) => {
  button.addEventListener("click", (event) => {
    event.stopPropagation();
    openSuiteSolutionBuilder();
  });
});

document.addEventListener("click", (event) => {
  const solutionEdit = event.target.closest("[data-solution-edit]");
  const solutionCreate = event.target.closest("[data-solution-create-with]");
  const solutionPublish = event.target.closest("[data-solution-publish]");
  const solutionDelete = event.target.closest("[data-solution-delete]");
  const solutionPreview = event.target.closest("[data-solution-preview]");
  if (solutionEdit) {
    openSuiteSolutionBuilder(solutionEdit.dataset.solutionEdit);
    return;
  }
  if (solutionCreate) {
    goCreateWithSuiteSolution(solutionCreate.dataset.solutionCreateWith);
    return;
  }
  if (solutionPublish) {
    openSuiteSolutionPublish(solutionPublish.dataset.solutionPublish);
    return;
  }
  if (solutionDelete) {
    const index = suiteSolutions.findIndex((item) => item.id === solutionDelete.dataset.solutionDelete);
    if (index < 0) return;
    const [solution] = suiteSolutions.splice(index, 1);
    filterSuiteSolutions();
    showToast(`已删除套图模板：${solution.name}`);
    return;
  }
  if (solutionPreview) {
    const solution = suiteSolutions.find((item) => item.id === solutionPreview.dataset.solutionPreview);
    openDetailImageLightbox(solution?.items?.[0]?.image, solution?.name || "套图模板全屏预览");
  }
});

els.templateCategoryButtons.forEach((button) => {
  button.addEventListener("click", () => setTemplateCategory(button.dataset.templateCategoryTab));
});

els.templateScopeButtons.forEach((button) => {
  button.addEventListener("click", () => setTemplateScope(button.dataset.templateScope));
});

[els.templateSearch, els.templateCategoryFilter].forEach((control) => {
  control?.addEventListener("input", filterTemplates);
  control?.addEventListener("change", filterTemplates);
});

document.querySelectorAll("[data-template-create-trigger], [data-template-create-trigger-empty]").forEach((button) => {
  button.addEventListener("click", (event) => {
    event.stopPropagation();
    resetTemplateBuilder();
    clearMenuActive();
    document.querySelector('[data-single-menu="模板"]').classList.add("active");
    openTemplateBuilderModal();
  });
});

document.querySelectorAll("[data-template-module-create-trigger]").forEach((button) => {
  button.addEventListener("click", () => {
    openPrototypeModal(els.moduleCreateModal);
  });
});

document.querySelectorAll("[data-template-query]").forEach((button) => {
  button.addEventListener("click", filterTemplates);
});

document.querySelector("[data-publish-submit]")?.addEventListener("click", submitTemplatePublish);
document.querySelector("[data-suite-template-publish-submit]")?.addEventListener("click", submitTemplatePublish);

document.querySelectorAll("[data-builder-group]").forEach((button) => {
  button.addEventListener("click", () => toggleBuilderGroup(button.dataset.builderGroup));
});

[els.builderName, els.builderDescription, els.builderCategory, els.builderBrand].forEach((control) => {
  control?.addEventListener("input", updateBuilderFromInputs);
  control?.addEventListener("change", updateBuilderFromInputs);
});

document.querySelector("[data-template-builder-save]")?.addEventListener("click", saveTemplateBuilder);

document.querySelector("[data-template-builder-back]")?.addEventListener("click", () => {
  const isSolution = state.builderTarget === "solution";
  closePrototypeModals();
  if (isSolution) openSuiteTemplateLibrary();
  else openModuleTemplateLibrary();
});

document.querySelector("[data-template-builder-preview]")?.addEventListener("click", () => {
  updateBuilderFromInputs();
  const previewTemplate = {
    id: "builder-preview",
    name: state.builder.name || "未命名模板",
    description: state.builder.description,
    category: state.builder.category || "未选择品类",
    brand: state.builder.brand,
    scope: "我的模板",
    groups: [...state.builder.groups],
    items: state.builder.items.map((item) => ({ ...item })),
    updatedAt: "预览中"
  };
  openTemplateLongPreview(previewTemplate);
});

document.querySelectorAll("[data-module-picker-type]").forEach((button) => {
  button.addEventListener("click", () => setModulePickerType(button.dataset.modulePickerType));
});

document.querySelector("[data-module-picker-search]")?.addEventListener("input", (event) => {
  state.modulePickerKeyword = event.target.value;
  renderContentOptions();
});

document.querySelector("[data-module-picker-category]")?.addEventListener("change", (event) => {
  state.modulePickerCategory = event.target.value;
  renderContentOptions();
});

document.querySelector("[data-module-picker-source]")?.addEventListener("change", (event) => {
  state.modulePickerSource = event.target.value;
  renderContentOptions();
});

document.querySelector("[data-module-picker-query]")?.addEventListener("click", () => {
  const keywordInput = document.querySelector("[data-module-picker-search]");
  const categorySelect = document.querySelector("[data-module-picker-category]");
  const sourceSelect = document.querySelector("[data-module-picker-source]");
  state.modulePickerKeyword = keywordInput?.value || "";
  state.modulePickerCategory = categorySelect?.value || "全部";
  state.modulePickerSource = sourceSelect?.value || "全部";
  renderContentOptions();
});

document.querySelector("[data-content-local-trigger]")?.addEventListener("click", () => {
  document.querySelector("[data-content-local-file]")?.click();
});

document.querySelector("[data-content-local-file]")?.addEventListener("change", (event) => {
  const files = Array.from(event.target.files || []);
  if (!files.length) return;
  const isDirectSuiteUpload = state.builderTarget === "solution" && !els.templateContentModal?.classList.contains("is-open");
  if (isDirectSuiteUpload) {
    let pending = files.length;
    const images = new Array(files.length);
    files.forEach((file, index) => {
      const reader = new FileReader();
      reader.onload = () => {
        images[index] = reader.result;
        pending -= 1;
        if (!pending) {
          const purpose = "固定插入";
          const startIndex = state.builder.items.length;
          images.forEach((image, imageIndex) => {
            state.builder.items.push({
              id: `builder-${Date.now()}-${state.builderSeq++}`,
              title: `本地图片 ${startIndex + imageIndex + 1}`,
              group: state.contentTargetGroup || "多图",
              purpose,
              source: "本地上传",
              image,
              ratio: inferTemplateItemRatio({ group: state.contentTargetGroup || "多图", purpose, source: "本地上传" }),
              enabled: true
            });
          });
          renderTemplateBuilder();
          showToast(`已添加 ${files.length} 张本地图片`);
        }
      };
      reader.readAsDataURL(file);
    });
    event.target.value = "";
    return;
  }
  let pending = files.length;
  files.forEach((file) => {
    const reader = new FileReader();
    reader.onload = () => {
      state.localContentUploads.push({
        id: `local-${Date.now()}-${state.builderSeq++}`,
        title: `本地图片 ${state.localContentUploads.length + 1}`,
        image: reader.result
      });
      pending -= 1;
      if (!pending) renderLocalContentUploads();
    };
    reader.readAsDataURL(file);
  });
  event.target.value = "";
});

document.querySelector("[data-content-local-list]")?.addEventListener("click", (event) => {
  const removeButton = event.target.closest("[data-content-local-remove]");
  if (!removeButton) return;
  state.localContentUploads = state.localContentUploads.filter((item) => item.id !== removeButton.dataset.contentLocalRemove);
  renderLocalContentUploads();
});

document.querySelector("[data-content-confirm]")?.addEventListener("click", confirmContentSelection);

document.querySelector("[data-template-modal-edit]")?.addEventListener("click", () => {
  if (!state.activeTemplate || state.activeTemplate.id === "builder-preview") return;
  editTemplateInBuilder(state.activeTemplate.id);
});

document.querySelector("[data-template-modal-cancel-edit]")?.addEventListener("click", () => setTemplateDetailMode("view"));

document.querySelector("[data-template-modal-save]")?.addEventListener("click", () => {
  if (!state.activeTemplate) return;
  const name = document.querySelector("[data-modal-edit-name]")?.value.trim();
  const category = document.querySelector("[data-modal-edit-category]")?.value;
  const brand = document.querySelector("[data-modal-edit-brand]")?.value.trim();
  const description = document.querySelector("[data-modal-edit-description]")?.value.trim();
  if (!name || !category) {
    showToast("请填写模板名称和商品分类");
    return;
  }
  if (!getEnabledTemplateItems(state.activeTemplate.items).length) {
    showToast("请至少启用一张图片参与长图拼接");
    return;
  }
  Object.assign(state.activeTemplate, {
    name,
    category,
    brand,
    description,
    updatedAt: "2026-07-16 11:40"
  });
  filterTemplates();
  renderTemplateDetailModal(state.activeTemplate);
  setTemplateDetailMode("view");
  showToast("模板已保存");
});

document.querySelector("[data-template-modal-create]")?.addEventListener("click", () => {
  if (!state.activeTemplate) return;
  if (state.activeTemplate.id === "builder-preview") {
    showToast("请先保存模板后再去创作");
    return;
  }
  goCreateWithTemplate(state.activeTemplate.id);
});

document.querySelector("[data-template-modal-delete]")?.addEventListener("click", () => {
  if (!state.activeTemplate) return;
  const index = templates.findIndex((item) => item.id === state.activeTemplate.id);
  if (index >= 0) templates.splice(index, 1);
  closePrototypeModals();
  filterTemplates();
  showToast("模板已删除");
});

[els.materialSearch, els.materialCategoryFilter, els.materialProductFilter, els.materialSourceFilter, els.materialStatusFilter].forEach((control) => {
  control?.addEventListener("input", filterMaterials);
  control?.addEventListener("change", filterMaterials);
});

document.querySelectorAll("[data-boutique-filter]").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll("[data-boutique-filter]").forEach((item) => item.classList.toggle("is-active", item === button));
    document.querySelectorAll("[data-boutique-filter]").forEach((item) => item.setAttribute("aria-selected", String(item === button)));
    filterMaterials();
  });
});

document.querySelectorAll("[data-brand-material-search], [data-brand-material-type], [data-brand-material-source], [data-brand-material-status]").forEach((control) => {
  control.addEventListener("input", filterBrandMaterialsByControls);
  control.addEventListener("change", filterBrandMaterialsByControls);
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
    if (editorTypes.includes(button.dataset.newMaterial)) {
      openBrandMaterialEditor();
      showToast("已进入品牌画板编辑器");
      return;
    }
    showToast("已进入素材编辑状态（原型模拟）");
  });
});

ensureFailureDemoRecords();

els.searchInput.addEventListener("input", filterProducts);
els.filters.forEach((select) => select.addEventListener("change", filterProducts));
document.querySelector("[data-product-library-query]")?.addEventListener("click", filterProducts);
els.resetButtons.forEach((button) => button.addEventListener("click", resetFilters));
els.viewButtons.forEach((button) => {
  button.addEventListener("click", () => setView(button.dataset.view));
});

document.addEventListener("input", (event) => {
  handleBrandEditorInput(event.target);
});

document.addEventListener("click", (event) => {
  const addProductButton = event.target.closest("[data-add-product]");
  const detailButton = event.target.closest("[data-detail]");
  const createButton = event.target.closest("[data-create]");
  const popoverAction = event.target.closest("[data-create-action]");
  const editDrawerButton = event.target.closest("[data-edit-drawer]");
  const deleteProductButton = event.target.closest("[data-delete-product]");
  const confirmProductDeleteButton = event.target.closest("[data-product-delete-confirm]");
  const cancelEditButton = event.target.closest("[data-cancel-edit]");
  const saveEditButton = event.target.closest("[data-save-edit]");
  const addMaterialButton = event.target.closest("[data-add-material]");
  const deleteMaterialButton = event.target.closest("[data-delete-material]");
  const addColorButton = event.target.closest("[data-add-color]");
  const deleteColorButton = event.target.closest("[data-delete-color]");
  const deleteColorImageButton = event.target.closest("[data-delete-color-image]");
  const drawerImagePreview = event.target.closest("[data-preview-drawer-image]");
  const modelGeneratedPreview = event.target.closest("[data-model-generated-preview]");
  const builderPreviewImage = event.target.closest("[data-builder-preview-image]");
  const closeDrawerImagePreviewButton = event.target.closest("[data-close-drawer-image-preview]");
  const addCustomSizeButton = event.target.closest("[data-add-custom-size]");
  const moveSizeButton = event.target.closest("[data-move-size]");
  const openCustomParameterButton = event.target.closest("[data-open-custom-parameter]");
  const closeCustomParameterButton = event.target.closest("[data-close-custom-parameter]");
  const confirmCustomParameterButton = event.target.closest("[data-confirm-custom-parameter]");
  const templatePreviewButton = event.target.closest("[data-template-preview]");
  const templateLongPreviewButton = event.target.closest("[data-template-long-preview]");
  const templateCreateButton = event.target.closest("[data-template-create], [data-template-drawer-create]");
  const templateEditButton = event.target.closest("[data-template-edit], [data-template-drawer-edit]");
  const templatePublishButton = event.target.closest("[data-template-publish], [data-template-drawer-publish]");
  const templateDeleteButton = event.target.closest("[data-template-delete]");
  const multiBackButton = event.target.closest("[data-multi-back]");
  const multiFillProductButton = event.target.closest("[data-multi-fill-product]");
  const multiGenerateButton = event.target.closest("[data-multi-generate]");
  const multiConfirmGenerateButton = event.target.closest("[data-multi-confirm-generate]");
  const multiToggleButton = event.target.closest("[data-multi-toggle]");
  const multiModuleCard = event.target.closest("[data-multi-module]");
  const multiModuleDeleteButton = event.target.closest("[data-multi-module-delete]");
  const multiModuleDeleteConfirmButton = event.target.closest("[data-multi-module-delete-confirm]");
  const multiUploadProductButton = event.target.closest("[data-multi-upload-product]");
  const multiUploadModelButton = event.target.closest("[data-multi-upload-model]");
  const suiteReplicaUploadProductButton = event.target.closest("[data-suite-replica-upload-product]");
  const suiteReplicaPreserveButton = event.target.closest("[data-suite-replica-preserve]");
  const multiTemplatePreviewButton = event.target.closest("[data-multi-template-preview]");
  const multiTemplateReplaceButton = event.target.closest("[data-multi-template-replace]");
  const multiSourceProductAddButton = event.target.closest("[data-multi-source-product-add]");
  const multiSourceProductRemoveButton = event.target.closest("[data-multi-source-product-remove]");
  const multiStepButton = event.target.closest("[data-multi-step-button]");
  const multiFlowPreviousButton = event.target.closest("[data-multi-flow-previous]");
  const multiFlowNextButton = event.target.closest("[data-multi-flow-next]");
  const multiBackStepButton = event.target.closest("[data-multi-back-step]");
  const multiGoRecordsButton = event.target.closest("[data-multi-go-records]");
  const multiTaskRecordButton = event.target.closest("[data-multi-task-record]");
  const multiRegenerateAllButton = event.target.closest("[data-multi-regenerate-all]");
  const multiSaveResultButton = event.target.closest("[data-multi-save-result]");
  const multiDownloadButton = event.target.closest("[data-multi-download], [data-multi-preview-download]");
  const multiSuiteGenerateButton = event.target.closest("[data-multi-suite-generate]");
  const multiPreviewOpenButton = event.target.closest("[data-multi-preview-open]");
  const multiPreviewCloseButton = event.target.closest("[data-multi-preview-close]");
  const multiResultComposeButton = event.target.closest("[data-multi-result-compose]");
  const multiComposeBackButton = event.target.closest("[data-multi-compose-back]");
  const multiSelectFirstButton = event.target.closest("[data-multi-select-first]");
  const multiComposeUploadButton = event.target.closest("[data-multi-compose-upload]");
  const multiComposeMoveButton = event.target.closest("[data-multi-compose-move]");
  const multiComposeRemoveButton = event.target.closest("[data-multi-compose-remove]");
  const multiSelectedResultPreviewButton = event.target.closest("[data-multi-selected-preview]");
  const multiCandidatePreviewButton = event.target.closest("[data-multi-candidate-preview]");
  const multiNavPreviewButton = event.target.closest("[data-multi-nav-preview]");
  const multiContinueTextButton = event.target.closest("[data-multi-continue-text]");
  const multiCandidateButton = event.target.closest("[data-multi-candidate]");
  const multiRegenerateModuleButton = event.target.closest("[data-multi-regenerate-module]");
  const multiAiCopyButton = event.target.closest("[data-multi-ai-copy]");
  const multiCanvasEditButton = event.target.closest("[data-multi-canvas-edit]");
  const multiTextModeButton = event.target.closest("[data-multi-text-mode]");
  const openContentButton = event.target.closest("[data-open-content-picker]");
  const contentOptionButton = event.target.closest("[data-content-option]");
  const builderMoveButton = event.target.closest("[data-builder-move]");
  const builderMoveGroupButton = event.target.closest("[data-builder-move-group]");
  const builderTogglePurposeButton = event.target.closest("[data-builder-toggle-purpose]");
  const builderToggleEnabledButton = event.target.closest("[data-builder-toggle-enabled]");
  const builderRemoveItemButton = event.target.closest("[data-builder-remove-item]");
  const modalTogglePurposeButton = event.target.closest("[data-modal-toggle-purpose]");
  const modalToggleEnabledButton = event.target.closest("[data-modal-toggle-enabled]");
  const modalRemoveItemButton = event.target.closest("[data-modal-remove-item]");
  const materialPreviewButton = event.target.closest("[data-material-preview]");
  const materialUseButton = event.target.closest("[data-material-use], [data-material-drawer-use]");
  const materialEditButton = event.target.closest("[data-material-edit], [data-material-drawer-edit]");
  const materialCopyButton = event.target.closest("[data-material-copy]");
  const materialPublishButton = event.target.closest("[data-material-publish], [data-material-drawer-publish]");
  const materialDeleteButton = event.target.closest("[data-material-delete]");
  const boutiqueRemoveButton = event.target.closest("[data-boutique-remove]");
  const boutiqueDownloadButton = event.target.closest("[data-boutique-download]");
  const boutiqueOutpaintButton = event.target.closest("[data-boutique-outpaint]");
  const boutiqueReturnTaskButton = event.target.closest("[data-boutique-return-task]");
  const materialPrimaryButton = event.target.closest("[data-material-primary]");
  const materialSecondaryButton = event.target.closest("[data-material-secondary]");
  const openBrandEditorButton = event.target.closest("[data-open-brand-editor]");
  const backBrandLibraryButton = event.target.closest("[data-back-brand-library]");
  const brandEditorDiscardButton = event.target.closest("[data-brand-editor-discard]");
  const brandEditorSaveReturnButton = event.target.closest("[data-brand-editor-save-return]");
  const brandEditorToolButton = event.target.closest("[data-brand-editor-tool]");
  const brandPanelToggleButton = event.target.closest("[data-brand-panel-toggle]");
  const brandMaterialTabButton = event.target.closest("[data-brand-material-tab]");
  const brandMaterialCategoryButton = event.target.closest("[data-brand-material-category]");
  const brandMaterialOwnershipButton = event.target.closest("[data-brand-material-ownership]");
  const brandAssetPreviewButton = event.target.closest("[data-brand-asset-preview]");
  const brandAssetEditButton = event.target.closest("[data-brand-asset-edit]");
  const brandAssetPublishButton = event.target.closest("[data-brand-asset-publish]");
  const brandAssetDeleteButton = event.target.closest("[data-brand-asset-delete]");
  const saveBrandMaterialButton = event.target.closest("[data-save-brand-material]");
  const brandCopyButton = event.target.closest("[data-brand-copy]");
  const brandUseButton = event.target.closest("[data-brand-use]");
  const brandImportButton = event.target.closest("[data-brand-material-import]");
  const brandAddButton = event.target.closest("[data-brand-add]");
  const brandAddedImageButton = event.target.closest("[data-brand-added-image]");
  const brandTextButton = event.target.closest("[data-brand-text]");
  const brandShapeButton = event.target.closest("[data-brand-shape]");
  const brandElementButton = event.target.closest("[data-brand-element]");
  const brandCanvasObject = event.target.closest("[data-brand-object]");
  const brandLayerActionButton = event.target.closest("[data-brand-layer-action]");
  const brandLayerObjectButton = event.target.closest("[data-brand-layer-object]");
  const brandCanvasPresetButton = event.target.closest("[data-brand-canvas-preset]");
  const brandCanvasApplyButton = event.target.closest("[data-brand-canvas-apply]");
  const brandCanvasBgButton = event.target.closest("[data-brand-canvas-bg]");
  const brandZoomOutButton = event.target.closest("[data-brand-zoom-out]");
  const brandZoomInButton = event.target.closest("[data-brand-zoom-in]");
  const brandZoomFitButton = event.target.closest("[data-brand-zoom-fit]");
  const brandImportActionButton = event.target.closest("[data-brand-import-action]");
  const brandFlipButton = event.target.closest("[data-brand-flip]");
  const brandDeleteObjectButton = event.target.closest("[data-brand-delete-object]");
  const brandGenericPropButton = event.target.closest(".brand-editor-props button");
  const openCreationDetailButton = event.target.closest("[data-open-creation-detail]");
  if (materialPrimaryButton) {
    setMaterialPrimary(materialPrimaryButton.dataset.materialPrimary);
    return;
  }

  if (materialSecondaryButton) {
    setMaterialSecondary(materialSecondaryButton.dataset.materialSecondary);
    return;
  }

  if (openBrandEditorButton) {
    openBrandMaterialEditor();
    showToast("已进入品牌画板编辑器");
    return;
  }

  if (backBrandLibraryButton) {
    if (state.brandEditor.returnToMultiResult) {
      openBrandEditorLeaveConfirm();
      return;
    }
    if (state.brandEditor.backPage === "module-library") {
      saveBrandEditorAndReturn();
      return;
    }
    leaveBrandMaterialEditor();
    return;
  }

  if (brandEditorDiscardButton) {
    closePrototypeModals();
    leaveBrandMaterialEditor();
    return;
  }

  if (brandEditorSaveReturnButton) {
    saveBrandEditorAndReturn();
    return;
  }

  if (brandEditorToolButton) {
    setBrandEditorTool(brandEditorToolButton.dataset.brandEditorTool);
    return;
  }

  if (brandPanelToggleButton) {
    const page = brandPanelToggleButton.closest(".brand-editor-page");
    const collapsed = page?.classList.toggle("is-panel-collapsed");
    brandPanelToggleButton.setAttribute("aria-label", collapsed ? "展开左侧面板" : "收起左侧面板");
    return;
  }

  if (brandMaterialTabButton) {
    filterBrandAssetCards(brandMaterialTabButton.dataset.brandMaterialTab);
    return;
  }

  if (brandMaterialCategoryButton) {
    document.querySelectorAll("[data-brand-material-category]").forEach((button) => {
      button.classList.toggle("is-active", button === brandMaterialCategoryButton);
    });
    filterBrandMaterialsByControls();
    return;
  }

  if (brandMaterialOwnershipButton) {
    document.querySelectorAll("[data-brand-material-ownership]").forEach((button) => {
      button.classList.toggle("is-active", button === brandMaterialOwnershipButton);
    });
    filterBrandMaterialsByControls();
    return;
  }

  if (brandAssetEditButton) {
    const card = brandAssetEditButton.closest("[data-brand-asset-source]");
    if (card?.dataset.brandAssetSource !== "本地上传") {
      openBrandMaterialEditor();
      showToast("已进入品牌画板编辑器");
    }
    return;
  }

  if (brandAssetPublishButton) {
    showToast("已提交发布到 AI 图片广场");
    return;
  }

  if (brandAssetDeleteButton) {
    const card = brandAssetDeleteButton.closest("[data-brand-asset-type]");
    card?.remove();
    filterBrandMaterialsByControls();
    showToast("品牌素材已删除");
    return;
  }

  if (brandAssetPreviewButton) {
    openBrandAssetPreview(brandAssetPreviewButton.closest("[data-brand-asset-type]"));
    return;
  }

  if (saveBrandMaterialButton) {
    if (state.brandEditor.returnToMultiResult || state.brandEditor.returnToSuiteReplica) {
      saveBrandEditorAndReturn();
      return;
    }
    openBrandMaterialLibrary();
    showToast("品牌素材已保存到品牌素材库");
    return;
  }

  if (brandCopyButton) {
    showToast("已复制品牌素材副本");
    return;
  }

  if (brandUseButton) {
    showToast("已打开使用记录（原型模拟）");
    return;
  }

  if (brandImportButton) {
    showToast("批量导入品牌素材（原型模拟）");
    return;
  }

  if (brandAddButton) {
    addBrandObject({ type: "image", name: brandAddButton.dataset.brandAdd, width: 210, height: 150 }, "element");
    return;
  }

  if (brandAddedImageButton) {
    const image = state.brandEditor.addedImages.find((item) => item.id === brandAddedImageButton.dataset.brandAddedImage);
    if (!image) return;
    addBrandObject({ type: "image", name: image.name, imageUrl: image.url, width: 230, height: 300 }, "element");
    return;
  }

  if (brandTextButton) {
    const label = brandTextButton.dataset.brandText;
    addBrandObject({ type: "text", name: label, width: label.length > 4 ? 220 : 160, height: 62, fontSize: label === "正文" ? 22 : 32 }, "text");
    return;
  }

  if (brandShapeButton) {
    const shape = brandShapeButton.dataset.brandShape;
    addBrandObject({ type: "shape", name: shape, shape, width: 128, height: 128 }, "element");
    return;
  }

  if (brandElementButton) {
    addBrandObject({ type: "element", name: brandElementButton.dataset.brandElement, width: 170, height: 150 }, "element");
    return;
  }

  if (brandLayerActionButton) {
    const targetId = brandLayerActionButton.dataset.brandLayerTarget;
    const action = brandLayerActionButton.dataset.brandLayerAction;
    const object = state.brandEditor.objects.find((item) => item.id === targetId);
    if (!object) return;
    if (action === "remove") removeBrandObject(targetId);
    if (action === "up" || action === "down") moveBrandLayer(targetId, action);
    if (action === "lock") {
      object.lockRatio = !object.lockRatio;
      object.aspectRatio = object.width / Math.max(object.height, 1);
      state.brandEditor.selectedId = targetId;
      renderBrandCanvas();
    }
    return;
  }

  if (brandLayerObjectButton) {
    selectBrandObject(brandLayerObjectButton.dataset.brandLayerObject, "layer");
    return;
  }

  if (brandCanvasObject) {
    selectBrandObject(brandCanvasObject.dataset.brandObject);
    return;
  }

  if (brandCanvasPresetButton) {
    const [width, height] = brandCanvasPresetButton.dataset.brandCanvasPreset.split("x").map(Number);
    applyBrandCanvasSize(width, height);
    showToast(`画布尺寸已切换为 ${width}×${height}`);
    return;
  }

  if (brandCanvasApplyButton) {
    applyBrandCanvasSize(
      document.querySelector("[data-brand-canvas-width]")?.value,
      document.querySelector("[data-brand-canvas-height]")?.value
    );
    showToast("画布尺寸已应用");
    return;
  }

  if (brandCanvasBgButton) {
    state.brandEditor.canvas.background = brandCanvasBgButton.dataset.brandCanvasBg;
    renderBrandCanvas();
    showToast("画布背景已切换");
    return;
  }

  if (brandZoomOutButton) {
    setBrandCanvasZoom(state.brandEditor.zoom - 0.1);
    return;
  }

  if (brandZoomInButton) {
    setBrandCanvasZoom(state.brandEditor.zoom + 0.1);
    return;
  }

  if (brandZoomFitButton) {
    fitBrandCanvasToStage();
    return;
  }

  if (brandImportActionButton) {
    handleBrandImport(brandImportActionButton.dataset.brandImportAction);
    return;
  }

  if (brandFlipButton) {
    const object = getSelectedBrandObject();
    if (!object) return;
    if (brandFlipButton.dataset.brandFlip === "x") object.flipX = !object.flipX;
    if (brandFlipButton.dataset.brandFlip === "y") object.flipY = !object.flipY;
    renderBrandCanvas();
    showToast("已模拟翻转元素");
    return;
  }

  if (brandDeleteObjectButton) {
    removeBrandObject();
    return;
  }

  if (brandGenericPropButton) {
    const group = brandGenericPropButton.closest(".brand-segment, .text-style-buttons, .text-align-buttons, .text-spacing-controls, .brand-action-grid, .text-effect-grid, .text-effect-select");
    group?.querySelectorAll("button").forEach((button) => button.classList.remove("is-active"));
    brandGenericPropButton.classList.add("is-active");
    showToast("属性参数已模拟应用");
    return;
  }

  if (addProductButton) {
    openCreateProductDrawer();
    closeCreateMenu();
    return;
  }

  if (closeDrawerImagePreviewButton) {
    closeDrawerImagePreview();
    return;
  }

  if (multiTemplatePreviewButton) {
    const template = getActiveMultiTemplate();
    openDetailImageLightbox(template?.items?.[0]?.image || els.multiTemplateThumb?.src, template?.name || "模板全屏预览");
    return;
  }

  if (multiTemplateReplaceButton) {
    if (state.multiCreate.backPage !== "template-flow") {
      showToast("请返回创作中心替换模板");
      return;
    }
    templateStartState.product = state.multiCreate.sourceProduct;
    templateStartState.selectedTemplate = getActiveMultiTemplate();
    templateStartState.step = 2;
    setTemplateFlowDrawer(false);
    setWorkspacePage("template-generation-flow");
    clearMenuActive();
    document.querySelector('[data-single-menu="创作中心"]')?.classList.add("active");
    renderTemplateGenerationFlow();
    showToast("请选择新的模板");
    return;
  }

  if (multiSourceProductAddButton) {
    document.querySelector("[data-multi-source-product-file]")?.click();
    return;
  }

  if (multiSourceProductRemoveButton) {
    const images = getMultiSourceProductImages();
    images.splice(Number(multiSourceProductRemoveButton.dataset.multiSourceProductRemove), 1);
    syncMultiSourceProductImages(images);
    renderMultiImageCreation();
    showToast(images.length ? "商品图已移除" : "商品图已全部移除，请重新添加");
    return;
  }

  const multiSourcePreviewButton = event.target.closest("[data-multi-source-preview]");
  if (multiSourcePreviewButton) {
    openDetailImageLightbox(multiSourcePreviewButton.dataset.multiSourcePreview, multiSourcePreviewButton.dataset.multiSourcePreviewAlt || "商品图全屏预览");
    return;
  }

  const multiMaterialPreviewButton = event.target.closest("[data-multi-material-preview]");
  if (multiMaterialPreviewButton) {
    openDetailImageLightbox(multiMaterialPreviewButton.dataset.multiMaterialPreview, multiMaterialPreviewButton.dataset.multiMaterialPreviewAlt || "图片全屏预览");
    return;
  }

  if (multiSelectedResultPreviewButton) {
    openDetailImageLightbox(multiSelectedResultPreviewButton.dataset.multiSelectedPreview, multiSelectedResultPreviewButton.dataset.multiSelectedPreviewAlt || "图片全屏预览");
    return;
  }

  if (multiCandidatePreviewButton) {
    openDetailImageLightbox(multiCandidatePreviewButton.dataset.multiCandidatePreview, multiCandidatePreviewButton.dataset.multiCandidatePreviewAlt || "候选图全屏预览");
    return;
  }

  if (multiNavPreviewButton) {
    openDetailImageLightbox(multiNavPreviewButton.dataset.multiNavPreview, multiNavPreviewButton.dataset.multiNavPreviewAlt || "模块图片全屏预览");
    return;
  }

  const multiMaterialRemoveButton = event.target.closest("[data-multi-material-remove]");
  if (multiMaterialRemoveButton) {
    const module = state.multiCreate.modules.find((item) => item.id === multiMaterialRemoveButton.dataset.multiMaterialRemove);
    const kind = multiMaterialRemoveButton.dataset.multiMaterialKind;
    const index = Number(multiMaterialRemoveButton.dataset.multiMaterialIndex);
    const images = kind === "model" ? module?.modelImages : module?.productImages;
    if (!images || Number.isNaN(index)) return;
    images.splice(index, 1);
    renderMultiImageCreation();
    showToast(kind === "model" ? "模特图已移除" : "商品图已移除");
    return;
  }

  const multiModulePreviewButton = event.target.closest("[data-multi-module-preview]");
  if (multiModulePreviewButton) {
    openDetailImageLightbox(multiModulePreviewButton.dataset.multiModulePreview, multiModulePreviewButton.dataset.multiModulePreviewAlt || "模块图片预览");
    return;
  }

  if (multiStepButton) {
    const targetStep = multiStepButton.dataset.multiStepButton;
    if (targetStep === "upload" || targetStep === "choose") {
      if (state.multiCreate.backPage === "template-flow") {
        templateStartState.step = targetStep === "upload" ? 1 : 2;
        setWorkspacePage(targetStep === "upload" ? "creation-plaza" : "template-generation-flow");
        clearMenuActive();
        document.querySelector('[data-single-menu="创作中心"]')?.classList.add("active");
        if (targetStep === "upload") setCreationInputMode("template");
        else renderTemplateGenerationFlow();
      } else {
        showToast("请返回创作中心重新选择商品与模板");
      }
      return;
    }
    if (targetStep === "result" && !state.multiCreate.generated) {
      showToast("请先点击去生成");
      return;
    }
    setMultiStep(targetStep);
    return;
  }

  if (multiBackButton) {
    if (state.multiCreate.backPage === "template-flow") {
      if (state.multiCreate.detailReturnPage === "creation-records") {
        setWorkspacePage("creation-records");
        clearMenuActive();
        document.querySelector('[data-single-menu="创作记录"]')?.classList.add("active");
        state.multiCreate.detailReturnPage = "";
        return;
      }
      templateStartState.step = 2;
      setWorkspacePage("template-generation-flow");
      clearMenuActive();
      document.querySelector('[data-single-menu="创作中心"]')?.classList.add("active");
      renderTemplateGenerationFlow();
      return;
    }
    const backPage = ["creation-plaza", "creation-records", "suite-solution-library"].includes(state.multiCreate.backPage) ? state.multiCreate.backPage : "template-center";
    if (state.multiCreate.taskStatus === "running") {
      showToast("任务已在后台生成，可在创作记录中继续查看");
    }
    if (backPage === "suite-solution-library") openSuiteTemplateLibrary();
    else if (backPage === "template-center") openModuleTemplateLibrary();
    else {
      setWorkspacePage(backPage);
      clearMenuActive();
      document.querySelector(`[data-single-menu="${backPage === "creation-plaza" ? "创作广场" : "创作记录"}"]`)?.classList.add("active");
    }
    return;
  }

  if (multiFlowPreviousButton) {
    if (state.multiCreate.step === "result") {
      state.multiCreate.previewDrawerOpen = false;
      setMultiStep("config");
      return;
    }
    if (state.multiCreate.backPage === "template-flow") {
      templateStartState.step = 2;
      setTemplateFlowDrawer(false);
      setWorkspacePage("template-generation-flow");
      clearMenuActive();
      document.querySelector('[data-single-menu="创作中心"]')?.classList.add("active");
      renderTemplateGenerationFlow();
    } else {
      showToast("请返回上一级重新选择模板");
    }
    return;
  }

  if (multiFlowNextButton) {
    if (state.multiCreate.step === "config") {
      openMultiGenerateConfirm();
      return;
    }
    if (state.multiCreate.taskStatus !== "done") {
      showToast("还有模块未完成生成");
      return;
    }
    createOrUpdateMultiTaskRecord();
    showToast("已保存");
    return;
  }

  if (multiBackStepButton) {
    setMultiStep("config");
    return;
  }

  if (multiGoRecordsButton) {
    openCreationRecordsPage();
    return;
  }

  if (multiTaskRecordButton) {
    openCreationRecordsPage();
    return;
  }

  if (multiRegenerateAllButton) {
    startMultiGeneration();
    return;
  }

  if (multiSaveResultButton) {
    if (state.multiCreate.taskStatus !== "done") {
      showToast("还有模块未完成生成");
      return;
    }
    createOrUpdateMultiTaskRecord();
    showToast("已保存");
    return;
  }

  if (multiSuiteGenerateButton) {
    if (!state.multiCreate.compositionItems.length) {
      showToast("请先选择至少一张图片");
      return;
    }
    startMultiGeneration();
    return;
  }

  if (multiPreviewOpenButton) {
    state.multiCreate.previewDrawerOpen = true;
    renderMultiImageCreation();
    return;
  }

  if (multiPreviewCloseButton) {
    state.multiCreate.previewDrawerOpen = false;
    renderMultiImageCreation();
    return;
  }

  if (multiDownloadButton) {
    showToast("已下载到本地");
    return;
  }

  if (multiResultComposeButton) {
    enterMultiCompositionStage();
    return;
  }

  if (multiComposeBackButton) {
    leaveMultiCompositionStage();
    return;
  }

  if (multiSelectFirstButton) {
    useMultiModuleFirstCandidates();
    return;
  }

  if (multiComposeUploadButton) {
    document.querySelector("[data-multi-compose-file]")?.click();
    return;
  }

  if (multiComposeMoveButton) {
    moveMultiCompositionItem(multiComposeMoveButton.dataset.multiComposeId, multiComposeMoveButton.dataset.multiComposeMove);
    return;
  }

  if (multiComposeRemoveButton) {
    removeMultiCompositionItem(multiComposeRemoveButton.dataset.multiComposeRemove);
    return;
  }

  if (multiContinueTextButton) {
    openMultiResultCanvasEditor();
    return;
  }

  if (multiCandidateButton) {
    selectMultiCandidate(multiCandidateButton.dataset.multiCandidate, multiCandidateButton.dataset.candidateId);
    return;
  }

  if (multiRegenerateModuleButton) {
    regenerateMultiModule(multiRegenerateModuleButton.dataset.multiRegenerateModule);
    return;
  }

  if (multiAiCopyButton) {
    showToast("已打开 AI 改文案模拟流程");
    return;
  }

  if (multiCanvasEditButton) {
    showToast("已模拟进入画布编辑");
    return;
  }

  if (multiTextModeButton) {
    updateMultiTextMode(multiTextModeButton.dataset.multiTextMode, multiTextModeButton.dataset.mode);
    return;
  }

  if (multiFillProductButton) {
    fillMultiProductImages();
    return;
  }

  if (multiGenerateButton) {
    openMultiGenerateConfirm();
    return;
  }

  if (multiConfirmGenerateButton) {
    confirmMultiGenerate();
    return;
  }

  if (multiModuleDeleteConfirmButton) {
    deletePendingMultiModule();
    return;
  }

  if (multiModuleDeleteButton) {
    openMultiModuleDeleteConfirm(multiModuleDeleteButton.dataset.multiModuleDelete);
    return;
  }

  if (multiToggleButton) {
    toggleMultiModule(multiToggleButton.dataset.multiToggle);
    return;
  }

  if (multiUploadProductButton) {
    fillMultiProductImages(multiUploadProductButton.dataset.multiUploadProduct);
    return;
  }

  if (multiUploadModelButton) {
    fillMultiModelImages(multiUploadModelButton.dataset.multiUploadModel);
    return;
  }

  if (suiteReplicaUploadProductButton) {
    fillSuiteReplicaProductImages();
    return;
  }

  if (suiteReplicaPreserveButton) {
    toggleSuiteReplicaPreserve(suiteReplicaPreserveButton.dataset.suiteReplicaPreserve);
    return;
  }

  if (multiModuleCard) {
    selectMultiModule(multiModuleCard.dataset.multiModule);
    return;
  }

  if (openCreationDetailButton) {
    const taskCard = openCreationDetailButton.closest("[data-creation-task-card]");
    openCreationRecordTaskDetail(taskCard);
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

  if (deleteProductButton) {
    openProductDeleteConfirm();
    return;
  }

  if (confirmProductDeleteButton) {
    deletePendingProduct(confirmProductDeleteButton.dataset.productDeleteConfirm);
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

  if (builderPreviewImage && !event.target.closest("[data-builder-remove-item]") && !event.target.closest("[data-builder-toggle-enabled]")) {
    openDrawerImagePreview(builderPreviewImage.dataset.builderPreviewImage || builderPreviewImage.getAttribute("src"));
    return;
  }

  if (modelGeneratedPreview) {
    openDrawerImagePreview(modelGeneratedPreview.getAttribute("src"), { modelPreview: true });
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

  if (openContentButton) {
    openContentPicker(openContentButton.dataset.openContentPicker);
    return;
  }

  if (contentOptionButton) {
    toggleContentSelection(contentOptionButton.dataset.contentOption);
    return;
  }

  if (builderMoveButton) {
    moveBuilderItem(builderMoveButton.dataset.builderMove, builderMoveButton.dataset.direction);
    return;
  }

  if (builderMoveGroupButton) {
    moveBuilderItemGroup(builderMoveGroupButton.dataset.builderMoveGroup, builderMoveGroupButton.dataset.targetGroup);
    return;
  }

  if (builderTogglePurposeButton) {
    toggleBuilderItemPurpose(builderTogglePurposeButton.dataset.builderTogglePurpose);
    return;
  }

  if (builderToggleEnabledButton) {
    toggleBuilderItemEnabled(builderToggleEnabledButton.dataset.builderToggleEnabled);
    return;
  }

  if (builderRemoveItemButton) {
    removeBuilderItem(builderRemoveItemButton.dataset.builderRemoveItem);
    return;
  }

  if (modalTogglePurposeButton && state.activeTemplate) {
    const item = state.activeTemplate.items.find((entry) => entry.id === modalTogglePurposeButton.dataset.modalTogglePurpose);
    if (item) item.purpose = item.purpose === "参考生成" ? "固定插入" : "参考生成";
    renderTemplateDetailModal(state.activeTemplate);
    setTemplateDetailMode("edit");
    return;
  }

  if (modalToggleEnabledButton && state.activeTemplate) {
    const item = state.activeTemplate.items.find((entry) => entry.id === modalToggleEnabledButton.dataset.modalToggleEnabled);
    if (item) item.enabled = !isTemplateItemEnabled(item);
    renderTemplateDetailModal(state.activeTemplate);
    setTemplateDetailMode("edit");
    return;
  }

  if (modalRemoveItemButton && state.activeTemplate) {
    state.activeTemplate.items = state.activeTemplate.items.filter((entry) => entry.id !== modalRemoveItemButton.dataset.modalRemoveItem);
    renderTemplateDetailModal(state.activeTemplate);
    setTemplateDetailMode("edit");
    return;
  }

  if (templateEditButton) {
    const templateId = templateEditButton.dataset.templateEdit || templateEditButton.dataset.templateDrawerEdit;
    editTemplateInBuilder(templateId);
    return;
  }

  if (templateCreateButton) {
    goCreateWithTemplate(templateCreateButton.dataset.templateCreate || templateCreateButton.dataset.templateDrawerCreate);
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

  if (templatePreviewButton) {
    const template = getTemplate(templatePreviewButton.dataset.templatePreview);
    openDetailImageLightbox(template?.items?.[0]?.image, template?.name || "单图模板全屏预览");
    return;
  }

  if (templateLongPreviewButton && state.activeTemplate) {
    openTemplateLongPreview(state.activeTemplate);
    return;
  }

  if (materialPreviewButton) {
    openMaterialPreviewModal(materialPreviewButton.dataset.materialPreview);
    return;
  }

  if (boutiqueDownloadButton) {
    const material = getMaterial(boutiqueDownloadButton.dataset.boutiqueDownload);
    if (!material) return;
    const link = document.createElement("a");
    link.href = material.image;
    link.download = `${material.name}.png`;
    link.click();
    showToast("已开始下载图片");
    return;
  }

  if (boutiqueOutpaintButton) {
    const material = getMaterial(boutiqueOutpaintButton.dataset.boutiqueOutpaint);
    if (!material) return;
    openOutpaintEditor(material.image, "material-library");
    return;
  }

  if (boutiqueReturnTaskButton) {
    const material = getMaterial(boutiqueReturnTaskButton.dataset.boutiqueReturnTask);
    if (!material) return;
    returnToBoutiqueTask(material);
    showToast("已返回创作任务");
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

  if (boutiqueRemoveButton) {
    const material = getMaterial(boutiqueRemoveButton.dataset.boutiqueRemove);
    if (!material) return;
    const index = materialLibrary.findIndex((item) => item.id === material.id);
    if (index >= 0) materialLibrary.splice(index, 1);
    filterMaterials();
    showToast("已取消添加到精品库");
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
    document.querySelector('[data-single-menu="创作中心"]').classList.add("active");
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
  const suiteReplicaPrompt = event.target.closest("[data-suite-replica-prompt]");
  const multiProductDescription = event.target.closest("[data-multi-product-description]");
  const multiSceneDescription = event.target.closest("[data-multi-scene-description]");
  if (suiteReplicaPrompt) {
    updateSuiteReplicaPrompt(suiteReplicaPrompt.value);
    return;
  }
  if (multiProductDescription) {
    updateMultiProductDescription(multiProductDescription.dataset.multiProductDescription, multiProductDescription.value);
    return;
  }
  if (multiSceneDescription) {
    updateMultiSceneDescription(multiSceneDescription.dataset.multiSceneDescription, multiSceneDescription.value);
    return;
  }
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
  if (handleBrandEditorInput(event.target)) return;
  if (event.target.closest(".brand-editor-props select")) {
    showToast("下拉参数已模拟更新");
    return;
  }

  const multiModuleResolution = event.target.closest("[data-multi-module-resolution]");
  const multiModuleModel = event.target.closest("[data-multi-module-model]");
  const multiModuleCount = event.target.closest("[data-multi-module-count]");
  const multiReferenceToggle = event.target.closest("[data-multi-reference-toggle]");

  if (multiReferenceToggle) {
    const module = state.multiCreate.modules.find((item) => item.id === multiReferenceToggle.dataset.multiReferenceToggle);
    if (module) module.useReferenceImage = multiReferenceToggle.checked;
    return;
  }

  if (multiModuleResolution || multiModuleModel || multiModuleCount) {
    const control = multiModuleResolution || multiModuleModel || multiModuleCount;
    const field = multiModuleResolution ? "resolution" : multiModuleModel ? "model" : "count";
    const moduleId = multiModuleResolution?.dataset.multiModuleResolution || multiModuleModel?.dataset.multiModuleModel || multiModuleCount?.dataset.multiModuleCount;
    updateMultiGenerationSetting(moduleId, field, control.value);
    return;
  }

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

document.addEventListener("dragstart", (event) => {
  const item = event.target.closest("[data-builder-item]");
  if (!item) return;
  event.dataTransfer.setData("text/plain", item.dataset.builderItem);
  event.dataTransfer.effectAllowed = "move";
});

document.addEventListener("dragstart", (event) => {
  const item = event.target.closest("[data-multi-compose-item]");
  if (!item) return;
  event.dataTransfer.setData("text/plain", `multi-composition:${item.dataset.multiComposeItem}`);
  event.dataTransfer.effectAllowed = "move";
  item.classList.add("is-dragging");
});

document.addEventListener("dragend", (event) => {
  if (!event.target.closest("[data-multi-compose-item]")) return;
  document.querySelectorAll("[data-multi-compose-item]").forEach((item) => item.classList.remove("is-dragging", "is-drop-target"));
});

document.addEventListener("dragover", (event) => {
  const target = event.target.closest("[data-multi-compose-item]");
  const draggedId = event.dataTransfer?.getData("text/plain") || "";
  if (!target || !draggedId.startsWith("multi-composition:")) return;
  event.preventDefault();
  const sourceId = draggedId.slice("multi-composition:".length);
  if (sourceId !== target.dataset.multiComposeItem) target.classList.add("is-drop-target");
});

document.addEventListener("dragleave", (event) => {
  event.target.closest("[data-multi-compose-item]")?.classList.remove("is-drop-target");
});

document.addEventListener("drop", (event) => {
  const target = event.target.closest("[data-multi-compose-item]");
  const draggedId = event.dataTransfer?.getData("text/plain") || "";
  if (!target || !draggedId.startsWith("multi-composition:")) return;
  event.preventDefault();
  reorderMultiCompositionItem(draggedId.slice("multi-composition:".length), target.dataset.multiComposeItem);
});

document.querySelector("[data-brand-canvas-stage]")?.addEventListener("wheel", (event) => {
  if (!event.ctrlKey && !event.metaKey) return;
  event.preventDefault();
  const zoomFactor = Math.exp(-event.deltaY * 0.012);
  setBrandCanvasZoom(state.brandEditor.zoom * zoomFactor, {
    clientX: event.clientX,
    clientY: event.clientY
  });
}, { passive: false });

document.addEventListener("dragover", (event) => {
  if (event.target.closest("[data-builder-group-section]") || event.target.closest("[data-builder-item]")) {
    event.preventDefault();
  }
});

document.addEventListener("drop", (event) => {
  const draggedId = event.dataTransfer?.getData("text/plain");
  if (!draggedId) return;
  const targetItem = event.target.closest("[data-builder-item]");
  const targetGroupSection = event.target.closest("[data-builder-group-section]");
  if (!targetItem && !targetGroupSection) return;
  event.preventDefault();

  const draggedIndex = state.builder.items.findIndex((item) => item.id === draggedId);
  if (draggedIndex < 0) return;
  const [draggedItem] = state.builder.items.splice(draggedIndex, 1);

  if (targetItem && targetItem.dataset.builderItem !== draggedId) {
    const targetIndex = state.builder.items.findIndex((item) => item.id === targetItem.dataset.builderItem);
    const target = state.builder.items[targetIndex];
    if (target) draggedItem.group = target.group;
    state.builder.items.splice(Math.max(targetIndex, 0), 0, draggedItem);
  } else {
    draggedItem.group = targetGroupSection.dataset.builderGroupSection;
    state.builder.items.push(draggedItem);
  }

  renderTemplateBuilder();
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

// “module” remains the internal data model name.  This keeps all user-facing
// Chinese labels aligned with the product language without changing selectors,
// IDs, filter values, or persisted data.
const templateTerminology = [
  ["模块模板", "图片模板"],
  ["素材模块", "品牌素材"],
  ["图片模块", "图片模板"],
  ["文字模块", "文字模板"],
  ["固定图片模块", "固定图片模板"],
  ["固定图模块", "固定图模板"],
  ["图生图模块", "图生图模板"],
  ["模块", "模板"]
];

function normalizeTemplateTerminology(value) {
  if (typeof value !== "string" || !value.includes("模块")) return value;
  return templateTerminology.reduce((copy, [from, to]) => copy.split(from).join(to), value);
}

function normalizeTemplateTerminologyIn(root) {
  if (!root) return;
  const textWalker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
  const textNodes = [];
  while (textWalker.nextNode()) textNodes.push(textWalker.currentNode);
  textNodes.forEach((node) => {
    const parent = node.parentElement;
    if (!parent || ["SCRIPT", "STYLE", "TEXTAREA"].includes(parent.tagName)) return;
    const copy = normalizeTemplateTerminology(node.nodeValue);
    if (copy !== node.nodeValue) node.nodeValue = copy;
  });

  if (!(root instanceof Element)) return;
  root.querySelectorAll("[aria-label], [alt], [placeholder], [title]").forEach((element) => {
    ["aria-label", "alt", "placeholder", "title"].forEach((attribute) => {
      const value = element.getAttribute(attribute);
      const copy = normalizeTemplateTerminology(value);
      if (copy !== value) element.setAttribute(attribute, copy);
    });
  });
  ["aria-label", "alt", "placeholder", "title"].forEach((attribute) => {
    const value = root.getAttribute?.(attribute);
    const copy = normalizeTemplateTerminology(value);
    if (copy !== value) root.setAttribute(attribute, copy);
  });
}

normalizeTemplateTerminologyIn(document.body);
new MutationObserver((records) => {
  records.forEach((record) => {
    if (record.type === "attributes") {
      const value = record.target.getAttribute(record.attributeName);
      const copy = normalizeTemplateTerminology(value);
      if (copy !== value) record.target.setAttribute(record.attributeName, copy);
      return;
    }
    if (record.type === "characterData") {
      const parent = record.target.parentElement;
      if (parent && !["SCRIPT", "STYLE", "TEXTAREA"].includes(parent.tagName)) {
        const copy = normalizeTemplateTerminology(record.target.nodeValue);
        if (copy !== record.target.nodeValue) record.target.nodeValue = copy;
      }
      return;
    }
    if (record.type === "childList") record.addedNodes.forEach((node) => {
      if (node.nodeType === Node.ELEMENT_NODE) normalizeTemplateTerminologyIn(node);
      if (node.nodeType === Node.TEXT_NODE) {
        const parent = node.parentElement;
        if (parent && !["SCRIPT", "STYLE", "TEXTAREA"].includes(parent.tagName)) {
          const copy = normalizeTemplateTerminology(node.nodeValue);
          if (copy !== node.nodeValue) node.nodeValue = copy;
        }
      }
    });
  });
}).observe(document.body, {
  attributes: true,
  attributeFilter: ["aria-label", "alt", "placeholder", "title"],
  childList: true,
  characterData: true,
  subtree: true
});

setCreationInputMode("multi-replica");
filterTemplates();
filterSuiteSolutions();
filterMaterials();
filterModels();
renderBrandCanvas();
bindSuiteCanvasInteractions();
window.setTimeout(() => {
  els.loadingState.classList.remove("is-visible");
  renderProducts(state.filtered);
  setView("card");
}, 350);

document.addEventListener("click", (event) => {
  const openProduct = event.target.closest("[data-suite-open-product]");
  const openTemplate = event.target.closest("[data-suite-open-template]");
  const productChoice = event.target.closest("[data-suite-product-choice]");
  const templateChoice = event.target.closest("[data-suite-template-choice]");
  const suiteStep = event.target.closest("[data-suite-step]");
  const suiteNextStep = event.target.closest("[data-suite-next-step]");
  const suitePrevStep = event.target.closest("[data-suite-prev-step]");
  const suiteReferenceSource = event.target.closest("[data-suite-reference-source]");
  const suiteReferenceMode = event.target.closest("[data-suite-reference-mode]");
  const suiteAddModule = event.target.closest("[data-suite-add-module]");
  const suiteReferenceUpload = event.target.closest("[data-suite-reference-upload]");
  const suiteReferenceParseLink = event.target.closest("[data-suite-reference-parse-link]");
  const productTab = event.target.closest("[data-suite-product-tab]");
  const localUpload = event.target.closest("[data-suite-local-upload]");
  const canvasHand = event.target.closest("[data-suite-canvas-hand]");
  const canvasSelect = event.target.closest("[data-suite-canvas-select]");
  const zoom = event.target.closest("[data-suite-canvas-zoom]");
  const resetCanvas = event.target.closest("[data-suite-canvas-reset]");
  const back = event.target.closest("[data-suite-replica-back]");
  const saveDraft = event.target.closest("[data-suite-save-draft]");
  const generate = event.target.closest("[data-suite-generate]");
  const suiteCardRegenerate = event.target.closest("[data-suite-card-regenerate]");
  const suiteCardOutpaint = event.target.closest("[data-suite-card-outpaint]");
  const suiteCardDownload = event.target.closest("[data-suite-card-download]");
  const suiteCardExportToggle = event.target.closest("[data-suite-card-export-toggle]");
  const suiteRegenerateSubmit = event.target.closest("[data-suite-regenerate-submit]");
  const suiteRegenerateCancel = event.target.closest("[data-suite-regenerate-cancel]");
  const suiteRegenerateModal = event.target.closest("[data-suite-regenerate-modal]");
  const suiteRegenerateClose = suiteRegenerateModal ? event.target.closest("[data-modal-close]") : null;
  const suiteRegenerateAddImage = suiteRegenerateModal ? event.target.closest("[data-suite-regenerate-add-image]") : null;
  const suiteRegenerateRemoveImage = suiteRegenerateModal ? event.target.closest("[data-suite-regenerate-remove-image]") : null;
  const suiteDetailProductAdd = event.target.closest("[data-suite-detail-product-add]");
  const suiteDetailProductRemove = event.target.closest("[data-suite-detail-product-remove]");
  const suiteTemplateProductAnalysisSubmit = event.target.closest("[data-suite-template-product-analysis-submit]");
  const suiteTemplateModelAdd = event.target.closest("[data-suite-template-model-add]");
  const suiteTemplateModelRemove = event.target.closest("[data-suite-template-model-remove]");
  const suiteTemplateAnalysisApply = event.target.closest("[data-suite-template-analysis-apply]");
  const suiteTemplateAnalysisCopy = event.target.closest("[data-suite-template-analysis-copy]");
  const suiteTemplateReferenceToggle = event.target.closest("[data-suite-template-reference-toggle]");
  const suiteTemplateReferenceDescriptionToggle = event.target.closest("[data-suite-template-reference-description-toggle]");
  const suiteReturnConfirm = event.target.closest("[data-suite-return-confirm]");
  const suiteExportPreview = event.target.closest("[data-suite-export-preview-open]");
  const suiteExportDownload = event.target.closest("[data-suite-export-download]");
  const suiteExportAddText = event.target.closest("[data-suite-export-add-text]");
  const suiteSettingsToggle = event.target.closest("[data-suite-settings-toggle]");
  const resolution = event.target.closest("[data-suite-resolution]");
  const suiteReferencePage = event.target.closest("[data-suite-reference-page]");
  const suitePreviewImage = event.target.closest("[data-suite-preview-image]");
  const modalClose = event.target.closest(".suite-picker-modal [data-modal-close]");

  if (suiteRegenerateClose) {
    event.preventDefault();
    event.stopPropagation();
    const editor = getSuiteEditor();
    editor.regeneratePanelOpen = false;
    closePrototypeModals();
    return;
  }

  if (suiteRegenerateAddImage || suiteRegenerateRemoveImage) {
    event.preventDefault();
    event.stopPropagation();
    const button = suiteRegenerateAddImage || suiteRegenerateRemoveImage;
    const kind = button.dataset.suiteRegenerateAddImage || button.dataset.suiteRegenerateRemoveImage;
    const action = suiteRegenerateAddImage ? "add" : "remove";
    updateSuiteRegenerateImage(kind, action, Number(button.dataset.index || -1));
    return;
  }

  if (suiteDetailProductAdd || suiteDetailProductRemove) {
    event.preventDefault();
    event.stopPropagation();
    if (suiteDetailProductAdd) addSuiteDetailProductImage();
    if (suiteDetailProductRemove) removeSuiteDetailProductImage(Number(suiteDetailProductRemove.dataset.suiteDetailProductRemove || -1));
    return;
  }

  if (suiteTemplateModelAdd || suiteTemplateModelRemove) {
    event.preventDefault();
    if (suiteTemplateModelAdd) addSuiteTemplateModelImage();
    if (suiteTemplateModelRemove) removeSuiteTemplateModelImage(Number(suiteTemplateModelRemove.dataset.suiteTemplateModelRemove || -1));
    return;
  }

  if (suiteTemplateReferenceToggle) {
    const editor = getSuiteEditor();
    getSuiteTemplateModuleState(editor).useReference = suiteTemplateReferenceToggle.checked;
    markSuiteGenerationDirty(editor);
    return;
  }

  if (suiteTemplateReferenceDescriptionToggle) {
    event.preventDefault();
    const editor = getSuiteEditor();
    editor.templateReferenceDescriptionOpen = !editor.templateReferenceDescriptionOpen;
    renderSuiteReplicaEditor();
    return;
  }

  if (suiteSettingsToggle) {
    event.preventDefault();
    event.stopPropagation();
    const editor = getSuiteEditor();
    const stage = document.querySelector("[data-suite-canvas-stage]");
    const previousLeft = stage?.getBoundingClientRect().left;
    editor.settingsCollapsed = !editor.settingsCollapsed;
    renderSuiteReplicaEditor();
    if (stage && Number.isFinite(previousLeft)) {
      const nextLeft = stage.getBoundingClientRect().left;
      editor.x += previousLeft - nextLeft;
      renderSuiteCanvas();
    }
    return;
  }

  if (suiteReferencePage) {
    event.preventDefault();
    selectSuiteReferencePage(suiteReferencePage.dataset.suiteReferencePage);
    return;
  }

  if (suiteTemplateProductAnalysisSubmit) {
    event.preventDefault();
    const editor = getSuiteEditor();
    if (editor.templateEntry) {
      startSuiteTemplateProductAnalysis();
      return;
    }
  }

  if (suiteTemplateAnalysisApply) {
    event.preventDefault();
    const editor = getSuiteEditor();
    const moduleState = getSuiteTemplateModuleState(editor);
    const panel = suiteTemplateAnalysisApply.closest("[data-suite-template-product-analysis-result]");
    moduleState.productPrompt = panel?.querySelector("[data-suite-template-analysis-product]")?.value.trim() || moduleState.analysis?.productPrompt || "";
    moduleState.scenePrompt = panel?.querySelector("[data-suite-template-analysis-scene]")?.value.trim() || moduleState.analysis?.scenePrompt || "";
    renderSuiteReplicaEditor();
    showToast("解析内容已替换到产品描述和场景描述");
    return;
  }

  if (suiteTemplateAnalysisCopy) {
    event.preventDefault();
    showToast("解析内容已复制");
    return;
  }

  if ((suiteCardRegenerate || suiteCardOutpaint || suiteCardDownload || suiteCardExportToggle || suiteRegenerateSubmit || suiteRegenerateCancel) && !isSuiteReplicaEditorActive()) {
    event.preventDefault();
    event.stopPropagation();
    return;
  }

  if (back && back.closest("[data-suite-replica-editor]")) {
    event.preventDefault();
    event.stopImmediatePropagation();
    event.stopPropagation();
    handleSuiteReplicaBack();
    return;
  }
  if (suiteReturnConfirm) {
    event.preventDefault();
    event.stopPropagation();
    returnSuiteReplicaToCreationRecords();
    return;
  }
  if (suitePreviewImage) {
    event.preventDefault();
    if (suiteReferencePage) selectSuiteReferencePage(suiteReferencePage.dataset.suiteReferencePage);
    openDrawerImagePreview(suitePreviewImage.dataset.suitePreviewImage, { caption: suitePreviewImage.dataset.suitePreviewTitle || "图片预览" });
    return;
  }
  if (suiteCardRegenerate) {
    handleSuiteCanvasToolbarAction(suiteCardRegenerate, event);
    return;
  }
  if (suiteCardOutpaint) {
    handleSuiteCanvasToolbarAction(suiteCardOutpaint, event);
    return;
  }
  if (suiteCardDownload) {
    handleSuiteCanvasToolbarAction(suiteCardDownload, event);
    return;
  }
  if (suiteCardExportToggle) {
    handleSuiteCanvasToolbarAction(suiteCardExportToggle, event);
    return;
  }
  if (suiteRegenerateSubmit) { event.preventDefault(); submitSuiteRegeneration(); return; }
  if (suiteRegenerateCancel) {
    event.preventDefault();
    event.stopPropagation();
    const editor = getSuiteEditor();
    editor.regeneratePanelOpen = false;
    closePrototypeModals();
    return;
  }
  if (suiteExportPreview) {
    event.preventDefault();
    event.stopPropagation();
    const pages = getSuiteExportSelection();
    if (!pages.length) {
      showToast("请先选择需要预览的图片");
      return;
    }
    openSuiteExportLongPreview(pages);
    return;
  }
  if (suiteExportDownload) {
    event.preventDefault();
    showToast("已开始批量下载");
    return;
  }
  if (suiteExportAddText) {
    event.preventDefault();
    openSuiteExportTextEditor();
    return;
  }
  if (suiteReferencePage) {
    event.preventDefault();
    selectSuiteReferencePage(suiteReferencePage.dataset.suiteReferencePage);
    return;
  }
  if (openProduct) { openSuitePicker("product"); return; }
  if (openTemplate) {
    if (!getSuiteEditor().product) { showToast("请先上传商品图"); return; }
    openSuitePicker("template");
    return;
  }
  if (productChoice) {
    const product = products.find((item) => item.id === productChoice.dataset.suiteProductChoice);
    if (product) selectSuiteProduct(product);
    return;
  }
  if (templateChoice) { selectSuiteTemplate(templateChoice.dataset.suiteTemplateChoice); return; }
  if (suiteStep) { setSuiteStep(suiteStep.dataset.suiteStep); return; }
  if (suiteNextStep) { setSuiteStep(suiteNextStep.dataset.suiteNextStep); return; }
  if (suitePrevStep) { setSuiteStep(suitePrevStep.dataset.suitePrevStep); return; }
  if (suiteReferenceSource) {
    const editor = getSuiteEditor();
    editor.referenceSource = suiteReferenceSource.dataset.suiteReferenceSource;
    renderSuiteReplicaEditor();
    return;
  }
  if (suiteReferenceMode) {
    const editor = getSuiteEditor();
    editor.referenceSource = "upload";
    editor.referenceMode = suiteReferenceMode.dataset.suiteReferenceMode;
    editor.template = null;
    editor.generated = false;
    renderSuiteReplicaEditor();
    return;
  }
  if (suiteAddModule) { openSuitePicker("template"); return; }
  if (suiteReferenceUpload) {
    const editor = getSuiteEditor();
    editor.referenceSource = "upload";
    editor.referenceMode = "multi";
    editor.template = null;
    ensureSuiteReferenceTemplate(editor);
    editor.step = "generate";
    editor.generated = false;
    renderSuiteReplicaEditor();
    showToast("已模拟上传 5 张参考商详图，AI 已拆解模块结构");
    return;
  }
  if (suiteReferenceParseLink) {
    const editor = getSuiteEditor();
    const input = suiteReferenceParseLink.closest(".suite-reference-link")?.querySelector("[data-suite-reference-link-input]");
    editor.referenceSource = "upload";
    editor.referenceMode = "link";
    editor.template = null;
    ensureSuiteReferenceTemplate(editor);
    editor.step = "generate";
    editor.generated = false;
    renderSuiteReplicaEditor();
    showToast(input?.value ? "链接已解析，参考商详结构已加载" : "已模拟解析链接，参考商详结构已加载");
    return;
  }
  if (productTab) {
    const modal = productTab.closest("[data-suite-product-modal]");
    modal?.querySelectorAll("[data-suite-product-tab]").forEach((button) => button.classList.toggle("is-active", button === productTab));
    modal?.querySelectorAll("[data-suite-product-panel]").forEach((panel) => panel.classList.toggle("is-active", panel.dataset.suiteProductPanel === productTab.dataset.suiteProductTab));
    return;
  }
  if (localUpload) { localUpload.closest("[data-suite-product-modal]")?.querySelector("[data-suite-local-file]")?.click(); return; }
  if (canvasHand || canvasSelect) {
    const editor = getSuiteEditor();
    editor.canvasTool = canvasHand ? "hand" : "select";
    document.querySelector("[data-suite-canvas-hand]")?.classList.toggle("is-active", editor.canvasTool === "hand");
    document.querySelector("[data-suite-canvas-select]")?.classList.toggle("is-active", editor.canvasTool === "select");
    showToast(editor.canvasTool === "hand" ? "已切换为抓手工具，可拖动画布" : "已切换为选择工具");
    return;
  }
  if (zoom) { setSuiteCanvasZoom(getSuiteEditor().scale + (zoom.dataset.suiteCanvasZoom === "in" ? 0.1 : -0.1)); return; }
  if (resetCanvas) { const editor = getSuiteEditor(); editor.scale = 1; editor.x = 0; editor.y = 0; renderSuiteCanvas(); return; }
  if (back) {
    event.preventDefault();
    event.stopImmediatePropagation();
    event.stopPropagation();
    handleSuiteReplicaBack();
    return;
  }
  if (saveDraft) { showToast("套图复刻草稿已保存"); return; }
  if (generate) {
    submitSuiteGeneration();
    return;
  }
  if (resolution) {
    const editor = getSuiteEditor();
    editor.resolution = resolution.dataset.suiteResolution;
    markSuiteGenerationDirty(editor);
    renderSuiteReplicaEditor();
    return;
  }
  if (modalClose) { closePrototypeModals(); }
});

document.addEventListener("input", (event) => {
  const suiteCopyLineInput = event.target.closest("[data-suite-copy-line-input]");
  if (suiteCopyLineInput) {
    updateSuiteCopyLine(suiteCopyLineInput);
    return;
  }
  const productPrompt = event.target.closest("[data-suite-template-product-prompt]");
  const scenePrompt = event.target.closest("[data-suite-template-scene-prompt]");
  const analysisProductPrompt = event.target.closest("[data-suite-template-analysis-product]");
  const analysisScenePrompt = event.target.closest("[data-suite-template-analysis-scene]");
  if (!productPrompt && !scenePrompt && !analysisProductPrompt && !analysisScenePrompt) return;
  const editor = getSuiteEditor();
  const moduleState = getSuiteTemplateModuleState(editor);
  if (productPrompt) moduleState.productPrompt = productPrompt.value;
  if (scenePrompt) moduleState.scenePrompt = scenePrompt.value;
  if (analysisProductPrompt && moduleState.analysis) moduleState.analysis.productPrompt = analysisProductPrompt.value;
  if (analysisScenePrompt && moduleState.analysis) moduleState.analysis.scenePrompt = analysisScenePrompt.value;
  markSuiteGenerationDirty(editor);
});

document.addEventListener("change", (event) => {
  const suiteStartGenerationParam = event.target.closest("[data-suite-start-generation-param]");
  if (suiteStartGenerationParam) {
    const field = suiteStartGenerationParam.dataset.suiteStartGenerationParam;
    if (field) suiteReplicaStartState.generation[field] = suiteStartGenerationParam.value;
    renderSuiteReplicaStart();
    return;
  }
  const suiteResolutionSelect = event.target.closest("[data-suite-resolution-select]");
  const suiteRatioSelect = event.target.closest("[data-suite-ratio-select]");
  const suiteTemplateResolution = event.target.closest("[data-suite-template-resolution]");
  const suiteTemplateModel = event.target.closest("[data-suite-template-model]");
  const suiteTemplateCount = event.target.closest("[data-suite-template-count]");
  if (suiteTemplateResolution || suiteTemplateModel || suiteTemplateCount) {
    const editor = getSuiteEditor();
    const moduleState = getSuiteTemplateModuleState(editor);
    if (suiteTemplateResolution) moduleState.generationResolution = suiteTemplateResolution.value;
    if (suiteTemplateModel) moduleState.generationModel = suiteTemplateModel.value;
    if (suiteTemplateCount) moduleState.generationCount = suiteTemplateCount.value;
    markSuiteGenerationDirty(editor);
    renderSuiteReplicaEditor();
    return;
  }
  if (suiteResolutionSelect) {
    const editor = getSuiteEditor();
    editor.resolution = suiteResolutionSelect.value;
    markSuiteGenerationDirty(editor);
    renderSuiteReplicaEditor();
    return;
  }
  if (suiteRatioSelect) {
    const editor = getSuiteEditor();
    editor.ratio = suiteRatioSelect.value;
    markSuiteGenerationDirty(editor);
    renderSuiteReplicaEditor();
    return;
  }
  const localFile = event.target.closest("[data-suite-local-file]");
  if (localFile?.files?.length) {
    const files = Array.from(localFile.files || []).filter((file) => file.type.startsWith("image/")).slice(0, 12);
    if (!files.length) return;
    const images = files.map((file) => ({ url: URL.createObjectURL(file), name: file.name || "本地商品图" }));
    selectSuiteProduct({
      id: `local-${Date.now()}`,
      name: images[0]?.name?.replace(/\.[^/.]+$/, "") || "本地上传商品",
      category: "本地上传",
      materialCount: images.length,
      image: images[0]?.url || "",
      images,
      isLocal: true
    });
    showToast(`已上传 ${images.length} 张商品图`);
    localFile.value = "";
  }
});
