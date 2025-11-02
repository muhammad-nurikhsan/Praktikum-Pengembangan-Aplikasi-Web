import React from 'react';
import { useBooks } from '../../context/BookContext';
import './BookItem.css';

function BookItem({ book, onEdit }) {
  const { deleteBook } = useBooks();

  const getStatusInfo = (status) => {
    switch(status) {
      case 'milik':
        return { color: 'green', label: 'Dimiliki' };
      case 'baca':
        return { color: 'blue', label: 'Dibaca' };
      case 'beli':
        return { color: 'purple', label: 'Wishlist' };
      default:
        return { color: 'gray', label: status };
    }
  };

  const statusInfo = getStatusInfo(book.status);

  return (
    <div className="book-item">
      <div className="book-content">
        <div className="book-info">
          <h3>{book.judul}</h3>
          <p className="author">oleh {book.penulis}</p>
        </div>
        <div className="book-actions">
          <button onClick={() => onEdit(book)} className="btn-edit" title="Edit">
            Edit
          </button>
          <button onClick={() => deleteBook(book.id)} className="btn-delete" title="Hapus">
            Hapus
          </button>
        </div>
      </div>
      <div className={`status-badge status-${statusInfo.color}`}>
        {statusInfo.label}
      </div>
    </div>
  );
}

export default BookItem;