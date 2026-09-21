/* ===== AI Provider Hub — App Logic ===== */

const $ = (sel) => document.querySelector(sel);
const esc = (s) =>
  String(s).replace(/[&<>"']/g, (c) =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

function statusBadge(p) {
  const s = window.__providerStatus && window.__providerStatus.sites[p.id];
  if (s === "up") return `<span class="chip chip-up">✓ Website aktif</span>`;
  if (s === "down") return `<span class="chip chip-down">✗ Tidak bisa diakses saat cek terakhir</span>`;
  return `<span class="chip">… status belum dicek</span>`;
}

/* Ambil status hasil GitHub Actions (js/status.json). Gagal = diam-diam, badge tetap "belum dicek". */
async function loadStatus() {
  try {
    const res = await fetch("js/status.json?nocache=" + Date.now());
    if (res.ok) window.__providerStatus = await res.json();
  } catch { /* file belum ada / offline — abaikan */ }
}

function cardHTML(p) {
  const modelInfo = esc(modelLabel(p));
  const chips = p.modelTypes.map((t) => `<span class="chip">${esc(t)}</span>`).join("");
  return `
  <article class="card">
    <div class="card-top">
      <h2><a href="detail.html?id=${esc(p.id)}">${esc(p.name)}</a></h2>
      <span class="type">${esc(p.type)}</span>
    </div>
    <p class="tagline">${esc(p.tagline)}</p>
    <div class="chips">${chips} ${statusBadge(p)}</div>
    <div class="meta-row">
      <span>${modelInfo}</span>
      ${p.currency !== "—" ? `<span>Mata uang: <b>${esc(p.currency)}</b></span>` : ""}
    </div>
    <div class="card-actions">
      <a class="btn btn-primary" href="detail.html?id=${esc(p.id)}">Detail</a>
      <a class="btn btn-outline" href="${esc(p.url)}" target="_blank" rel="noopener">Kunjungi ↗</a>
    </div>
  </article>`;
}

/* ===== INDEX PAGE ===== */
function initIndex() {
  const grid = $("#grid");
  if (!grid) return;

  const searchInput = $("#search");
  const typeFilter = $("#filter-type");
  const modelFilter = $("#filter-model");
  const statusFilter = $("#filter-status");
  const info = $("#result-info");

  // isi dropdown tipe dari data
  const types = [...new Set(PROVIDERS.map((p) => p.type))].sort();
  types.forEach((t) => {
    const opt = document.createElement("option");
    opt.value = t; opt.textContent = t;
    typeFilter.appendChild(opt);
  });
  const modelTypes = [...new Set(PROVIDERS.flatMap((p) => p.modelTypes))].sort();
  modelTypes.forEach((t) => {
    const opt = document.createElement("option");
    opt.value = t; opt.textContent = t;
    modelFilter.appendChild(opt);
  });

  function render() {
    const q = searchInput.value.trim().toLowerCase();
    const ft = typeFilter.value;
    const fm = modelFilter.value;
    const fs = statusFilter.value;

    const list = PROVIDERS.filter((p) => {
      if (ft !== "all" && p.type !== ft) return false;
      if (fm !== "all" && !p.modelTypes.includes(fm)) return false;
      if (fs !== "all" && p.status !== fs) return false;
      if (q) {
        const hay = [p.name, p.tagline, p.type, p.url, p.scheme,
          ...p.modelTypes, ...p.features, ...p.notes].join(" ").toLowerCase();
        if (!hay.includes(q)) return false;
      }
      return true;
    });

    grid.innerHTML = list.length
      ? list.map(cardHTML).join("")
      : `<div class="empty-state">Tidak ada hasil untuk filter/pencarian ini.</div>`;
    info.textContent = `Menampilkan ${list.length} dari ${PROVIDERS.length} penyedia layanan.`;
  }

  [searchInput, typeFilter, modelFilter, statusFilter].forEach((el) =>
    el.addEventListener("input", render));
  render();
}

/* ===== DETAIL PAGE ===== */

/* FAQ pengetahuan umum (muncul di semua halaman detail) */
const FAQ_ITEMS = [
  {
    q: "Apa itu model SOTA?",
    a: "SOTA (State of the Art) adalah model AI terbaik/termutakhir saat ini. Umumnya keluaran OpenAI (GPT), Anthropic (Claude), dan Google (Gemini).",
  },
  {
    q: "Apa itu model China?",
    a: "Model buatan perusahaan Tiongkok. Umumnya: Qwen (Alibaba), GLM (Zhipu), Kimi (Moonshot), DeepSeek, MiMo (Xiaomi), dan MiniMax. Kemampuan dan biaya bergantung pada model dan tugasnya.",
  },
  {
    q: "Apa itu model Eropa?",
    a: "Model dari developer Eropa, umumnya Mistral (Prancis) dan kawan-kawannya.",
  },
  {
    q: "Apa itu model open source?",
    a: "Istilah open source sering dipakai untuk model open-weight seperti Meta Llama, Mistral, Qwen, dan DeepSeek. Bobot tersedia pada varian tertentu; hak penggunaan mengikuti lisensi masing-masing.",
  },
  {
    q: "Pembayarannya pakai apa?",
    a: "Mayoritas penyedia di daftar ini bisa bayar pakai Rupiah (kecuali NanoGPT dan UnoRouter yang memakai USD; UnoRouter menerima kartu, crypto, atau PayPal, bukan QRIS). Metode pembayaran paling umum adalah QRIS.",
  },
  {
    q: "Pay as you go vs paket?",
    a: "Pay as you go: bayar sesuai pemakaian token/credit (mis. Dahono, KiosAPI, ModelRouter). Paket: bayar di muka untuk durasi tertentu, mis. 7–60 hari (mis. KelontongAI, PecutOpus) atau VIP/unlimited (mis. OAO Clipora).",
  },
];

function initDetail() {
  const mount = $("#detail-mount");
  if (!mount) return;

  const id = new URLSearchParams(location.search).get("id");
  const p = PROVIDERS.find((x) => x.id === id);

  if (!p) {
    mount.innerHTML = `
      <div class="section"><h2>404</h2>
        <p style="color:var(--text-dim)">Penyedia tidak ditemukan.
        <a href="index.html">← Kembali ke daftar</a></p></div>`;
    return;
  }
  document.title = `${p.name} — AI Provider Hub`;

  const featList = p.features.map((f) => `<li>${esc(f)}</li>`).join("");
  const noteList = p.notes.map((n) => `<li>${esc(n)}</li>`).join("");
  const chips = p.modelTypes.map((t) => `<span class="chip">${esc(t)}</span>`).join("");
  const payment = p.payment.length ? esc(p.payment.join(", ")) : "—";
  const pricingLink = p.pricingUrl
    ? `<a class="btn btn-outline" href="${esc(p.pricingUrl)}" target="_blank" rel="noopener">Lihat Harga ↗</a>` : "";

  mount.innerHTML = `
    <div class="detail-head">
      <h1>${esc(p.name)}</h1>
      <p class="tagline">${esc(p.tagline)}</p>
      <div class="head-meta">
        <span class="type">${esc(p.type)}</span>
        ${statusBadge(p)}
        ${chips}
      </div>
      <div class="detail-actions">
        <a class="btn btn-primary" href="${esc(p.url)}" target="_blank" rel="noopener">Kunjungi Situs ↗</a>
        ${pricingLink}
      </div>
    </div>

    <div class="section">
      <h2>📋 Spesifikasi</h2>
      <table class="spec-table">
        <tr><td>Tipe layanan</td><td>${esc(p.type)}</td></tr>
        <tr><td>Jumlah model</td><td>${esc(modelLabel(p))}</td></tr>
        <tr><td>Jenis model</td><td>${p.modelTypes.length ? chips : "—"}</td></tr>
        <tr><td>Mata uang</td><td>${esc(p.currency)}</td></tr>
        <tr><td>Skema pembayaran</td><td>${esc(p.scheme)}</td></tr>
        <tr><td>Metode bayar</td><td>${payment}</td></tr>
        <tr><td>Status website</td><td>Dicek otomatis tiap 30 menit oleh GitHub Actions (1 request ringan per situs). ${window.__providerStatus ? "Cek terakhir: " + esc(new Date(window.__providerStatus.checked_at).toLocaleString("id-ID")) : "Belum ada hasil cek."} Ini status website saja, bukan ketersediaan model.</td></tr>
        <tr><td>URL</td><td><a href="${esc(p.url)}" target="_blank" rel="noopener">${esc(p.url)}</a></td></tr>
      </table>
    </div>

    ${p.features.length ? `
    <div class="section">
      <h2>✨ Fitur & Layanan</h2>
      <ul>${featList}</ul>
    </div>` : ""}

    ${p.notes.length ? `
    <div class="section">
      <h2>⚠ Catatan</h2>
      <ul class="notes">${noteList}</ul>
    </div>` : ""}

    ${extraDetails(p)}
    <div class="section faq-section">
      <h2>❓ FAQ — Pengetahuan Umum</h2>
      ${FAQ_ITEMS.map((f, i) => `
        <div class="faq-item">
          <button class="faq-q" aria-expanded="false">
            <span>${esc(f.q)}</span><span class="faq-arrow">▸</span>
          </button>
          <div class="faq-a"><p>${esc(f.a)}</p></div>
        </div>`).join("")}
    </div>
  `;
}

/* FAQ accordion behavior */
function initFaq() {
  document.addEventListener("click", (e) => {
    const btn = e.target.closest(".faq-q");
    if (!btn) return;
    const item = btn.parentElement;
    const open = item.classList.toggle("open");
    btn.setAttribute("aria-expanded", open);
  });
}

/* ===== BOOT ===== */
document.addEventListener("DOMContentLoaded", async () => {
  await loadStatus();          // ambil status.json dulu (kalau ada)
  initIndex();
  initDetail();
  initFaq();
  const badge = document.getElementById("badge-count");
  if (badge) badge.textContent = PROVIDERS.length + " penyedia terdaftar";
  const wip = document.getElementById("uptime-note");
  if (wip && window.__providerStatus)
    wip.textContent = "Status dicek otomatis tiap 30 menit (GitHub Actions) — terakhir: " +
      new Date(window.__providerStatus.checked_at).toLocaleString("id-ID") + ".";
});

