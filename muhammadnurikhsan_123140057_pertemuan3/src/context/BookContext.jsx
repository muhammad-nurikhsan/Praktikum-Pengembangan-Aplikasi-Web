import React, { createContext, useContext, useState, useMemo } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

const BookContext = createContext();

export function useBooks() {
  const context = useContext(BookContext);
  if (!context) {
    throw new Error('useBooks must be used within a BookProvider');
  }
  return context;
}

export function BookProvider({ children }) {
  const [books, setBooks] = useLocalStorage('myBooks', []);
  const [filter, setFilter] = useState('semua');
  const [searchTerm, setSearchTerm] = useState('');

  const addBook = (book) => {
    const newBook = {
      id: Date.now(),
      ...book,
      createdAt: new Date().toISOString()
    };
    setBooks([...books, newBook]);
  };

  const updateBook = (id, updatedBook) => {
    setBooks(books.map(book => 
      book.id === id ? { ...book, ...updatedBook } : book
    ));
  };

  const deleteBook = (id) => {
    if (window.confirm('Yakin ingin menghapus buku ini?')) {
      setBooks(books.filter(book => book.id !== id));
    }
  };

  const filteredBooks = useMemo(() => {
    return books.filter(book => {
      const matchesFilter = filter === 'semua' || book.status === filter;
      const matchesSearch = 
        book.judul.toLowerCase().includes(searchTerm.toLowerCase()) ||
        book.penulis.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesFilter && matchesSearch;
    });
  }, [books, filter, searchTerm]);

  const value = {
    books,
    filteredBooks,
    filter,
    setFilter,
    searchTerm,
    setSearchTerm,
    addBook,
    updateBook,
    deleteBook
  };

  return (
    <BookContext.Provider value={value}>
      {children}
    </BookContext.Provider>
  );
}