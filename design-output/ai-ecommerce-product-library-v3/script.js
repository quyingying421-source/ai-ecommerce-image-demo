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

// 套图方案和套图模板分别维护：方案用于编排可复用的整套创作方法，
// 模板页的数据与操作不会改写这里的方案。
const suiteSolutions = templates.map((template) => ({
  ...template,
  scope: template.scope === "我的模板" ? "我的方案" : "已购方案",
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
    id: "boutique-001",
    name: "蕾丝聚拢文胸自然光主图",
    type: "精品图片",
    assetType: "单图生成",
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
  modelGenderFilter: "全部",
  modelStyleFilters: [],
  modelCreateTimer: null,
  modelPreviewReady: false,
  templateCategory: "全部品类",
  suiteSolutionScope: "全部",
  suiteSolutionCategory: "全部品类",
  activeTemplate: templates[0],
  templateModalEditing: false,
  contentTargetGroup: "多图",
  contentSource: "local",
  contentSelections: [],
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
    step: "config",
    taskId: "",
    taskStatus: "draft",
    elapsed: 0,
    timer: null,
    selectedModuleId: "",
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
    resolution: "2K",
    referenceSource: "upload",
    referenceMode: "multi",
    generated: false,
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
  backPage: "creation-plaza",
  activeMaterial: "product",
  materials: { product: [], model: [], package: [], background: [], reference: [] },
  analysisImages: [],
  sourceAsset: null,
  productAnalysis: "",
  productAnalyses: [],
  tasks: [],
  selectedTaskId: "",
  selectedCandidateId: "",
  expandedTaskId: "",
  savedModule: null,
  taskSeq: 4810
};

const moduleFlowState = {
  step: 1,
  product: null,
  selectedModule: null,
  showAllModules: false,
  lockedModule: false
};

const moduleProductPickerState = {
  pendingProductId: "",
  target: "module"
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
  product: null,
  template: null,
  referenceSource: "upload",
  referenceMode: "multi",
  link: "",
  referenceReady: false
};

const moduleMaterialLabels = {
  product: "产品图",
  model: "模特图",
  package: "包装图",
  background: "背景图",
  reference: "参考图"
};

const moduleReuseProfiles = {
  "module-image-001": { product: 4, model: 1, tags: "自然光棚拍 · 商品主图", productPrompt: "突出商品的轻薄亲肤材质、版型与细节，保留上传商品的真实颜色和纹理。", scenePrompt: "保持自然光棚拍的干净构图与柔和阴影，画面简洁且突出商品主体。" },
  "module-image-002": { product: 4, model: 0, tags: "日常陈列 · 多色展示", productPrompt: "按上传顺序展示多款商品，清晰呈现颜色、材质与组合关系。", scenePrompt: "保持简洁日常陈列构图与柔和自然光，画面干净有层次。" },
  "module-image-003": { product: 1, model: 1, tags: "居家舒适 · 模特展示", productPrompt: "突出商品贴肤质感、弹性与舒适卖点，保留商品的真实细节。", scenePrompt: "保持柔和室内自然光和放松的居家氛围，模特与商品清晰可见。" },
  "module-image-004": { product: 2, model: 1, tags: "夏日户外 · 儿童展示", productPrompt: "展示商品活力配色、面料细节与儿童穿着特征。", scenePrompt: "保持明亮夏日户外光线和活力构图，主体清晰、画面自然。" }
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
els.creationTaskSearch = document.querySelector("[data-creation-task-search]");
els.creationTaskEmpty = document.querySelector("[data-creation-task-empty]");
els.creationCost = document.querySelector("[data-cost-label]");
els.creationGenerateCost = document.querySelector("[data-creation-cost]");
els.templateLabel = document.querySelector("[data-template-label]");
els.detailPrompt = document.querySelector("[data-detail-prompt]");
els.detailRatio = document.querySelector("[data-detail-ratio]");
els.detailResolution = document.querySelector("[data-detail-resolution]");
els.detailTaskList = document.querySelector("[data-detail-task-list]");
els.templateModal = document.querySelector("[data-template-modal]");
els.paramModal = document.querySelector("[data-param-modal]");
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
els.modelSearch = document.querySelector("[data-model-search]");
els.brandMaterialCount = document.querySelector("[data-brand-material-count]");
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
        <div class="template-combo-badge">${templateComboLabel(template)}</div>
        <div class="template-long-stack">
          ${renderLongPreview(getEnabledTemplateItems(template.items), { emptyText: "暂无启用内容" })}
        </div>
        <div class="template-card-title">${template.name}</div>
        <div class="template-hover-actions">
          <button type="button" data-template-edit="${template.id}">编辑</button>
          <button type="button" data-template-create="${template.id}">去创作</button>
        </div>
      </div>
    </article>
  `).join("");

  const hasKeyword = Boolean(els.templateSearch?.value.trim());
  const hasFilter = state.templateCategory !== "全部品类";
  els.templateGrid.classList.toggle("is-hidden", list.length === 0);
  els.templateEmptyState?.classList.toggle("is-visible", templates.length === 0);
  els.templateNoResultState?.classList.toggle("is-visible", templates.length > 0 && list.length === 0 && (hasKeyword || hasFilter));
}

function filterTemplates() {
  if (!els.templateGrid) return;
  const keyword = els.templateSearch?.value.trim().toLowerCase() || "";
  const category = state.templateCategory;

  state.filteredTemplates = templates.filter((template) => {
    const haystack = [template.name, template.description, template.category, template.brand, template.scope, ...template.tags].join(" ").toLowerCase();
    const matchKeyword = !keyword || haystack.includes(keyword);
    const matchCategory = category === "全部品类" || template.category === category;
    return matchKeyword && matchCategory;
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
        <div class="suite-solution-badge">${templateComboLabel(solution)}</div>
        <div class="suite-solution-stack">${renderSuiteSolutionPreview(getEnabledTemplateItems(solution.items))}</div>
        <div class="suite-solution-title">${solution.name}</div>
        <div class="suite-solution-actions">
          <button type="button" data-solution-edit="${solution.id}">编辑</button>
          <button type="button" data-solution-create-with="${solution.id}">去创作</button>
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
  const backButton = document.querySelector("[data-template-builder-back]");
  const saveButton = document.querySelector("[data-template-builder-save]");
  if (backButton) backButton.textContent = isSolution ? "返回套图方案库" : "返回套图模板";
  if (saveButton) saveButton.textContent = isSolution ? "保存方案" : "保存模板";
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
          ${items.length ? items.map((item) => renderBuilderItem(item)).join("") : `<div class="builder-empty-group">暂无内容，可从本地上传、素材库或历史创作中选择</div>`}
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
  els.builderPreview.innerHTML = renderLongPreview(enabledItems, { showBadges: true, emptyText: "暂无启用内容，勾选图片后展示长图预览" });
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
  state.contentTargetGroup = "多图";
  state.contentSelections = [];
  state.contentSource = "local";
  if (els.contentModalSubtitle) els.contentModalSubtitle.textContent = "多选后加入多图配置";
  document.querySelectorAll("[data-content-source]").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.contentSource === "local");
  });
  renderContentOptions();
  openPrototypeModal(els.templateContentModal);
}

function renderContentOptions() {
  if (!els.contentSourceGrid) return;
  const options = templateContentOptions[state.contentSource] || [];
  if (state.contentSource === "local") {
    const selectedKey = "local-0";
    els.contentSourceGrid.innerHTML = `
      <button class="content-upload-zone ${state.contentSelections.includes(selectedKey) ? "is-selected" : ""}" type="button" data-content-option="${selectedKey}">
        <span class="content-upload-icon"></span>
        <strong>上传本地图片</strong>
        <small>支持 JPG / PNG / WEBP，可一次选择多张图片</small>
        <em>选择本地图片</em>
      </button>
    `;
    return;
  }
  els.contentSourceGrid.innerHTML = options.map((option, index) => {
    const key = `${state.contentSource}-${index}`;
    return `
      <button class="content-option-card ${state.contentSelections.includes(key) ? "is-selected" : ""}" type="button" data-content-option="${key}">
        <img src="${option.image}" alt="${option.title}">
        <strong>${option.title}</strong>
      </button>
    `;
  }).join("");
}

function setContentSource(source) {
  state.contentSource = source;
  state.contentSelections = [];
  document.querySelectorAll("[data-content-source]").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.contentSource === source);
  });
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
  if (!state.contentSelections.length) {
    showToast("请先选择内容");
    return;
  }
  state.contentSelections.forEach((key) => {
    const [source, indexText] = key.split("-");
    const option = templateContentOptions[source]?.[Number(indexText)];
    if (!option) return;
    state.builder.items.push({
      id: `builder-${Date.now()}-${state.builderSeq++}`,
      title: option.title,
      group: "多图",
      purpose: option.purpose,
      source: option.source,
      image: option.image,
      ratio: inferTemplateItemRatio({ group: state.contentTargetGroup, purpose: option.purpose, source: option.source }),
      enabled: true
    });
  });
  closePrototypeModals();
  renderTemplateBuilder();
  showToast(`已加入 ${state.contentSelections.length} 个内容`);
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
      scope: isSolution ? "我的方案" : "我的模板",
      groups: [...state.builder.groups],
      usage: 0,
      updatedAt: now,
      tags: [...state.builder.groups, state.builder.category],
      items: state.builder.items.map((item) => ({ ...item }))
    });
  }
  if (isSolution) {
    filterSuiteSolutions();
    setWorkspacePage("suite-solution-library");
    clearMenuActive();
    document.querySelector('[data-single-menu="模块与模版"]')?.classList.add("active");
    showToast("套图方案已保存");
  } else {
    filterTemplates();
    setWorkspacePage("template-center");
    clearMenuActive();
    document.querySelector('[data-single-menu="模块与模版"]')?.classList.add("active");
    showToast("模板已保存");
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
  if (els.materialCount) els.materialCount.textContent = `共 ${list.length} 个素材`;

  els.materialGrid.innerHTML = list.map((material) => `
    <article class="resource-card boutique-resource-card" data-material-id="${material.id}">
      <div class="resource-cover ${material.tone}">
        <button class="boutique-card-open" type="button" data-material-preview="${material.id}" aria-label="查看${material.name}">
        <img src="${material.image}" alt="${material.name}">
        </button>
        <span class="resource-badge category">${material.assetType || material.type}</span>
        <h3 class="resource-card-title">${material.name}</h3>
        <span class="boutique-card-tags">${material.tags.slice(0, 2).join(" · ")}</span>
        <div class="resource-hover-actions">
          <button type="button" data-material-use="${material.id}">再次创作</button>
          <button type="button" data-material-preview="${material.id}">查看</button>
        </div>
      </div>
    </article>
  `).join("");

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
    const matchType = activeFilter === "all" || (material.assetType || material.type) === activeFilter;
    return matchKeyword && matchType;
  });

  renderMaterialCards(state.filteredMaterials);
}

function getMaterial(materialId) {
  return materialLibrary.find((item) => item.id === materialId);
}

function setPreviewMetaLabels({ price = "价格", fit = "适用品类" } = {}) {
  const priceNode = document.querySelector("[data-preview-price]");
  const fitNode = document.querySelector("[data-preview-fit]");
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
  document.querySelector("[data-preview-source]").textContent = material.source;
  document.querySelector("[data-preview-price]").textContent = material.status;
  document.querySelector("[data-preview-usage]").textContent = `${formatUsage(material.usage)}次`;
  document.querySelector("[data-preview-fit]").textContent = material.relatedProduct;
  document.querySelector("[data-preview-use]").textContent = "使用素材";
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
  document.querySelector('[data-single-menu="模块与模版"]')?.classList.add("active");
  setWorkspacePage("template-builder");
  showToast("已进入模板编辑页");
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
  els.body.classList.toggle("is-module-image-create", pageName === "module-image-create");
  els.body.classList.toggle("is-module-flow", pageName === "module-generation-flow");
  els.body.classList.toggle("is-template-flow", pageName === "template-generation-flow");
  els.body.classList.toggle("is-module-static-create", pageName === "module-static-create");
  els.body.classList.toggle("is-multi-task", pageName === "multi-image-creation");
  els.body.classList.toggle("is-suite-replica-editor", pageName === "suite-replica-editor");
  els.body.classList.toggle("is-brand-editor", pageName === "brand-material-editor");
  els.body.classList.toggle("is-outpaint-editor", pageName === "outpaint-editor");
  closeCreateMenu();
  if (pageName !== "product-library" || els.drawer.dataset.drawerKind !== "product") {
    closeDrawer();
  }
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
  record.dataset.type = "扩图";
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
    <div class="creation-task-action"><button class="btn ghost" type="button" data-add-to-boutique>加入精品库</button><button class="btn primary" type="button" data-open-outpaint>继续扩图</button></div>
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
    outpaintEls.generate.innerHTML = "重新生成 <span>8</span>";
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
    returnButton.lastChild.textContent = backPage === "creation-records" ? "返回创作记录" : backPage === "ai-tools" ? "返回AI工具" : backPage === "module-image" ? "返回模块生图" : "返回创作中心";
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
  return { image: "图生图模块", fixed: "固定图模块", text: "文字模块" }[type] || "模块";
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
          <h2 class="module-library-cover-title" title="${asset.name}">${asset.name}</h2>
          <div class="brand-asset-hover-actions module-library-cover-actions" aria-label="模块操作">
            <button type="button" data-module-library-publish="${asset.id}" title="发布到 AI 图片广场" aria-label="发布到 AI 图片广场"><img src="assets/brand-action-publish.png" alt=""></button>
            <button type="button" data-module-library-edit="${asset.id}" title="编辑" aria-label="编辑"><img src="assets/brand-action-edit.png" alt=""></button>
            <button type="button" data-module-library-delete="${asset.id}" title="删除" aria-label="删除"><img src="assets/brand-action-delete.png" alt=""></button>
          </div>
          <button class="module-library-make" type="button" data-module-library-make="${asset.id}">做同款</button>
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
  setPreviewMetaLabels({ price: "状态", fit: "模块类目" });
  document.querySelector("[data-preview-title]").textContent = asset.name;
  document.querySelector("[data-preview-image]").src = asset.image;
  document.querySelector("[data-preview-category]").textContent = asset.category;
  document.querySelector("[data-preview-type]").textContent = moduleLibraryTypeLabel(asset.type);
  document.querySelector("[data-preview-source]").textContent = "自建模块";
  document.querySelector("[data-preview-price]").textContent = asset.status;
  document.querySelector("[data-preview-usage]").textContent = "可在创作中调用";
  document.querySelector("[data-preview-fit]").textContent = asset.category;
  document.querySelector("[data-preview-use]").textContent = asset.type === "image" ? "创作图片" : "编辑模块";
  openPrototypeModal(els.resourcePreviewModal);
}

function openModuleLibraryAsset(assetId, action = "edit") {
  const asset = getModuleLibraryAsset(assetId);
  if (!asset) return;
  if (asset.type === "image") {
    if (action === "create") {
      resetModuleFlow();
      moduleFlowState.selectedModule = asset;
      moduleFlowState.lockedModule = true;
      openModuleGenerationFlow({ resume: true });
      showToast(`已选择模块：${asset.name}，请先选择商品`);
      return;
    }
    openModuleImageWorkspace({ fresh: true, backPage: "module-library", intent: action === "create" ? "generate" : "create" });
    moduleImageState.sourceAsset = asset;
    const profile = getModuleReuseProfile();
    document.querySelector("[data-module-product-prompt]").value = profile.productPrompt;
    document.querySelector("[data-module-scene-prompt]").value = profile.scenePrompt;
    renderModuleImageWorkspace();
    showToast(action === "create" ? `已应用模块：${asset.name}` : `正在编辑：${asset.name}`);
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

function deleteModuleLibraryAsset(assetId) {
  const index = moduleLibraryAssets.findIndex((asset) => asset.id === assetId);
  if (index < 0) return;
  const [asset] = moduleLibraryAssets.splice(index, 1);
  filterModuleLibrary();
  showToast(`已删除模块：${asset.name}`);
}

function openModuleLibrary() {
  state.moduleLibraryType = "image";
  setWorkspacePage("module-library");
  clearMenuActive();
  document.querySelector('[data-single-menu="模块与模版"]')?.classList.add("active");
  filterModuleLibrary();
}

function resetModuleFlow() {
  moduleFlowState.step = 1;
  moduleFlowState.product = null;
  moduleFlowState.selectedModule = null;
  moduleFlowState.showAllModules = false;
  moduleFlowState.lockedModule = false;
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

function renderModuleProductPicker() {
  const grid = document.querySelector("[data-module-product-picker-grid]");
  const confirm = document.querySelector("[data-module-product-picker-confirm]");
  const tip = document.querySelector("[data-module-product-picker-tip]");
  const isTemplateStart = moduleProductPickerState.target === "template";
  const isSuiteReplicaStart = moduleProductPickerState.target === "multi-replica";
  const modal = document.querySelector("[data-module-product-picker-modal]");
  const heading = modal?.querySelector("h2");
  const copy = modal?.querySelector("p");
  if (heading) heading.textContent = "从商品库选择";
  if (copy) copy.textContent = isSuiteReplicaStart
    ? "选择一个商品后，系统会推荐适合该商品的多图复刻模板。"
    : isTemplateStart
      ? "选择一个商品后，系统会推荐适合该商品的套图模版。"
      : "选择一个商品后，系统会基于商品类目推荐适合的图片模块。";
  if (grid) {
    grid.innerHTML = products.slice(0, 12).map((product) => `
      <button class="module-product-picker-card ${moduleProductPickerState.pendingProductId === product.id ? "is-selected" : ""}" type="button" data-module-product-choice="${product.id}">
        <img src="${product.image}" alt="${product.name}"><span><strong>${product.name}</strong><small>${product.category} · ${product.materialCount || 1} 项素材</small></span><i>✓</i>
      </button>`).join("");
  }
  const product = products.find((item) => item.id === moduleProductPickerState.pendingProductId);
  if (confirm) confirm.disabled = !product;
  if (tip) tip.textContent = product ? `已选择：${product.name}` : "请选择一个商品";
}

function openModuleProductPicker(target = "module") {
  moduleProductPickerState.target = target;
  const currentProduct = target === "template" ? templateStartState.product : target === "multi-replica" ? suiteReplicaStartState.product : target === "single-replica" ? null : moduleFlowState.product;
  moduleProductPickerState.pendingProductId = currentProduct?.isLocal ? "" : (currentProduct?.id || "");
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
    referenceSelected.innerHTML = hasReference ? `<img src="${singleReplicaState.reference.image}" alt="主参考图"><span><strong>${singleReplicaState.reference.name || "已选择主参考图"}</strong><small>将复刻构图、场景、光影与视觉氛围</small></span><button type="button" data-single-replica-reference-remove aria-label="删除主参考图">×</button>` : "";
  }
  const referenceNext = root.querySelector('[data-single-replica-next="2"]');
  const referenceTip = root.querySelector("[data-single-replica-reference-tip]");
  const generate = root.querySelector("[data-single-replica-generate]");
  if (referenceNext) referenceNext.disabled = !hasReference;
  if (generate) generate.disabled = !hasReference;
  if (referenceTip) referenceTip.textContent = hasReference ? "确认设置后将直接进入图片创作详情" : "请上传一张主参考图";
  const prompt = root.querySelector("[data-single-replica-prompt]");
  if (prompt && document.activeElement !== prompt) prompt.value = els.creationPrompt?.value || "";
  const ratioSelect = root.querySelector("[data-single-replica-ratio-options]");
  const resolutionSelect = root.querySelector("[data-single-replica-resolution-options]");
  const modelSelect = root.querySelector("[data-single-replica-model-options]");
  if (ratioSelect) ratioSelect.value = state.creation.ratio || "3:4";
  if (resolutionSelect) resolutionSelect.value = state.creation.resolution || "2K";
  if (modelSelect) modelSelect.value = state.creation.generationModel || "专业版";
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

function renderTemplateFlowCard(template, { selected = false, drawer = false } = {}) {
  const moduleCount = template.items.filter((item) => isTemplateItemEnabled(item)).length;
  return `<button class="module-flow-module-card ${selected ? "is-selected" : ""}" type="button" ${drawer ? `data-template-flow-drawer-template="${template.id}"` : `data-template-flow-template="${template.id}"`}>
    <div class="module-flow-module-cover"><img src="${template.items[0]?.image || "assets/product-cover-01.png"}" alt="${template.name}"><span class="module-flow-module-check">✓</span></div>
    <strong>${template.name}</strong><small class="template-flow-card-meta">${template.category} · ${moduleCount} 个版块</small>
  </button>`;
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
  suiteReplicaStartState.product = null;
  suiteReplicaStartState.template = null;
  suiteReplicaStartState.referenceSource = "upload";
  suiteReplicaStartState.referenceMode = "multi";
  suiteReplicaStartState.link = "";
  suiteReplicaStartState.referenceReady = false;
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

function getSuiteStartProgressStep() {
  if (suiteReplicaStartState.step === "reference") return "reference";
  return "product";
}

function renderSuiteReplicaStart() {
  const product = suiteReplicaStartState.product;
  const currentStep = getSuiteStartProgressStep();
  const root = document.querySelector("[data-creation-suite-replica-start]");
  const empty = document.querySelector("[data-suite-start-empty]");
  const selected = document.querySelector("[data-suite-start-selected]");
  const tip = document.querySelector("[data-suite-start-tip]");
  const next = document.querySelector("[data-suite-start-next]");
  const referencePanel = document.querySelector("[data-suite-start-reference-panel]");
  const referenceProduct = document.querySelector("[data-suite-start-reference-product]");
  const referenceTemplates = document.querySelector("[data-suite-start-reference-templates]");
  const referenceNext = document.querySelector("[data-suite-start-reference-next]");
  const linkInput = document.querySelector("[data-suite-start-link-input]");
  const progressItems = document.querySelectorAll("[data-suite-start-progress-item]");
  const startStages = document.querySelectorAll("[data-suite-start-stage]");
  root?.classList.toggle("is-product-selected", Boolean(product));
  root?.setAttribute("data-suite-start-step", suiteReplicaStartState.step);
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
      <span>已上传商品图</span>
      <div>${images.slice(0, 6).map((image, index) => `<img src="${image.url || image.image}" alt="商品图 ${index + 1}">`).join("")}</div>
      <strong>${product.name || "本地上传商品"} · ${images.length || product.materialCount || 1} 张</strong>
    ` : "";
  }
  if (referenceTemplates) {
    referenceTemplates.innerHTML = getRecommendedSuiteReplicaTemplates().map((template) => `
      <button class="${suiteReplicaStartState.template?.id === template.id ? "is-active" : ""}" type="button" data-suite-start-template-choice="${template.id}">
        <img src="${template.cover}" alt="${template.name}">
        <span><strong>${template.name}</strong><small>${template.category} · ${template.pages.length} 页</small></span>
      </button>
    `).join("");
  }
  const activeMode = suiteReplicaStartState.referenceSource === "template" ? "template" : suiteReplicaStartState.referenceMode;
  document.querySelectorAll("[data-suite-start-reference-mode]").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.suiteStartReferenceMode === activeMode);
  });
  document.querySelectorAll("[data-suite-start-reference-panel-mode]").forEach((panel) => {
    panel.classList.toggle("is-active", panel.dataset.suiteStartReferencePanelMode === activeMode);
  });
  if (linkInput && document.activeElement !== linkInput) linkInput.value = suiteReplicaStartState.link || "";
  progressItems.forEach((item) => {
    const order = ["product", "reference", "detail"];
    const itemIndex = order.indexOf(item.dataset.suiteStartProgressItem);
    const currentIndex = order.indexOf(currentStep);
    item.classList.toggle("is-current", itemIndex === currentIndex);
    item.classList.toggle("is-done", itemIndex < currentIndex);
  });
  if (tip) tip.textContent = product ? "已上传商品图，点击下一步选择参考模板" : "请选择一个商品开始复刻";
  if (next) {
    next.disabled = !product;
    next.textContent = "下一步";
  }
  if (referenceNext) referenceNext.disabled = !suiteReplicaStartState.referenceReady;
}

