# Monitoring Izin

Aplikasi web (HTML/CSS/JavaScript murni, tanpa build) untuk memantau tahapan permohonan izin usaha ketenagalistrikan (IUPTLS dan IUJPTL): 7 tahap proses, input data teknis perusahaan, dan export CSV / Excel / PDF.

## Struktur

```
monitoring-izin/
├── index.html      # halaman utama
├── css/style.css   # tampilan
├── js/app.js       # logika aplikasi
├── assets/logo.jpg # logo latar login & sidebar
└── README.md
```

## Menjalankan secara lokal

Buka `index.html` di browser, atau jalankan server statis:

```bash
python3 -m http.server 8000
# lalu buka http://localhost:8000
```

## Publikasi di GitHub Pages

1. Buat repository baru di github.com, lalu upload seluruh isi folder ini (pastikan `index.html` berada di root repo).
2. Buka **Settings → Pages**.
3. Pada **Build and deployment**, pilih **Deploy from a branch**, branch `main`, folder `/ (root)`, lalu **Save**.
4. Tunggu beberapa menit. Alamat aplikasi: `https://<username>.github.io/<nama-repo>/`.

## Akun demo

| Username | Kata sandi | Peran |
|----------|-----------|-------|
| admin    | admin123  | Admin (OSS) |
| dpmptsp  | dpmptsp123 | Dinas DPMPTSP |
| esdm     | esdm123   | Dinas ESDM |

> **Penting:** login ini hanya simulasi di sisi browser. Username dan kata sandi tertulis di `js/app.js` dan bisa dibaca siapa pun yang membuka repo atau situs. Jangan gunakan untuk data rahasia atau kata sandi sungguhan. Untuk pemakaian nyata, gunakan backend dengan autentikasi sungguhan.

## Penyimpanan data

- Data disimpan di `localStorage` browser masing-masing pengguna. Data tidak dibagikan antar perangkat atau pengguna.
- **Backup Data** mengunduh file `.json`; **Pulihkan Data** (khusus admin) memuatnya kembali.
- Menghapus data situs/cache browser akan menghapus data lokal, jadi lakukan backup berkala.

## Ketergantungan

Export Excel dan PDF memuat pustaka ExcelJS, jsPDF, dan jsPDF-AutoTable dari cdnjs saat dipakai, sehingga memerlukan koneksi internet.
