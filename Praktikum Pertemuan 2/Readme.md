# Praktikum JavaScript Next Gen
## Aplikasi Personal Dashboard - Dashboard Mahasiswa

**Nama:** Muhammad Nurikhsan  
**NIM:** 123140057

---

## Deskripsi Singkat

**Dashboard Mahasiswa** adalah aplikasi web interaktif yang berfungsi sebagai **asisten pribadi digital bagi mahasiswa**. Aplikasi ini membantu pengguna **mengatur jadwal kuliah, mengelola to-do list, dan memantau waktu secara real-time** melalui satu halaman dashboard yang modern dan responsif.

Aplikasi ini menampilkan:
- Dashboard dengan statistik ringkasan
- Jadwal kuliah harian dengan filter hari
- To-do list dengan kategori dan filter status
- Informasi waktu & tanggal secara real-time

Seluruh data tersimpan di **localStorage**, sehingga tidak hilang meskipun browser ditutup atau halaman direfresh.

---

## Fitur Utama Aplikasi

### 1. Dashboard Beranda
- Menampilkan total to-do list
- Jumlah to-do yang sudah selesai
- Jumlah jadwal kuliah hari ini
- Ringkasan to-do list hari ini
- Jadwal kuliah hari ini

### 2. Manajemen Jadwal Kuliah
- Tambah jadwal dengan informasi: mata kuliah, hari, waktu, dan ruangan
- Hapus jadwal
- Filter jadwal berdasarkan hari (Senin - Jumat)
- Tampilan tabel yang rapi dan terorganisir

### 3. Manajemen To-Do List
- Tambah to-do dengan nama, tanggal, dan kategori
- Tandai to-do **selesai/belum selesai**
- Hapus to-do
- Filter berdasarkan status (Semua, Belum Selesai, Selesai)
- Pencarian real-time berdasarkan nama to-do

### 4. Real-Time Clock
- Menampilkan waktu yang diperbarui setiap detik
- Menampilkan tanggal lengkap dalam Bahasa Indonesia

### 5. Penyimpanan Lokal
- Semua data tersimpan otomatis di **localStorage**
- Data tetap ada meskipun browser ditutup

---

## Teknologi & Konsep yang Digunakan

| Aspek | Implementasi |
|-------|--------------|
| **Bahasa Pemrograman** | HTML5, CSS3, JavaScript (ES6+) |
| **Penyimpanan Data** | localStorage dengan Promise |
| **Paradigma** | Object-Oriented Programming (Class-based) |
| **Desain UI/UX** | Modern dengan CSS Variables |
| **Arsitektur** | SPA sederhana dengan Class Architecture |

---

## Implementasi Fitur ES6+

### 1. **`let` & `const`** ✅
Digunakan secara konsisten untuk deklarasi variabel dengan scope yang tepat.

```javascript
const dashboard = new Dashboard();
let filtered = this.todos.filter(t => !t.done);
```

### 2. **Arrow Functions (>3)** ✅
Digunakan di banyak tempat untuk sintaks yang lebih ringkas:

```javascript
// Arrow function di class method
startClock() {
  const updateClock = () => {
    const now = new Date();
    // ...
  };
  setInterval(updateClock, 1000);
}

// Arrow function di event handler
document.getElementById('searchTodo').onkeyup = () => {
  dashboard.renderTodo();
};

// Arrow function di array methods
this.schedules.filter(s => s.day === this.currentDay);
this.todos.map(t => `<div>...</div>`).join('');
```

### 3. **Template Literals** ✅
Digunakan untuk rendering HTML dinamis:

```javascript
tbody.innerHTML = filtered.map(s => `
  <tr>
    <td>${s.day}</td>
    <td>${s.course}</td>
    <td>${s.start} - ${s.end}</td>
    <td>${s.room}</td>
    <td><button onclick="dashboard.deleteSchedule(${s.id})">Hapus</button></td>
  </tr>
`).join('');
```

### 4. **Class Implementation** ✅
Menggunakan ES6 Class untuk struktur kode yang lebih terorganisir:

