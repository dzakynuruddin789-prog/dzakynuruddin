# Portofolio Website — Fresh Graduate (Teknologi Pembelajaran)

Website statis (HTML, CSS, JS murni — tanpa build tool) siap deploy ke GitHub Pages.

## 📁 Struktur File
```
portfolio-website/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── script.js
├── images/        (kosong — taruh foto Anda di sini)
└── README.md
```

## 🚀 Cara Upload ke GitHub

1. Buat repository baru di GitHub, misal `portofolio-saya`.
2. Buka repo tersebut → klik **Add file → Upload files**.
3. **Drag and drop seluruh isi folder** `portfolio-website` (bukan folder itu sendiri, tapi isinya: `index.html`, folder `css`, folder `js`, dst).
4. Klik **Commit changes**.

## 🌐 Aktifkan GitHub Pages
1. Di repo, buka tab **Settings → Pages**.
2. Pada bagian **Branch**, pilih `main` dan folder `/root`, lalu **Save**.
3. Tunggu 1–2 menit, website akan online di:
   `https://username-anda.github.io/nama-repo/`

## ✍️ Yang Perlu Diganti Sebelum Publish
Cari komentar `<!-- GANTI ... -->` di `index.html` dan teks berikut, lalu sesuaikan:
- **Nama Anda** → ganti di semua tempat (Navbar, Hero, About, Footer)
- **[Nama Prodi]**, **[Nama Universitas]**, **[Nama Sekolah]** → data pendidikan asli
- **Foto profil** → taruh file foto di folder `images/`, lalu ganti `<div class="hero__photo">...</div>` dan `<div class="about__photo">...</div>` dengan tag `<img src="images/nama-file.jpg" alt="...">`
- **Link CV, LinkedIn, Instagram, GitHub, WhatsApp, Email** → cari `href="#"` di bagian Navbar, Contact, dan Footer
- **Isi Projects** → ganti judul, deskripsi, dan link `href="#"` tiap card dengan karya asli Anda (link Google Drive/Canva/YouTube)
- **Timeline Experience & Education** → sesuaikan riwayat pendidikan dan pengalaman Anda

## 📬 Catatan Form Kontak
Form kontak saat ini hanya validasi di sisi browser (belum terhubung ke email sungguhan, karena situs ini statis tanpa server). Untuk membuatnya benar-benar mengirim email, hubungkan ke layanan gratis seperti:
- [Formspree](https://formspree.io/)
- [EmailJS](https://www.emailjs.com/)

Lihat komentar `NOTE` di `js/script.js` bagian `CONTACT FORM VALIDATION` untuk titik integrasinya.

## 🎨 Design System
- **Warna:** Deep Emerald `#007A63`, Primary Emerald `#00A884`, Mint Soft `#B8F2E6`, Deep Navy `#0F172A`, Off-White `#F1F5F9`
- **Font:** Lato (Google Fonts)
- **Ikon:** RemixIcon (CDN)
- **Animasi scroll:** AOS (Animate on Scroll, via CDN)

Semua warna sudah diatur lewat CSS variable di bagian atas `css/style.css` (`:root`), jadi kalau mau ubah palet, cukup edit di satu tempat itu.
