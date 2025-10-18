# Praktikum Pemrograman Aplikasi Web
## Aplikasi Manajemen Tugas Mahasiswa

**Nama:** Muhammad Nurikhsan  
**NIM:** 123140057

---

## Deskripsi Aplikasi

Aplikasi Manajemen Tugas Mahasiswa adalah aplikasi web sederhana yang dirancang untuk membantu mahasiswa mengorganisir dan mengelola tugas-tugas kuliah mereka secara efisien. Aplikasi ini menyediakan antarmuka yang bersih dan intuitif dengan fitur lengkap CRUD (Create, Read, Update, Delete) untuk manajemen tugas akademik.

---

## Fitur-Fitur Utama

### 1. Manajemen Tugas
- **Tambah Tugas:** Menambahkan tugas baru dengan informasi lengkap (nama tugas, mata kuliah, deadline)
- **List Tugas:** Menampilkan daftar semua tugas dengan tampilan yang terorganisir
- **Edit Tugas:** Mengubah informasi tugas yang sudah ada
- **Hapus Tugas:** Menghapus tugas yang sudah tidak diperlukan

### 2. Penyimpanan Data Lokal
- Data tersimpan secara permanen menggunakan **localStorage**
- Data tetap ada meskipun browser ditutup
- Otomatis memuat data saat aplikasi dibuka kembali
- Tidak memerlukan koneksi internet atau server

### 3. Validasi Form
- Nama tugas tidak boleh kosong
- Mata kuliah harus dipilih dari dropdown
- Deadline harus diisi dan tidak boleh di masa lalu
- Error message yang jelas untuk setiap kesalahan input
- Visual feedback dengan border merah pada input yang error

### 4. Filter & Pencarian
- **Pencarian Real-time:** Cari tugas berdasarkan nama atau mata kuliah
- **Filter Status:** Tampilkan semua tugas, hanya yang selesai, atau hanya yang belum selesai
- **Filter Mata Kuliah:** Filter tugas berdasarkan mata kuliah tertentu
- Kombinasi filter yang fleksibel

### 5. Statistik dan Monitoring
- Total jumlah tugas yang terdaftar
- Jumlah tugas yang sudah diselesaikan
- Jumlah tugas yang masih pending
- Update statistik secara real-time

### 6. Status Tugas dan Notifikasi
- Tombol toggle untuk menandai tugas selesai/belum selesai
- Visual strikethrough untuk tugas yang sudah selesai
- Background hijau untuk tugas completed
- **Badge urgent** dengan warna merah untuk deadline yang mendekat (3 hari atau kurang)
- Label "(Mendesak)" untuk tugas dengan deadline dekat

---

## Cara Menjalankan Aplikasi

### Persiapan
1. Download atau clone repository
2. Pastikan semua file ada dalam folder `src/`:
   - `MuhammadNurikhsan_123140057.html` (atau sesuai nama Anda)
   - `style.css`
   - `script.js`
3. Buka file HTML menggunakan browser modern (Chrome, Firefox, Edge)

### Menambah Tugas Baru
1. Klik tombol **"+ Tambah Tugas"** di pojok kanan atas
2. Modal form akan muncul
3. Isi informasi tugas:
   - **Nama Tugas:** Contoh "Membuat Laporan Praktikum"
   - **Mata Kuliah:** Pilih dari dropdown (Jaringan Komputer, Interaksi Desain, Pengembangan Aplikasi Web, Metodologi Penelitian, Sistem Informasi)
   - **Deadline:** Pilih tanggal menggunakan date picker
4. Klik tombol **"Simpan Tugas"**
5. Tugas baru akan muncul di daftar

### Menandai Tugas Selesai
1. Cari tugas yang ingin ditandai selesai
2. Klik tombol hijau dengan icon **✓** (checkmark)
3. Icon akan berubah menjadi **↩** (undo)
4. Background tugas berubah menjadi hijau muda
5. Nama tugas akan ter-strikethrough
6. Statistik akan terupdate otomatis

### Mengedit Tugas
1. Klik tombol kuning dengan icon **✎** (pensil) pada tugas yang ingin diedit
2. Modal form akan muncul dengan data tugas yang sudah terisi
3. Ubah informasi yang diperlukan
4. Klik **"Simpan Tugas"** untuk menyimpan perubahan

### Menghapus Tugas
1. Klik tombol merah dengan icon **×** (silang) pada tugas
2. Konfirmasi penghapusan akan muncul
3. Klik **"OK"** untuk menghapus atau **"Batal"** untuk membatalkan

### Mencari Tugas
1. Gunakan kotak pencarian di bagian atas daftar tugas
2. Ketik kata kunci (nama tugas atau mata kuliah)
3. Hasil akan ter-filter secara real-time
4. Pencarian bersifat case-insensitive

