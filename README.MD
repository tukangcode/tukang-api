# Tukang API: Direktori & Tracker Penjual Layanan AI dan Tools

Direktori terkurasi untuk penjual **API AI** dan layanan terkait di Indonesia: source code, server stress tester, monitoring software, dan tools OSINT. Tujuannya sederhana: **pembeli tahu siapa yang bisa dipercaya, penjual punya tempat terdaftar yang jelas.**

🌐 Index toko: **https://tukangcode.github.io/tukang-api**

---

## Kenapa ada project ini?

Untuk membantu yang butuh dan yang mau berjual dan semacma tracker,. Kalau akun kena ban, penjual hilang, atau ada komplain, pembeli tidak punya tempat mengadu jika shop kabur dan exit scam. Project ini memastikan setiap toko terdaftar punya:

- jalur komunikasi cadangan,
- kebijakan refund yang jelas,
- identitas toko yang bisa dilacak,
- batasan penggunaan produk yang tertulis.

---

## Kategori yang Diterima

| Kode | Kategori | Contoh |
|------|----------|--------|
| `api` | API AI | LLM, TTS, image gen, embedding, dll |
| `source-code` | Source code | Script, bot, template web, aplikasi |
| `stresser` | Server stress tester | Load/stress testing untuk server **milik sendiri atau yang sudah diizinkan** |
| `monitoring` | Monitoring software | Uptime monitor, log/metrics, alerting, dashboard server |
| `osint` | OSINT tools | Pengumpulan & analisis **data publik** (riset, jurnalistik, verifikasi) |
| `other` | Layanan terkait lainnya | Hosting, setup server, jasa integrasi, dll |

---

## Syarat Umum (Semua Kategori)

