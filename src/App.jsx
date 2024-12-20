'use client'

import React, { useState } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import BookCard from './components/BookCard';
import CartSection from './components/CartSection';
import ProductDetail from './components/ProductDetail';
import initialBooks  from './data/data';
import './app.css';

const App = () => {
  const [books, setBooks] = useState(initialBooks);
  const [cart, setCart] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('Hamısı');
  const [searchQuery, setSearchQuery] = useState('');
  const [showProductDetail, setShowProductDetail] = useState(null);

  const categories = ['Hamısı', ...new Set(initialBooks.map(book => book.category))];

  const filteredBooks = books.filter(book => {
    const matchesCategory = selectedCategory === 'Hamısı' || book.category === selectedCategory;
    const matchesSearch = book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         book.author.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const addToCart = (book) => {
    if (book.stock > 0) {
      const existingItem = cart.find(item => item.id === book.id);
      if (existingItem) {
        if (existingItem.quantity < book.stock) {
          setCart(cart.map(item =>
            item.id === book.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ));
        }
      } else {
        setCart([...cart, { ...book, quantity: 1 }]);
      }
      
      setBooks(books.map(b =>
        b.id === book.id
          ? { ...b, stock: b.stock - 1 }
          : b
      ));
    }
  };

  const removeFromCart = (bookId) => {
    const removedItem = cart.find(item => item.id === bookId);
    setCart(cart.filter(item => item.id !== bookId));
    
    setBooks(books.map(b =>
      b.id === bookId
        ? { ...b, stock: b.stock + removedItem.quantity }
        : b
    ));
  };

  const toggleFavorite = (bookId) => {
    setBooks(books.map(book =>
      book.id === bookId
        ? { ...book, isFavorite: !book.isFavorite }
        : book
    ));
  };

  const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <div className="min-h-screen bg-gray-100">
      <Header cartItemsCount={cart.length} />
      
      <main>
        <div className="content-wrapper container">
          <Sidebar
            categories={categories}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
          />

          <div className="products-grid">
            {filteredBooks.map(book => (
              <BookCard
                key={book.id}
                book={book}
                onAddToCart={addToCart}
                onToggleFavorite={toggleFavorite}
                onShowDetail={(book) => setShowProductDetail(book)}
              />
            ))}
          </div>

          <CartSection 
            cart={cart}
            total={total}
            onRemoveFromCart={removeFromCart}
          />
        </div>
      </main>

      {showProductDetail && (
        <ProductDetail
          book={showProductDetail}
          onClose={() => setShowProductDetail(null)}
          onAddToCart={addToCart}
        />
      )}
    </div>
  );
};

export default App;