### Memfilter Tugas
1. **Filter Status:** Pilih dropdown status
   - Semua Status
   - Belum Selesai
   - Selesai
2. **Filter Mata Kuliah:** Pilih dropdown mata kuliah
   - Semua Mata Kuliah
   - [Mata kuliah yang ada di tugas]
3. Filter dapat dikombinasikan dengan pencarian

---

## Screenshot Aplikasi

### 1. Dashboard Utama
Menampilkan:
- Header dengan judul aplikasi dan tombol "Tambah Tugas"
- Tiga card statistik (Total, Belum Selesai, Selesai)
- Filter pencarian dan dropdown filter
- Daftar tugas dengan badge mata kuliah dan deadline
- Badge urgent berwarna merah untuk deadline yang mendekat
- Tombol aksi (Check, Edit, Delete) untuk setiap tugas

![Dashboard](Dashboard.png)

### 2. Form Tambah/Edit Tugas
Menampilkan:
- Modal overlay dengan background gelap
- Form input dengan tiga field (Nama Tugas, Mata Kuliah, Deadline)
- Dropdown mata kuliah dengan 5 pilihan yang sudah tersedia
- Date picker untuk memilih deadline
- Error messages yang muncul saat validasi gagal
- Tombol "Simpan Tugas" dan "Batal"

![Form](Form.png)

### 3. Filter dan Status Tugas
Menampilkan:
- Hasil filter berdasarkan status atau mata kuliah
- Tugas dengan status selesai (background hijau, text strikethrough)
- Tugas dengan deadline mendekat (badge merah dengan label "Mendesak")
- Fungsi pencarian yang aktif
- Kombinasi berbagai filter

![Filter Tugas](FilterTugas.png)

---

## Teknologi yang Digunakan

### Frontend
- **HTML5:** Struktur dan markup aplikasi
- **CSS3:** Styling, layout, dan design responsive
  - Grid Layout untuk statistik dan filter
  - Flexbox untuk task items
  - Modal overlay
  - Responsive design untuk mobile
- **Vanilla JavaScript (ES6+):** Logika aplikasi dan interaktivitas
  - Arrow functions
  - Template literals
  - Array methods (map, filter, find)
  - Spread operator

### Storage
- **localStorage API:** Penyimpanan data permanen di browser
  - Menyimpan array tugas dalam format JSON
  - Kapasitas ~5-10MB
  - Data persisten antar session

### Design Patterns
- **Responsive Design:** Tampilan optimal di semua ukuran layar
- **Mobile-First Approach:** Prioritas pengalaman mobile
- **Component-Based Structure:** Organisasi kode yang modular
- **Event-Driven Programming:** Interaksi berbasis event listener

---

## Penjelasan Teknis

### 1. Implementasi localStorage

#### Menyimpan Data
```javascript
// Fungsi untuk menyimpan tugas ke localStorage
function simpanKeStorage() {
    localStorage.setItem('daftarTugas', JSON.stringify(daftarTugas));
}
```

**Cara Kerja:**
- Menggunakan `localStorage.setItem()` untuk menyimpan data
- Data array dikonversi ke JSON string dengan `JSON.stringify()`
- Key yang digunakan: `'daftarTugas'`
- Otomatis dipanggil setiap ada perubahan data (tambah, edit, hapus, toggle)

#### Memuat Data
```javascript
// Fungsi untuk memuat tugas dari localStorage
function muatTugas() {
    const tugasTersimpan = localStorage.getItem('daftarTugas');
    if (tugasTersimpan) {
        daftarTugas = JSON.parse(tugasTersimpan);
    }
    tampilkanTugas();
    perbaruiStatistik();
    perbaruiFilterMataKuliah();
}
```

**Cara Kerja:**
- Menggunakan `localStorage.getItem()` untuk mengambil data
- JSON string diparse kembali ke array dengan `JSON.parse()`
- Dipanggil saat aplikasi pertama kali dimuat (fungsi `inisialisasi()`)
- Melakukan pengecekan apakah data exist dengan if statement
- Setelah load data, langsung update UI (tampil tugas, statistik, filter)

### 2. Validasi Form

```javascript
function validasiForm() {
    hapusError();
    let valid = true;

    const nama = document.getElementById('namaTugas').value.trim();
    const mataKuliah = document.getElementById('mataKuliahTugas').value;
    const deadline = document.getElementById('deadlineTugas').value;

    // Validasi nama tugas
    if (!nama) {
        document.getElementById('errorNama').style.display = 'block';
        document.getElementById('namaTugas').classList.add('error');
        valid = false;
    }

    // Validasi mata kuliah
    if (!mataKuliah) {
        document.getElementById('errorMataKuliah').style.display = 'block';
        document.getElementById('mataKuliahTugas').classList.add('error');
        valid = false;
    }

    // Validasi deadline (tidak boleh masa lalu)
    if (!deadline) {
        document.getElementById('errorDeadline').style.display = 'block';
        document.getElementById('deadlineTugas').classList.add('error');
        valid = false;
    } else {
        const tanggalDipilih = new Date(deadline);
        const hariIni = new Date();
        hariIni.setHours(0, 0, 0, 0);
        
        if (tanggalDipilih < hariIni) {
            document.getElementById('errorDeadline').style.display = 'block';
            document.getElementById('deadlineTugas').classList.add('error');
            valid = false;
        }
    }

    return valid;
}
```