| # | Syarat | Keterangan |
|---|--------|------------|
| 1 | **Kontak alternatif selain FB** | Grup/contact Telegram atau WhatsApp. Komplain bisa langsung disampaikan ke penjual di grup tersebut. |
| 2 | **Kebijakan refund yang jelas** | Tertulis: kondisi yang bisa di-refund, kondisi yang tidak, dan batas waktu proses. |
| 3 | **Kebijakan penggunaan (Acceptable Use)**  
| 4 | **Terdaftar lewat GitHub Issue** | Daftar via [issue di repo ini](https://github.com/tukangcode/tukang-api/issues) dengan data lengkap sesuai kategori. |

> **Catatan:** Toko yang **sudah di-approve Admin** dan **sudah pernah dipakai/dites** boleh masuk lebih dulu. Toko **baru** wajib memenuhi semua syarat sebelum di-index.

---

## Syarat Tambahan per Kategori

### `api`: API AI
- Cantumkan model/layanan yang dijual, satuan harga (per token/request/paket), dan batas rate limit.
- Jelaskan kebijakan jika upstream mati (kompensasi/refund).

### `source-code`: Source Code
- **Wajib disclaimer AI.** Penjual harus menyatakan salah satu:
  - `Buatan manusia`: ditulis sendiri tanpa bantuan AI generatif.
  - `Dibantu AI`: sebagian dibuat/dibantu AI, lalu direview dan diedit penjual.
  - `Dominan AI`: sebagian besar dihasilkan AI.
- Pernyataan ini **ditampilkan di halaman toko**. Menyembunyikan atau berbohong soal ini = suspend.
- Wajib cantumkan **lisensi** (MIT, GPL, proprietary, dll) dan apa saja yang termasuk dalam pembelian (update, support).
- Wajib ada **demo, screenshot, atau repo preview** supaya pembeli bisa menilai kualitas.
- Dilarang menjual kode curian, bocoran, hasil crack, atau kode yang melanggar lisensi pihak lain.

### `stresser`: Server Stress Tester
> ⚠️ **Hanya untuk legal test.** Menguji server **milik sendiri** atau yang **sudah memberi izin tertulis**.

- Wajib ada kebijakan tertulis bahwa pengguna hanya boleh menarget infrastruktur milik sendiri atau yang diizinkan.
- Wajib ada mekanisme **verifikasi kepemilikan target** (misal verifikasi domain/DNS/file token) atau pernyataan tanggung jawab pengguna yang jelas di ToS.
- Penjual harus bisa menjelaskan batas kapasitas/trafik dan **menghentikan akun** yang menarget pihak ketiga.
- Pemasaran harus berorientasi **load testing / kapasitas / ketahanan server**. Frasa seperti "bikin down", "tumbangkan situs", atau "serang" = langsung ditolak.

### `monitoring`: Monitoring Software
- Fokus pada pemantauan **server, aplikasi, jaringan, atau aset milik sendiri/organisasi**.
- Jelaskan data apa yang dikumpulkan, disimpan di mana, dan siapa yang bisa mengaksesnya.

### `osint`: OSINT Tools
- Penjual wajib mengingatkan pengguna soal kepatuhan terhadap hukum yang berlaku, termasuk UU Pelindungan Data Pribadi.

---

## Dilarang Total (Semua Kategori)

Produk atau layanan berikut **tidak akan di-index**, apa pun kemasannya:

- Deepnude,deepfake,Ransomware
- Phishing kit, spoofing, atau alat penipuan lainnya
- Alat atau layanan yang dipasarkan untuk menyerang, merusak, atau mengakses sistem tanpa izin
- Data bocoran, akun curian, carding, atau jual-beli data pribadi
- Software crack/pembajakan
- Mining Script, Drainer wallet

Pemasaran dengan bahasa yang mengarah ke hal di atas cukup jadi alasan untuk ditolak.

---

## Cara Daftar

1. Buka [Issues](https://github.com/tukangcode/tukang-api/issues) → **New Issue**.
2. Pilih template sesuai kategori (atau salin dari bawah) dan isi semua field.
3. Tunggu review Admin. Admin menandai issue dengan label status.
4. Setelah lolos, toko muncul di **tukangcode.github.io/tukang-api**.

Alur dasarnya sama untuk semua kategori. Bedanya, kategori selain API punya **field tambahan wajib** dan **langkah review ekstra** (lihat bawah).

### Bagian Umum (Semua Kategori)

```markdown
**Judul issue:** [DAFTAR][kategori] Nama Shop

## Kategori
(api / source-code / stresser / monitoring / osint / other)

## Nama Shop
...

## Owner
(nama / nickname owner, link profil FB kalau ada)

## Kontak Alternatif (wajib, selain FB)
- [ ] Grup Telegram: https://t.me/...
- [ ] Grup WhatsApp: https://chat.whatsapp.com/...

## Daftar Produk
- Produk 1
- Produk 2

## Daftar Harga
| Produk | Harga | Satuan/Paket |
|--------|-------|--------------|
|        |       |              |

## Kebijakan Toko
- Metode pembayaran:
- Garansi / SLA:
- Kebijakan refund (wajib jelas):

## Kebijakan Penggunaan (Acceptable Use, wajib)
(pernyataan bahwa produk hanya untuk penggunaan legal + larangan yang berlaku)

## Tentang
(deskripsi singkat toko, sudah berapa lama jualan)

## Bukti (opsional)
(testimoni, screenshot, channel testimoni)
```

### Tambahan untuk `source-code`

```markdown
## Disclaimer AI (wajib)
- [ ] Buatan manusia
- [ ] Dibantu AI (direview/diedit penjual)
- [ ] Dominan AI
Keterangan tambahan:

## Lisensi
(MIT / GPL / proprietary / lainnya)

## Isi Pembelian
(source code lengkap? update? support? berapa lama?)

## Demo / Preview
(link demo, screenshot, atau repo preview)

## Pernyataan Keaslian
- [ ] Saya menyatakan kode ini bukan hasil curian/crack/bocoran dan tidak melanggar lisensi pihak lain
```

### Tambahan untuk `stresser`

```markdown
## Tujuan Penggunaan
(load testing / capacity planning / uji ketahanan server)

## Pembatasan Target (wajib)
- [ ] Hanya untuk server milik sendiri atau yang sudah mendapat izin tertulis
- Mekanisme verifikasi kepemilikan target:

## Batas Kapasitas
(maks. trafik/durasi/concurrency per paket)

## Penanganan Penyalahgunaan
(apa yang dilakukan jika akun menarget pihak ketiga)
```


## Aturan Main

- Data di issue harus **benar**. Info palsu = langsung di-reject/suspend.
- Toko yang tidak aktif atau kontak alternatifnya mati akan ditandai atau dihapus dari index.
- For god sake use you mind.

---

## Disclaimer

Project ini adalah **direktori**, bukan pihak yang menjual atau menjamin transaksi. Listing berarti toko memenuhi syarat dokumentasi di atas, **bukan jaminan mutlak**. Pengguna bertanggung jawab penuh atas cara memakai produk yang dibeli dan wajib mematuhi hukum yang berlaku. Mulailah dari paket kecil dulu.

---

## Kontribusi & Laporan

Laporan penipuan, penyalahgunaan, toko mati, atau saran perbaikan? Buka [issue](https://github.com/tukangcode/tukang-api/issues) dengan label `report` atau `suggestion`.
