const BASE_URL = "https://dummyjson.com/products";

export async function fetchProducts() {
  const response = await fetch(`${BASE_URL}?limit=30`);
  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }
  const data = await response.json();
  return data.products;
}

export async function fetchProductById(id) {
  const response = await fetch(`${BASE_URL}/${id}`);
  if (!response.ok) {
    throw new Error("Product not found");
  }
  return await response.json();
}

export async function fetchCategories() {
  const response = await fetch(`${BASE_URL}/category-list`);
  if (!response.ok) {
    throw new Error("Failed to fetch categories");
  }
  return await response.json();
}

