import { Link, NavLink } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";

export default function Navbar() {
  const { totalItems } = useCart();
  const { isAuthenticated, user, logout } = useAuth();

  return (
    <header className="navbar">
      <div className="nav-inner">
        <Link to="/" className="brand">
          Shop<span>Zone</span>
        </Link>

        <nav className="nav-links">
          <NavLink
            to="/"
            end
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Home
          </NavLink>
          <NavLink
            to="/shop"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Shop
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Contact
          </NavLink>
        </nav>

        <div className="nav-actions">
          <Link to="/cart" className="cart-link" aria-label="Shopping Cart">
            🛒 Cart <span className="cart-badge">{totalItems}</span>
          </Link>

          {isAuthenticated ? (
            <button
              onClick={logout}
              className="button button-small button-outline"
              title={`Logged in as ${user?.name || "Guest"}`}
            >
              Logout
            </button>
          ) : (
            <Link to="/login" className="button button-small">
              Login
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}

