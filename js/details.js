const externalLink = (url, label) => url && /^https:\/\//.test(url) ? `<a class="btn btn-outline" href="${esc(url)}" target="_blank" rel="noopener noreferrer">${esc(label)} ↗</a>` : '';

const modelCatalogFor = (p) => (window.MODEL_CATALOGS && window.MODEL_CATALOGS[p.id]) || null;

/* Katalog terpisah menjaga data.js tetap ringkas, tetapi count runtime tetap sinkron. */
if (typeof PROVIDERS !== 'undefined' && window.MODEL_CATALOGS) {
  PROVIDERS.forEach((p) => {
    const catalog = modelCatalogFor(p);
    if (!catalog || !catalog.models.length || catalog.status === 'provided-partial') return;
    p.models = catalog.models.length;
    p.modelsApprox = false;
    p.modelListStatus = 'loaded';
  });
}

function modelLabel(p) {
  const catalog = modelCatalogFor(p);
  if (catalog && catalog.models.length) {
    return catalog.status === 'provided-partial'
      ? `${catalog.models.length.toLocaleString('id-ID')} model terdata (parsial)`
      : `${catalog.models.length.toLocaleString('id-ID')} model`;
  }
  return p.models > 0 ? `${p.models.toLocaleString('id-ID')}${p.modelsApprox ? '+' : ''} model` : 'Belum dicatat';
}

function modelItem(model) {
  const title = model.name && model.name !== model.id
    ? `<strong>${esc(model.name)}</strong> <code>${esc(model.id)}</code>`
    : `<code>${esc(model.id)}</code>`;
  return `<li>${title}${model.meta ? `<span class="model-meta">${esc(model.meta)}</span>` : ''}</li>`;
}

function catalogSource(catalog) {
  const date = catalog.observedDate || catalog.importedDate;
  const source = catalog.sourceUrl && /^https:\/\//.test(catalog.sourceUrl)
    ? `<a href="${esc(catalog.sourceUrl)}" target="_blank" rel="noopener noreferrer">${esc(catalog.sourceLabel || 'Sumber katalog')} ↗</a>`
    : esc(catalog.sourceLabel || 'Data katalog');
  const status = catalog.status === 'verified'
    ? 'Snapshot live terverifikasi'
    : catalog.status === 'provided-partial'
      ? 'Data unggahan pengguna (parsial)'
      : 'Data unggahan pengguna';
  return `<p class="catalog-source"><b>${esc(status)}</b> · ${source}${date ? ` · ${esc(date)}` : ''}</p>`;
}

function catalogDropdown(title, models, open = false) {
  return `<details class="model-family"${open ? ' open' : ''}>
    <summary><span>${esc(title)}</span><span class="family-count">${models.length.toLocaleString('id-ID')} model</span></summary>
    <ul class="model-list">${models.map(modelItem).join('')}</ul>
  </details>`;
}

function renderCatalog(catalog) {
  if (!catalog || !catalog.models.length) return '';
  const dropdowns = catalog.groups && catalog.groups.length
    ? catalog.groups.map((group) => catalogDropdown(group.name, group.models)).join('')
    : catalogDropdown('Semua model', catalog.models);
  const note = catalog.note ? `<p class="catalog-source"><b>Harga & paket:</b> ${esc(catalog.note)}</p>` : '';
  return `${catalogSource(catalog)}<div class="model-families">${dropdowns}</div>${note}`;
}

function extraDetails(p) {
  const counts = Object.entries(p.modelCounts || {});
  const legal = externalLink(p.termsUrl, 'Terms of Service') + externalLink(p.privacyUrl, 'Privacy Policy');
  const labels = {
    'awaiting-source': 'Belum tersedia — rencananya berisi list nama model per penyedia (diisi dari tautan daftar model).',
    'cloudflare': 'Terhalang Cloudflare saat dicek — menunggu list manual dari kurator.',
    'loaded': 'List nama model tersedia.'
  };
  const catalog = modelCatalogFor(p);
  const listNote = p.modelListNote ? `<p>${esc(p.modelListNote)}</p>` : '';
  const legacyList = !catalog && p.modelList && p.modelList.length
    ? `<ul>${p.modelList.map((m) => `<li>${esc(m)}</li>`).join('')}</ul>`
    : '';
  return `<section class="section"><h2>Dokumen legal</h2><div class="detail-actions">${legal}</div>${p.legalNote ? `<p>${esc(p.legalNote)}</p>` : ''}</section>
  <section class="section"><h2>Katalog model</h2>${counts.length && !catalog ? `<table class="spec-table"><caption>Jumlah per kategori — catatan kurator</caption>${counts.map(([k,v])=>`<tr><td>${esc(k)}</td><td>${esc(v)}</td></tr>`).join('')}</table>` : ''}<p>${esc(catalog ? 'Daftar model dikelompokkan agar mudah dibaca.' : (labels[p.modelListStatus] || labels['awaiting-source']))}</p>${listNote}${renderCatalog(catalog)}${legacyList}</section>`;
}
