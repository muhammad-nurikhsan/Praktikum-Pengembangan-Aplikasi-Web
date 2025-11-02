import React from 'react';
import { useBooks } from '../../context/BookContext';
import './BookFilter.css';

function BookFilter() {
  const { filter, setFilter, searchTerm, setSearchTerm } = useBooks();

  const filters = [
    { value: 'semua', label: 'Semua' },
    { value: 'milik', label: 'Sudah Dimiliki' },
    { value: 'baca', label: 'Sedang Dibaca' },
    { value: 'beli', label: 'Ingin Dibeli' }
  ];

  return (
    <div className="book-filter">
      <div className="search-box">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="🔍 Cari judul atau penulis..."
        />
      </div>
      <div className="filter-buttons">
        {filters.map(f => (
          <button
            key={f.value}
            onClick={() => setFilter(f.value)}
            className={`filter-btn ${filter === f.value ? 'active' : ''}`}
          >
            {f.label}
          </button>
        ))}
      </div>
    </div>
  );
}

export default BookFilter;