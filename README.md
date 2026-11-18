# ShopZone - Modern E-Commerce Single Page Application (SPA)

ShopZone is a clean, modern, and responsive e-commerce web application built with **React**, **Vite**, and **React Router DOM**. It fetches real products dynamically from the DummyJSON API and provides a complete shopping cart and mock checkout experience.

---

## 🚀 Features

- **Home Page**: Hero banner with promotions and featured product showcase.
- **Product Catalog (Shop)**:
  - Real-time search by product title.
  - Filter by product categories.
  - Responsive product card grid with badges and pricing.
- **Product Details Page**:
  - Dynamic routing (`/product/:id`).
  - High-resolution product images, descriptions, ratings, and instant add-to-cart.
- **Shopping Cart**:
  - Context API state management persisted in `localStorage`.
  - Add to cart, adjust quantities (+ / -), and remove items.
  - Automatic calculation of item counts and aggregate total price.
- **Mock Authentication & Checkout**:
  - One-click Guest Login stored in `localStorage`.
  - Protected checkout route (`/checkout`) that redirects unauthenticated users to `/login`.
  - Simple checkout form with shipping info and instant order confirmation.
- **Contact Page**: Responsive contact form with client-side validation.
- **Vercel Ready**: Includes `vercel.json` rewrite configuration for seamless client-side SPA routing.

---

## 🛠️ Tech Stack

- **Frontend**: React 18
- **Build Tool**: Vite
- **Routing**: React Router DOM v6
- **State Management**: React Context API (`CartContext`, `AuthContext`)
- **API**: [DummyJSON Products API](https://dummyjson.com/products)
- **Styling**: Pure CSS with responsive design (Mobile, Tablet, Desktop)
- **Deployment**: Vercel

---

## 💻 Local Setup & Development

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Local Development Server
```bash
npm run dev
```
Open your browser at the local URL shown in your terminal (usually `http://localhost:5173`).

### 3. Build for Production
```bash
npm run build
```
This bundles the optimized application into the `dist/` directory.

### 4. Preview Production Build
```bash
npm run preview
```

---

## ☁️ How to Deploy on Vercel

Deploying ShopZone to Vercel is simple and takes just 2 minutes:

### Option 1: Deploy with Git & GitHub (Recommended)

1. Initialize git and commit your files:
   ```bash
   git init
   git add .
   git commit -m "Initial commit - ShopZone e-commerce application"
   ```
2. Create a new repository on [GitHub](https://github.com) and push your code:
   ```bash
   git branch -M main
   git remote add origin https://github.com/<your-username>/<your-repo-name>.git
   git push -u origin main
   ```
3. Go to [Vercel](https://vercel.com) and sign in.
4. Click **"Add New..."** -> **"Project"**.
5. Select and import your GitHub repository.
6. Vercel automatically detects **Vite**:
   - **Framework Preset**: `Vite`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`
7. Click **"Deploy"**.
8. Your project is live! The `vercel.json` file ensures that page refreshes on sub-routes like `/shop` or `/cart` work properly without 404 errors.

---

### Option 2: Deploy directly via Vercel CLI

1. Install Vercel CLI globally (if not already installed):
   ```bash
   npm install -g vercel
   ```
2. In the project root directory, run:
   ```bash
   vercel
   ```
3. Follow the short terminal prompts (confirm project path and default settings).
4. For production deployment, run:
   ```bash
   vercel --prod
   ```

---

## 📁 Project Structure

```
├── .gitignore               # Ignores node_modules, dist, etc.
├── index.html               # Main HTML entry file
├── package.json             # Project dependencies and build scripts
├── vercel.json              # Vercel SPA routing rewrite rules
├── vite.config.js           # Vite build and React plugin configuration
├── src/
│   ├── api/
│   │   └── products.js      # DummyJSON API fetch helper functions
│   ├── components/
│   │   ├── Navbar.jsx       # Header navigation with live cart count
│   │   ├── Footer.jsx       # Responsive footer
│   │   ├── ProductCard.jsx  # Card displaying product thumbnail and details
│   │   └── ProtectedRoute.jsx # Route guard for /checkout
│   ├── context/
│   │   ├── CartContext.jsx  # Cart state & localStorage persistence
│   │   └── AuthContext.jsx  # Guest login & localStorage persistence
│   ├── pages/
│   │   ├── Home.jsx         # Landing page with hero banner & featured items
│   │   ├── Shop.jsx         # Searchable, filterable catalog
│   │   ├── ProductDetails.jsx # Detailed single product view
│   │   ├── Cart.jsx         # Cart items list, quantity editor, summary
│   │   ├── Checkout.jsx     # Order form & confirmation
│   │   ├── Contact.jsx      # Support contact form with validation
│   │   ├── Login.jsx        # Guest sign-in page
│   │   └── NotFound.jsx     # 404 fallback page
│   ├── App.jsx              # Routes configuration
│   ├── main.jsx             # React DOM root & Context providers
│   └── styles.css           # Styling for all components
```
