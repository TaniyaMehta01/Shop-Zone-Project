import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { fetchProductById } from "../api/products";
import { useCart } from "../context/CartContext";

export default function ProductDetails() {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [added, setAdded] = useState(false);

  useEffect(() => {
    let isMounted = true;
    setLoading(true);
    fetchProductById(id)
      .then((data) => {
        if (isMounted) {
          setProduct(data);
          setLoading(false);
        }
      })
      .catch((err) => {
        if (isMounted) {
          setError(err.message || "Failed to load product details");
          setLoading(false);
        }
      });

    return () => {
      isMounted = false;
    };
  }, [id]);

  const handleAddToCart = () => {
    if (product) {
      addToCart(product);
      setAdded(true);
      setTimeout(() => setAdded(false), 2000);
    }
  };

  if (loading) {
    return (
      <div className="container section">
        <div className="status-message">
          <span className="spinner"></span> Loading product details...
        </div>
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="container section">
        <div className="empty-state">
          <div className="empty-icon">⚠️</div>
          <h2>Product Not Found</h2>
          <p>{error || "The product you requested does not exist."}</p>
          <Link to="/shop" className="button">
            Back to Shop
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container section">
      <Link to="/shop" className="back-link">
        ← Back to Shop
      </Link>

      <div className="detail-layout">
        <div className="detail-image">
          <img
            src={product.images?.[0] || product.thumbnail}
            alt={product.title}
          />
        </div>

        <div className="detail-copy">
          <p className="eyebrow">{product.category}</p>
          <h1>{product.title}</h1>

          <div className="rating">
            ★ {product.rating} <span>/ 5 ({product.reviews?.length || 0} reviews)</span>
          </div>

          <div className="detail-price">${product.price}</div>

          <p className="detail-description">{product.description}</p>

          <button
            onClick={handleAddToCart}
            className="button button-large"
            type="button"
          >
            {added ? "✓ Added to Cart!" : "Add to Cart"}
          </button>
        </div>
      </div>
    </div>
  );
}

