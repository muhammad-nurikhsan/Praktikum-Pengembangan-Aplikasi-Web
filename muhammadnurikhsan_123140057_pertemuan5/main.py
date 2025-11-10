"""
Sistem Manajemen Perpustakaan Sederhana
Praktikum Pengembangan Aplikasi Web - Pertemuan 5

Nama: Muhammad Nurikhsan
NIM: 123140057
"""

from abc import ABC, abstractmethod

# Abstract Class sebagai base untuk semua item perpustakaan
class LibraryItem(ABC):
    def __init__(self, item_id, title, author):
        self._item_id = item_id  # protected attribute
        self._title = title
        self._author = author
        self._is_available = True
    
    # Property decorator untuk encapsulation
    @property
    def item_id(self):
        return self._item_id
    
    @property
    def title(self):
        return self._title
    
    @property
    def author(self):
        return self._author
    
    @property
    def is_available(self):
        return self._is_available
    
    @is_available.setter
    def is_available(self, status):
        self._is_available = status
    
    # Abstract method yang harus diimplementasikan oleh subclass
    @abstractmethod
    def display_info(self):
        pass
    
    @abstractmethod
    def get_type(self):
        pass


# Subclass untuk Buku
class Book(LibraryItem):
    def __init__(self, item_id, title, author, isbn, pages):
        super().__init__(item_id, title, author)
        self.__isbn = isbn  # private attribute
        self._pages = pages
    
    @property
    def isbn(self):
        return self.__isbn
    
    # Implementasi abstract method
    def display_info(self):
        status = "Tersedia" if self._is_available else "Dipinjam"
        print(f"ID: {self._item_id}")
        print(f"Judul: {self._title}")
        print(f"Penulis: {self._author}")
        print(f"ISBN: {self.__isbn}")
        print(f"Halaman: {self._pages}")
        print(f"Status: {status}")
    
    def get_type(self):
        return "Buku"


# Subclass untuk Majalah
class Magazine(LibraryItem):
    def __init__(self, item_id, title, publisher, issue_number, year):
        super().__init__(item_id, title, publisher)
        self._issue_number = issue_number
        self._year = year
    
    # Implementasi abstract method dengan format berbeda (polymorphism)
    def display_info(self):
        status = "Tersedia" if self._is_available else "Dipinjam"
        print(f"ID: {self._item_id}")
        print(f"Judul: {self._title}")
        print(f"Penerbit: {self._author}")
        print(f"Edisi: {self._issue_number}")
        print(f"Tahun: {self._year}")
        print(f"Status: {status}")
    
    def get_type(self):
        return "Majalah"


# Class untuk mengelola perpustakaan
class Library:
    def __init__(self, nama_perpustakaan):
        self.__items = []  # private attribute
        self.__nama = nama_perpustakaan
    
    @property
    def nama(self):
        return self.__nama
    
    # Method untuk menambahkan item
    def tambah_item(self, item):
        if isinstance(item, LibraryItem):
            self.__items.append(item)
            print(f"\n{item.get_type()} '{item.title}' berhasil ditambahkan ke perpustakaan.")
        else:
            print("\nItem harus merupakan turunan dari LibraryItem.")
    
    # Method untuk menampilkan semua item
    def tampilkan_semua_item(self):
        if not self.__items:
            print("\nPerpustakaan masih kosong.")
            return
        
        print(f"\n{'='*60}")
        print(f"Daftar Item di Perpustakaan {self.__nama}")
        print(f"{'='*60}")
        
        for i, item in enumerate(self.__items, 1):
            print(f"\n[Item {i}] - {item.get_type()}")
            print("-" * 60)
            item.display_info()
        
        print(f"{'='*60}")
    
    # Method untuk mencari item berdasarkan ID
    def cari_by_id(self, item_id):
        for item in self.__items:
            if item.item_id == item_id:
                return item
        return None
    
    # Method untuk mencari item berdasarkan judul
    def cari_by_judul(self, judul):
        hasil = []
        for item in self.__items:
            if judul.lower() in item.title.lower():
                hasil.append(item)
        return hasil
    
    # Method untuk meminjam item
    def pinjam_item(self, item_id):
        item = self.cari_by_id(item_id)
        if item:
            if item.is_available:
                item.is_available = False
                print(f"\n{item.get_type()} '{item.title}' berhasil dipinjam.")
            else:
                print(f"\n{item.get_type()} '{item.title}' sedang dipinjam.")
        else:
            print(f"\nItem dengan ID {item_id} tidak ditemukan.")
    
    # Method untuk mengembalikan item
    def kembalikan_item(self, item_id):
        item = self.cari_by_id(item_id)
        if item:
            if not item.is_available:
                item.is_available = True
                print(f"\n{item.get_type()} '{item.title}' berhasil dikembalikan.")
            else:
                print(f"\n{item.get_type()} '{item.title}' tidak sedang dipinjam.")
        else:
            print(f"\nItem dengan ID {item_id} tidak ditemukan.")
    



