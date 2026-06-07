import { useEffect, useMemo, useState } from 'react';
import './ProductCard.css';

function ProductCard({ product, onAddToCart }) {
  const [hovered, setHovered] = useState(false);
  const [slideIndex, setSlideIndex] = useState(0);

  const currentImage = useMemo(
    () => product.images[slideIndex % product.images.length],
    [product.images, slideIndex],
  );

  useEffect(() => {
    if (!hovered) {
      setSlideIndex(0);
      return undefined;
    }

    const interval = window.setInterval(() => {
      setSlideIndex((index) => (index + 1) % product.images.length);
    }, 1800);

    return () => {
      window.clearInterval(interval);
    };
  }, [hovered, product.images.length]);

  return (
    <article
      className="product-card"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="product-card-image">
        <img src={currentImage} alt={product.name} />
      </div>
      <div className="product-card-content">
        <div>
          <p className="product-card-title">{product.name}</p>
          <p className="product-card-price">${product.price.toFixed(2)}</p>
        </div>
        <button className="product-card-button" onClick={() => onAddToCart(product)}>
          Add to Cart
        </button>
      </div>
    </article>
  );
}

export default ProductCard;
