const externalLink = (url, label) => url && /^https:\/\//.test(url) ? `<a class="btn btn-outline" href="${esc(url)}" target="_blank" rel="noopener noreferrer">${esc(label)} ↗</a>` : '';
function modelLabel(p) {
  return p.models > 0 ? `${p.models.toLocaleString('id-ID')}${p.modelsApprox ? '+' : ''} model` : 'Belum dicatat';
}
function extraDetails(p) {
  const counts = Object.entries(p.modelCounts || {});
  const legal = externalLink(p.termsUrl, 'Terms of Service') + externalLink(p.privacyUrl, 'Privacy Policy');
  const labels = {
    'awaiting-source': 'Belum tersedia — rencananya berisi list nama model per penyedia (diisi dari tautan daftar model).',
    'cloudflare': 'Terhalang Cloudflare saat dicek — menunggu list manual dari kurator.',
    'loaded': 'List nama model tersedia.'
  };
  const listNote = p.modelListNote ? `<p>${esc(p.modelListNote)}</p>` : '';
  return `<section class="section"><h2>Dokumen legal</h2><div class="detail-actions">${legal}</div>${p.legalNote ? `<p>${esc(p.legalNote)}</p>` : ''}</section>
  <section class="section"><h2>Katalog model</h2>${counts.length ? `<table class="spec-table"><caption>Jumlah per kategori — catatan kurator</caption>${counts.map(([k,v])=>`<tr><td>${esc(k)}</td><td>${esc(v)}</td></tr>`).join('')}</table>` : ''}<p>${esc(labels[p.modelListStatus] || labels['awaiting-source'])}</p>${listNote}${p.modelList && p.modelList.length ? `<ul>${p.modelList.map(m=>`<li>${esc(m)}</li>`).join('')}</ul>` : ''}</section>`;
}
