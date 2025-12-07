from sqlalchemy import Column, Integer, Text
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
from sqlalchemy import create_engine

# Base untuk semua model
Base = declarative_base()


class Matakuliah(Base):
    """
    Model untuk tabel matakuliah
    
    Atribut:
        id: Primary key, auto increment
        kode_mk: Kode mata kuliah (unique, not null)
        nama_mk: Nama mata kuliah (not null)
        sks: Jumlah SKS (not null)
        semester: Semester pengambilan (not null)
    """
    __tablename__ = 'matakuliah'
    
    # Definisi kolom
    id = Column(Integer, primary_key=True, autoincrement=True)
    kode_mk = Column(Text, unique=True, nullable=False)
    nama_mk = Column(Text, nullable=False)
    sks = Column(Integer, nullable=False)
    semester = Column(Integer, nullable=False)
    
    def to_dict(self):
        """
        Konversi object Matakuliah ke dictionary
        
        Returns:
            dict: Dictionary berisi semua atribut matakuliah
        """
        return {
            'id': self.id,
            'kode_mk': self.kode_mk,
            'nama_mk': self.nama_mk,
            'sks': self.sks,
            'semester': self.semester,
        }
    
    def __repr__(self):
        """
        Representasi string dari object Matakuliah
        """
        return f"<Matakuliah(kode_mk='{self.kode_mk}', nama_mk='{self.nama_mk}')>"


# Fungsi untuk inisialisasi database
def initialize_db(settings):
    """
    Inisialisasi koneksi database
    
    Args:
        settings: Dictionary berisi konfigurasi aplikasi
        
    Returns:
        DBSession: Session untuk operasi database
    """
    engine = create_engine(settings['sqlalchemy.url'])
    Base.metadata.bind = engine
    DBSession = sessionmaker(bind=engine)
    return DBSession()