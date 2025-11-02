# Aplikasi Manajemen Buku

Aplikasi web untuk mengelola koleksi buku pribadi dengan fitur pencarian, filter, dan statistik.

## Data Mahasiswa

- **Nama**: Muhammad Nurikhsan
- **NIM**: 123140057

---

## Deskripsi

Aplikasi untuk mencatat dan mengelola koleksi buku pribadi. Pengguna dapat menambahkan buku yang sudah dimiliki, sedang dibaca, atau masuk wishlist. Data tersimpan di localStorage sehingga tidak hilang saat browser ditutup.

---

## Fitur Utama

### 1. Manajemen Buku
- Tambah buku baru (judul, penulis, status)
- Edit buku yang sudah ada
- Hapus buku dengan konfirmasi
- Validasi input form

### 2. Pencarian & Filter
- Search real-time berdasarkan judul/penulis
- Filter berdasarkan status:
  - Semua
  - Sudah Dimiliki
  - Sedang Dibaca
  - Wishlist

### 3. Statistik
- Total buku keseluruhan
- Jumlah per kategori status
- Daftar 10 buku terbaru

---

## Teknologi

- React 18
- React Router DOM
- Context API untuk state management
- localStorage untuk penyimpanan data
- CSS3 dengan dark mode theme

---

## Konsep React yang Diimplementasikan

### 1. Hooks
```javascript
const [books, setBooks] = useState([]);
useEffect(() => { /* load from localStorage */ }, []);
const stats = useMemo(() => { /* calculate stats */ }, [books]);
```

### 2. Context API
```javascript
const BookContext = createContext();
export function BookProvider({ children }) { }
export function useBooks() { }
```

### 3. Custom Hooks
```javascript
function useLocalStorage(key, initialValue) { }
function useBookStats(books) { }
```

### 4. React Router
```javascript
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/stats" element={<Stats />} />
</Routes>
```

### 5. Component Composition
```javascript
<BookForm bookToEdit={editingBook} onCancel={handleCancel} />
<BookList onEdit={handleEdit} />
```

---

## Struktur Folder
```
src/
├── components/
│   ├── Header/
│   ├── Navbar/
│   ├── BookForm/
│   ├── BookFilter/
│   ├── BookList/
│   └── BookItem/
├── pages/
│   ├── Home/
│   └── Stats/
├── hooks/
│   ├── useLocalStorage.js
│   └── useBookStats.js
├── context/
│   └── BookContext.jsx
├── App.jsx
└── index.js
```

---

## Cara Menjalankan

1. Clone repository
```bash
git clone https://github.com/muhammad-nurikhsan/Praktikum-Pengembangan-Aplikasi-Web.git
cd Praktikum-Pengembangan-Aplikasi-Web/muhammadnurikhsan_123140057_pertemuan3
```

2. Install dependencies
```bash
npm install
```

3. Jalankan aplikasi
```bash
npm start
```

4. Buka browser di `http://localhost:3000`

---

## Screenshot

### Halaman Beranda
Tampilan utama dengan daftar buku dan fitur search/filter

![Beranda](https://github.com/muhammad-nurikhsan/Praktikum-Pengembangan-Aplikasi-Web/blob/main/muhammadnurikhsan_123140057_pertemuan3/screenshot/home.png)

### Form Tambah/Edit Buku
Form untuk menambah atau mengubah data buku

![Form](https://github.com/muhammad-nurikhsan/Praktikum-Pengembangan-Aplikasi-Web/blob/main/muhammadnurikhsan_123140057_pertemuan3/screenshot/form.png)

### Halaman Statistik
Statistik koleksi buku dan daftar buku terbaru

![Statistik](https://github.com/muhammad-nurikhsan/Praktikum-Pengembangan-Aplikasi-Web/blob/main/muhammadnurikhsan_123140057_pertemuan3/screenshot/stats.png)

---

## Catatan

- Data disimpan di localStorage 
- Aplikasi responsive untuk mobile dan desktop
- Dark mode karena preferensi pribadi

---

Praktikum Pemrograman Aplikasi Web  
Institut Teknologi Sumatera