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

const materialCategoryGroups = {
  品牌资产: ["品牌元素"],
  说明模块: ["尺码表", "资质认证", "品控说明", "物流/退换说明"],
  营销组件: ["文字模块", "营销角标"],
  创作素材: ["图片模块", "背景素材"]
};

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
  models: modelLibrary,
  filteredModels: modelLibrary,
  materials: materialLibrary,
  filteredMaterials: materialLibrary,
  materialPrimary: "品牌资产",
  materialSecondary: "全部",
  activeMaterial: materialLibrary[0],
  modelGenderFilter: "全部",
  modelStyleFilters: [],
  modelCreateTimer: null,
  modelPreviewReady: false,
  templateScope: "全部",
  templateCategory: "全部品类",
  templateGroupFilters: [],
  activeTemplate: templates[0],
  templateModalEditing: false,
  contentTargetGroup: "主图",
  contentSource: "local",
  contentSelections: [],
  builderMode: "create",
  builderEditingId: null,
  builderSeq: 1,
  builder: {
    name: "",
    description: "",
    category: "",
    brand: "",
    groups: ["主图", "详情图"],
    items: []
  },
  publishTemplate: null,
  publishMaterial: null,
  previewResourceCard: null,
  purchaseResourceCard: null,
  previewMaterial: null,
  brandEditor: {
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
    productUploaded: false,
    referenceUploaded: false,
    modelUploaded: false,
    modelName: "",
    template: "",
    templateKind: "",
    ratio: "3:4",
    resolution: "2K",
    recordSeq: 0,
    detailSeq: 0
  },
  multiCreate: {
    templateId: "",
    resourceTemplate: null,
    backPage: "template-center",
    step: "config",
    taskId: "",
    taskStatus: "draft",
    elapsed: 0,
    timer: null,
    selectedModuleId: "",
    modules: [],
    resolution: "2K",
    model: "专业版",
    count: "2 套",
    generated: false
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
els.creationTaskFlow = document.querySelector("[data-creation-task-flow]");
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
els.productSelectModal = document.querySelector("[data-product-select-modal]");
els.referenceSelectModal = document.querySelector("[data-reference-select-modal]");
els.modelSelectModal = document.querySelector("[data-model-select-modal]");
els.recordModal = document.querySelector("[data-record-modal]");
els.resourcePreviewModal = document.querySelector("[data-resource-preview-modal]");
els.resourcePurchaseModal = document.querySelector("[data-resource-purchase-modal]");
els.drawerImagePreview = document.querySelector("[data-drawer-image-preview]");
els.drawerImagePreviewImg = document.querySelector("[data-drawer-image-preview-img]");
els.drawerLongPreview = document.querySelector("[data-drawer-long-preview]");
els.drawerPreviewCaption = document.querySelector("[data-drawer-preview-caption]");
els.ratioLabel = document.querySelector("[data-ratio-label]");
els.resolutionLabel = document.querySelector("[data-resolution-label]");
els.templateSearch = document.querySelector("[data-template-search]");
els.templateTypeFilter = document.querySelector("[data-template-type-filter]");
els.templateCategoryFilter = document.querySelector("[data-template-category-filter]");
els.templateCategoryButtons = Array.from(document.querySelectorAll("[data-template-category-tab]"));
els.templateStatusFilter = document.querySelector("[data-template-status-filter]");
els.templateGrid = document.querySelector("[data-template-grid]");
els.templateEmptyState = document.querySelector("[data-template-empty-state]");
els.templateNoResultState = document.querySelector("[data-template-no-result-state]");
els.templateCreateMenu = document.querySelector("[data-template-create-menu]");
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
els.multiTemplateTitle = document.querySelector("[data-multi-template-title]");
els.multiTemplateSubtitle = document.querySelector("[data-multi-template-subtitle]");
els.multiTemplateName = document.querySelector("[data-multi-template-name]");
els.multiTemplateThumb = document.querySelector("[data-multi-template-thumb]");
els.multiModuleList = document.querySelector("[data-multi-module-list]");
els.multiConfigEmpty = document.querySelector("[data-multi-config-empty]");
els.multiConfigContent = document.querySelector("[data-multi-config-content]");
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
  const hasFilter = state.templateScope !== "全部" ||
    state.templateGroupFilters.length > 0 ||
    state.templateCategory !== "全部品类";
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
    const matchScope = state.templateScope === "全部" || template.scope === state.templateScope;
    const matchGroups = state.templateGroupFilters.length === 0 || state.templateGroupFilters.every((group) => template.groups.includes(group));
    const matchCategory = category === "全部品类" || template.category === category;
    return matchKeyword && matchScope && matchGroups && matchCategory;
  });

  renderTemplateCards(state.filteredTemplates);
}

