import ProductCard from '../ProductCard/ProductCard';
import './ProductGrid.css';

function ProductGrid({ products, onAddToCart }) {
  if (products.length === 0) {
    return <p className="empty-state">No products match your selection.</p>;
  }

  return (
    <div className="product-grid-shell">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
      ))}
    </div>
  );
}

export default ProductGrid;
