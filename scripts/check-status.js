/* ===== Cek status website provider =====
 * Dijalankan oleh GitHub Actions (cron tiap 30 menit) — BUKAN oleh browser pengunjung.
 * Prinsip ramah: tepat 1 request per situs (HEAD dulu; kalau ditolak, fallback 1 GET),
 * timeout 15 detik, semua situs paralel. Total: 16 request per run.
 * Output: JSON ke stdout -> disimpan sebagai js/status.json
 */
const PROVIDERS = require("../js/data.js");

const TIMEOUT_MS = 15000;
const UA = "Mozilla/5.0 (compatible; ai-provider-hub-status-bot/1.0; +https://github.com/tukangcode/tukang-api)";

async function probe(url) {
  // Coba HEAD dulu (paling ringan). Beberapa server menolak HEAD -> fallback GET.
  for (const method of ["HEAD", "GET"]) {
    try {
      const res = await fetch(url, {
        method,
        redirect: "follow",
        headers: { "User-Agent": UA },
        signal: AbortSignal.timeout(TIMEOUT_MS),
      });
      if (res.ok) return "up";           // 200-399 = hidup
      if (method === "HEAD") continue;   // ditolak? coba GET sekali
      return "down";
    } catch {
      if (method === "HEAD") continue;   // error jaringan/timeout? coba GET sekali
      return "down";
    }
  }
  return "down";
}

(async () => {
  const out = {
    checked_at: new Date().toISOString(),
    source: "github-actions",
    note: "1 request per situs per run (30 menit). Bukan pemantauan model/ketersediaan layanan.",
    sites: {},
  };
  await Promise.all(
    PROVIDERS.map(async (p) => {
      out.sites[p.id] = await probe(p.url);
      console.error(`[status] ${p.id}: ${out.sites[p.id]}`);
    })
  );
  console.log(JSON.stringify(out, null, 2));
})();
