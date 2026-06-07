import { useCallback, useMemo, useState } from 'react';
import Sidebar from '../../components/Sidebar/Sidebar';
import SortDropdown from '../../components/SortDropdown/SortDropdown';
import ProductGrid from '../../components/ProductGrid/ProductGrid';
import './Products.css';

const sortFunctions = {
  'price-asc': (a, b) => a.price - b.price,
  'price-desc': (a, b) => b.price - a.price,
  newest: (a, b) => b.id - a.id,
};

function Products({ products, searchQuery, addToCart }) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedTag, setSelectedTag] = useState('all');
  const [sortOption, setSortOption] = useState('default');

  const handleCategorySelect = useCallback((value) => {
    const tags = ['new-arrival', 'best-seller', 'sale'];
    if (tags.includes(value)) {
      setSelectedTag(value);
      setSelectedCategory('all');
    } else {
      setSelectedCategory(value);
      setSelectedTag('all');
    }
  }, []);

  const filteredProducts = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    return products
      .filter((product) => {
        if (selectedCategory !== 'all' && product.category !== selectedCategory) {
          return false;
        }

        if (selectedTag !== 'all' && !product.tags.includes(selectedTag)) {
          return false;
        }

        if (!query) {
          return true;
        }

        const combined = [product.name, product.category, product.subCategory, ...product.tags].join(' ').toLowerCase();
        return combined.includes(query);
      })
      .sort((a, b) => {
        if (sortFunctions[sortOption]) {
          return sortFunctions[sortOption](a, b);
        }
        if (sortOption === 'best-seller') {
          return (b.tags.includes('best-seller') ? 1 : 0) - (a.tags.includes('best-seller') ? 1 : 0);
        }
        if (sortOption === 'sale') {
          return (b.tags.includes('sale') ? 1 : 0) - (a.tags.includes('sale') ? 1 : 0);
        }
        return a.id - b.id;
      });
  }, [products, searchQuery, selectedCategory, selectedTag, sortOption]);

  return (
    <section className="products-shell">
      <div className="products-grid-header">
        <div>
          <p className="eyebrow">Shop</p>
          <h2>Explore the full streetwear collection.</h2>
        </div>
        <button className="clear-filter" onClick={() => {
          setSelectedCategory('all');
          setSelectedTag('all');
          setSortOption('default');
        }}>
          Clear Filters
        </button>
      </div>

      <div className="products-layout">
        <Sidebar selectedCategory={selectedCategory !== 'all' ? selectedCategory : selectedTag} onSelectCategory={handleCategorySelect} />

        <div className="products-main">
          <div className="products-toolbar">
            <div>
              <p className="text-muted">Showing {filteredProducts.length} products</p>
              <p className="products-filter-state">
                {selectedCategory !== 'all' && `Category: ${selectedCategory}`}
                {selectedTag !== 'all' && `Tag: ${selectedTag}`}
              </p>
            </div>
            <SortDropdown value={sortOption} onChange={setSortOption} />
          </div>

          <ProductGrid products={filteredProducts} onAddToCart={addToCart} />
        </div>
      </div>
    </section>
  );
}

export default Products;
