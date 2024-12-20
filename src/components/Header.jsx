import React from 'react';
import { ShoppingCart } from 'lucide-react';
import '../assets/styles/header.css'

const Header = ({ cartItemsCount }) => {
  return (
    <header>
      <div className="header-content container">
        <h1 className="store-title">Kitab Mağazası</h1>
        <div className="cart-icon-container">
          <ShoppingCart className="cart-icon" />
          {cartItemsCount > 0 && (
            <span className="cart-badge">
              {cartItemsCount}
            </span>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;