**Fitur Validasi:**
- Real-time feedback dengan border merah pada input error
- Pesan error spesifik untuk setiap jenis kesalahan
- Validasi tanggal untuk memastikan deadline tidak di masa lalu
- Menggunakan `.trim()` untuk menghapus whitespace di awal dan akhir input
- Clear semua error sebelum validasi ulang dengan fungsi `hapusError()`
- Return boolean untuk mencegah form submit jika ada error

**Logika Validasi Tanggal:**
- Mengkonversi input deadline ke object Date
- Set jam hari ini ke 00:00:00 agar perbandingan hanya berdasarkan tanggal
- Bandingkan tanggal yang dipilih dengan hari ini
- Jika tanggal dipilih < hari ini, tampilkan error

### 3. Filter dan Pencarian

```javascript
function dapatkanTugasTerfilter() {
    const kataKunci = document.getElementById('inputPencarian').value.toLowerCase();
    const filterStatus = document.getElementById('filterStatus').value;
    const filterMataKuliah = document.getElementById('filterMataKuliah').value;

    return daftarTugas.filter(tugas => {
        const cocokPencarian = tugas.nama.toLowerCase().includes(kataKunci) ||
                              tugas.mataKuliah.toLowerCase().includes(kataKunci);
        const cocokStatus = filterStatus === 'semua' || 
                           (filterStatus === 'selesai' && tugas.selesai) ||
                           (filterStatus === 'belumSelesai' && !tugas.selesai);
        const cocokMataKuliah = filterMataKuliah === 'semua' || 
                               tugas.mataKuliah === filterMataKuliah;
        
        return cocokPencarian && cocokStatus && cocokMataKuliah;
    });
}
```

**Cara Kerja:**
1. Mengambil nilai dari input pencarian dan dropdown filter
2. Menggunakan `Array.filter()` untuk menyaring tugas
3. Kombinasi AND logic (&&) untuk semua kriteria filter
4. Case-insensitive search dengan `toLowerCase()`
5. Real-time filtering dengan `oninput` event listener
6. Pencarian mencakup nama tugas DAN mata kuliah menggunakan OR logic (||)

**Update Real-time:**
- Fungsi `tampilkanTugas()` dipanggil setiap kali:
  - User mengetik di search box (`oninput`)
  - User mengubah filter status (`onchange`)
  - User mengubah filter mata kuliah (`onchange`)

### 4. Deteksi Deadline Mendekat

```javascript
function deadlineDekat(stringTanggal) {
    const deadline = new Date(stringTanggal);
    const hariIni = new Date();
    const selisihWaktu = deadline - hariIni;
    const selisihHari = Math.ceil(selisihWaktu / (1000 * 60 * 60 * 24));
    return selisihHari <= 3 && selisihHari >= 0;
}
```

**Cara Kerja:**
- Menghitung selisih waktu dalam milliseconds
- Konversi ke hari dengan rumus: `selisihWaktu / (1000 * 60 * 60 * 24)`
  - 1000 ms = 1 detik
  - 60 detik = 1 menit
  - 60 menit = 1 jam
  - 24 jam = 1 hari
- Menggunakan `Math.ceil()` untuk membulatkan ke atas
- Threshold: **3 hari atau kurang**
- Return true jika deadline <= 3 hari DAN belum lewat (>= 0)
- Digunakan untuk menampilkan badge urgent dan label "(Mendesak)"

**Visual Feedback:**
- Badge berubah dari kuning (`badge-deadline`) menjadi merah (`badge-urgent`)
- Muncul label "(Mendesak)" di samping tanggal
- Hanya muncul untuk tugas yang belum selesai

### 5. Format Tanggal

```javascript
function formatTanggal(stringTanggal) {
    const tanggal = new Date(stringTanggal);
    const bulan = ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 
                   'Jul', 'Agu', 'Sep', 'Okt', 'Nov', 'Des'];
    return `${tanggal.getDate()} ${bulan[tanggal.getMonth()]} ${tanggal.getFullYear()}`;
}
```