```javascript
class Storage {
  constructor(key) {
    this.key = key;
  }
  
  async save(data) {
    return new Promise((resolve) => {
      setTimeout(() => {
        localStorage.setItem(this.key, JSON.stringify(data));
        resolve(true);
      }, 100);
    });
  }
}

class Schedule {
  constructor(course, day, start, end, room) {
    this.id = Date.now();
    this.course = course;
    this.day = day;
    this.start = start;
    this.end = end;
    this.room = room;
  }
}

class Todo {
  constructor(name, date, category) {
    this.id = Date.now();
    this.name = name;
    this.date = date;
    this.category = category;
    this.done = false;
  }
  
  toggleDone() {
    this.done = !this.done;
  }
}

class Dashboard {
  constructor() {
    this.scheduleStorage = new Storage('schedules');
    this.todoStorage = new Storage('todos');
    // ...
  }
  
  async init() {
    this.schedules = await this.scheduleStorage.load();
    this.todos = await this.todoStorage.load();
    // ...
  }
}
```

### 5. **Promise & Async/Await** ✅
Implementasi operasi asynchronous untuk localStorage:

```javascript
class Storage {
  async save(data) {
    return new Promise((resolve) => {
      setTimeout(() => {
        localStorage.setItem(this.key, JSON.stringify(data));
        resolve(true);
      }, 100);
    });
  }

  async load(defaultValue = []) {
    return new Promise((resolve) => {
      setTimeout(() => {
        const data = localStorage.getItem(this.key);
        resolve(data ? JSON.parse(data) : defaultValue);
      }, 100);
    });
  }
}

// Penggunaan dengan async/await
async addSchedule(course, day, start, end, room) {
  const schedule = new Schedule(course, day, start, end, room);
  this.schedules = [...this.schedules, schedule];
  await this.scheduleStorage.save(this.schedules);
  this.renderAll();
}
```

### 6. **Spread Operator** ✅
Digunakan untuk immutable data manipulation:

```javascript
// Menambah data tanpa mutasi array original
this.schedules = [...this.schedules, schedule];
this.todos = [...this.todos, todo];

// Copy array sebelum sort
const sorted = [...todaySchedules].sort((a, b) => 
  a.start.localeCompare(b.start)
);
```

### 7. **Destructuring** ✅
Ekstraksi nilai dari object dengan cara yang efisien:

```javascript
// Destructuring di parameter function
renderNextSchedule(todaySchedules = []) {
  const next = sorted[0];
  const { course, start, end, room } = next; // Destructuring
  // ...
}

// Destructuring di method
updateDashboard() {
  const { todos, schedules } = this; // Destructuring
  // ...
}

// Destructuring di map
todayTodos.map(({ name, category }) => `
  <div>
    <strong>${name}</strong><br>
    <small>${category}</small>
  </div>
`);
```

### 8. **Array Higher-Order Functions** ✅
Menggunakan map, filter, find untuk data manipulation:

```javascript
// filter
this.schedules.filter(s => s.day === this.currentDay);
this.todos.filter(t => !t.done);

// map
filtered.map(s => `<tr>...</tr>`).join('');

// find
const todo = this.todos.find(t => t.id === id);

// slice
.slice(0, 5)
```

### 9. **Default Parameters** ✅
Parameter dengan nilai default:

```javascript
async load(defaultValue = []) {
  // jika tidak ada data, return defaultValue
  return data ? JSON.parse(data) : defaultValue;
}

filterSchedules(day = 'all') {
  this.currentDay = day;
  // ...
}

getFilteredTodos(search = '') {
  // search default empty string
  // ...
}
```

### 10. **Method Shorthand** ✅
Sintaks method yang lebih ringkas di dalam class:

```javascript
class Dashboard {
  // Method tanpa keyword 'function'
  async init() { }
  startClock() { }
  renderSchedule() { }
  renderTodo() { }
  updateDashboard() { }
}

class Todo {
  toggleDone() {
    this.done = !this.done;
  }
}
```

