import React, { useState, useEffect } from 'react';
import { useBooks } from '../../context/BookContext';
import './BookForm.css';

function BookForm({ bookToEdit, onCancel }) {
  const { addBook, updateBook } = useBooks();
  const [formData, setFormData] = useState({
    judul: '',
    penulis: '',
    status: 'milik'
  });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (bookToEdit) {
      setFormData({
        judul: bookToEdit.judul,
        penulis: bookToEdit.penulis,
        status: bookToEdit.status
      });
    }
  }, [bookToEdit]);

  const validate = () => {
    const newErrors = {};
    if (!formData.judul.trim()) {
      newErrors.judul = 'Judul harus diisi';
    }
    if (!formData.penulis.trim()) {
      newErrors.penulis = 'Penulis harus diisi';
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    if (bookToEdit) {
      updateBook(bookToEdit.id, formData);
      onCancel();
    } else {
      addBook(formData);
      setFormData({ judul: '', penulis: '', status: 'milik' });
    }
    setErrors({});
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // clear error saat user mulai ngetik
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  return (
    <div className="book-form">
      <h2>{bookToEdit ? 'Edit Buku' : 'Tambah Buku Baru'}</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Judul Buku</label>
          <input
            type="text"
            name="judul"
            value={formData.judul}
            onChange={handleChange}
            placeholder="Masukkan judul buku"
          />
          {errors.judul && <span className="error-msg">{errors.judul}</span>}
        </div>

        <div className="form-group">
          <label>Penulis</label>
          <input
            type="text"
            name="penulis"
            value={formData.penulis}
            onChange={handleChange}
            placeholder="Masukkan nama penulis"
          />
          {errors.penulis && <span className="error-msg">{errors.penulis}</span>}
        </div>

        <div className="form-group">
          <label>Status</label>
          <select name="status" value={formData.status} onChange={handleChange}>
            <option value="milik">Sudah Dimiliki</option>
            <option value="baca">Sedang Dibaca</option>
            <option value="beli">Ingin Dibeli</option>
          </select>
        </div>

        <div className="form-actions">
          <button type="submit" className="btn-primary">
            {bookToEdit ? 'Update' : 'Tambah'}
          </button>
          {bookToEdit && (
            <button type="button" onClick={onCancel} className="btn-secondary">
              Batal
            </button>
          )}
        </div>
      </form>
    </div>
  );
}

export default BookForm;