"""
Program Pengelolaan Data Nilai Mahasiswa
Praktikum Pengembangan Aplikasi Web - Pertemuan 4

Nama: Muhammad Nurikhsan
NIM: 123140057
"""

# Data mahasiswa awal
data_mahasiswa = [
    {
        "nama": "Aryasatya",
        "nim": "123140164",
        "nilai_uts": 85,
        "nilai_uas": 90,
        "nilai_tugas": 88
    },
    {
        "nama": "Aji Nur Astondinata",
        "nim": "123140189",
        "nilai_uts": 78,
        "nilai_uas": 82,
        "nilai_tugas": 80
    },
    {
        "nama": "Ahmad Rizki",
        "nim": "123140217",
        "nilai_uts": 92,
        "nilai_uas": 88,
        "nilai_tugas": 95
    },
    {
        "nama": "Elfa Noviana",
        "nim": "123140064",
        "nilai_uts": 65,
        "nilai_uas": 70,
        "nilai_tugas": 68
    },
    {
        "nama": "Alliyah Salsabila",
        "nim": "123140075",
        "nilai_uts": 55,
        "nilai_uas": 60,
        "nilai_tugas": 58
    }
]


def hitung_nilai_akhir(nilai_uts, nilai_uas, nilai_tugas):
    # Hitung nilai akhir dengan bobot: UTS 30%, UAS 40%, Tugas 30%
    nilai_akhir = (nilai_uts * 0.3) + (nilai_uas * 0.4) + (nilai_tugas * 0.3)
    return nilai_akhir


def tentukan_grade(nilai_akhir):
    # Tentukan grade berdasarkan nilai akhir
    if nilai_akhir >= 80:
        return "A"
    elif nilai_akhir >= 70:
        return "B"
    elif nilai_akhir >= 60:
        return "C"
    elif nilai_akhir >= 50:
        return "D"
    else:
        return "E"


def tampilkan_data(data):
    # Menampilkan data mahasiswa dalam bentuk tabel
    print("\n" + "=" * 100)
    print(f"{'No':<5} {'Nama':<20} {'NIM':<12} {'UTS':<8} {'UAS':<8} {'Tugas':<8} {'Nilai Akhir':<12} {'Grade':<8}")
    print("=" * 100)
    
    for i, mhs in enumerate(data):
        nilai_akhir = hitung_nilai_akhir(mhs['nilai_uts'], mhs['nilai_uas'], mhs['nilai_tugas'])
        grade = tentukan_grade(nilai_akhir)
        
        print(f"{i+1:<5} {mhs['nama']:<20} {mhs['nim']:<12} {mhs['nilai_uts']:<8} "
              f"{mhs['nilai_uas']:<8} {mhs['nilai_tugas']:<8} {nilai_akhir:<12.2f} {grade:<8}")
    
    print("=" * 100)


def cari_nilai_tertinggi(data):
    # Mencari mahasiswa dengan nilai tertinggi
    max_nilai = 0
    mahasiswa_terbaik = None
    
    for mhs in data:
        nilai = hitung_nilai_akhir(mhs['nilai_uts'], mhs['nilai_uas'], mhs['nilai_tugas'])
        if nilai > max_nilai:
            max_nilai = nilai
            mahasiswa_terbaik = mhs
    
    return mahasiswa_terbaik, max_nilai


def cari_nilai_terendah(data):
    # Mencari mahasiswa dengan nilai terendah
    min_nilai = 100
    mahasiswa_terendah = None
    
    for mhs in data:
        nilai = hitung_nilai_akhir(mhs['nilai_uts'], mhs['nilai_uas'], mhs['nilai_tugas'])
        if nilai < min_nilai:
            min_nilai = nilai
            mahasiswa_terendah = mhs
    
    return mahasiswa_terendah, min_nilai


