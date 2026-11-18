import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div>
          <div className="brand">
            Shop<span>Zone</span>
          </div>
          <p>Your one-stop destination for modern everyday shopping.</p>
        </div>

        <div className="footer-links">
          <Link to="/">Home</Link>
          <Link to="/shop">Shop</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/cart">Cart</Link>
        </div>

        <small>© {new Date().getFullYear()} ShopZone. All rights reserved.</small>
      </div>
    </footer>
  );
}

