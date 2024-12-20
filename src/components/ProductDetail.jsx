import React from 'react';

const ProductDetail = ({ book, onClose, onAddToCart }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-header">
          <h2 className="modal-title">{book.title}</h2>
          <button onClick={onClose} className="close-button">
            ✕
          </button>
        </div>
        <div className="modal-body">
          <img
            src={book.img}
            alt={book.title}
            className="modal-image"
          />
          <div className="modal-product-info">
            <p className="modal-author">{book.author}</p>
        
            <p className="modal-description">{book.description}</p>
            <p className="modal-price">{book.price} AZN</p>
            <p className="modal-stock">Stok: {book.stock} ədəd</p>
            <button
              onClick={() => {
                onAddToCart(book);
                onClose();
              }}
              disabled={book.stock === 0}
              className="add-to-cart-button"
            >
              {book.stock === 0 ? 'Stokda yoxdur' : 'Səbətə əlavə et'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;