const state = {
  category: "",
  productUploaded: false,
  referenceUploaded: false,
  ratio: "3:4",
  resolution: "2K",
  taskIndex: 0
};

const resultImages = [
  "assets/product-cover-03.png",
  "assets/product-cover-04.png",
  "assets/product-cover-01.png",
  "assets/product-cover-02.png"
];

const els = {
  navGroups: Array.from(document.querySelectorAll("[data-nav-group]")),
  categoryButtons: Array.from(document.querySelectorAll("[data-category]")),
  categoryTip: document.querySelector("[data-category-tip]"),
  promptInput: document.querySelector("[data-prompt-input]"),
  currentMode: document.querySelector("[data-current-mode]"),
  generateLabel: document.querySelector("[data-generate-label]"),
  productState: document.querySelector("[data-product-state]"),
  referenceState: document.querySelector("[data-reference-state]"),
  uploadButtons: Array.from(document.querySelectorAll("[data-upload]")),
  paramWrap: document.querySelector("[data-param-wrap]"),
  paramTrigger: document.querySelector("[data-param-trigger]"),
  paramCancel: document.querySelector("[data-param-cancel]"),
  paramConfirm: document.querySelector("[data-param-confirm]"),
  ratioSummary: document.querySelector("[data-ratio-summary]"),
  resolutionSummary: document.querySelector("[data-resolution-summary]"),
  paramButtons: Array.from(document.querySelectorAll("[data-param-option]")),
  generateButton: document.querySelector("[data-generate]"),
  empty: document.querySelector("[data-session-empty]"),
  taskList: document.querySelector("[data-task-list]"),
  toast: document.querySelector("[data-toast]"),
  previewModal: document.querySelector("[data-preview-modal]"),
  previewImage: document.querySelector("[data-preview-image]"),
  closePreviewButtons: Array.from(document.querySelectorAll("[data-close-preview]"))
};

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

function getPrompt() {
  return els.promptInput.value.trim();
}

function getMode() {
  if (state.referenceUploaded) return "参考图复刻";
  if (state.productUploaded) return "商品图生成";
  return "自由生图";
}

function updateMode() {
  const mode = getMode();
  els.currentMode.textContent = mode;
  els.generateLabel.textContent = mode === "参考图复刻" ? "复刻图片" : "生成图片";
}

function updateUploadState() {
  els.productState.textContent = state.productUploaded ? "商品图已上传" : "未上传商品图";
  els.referenceState.textContent = state.referenceUploaded ? "参考图已上传" : "未上传参考图";
  els.productState.classList.toggle("is-active", state.productUploaded);
  els.referenceState.classList.toggle("is-active", state.referenceUploaded);
  els.uploadButtons.forEach((button) => {
    const uploaded = button.dataset.upload === "product" ? state.productUploaded : state.referenceUploaded;
    button.classList.toggle("is-uploaded", uploaded);
  });
}

function validateCreate() {
  const mode = getMode();
  const prompt = getPrompt();

  if (mode === "自由生图" && !prompt) {
    showToast("请先填写需求描述");
    els.promptInput.focus();
    return false;
  }

  if (mode === "商品图生成" && !state.productUploaded) {
    showToast("请先上传商品图");
    return false;
  }

  if (mode === "参考图复刻") {
    if (!state.productUploaded) {
      showToast("参考图复刻需要上传商品图");
      return false;
    }
    if (!state.referenceUploaded) {
      showToast("参考图复刻需要上传参考图");
      return false;
    }
    if (!state.category) {
      showToast("参考图复刻需要选择商品分类");
      return false;
    }
  }

  return true;
}

function createTask() {
  state.taskIndex += 1;
  const id = `task-${Date.now()}`;
  const mode = getMode();
  const prompt = getPrompt();
  els.empty.classList.remove("is-visible");

  const card = document.createElement("article");
  card.className = "task-card";
  card.dataset.taskId = id;
  card.innerHTML = `
    <div class="task-card-head">
      <div class="task-title">
        <strong>${mode}</strong>
        <span>${prompt || "未填写需求描述"}</span>
      </div>
      <span class="status-badge" data-task-status>排队中</span>
    </div>
    <div class="task-meta">
      <span>${state.category || "未选择分类"}</span>
      <span>${state.ratio}</span>
      <span>${state.resolution}</span>
      <span>消耗融豆 10</span>
      <span>${state.productUploaded ? "含商品图" : "无商品图"}</span>
      <span>${state.referenceUploaded ? "含参考图" : "无参考图"}</span>
    </div>
    <div class="task-progress"><span data-task-progress></span></div>
  `;

  els.taskList.prepend(card);

  window.setTimeout(() => updateTask(card, "生成中", 54), 700);
  window.setTimeout(() => completeTask(card, mode), 1900);
}

