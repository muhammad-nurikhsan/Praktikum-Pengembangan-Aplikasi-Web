import React, { useState } from 'react';
import Header from '../../components/Header/Header';
import BookForm from '../../components/BookForm/BookForm';
import BookFilter from '../../components/BookFilter/BookFilter';
import BookList from '../../components/BookList/BookList';
import './Home.css';

function Home() {
  const [editingBook, setEditingBook] = useState(null);
  const [showForm, setShowForm] = useState(false);

  const handleEdit = (book) => {
    setEditingBook(book);
    setShowForm(true);
  };

  const handleCancel = () => {
    setEditingBook(null);
    setShowForm(false);
  };

  return (
    <div className="home">
      <Header
        title="Manajemen Buku Pribadi"
        description="Kelola koleksi buku Anda dengan mudah"
      />
      <main className="container">
        {!showForm && (
          <button onClick={() => setShowForm(true)} className="btn-add-book">
            ➕ Tambah Buku Baru
          </button>
        )}
        {showForm && (
          <BookForm bookToEdit={editingBook} onCancel={handleCancel} />
        )}
        <BookFilter />
        <BookList onEdit={handleEdit} />
      </main>
    </div>
  );
}

export default Home;