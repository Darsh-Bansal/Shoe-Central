import HeroBanner from '../../components/HeroBanner/HeroBanner';
import CategorySection from '../../components/CategorySection/CategorySection';
import ProductGrid from '../../components/ProductGrid/ProductGrid';
import './Home.css';

function Home({ products, onShopNow, addToCart }) {
  const featured = products.filter((product) => product.tags.includes('best-seller')).slice(0, 4);
  const newArrivals = products.filter((product) => product.tags.includes('new-arrival')).slice(0, 4);

  return (
    <section className="home-shell">
      <HeroBanner onAction={onShopNow} />

      <div className="home-welcome card-shadow">
        <div>
          <p className="eyebrow">Featured Collection</p>
          <h2>Streetwear essentials with premium layers.</h2>
        </div>
        <button className="primary-button" onClick={onShopNow}>
          Browse All
        </button>
      </div>

      <div className="home-lists">
        <CategorySection
          title="New Arrivals"
          description="Fresh drops from hoodies, tees and footwear for every move."
          cta="Shop New"
          image="https://images.unsplash.com/photo-1519744792095-2f2205e87b6f?auto=format&fit=crop&w=900&q=80"
          onAction={onShopNow}
        />
        <CategorySection
          title="Best Sellers"
          description="High demand silhouettes that keep your rotation sharp."
          cta="Shop Bests"
          image="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=900&q=80"
          onAction={onShopNow}
        />
      </div>

      <div className="home-preview">
        <div className="preview-header">
          <h2>New Arrivals Preview</h2>
          <p>Study the latest streetwear pieces before you shop.</p>
        </div>
        <ProductGrid products={newArrivals} onAddToCart={addToCart} />
      </div>

      <div className="home-preview">
        <div className="preview-header">
          <h2>Best Sellers Preview</h2>
          <p>Our most popular looks, selected by the streetwear community.</p>
        </div>
        <ProductGrid products={featured} onAddToCart={addToCart} />
      </div>
    </section>
  );
}

export default Home;
