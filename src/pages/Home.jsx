import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { fetchProducts } from "../api/products";
import ProductCard from "../components/ProductCard";

export default function Home() {
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;
    fetchProducts()
      .then((data) => {
        if (isMounted) {
          // Take the first 6 items for the home page showcase
          setFeaturedProducts(data.slice(0, 6));
          setLoading(false);
        }
      })
      .catch((err) => {
        if (isMounted) {
          setError(err.message || "Failed to load featured products");
          setLoading(false);
        }
      });

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div className="container">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow light">Special Deals</p>
          <h1>
            Modern Shopping <span>Simplified</span>
          </h1>
          <p className="hero-description">
            Discover premium electronics, beauty, groceries, and home essentials
            with unbeatable everyday prices and lightning-fast delivery.
          </p>
          <Link to="/shop" className="button button-large">
            Shop Now
          </Link>
          <div className="hero-note">
            <span>✓</span> 100% Genuine Products · Easy Returns · Fast Shipping
          </div>
        </div>

        <div className="hero-art">
          <div className="hero-orbit"></div>
          <div className="hero-orbit orbit-two"></div>
          <div className="hero-box">
            <span>SZ</span>
            <strong>30%</strong>
            <small>OFF SELECTED</small>
          </div>
          <div className="floating-card card-one">⭐ Top Rated Items</div>
          <div className="floating-card card-two">🚚 Free Delivery</div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="section">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Handpicked For You</p>
            <h2>Featured Products</h2>
          </div>
          <Link to="/shop" className="text-link">
            View All Products →
          </Link>
        </div>

        {loading && (
          <div className="status-message">
            <span className="spinner"></span> Loading featured items...
          </div>
        )}

        {error && <div className="error-message">{error}</div>}

        {!loading && !error && (
          <div className="product-grid">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}

