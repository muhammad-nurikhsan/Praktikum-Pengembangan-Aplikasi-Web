import React from 'react';
import { useBooks } from '../../context/BookContext';
import BookItem from '../BookItem/BookItem';
import './BookList.css';

function BookList({ onEdit }) {
  const { filteredBooks } = useBooks();

  if (filteredBooks.length === 0) {
    return (
      <div className="empty-state">
        <p>📚 Tidak ada buku ditemukan</p>
      </div>
    );
  }

  return (
    <div className="book-list">
      {filteredBooks.map(book => (
        <BookItem key={book.id} book={book} onEdit={onEdit} />
      ))}
    </div>
  );
}

export default BookList;