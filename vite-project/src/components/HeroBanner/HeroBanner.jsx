import './HeroBanner.css';

function HeroBanner({ onAction }) {
  return (
    <section className="hero-shell">
      <div className="hero-copy">
        <p className="eyebrow">Urban Streetwear</p>
        <h1>Seasonless essentials for the city.</h1>
        <p className="hero-text">
          Discover premium silhouettes, bold textures, and elevated everyday pieces built for a modern streetwear wardrobe.
        </p>
        <button className="primary-button" onClick={onAction}>
          Shop Now
        </button>
      </div>
      <div className="hero-visual">
        <div className="hero-card card-shadow">
          <p className="tag">New Arrival</p>
          <h2>Utility Cargo Pants</h2>
          <span>Style with function</span>
        </div>
      </div>
    </section>
  );
}

export default HeroBanner;
