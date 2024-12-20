import React from 'react';
import { Search } from 'lucide-react';
import '../assets/styles/sidebar.css'

const Sidebar = ({ categories, selectedCategory, setSelectedCategory, searchQuery, setSearchQuery }) => {
  return (
    <aside className="sidebar">
      <div className="search-container">
        <input
          type="text"
          placeholder="Kitab və ya müəllif axtar..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="search-input"
        />
        <Search className="search-icon" />
      </div>

      <div className="categories-container">
        <h2 className="category-title">Kateqoriyalar</h2>
        <div className="categories-list">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`category-button ${selectedCategory === category ? 'active' : ''}`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;