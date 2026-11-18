import { useState, useEffect, useMemo } from "react";
import { fetchProducts, fetchCategories } from "../api/products";
import ProductCard from "../components/ProductCard";

export default function Shop() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;
    Promise.all([fetchProducts(), fetchCategories()])
      .then(([productsData, categoriesData]) => {
        if (isMounted) {
          setProducts(productsData);
          setCategories(categoriesData);
          setLoading(false);
        }
      })
      .catch((err) => {
        if (isMounted) {
          setError(err.message || "Failed to load shop items");
          setLoading(false);
        }
      });

    return () => {
      isMounted = false;
    };
  }, []);

  const filteredProducts = useMemo(() => {
    return products.filter((item) => {
      const matchesSearch = item.title
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      const matchesCategory =
        !selectedCategory || item.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [products, searchTerm, selectedCategory]);

  return (
    <div className="container section">
      <div className="section-heading">
        <div>
          <p className="eyebrow">Explore Our Catalog</p>
          <h2>All Products</h2>
        </div>
      </div>

      <div className="filters">
        <input
          type="text"
          placeholder="Search products by title..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          aria-label="Search products"
        />

        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          aria-label="Filter by category"
        >
          <option value="">All Categories</option>
          {categories.map((cat) => {
            const catName = typeof cat === "string" ? cat : cat.name || cat.slug;
            const catValue = typeof cat === "string" ? cat : cat.slug || cat.name;
            return (
              <option key={catValue} value={catValue}>
                {catName}
              </option>
            );
          })}
        </select>
      </div>

      <div className="results-count">
        Showing {filteredProducts.length} of {products.length} products
      </div>

      {loading && (
        <div className="status-message">
          <span className="spinner"></span> Loading products catalog...
        </div>
      )}

      {error && <div className="error-message">{error}</div>}

      {!loading && !error && filteredProducts.length === 0 && (
        <div className="empty-state">
          <div className="empty-icon">🔍</div>
          <h2>No products found</h2>
          <p>Try adjusting your search or category filter.</p>
          <button
            onClick={() => {
              setSearchTerm("");
              setSelectedCategory("");
            }}
            className="button"
          >
            Reset Filters
          </button>
        </div>
      )}

      {!loading && !error && filteredProducts.length > 0 && (
        <div className="product-grid">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}

