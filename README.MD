# Tukang API: Direktori & Tracker Penjual API AI

Direktori terkurasi untuk penjual API AI (LLM, TTS, image gen, dll) dan layanan terkait di Indonesia. Tujuannya sederhana: **pembeli tahu siapa yang bisa dipercaya, penjual punya tempat terdaftar yang jelas.**

🌐 Index toko: **https://tukangcode.github.io/tukang-api**

---

## Kenapa ada project ini?

Banyak penjual API AI jualan lewat Facebook saja. Kalau akun kena ban, penjual hilang, atau ada komplain, pembeli tidak punya tempat mengadu. Project ini memastikan setiap toko yang terdaftar punya:

- jalur komunikasi cadangan,
- kebijakan refund yang jelas,
- identitas toko yang bisa dilacak.

---

## Syarat Toko Terdaftar

Semua toko wajib memenuhi **ketiga** syarat ini:

| # | Syarat | Keterangan |
|---|--------|------------|
| 1 | **Kontak alternatif selain FB** | Grup Telegram atau WhatsApp. Komplain bisa langsung disampaikan ke penjual di grup tersebut. |
| 2 | **Kebijakan refund yang jelas** | Tertulis: kondisi yang bisa di-refund, kondisi yang tidak, dan batas waktu proses. |
| 3 | **Terdaftar lewat GitHub Issue** | Daftar via [issue di repo ini](https://github.com/tukangcode/tukang-api/issues) dengan data lengkap (lihat template di bawah). |

> **Catatan:** Toko yang **sudah di-approve Admin** dan **sudah pernah dipakai/dites** boleh masuk lebih dulu. Toko **baru** yang ingin jualan wajib memenuhi semua syarat di atas sebelum di-index.

---

## Cara Daftar

1. Buka [Issues](https://github.com/tukangcode/tukang-api/issues) → **New Issue**.
2. Salin template di bawah, isi semua field.
3. Tunggu review Admin. Admin akan menandai issue dengan label status.
4. Setelah lolos, toko otomatis muncul di **tukangcode.github.io/tukang-api**.

### Template Issue

```markdown
**Judul issue:** [DAFTAR] Nama Shop

## Nama Shop
...

## Owner
(nama / nickname owner, dan link profil FB kalau ada)

## Kontak Alternatif (wajib, selain FB)
- [ ] Grup Telegram: https://t.me/...
- [ ] Grup WhatsApp: https://chat.whatsapp.com/...

## Daftar Produk
- Produk 1 (contoh: API GPT/Claude/Gemini, TTS, image gen)
- Produk 2

## Daftar Harga
| Produk | Harga | Satuan/Paket |
|--------|-------|--------------|
|        |       |              |

## Kebijakan Toko
- Metode pembayaran:
- Garansi / SLA:
- Kebijakan refund (wajib jelas):
- Larangan / batasan pemakaian:

## Tentang
(deskripsi singkat toko, sudah berapa lama jualan, dll)

## Bukti (opsional tapi membantu)
(testimoni, screenshot, link channel testimoni)
```

---

## Proses Review

| Status | Arti |
|--------|------|
| `pending` | Issue masuk, belum direview |
| `needs-info` | Data belum lengkap (misal refund policy belum jelas) |
| `testing` | Admin sedang mencoba layanan toko |
| `approved` | Lolos, masuk index |
| `rejected` | Tidak memenuhi syarat |
| `suspended` | Sebelumnya terdaftar, ditangguhkan karena komplain/pelanggaran |

---

## Aturan Main

- Data di issue harus **benar**. Info palsu = langsung di-reject/suspend.
- Penjual wajib **menanggapi komplain** di grup alternatif. Toko yang sering mengabaikan komplain bisa di-suspend.
- Perubahan harga/kebijakan: update lewat **edit issue** atau komentar di issue toko masing-masing.
- Toko yang tidak aktif atau kontak alternatifnya mati akan ditandai atau dihapus dari index.

---

## Disclaimer

Project ini adalah **direktori**, bukan pihak yang menjual atau menjamin transaksi. Listing berarti toko memenuhi syarat dokumentasi di atas, **bukan jaminan mutlak**. Tetap lakukan transaksi dengan hati-hati, misalnya mulai dari paket kecil dulu.

---

## Kontribusi

Laporan penipuan, toko mati, atau saran perbaikan? Buka [issue](https://github.com/tukangcode/tukang-api/issues) dengan label `report` atau `suggestion`.
