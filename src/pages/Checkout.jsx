import { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";

export default function Checkout() {
  const { cartItems, totalPrice, totalItems, clearCart } = useCart();
  const { user } = useAuth();

  const [shippingInfo, setShippingInfo] = useState({
    fullName: user?.name || "Guest Customer",
    address: "",
    city: "",
    zipCode: "",
  });
  const [isOrdered, setIsOrdered] = useState(false);
  const [orderId, setOrderId] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setShippingInfo((prev) => ({ ...prev, [name]: value }));
    if (error) setError("");
  };

  const handlePlaceOrder = (e) => {
    e.preventDefault();

    if (!shippingInfo.address.trim() || !shippingInfo.city.trim() || !shippingInfo.zipCode.trim()) {
      setError("Please complete all shipping address fields.");
      return;
    }

    const newOrderId = "SZ-" + Math.floor(100000 + Math.random() * 900000);
    setOrderId(newOrderId);
    setIsOrdered(true);
    clearCart();
  };

  if (isOrdered) {
    return (
      <div className="container narrow-section section">
        <div className="login-card checkout-card">
          <div className="success-icon">✓</div>
          <h1>Order Confirmed!</h1>
          <p className="muted">
            Thank you for shopping with ShopZone! Your order <strong>#{orderId}</strong> has been
            placed successfully.
          </p>
          <div style={{ margin: "24px 0", textAlign: "left", background: "#f8f9fc", padding: "16px", borderRadius: "10px" }}>
            <p><strong>Shipping to:</strong> {shippingInfo.fullName}</p>
            <p>{shippingInfo.address}, {shippingInfo.city} {shippingInfo.zipCode}</p>
            <p><strong>Delivery:</strong> Estimated in 3-5 business days</p>
          </div>
          <Link to="/shop" className="button button-full">
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  if (cartItems.length === 0) {
    return (
      <div className="container section">
        <div className="empty-state">
          <div className="empty-icon">🛒</div>
          <h2>Your Cart is Empty</h2>
          <p>Please add some products to your cart before proceeding to checkout.</p>
          <Link to="/shop" className="button">
            Browse Products
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container section">
      <h1>Checkout</h1>
      <p className="muted">Complete your shipping information to place your order.</p>

      <div className="cart-layout">
        <div>
          {error && <div className="error-message">{error}</div>}

          <form onSubmit={handlePlaceOrder} className="form-card">
            <h2>Shipping Information</h2>

            <label>
              Full Name
              <input
                type="text"
                name="fullName"
                value={shippingInfo.fullName}
                onChange={handleChange}
                required
              />
            </label>

            <label>
              Street Address
              <input
                type="text"
                name="address"
                placeholder="123 Main Street, Apt 4"
                value={shippingInfo.address}
                onChange={handleChange}
                required
              />
            </label>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px" }}>
              <label>
                City
                <input
                  type="text"
                  name="city"
                  placeholder="New York"
                  value={shippingInfo.city}
                  onChange={handleChange}
                  required
                />
              </label>

              <label>
                Postal / Zip Code
                <input
                  type="text"
                  name="zipCode"
                  placeholder="10001"
                  value={shippingInfo.zipCode}
                  onChange={handleChange}
                  required
                />
              </label>
            </div>

            <button type="submit" className="button button-full">
              Confirm & Place Order (${totalPrice})
            </button>
          </form>
        </div>

        <aside className="summary-card">
          <h2>Order Summary</h2>
          <div className="summary-line">
            <span>Items Count</span>
            <span>{totalItems}</span>
          </div>
          <div className="summary-line">
            <span>Shipping</span>
            <span>Free Express</span>
          </div>
          <div className="summary-total">
            <span>Total to Pay</span>
            <strong>${totalPrice}</strong>
          </div>
          <p className="small-note">
            Secure checkout. No real payment will be charged (Mock checkout).
          </p>
        </aside>
      </div>
    </div>
  );
}