def main():
    # Inisialisasi perpustakaan
    perpustakaan = Library("Perpustakaan ITERA")
    
    # Menambahkan beberapa data awal
    buku1 = Book("B001", "Python Programming", "John Smith", "978-1234567890", 350)
    buku2 = Book("B002", "Data Structures", "Jane Doe", "978-0987654321", 420)
    majalah1 = Magazine("M001", "Tech Monthly", "Tech Publisher", "Vol. 5", 2024)
    majalah2 = Magazine("M002", "Science Today", "Science Press", "Issue 12", 2024)
    
    perpustakaan.tambah_item(buku1)
    perpustakaan.tambah_item(buku2)
    perpustakaan.tambah_item(majalah1)
    perpustakaan.tambah_item(majalah2)
    
    # Menu utama
    while True:
        print("\n" + "="*60)
        print(f"Sistem Manajemen {perpustakaan.nama}")
        print("="*60)
        print("1. Tampilkan semua item")
        print("2. Tambah item baru")
        print("3. Cari item berdasarkan ID")
        print("4. Cari item berdasarkan judul")
        print("5. Pinjam item")
        print("6. Kembalikan item")
        print("7. Keluar")
        print("="*60)
        
        pilihan = input("Pilih menu (1-7): ")
        
        if pilihan == "1":
            perpustakaan.tampilkan_semua_item()
        
        elif pilihan == "2":
            print("\nPilih tipe item:")
            print("1. Buku")
            print("2. Majalah")
            tipe = input("Pilihan (1/2): ")
            
            if tipe == "1":
                item_id = input("ID Buku: ")
                title = input("Judul: ")
                author = input("Penulis: ")
                isbn = input("ISBN: ")
                pages = int(input("Jumlah halaman: "))
                
                buku = Book(item_id, title, author, isbn, pages)
                perpustakaan.tambah_item(buku)
            
            elif tipe == "2":
                item_id = input("ID Majalah: ")
                title = input("Judul: ")
                publisher = input("Penerbit: ")
                issue = input("Edisi: ")
                year = int(input("Tahun: "))
                
                majalah = Magazine(item_id, title, publisher, issue, year)
                perpustakaan.tambah_item(majalah)
            else:
                print("\nPilihan tidak valid.")
        
        elif pilihan == "3":
            item_id = input("\nMasukkan ID item: ")
            item = perpustakaan.cari_by_id(item_id)
            
            if item:
                print("\n" + "-"*60)
                print("Item ditemukan:")
                print("-"*60)
                item.display_info()
                print("-"*60)
            else:
                print(f"\nItem dengan ID {item_id} tidak ditemukan.")
        
        elif pilihan == "4":
            judul = input("\nMasukkan judul item: ")
            hasil = perpustakaan.cari_by_judul(judul)
            
            if hasil:
                print(f"\nDitemukan {len(hasil)} item:")
                for i, item in enumerate(hasil, 1):
                    print(f"\n[{i}] {item.get_type()}")
                    print("-"*60)
                    item.display_info()
            else:
                print(f"\nTidak ada item dengan judul yang mengandung '{judul}'.")
        
        elif pilihan == "5":
            item_id = input("\nMasukkan ID item yang ingin dipinjam: ")
            perpustakaan.pinjam_item(item_id)
        
        elif pilihan == "6":
            item_id = input("\nMasukkan ID item yang ingin dikembalikan: ")
            perpustakaan.kembalikan_item(item_id)
        
        elif pilihan == "7":
            print("\nTerima kasih telah menggunakan sistem perpustakaan.")
            break
        
        else:
            print("\nPilihan tidak valid. Silakan pilih menu 1-7.")


if __name__ == "__main__":
    main()