import React from 'react';
import Header from '../../components/Header/Header';
import { useBooks } from '../../context/BookContext';
import useBookStats from '../../hooks/useBookStats';
import './Stats.css';

function Stats() {
  const { books } = useBooks();
  const stats = useBookStats(books);

  const statCards = [
    { label: 'Total Buku', value: stats.total, color: 'purple' },
    { label: 'Sudah Dimiliki', value: stats.milik, color: 'green' },
    { label: 'Sedang Dibaca', value: stats.baca, color: 'blue' },
    { label: 'Wishlist', value: stats.beli, color: 'orange' }
  ];

  return (
    <div className="stats-page">
      <Header title="Statistik Buku" description="Ringkasan koleksi buku Anda" />
      <main className="container">
        <div className="stats-grid">
          {statCards.map((stat, idx) => (
            <div key={idx} className={`stat-card stat-${stat.color}`}>
              <div className="stat-info">
                <p className="stat-label">{stat.label}</p>
                <p className="stat-value">{stat.value}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="recent-books">
          <h3>Buku Terbaru</h3>
          {books.length === 0 ? (
            <p className="empty-msg">Belum ada buku yang ditambahkan</p>
          ) : (
            <div className="recent-list">
              {books.slice().reverse().slice(0, 10).map(book => (
                <div key={book.id} className="recent-item">
                  <div>
                    <p className="recent-title">{book.judul}</p>
                    <p className="recent-author">{book.penulis}</p>
                  </div>
                  <span className={`recent-status status-${book.status}`}>
                    {book.status === 'milik' ? 'Dimiliki' : book.status === 'baca' ? 'Dibaca' : 'Wishlist'}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

export default Stats;