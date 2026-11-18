import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="container section">
      <div className="empty-state">
        <div className="empty-icon">404</div>
        <h2>Page Not Found</h2>
        <p>Sorry, the page you are looking for does not exist or has been moved.</p>
        <Link to="/" className="button">
          Back to Home
        </Link>
      </div>
    </div>
  );
}