---

## Penjelasan Teknis Penyimpanan Data

### Menyimpan Data dengan Promise
```javascript
async save(data) {
  return new Promise((resolve) => {
    setTimeout(() => {
      localStorage.setItem(this.key, JSON.stringify(data));
      resolve(true);
    }, 100);
  });
}
```

**Cara Kerja:**
- Menggunakan Promise untuk operasi asynchronous
- `setTimeout` mensimulasikan delay operasi I/O
- Data di-convert ke JSON string dengan `JSON.stringify()`
- Return Promise yang resolve setelah save selesai

### Memuat Data dengan Async/Await
```javascript
async load(defaultValue = []) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const data = localStorage.getItem(this.key);
      resolve(data ? JSON.parse(data) : defaultValue);
    }, 100);
  });
}

// Penggunaan
async init() {
  this.schedules = await this.scheduleStorage.load();
  this.todos = await this.todoStorage.load();
  this.renderAll();
}
```

**Cara Kerja:**
- Menggunakan async/await untuk handling Promise
- Parse JSON string kembali ke array/object
- Return default value jika data tidak ada
- `await` memastikan data sudah loaded sebelum render

---

## Struktur Data

### Schedule Object
```javascript
{
  id: 1730012345678,
  course: "Pemrograman Web",
  day: "Senin",
  start: "08:00",
  end: "10:00",
  room: "GKU 1.1"
}
```

### Todo Object
```javascript
{
  id: 1730012345678,
  name: "Mengerjakan Tugas Praktikum",
  date: "2025-10-27",
  category: "Kuliah",
  done: false
}
```

---

## Screenshot Aplikasi

### 1. Halaman Beranda
Menampilkan:
- Header dengan nama, NIM, waktu, dan tanggal
- Statistik total to-do, selesai, dan jadwal hari ini
- Ringkasan to-do list hari ini
- Jadwal kuliah hari ini

### 2. Jadwal Kuliah
Menampilkan:
- Form tambah jadwal dengan 5 input field
- Filter berdasarkan hari (Senin - Jumat)
- Tabel jadwal yang terorganisir
- Tombol hapus untuk setiap jadwal

### 3. To-Do List
Menampilkan:
- Form tambah to-do dengan kategori
- Search box untuk pencarian real-time
- Filter status (Semua, Belum Selesai, Selesai)
- Card to-do dengan tombol selesai dan hapus
- Visual strikethrough untuk to-do yang selesai

---

## Cara Menjalankan Aplikasi

1. Download atau clone repository
2. Pastikan file `index.html`, `style.css`, dan `script.js` dalam satu folder
3. Buka file `index.html` di browser modern (Chrome, Firefox, Edge)
4. Aplikasi siap digunakan tanpa perlu instalasi tambahan

### Cara Menggunakan:

**Menambah Jadwal Kuliah:**
1. Klik menu "Jadwal Kuliah" di sidebar
2. Isi form (Mata Kuliah, Hari, Waktu Mulai, Waktu Selesai, Ruangan)
3. Klik "Tambah Jadwal"
4. Jadwal akan muncul di tabel

**Menambah To-Do:**
1. Klik menu "To Do List" di sidebar
2. Isi form (Nama To-Do, Tanggal, Kategori)
3. Klik "Tambah"
4. To-do akan muncul di list

**Filter & Search:**
- Gunakan tombol filter hari untuk jadwal kuliah
- Gunakan search box untuk mencari to-do
- Gunakan tombol filter status untuk to-do

---

## Kelebihan Implementasi

1. **Clean Architecture** - Class-based dengan separation of concerns
2. **Async Storage** - Promise-based localStorage untuk simulate real API
3. **Immutable Updates** - Menggunakan spread operator
4. **Type Safety** - Menggunakan Class untuk data structure
5. **Reusable Components** - Storage class bisa dipakai untuk data apapun
6. **Modern ES6+** - Konsisten menggunakan fitur JavaScript terbaru

---
