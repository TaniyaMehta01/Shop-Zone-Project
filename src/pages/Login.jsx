import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Login() {
  const { user, isAuthenticated, loginAsGuest, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/checkout";

  const handleGuestLogin = () => {
    loginAsGuest();
    navigate(from, { replace: true });
  };

  return (
    <div className="container narrow-section section">
      <div className="login-card">
        <div className="login-icon">👤</div>
        <h1>{isAuthenticated ? "Account Active" : "Sign In to ShopZone"}</h1>
        <p className="muted">
          {isAuthenticated
            ? `You are currently signed in as ${user?.name || "Guest"}.`
            : "Sign in with one click as a guest to proceed with checkout and manage orders."}
        </p>

        {isAuthenticated ? (
          <div style={{ marginTop: "20px", display: "grid", gap: "12px" }}>
            <button
              onClick={() => navigate(from, { replace: true })}
              className="button button-full"
            >
              Continue to {from === "/" ? "Home" : "Checkout"}
            </button>
            <button
              onClick={logout}
              className="button button-full button-outline"
            >
              Log Out
            </button>
          </div>
        ) : (
          <button
            onClick={handleGuestLogin}
            className="button button-full"
            type="button"
          >
            Continue as Guest
          </button>
        )}
      </div>
    </div>
  );
}

