# Aplikasi Monitoring Perizinan Ketenagalistrikan

Aplikasi web statis (HTML, CSS, JavaScript) untuk memantau proses permohonan izin dalam 7 tahap,
dari Permohonan Masuk sampai Penerbitan Izin, serta mencatat data teknis perusahaan IUPTLS dan IUJPTL.

## Isi folder

| File | Fungsi |
|---|---|
| `index.html` | Kerangka halaman (login, taskbar kiri, tombol, kotak ringkasan, daftar permohonan, halaman Data IUPTLS/IUJPTL, jendela dialog) |
| `style.css` | Seluruh tampilan (warna, kotak, efek, tema terang/gelap) |
| `app.js` | Seluruh logika (login, data, tahapan, hak akses, filter, halaman data teknis, export Excel/PDF/CSV, backup) |
| `img/login-bg.jpg` | Foto latar halaman login dan taskbar |

## Cara menjalankan di komputer

Klik dua kali `index.html`. Aplikasi terbuka di browser (Chrome, Edge, atau Firefox).

## Cara memasang di GitHub Pages

1. Buat akun di github.com, lalu klik **New repository** dan beri nama, misalnya `monitoring-izin`.
2. Pilih **Public**, lalu klik **Create repository**.
3. Klik **uploading an existing file**, lalu tarik semua isi folder ini
   (`index.html`, `style.css`, `app.js`, dan folder `img`). Folder `img` harus ikut terunggah.
4. Klik **Commit changes**.
5. Buka **Settings > Pages**. Pada *Branch*, pilih `main` dan folder `/ (root)`, lalu klik **Save**.
6. Tunggu 1 sampai 3 menit. Alamat aplikasi muncul di halaman yang sama, bentuknya
   `https://NAMA-AKUN.github.io/monitoring-izin/`.

## Akun login contoh

| Username | Kata sandi | Hak akses |
|---|---|---|
| `admin` | `admin123` | Semua fitur |
| `dpmptsp` | `dpmptsp123` | Tahap Verifikasi Administrasi, Permohonan Lampiran Teknis, Penerbitan Izin |
| `esdm` | `esdm123` | Tahap Verifikasi Dokumen Teknis, Penerbitan Lampiran Teknis, Persetujuan Persyaratan; halaman Data IUPTLS dan Data IUJPTL |

Daftar akun ada di `app.js` (variabel `USERS`). Halaman Data IUPTLS dan Data IUJPTL hanya untuk `admin` dan `esdm`.

## Halaman Data IUPTLS dan Data IUJPTL

Dibuka dari taskbar kiri. Berisi daftar perusahaan sesuai jenis izin dan formulir input data teknis.
Lampiran teknis dan izin diisi berupa **link** (misalnya ke Google Drive).
Pada Data IUJPTL, pilihan Jenis Usaha, Bidang Usaha, Sub Bidang Usaha, dan Kualifikasi mengikuti
Permen ESDM No. 12 Tahun 2021 (variabel `JU` pada `app.js`; periksa kembali bila ada perubahan peraturan).
Struktur kolomnya ada di variabel `FT` pada `app.js`.

## Catatan penting

- **Data belum tersimpan permanen dan belum dibagikan antar pengguna.** Data contoh ada di `app.js`
  (variabel `D`). Perubahan yang dibuat petugas (termasuk data teknis) hilang saat halaman dimuat ulang, dan tiap komputer
  melihat datanya sendiri. GitHub Pages hanya menyajikan file statis, tidak menyediakan database.
  Untuk data bersama dan realtime, aplikasi perlu dihubungkan ke database (misalnya Supabase atau Firebase).
- **Login hanya untuk peragaan.** Akun dan kata sandi tertulis di `app.js` sehingga bisa dilihat siapa pun.
  Jangan dipakai untuk data asli sebelum login dipindah ke server.
- **Export Excel dan PDF** memuat komponen dari internet (cdnjs.cloudflare.com) saat tombolnya diklik,
  jadi perangkat harus online.
- **Backup Data** mengunduh data permohonan saat ini dalam file `.json`.
