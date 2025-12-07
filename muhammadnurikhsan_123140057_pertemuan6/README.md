# Aplikasi Manajemen Matakuliah

REST API sederhana untuk operasi CRUD data matakuliah menggunakan Pyramid Framework dan PostgreSQL.

## Data Mahasiswa
- **Nama**: Muhammad Nurikhsan
- **NIM**: 123140057

---

## Deskripsi

Aplikasi ini menyediakan API untuk mengelola data matakuliah dengan fitur:
- Melihat semua data matakuliah
- Melihat detail matakuliah berdasarkan ID
- Menambah matakuliah baru
- Update data matakuliah
- Hapus data matakuliah

**Tech Stack:**
- Pyramid Framework
- PostgreSQL
- SQLAlchemy (ORM)
- Alembic (Database Migration)

---

## Struktur Database

**Tabel: matakuliah**

| Kolom     | Tipe    | Constraint           |
|-----------|---------|----------------------|
| id        | Integer | Primary Key, Auto    |
| kode_mk   | Text    | Unique, Not Null     |
| nama_mk   | Text    | Not Null             |
| sks       | Integer | Not Null             |
| semester  | Integer | Not Null             |

---

## Instalasi

### 1. Setup Virtual Environment
```bash
python -m venv venv
venv\Scripts\activate  # Windows
# source venv/bin/activate  # Linux/Mac
```

### 2. Install Dependencies
```bash
pip install -e .
```

### 3. Setup Database PostgreSQL

**Via pgAdmin4:**
- Buka pgAdmin4
- Create database: `matakuliah_db`

**Edit `development.ini` dan `alembic.ini`:**
```ini
sqlalchemy.url = postgresql://postgres:PASSWORD_ANDA@localhost/matakuliah_db
```

### 4. Migrasi Database
```bash
alembic revision --autogenerate -m "create matakuliah table"
alembic upgrade head
```

### 5. Insert Data Awal

**Di pgAdmin4 Query Tool:**
```sql
INSERT INTO matakuliah (kode_mk, nama_mk, sks, semester) VALUES
('IF101', 'Jaringan Komputer', 3, 5),
('IF102', 'Metodologi Penelitian', 3, 5),
('IF103', 'Pengembangan Aplikasi Web', 3, 5);
```

---

## Menjalankan Aplikasi

```bash
# Aktifkan venv dulu
venv\Scripts\activate

# Jalankan server
pserve development.ini --reload
```

Server berjalan di: **http://localhost:6543**

---

## API Endpoints

### 1. GET All Matakuliah
```
GET /api/matakuliah
```

