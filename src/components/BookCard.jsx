import React from 'react';
import { Heart } from 'lucide-react';
import '../assets/styles/bookcard.css'

const BookCard = ({ book, onAddToCart, onToggleFavorite, onShowDetail }) => {
  return (
    <div className="product-card">
      <img
        src={book.img}
        alt={book.title}
        className="product-image"
        onClick={() => onShowDetail(book)}
      />
      <div className="product-header">
        <h3 className="product-title">{book.title}</h3>
        <button
          onClick={() => onToggleFavorite(book.id)}
          className={`favorite-button ${book.isFavorite ? 'active' : ''}`}
        >
          <Heart className="h-5 w-5" />
        </button>
      </div>
      <p className="product-author">{book.author}</p>
      <p className="product-category">{book.category}</p>
      <p className="product-stock">Stok: {book.stock} ədəd</p>
      <div className="product-footer">
        <span className="product-price">{book.price} AZN</span>
        <button
          onClick={() => onAddToCart(book)}
          disabled={book.stock === 0}
          className="add-to-cart-button"
        >
          {book.stock === 0 ? 'Stokda yoxdur' : 'Səbətə əlavə et'}
        </button>
      </div>
    </div>
  );
};

export default BookCard;