function setTemplateScope(scope) {
  state.templateScope = scope;
  document.querySelectorAll("[data-template-scope]").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.templateScope === scope);
  });
  filterTemplates();
}

function setTemplateCategory(category) {
  state.templateCategory = category;
  els.templateCategoryButtons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.templateCategoryTab === category);
  });
  filterTemplates();
}

function toggleTemplateGroupFilter(group) {
  if (group === "全部") {
    state.templateGroupFilters = [];
  } else if (state.templateGroupFilters.includes(group)) {
    state.templateGroupFilters = state.templateGroupFilters.filter((item) => item !== group);
  } else {
    state.templateGroupFilters.push(group);
  }
  document.querySelectorAll("[data-template-group-filter]").forEach((button) => {
    const filter = button.dataset.templateGroupFilter;
    button.classList.toggle("is-active", filter === "全部" ? state.templateGroupFilters.length === 0 : state.templateGroupFilters.includes(filter));
  });
  filterTemplates();
}

function cloneTemplate(template) {
  return {
    name: template.name,
    description: template.description || "",
    category: template.category || "",
    brand: template.brand || "",
    groups: [...template.groups],
    items: template.items.map((item) => ({ ...item, enabled: isTemplateItemEnabled(item) }))
  };
}

function resetTemplateBuilder(template = null) {
  state.builderMode = template ? "edit" : "create";
  state.builderEditingId = template?.id || null;
  state.builderSeq = 1;
  state.builder = template ? cloneTemplate(template) : {
    name: "",
    description: "",
    category: "",
    brand: "",
    groups: ["主图", "详情图"],
    items: []
  };
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
  const groups = state.builder.groups;
  els.builderGroupBoard.innerHTML = groups.map((group) => {
    const items = getGroupItems(group);
    return `
      <section class="builder-group-section" data-builder-group-section="${group}">
        <div class="builder-group-head">
          <div><h3>${group}配置</h3><span>${items.length} 张内容</span></div>
          <button class="btn ghost builder-add-content-btn" type="button" data-open-content-picker="${group}"><span class="builder-add-plus">+</span>添加内容</button>
        </div>
        <div class="builder-item-list">
          ${items.length ? items.map((item) => renderBuilderItem(item)).join("") : `<div class="builder-empty-group">暂无内容，可从本地上传、素材库或历史创作中选择</div>`}
        </div>
      </section>
    `;
  }).join("");
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
  state.contentTargetGroup = group;
  state.contentSelections = [];
  state.contentSource = "local";
  if (els.contentModalSubtitle) els.contentModalSubtitle.textContent = `将内容加入「${group}」分组`;
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
      group: state.contentTargetGroup,
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
  if (!state.builder.name) return "请输入模板名称";
  if (!state.builder.category) return "请选择商品分类";
  if (!state.builder.groups.length) return "请至少选择一个模板分组";
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
  if (state.builderMode === "edit" && state.builderEditingId) {
    const template = getTemplate(state.builderEditingId);
    if (template) {
      Object.assign(template, {
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
    templates.unshift({
      id: `tpl${String(Date.now()).slice(-6)}`,
      name: state.builder.name,
      description: state.builder.description,
      category: state.builder.category,
      brand: state.builder.brand,
      scope: "我的模板",
      groups: [...state.builder.groups],
      usage: 0,
      updatedAt: now,
      tags: [...state.builder.groups, state.builder.category],
      items: state.builder.items.map((item) => ({ ...item }))
    });
  }
  filterTemplates();
  setWorkspacePage("template-center");
  showToast("模板已保存");
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
  const visibleMaterials = list.slice(0, 8);

  els.materialGrid.innerHTML = visibleMaterials.map((material) => `
    <article class="material-card" data-material-id="${material.id}">
      <button class="material-cover ${material.tone}" type="button" data-material-preview="${material.id}" aria-label="查看${material.name}">
        <img src="${material.image}" alt="${material.name}">
      </button>
      <div class="material-card-body">
        <h3>${material.name}</h3>
        <div class="material-card-line">
          <span>${material.type}</span>
          <i></i>
          <span>${material.category}</span>
        </div>
      </div>
    </article>
  `).join("");

  const hasKeyword = Boolean(els.materialSearch?.value.trim());
  const hasFilter = state.materialPrimary !== "品牌资产" ||
    state.materialSecondary !== "全部" ||
    els.materialCategoryFilter?.value !== "全部品类" ||
    els.materialProductFilter?.value !== "全部商品" ||
    els.materialSourceFilter?.value !== "全部来源" ||
    els.materialStatusFilter?.value !== "全部状态";
  els.materialGrid.classList.toggle("is-hidden", list.length === 0);
  els.materialEmptyState?.classList.toggle("is-visible", materialLibrary.length === 0);
  els.materialNoResultState?.classList.toggle("is-visible", materialLibrary.length > 0 && list.length === 0 && (hasKeyword || hasFilter));
}

function filterMaterials() {
  if (!els.materialGrid) return;
  renderMaterialFilterTabs();
  const keyword = els.materialSearch?.value.trim().toLowerCase() || "";
  const category = els.materialCategoryFilter?.value || "全部品类";
  const product = els.materialProductFilter?.value || "全部商品";
  const source = els.materialSourceFilter?.value || "全部来源";
  const status = els.materialStatusFilter?.value || "全部状态";

  state.filteredMaterials = materialLibrary.filter((material) => {
    const haystack = [material.name, material.type, material.category, material.relatedProduct, material.source, material.status, material.description, material.scene, ...material.tags].join(" ").toLowerCase();
    const matchKeyword = !keyword || haystack.includes(keyword);
    const matchPrimary = materialPrimaryCategory(material.type) === state.materialPrimary;
    const matchSecondary = state.materialSecondary === "全部" || material.type === state.materialSecondary;
    const matchCategory = category === "全部品类" || material.category === category;
    const matchProduct = product === "全部商品" || (product === "通用素材" ? material.relatedProduct === "全部商品" : material.relatedProduct === product);
    const matchSource = source === "全部来源" || material.source === source;
    const matchStatus = status === "全部状态" || material.status === status;
    return matchKeyword && matchPrimary && matchSecondary && matchCategory && matchProduct && matchSource && matchStatus;
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
  els.drawerImagePreview.classList.remove("is-template-long-preview");
  if (els.drawerLongPreview) els.drawerLongPreview.innerHTML = "";
  if (els.drawerPreviewCaption) els.drawerPreviewCaption.textContent = "";
  els.drawerImagePreview.classList.add("is-open");
  els.drawerImagePreview.setAttribute("aria-hidden", "false");
}

function openTemplateLongPreview(template) {
  if (!template || !els.drawerImagePreview || !els.drawerLongPreview || !els.drawerImagePreviewImg) return;
  els.drawerImagePreviewImg.removeAttribute("src");
  els.drawerLongPreview.innerHTML = renderLongPreview(getEnabledTemplateItems(template.items), { emptyText: "暂无启用内容" });
  if (els.drawerPreviewCaption) els.drawerPreviewCaption.textContent = template.name;
  els.drawerImagePreview.classList.remove("is-model-preview");
  els.drawerImagePreview.classList.add("is-template-long-preview", "is-open");
  els.drawerImagePreview.setAttribute("aria-hidden", "false");
}

function closeDrawerImagePreview() {
  if (!els.drawerImagePreview || !els.drawerImagePreviewImg) return;
  els.drawerImagePreview.classList.remove("is-open");
  els.drawerImagePreview.classList.remove("is-model-preview");
  els.drawerImagePreview.classList.remove("is-template-long-preview");
  els.drawerImagePreview.setAttribute("aria-hidden", "true");
  els.drawerImagePreviewImg.removeAttribute("src");
  if (els.drawerLongPreview) els.drawerLongPreview.innerHTML = "";
  if (els.drawerPreviewCaption) els.drawerPreviewCaption.textContent = "";
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
  document.querySelector('[data-single-menu="模板中心"]')?.classList.add("active");
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
  els.body.classList.toggle("is-multi-task", pageName === "multi-image-creation");
  els.body.classList.toggle("is-brand-editor", pageName === "brand-material-editor");
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

function openBrandMaterialLibrary() {
  setWorkspacePage("brand-material-library");
  clearMenuActive();
  document.querySelector('[data-single-menu="品牌素材库"]')?.classList.add("active");
}

function openBrandMaterialEditor() {
  setWorkspacePage("brand-material-editor");
  clearMenuActive();
  document.querySelector('[data-single-menu="品牌素材库"]')?.classList.add("active");
  setBrandEditorTool("add");
  renderBrandCanvas();
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
        <div class="brand-object-element"><span>${escapeBrandText(object.name)}</span></div>
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
  const keyword = document.querySelector("[data-brand-material-search]")?.value.trim().toLowerCase() || "";
  const type = document.querySelector("[data-brand-material-type]")?.value || "全部类型";
  const source = document.querySelector("[data-brand-material-source]")?.value || "全部来源";
  const status = document.querySelector("[data-brand-material-status]")?.value || "全部状态";
  const activeTab = document.querySelector("[data-brand-material-tab].is-active")?.dataset.brandMaterialTab || "全部";

  document.querySelectorAll("[data-brand-asset-type]").forEach((card) => {
    const text = card.textContent.toLowerCase();
    const matchKeyword = !keyword || text.includes(keyword);
    const matchType = type === "全部类型" || text.includes(type.toLowerCase());
    const matchSource = source === "全部来源" || card.dataset.brandAssetSource === source;
    const matchStatus = status === "全部状态" || card.dataset.brandAssetStatus === status;
    const matchTab = activeTab === "全部" || card.dataset.brandAssetType === activeTab;
    card.classList.toggle("is-hidden", !(matchKeyword && matchType && matchSource && matchStatus && matchTab));
  });
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
  document.querySelector("[data-template-open]")?.classList.toggle("is-selected", Boolean(name));
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

function isMultiModuleFixed(module) {
  return module.purpose === "固定插入" || module.source === "文字素材";
}

function getMultiModuleRequiredCount(module) {
  return isMultiModuleFixed(module) ? 0 : 1;
}

function getMultiModuleStatus(module) {
  if (!module.enabled) return { key: "closed", text: "已关闭" };
  if (isMultiModuleFixed(module)) return { key: "fixed", text: "固定图片" };
  const missing = Math.max(getMultiModuleRequiredCount(module) - module.productImages.length, 0);
  if (missing > 0) return { key: "missing", text: missing === 1 ? "缺商品图" : `缺 ${missing} 张商品图` };
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
  els.multiStepButtons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.multiStepButton === step);
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
  return {
    id: item.id || `multi-${index}`,
    title: item.title || `${item.group}模块 ${index + 1}`,
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
    referenceImages: item.source === "历史创作" ? [{ image: item.image, title: item.title || "参考图" }] : [],
    prompt: "",
    generated: false,
    resultImage: ""
  };
}

function setupMultiImageCreationWithTemplate(template, backPage = "template-center") {
  if (!template) return;

  state.multiCreate.templateId = template.id || "";
  state.multiCreate.resourceTemplate = template.fromResource ? template : null;
  state.multiCreate.backPage = backPage;
  state.multiCreate.step = "config";
  state.multiCreate.taskId = "";
  state.multiCreate.taskStatus = "draft";
  state.multiCreate.selectedModuleId = "";
  state.multiCreate.generated = false;
  state.multiCreate.modules = template.items.map((item, index) => buildMultiCreateModule(item, index));
  const firstEnabled = state.multiCreate.modules.find((module) => module.enabled) || state.multiCreate.modules[0];
  state.multiCreate.selectedModuleId = firstEnabled?.id || "";
  startMultiTimer(true);

  clearMenuActive();
  document.querySelector('[data-single-menu="创作广场"]')?.classList.add("active");
  setWorkspacePage("multi-image-creation");
  renderMultiImageCreation();
  closeDrawer();
  closePrototypeModals();
}

function setupMultiImageCreation(templateId, backPage = "template-center") {
  const template = getTemplate(templateId);
  setupMultiImageCreationWithTemplate(template, backPage);
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

  const enabledModules = getEnabledMultiModules();
  const generativeModules = getGenerativeMultiModules();
  const missingModules = getMissingMultiModules();
  const readyCount = enabledModules.filter((module) => ["ready", "fixed", "done"].includes(getMultiModuleStatus(module).key)).length;
  const cost = generativeModules.length * 20;
  const doneCount = enabledModules.filter((module) => ["done", "fixed", "closed"].includes(getModuleResultStatus(module).key)).length;

  if (els.multiPage) els.multiPage.dataset.multiStep = state.multiCreate.step;
  els.multiStepButtons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.multiStepButton === state.multiCreate.step);
  });
  if (els.multiBack) {
    const backText = state.multiCreate.backPage === "creation-plaza" ? "返回创作广场" : state.multiCreate.backPage === "creation-records" ? "返回创作记录" : "返回模板中心";
    els.multiBack.innerHTML = `<span></span>${backText}`;
  }
  if (els.multiTemplateTitle) els.multiTemplateTitle.textContent = `${template.name} - 多图创作`;
  if (els.multiTemplateSubtitle) els.multiTemplateSubtitle.textContent = `${templateComboLabel(template)} · ${template.category} · 先看整套模板，再补充缺失素材`;
  if (els.multiTemplateName) els.multiTemplateName.textContent = template.name;
  if (els.multiTemplateThumb) els.multiTemplateThumb.src = template.items[0]?.image || "assets/product-cover-01.png";
  if (els.multiEnabledCount) els.multiEnabledCount.textContent = `${enabledModules.length} 个`;
  if (els.multiMissingCount) els.multiMissingCount.textContent = `${missingModules.length} 个`;
  if (els.multiCost) els.multiCost.textContent = `${cost} 融豆`;
  if (els.multiReadyLabel) els.multiReadyLabel.textContent = `${readyCount}/${enabledModules.length} 已就绪`;
  if (els.multiResultStatus) els.multiResultStatus.textContent = state.multiCreate.taskStatus === "running" ? `${doneCount}/${enabledModules.length} 已完成` : state.multiCreate.taskStatus === "done" ? "全部完成" : "等待生成";
  if (els.multiFooterStatus) {
    els.multiFooterStatus.textContent = state.multiCreate.step === "config"
      ? `预计生成 ${generativeModules.length} 个模块`
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
        <button class="multi-module-switch ${module.enabled ? "is-on" : ""}" type="button" data-multi-toggle="${module.id}" aria-label="${module.enabled ? "关闭模块" : "启用模块"}"></button>
        ${module.enabled ? `
          <div class="multi-module-cover">
            <img src="${module.generated && module.resultImage ? module.resultImage : module.image}" alt="${module.title}">
            <span class="multi-module-type">${module.group} · ${getMultiModuleRatioLabel(module)}</span>
            <em class="multi-status ${status.key}">${status.text}</em>
          </div>
          <div class="multi-module-copy">
            <strong>${module.title}</strong>
            <span>${isMultiModuleFixed(module) ? "无需商品图" : `商品图 ${productCount}/${getMultiModuleRequiredCount(module)}`} · ${module.purpose} · 输出 ${getMultiModuleRatioLabel(module)}</span>
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
        <p>${isMultiModuleFixed(module) ? "固定图片模块无需上传商品图。" : `需 ${getMultiModuleRequiredCount(module)} 张商品图。`}</p>
        <div class="multi-thumb-row">
          ${module.productImages.map((image, index) => `<img src="${image.image}" alt="商品图 ${index + 1}">`).join("")}
          ${isMultiModuleFixed(module) ? "" : `<button type="button" data-multi-upload-product="${module.id}">+ 选择商品图</button>`}
        </div>
      </section>
      <section class="multi-config-section">
        <h4>参考图</h4>
        <div class="multi-thumb-row">
          ${module.referenceImages.map((image) => `<img src="${image.image}" alt="${image.title}">`).join("")}
          <button type="button" data-multi-upload-reference="${module.id}">+ 添加参考图</button>
        </div>
      </section>
      <label class="multi-config-section">
        <h4>文本描述</h4>
        <textarea data-multi-prompt="${module.id}" placeholder="非必填。不填写时，系统按模板商品位直接替换商品。">${module.prompt}</textarea>
      </label>
      <section class="multi-config-section">
        <h4>文案策略</h4>
        <div class="multi-text-mode-grid">
          ${["不加文字", "跟随模板文案", "替换文案", "生成后编辑", "AI融合文案"].map((mode) => `
            <button class="${module.textMode === mode ? "is-active" : ""}" type="button" data-multi-text-mode="${module.id}" data-mode="${mode}">${mode}</button>
          `).join("")}
        </div>
      </section>
    ` : `<p class="multi-disabled-note">该模块已关闭，本次不生成、不校验、不计费。重新启用后可继续配置。</p>`}
  `;
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
    module.productImages = [mockImages[index % mockImages.length]];
  });
  renderMultiImageCreation();
  if (!silent) showToast(moduleId ? "已选择商品图" : "已为启用模块匹配商品图");
}

function addMultiReferenceImage(moduleId) {
  const module = state.multiCreate.modules.find((entry) => entry.id === moduleId);
  if (!module) return;
  module.referenceImages.push({ image: "assets/creation-cover-610.jpg", title: "参考图" });
  renderMultiConfigPanel();
  showToast("已添加参考图");
}

function updateMultiPrompt(moduleId, value) {
  const module = state.multiCreate.modules.find((entry) => entry.id === moduleId);
  if (!module) return;
  module.prompt = value;
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

function createOrUpdateMultiTaskRecord() {
  if (!els.creationTaskFlow || !state.multiCreate.taskId) return;
  const template = getActiveMultiTemplate();
  const enabledModules = getEnabledMultiModules();
  const doneCount = enabledModules.filter((module) => ["done", "fixed"].includes(getModuleResultStatus(module).key)).length;
  const status = state.multiCreate.taskStatus === "done" ? "done" : "running";
  let card = els.creationTaskFlow.querySelector(`[data-multi-task-id="${state.multiCreate.taskId}"]`);
  const title = `${template?.name || "模板"}多图创作`;
  const thumbs = enabledModules.slice(0, 3).map((module) => `<img src="${getSelectedModuleImage(module) || module.image}" alt="">`).join("");
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
        <span>${enabledModules.length} 个模块</span>
        <span>已完成 ${doneCount}/${enabledModules.length}</span>
        <span>刚刚</span>
      </div>
      <div class="creation-task-tags">
        <span data-tag-source="product_name">${template?.name || "模板创作"}</span>
        <span data-tag-source="product_category">${template?.category || "未分类"}</span>
        <span data-tag-source="output_ratio">按模块比例</span>
      </div>
      <div class="creation-task-progress">
        <span>${status === "done" ? "候选图已生成，可继续确认结果" : "后台生成中，可返回任务继续查看"}</span>
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
    card.dataset.type = "套图创作";
    card.dataset.product = template?.name || "模板创作";
    els.creationTaskFlow.prepend(card);
    els.creationTaskCards = Array.from(document.querySelectorAll("[data-creation-task-card]"));
  }
  card.dataset.status = status;
  card.dataset.title = title;
  card.innerHTML = html;
}

function openMultiTaskFromRecord(taskCard) {
  const isCurrentTask = taskCard?.dataset.multiTaskId && taskCard.dataset.multiTaskId === state.multiCreate.taskId;
  if (!isCurrentTask) {
    setupMultiImageCreation("tpl002", "creation-records");
    fillMultiProductImages("", true);
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
  document.querySelector('[data-single-menu="创作广场"]')?.classList.add("active");
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
  if (card.dataset.type === "模板" || card.dataset.type === "套图模板") {
    openResourceTemplateCreation(card);
    return;
  }

  setWorkspacePage("creation-plaza");
  clearMenuActive();
  document.querySelector('[data-single-menu="创作广场"]').classList.add("active");
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
    if (button.dataset.singleMenu === "品牌素材库") {
      setWorkspacePage("brand-material-library");
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
    showToast(`${button.dataset.singleMenu}为菜单占位，当前原型仅切换创作广场、模板中心、模特库、素材库、品牌素材库、商品库和创作记录`);
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
    const modalMap = {
      product: els.productSelectModal,
      reference: els.referenceSelectModal,
      model: els.modelSelectModal
    };
    if (modalMap[type]) {
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

document.querySelectorAll(".creation-select-filters button, .creation-reference-tabs button, .creation-model-subfilters button").forEach((button) => {
  button.addEventListener("click", () => {
    const group = button.parentElement;
    group?.querySelectorAll("button").forEach((item) => item.classList.toggle("is-active", item === button));
  });
});

document.querySelectorAll("[data-creation-select-product]").forEach((button) => {
  button.addEventListener("click", () => {
    setCreationUpload("product", true);
    closePrototypeModals();
    showToast("已选择商品图");
  });
});

document.querySelector("[data-reference-simulate-upload]")?.addEventListener("click", () => {
  setCreationUpload("reference", true);
  closePrototypeModals();
  showToast("已添加参考图");
});

document.querySelectorAll("[data-creation-model-option]").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll("[data-creation-model-option]").forEach((item) => item.classList.toggle("is-selected", item === button));
    state.creation.modelName = button.dataset.modelName || "";
    const summary = document.querySelector("[data-creation-model-summary]");
    if (summary) summary.textContent = state.creation.modelName ? "已选 1/1" : "已选 0/1";
  });
});

document.querySelector("[data-creation-model-confirm]")?.addEventListener("click", () => {
  if (!state.creation.modelName) {
    showToast("请先选择模特");
    return;
  }
  setCreationUpload("model", true);
  closePrototypeModals();
  showToast(`已选择模特：${state.creation.modelName}`);
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

document.querySelectorAll("[data-template-scope]").forEach((button) => {
  button.addEventListener("click", () => setTemplateScope(button.dataset.templateScope));
});

document.querySelectorAll("[data-template-group-filter]").forEach((button) => {
  button.addEventListener("click", () => toggleTemplateGroupFilter(button.dataset.templateGroupFilter));
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
    document.querySelector('[data-single-menu="模板中心"]').classList.add("active");
    setWorkspacePage("template-builder");
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
  setWorkspacePage("template-center");
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
  const multiUploadReferenceButton = event.target.closest("[data-multi-upload-reference]");
  const multiTemplatePreviewButton = event.target.closest("[data-multi-template-preview]");
  const multiStepButton = event.target.closest("[data-multi-step-button]");
  const multiBackStepButton = event.target.closest("[data-multi-back-step]");
  const multiGoRecordsButton = event.target.closest("[data-multi-go-records]");
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
  const saveBrandMaterialButton = event.target.closest("[data-save-brand-material]");
  const brandCopyButton = event.target.closest("[data-brand-copy]");
  const brandUseButton = event.target.closest("[data-brand-use]");
  const brandImportButton = event.target.closest("[data-brand-material-import]");
  const brandAddButton = event.target.closest("[data-brand-add]");
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
  const resultActionButton = event.target.closest("[data-result-action]");
  const historyRegenerateButton = event.target.closest("[data-history-regenerate]");
  const detailRegenerateButton = event.target.closest(".detail-result-actions [data-detail-regenerate]");

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
    openBrandMaterialLibrary();
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
    if (targetStep === "result" && !state.multiCreate.generated) {
      showToast("请先点击去生成");
      return;
    }
    setMultiStep(targetStep);
    return;
  }

  if (multiBackButton) {
    const backPage = ["creation-plaza", "creation-records"].includes(state.multiCreate.backPage) ? state.multiCreate.backPage : "template-center";
    if (state.multiCreate.taskStatus === "running") {
      showToast("任务已在后台生成，可在创作记录中继续查看");
    }
    setWorkspacePage(backPage);
    clearMenuActive();
    document.querySelector(`[data-single-menu="${backPage === "creation-plaza" ? "创作广场" : backPage === "creation-records" ? "创作记录" : "模板中心"}"]`)?.classList.add("active");
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

  if (multiUploadReferenceButton) {
    addMultiReferenceImage(multiUploadReferenceButton.dataset.multiUploadReference);
    return;
  }

  if (multiModuleCard) {
    selectMultiModule(multiModuleCard.dataset.multiModule);
    return;
  }

  if (openCreationDetailButton) {
    const taskCard = openCreationDetailButton.closest("[data-creation-task-card]");
    if (taskCard?.dataset.type === "套图创作") {
      openMultiTaskFromRecord(taskCard);
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
  const multiPrompt = event.target.closest("[data-multi-prompt]");
  const multiCustomRatio = event.target.closest("[data-multi-custom-ratio]");
  if (multiPrompt) {
    updateMultiPrompt(multiPrompt.dataset.multiPrompt, multiPrompt.value);
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
updateCreationMode();
filterTemplates();
filterMaterials();
filterModels();
renderBrandCanvas();
window.setTimeout(() => {
  els.loadingState.classList.remove("is-visible");
  renderProducts(state.filtered);
  setView("card");
}, 350);
