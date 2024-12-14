<h1>Winnicode News Portal App</h1>

<h2>Deskripsi Project</h2>
Winnicode News Protal App merupakan project aplikasi portal berita, yang dimana user dapat membuat dan juga membaca berita.

Project diatas dibuat menggunakan teknologi seperti Nodejs Express sebagai backend, MySQL sebagai database, Prisma sebagai ORM, dan juga Reactjs sebagai Fronted.

Beberapa fitur yang dapat digunakan dalam aplikasi meliputi:

- Otentikasi dan otorisasi user
- Register user
- Login user
- CRUD konten berita
- Query by Kategori

Isi dari konten berita yang ditampilan diantaranya:

- Judul berita
- Gambar berita
- Author beserta tanggal dibuat
- Isi berita
- Kategori

...

<h2>Langkah-langkah Set up Project</h2>

<h3>Set up Database:</h3>

- Buka aplikasi XAMPP untuk menjalankan database
- Pada Bagian Actions, <code>start</code> Apache dan juga <code>start</code> MySQL
- untuk memastikan server database sudah berjalan, buka http://localhost/phpmyadmin/ pada browser
- apabila terdapat database dengan nama <code>winnicode</code>, mohon untuk merename-nya atau menghapusnya terlebih dahulu agar tidak bentrok dengan DB yang saya buat.

<h3>Clone atau Unduh Zip Project</h3>
<b>Clone</b>

- Buka terminal computer anda
- Arahkan ke folder tempat anda ingin menyimpan project
- Pada terminal jalankan perintah: <code>git clone https://github.com/ghulammf/news-portal-app.git</code>

<b>Unduh Zip</b>

- buka link : https://github.com/ghulammf/news-portal-app.git
- Click button <button>code</button>, lalu unduh zip
- setelah terunduh, extract atau unzip di direktori anda mengunduh project

<h3>Set Up Backend Project</h3>

- buka terminal, masuk kedalam folder backend, ex: <code>C:\path\path\news-portal-app\server</code>
- jalankan perintah: <code>npm install</code>
- jalankan perintah: <code>npx prisma migrate dev</code>
- buka Kembali laman http://localhost/phpmyadmin/ untuk memastikan DB <code>winnicode</code> sudah tergenerate
- jalankan perintah: <code>npm run dev</code>
- jika aplikasi backend sudah berjalan, akan muncul pesan: <code>App runs on http://localhost:7000</code>

<h3>Set Up Frontend Project</h3>

- buka terminal, masuk kedalam folder frontend, ex: <code>C:\path\path\news-portal-app\client</code>
- jalankan perintah: <code>npm install</code>
- jalankan perintah: <code>npm run dev</code>
- buka browser, masukkan link : http://localhost:5173/

<i>------- Aplikasi berhasil dijalankan -------</i>

apabila ada kendala, WA: 089518816016
