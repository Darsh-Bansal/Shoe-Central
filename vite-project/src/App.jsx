import { useCallback, useMemo, useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import Products from './pages/Products/Products';
import Cart from './pages/Cart/Cart';
import productsData from './data/products';
import './styles/global.css';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [cart, setCart] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  const cartCount = useMemo(
    () => cart.reduce((sum, item) => sum + item.quantity, 0),
    [cart],
  );

  const addToCart = useCallback((product) => {
    setCart((previousCart) => {
      const existing = previousCart.find((item) => item.id === product.id);
      if (existing) {
        return previousCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item,
        );
      }
      return [...previousCart, { ...product, quantity: 1 }];
    });
  }, []);

  const incrementItem = useCallback((productId) => {
    setCart((previousCart) =>
      previousCart.map((item) =>
        item.id === productId ? { ...item, quantity: item.quantity + 1 } : item,
      ),
    );
  }, []);

  const decrementItem = useCallback((productId) => {
    setCart((previousCart) =>
      previousCart
        .map((item) =>
          item.id === productId ? { ...item, quantity: item.quantity - 1 } : item,
        )
        .filter((item) => item.quantity > 0),
    );
  }, []);

  const handleNavigate = useCallback((page) => {
    setCurrentPage(page);
  }, []);

  return (
    <div className="app-shell">
      <Navbar
        currentPage={currentPage}
        onNavigate={handleNavigate}
        cartCount={cartCount}
        searchValue={searchQuery}
        onSearchChange={setSearchQuery}
      />
      <main className="app-content">
        {currentPage === 'home' && (
          <Home products={productsData} onShopNow={() => handleNavigate('products')} addToCart={addToCart} />
        )}
        {currentPage === 'products' && (
          <Products products={productsData} searchQuery={searchQuery} addToCart={addToCart} />
        )}
        {currentPage === 'cart' && (
          <Cart cart={cart} incrementItem={incrementItem} decrementItem={decrementItem} />
        )}
      </main>
      <Footer />
    </div>
  );
}

export default App;