def tambah_mahasiswa(data):
    # Input data mahasiswa baru
    print("\n--- Tambah Data Mahasiswa Baru ---")
    
    nama = input("Masukkan nama: ")
    nim = input("Masukkan NIM: ")
    
    # Validasi input nilai
    try:
        nilai_uts = float(input("Masukkan nilai UTS: "))
        nilai_uas = float(input("Masukkan nilai UAS: "))
        nilai_tugas = float(input("Masukkan nilai Tugas: "))
        
        mahasiswa_baru = {
            "nama": nama,
            "nim": nim,
            "nilai_uts": nilai_uts,
            "nilai_uas": nilai_uas,
            "nilai_tugas": nilai_tugas
        }
        
        data.append(mahasiswa_baru)
        print("\nData berhasil ditambahkan!")
        
    except ValueError:
        print("\nInput tidak valid. Masukkan angka untuk nilai.")


def filter_by_grade(data, grade):
    # Filter mahasiswa berdasarkan grade tertentu
    hasil = []
    
    for mhs in data:
        nilai_akhir = hitung_nilai_akhir(mhs['nilai_uts'], mhs['nilai_uas'], mhs['nilai_tugas'])
        if tentukan_grade(nilai_akhir) == grade:
            hasil.append(mhs)
    
    return hasil


def hitung_rata_rata(data):
    # Hitung rata-rata nilai kelas
    if len(data) == 0:
        return 0
    
    total = 0
    for mhs in data:
        nilai = hitung_nilai_akhir(mhs['nilai_uts'], mhs['nilai_uas'], mhs['nilai_tugas'])
        total += nilai
    
    return total / len(data)


def main():
    # Program utama
    while True:
        print("\n========================================")
        print("Sistem Pengelolaan Data Nilai Mahasiswa")
        print("========================================")
        print("1. Tampilkan semua data mahasiswa")
        print("2. Tambah data mahasiswa baru")
        print("3. Cari mahasiswa nilai tertinggi")
        print("4. Cari mahasiswa nilai terendah")
        print("5. Filter mahasiswa berdasarkan grade")
        print("6. Hitung rata-rata nilai kelas")
        print("7. Keluar")
        print("========================================")
        
        pilihan = input("Pilih menu (1-7): ")
        
        if pilihan == "1":
            tampilkan_data(data_mahasiswa)
            
        elif pilihan == "2":
            tambah_mahasiswa(data_mahasiswa)
            
        elif pilihan == "3":
            mhs, nilai = cari_nilai_tertinggi(data_mahasiswa)
            if mhs:
                print("\n--- Mahasiswa dengan Nilai Tertinggi ---")
                print(f"Nama: {mhs['nama']}")
                print(f"NIM: {mhs['nim']}")
                print(f"Nilai Akhir: {nilai:.2f}")
                print(f"Grade: {tentukan_grade(nilai)}")
            
        elif pilihan == "4":
            mhs, nilai = cari_nilai_terendah(data_mahasiswa)
            if mhs:
                print("\n--- Mahasiswa dengan Nilai Terendah ---")
                print(f"Nama: {mhs['nama']}")
                print(f"NIM: {mhs['nim']}")
                print(f"Nilai Akhir: {nilai:.2f}")
                print(f"Grade: {tentukan_grade(nilai)}")
            
        elif pilihan == "5":
            grade = input("Masukkan grade (A/B/C/D/E): ").upper()
            hasil = filter_by_grade(data_mahasiswa, grade)
            
            if len(hasil) > 0:
                print(f"\nMahasiswa dengan grade {grade}:")
                tampilkan_data(hasil)
            else:
                print(f"\nTidak ada mahasiswa dengan grade {grade}")
            
        elif pilihan == "6":
            rata_rata = hitung_rata_rata(data_mahasiswa)
            print(f"\nRata-rata nilai kelas: {rata_rata:.2f}")
            print(f"Grade rata-rata: {tentukan_grade(rata_rata)}")
            
        elif pilihan == "7":
            print("\nTerima kasih telah menggunakan program ini.")
            break
            
        else:
            print("\nPilihan tidak valid!")


# Jalankan program
if __name__ == "__main__":
    main()