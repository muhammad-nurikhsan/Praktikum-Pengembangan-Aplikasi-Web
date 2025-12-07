# Sistem Pengelolaan Data Nilai Mahasiswa

Program CLI untuk mengelola data nilai mahasiswa dengan Python.

## Data Mahasiswa
- **Nama**: Muhammad Nurikhsan
- **NIM**: 123140057

---

## Deskripsi

Program untuk mengelola data nilai mahasiswa dengan fitur CRUD sederhana dan sistem grading otomatis.

**Tech Stack:** Python 3.x

---

## Fitur

1. Tampilkan semua data mahasiswa (tabel)
2. Tambah data mahasiswa baru
3. Cari mahasiswa nilai tertinggi
4. Cari mahasiswa nilai terendah
5. Filter mahasiswa berdasarkan grade
6. Hitung rata-rata nilai kelas
7. Keluar program

---

## Sistem Penilaian

**Formula:**
```
Nilai Akhir = (UTS × 30%) + (UAS × 40%) + (Tugas × 30%)
```

**Grade:**
- A: ≥ 80
- B: 70-79
- C: 60-69
- D: 50-59
- E: < 50

---

## Cara Menjalankan

```bash
python main.py
```

---

## Contoh Output

### Menu Utama
```
========================================
Sistem Pengelolaan Data Nilai Mahasiswa
========================================
1. Tampilkan semua data mahasiswa
2. Tambah data mahasiswa baru
3. Cari mahasiswa nilai tertinggi
4. Cari mahasiswa nilai terendah
5. Filter mahasiswa berdasarkan grade
6. Hitung rata-rata nilai kelas
7. Keluar
========================================
```

### Tampilkan Data
```
No    Nama                 NIM          UTS      UAS      Tugas    Nilai Akhir  Grade   
1     Aryasatya            123140164    85       90       88       87.90        A       
2     Aji Nur Astondinata  123140189    78       82       80       80.00        A       
3     Ahmad Rizki          123140217    92       88       95       91.10        A       
```

---

## Data Awal

Program sudah punya 5 data mahasiswa:
- Aryasatya (123140164)
- Aji Nur Astondinata (123140189)
- Ahmad Rizki (123140217)
- Elfa Noviana (123140064)
- Alliyah Salsabila (123140075)

---

Praktikum Pemrograman Aplikasi Web Institut Teknologi Sumatera