function selectSuiteReplicaStartProduct(product) {
  if (!product) return;
  suiteReplicaStartState.product = product;
  suiteReplicaStartState.template = null;
  suiteReplicaStartState.referenceReady = false;
  renderSuiteReplicaStart();
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

function openSuiteReplicaStartTemplateModal() {
  let modal = document.querySelector("[data-suite-start-template-modal]");
  if (!modal) {
    modal = document.createElement("div");
    modal.className = "prototype-modal suite-picker-modal";
    modal.dataset.suiteStartTemplateModal = "";
    modal.setAttribute("aria-hidden", "true");
    modal.innerHTML = `
      <div class="prototype-modal-panel suite-picker-panel suite-template-picker-panel">
        <div class="prototype-modal-head"><div><h2>选择复刻模板</h2><p>选择后进入多图复刻详情页查看无限画布。</p></div><button class="prototype-close" type="button" data-modal-close aria-label="关闭"></button></div>
        <div class="suite-picker-tabs"><button class="is-active" type="button">全部模板</button></div>
        <div class="suite-template-picker-grid">${suiteReplicaTemplateOptions.map((template) => `<button type="button" data-suite-start-template-choice="${template.id}"><div><img src="${template.cover}" alt="${template.name}"><span>${template.pages.length} 页</span></div><strong>${template.name}</strong><small>${template.category}</small><p>${template.description}</p></button>`).join("")}</div>
      </div>`;
    document.body.appendChild(modal);
  }
  openPrototypeModal(modal);
}

function enterSuiteReplicaWorkspaceFromStart() {
  const { product, template } = suiteReplicaStartState;
  if (!product) {
    showToast("请先上传商品图");
    return;
  }
  openSuiteReplicaEditor("creation-plaza", {
    product,
    templateId: template?.id,
    referenceSource: suiteReplicaStartState.referenceSource,
    referenceMode: suiteReplicaStartState.referenceMode,
    link: suiteReplicaStartState.link,
    autoReference: !template
  });
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

function renderModuleFlowTemplateDrawer() {
  const grid = document.querySelector("[data-module-flow-template-drawer-grid]");
  if (!grid) return;
  grid.innerHTML = moduleLibraryAssets
    .filter((asset) => asset.type === "image")
    .map((asset) => renderModuleFlowModuleCard(asset, { selected: moduleFlowState.selectedModule?.id === asset.id, drawer: true }))
    .join("");
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
  document.querySelector('[data-single-menu="素材库"]')?.classList.add("active");
}

function openBrandMaterialEditor(backPage = "brand-material-library") {
  const target = ["creation-plaza", "ai-tools"].includes(backPage) ? backPage : "brand-material-library";
  state.brandEditor.backPage = target;
  setWorkspacePage("brand-material-editor");
  clearMenuActive();
  const menuName = target === "creation-plaza" ? "创作中心" : target === "ai-tools" ? "AI工具" : "素材库";
  document.querySelector(`[data-single-menu="${menuName}"]`)?.classList.add("active");
  const backButton = document.querySelector("[data-back-brand-library]");
  if (backButton) {
    const backText = target === "creation-plaza" ? "返回创作中心" : target === "ai-tools" ? "返回AI工具" : "返回素材库";
    backButton.lastChild.textContent = backText;
    backButton.setAttribute("aria-label", backText);
  }
  setBrandEditorTool("add");
  renderBrandAddedImages();
  renderBrandCanvas();
}

function leaveBrandMaterialEditor() {
  const backPage = ["creation-plaza", "ai-tools"].includes(state.brandEditor.backPage) ? state.brandEditor.backPage : "brand-material-library";
  setWorkspacePage(backPage);
  clearMenuActive();
  const menuName = backPage === "creation-plaza" ? "创作中心" : backPage === "ai-tools" ? "AI工具" : "素材库";
  document.querySelector(`[data-single-menu="${menuName}"]`)?.classList.add("active");
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
  const keyword = document.querySelector("[data-brand-material-search]")?.value.trim().toLowerCase() || "";

  document.querySelectorAll("[data-brand-asset-type]").forEach((card) => {
    const title = card.querySelector("h3")?.textContent.toLowerCase() || "";
    const category = card.querySelector(".brand-asset-category")?.textContent.toLowerCase() || "";
    const matchesType = activeType === "全部" || category.includes(activeType.toLowerCase());
    const matchesKeyword = !keyword || `${title} ${category}`.includes(keyword);
    card.classList.toggle("is-hidden", !matchesType || !matchesKeyword);
  });

  if (els.brandMaterialCount) {
    els.brandMaterialCount.textContent = `共 ${document.querySelectorAll("[data-brand-asset-type]").length} 个素材`;
  }
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
  if (state.creation.inputMode === "template") return "模板生图";
  if (state.creation.inputMode === "module") return "模块生图";
  if (state.creation.inputMode === "reference") return "参考图复刻";
  if (hasPrompt || state.creation.productUploaded || state.creation.referenceUploaded) return "自由创作";
  return "待识别";
}

function getCreationCost(mode) {
  return {
    待识别: 0,
    自由创作: 4,
    参考图复刻: 10,
    模板创作: 8,
    模板生图: 0,
    套图创作: 18
  }[mode] || 0;
}

function updateCreationMode() {
  const mode = getCreationMode();
  if (els.creationMode) els.creationMode.textContent = mode;
  if (els.creationCost) els.creationCost.textContent = `${getCreationCost(mode)} 融豆`;
  if (els.creationGenerateCost) els.creationGenerateCost.textContent = getCreationCost(mode);
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
  const promptShell = document.querySelector(".creation-prompt-shell");
  if (moduleStart) moduleStart.hidden = mode !== "module";
  if (templateStart) templateStart.hidden = mode !== "template";
  if (suiteReplicaStart) suiteReplicaStart.hidden = mode !== "multi-replica";
  if (singleReplicaStart) singleReplicaStart.hidden = mode !== "reference";
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
  if (count && list) count.textContent = String(list.querySelectorAll(".creation-record").length);
}

function setFreeCreationTaskDrawer(open) {
  const panel = document.querySelector("[data-free-creation-task-drawer-panel]");
  const mask = document.querySelector("[data-free-creation-task-mask]");
  const trigger = document.querySelector("[data-free-creation-task-drawer]");
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
  Object.entries(materialState).forEach(([type, uploaded]) => {
    document.querySelector(`[data-detail-material-card="${type}"]`)?.classList.toggle("is-filled", Boolean(uploaded));
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
}

function syncDetailParamsFromCreation(promptOverride = "") {
  if (!els.detailPrompt) return;
  els.detailPrompt.value = promptOverride || els.creationPrompt.value.trim() || "浅色卧室场景，自然光，文胸模特图，突出商品材质和版型。";
  const detailCost = document.querySelector("[data-detail-cost]");
  if (detailCost) detailCost.textContent = getCreationCost(getCreationMode());
  if (els.detailRatio) els.detailRatio.value = state.creation.ratio;
  if (els.detailResolution) els.detailResolution.value = state.creation.resolution;
  renderDetailMaterialCards();
}

function getDetailPrompt() {
  return els.detailPrompt?.value.trim() || els.creationPrompt.value.trim() || "按当前参数生成电商商品图。";
}

function detailImageActionsMarkup() {
  return `
    <div class="detail-result-hover-actions">
      <button type="button" data-detail-image-action="下载" title="下载" aria-label="下载"><img src="assets/download-icon.png" alt=""></button>
      <button class="save" type="button" data-detail-image-action="保存" title="加入精品库" aria-label="加入精品库"><span></span></button>
      <button type="button" data-detail-image-action="扩图" title="扩图" aria-label="扩图"><img src="assets/outpaint-icon.png" alt=""></button>
      <button type="button" data-detail-image-action="编辑文字" title="编辑文字" aria-label="编辑文字"><span class="detail-text-edit-icon" aria-hidden="true">T</span></button>
    </div>
  `;
}

function detailImagesMarkup() {
  const selectedCount = Math.min(4, Math.max(1, parseInt(document.querySelector("[data-detail-count]")?.value, 10) || 4));
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

function submitDetailRegeneration() {
  if (els.detailRatio) state.creation.ratio = els.detailRatio.value;
  if (els.detailResolution) state.creation.resolution = els.detailResolution.value;
  appendDetailTask({ prompt: getDetailPrompt() });
  showToast("已提交重新生成任务");
}

function updateDetailTaskCard(card, status) {
  const statusNode = card.querySelector("[data-detail-card-status]");
  const resultNode = card.querySelector("[data-detail-card-result]");
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
  } else {
    resultNode.className = "detail-result-grid pending";
    resultNode.innerHTML = "";
  }
}

function appendDetailTask({ prompt = "" } = {}) {
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
    <div class="detail-task-relation"><span>关联：${creationRelationText()} / ${state.creation.ratio} / ${state.creation.resolution}</span><time>创建于 ${createdAt}</time></div>
    <div class="detail-result-grid pending" data-detail-card-result></div>
    <button class="detail-task-regenerate detail-task-card-regenerate" type="button" data-detail-regenerate-all>
      <span>重新生成</span>
      <i class="detail-task-regenerate-cost"><b>${regenerateCost}</b><img src="assets/creation-rongdou-icon.png" alt="融豆"></i>
    </button>
  `;
  els.detailTaskList.prepend(card);
  window.setTimeout(() => updateDetailTaskCard(card, "running"), 500);
  window.setTimeout(() => {
    updateDetailTaskCard(card, "done");
    showToast("生成完成，结果已展示在任务记录");
  }, 1600);
  return card;
}

function openCreationDetail({ fromHistory = false, taskTitle = "", productName = "", backPage = "creation-plaza" } = {}) {
  const historyPrompt = taskTitle ? `继续处理「${taskTitle}」，关联商品：${productName || "未指定商品"}。` : "浅色卧室场景，自然光，文胸模特图，突出蕾丝杯面和舒适承托。";
  state.detailBackPage = backPage;
  const backButton = document.querySelector("[data-back-creation]");
  if (backButton) backButton.textContent = "返回";
  syncDetailParamsFromCreation(fromHistory ? historyPrompt : "");
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
  moduleImageState.activeMaterial = "product";
  moduleImageState.materials = { product: [], model: [], package: [], background: [], reference: [] };
  moduleImageState.analysisImages = [];
  moduleImageState.sourceAsset = null;
  moduleImageState.productAnalysis = "";
  moduleImageState.productAnalyses = [];
  moduleImageState.tasks = [];
  moduleImageState.selectedTaskId = "";
  moduleImageState.selectedCandidateId = "";
  moduleImageState.expandedTaskId = "";
  moduleImageState.savedModule = null;
  document.querySelector("[data-module-product-prompt]").value = "";
  document.querySelector("[data-module-scene-prompt]").value = "";
  document.querySelector("[data-module-analysis-result]").hidden = true;
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
  return Object.entries(moduleImageState.materials).flatMap(([type, items]) => (
    items.map((item, index) => ({
      type,
      label: moduleMaterialLabels[type] || "素材图",
      index: index + 1,
      url: item.url
    }))
  ));
}

function getModuleMaterialCount(snapshot = getModuleMaterialSnapshot()) {
  return snapshot.length;
}

function getModuleTaskPreviewImages(task, limit = 6) {
  const images = task.referenceImages?.length ? task.referenceImages : [];
  return images.slice(0, limit);
}

function renderModuleMaterialPanel() {
  const grid = document.querySelector("[data-module-material-grid]");
  if (!grid) return;
  const title = document.querySelector("[data-module-material-title]");
  const staticTitle = document.querySelector("[data-module-material-static-title]");
  const toggleTitle = document.querySelector("[data-module-material-toggle]");
  const requirement = document.querySelector("[data-module-material-requirement]");
  if (isModuleReuse()) {
    const profile = getModuleReuseProfile();
    document.querySelector("[data-module-material-section]")?.classList.remove("is-collapsed");
    if (staticTitle) staticTitle.hidden = false;
    if (toggleTitle) toggleTitle.hidden = true;
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
  if (toggleTitle) toggleTitle.hidden = false;
  if (title) title.textContent = "创作素材";
  if (requirement) requirement.textContent = "至少上传一项";
  grid.innerHTML = Object.entries(moduleMaterialLabels).map(([type, label]) => {
    const items = moduleImageState.materials[type];
    return `
      <section class="module-material-card">
        <div class="module-material-card-head"><strong>${label}</strong><span>${items.length}/6 张</span></div>
        <div class="module-material-row">
          <label class="module-material-upload"><input type="file" accept="image/*" multiple data-module-material-input="${type}"><i>＋</i>上传</label>
          <div class="module-material-thumbs">${items.map((item, index) => `<span class="module-material-thumb" data-module-material-preview="${type}" data-module-material-index="${index}" role="button" tabindex="0" aria-label="预览${label}第 ${index + 1} 张"><img src="${item.url}" alt="${label}第 ${index + 1} 张"><i>${index + 1}</i><b data-module-material-remove="${type}" data-module-material-index="${index}" aria-label="删除${label}第 ${index + 1} 张">×</b></span>`).join("")}</div>
        </div>
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
  const submit = document.querySelector("[data-module-analysis-submit]");
  const count = document.querySelector("[data-module-analysis-count]");
  if (!thumbs || !submit || !count) return;
  thumbs.innerHTML = moduleImageState.analysisImages.map((item, index) => `<span class="module-analysis-thumb"><img src="${item.url}" alt="解析图片"><b data-module-analysis-remove="${index}">×</b></span>`).join("");
  count.textContent = moduleImageState.analysisImages.length ? `已上传 ${moduleImageState.analysisImages.length} 张` : "最多 6 张";
  submit.disabled = !moduleImageState.analysisImages.length;
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
  if (productDisplay) productDisplay.textContent = productPrompt || "暂无产品描述";
  if (sceneDisplay) sceneDisplay.textContent = scenePrompt || "暂无场景描述";
}

function renderModuleAssetWorkspace() {
  const empty = document.querySelector("[data-module-asset-empty]");
  const zone = document.querySelector("[data-module-candidate-zone]");
  const grid = document.querySelector("[data-module-candidate-grid]");
  const stateBadge = document.querySelector("[data-module-asset-state]");
  const subtitle = document.querySelector("[data-module-asset-subtitle]");
  const regenerateButton = document.querySelector("[data-module-regenerate]");
  const outpaintButton = document.querySelector("[data-module-outpaint]");
  const addTextButton = document.querySelector("[data-module-add-text]");
  const addBoutiqueButton = document.querySelector("[data-module-add-boutique]");
  const downloadButton = document.querySelector("[data-module-download]");
  const task = getModuleSelectedTask();

  if (!task) {
    empty.hidden = false;
    zone.hidden = true;
    stateBadge.textContent = isModuleReuse() ? "" : "未生成";
    stateBadge.className = "module-asset-state";
    subtitle.textContent = isModuleReuse() ? "" : "补充描述和任意一类素材后，即可生成候选图片。";
    if (isModuleReuse() && moduleImageState.sourceAsset) {
      empty.innerHTML = `<div class="module-asset-empty-icon">✦</div><h3>暂无生成结果</h3><p>点击左侧生成图片后，将在这里展示生成结果。</p>`;
    } else {
      empty.innerHTML = `<div class="module-asset-empty-icon">✦</div><h3>从一张好图开始，沉淀可复用的创作模块</h3><p>AI 提示词反推是可选能力；你也可以直接上传素材并填写描述开始创作。</p>`;
    }
  } else {
    empty.hidden = true;
    zone.hidden = false;
    stateBadge.textContent = task.status === "running" ? "生成中" : "已完成";
    stateBadge.className = `module-asset-state ${task.status === "running" ? "is-running" : "is-complete"}`;
    subtitle.textContent = task.status === "running" ? "任务正在生成预览图，可继续调整配置或打开任务记录。" : `当前展示 ${task.title} 的生成预览图`;
    grid.innerHTML = task.candidates.map((candidate, index) => `
      <button class="module-candidate-card module-preview-card ${candidate.id === moduleImageState.selectedCandidateId ? "is-selected" : ""}" type="button" data-module-candidate="${candidate.id}" aria-label="选择生成预览图 ${index + 1}">
        <img src="${candidate.image}" alt="生成预览图 ${index + 1}"><b>✓</b>
      </button>`).join("");
  }
  const chosen = task?.candidates.find((candidate) => candidate.id === moduleImageState.selectedCandidateId);
  const canUseResult = Boolean(chosen && task?.status === "done");
  [regenerateButton, outpaintButton, addTextButton, downloadButton].forEach((button) => {
    if (button) button.disabled = !canUseResult;
  });
  if (addBoutiqueButton) {
    addBoutiqueButton.textContent = task?.boutiqueAdded ? "已添加到精品库" : "添加到精品库";
    addBoutiqueButton.disabled = !canUseResult || Boolean(task?.boutiqueAdded);
  }
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
    const result = task.candidates[0];
    return `
    <article class="module-task-item ${active ? "is-active" : ""} ${referenceExpanded ? "is-reference-expanded" : ""}" data-module-task-select="${task.id}">
      <button class="module-task-summary" type="button" data-module-task-summary="${task.id}" aria-expanded="${referenceExpanded}">
        <div class="module-task-item-head"><h3>${task.title}</h3><span class="module-task-status ${task.status === "done" ? "done" : ""}">${task.status === "done" ? "已完成" : "生成中"}</span></div>
        <dl class="module-task-meta-list">
          <div><dt>描述文案</dt><dd>${task.prompt}</dd></div>
          <div><dt>参考素材</dt><dd>${task.materialCount || 0} 张</dd></div>
          <div><dt>提交时间</dt><dd>${task.createdAt}</dd></div>
        </dl>
      </button>
      <div class="module-task-detail">
        <div class="module-task-reference-row">
          <button type="button" data-module-task-reference-toggle="${task.id}" aria-expanded="${referenceExpanded}">参考图（${references.length}）<i>${referenceExpanded ? "收起" : "展开"}</i></button>
          <div ${referenceExpanded ? "" : "hidden"}>${references.length ? references.map((item) => `<img src="${item.url}" alt="${item.label} ${item.index}">`).join("") : "<em>未上传参考图</em>"}</div>
        </div>
        <div class="module-task-result-row">
          <span>生成结果</span>
          <div>${result ? `<img src="${result.image}" alt="生成结果">` : "<em>等待生成</em>"}</div>
        </div>
        <div class="module-task-actions">
          <button type="button" data-module-task-regenerate="${task.id}">重新生成</button>
          <button type="button" data-module-task-add-module="${task.id}">加入个人模块</button>
          <button type="button" data-module-task-add-text="${task.id}">继续添加文字创作</button>
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
  page?.classList.toggle("is-module-reuse", reuse);
  if (flowSteps) flowSteps.hidden = !(isGenerate && moduleImageState.backPage === "module-flow");
  if (title) title.textContent = isGenerate ? "模块生图" : "创建图生图模块";
  if (subtitle) subtitle.textContent = reuse ? `已选模块：${moduleImageState.sourceAsset.name} · 请按解析结果补齐素材` : "草稿已自动保存";
  const assetHeading = document.querySelector("[data-module-asset-heading]");
  if (assetHeading) assetHeading.textContent = reuse ? "创作结果" : "生成预览图";
  document.querySelector("[data-module-reverse-section]")?.toggleAttribute("hidden", reuse);
  const generateButton = document.querySelector("[data-module-generate]");
  const generateLabel = generateButton?.querySelector("span");
  if (generateLabel) generateLabel.textContent = reuse ? "生成图片" : "创建图片";
  if (generateButton) {
    const readiness = getModuleReuseReadiness();
    generateButton.disabled = reuse && !readiness.ready;
    generateButton.title = reuse && !readiness.ready ? "请先补齐模块要求的素材" : "";
  }
  renderModuleReuseSource();
  renderModulePromptDisplays();
  renderModuleMaterialPanel();
  renderModuleAnalysisImages();
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
  card.dataset.type = "模块创建";
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
    <div class="creation-task-action"><button class="btn ghost" type="button" data-module-task-regenerate="${task.id}">重新生成</button><button class="btn ghost" type="button" data-module-task-add-module="${task.id}">加入个人模块</button><button class="btn primary" type="button" data-module-task-add-text="${task.id}">继续添加文字创作</button><button class="btn ghost" type="button" data-open-module-image-task="${task.id}">查看详情</button></div>`;
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

function generateModuleImageTask() {
  const prompt = getModulePrompt();
  if (!prompt) {
    showToast("请先填写产品描述或场景描述");
    return;
  }
  if (!moduleHasMaterial()) {
    const profile = getModuleReuseProfile();
    const readiness = getModuleReuseReadiness();
    showToast(isModuleReuse() ? (!readiness.productReady ? `商品图数量不足，请上传 ${profile.product} 张商品图` : "请上传所需模特图") : "请至少上传一类创作素材");
    return;
  }
  const candidates = [{ id: `module-candidate-${Date.now()}-0`, image: "assets/creation-cover-608.jpg" }];
  const materialParts = Object.entries(moduleImageState.materials).filter(([, items]) => items.length).map(([type, items]) => `${moduleMaterialLabels[type]} ${items.length} 张`);
  const materialSnapshot = getModuleMaterialSnapshot();
  const task = {
    id: `module-task-${++moduleImageState.taskSeq}`,
    title: isModuleReuse() ? `${moduleImageState.sourceAsset.name} · ${moduleImageState.tasks.length ? "重新生成" : "创作"}` : (moduleImageState.tasks.length ? "图生图模块重新生成" : "图生图模块创作"),
    status: "running",
    prompt,
    materialSummary: materialParts.join(" / "),
    materialCount: getModuleMaterialCount(materialSnapshot),
    referenceImages: materialSnapshot,
    ratio: document.querySelector("[data-module-ratio]")?.value || "3:4",
    createdAt: moduleTimestamp(),
    candidates
  };
  moduleImageState.tasks.unshift(task);
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
  if (!moduleImageState.analysisImages.length) return;
  const isMulti = moduleImageState.analysisImages.length > 1;
  document.querySelector("[data-module-product-prompt]").value = "商品主体细节清晰，保留材质纹理与核心卖点，画面中突出商品本身。";
  document.querySelector("[data-module-scene-prompt]").value = "柔和自然光，高级电商陈列场景，构图干净，整体氛围舒适有质感。";
  const result = document.querySelector("[data-module-analysis-result]");
  result.hidden = false;
  result.querySelector("span").textContent = isMulti ? "多图解析完成" : "单图解析完成";
  showToast("解析结果已回填至创作描述");
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
  moduleImageState.savedModule = { name: `图生图模块·${task.createdAt}`, image: candidate.image, taskId: task.id };
  renderModuleImageWorkspace();
  showToast("已保存到模块记录");
}

function getSelectedModuleCandidate() {
  const task = getModuleSelectedTask();
  const candidate = task?.candidates.find((item) => item.id === moduleImageState.selectedCandidateId);
  return candidate && task?.status === "done" ? { task, candidate } : null;
}

function addSelectedModuleResultToBoutique() {
  const selected = getSelectedModuleCandidate();
  if (!selected) {
    showToast("请先选择一张已生成的图片");
    return;
  }
  const { task, candidate } = selected;
  const material = {
    id: `boutique-module-${Date.now()}-${materialLibrary.length + 1}`,
    name: task.title,
    type: "精品图片",
    assetType: "模块生图",
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
  task.boutiqueAdded = true;
  renderModuleAssetWorkspace();
  showToast("已添加到精品库");
}

function downloadSelectedModuleResult() {
  const selected = getSelectedModuleCandidate();
  if (!selected) {
    showToast("请先选择一张已生成的图片");
    return;
  }
  const link = document.createElement("a");
  link.href = selected.candidate.image;
  link.download = `${selected.task.title || "模块生图结果"}.jpg`;
  document.body.append(link);
  link.click();
  link.remove();
  showToast("开始下载模块生图结果");
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
  bringModuleImagesToBrandEditor(task);
  showToast(`已将 ${task.candidates.length} 张生成图片带入画板`);
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
  type.textContent = isText ? "文字模块" : "固定图模块";
  previewTitle.textContent = isText ? "文字效果预览" : "固定图预览";
  previewCopy.textContent = isText ? "设置文字内容、样式和排版后，保存为可复用模块。" : "上传图片后可预览最终固定图资产。";
  saveLabel.textContent = isText ? "保存文字模块" : "保存固定图模块";
  stateBadge.textContent = moduleStaticState.saved ? "已保存" : isText ? "编辑中" : moduleStaticState.fixedImage ? "待保存" : "待配置";
  stateBadge.className = `module-asset-state ${moduleStaticState.saved ? "is-complete" : ""}`;

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
  const saved = document.querySelector("[data-static-saved-asset]");
  saved.hidden = !moduleStaticState.saved;
  if (moduleStaticState.saved) {
    document.querySelector("[data-static-saved-name]").textContent = moduleStaticState.saved.name;
    document.querySelector("[data-static-saved-copy]").textContent = isText ? "已保存文字样式与排版规则，可在套图方案继续使用。" : `已保存唯一当前固定图片 · ${moduleStaticState.saved.category}，可在套图方案继续使用。`;
  }
}

function openStaticModuleWorkspace(mode, { backPage = "creation-plaza" } = {}) {
  moduleStaticState.mode = mode;
  moduleStaticState.backPage = backPage;
  moduleStaticState.saved = null;
  moduleStaticState.fixedImage = "";
  moduleStaticState.moduleName = "";
  moduleStaticState.category = "";
  setWorkspacePage("module-static-create");
  closePrototypeModals();
  renderStaticModuleWorkspace();
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
  const name = moduleStaticState.moduleName.trim();
  if (!name) {
    showToast("请输入模块名称");
    return;
  }
  if (!moduleStaticState.category) {
    showToast("请选择类目");
    return;
  }
  moduleStaticState.saved = { name, category: moduleStaticState.category, mode: moduleStaticState.mode };
  renderStaticModuleWorkspace();
  showToast(`${isText ? "文字模块" : "固定图模块"}已保存到模块资产`);
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

function closeCreationModelMenu() {
  els.generationModelMenu?.classList.remove("is-open");
  els.generationModelMenu?.setAttribute("aria-hidden", "true");
  els.generationModelTrigger?.setAttribute("aria-expanded", "false");
}

function closePrototypeModals() {
  closeCreationModelMenu();
  document.querySelectorAll(".prototype-modal").forEach((modal) => {
    modal.classList.remove("is-open");
    modal.setAttribute("aria-hidden", "true");
  });
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
  if (isMultiModuleFixed(module)) return module.templateRatio || "原图比例";
  if (module.ratioMode === "custom") return module.customRatio || "自定义";
  if (module.ratioMode && module.ratioMode !== "follow") return module.ratioMode;
  return module.templateRatio || "3:4";
}

function getMultiModuleRatioLabel(module) {
  return isMultiModuleFixed(module) ? "原图比例" : getMultiModuleRatioValue(module);
}

function ratioOptionsMarkup(module) {
  const value = module.ratioMode || "follow";
  return `
    <option value="follow" ${value === "follow" ? "selected" : ""}>跟随模板 ${module.templateRatio}</option>
    <option value="1:1" ${value === "1:1" ? "selected" : ""}>1:1</option>
    <option value="3:4" ${value === "3:4" ? "selected" : ""}>3:4</option>
    <option value="4:3" ${value === "4:3" ? "selected" : ""}>4:3</option>
    <option value="9:16" ${value === "9:16" ? "selected" : ""}>9:16</option>
    <option value="custom" ${value === "custom" ? "selected" : ""}>自定义</option>
  `;
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

function parseMultiGenerateCount() {
  const count = Number.parseInt(state.multiCreate.count, 10);
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
    enabled: isTemplateItemEnabled(item),
    templateRatio,
    ratioMode: item.ratioMode || "follow",
    customRatio: item.customRatio || "",
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
  state.multiCreate.step = "config";
  state.multiCreate.taskId = "";
  state.multiCreate.taskStatus = "draft";
  state.multiCreate.selectedModuleId = "";
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
      { id: "page-04", title: "颜色陈列页", image: "assets/creation-cover-606.jpg" }
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
      { id: "page-04", title: "组合陈列页", image: "assets/product-cover-04.png" }
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
      { id: "page-04", title: "选择引导页", image: "assets/product-cover-02.png" }
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
      { id: "page-04", title: "信息收束页", image: "assets/creation-cover-610.jpg" }
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
      { id: "page-04", title: "组合推荐页", image: "assets/creation-cover-616.jpg" }
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
      { id: "page-04", title: "转化引导页", image: "assets/creation-cover-602.jpg" }
    ]
  }
];

function openSuiteReplicaEditor(backPage = "creation-plaza", options = {}) {
  const editor = state.suiteReplicaEditor;
  editor.backPage = backPage;
  editor.step = options.product ? "generate" : "product";
  editor.product = options.product || null;
  const selectedTemplate = suiteReplicaTemplateOptions.find((item) => item.id === options.templateId);
  editor.template = selectedTemplate ? { ...selectedTemplate, pages: selectedTemplate.pages.map((page) => ({ ...page })) } : null;
  editor.resolution = "2K";
  editor.referenceSource = options.referenceSource || "upload";
  editor.referenceMode = options.referenceMode || "multi";
  editor.referenceLink = options.link || "";
  editor.generated = false;
  editor.scale = 1;
  editor.x = 0;
  editor.y = 0;
  if (options.autoReference && editor.product) ensureSuiteReferenceTemplate(editor);
  clearMenuActive();
  document.querySelector('[data-single-menu="创作中心"]')?.classList.add("active");
  setWorkspacePage("suite-replica-editor");
  renderSuiteReplicaEditor();
}

function returnSuiteReplicaToCreationCenter() {
  setWorkspacePage("creation-plaza");
  clearMenuActive();
  document.querySelector('[data-single-menu="创作中心"]')?.classList.add("active");
}

function getSuiteEditor() {
  return state.suiteReplicaEditor;
}

function renderSuiteReplicaEditor() {
  const editor = getSuiteEditor();
  if (!editor.step) editor.step = "product";
  document.querySelector("[data-suite-replica-editor]")?.setAttribute("data-suite-step", editor.step);
  const productSlot = document.querySelector("[data-suite-product-selected]");
  const templateSlot = document.querySelector("[data-suite-template-selected]");
  const workspaceProduct = document.querySelector("[data-suite-workspace-product]");
  const recommendationsSlot = document.querySelector("[data-suite-template-recommendations]");
  const workbenchRecommendationsSlot = document.querySelector("[data-suite-workbench-template-recommendations]");
  const apparelFront = document.querySelector("[data-suite-apparel-front]");
  const outputSummary = document.querySelector("[data-suite-output-summary]");
  const resolutionCurrent = document.querySelector("[data-suite-resolution-current]");
  const stepButtons = document.querySelectorAll("[data-suite-step]");
  const stepPanels = document.querySelectorAll("[data-suite-step-panel]");
  const generateButtons = document.querySelectorAll("[data-suite-generate]");
  const resolutionOptions = document.querySelectorAll("[data-suite-resolution]");
  const stepEnabled = {
    product: true,
    template: Boolean(editor.product),
    generate: Boolean(editor.product)
  };
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
  if (apparelFront) apparelFront.src = editor.product?.image || "";
  if (outputSummary) {
    outputSummary.innerHTML = `
      <div class="suite-module-type-row"><span>模块类型</span><strong>${editor.template?.category || "搭配推荐"}</strong><button type="button" data-suite-add-module>＋ 添加</button></div>
      <div><span>当前参考方式</span><strong>${editor.referenceSource === "template" ? "模板" : editor.referenceMode === "link" ? "链接解析" : "上传多图"}</strong></div>
    `;
  }
  renderSuiteReferenceControls();
  bindSuiteWorkbenchControls();
  if (resolutionCurrent) resolutionCurrent.textContent = editor.resolution;
  stepButtons.forEach((button) => {
    const step = button.dataset.suiteStep;
    button.classList.toggle("is-active", editor.step === step);
    button.classList.toggle("is-complete", (step === "product" && editor.product) || (step === "template" && editor.template) || (step === "generate" && editor.generated));
    button.disabled = !stepEnabled[step];
  });
  stepPanels.forEach((panel) => panel.classList.toggle("is-active", panel.dataset.suiteStepPanel === editor.step));
  generateButtons.forEach((button) => {
    button.disabled = !stepEnabled.generate;
    button.classList.toggle("is-disabled", !stepEnabled.generate);
  });
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
  const renderCanvasCard = (page, index, variant = "template") => `
    <article class="suite-canvas-card ${variant === "result" ? "is-result" : ""}" ${variant === "template" ? `draggable="true" data-suite-page-id="${page.id}"` : ""}>
      <div class="suite-canvas-card-image">
        <img src="${variant === "result" ? editor.product.image : page.image}" alt="${page.title}">
        <em>${variant === "template" ? "参考图" : "生成图"}</em>
        <span class="suite-page-tag" style="background:${tagColors[index % tagColors.length]}">${index + 1} ${page.title}</span>
      </div>
      <div class="suite-canvas-card-foot"><strong>${page.title}</strong><small>${variant === "template" ? "参考模板页" : "已按商品图复刻"}</small></div>
    </article>
  `;
  stage.innerHTML = `
    <div class="suite-canvas-lane">
      <div class="suite-canvas-lane-title"><strong>参考图预览</strong><span>非最终生成结果</span></div>
      ${editor.template.pages.map((page, index) => renderCanvasCard(page, index)).join("")}
    </div>
    ${editor.generated ? `<div class="suite-canvas-lane suite-result-lane"><div class="suite-canvas-lane-title"><strong>生成结果</strong><span>${editor.resolution}</span></div>${editor.template.pages.map((page, index) => renderCanvasCard(page, index, "result")).join("")}</div>` : ""}
  `;
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
      event.stopPropagation();
      returnSuiteReplicaToCreationCenter();
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
  document.querySelectorAll("[data-suite-generate-option]").forEach((button) => {
    button.onclick = (event) => {
      event.stopPropagation();
      showToast(`已打开${button.textContent.trim()}设置`);
    };
  });
  document.querySelectorAll("[data-suite-workbench-template-recommendations] [data-suite-template-choice]").forEach((button) => {
    button.onclick = (event) => {
      event.stopPropagation();
      selectSuiteTemplate(button.dataset.suiteTemplateChoice);
    };
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
  editor.step = "generate";
  editor.generated = false;
  closePrototypeModals();
  renderSuiteReplicaEditor();
  showToast("模板已加载到参考套图画布");
}

function setSuiteStep(step) {
  const editor = getSuiteEditor();
  if (step === "template" && !editor.product) {
    showToast("请先上传商品图");
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
}

function submitSuiteGeneration() {
  const editor = getSuiteEditor();
  if (!editor.product) { showToast("请先上传商品图"); return; }
  ensureSuiteReferenceTemplate(editor);
  editor.step = "generate";
  editor.generated = true;
  renderSuiteReplicaEditor();
  showToast("多图复刻任务已提交，生成结果已展示在画布中");
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
  viewport.addEventListener("wheel", (event) => {
    event.preventDefault();
    setSuiteCanvasZoom(editor.scale + (event.deltaY < 0 ? 0.08 : -0.08));
  }, { passive: false });
  viewport.addEventListener("pointerdown", (event) => {
    if (event.target.closest(".suite-canvas-card")) return;
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
    els.multiPage.classList.toggle("is-template-flow-detail", isTemplateFlow);
  }
  const stepOrder = ["upload", "choose", "config", "result"];
  const currentIndex = stepOrder.indexOf(state.multiCreate.step);
  els.multiStepButtons.forEach((button) => {
    const buttonIndex = stepOrder.indexOf(button.dataset.multiStepButton);
    button.classList.toggle("is-active", buttonIndex === currentIndex);
    button.classList.toggle("is-complete", buttonIndex >= 0 && buttonIndex < currentIndex);
    button.hidden = isTemplateFlow && button.dataset.multiStepButton === "result";
  });
  if (els.multiBack) {
    const backText = isTemplateFlow ? "返回" : state.multiCreate.backPage === "creation-plaza" ? "返回创作广场" : state.multiCreate.backPage === "creation-records" ? "返回创作记录" : state.multiCreate.backPage === "suite-solution-library" ? "返回套图方案库" : "返回套图模板";
    els.multiBack.innerHTML = `<span></span>${backText}`;
  }
  if (els.multiTaskKind) els.multiTaskKind.textContent = isReplica ? "套图复刻" : "模板生图";
  if (els.multiConfigStepName) els.multiConfigStepName.textContent = isReplica ? "配置复刻" : "生成参数";
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
  if (els.multiConfigTitle) els.multiConfigTitle.textContent = isReplica ? "整套复刻配置" : "模板生成参数";
  if (els.multiConfigDescription) els.multiConfigDescription.textContent = isReplica
    ? "所有页面共享商品图、参考套图和同一套复刻要求"
    : "按模板版块补齐商品图或模特图，并设置产品与场景描述";
  if (els.multiEnabledCount) els.multiEnabledCount.textContent = `${enabledModules.length} 个`;
  if (els.multiMissingCount) els.multiMissingCount.textContent = `${missingModules.length} 个`;
  if (els.multiCost) els.multiCost.textContent = `${cost} 融豆`;
  if (els.multiReadyLabel) els.multiReadyLabel.textContent = `${readyCount}/${enabledModules.length} 已就绪`;
  if (els.multiResultStatus) els.multiResultStatus.textContent = state.multiCreate.taskStatus === "running" ? `${doneCount}/${enabledModules.length} 已完成` : state.multiCreate.taskStatus === "done" ? "全部完成" : "等待生成";
  if (els.multiFooterStatus) {
    els.multiFooterStatus.textContent = state.multiCreate.step === "config"
      ? isReplica ? `同一套复刻提示词将用于 ${enabledModules.length} 个页面` : `预计生成 ${generativeModules.length} 个模块`
      : state.multiCreate.taskStatus === "done"
        ? "已完成生成，可选择入选图并保存结果"
        : "后台生成中，可返回创作记录后继续查看";
  }
  if (els.multiAutosave) els.multiAutosave.textContent = state.multiCreate.taskStatus === "running" ? "已自动保存" : "自动保存";

  els.multiModuleList.innerHTML = state.multiCreate.modules.map((module, index) => {
    const status = getMultiModuleStatus(module);
    const selected = module.id === state.multiCreate.selectedModuleId;
    const productCount = module.productImages.length;
    return `
      <article class="multi-module-card ${selected ? "is-selected" : ""} ${module.enabled ? "" : "is-closed"}" data-multi-module="${module.id}">
        <div class="multi-module-index">${index + 1}</div>
        ${isReplica ? `<span class="multi-replica-page-tag">参考页</span>` : `<button class="multi-module-switch ${module.enabled ? "is-on" : ""}" type="button" data-multi-toggle="${module.id}" aria-label="${module.enabled ? "关闭模块" : "启用模块"}"></button>`}
        ${module.enabled ? `
          <div class="multi-module-cover">
            <img src="${module.generated && module.resultImage ? module.resultImage : module.image}" alt="${module.title}">
            <span class="multi-module-type">${module.group} · ${getMultiModuleRatioLabel(module)}</span>
            <em class="multi-status ${status.key}">${status.text}</em>
          </div>
          <div class="multi-module-copy">
            <strong>${module.title}</strong>
            <span>${isReplica ? "共享整套复刻要求 · 保持参考页面关系" : `${isMultiModuleFixed(module) ? "无需补充素材" : `商品图 ${productCount}/${getMultiModuleRequiredCount(module)}${module.requiresModel ? " · 需模特图" : ""}`} · 输出 ${getMultiModuleRatioLabel(module)}`}</span>
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
  const status = getMultiModuleStatus(module);
  els.multiConfigContent.innerHTML = `
    <div class="multi-config-head">
      <div>
        <h3>${module.title}</h3>
        <p>${module.group} · ${module.purpose}</p>
      </div>
      <button class="multi-inline-switch ${module.enabled ? "is-on" : ""}" type="button" data-multi-toggle="${module.id}">${module.enabled ? "关闭" : "启用"}</button>
    </div>
    <div class="multi-config-preview ${module.enabled ? "" : "is-disabled"}">
      <img src="${module.image}" alt="${module.title}">
      <span class="multi-status ${status.key}">${status.text}</span>
    </div>
    ${module.enabled ? `
      <section class="multi-config-section">
        <h4>输出比例</h4>
        ${isMultiModuleFixed(module) ? `
          <p>固定图片 / 文字图片保持原图比例，不参与生成比例配置。</p>
          <div class="multi-ratio-static">原图比例</div>
        ` : `
          <select class="multi-ratio-select" data-multi-ratio="${module.id}">
            ${ratioOptionsMarkup(module)}
          </select>
          ${module.ratioMode === "custom" ? `<input class="multi-ratio-custom" data-multi-custom-ratio="${module.id}" value="${module.customRatio}" placeholder="例如 2:3 / 750:1000">` : ""}
          ${module.ratioMode && module.ratioMode !== "follow" ? `<p class="multi-ratio-warning">已改为 ${getMultiModuleRatioValue(module)}，可能与模板原版构图不同。</p>` : `<p>默认按模板原图比例生成：${module.templateRatio}</p>`}
        `}
      </section>
      <section class="multi-config-section">
        <h4>商品图</h4>
        <p>${isMultiModuleFixed(module) ? "固定图片模块无需补充商品图。" : `该模板位需 ${getMultiModuleRequiredCount(module)} 张商品图；数量不足时再补充。`}</p>
        <div class="multi-thumb-row">
          ${module.productImages.map((image, index) => `<img src="${image.image}" alt="商品图 ${index + 1}">`).join("")}
          ${isMultiModuleFixed(module) ? "" : `<button type="button" data-multi-upload-product="${module.id}">${module.productImages.length < getMultiModuleRequiredCount(module) ? "+ 补充商品图" : "+ 添加商品图"}</button>`}
        </div>
      </section>
      ${module.requiresModel ? `<section class="multi-config-section">
        <h4>模特图 <em>必填</em></h4>
        <p>该模板包含人物展示，请补充 1 张模特图。</p>
        <div class="multi-thumb-row">
          ${module.modelImages.map((image, index) => `<img src="${image.image}" alt="模特图 ${index + 1}">`).join("")}
          <button type="button" data-multi-upload-model="${module.id}">${module.modelImages.length ? "+ 更换模特图" : "+ 选择模特图"}</button>
        </div>
      </section>` : ""}
      <label class="multi-config-section">
        <h4>产品描述</h4>
        <textarea data-multi-product-description="${module.id}" placeholder="描述需要重点呈现的商品卖点。">${module.productDescription}</textarea>
      </label>
      <label class="multi-config-section">
        <h4>场景描述</h4>
        <textarea data-multi-scene-description="${module.id}" placeholder="补充本模块的场景、氛围或视觉要求。">${module.sceneDescription}</textarea>
      </label>
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
  els.multiResultList.innerHTML = enabledModules.map((module) => {
    const status = getModuleResultStatus(module);
    const candidates = module.candidates || [];
    return `
      <section class="multi-result-module">
        <div class="multi-result-module-head">
          <div>
            <h4>${module.title}</h4>
            <p>${module.group} · 输出 ${getMultiModuleRatioLabel(module)} · ${module.textMode}</p>
          </div>
          <span class="multi-status ${status.key}">${status.text}</span>
        </div>
        ${candidates.length ? `
          <div class="multi-candidate-grid">
            ${candidates.map((candidate, index) => `
              <button class="multi-candidate-card ${candidate.id === module.selectedCandidateId ? "is-selected" : ""}" type="button" data-multi-candidate="${module.id}" data-candidate-id="${candidate.id}">
                ${candidate.id === module.selectedCandidateId ? `<em class="multi-candidate-check">✓</em>` : ""}
                <img src="${candidate.image}" alt="${module.title}候选 ${index + 1}">
                <span>候选 ${index + 1}</span>
              </button>
            `).join("")}
          </div>
        ` : `<div class="multi-result-placeholder">${status.text}</div>`}
        <div class="multi-result-actions">
          <button type="button" data-multi-regenerate-module="${module.id}">重新生成</button>
          <button type="button" data-multi-ai-copy="${module.id}">AI改文案</button>
          <button type="button" data-multi-canvas-edit="${module.id}">画布编辑</button>
        </div>
      </section>
    `;
  }).join("");
}

function getSelectedModuleImage(module) {
  const selected = module.candidates?.find((candidate) => candidate.id === module.selectedCandidateId);
  if (selected) return selected.image;
  if (isMultiModuleFixed(module)) return module.image;
  return "";
}

function renderMultiLongPreview() {
  if (!els.multiLongPreview) return;
  const modules = getEnabledMultiModules();
  els.multiLongPreview.innerHTML = modules.map((module) => {
    const image = getSelectedModuleImage(module);
    if (!image) {
      return `<div class="multi-long-item empty">${module.group} · 等待入选图</div>`;
    }
    return `
      <div class="multi-long-item">
        <span class="multi-long-label">${module.group} · ${getMultiModuleRatioLabel(module)}</span>
        <img src="${image}" alt="${module.title}">
      </div>
    `;
  }).join("");
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

function updateMultiRatio(moduleId, value) {
  const module = state.multiCreate.modules.find((entry) => entry.id === moduleId);
  if (!module || isMultiModuleFixed(module)) return;
  module.ratioMode = value;
  if (value !== "custom") module.customRatio = "";
  renderMultiImageCreation();
  if (value !== "follow") {
    showToast(`已改为 ${getMultiModuleRatioValue(module)}，可能与模板原版构图不同`);
  }
}

function updateMultiCustomRatio(moduleId, value) {
  const module = state.multiCreate.modules.find((entry) => entry.id === moduleId);
  if (!module || isMultiModuleFixed(module)) return;
  module.ratioMode = "custom";
  module.customRatio = value.trim();
}

function updateMultiTextMode(moduleId, mode) {
  const module = state.multiCreate.modules.find((entry) => entry.id === moduleId);
  if (!module) return;
  module.textMode = mode;
  renderMultiConfigPanel();
}

function createModuleCandidates(module) {
  const count = parseMultiGenerateCount();
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

function buildTaskMaterialsMarkup({ label, images = [] }) {
  const validImages = images.filter(Boolean).slice(0, 6);
  if (!label || !validImages.length) return "";
  const imageMarkup = validImages.map((image, index) => `<img src="${image}" alt="${label}第 ${index + 1} 张">`).join("");
  return `
    <section class="creation-task-materials" data-task-materials>
      <button class="creation-task-materials-toggle" type="button" data-toggle-task-materials aria-expanded="false">
        <span class="creation-task-materials-title">${label}（${validImages.length}）</span>
        <span class="creation-task-materials-hint" data-task-materials-hint>展开</span>
        <i aria-hidden="true"></i>
      </button>
      <div class="creation-task-materials-panel" hidden>
        <div class="creation-task-materials-gallery" aria-label="${label}">${imageMarkup}</div>
      </div>
    </section>
  `;
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
  const materials = buildTaskMaterialsMarkup({
    label: isReplica ? "参考套图" : "套图",
    images: enabledModules.map((module) => getSelectedModuleImage(module) || module.image)
  });
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
        <span data-tag-source="product_name">${isReplica ? "参考套图复刻" : template?.name || "模板创作"}</span>
        <span data-tag-source="product_category">${template?.category || "未分类"}</span>
        <span data-tag-source="output_ratio">按模块比例</span>
      </div>
      <div class="creation-task-progress">
        <span>${status === "done" ? (isReplica ? "整套复刻结果已生成，可继续确认入选图" : "候选图已生成，可继续确认结果") : "后台生成中，可返回任务继续查看"}</span>
        <div class="creation-task-progress-line">
          <i style="width: ${enabledModules.length ? Math.round((doneCount / enabledModules.length) * 100) : 0}%;"></i>
        </div>
      </div>
    </div>
    <div class="creation-task-action">
      ${status === "done" ? '<button class="btn ghost" type="button" data-add-to-boutique>加入精品库</button>' : ""}
      <button class="btn primary" type="button" data-open-creation-detail>查看详情</button>
    </div>
    ${materials}
  `;
  if (!card) {
    card = document.createElement("article");
    card.className = "creation-task-card";
    card.dataset.creationTaskCard = "";
    card.dataset.multiTaskId = state.multiCreate.taskId;
    card.dataset.type = isReplica ? "套图复刻" : "套图创作";
    card.dataset.product = isReplica ? "参考套图" : template?.name || "模板创作";
    els.creationTaskFlow.prepend(card);
    els.creationTaskCards = Array.from(document.querySelectorAll("[data-creation-task-card]"));
  }
  card.dataset.status = status;
  card.dataset.title = title;
  card.dataset.type = isReplica ? "套图复刻" : "套图创作";
  card.dataset.multiMode = state.multiCreate.mode;
  card.innerHTML = html;
}

function openMultiTaskFromRecord(taskCard) {
  const isCurrentTask = taskCard?.dataset.multiTaskId && taskCard.dataset.multiTaskId === state.multiCreate.taskId;
  if (!isCurrentTask) {
    if (taskCard?.dataset.multiMode === "replica" || taskCard?.dataset.type === "套图复刻") {
      setupMultiImageCreationWithTemplate(buildSuiteReplicaTemplate(), "creation-records", "replica");
      fillSuiteReplicaProductImages();
    } else {
      setupMultiImageCreation("tpl002", "creation-records");
      fillMultiProductImages("", true);
    }
  }
  state.multiCreate.backPage = "creation-records";
  if (!state.multiCreate.generated) {
    getEnabledMultiModules().forEach((module, index) => {
      if (isMultiModuleFixed(module)) {
        module.generationStatus = "done";
        module.candidates = [{ id: `${module.id}-fixed`, image: module.image, title: "固定图片" }];
      } else {
        module.generationStatus = taskCard?.dataset.status === "done" || index < 2 ? "done" : "running";
        module.candidates = module.generationStatus === "done" ? createModuleCandidates(module) : [];
      }
      module.selectedCandidateId = module.candidates[0]?.id || "";
      module.generated = Boolean(module.candidates.length);
    });
    state.multiCreate.generated = true;
  }
  state.multiCreate.taskStatus = taskCard?.dataset.status === "done" ? "done" : "running";
  clearMenuActive();
  document.querySelector('[data-single-menu="创作中心"]')?.classList.add("active");
  setWorkspacePage("multi-image-creation");
  setMultiStep("result");
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

  setupMultiImageCreation(template.id, "template-center");
  showToast(`已进入「${template.name}」多图创作`);
}

function openSuiteSolutionBuilder(solutionId = "") {
  const solution = solutionId ? suiteSolutions.find((item) => item.id === solutionId) : null;
  resetTemplateBuilder(solution, "solution");
  clearMenuActive();
  document.querySelector('[data-single-menu="模块与模版"]')?.classList.add("active");
  setWorkspacePage("template-builder");
  showToast(solution ? "已进入套图方案编辑页" : "已新建套图方案");
}

function goCreateWithSuiteSolution(solutionId) {
  const solution = suiteSolutions.find((item) => item.id === solutionId);
  if (!solution) return;
  setupMultiImageCreationWithTemplate(solution, "suite-solution-library", "solution");
  showToast(`已进入「${solution.name}」套图创作`);
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

  state.publishTemplate = template;
  state.publishMaterial = null;
  els.publishName.value = template.name;
  els.publishType.value = templateComboLabel(template);
  els.publishCategory.value = template.category;
  els.publishPrice.value = "免费";
  els.publishDesc.value = `${template.name}，适合${template.category}品类的${templateComboLabel(template)}资源。`;
  els.publishPreview.src = template.items[0]?.image || "assets/product-cover-03.png";
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
  ].map((image) => `<img src="${image}" alt="">`).join("");
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
  const card = document.createElement("article");
  card.className = "creation-task-card";
  card.dataset.creationTaskCard = "";
  card.dataset.status = "running";
  card.dataset.type = "单图生成";
  card.dataset.title = title;
  card.dataset.product = state.creation.category;
  card.dataset.boutiqueState = "none";
  const materials = (mode === "参考图复刻" || state.creation.referenceUploaded)
    ? buildTaskMaterialsMarkup({ label: "参考图", images: ["assets/creation-cover-608.jpg"] })
    : "";
  card.innerHTML = `
    <div class="creation-task-thumb single">
      <img src="assets/product-cover-03.png" alt="">
      <span class="creation-task-type">${mode === "参考图复刻" ? "复刻" : "单图"}</span>
    </div>
    <div class="creation-task-main">
      <div class="creation-task-title-row"><h2>${title}</h2><span class="creation-task-status running">生成中</span></div>
      <div class="creation-task-meta"><span>4 张图</span><span>正在解析创作条件</span><span>刚刚</span></div>
      <div class="creation-task-tags"><span>${state.creation.category}</span><span>${state.creation.ratio}</span><span>${mode}</span></div>
      <div class="creation-task-progress"><span>任务正在后台生成，可在创作记录继续查看</span><div class="creation-task-progress-line"><i style="width: 42%;"></i></div></div>
    </div>
    <div class="creation-task-action"><button class="btn primary" type="button" data-open-creation-detail>查看详情</button></div>
    ${materials}
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
    const actions = card.querySelector(".creation-task-action");
    if (actions) actions.insertAdjacentHTML("afterbegin", '<button class="btn ghost" type="button" data-add-to-boutique>加入精品库</button>');
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
  if (mode === "待识别" || (mode === "自由创作" && !prompt && !state.creation.productUploaded)) {
    showToast("请先填写创作描述或上传商品图");
    return;
  }
  if (mode === "参考图复刻" && (!state.creation.productUploaded || !state.creation.referenceUploaded)) {
    showToast("参考图复刻请先上传商品图和主参考图");
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
        <button type="button">加入精品库</button>
        <button type="button">保存为模板</button>
        <button type="button">上架到创作广场</button>
        <button type="button" data-open-creation-detail>继续编辑</button>
        <button type="button">扩图</button>
      </div>
    </div>
  `;
  els.creationRecordList.prepend(record);
  updateFreeCreationTaskCount();
  appendSingleImageTaskRecord({ title, mode });
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
  setPreviewMetaLabels({ price: "价格", fit: "适用品类" });
  const image = card.querySelector(".resource-cover img");
  document.querySelector("[data-preview-title]").textContent = card.dataset.title;
  document.querySelector("[data-preview-image]").src = image?.getAttribute("src") || "";
  document.querySelector("[data-preview-category]").textContent = card.dataset.category;
  document.querySelector("[data-preview-type]").textContent = card.dataset.type;
  document.querySelector("[data-preview-source]").textContent = card.dataset.source || "-";
  document.querySelector("[data-preview-price]").textContent = card.dataset.price || "-";
  document.querySelector("[data-preview-usage]").textContent = card.dataset.usage || "-";
  document.querySelector("[data-preview-fit]").textContent = card.dataset.fit || card.dataset.category;
  document.querySelector("[data-preview-use]").textContent = "使用";
  openPrototypeModal(els.resourcePreviewModal);
}

function openResourcePurchase(card) {
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
  appendAssetCreationTask({
    type: "模特创建",
    title: `${name}创建`,
    assetLabel: "已保存至模特库",
    image
  });
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
    if (button.dataset.singleMenu === "创作中心") {
      setWorkspacePage("creation-plaza");
      openCreationEntry("module");
      return;
    }
    if (button.dataset.singleMenu === "AI图片广场") {
      setWorkspacePage("inspiration-plaza");
      return;
    }
    if (button.dataset.singleMenu === "模块与模版") {
      openModuleLibrary();
      return;
    }
    if (button.dataset.singleMenu === "模特库") {
      setWorkspacePage("model-library");
      return;
    }
    if (button.dataset.singleMenu === "精品库") {
      openBoutiqueLibrary();
      return;
    }
    if (button.dataset.singleMenu === "素材库") {
      openBrandMaterialLibrary();
      return;
    }
    if (button.dataset.singleMenu === "商品库") {
      setWorkspacePage("product-library");
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
  const suiteStartShowAll = event.target.closest("[data-suite-start-show-all]");
  const suiteStartTemplateChoice = event.target.closest("[data-suite-start-template-choice]");
  const suiteStartNext = event.target.closest("[data-suite-start-next]");
  const suiteStartPrev = event.target.closest("[data-suite-start-prev]");
  const suiteStartReferenceNext = event.target.closest("[data-suite-start-reference-next]");
  const suiteStartReferenceMode = event.target.closest("[data-suite-start-reference-mode]");
  const suiteStartReferenceUpload = event.target.closest("[data-suite-start-reference-upload]");
  const suiteStartParseLink = event.target.closest("[data-suite-start-parse-link]");
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
    openSuiteReplicaStartTemplateModal();
    return;
  }
  if (suiteStartTemplateChoice) {
    selectSuiteReplicaStartTemplate(suiteStartTemplateChoice.dataset.suiteStartTemplateChoice);
    return;
  }
  if (suiteStartPrev) {
    suiteReplicaStartState.step = "product";
    renderSuiteReplicaStart();
    return;
  }
  if (suiteStartReferenceMode) {
    const mode = suiteStartReferenceMode.dataset.suiteStartReferenceMode;
    suiteReplicaStartState.referenceSource = mode === "template" ? "template" : "upload";
    suiteReplicaStartState.referenceMode = mode;
    suiteReplicaStartState.referenceReady = mode === "template" ? Boolean(suiteReplicaStartState.template) : false;
    renderSuiteReplicaStart();
    return;
  }
  if (suiteStartReferenceUpload) {
    if (!suiteReplicaStartState.product) {
      showToast("请先上传商品图");
      return;
    }
    suiteReplicaStartState.template = null;
    suiteReplicaStartState.referenceSource = "upload";
    suiteReplicaStartState.referenceMode = "multi";
    suiteReplicaStartState.referenceReady = true;
    renderSuiteReplicaStart();
    showToast("已模拟上传 5 张参考商详图");
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
    suiteReplicaStartState.referenceReady = true;
    renderSuiteReplicaStart();
    showToast(suiteReplicaStartState.link ? "淘宝链接已解析" : "已模拟解析淘宝链接");
    return;
  }
  if (suiteStartReferenceNext) {
    if (!suiteReplicaStartState.referenceReady) {
      showToast("请先选择一种参考方式");
      return;
    }
    enterSuiteReplicaWorkspaceFromStart();
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
    moduleProductPickerState.pendingProductId = choice.dataset.moduleProductChoice || "";
    renderModuleProductPicker();
    return;
  }
  if (confirm) {
    const product = products.find((item) => item.id === moduleProductPickerState.pendingProductId);
    if (!product) {
      showToast("请先选择商品");
      return;
    }
    if (moduleProductPickerState.target === "template") selectTemplateStartProduct(product);
    else if (moduleProductPickerState.target === "multi-replica") selectSuiteReplicaStartProduct(product);
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
      ? `已选择商品：${product.name}，已为你更新模板推荐`
      : moduleProductPickerState.target === "multi-replica"
        ? `已选择商品：${product.name}，请选择参考方式`
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
  const singleReplicaSelect = event.target.closest("[data-single-replica-ratio-options], [data-single-replica-resolution-options], [data-single-replica-model-options]");
  if (!singleReplicaSelect) return;
  if (singleReplicaSelect.matches("[data-single-replica-ratio-options]")) state.creation.ratio = singleReplicaSelect.value;
  if (singleReplicaSelect.matches("[data-single-replica-resolution-options]")) state.creation.resolution = singleReplicaSelect.value;
  if (singleReplicaSelect.matches("[data-single-replica-model-options]")) state.creation.generationModel = singleReplicaSelect.value;
  if (els.ratioLabel) els.ratioLabel.textContent = state.creation.ratio;
  if (els.resolutionLabel) els.resolutionLabel.textContent = state.creation.resolution;
  if (els.generationModelLabel) els.generationModelLabel.textContent = state.creation.generationModel;
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
  if (referenceLibrary) { openPrototypeModal(els.referenceSelectModal); return; }
  if (referenceLocal) { document.querySelector("[data-single-replica-reference-file]")?.click(); return; }
  if (referenceRemove) { setSingleReplicaReference(null); return; }
  if (option) {
    const group = option.parentElement;
    group.querySelectorAll("button").forEach((button) => button.classList.toggle("is-active", button === option));
    if (group.matches("[data-single-replica-ratio-options]")) state.creation.ratio = option.dataset.value;
    if (group.matches("[data-single-replica-resolution-options]")) state.creation.resolution = option.dataset.value;
    if (group.matches("[data-single-replica-model-options]")) state.creation.generationModel = option.dataset.value;
    if (els.ratioLabel) els.ratioLabel.textContent = state.creation.ratio;
    if (els.resolutionLabel) els.resolutionLabel.textContent = state.creation.resolution;
    if (els.generationModelLabel) els.generationModelLabel.textContent = state.creation.generationModel;
    renderSingleReplicaStart();
    return;
  }
  if (back) { setSingleReplicaStep(Number(back.dataset.singleReplicaBack)); return; }
  if (next) { setSingleReplicaStep(Number(next.dataset.singleReplicaNext) + 1); return; }
  if (generate) {
    if (!singleReplicaState.productImages.length || !singleReplicaState.reference) {
      showToast("请先完成商品图和主参考图上传");
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
    showToast("已上传主参考图");
  };
  reader.readAsDataURL(file);
  event.target.value = "";
});

document.querySelector("[data-suite-start-file]")?.addEventListener("change", (event) => {
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
      selectSuiteReplicaStartProduct({
        id: `suite-local-product-${Date.now()}`,
        name: firstImage.name,
        category: "本地上传商品",
        image: firstImage.url,
        isLocal: true,
        materialCount: uploadedImages.length,
        images: uploadedImages,
        points: { core: "请保留上传商品图中的主体、真实颜色、材质与细节。" }
      });
      showToast(`已上传 ${uploadedImages.length} 张商品图，请选择参考方式`);
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
  const templateCard = event.target.closest("[data-template-flow-template]");
  const templateDrawerCard = event.target.closest("[data-template-flow-drawer-template]");
  const showAll = event.target.closest("[data-template-flow-show-all]");
  const closeAll = event.target.closest("[data-template-flow-template-close]");
  const back = event.target.closest("[data-template-flow-back]");
  const previous = event.target.closest("[data-template-flow-previous]");
  const next = event.target.closest("[data-template-flow-next]");
  const record = event.target.closest("[data-template-flow-record]");
  const productPreview = event.target.closest("[data-template-flow-product-preview]");
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
      showToast("已进入固定图模块创作详情");
      return;
    }
    openBrandMaterialEditor();
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
  const remove = event.target.closest("[data-module-library-delete]");
  const publish = event.target.closest("[data-module-library-publish]");
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
    openModuleLibraryPreview(preview.dataset.moduleLibraryPreview);
    return;
  }
  if (make) {
    openModuleLibraryAsset(make.dataset.moduleLibraryMake, "create");
    return;
  }
  if (edit) {
    openModuleLibraryAsset(edit.dataset.moduleLibraryEdit);
    return;
  }
  if (remove) {
    deleteModuleLibraryAsset(remove.dataset.moduleLibraryDelete);
    return;
  }
  if (publish) {
    const asset = getModuleLibraryAsset(publish.dataset.moduleLibraryPublish);
    if (asset) showToast(`已提交发布：${asset.name}`);
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

document.querySelector("[data-module-analysis-input]")?.addEventListener("change", (event) => {
  const available = Math.max(0, 6 - moduleImageState.analysisImages.length);
  loadModuleImageFiles(Array.from(event.target.files).slice(0, available), (image) => moduleImageState.analysisImages.push(image));
  event.target.value = "";
});

document.addEventListener("change", (event) => {
  const input = event.target.closest("[data-module-material-input]");
  if (!input) return;
  const type = input.dataset.moduleMaterialInput;
  const profile = getModuleReuseProfile();
  const reuseLimit = isModuleReuse() && (type === "product" || type === "model") ? profile[type] || 0 : 6;
  const available = Math.max(0, reuseLimit - moduleImageState.materials[type].length);
  loadModuleImageFiles(Array.from(input.files).slice(0, available), (image) => {
    moduleImageState.materials[type].push(image);
    if (type === "product") {
      moduleImageState.productAnalysis = "";
      moduleImageState.productAnalyses = [];
    }
  });
  input.value = "";
});

document.querySelector("[data-module-material-toggle]")?.addEventListener("click", () => {
  if (isModuleReuse()) return;
  const section = document.querySelector("[data-module-material-section]");
  const isCollapsed = !section?.classList.contains("is-collapsed");
  section?.classList.toggle("is-collapsed", isCollapsed);
  document.querySelector("[data-module-material-toggle]")?.setAttribute("aria-expanded", String(!isCollapsed));
});

document.querySelector("[data-module-analysis-submit]")?.addEventListener("click", runModulePromptAnalysis);
document.querySelector("[data-module-product-analysis-submit]")?.addEventListener("click", runModuleProductAnalysis);
document.querySelector("[data-module-product-analysis-add]")?.addEventListener("click", appendProductAnalysisToPrompt);
document.querySelector("[data-module-product-analysis-copy]")?.addEventListener("click", copyModuleProductAnalysis);
document.addEventListener("input", (event) => {
  if (event.target.closest("[data-module-product-prompt], [data-module-scene-prompt]")) {
    renderModulePromptDisplays();
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
document.querySelector("[data-module-regenerate]")?.addEventListener("click", generateModuleImageTask);
document.querySelector("[data-module-add-text]")?.addEventListener("click", () => {
  const task = getModuleSelectedTask();
  continueModuleTaskToText(task?.id || "");
});
document.querySelector("[data-module-outpaint]")?.addEventListener("click", () => {
  const selected = getSelectedModuleCandidate();
  if (!selected) {
    showToast("请先选择一张已生成的图片");
    return;
  }
  openOutpaintEditor(selected.candidate.image, "module-image");
});
document.querySelector("[data-module-add-boutique]")?.addEventListener("click", addSelectedModuleResultToBoutique);
document.querySelector("[data-module-download]")?.addEventListener("click", downloadSelectedModuleResult);

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
document.querySelector("[data-static-edit]")?.addEventListener("click", () => { moduleStaticState.saved = null; renderStaticModuleWorkspace(); showToast("已进入编辑状态"); });
document.querySelector("[data-static-view-asset]")?.addEventListener("click", () => showToast("模块资产已保存，可在套图方案查看"));

document.addEventListener("click", (event) => {
  const materialRemove = event.target.closest("[data-module-material-remove]");
  const materialPreview = event.target.closest("[data-module-material-preview]");
  const analysisRemove = event.target.closest("[data-module-analysis-remove]");
  const candidate = event.target.closest("[data-module-candidate]");
  const taskSelect = event.target.closest("[data-module-task-select]");
  const taskReferenceToggle = event.target.closest("[data-module-task-reference-toggle]");
  const taskRegenerate = event.target.closest("[data-module-task-regenerate]");
  const taskAddModule = event.target.closest("[data-module-task-add-module]");
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
    moduleImageState.analysisImages.splice(Number(analysisRemove.dataset.moduleAnalysisRemove), 1);
    renderModuleAnalysisImages();
    return;
  }
  if (candidate) {
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
    if (els.generationModelLabel) els.generationModelLabel.textContent = state.creation.generationModel;
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
    filterCreationTasks();
  });
});

els.creationTaskSearch?.addEventListener("input", filterCreationTasks);

document.querySelector("[data-back-creation]")?.addEventListener("click", () => {
  const returnModal = document.querySelector("[data-detail-return-modal]");
  if (returnModal) {
    openPrototypeModal(returnModal);
    return;
  }
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
    const type = button.dataset.detailRemove;
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
      showToast("已进入文字编辑");
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

document.addEventListener("click", (event) => {
  if (!event.target.closest("[data-detail-regenerate-all]")) return;
  submitDetailRegeneration();
});

document.querySelector("[data-detail-return-confirm]")?.addEventListener("click", () => {
  closePrototypeModals();
  leaveCreationDetail();
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

const resourceFilterGroups = Array.from(document.querySelectorAll("[data-resource-filter]"));
const inspirationSearch = document.querySelector("[data-inspiration-search]");

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
      && (activePrice === "all" || cardPrice === activePrice)
      && (!keyword || searchText.includes(keyword));
    card.style.display = visible ? "" : "none";
  });
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
  button.addEventListener("click", () => openResourcePurchase(button.closest("[data-resource-card]")));
});

document.querySelectorAll("[data-resource-preview]").forEach((button) => {
  button.addEventListener("click", () => {
    openResourcePreview(button.closest("[data-resource-card]"));
  });
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
  const solutionPreview = event.target.closest("[data-solution-preview]");
  if (solutionEdit) {
    openSuiteSolutionBuilder(solutionEdit.dataset.solutionEdit);
    return;
  }
  if (solutionCreate) {
    goCreateWithSuiteSolution(solutionCreate.dataset.solutionCreateWith);
    return;
  }
  if (solutionPreview && !event.target.closest(".suite-solution-actions")) {
    const solution = suiteSolutions.find((item) => item.id === solutionPreview.dataset.solutionPreview);
    if (solution) openTemplateLongPreview(solution);
  }
});

els.templateCategoryButtons.forEach((button) => {
  button.addEventListener("click", () => setTemplateCategory(button.dataset.templateCategoryTab));
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
    document.querySelector('[data-single-menu="模块与模版"]').classList.add("active");
    setWorkspacePage("template-builder");
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
  setWorkspacePage(isSolution ? "suite-solution-library" : "template-center");
  clearMenuActive();
  document.querySelector(`[data-single-menu="${isSolution ? "套图方案库" : "套图模板"}"]`)?.classList.add("active");
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

document.querySelectorAll("[data-content-source]").forEach((button) => {
  button.addEventListener("click", () => setContentSource(button.dataset.contentSource));
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

els.searchInput.addEventListener("input", filterProducts);
els.filters.forEach((select) => select.addEventListener("change", filterProducts));
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
  const multiUploadProductButton = event.target.closest("[data-multi-upload-product]");
  const multiUploadModelButton = event.target.closest("[data-multi-upload-model]");
  const suiteReplicaUploadProductButton = event.target.closest("[data-suite-replica-upload-product]");
  const suiteReplicaPreserveButton = event.target.closest("[data-suite-replica-preserve]");
  const multiTemplatePreviewButton = event.target.closest("[data-multi-template-preview]");
  const multiStepButton = event.target.closest("[data-multi-step-button]");
  const multiBackStepButton = event.target.closest("[data-multi-back-step]");
  const multiGoRecordsButton = event.target.closest("[data-multi-go-records]");
  const multiTaskRecordButton = event.target.closest("[data-multi-task-record]");
  const multiSaveDraftButton = event.target.closest("[data-multi-save-draft]");
  const multiRegenerateAllButton = event.target.closest("[data-multi-regenerate-all]");
  const multiSaveResultButton = event.target.closest("[data-multi-save-result]");
  const multiDownloadButton = event.target.closest("[data-multi-download], [data-multi-preview-download]");
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
  const materialPrimaryButton = event.target.closest("[data-material-primary]");
  const materialSecondaryButton = event.target.closest("[data-material-secondary]");
  const openBrandEditorButton = event.target.closest("[data-open-brand-editor]");
  const backBrandLibraryButton = event.target.closest("[data-back-brand-library]");
  const brandEditorToolButton = event.target.closest("[data-brand-editor-tool]");
  const brandPanelToggleButton = event.target.closest("[data-brand-panel-toggle]");
  const brandMaterialTabButton = event.target.closest("[data-brand-material-tab]");
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
  const taskMaterialsToggle = event.target.closest("[data-toggle-task-materials]");

  if (taskMaterialsToggle) {
    const section = taskMaterialsToggle.closest("[data-task-materials]");
    const panel = section?.querySelector(".creation-task-materials-panel");
    const hint = taskMaterialsToggle.querySelector("[data-task-materials-hint]");
    const expanded = taskMaterialsToggle.getAttribute("aria-expanded") === "true";
    taskMaterialsToggle.setAttribute("aria-expanded", String(!expanded));
    section?.classList.toggle("is-expanded", !expanded);
    if (panel) panel.hidden = expanded;
    if (hint) hint.textContent = expanded ? "展开" : "收起";
    return;
  }

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
    leaveBrandMaterialEditor();
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
    openDrawerImagePreview(template?.items?.[0]?.image || els.multiTemplateThumb?.src);
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
    setWorkspacePage(backPage);
    clearMenuActive();
    document.querySelector(`[data-single-menu="${backPage === "creation-plaza" ? "创作广场" : backPage === "creation-records" ? "创作记录" : backPage === "suite-solution-library" ? "套图方案库" : "套图模板"}"]`)?.classList.add("active");
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

  if (multiSaveDraftButton) {
    showToast("草稿已保存");
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
    showToast("结果已保存");
    return;
  }

  if (multiDownloadButton) {
    showToast("已模拟下载当前入选结果");
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
    if (["套图创作", "套图复刻"].includes(taskCard?.dataset.type)) {
      openMultiTaskFromRecord(taskCard);
      return;
    }
    if (taskCard?.dataset.type === "扩图") {
      const sourceImage = taskCard.querySelector(".outpaint-before img")?.getAttribute("src") || state.outpaint.sourceImage;
      openOutpaintEditor(sourceImage, "creation-records");
      return;
    }
    openCreationDetail({
      fromHistory: true,
      taskTitle: taskCard?.dataset.title || "",
      productName: taskCard?.dataset.product || "",
      backPage: taskCard ? "creation-records" : "creation-plaza"
    });
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

  if (templatePreviewButton && !event.target.closest(".template-hover-actions")) {
    openTemplateDrawer(templatePreviewButton.dataset.templatePreview);
    return;
  }

  if (templateLongPreviewButton && state.activeTemplate) {
    openTemplateLongPreview(state.activeTemplate);
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
    openMaterialPreviewModal(materialPreviewButton.dataset.materialPreview);
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
  const multiCustomRatio = event.target.closest("[data-multi-custom-ratio]");
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
  if (multiCustomRatio) {
    updateMultiCustomRatio(multiCustomRatio.dataset.multiCustomRatio, multiCustomRatio.value);
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

  const multiResolution = event.target.closest("[data-multi-resolution]");
  const multiModel = event.target.closest("[data-multi-model]");
  const multiCount = event.target.closest("[data-multi-count]");
  const multiRatio = event.target.closest("[data-multi-ratio]");

  if (multiRatio) {
    updateMultiRatio(multiRatio.dataset.multiRatio, multiRatio.value);
    return;
  }

  if (multiResolution || multiModel || multiCount) {
    state.multiCreate.resolution = multiResolution?.value || state.multiCreate.resolution;
    state.multiCreate.model = multiModel?.value || state.multiCreate.model;
    state.multiCreate.count = multiCount?.value || state.multiCreate.count;
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
setCreationInputMode("module");
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
  const suiteGenerateOption = event.target.closest("[data-suite-generate-option]");
  const productTab = event.target.closest("[data-suite-product-tab]");
  const localUpload = event.target.closest("[data-suite-local-upload]");
  const zoom = event.target.closest("[data-suite-canvas-zoom]");
  const resetCanvas = event.target.closest("[data-suite-canvas-reset]");
  const back = event.target.closest("[data-suite-replica-back]");
  const saveDraft = event.target.closest("[data-suite-save-draft]");
  const generate = event.target.closest("[data-suite-generate]");
  const resolution = event.target.closest("[data-suite-resolution]");
  const modalClose = event.target.closest(".suite-picker-modal [data-modal-close]");

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
  if (suiteGenerateOption) {
    const label = suiteGenerateOption.textContent.trim();
    showToast(`已打开${label}设置`);
    return;
  }
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
  if (zoom) { setSuiteCanvasZoom(getSuiteEditor().scale + (zoom.dataset.suiteCanvasZoom === "in" ? 0.1 : -0.1)); return; }
  if (resetCanvas) { const editor = getSuiteEditor(); editor.scale = 1; editor.x = 0; editor.y = 0; renderSuiteCanvas(); return; }
  if (back) { returnSuiteReplicaToCreationCenter(); return; }
  if (saveDraft) { showToast("套图复刻草稿已保存"); return; }
  if (generate) {
    submitSuiteGeneration();
    return;
  }
  if (resolution) { getSuiteEditor().resolution = resolution.dataset.suiteResolution; renderSuiteReplicaEditor(); return; }
  if (modalClose) { closePrototypeModals(); }
});

document.addEventListener("change", (event) => {
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