**Response:**
```json
{
  "matakuliahs": [
    {
      "id": 1,
      "kode_mk": "IF101",
      "nama_mk": "Jaringan Komputer",
      "sks": 3,
      "semester": 5
    }
  ]
}
```
![GET ALL](https://github.com/muhammad-nurikhsan/Praktikum-Pengembangan-Aplikasi-Web/blob/main/muhammadnurikhsan_123140057_pertemuan6/screenshot/getAll.png)

---

### 2. GET Matakuliah by ID
```
GET /api/matakuliah/1
```

**Response:**
```json
{
  "id": 1,
  "kode_mk": "IF101",
  "nama_mk": "Jaringan Komputer",
  "sks": 3,
  "semester": 5
}
```
![GET by ID](https://github.com/muhammad-nurikhsan/Praktikum-Pengembangan-Aplikasi-Web/blob/main/muhammadnurikhsan_123140057_pertemuan6/screenshot/getID.png)

---

### 3. POST Create Matakuliah
```
POST /api/matakuliah
Content-Type: application/json

{
  "kode_mk": "IF104",
  "nama_mk": "Manajemen Proyek TI",
  "sks": 3,
  "semester": 6
}
```
**Response:**
```json
{
  "message": "Matakuliah created successfully",
  "matakuliah": { ... }
}
```
![POST Create matakuliah](https://github.com/muhammad-nurikhsan/Praktikum-Pengembangan-Aplikasi-Web/blob/main/muhammadnurikhsan_123140057_pertemuan6/screenshot/postCreate.png)

---

### 4. PUT Update Matakuliah
```
PUT /api/matakuliah/1
Content-Type: application/json

{
  "nama_mk": "Jaringan Komputer Lanjut",
  "sks": 4
}
```

**Response:**
```json
{
  "message": "Matakuliah updated successfully",
  "matakuliah": { ... }
}
```
![PUT Update matakuliah](https://github.com/muhammad-nurikhsan/Praktikum-Pengembangan-Aplikasi-Web/blob/main/muhammadnurikhsan_123140057_pertemuan6/screenshot/putUpdate.png)

---

### 5. DELETE Matakuliah
```
DELETE /api/matakuliah/4
```

**Response:**
```json
{
  "message": "Matakuliah deleted successfully"
}
```
![DELETE](https://github.com/muhammad-nurikhsan/Praktikum-Pengembangan-Aplikasi-Web/blob/main/muhammadnurikhsan_123140057_pertemuan6/screenshot/delete.png)

---
## Dokumentasi lainnya
```
Keseluruhan Dokumentasi meliputi :
- Data awal
- Data setelah create matakuliah baru
- Data update matakuliah
- Data setelah delete
```
![Data Awal](https://github.com/muhammad-nurikhsan/Praktikum-Pengembangan-Aplikasi-Web/blob/main/muhammadnurikhsan_123140057_pertemuan6/screenshot/tigadata.png)

```

```
![Data setelah POST Create](https://github.com/muhammad-nurikhsan/Praktikum-Pengembangan-Aplikasi-Web/blob/main/muhammadnurikhsan_123140057_pertemuan6/screenshot/empatdata.png)
```
```
![Data update matakuliah](https://github.com/muhammad-nurikhsan/Praktikum-Pengembangan-Aplikasi-Web/blob/main/muhammadnurikhsan_123140057_pertemuan6/screenshot/hasilupdate.png)
```
```
![Data setelah di hapus](https://github.com/muhammad-nurikhsan/Praktikum-Pengembangan-Aplikasi-Web/blob/main/muhammadnurikhsan_123140057_pertemuan6/screenshot/hasildelete.png)
```

---

## Testing

### Menggunakan PowerShell

**GET All:**
```powershell
(Invoke-WebRequest -Uri http://localhost:6543/api/matakuliah -Method GET).Content
```

**POST Create:**
```powershell
$body = @{
    kode_mk = "IF104"
    nama_mk = "MPTI"
    sks = 3
    semester = 6
} | ConvertTo-Json

Invoke-WebRequest -Uri http://localhost:6543/api/matakuliah -Method POST -Body $body -ContentType "application/json"
```

**PUT Update:**
```powershell
$body = @{
    nama_mk = "Nama Baru"
    sks = 4
} | ConvertTo-Json

Invoke-WebRequest -Uri http://localhost:6543/api/matakuliah/1 -Method PUT -Body $body -ContentType "application/json"
```

**DELETE:**
```powershell
Invoke-WebRequest -Uri http://localhost:6543/api/matakuliah/4 -Method DELETE
```

### Menggunakan Browser
Akses langsung untuk GET:
- http://localhost:6543/api/matakuliah
- http://localhost:6543/api/matakuliah/1

---

## Struktur Project

```
muhammadnurikhsan_123140057_pertemuan6/
├── alembic/
│   ├── versions/
│   └── env.py
├── matakuliah_app/
│   ├── __init__.py
│   ├── models.py
│   └── views.py
├── venv/
├── alembic.ini
├── development.ini
├── setup.py
└── README.md
```

---

## Troubleshooting

| Problem | Solusi |
|---------|--------|
| Server tidak jalan | Pastikan venv aktif dan `pserve development.ini --reload` |
| Data tidak masuk DB | Hapus `.commit()` di `views.py`, restart server |
| Connection refused | Cek server running, akses `http://localhost:6543` |
| Error database | Cek password di `development.ini` dan `alembic.ini` |

---


Praktikum Pemrograman Aplikasi Web
Institut Teknologi Sumatera