**Cara Kerja:**
- Mengkonversi string tanggal (format: YYYY-MM-DD) ke object Date
- Array `bulan` menyimpan nama bulan dalam Bahasa Indonesia
- `getMonth()` mengembalikan index 0-11, cocok dengan index array bulan
- Format output: "20 Okt 2025"
- Menggunakan template literals untuk string interpolation

### 6. Operasi CRUD

#### Create (Tambah Tugas)
```javascript
daftarTugas.push({
    id: Date.now(),
    nama,
    mataKuliah,
    deadline,
    selesai: false
});
```
- ID unik menggunakan timestamp (`Date.now()`)
- Object shorthand property (ES6)
- Default status: `selesai: false`

#### Read (Tampilkan Tugas)
```javascript
container.innerHTML = tugasTerfilter.map(tugas => `...`).join('');
```
- Menggunakan `Array.map()` untuk transform data ke HTML
- Template literals untuk string HTML
- `.join('')` untuk menggabungkan array string menjadi satu string

#### Update (Edit Tugas)
```javascript
const tugas = daftarTugas.find(t => t.id === idEdit);
Object.assign(tugas, { nama, mataKuliah, deadline });
```
- `Array.find()` untuk mencari tugas berdasarkan ID
- `Object.assign()` untuk update properties object

#### Delete (Hapus Tugas)
```javascript
daftarTugas = daftarTugas.filter(t => t.id !== id);
```
- `Array.filter()` untuk exclude tugas yang dihapus
- Membuat array baru tanpa tugas yang dihapus

### 7. Update Statistik Real-time

```javascript
function perbaruiStatistik() {
    const total = daftarTugas.length;
    const selesai = daftarTugas.filter(t => t.selesai).length;
    const belumSelesai = total - selesai;

    document.getElementById('statTotal').textContent = total;
    document.getElementById('statSelesai').textContent = selesai;
    document.getElementById('statBelumSelesai').textContent = belumSelesai;
}
```

Dipanggil setiap kali ada perubahan data:
- Menambah tugas baru
- Mengedit tugas
- Menghapus tugas
- Toggle status penyelesaian

### 8. Inisialisasi Mata Kuliah

```javascript
function muatDaftarMataKuliah() {
    const select = document.getElementById('mataKuliahTugas');
    select.innerHTML = '<option value="">-- Pilih Mata Kuliah --</option>';
    
    daftarMataKuliah.forEach(matkul => {
        const option = document.createElement('option');
        option.value = matkul;
        option.textContent = matkul;
        select.appendChild(option);
    });
}
```

**Cara Kerja:**
- Array `daftarMataKuliah` berisi 5 mata kuliah default
- Dipanggil saat inisialisasi aplikasi
- Membuat option element untuk setiap mata kuliah
- Menambahkan ke dropdown select

---

## Daftar Fitur yang Diimplementasikan

 **1. Menambahkan tugas baru** dengan nama, mata kuliah, dan deadline  
 **2. Menandai tugas** sebagai selesai/belum selesai  
 **3. Menghapus tugas** yang tidak diperlukan  
 **4. Filter berdasarkan status** (selesai/belum selesai)  
 **5. Filter berdasarkan mata kuliah**  
 **6. Pencarian tugas** berdasarkan nama atau mata kuliah  
 **7. Menampilkan jumlah tugas** yang belum selesai  
 **8. Validasi form lengkap** dengan error messages  
 **9. localStorage** untuk penyimpanan data permanen  
 **10. Edit/update tugas** yang sudah ada  
 **11. Notifikasi deadline mendekat** (badge urgent)  
 **12. Statistik real-time** (Total, Selesai, Belum Selesai)

---

## Struktur Data

### Object Tugas
```javascript
{
    id: 1634567890123,           // Timestamp unik
    nama: "Membuat Laporan",     // String
    mataKuliah: "Pemweb",        // String
    deadline: "2025-10-25",      // String (format YYYY-MM-DD)
    selesai: false               // Boolean
}
```

### Array Mata Kuliah
```javascript
[
    'Jaringan Komputer',
    'Interaksi Desain',
    'Pengembangan Aplikasi Web',
    'Metodologi Penelitian',
    'Sistem Informasi'
]
```

---

## Catatan Teknis

### LocalStorage
- Data tersimpan per browser (tidak sync antar device)
- Maximum storage: ~5-10MB (tergantung browser)
- Tidak ada backup otomatis ke cloud
- Data bisa hilang jika user clear browser data

### Validasi Deadline
- Menggunakan HTML5 date input dengan atribut `min`
- JavaScript validation sebagai fallback
- Format tanggal internal: YYYY-MM-DD (ISO 8601)

### Responsive Design
- Breakpoint: 768px untuk mobile
- Grid berubah menjadi 1 kolom di mobile
- Stack layout untuk task items di mobile

---

**Dibuat untuk memenuhi Tugas Praktikum Pemrograman Aplikasi Web**  
Institut Teknologi Sumatera