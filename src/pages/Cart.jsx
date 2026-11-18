import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function Cart() {
  const {
    cartItems,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    totalItems,
    totalPrice,
  } = useCart();

  if (cartItems.length === 0) {
    return (
      <div className="container section">
        <div className="empty-state">
          <div className="empty-icon">🛒</div>
          <h2>Your Cart is Empty</h2>
          <p>Discover our amazing deals and add your favorite items today.</p>
          <Link to="/shop" className="button">
            Start Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container section">
      <h1>Shopping Cart</h1>
      <p className="muted">Review your items and proceed to checkout.</p>

      <div className="cart-layout">
        <div className="cart-items">
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <img
                src={item.thumbnail || item.images?.[0]}
                alt={item.title}
              />

              <div className="cart-item-info">
                <p className="eyebrow">{item.category}</p>
                <h3>{item.title}</h3>
                <p className="muted">${item.price}</p>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="remove-button"
                  type="button"
                >
                  Remove
                </button>
              </div>

              <div className="quantity-control">
                <button
                  onClick={() => decreaseQuantity(item.id)}
                  aria-label="Decrease quantity"
                  type="button"
                >
                  -
                </button>
                <span>{item.quantity}</span>
                <button
                  onClick={() => increaseQuantity(item.id)}
                  aria-label="Increase quantity"
                  type="button"
                >
                  +
                </button>
              </div>

              <strong className="line-total">
                ${(item.price * item.quantity).toFixed(2)}
              </strong>
            </div>
          ))}
        </div>

        <aside className="summary-card">
          <h2>Order Summary</h2>
          <div className="summary-line">
            <span>Total Items</span>
            <span>{totalItems}</span>
          </div>
          <div className="summary-line">
            <span>Shipping</span>
            <span>Free</span>
          </div>
          <div className="summary-total">
            <span>Grand Total</span>
            <strong>${totalPrice}</strong>
          </div>

          <Link to="/checkout" className="button button-full">
            Proceed to Checkout
          </Link>

          <p className="small-note">
            Standard delivery (3-5 business days) is complimentary. Taxes included.
          </p>
        </aside>
      </div>
    </div>
  );
}

