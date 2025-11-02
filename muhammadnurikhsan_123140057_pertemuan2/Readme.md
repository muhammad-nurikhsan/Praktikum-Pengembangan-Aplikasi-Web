# Dashboard Mahasiswa

Aplikasi web untuk membantu mahasiswa mengatur jadwal kuliah dan to-do list harian.

## Data Mahasiswa
- **Nama**: Muhammad Nurikhsan
- **NIM**: 123140057
- **Praktikum**: JavaScript Next Gen

---

## Deskripsi

Dashboard pribadi mahasiswa yang menampilkan jadwal kuliah, to-do list, dan statistik aktivitas. Data tersimpan di localStorage sehingga tidak hilang saat browser ditutup.

---

## Fitur

### 1. Beranda
- Statistik: Total to-do, selesai, jadwal hari ini
- Ringkasan to-do hari ini
- Jadwal kuliah berikutnya
- Jam & tanggal real-time

### 2. Jadwal Kuliah
- Tampilan jadwal per hari (Senin-Sabtu)
- Filter berdasarkan hari
- Format tabel yang rapi

### 3. To-Do List
- Tambah to-do dengan kategori (Kuliah/Organisasi/Pribadi)
- Tandai selesai/belum
- Hapus to-do
- Search real-time

---

## Teknologi

- HTML5, CSS3, JavaScript ES6+
- localStorage untuk penyimpanan data
- Responsive design

---

## Fitur ES6+ yang Diimplementasikan

### 1. Let & Const
```javascript
const schedules = [...];
let todos = JSON.parse(localStorage.getItem('todos')) || [];
```

### 2. Arrow Functions
```javascript
todos.filter(t => t.done);
setInterval(() => updateClock(), 1000);
```

### 3. Template Literals
```javascript
html += `<h4>${t.name}</h4>`;
```

### 4. Array Methods (map, filter, find)
```javascript
const filtered = todos.filter(t => !t.done);
const todo = todos.find(t => t.id === id);
html = todos.map(t => `<div>...</div>`).join('');
```

### 5. Spread Operator
```javascript
todos = [...todos, newTodo];
```

### 6. Default Parameters
```javascript
function filterDay(day = 'all') { }
```

---

## Cara Menjalankan

1. Download semua file (index.html, style.css, script.js)
2. Buka `index.html` di browser
3. Aplikasi siap digunakan

Tidak perlu instalasi atau setup server.

---

## Screenshot

### Dashboard
Menampilkan statistik dan ringkasan hari ini
![alt text](https://github.com/muhammad-nurikhsan/Praktikum-Pengembangan-Aplikasi-Web/blob/main/Praktikum%20Pertemuan%202/screenshot/Dashboard.png)

### Jadwal Kuliah
Table jadwal dengan filter per hari
![alt text](https://github.com/muhammad-nurikhsan/Praktikum-Pengembangan-Aplikasi-Web/blob/main/Praktikum%20Pertemuan%202/screenshot/JadwalKuliah.png)

### To-Do List
List dengan search dan filter status
![alt text](https://github.com/muhammad-nurikhsan/Praktikum-Pengembangan-Aplikasi-Web/blob/main/Praktikum%20Pertemuan%202/screenshot/ToDoList.png)

---

## Catatan

- Data jadwal kuliah sudah hardcoded di HTML
- To-do list menggunakan localStorage
- Aplikasi responsive untuk mobile

---

Free to use untuk keperluan belajar.

---

Dibuat untuk tugas Praktikum JavaScript Next Gen  
Institut Teknologi Sumatera - 2025

