import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function ProductCard({ product }) {
  const { addToCart } = useCart();

  return (
    <article className="product-card">
      <div className="product-image-wrap">
        {product.discountPercentage && (
          <span className="discount-tag">
            -{Math.round(product.discountPercentage)}%
          </span>
        )}
        <img
          src={product.thumbnail || product.images?.[0]}
          alt={product.title}
          loading="lazy"
        />
      </div>

      <div className="product-card-body">
        <p className="eyebrow">{product.category}</p>
        <h3 title={product.title}>{product.title}</h3>

        <div className="product-card-bottom">
          <strong>${product.price}</strong>
          <div style={{ display: "flex", gap: "8px" }}>
            <Link
              to={`/product/${product.id}`}
              className="text-link"
              style={{ alignSelf: "center" }}
            >
              Details
            </Link>
            <button
              onClick={() => addToCart(product)}
              className="button button-small"
              type="button"
            >
              + Add
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}