function updateTask(card, status, progress) {
  const badge = card.querySelector("[data-task-status]");
  const progressBar = card.querySelector("[data-task-progress]");
  badge.textContent = status;
  progressBar.style.setProperty("--progress", `${progress}%`);
}

function completeTask(card, mode) {
  const badge = card.querySelector("[data-task-status]");
  const progressBar = card.querySelector("[data-task-progress]");
  badge.textContent = "已完成";
  badge.classList.add("done");
  progressBar.style.setProperty("--progress", "100%");

  const result = document.createElement("div");
  result.className = "result-grid";
  result.innerHTML = resultImages.map((image) => `
    <img src="${image}" alt="${mode}结果图" data-preview="${image}">
  `).join("");

  const actions = document.createElement("div");
  actions.className = "task-actions";
  actions.innerHTML = `
    <button class="btn" type="button" data-task-action="查看大图">查看大图</button>
    <button class="btn" type="button" data-task-action="下载">下载</button>
    <button class="btn" type="button" data-task-action="保存为资产">保存为资产</button>
    <button class="btn" type="button" data-task-action="关联商品">关联商品</button>
    <button class="btn" type="button" data-task-action="重新生成">重新生成</button>
  `;

  card.append(result, actions);
}

function showToast(message) {
  els.toast.textContent = message;
  els.toast.classList.add("is-open");
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => {
    els.toast.classList.remove("is-open");
  }, 1800);
}

els.navGroups.forEach((group) => {
  group.addEventListener("click", () => {
    setNavGroupExpanded(group, group.classList.contains("collapsed"));
  });
});

els.categoryButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const isActive = button.classList.contains("active");
    els.categoryButtons.forEach((item) => item.classList.remove("active"));
    state.category = isActive ? "" : button.dataset.category;
    button.classList.toggle("active", !isActive);
    els.categoryTip.classList.toggle("is-visible", Boolean(state.category));
  });
});

els.promptInput.addEventListener("input", updateMode);

els.uploadButtons.forEach((button) => {
  button.addEventListener("click", () => {
    if (button.dataset.upload === "product") {
      state.productUploaded = !state.productUploaded;
      showToast(state.productUploaded ? "商品图已上传" : "已移除商品图");
    } else {
      state.referenceUploaded = !state.referenceUploaded;
      showToast(state.referenceUploaded ? "参考图已上传" : "已移除参考图");
    }
    updateUploadState();
    updateMode();
  });
});

els.paramTrigger.addEventListener("click", (event) => {
  event.stopPropagation();
  els.paramWrap.classList.toggle("is-open");
});

els.paramCancel.addEventListener("click", () => {
  els.paramWrap.classList.remove("is-open");
});

els.paramConfirm.addEventListener("click", () => {
  els.paramWrap.classList.remove("is-open");
});

els.paramButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const type = button.dataset.paramOption;
    const value = button.dataset.value;
    state[type] = value;
    els.paramButtons
      .filter((item) => item.dataset.paramOption === type)
      .forEach((item) => item.classList.toggle("active", item === button));
    els.ratioSummary.textContent = state.ratio;
    els.resolutionSummary.textContent = state.resolution;
  });
});

els.generateButton.addEventListener("click", () => {
  if (!validateCreate()) return;
  createTask();
});

document.addEventListener("click", (event) => {
  if (!event.target.closest("[data-param-wrap]")) {
    els.paramWrap.classList.remove("is-open");
  }

  const preview = event.target.closest("[data-preview]");
  if (preview) {
    els.previewImage.src = preview.dataset.preview;
    els.previewModal.classList.add("is-open");
    return;
  }

  const action = event.target.closest("[data-task-action]");
  if (action) {
    if (action.dataset.taskAction === "查看大图") {
      const firstImage = action.closest(".task-card").querySelector("[data-preview]");
      if (firstImage) {
        els.previewImage.src = firstImage.dataset.preview;
        els.previewModal.classList.add("is-open");
      }
      return;
    }
    showToast(`${action.dataset.taskAction}已触发`);
  }
});

els.closePreviewButtons.forEach((button) => {
  button.addEventListener("click", () => {
    els.previewModal.classList.remove("is-open");
  });
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    els.paramWrap.classList.remove("is-open");
    els.previewModal.classList.remove("is-open");
  }
});

updateUploadState();
updateMode();
