<h1>Berikut langkah-langkah dalam set up project:</h1>

<h2>Set up Database:</h2>
<ul>
<li>Buka aplikasi XAMPP untuk menjalankan database</li>
<li>Pada Bagian Actions, <code>start</code> Apache dan juga <code>start</code> MySQL</li>
<li>untuk memastikan server database sudah berjalan, buka <a>http://localhost/phpmyadmin/</a> pada browser</li>
<li>apabila terdapat database dengan nama <code>winnicode</code>, mohon untuk merename-nya atau menghapusnya terlebih dahulu agar tidak bentrok dengan DB yang saya buat.</li>
</ul>

<h2>Clone atau Unduh Zip Project</h2>
<h3>clone</h3>
<ul>
<li>Buka terminal computer anda</li>
<li>Arahkan ke folder tempat anda ingin menyimpan project</li>
<li>Pada terminal jalankan perintah: <code>git clone <a>https://github.com/ghulammf/news-portal-app.git</a></code></li>
</ul>

<b>Unduh Zip</b>

- buka link : https://github.com/ghulammf/news-portal-app.git
- Click button <button style="background-color: green">code</button>, lalu unduh zip
- setelah terunduh, extract atau unzip di direktori anda mengunduh project

<h2>Set Up Backend Project</h2>

- buka terminal, masuk kedalam folder backend, ex: <code>C:\path\path\news-portal-app\server</code>
- jalankan perintah: <code>npm install</code>
- jalankan perintah: <code>npx prisma migrate dev</code>
- buka Kembali laman http://localhost/phpmyadmin/ untuk memastikan DB <code>winnicode</code> sudah tergenerate
- jalankan perintah: <code>npm run dev</code>
- jika aplikasi backend sudah berjalan, akan muncul pesan: <code>App runs on http://localhost:7000</code>

<h2>Set Up Frontend Project</h2>

- buka terminal, masuk kedalam folder frontend, ex: <code>C:\path\path\news-portal-app\client</code>
- jalankan perintah: <code>npm install</code>
- jalankan perintah: <code>npm run dev</code>
- buka browser, masukkan link : http://localhost:5173/

<i>------- Aplikasi berhasil dijalankan -------</i>

apabila ada kendala, WA: 089518816016
