import SearchBar from '../SearchBar/SearchBar';
import './Navbar.css';

function Navbar({ currentPage, onNavigate, cartCount, searchValue, onSearchChange }) {
  return (
    <header className="navbar-shell">
      <div className="navbar-brand">
        <button className="navbar-logo" onClick={() => onNavigate('home')}>
          KIXOR
        </button>
        <nav className="navbar-links">
          <button className={currentPage === 'home' ? 'active' : ''} onClick={() => onNavigate('home')}>
            Home
          </button>
          <button className={currentPage === 'products' ? 'active' : ''} onClick={() => onNavigate('products')}>
            Shop
          </button>
          
        </nav>
      </div>

      <div className="navbar-actions">
        <SearchBar value={searchValue} onChange={onSearchChange} />
        <button className="cart-badge" onClick={() => onNavigate('cart')}>
          <span>🛒</span>
          <span>{cartCount}</span>
        </button>
      </div>
    </header>
  );
}

export default Navbar;
