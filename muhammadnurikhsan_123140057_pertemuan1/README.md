# Praktikum Pemrograman Aplikasi Web
## Aplikasi Manajemen Tugas Mahasiswa

**Nama:** Muhammad Nurikhsan  
**NIM:** 123140057

---

## Deskripsi Aplikasi

Aplikasi web sederhana untuk membantu mahasiswa mengelola tugas-tugas kuliah dengan fitur CRUD lengkap, filter, pencarian, dan penyimpanan lokal menggunakan localStorage.

---

## Fitur-Fitur Utama

### 1. Manajemen Tugas
- Tambah tugas baru (nama, mata kuliah, deadline)
- Edit tugas yang sudah ada
- Hapus tugas
- Tandai tugas selesai/belum selesai

### 2. Penyimpanan Data
- Menggunakan localStorage browser
- Data tetap ada setelah browser ditutup
- Tidak perlu koneksi internet

### 3. Validasi Form
- Nama tugas tidak boleh kosong
- Mata kuliah wajib dipilih
- Deadline tidak boleh di masa lalu
- Error message dengan border merah

### 4. Filter & Pencarian
- Cari tugas berdasarkan nama atau mata kuliah
- Filter berdasarkan status (Semua/Selesai/Belum Selesai)
- Filter berdasarkan mata kuliah
- Real-time filtering

### 5. Statistik
- Total tugas
- Jumlah tugas selesai
- Jumlah tugas belum selesai

### 6. Notifikasi
- Badge merah untuk deadline ≤ 3 hari
- Label "(Mendesak)" untuk tugas urgent
- Background hijau untuk tugas selesai

---

## Cara Menjalankan Aplikasi

1. Buka file `MuhammadNurikhsan_123140057.html` di browser
2. Atau gunakan Live Server di VS Code

### Cara Menggunakan

**Tambah Tugas:**
1. Klik tombol "+ Tambah Tugas"
2. Isi form (nama, mata kuliah, deadline)
3. Klik "Simpan Tugas"

**Edit Tugas:**
1. Klik tombol ✎ (kuning) pada tugas
2. Ubah data
3. Klik "Simpan Tugas"

**Hapus Tugas:**
- Klik tombol × (merah) pada tugas
- Konfirmasi penghapusan

**Tandai Selesai:**
- Klik tombol ✓ (hijau) untuk toggle status

**Filter/Cari:**
- Ketik di kotak pencarian untuk cari
- Gunakan dropdown untuk filter status/mata kuliah

---

## Screenshot Aplikasi

### 1. Dashboard Utama
- Header dan tombol tambah tugas
- Statistik (Total, Belum Selesai, Selesai)
- Filter dan pencarian
- Daftar tugas dengan badge
- Tombol aksi (Check, Edit, Delete)

![alt text](https://github.com/muhammad-nurikhsan/Praktikum-Pengembangan-Aplikasi-Web/blob/main/Praktikum%20Pertemuan%201/Screenshot/Dashboard.png?raw=true)

### 2. Form Tambah/Edit
- Modal form dengan 3 input
- Dropdown mata kuliah
- Date picker
- Tombol Simpan dan Batal

![alt text](https://github.com/muhammad-nurikhsan/Praktikum-Pengembangan-Aplikasi-Web/blob/main/Praktikum%20Pertemuan%201/Screenshot/FilterTugas.png?raw=true)

### 3. Filter dan Status
- Tugas selesai (background hijau)
- Badge urgent (deadline dekat)
- Hasil pencarian
- Filter aktif

![alt text](https://github.com/muhammad-nurikhsan/Praktikum-Pengembangan-Aplikasi-Web/blob/main/Praktikum%20Pertemuan%201/Screenshot/Form.png?raw=true)

---

## Penjelasan Teknis

### 1. localStorage

**Simpan Data:**
```javascript
function simpanKeStorage() {
    localStorage.setItem('daftarTugas', JSON.stringify(daftarTugas));
}
```

**Muat Data:**
```javascript
function muatTugas() {
    const tugasTersimpan = localStorage.getItem('daftarTugas');
    if (tugasTersimpan) {
        daftarTugas = JSON.parse(tugasTersimpan);
    }
}
```

### 2. Validasi Form

```javascript
function validasiForm() {
    let valid = true;
    
    // Cek nama tidak kosong
    if (!nama) {
        tampilkanError('errorNama');
        valid = false;
    }
    
    // Cek deadline tidak masa lalu
    if (tanggalDipilih < hariIni) {
        tampilkanError('errorDeadline');
        valid = false;
    }
    
    return valid;
}
```

### 3. Filter dan Pencarian

```javascript
function dapatkanTugasTerfilter() {
    return daftarTugas.filter(tugas => {
        const cocokPencarian = tugas.nama.toLowerCase().includes(kataKunci);
        const cocokStatus = filterStatus === 'semua' || 
                           (filterStatus === 'selesai' && tugas.selesai);
        const cocokMataKuliah = filterMataKuliah === 'semua' || 
                               tugas.mataKuliah === filterMataKuliah;
        
        return cocokPencarian && cocokStatus && cocokMataKuliah;
    });
}
```

### 4. Deteksi Deadline Mendekat

```javascript
function deadlineDekat(stringTanggal) {
    const deadline = new Date(stringTanggal);
    const hariIni = new Date();
    const selisihHari = Math.ceil((deadline - hariIni) / (1000 * 60 * 60 * 24));
    return selisihHari <= 3 && selisihHari >= 0;
}
```
- Menghitung selisih hari antara deadline dan hari ini
- Return true jika ≤ 3 hari
- Digunakan untuk tampilkan badge urgent

---

## Daftar Fitur yang Diimplementasikan

1. Tambah tugas baru
2. Edit tugas
3. Hapus tugas
4. Tandai selesai/belum selesai
5. Filter berdasarkan status
6. Filter berdasarkan mata kuliah
7. Pencarian real-time
8. Validasi form lengkap
9. Penyimpanan localStorage
10. Statistik real-time
11. Notifikasi deadline mendekat
12. Responsive design

---

## Struktur Data

**Object Tugas:**
```javascript
{
    id: 1634567890123,        // Timestamp
    nama: "Laporan",          // String
    mataKuliah: "Pemweb",     // String
    deadline: "2025-10-25",   // YYYY-MM-DD
    selesai: false            // Boolean
}
```

**Mata Kuliah:**
- Jaringan Komputer
- Interaksi Desain
- Pengembangan Aplikasi Web
- Metodologi Penelitian
- Sistem Informasi

---

**Praktikum Pemrograman Aplikasi Web**  
Institut Teknologi Sumatera

