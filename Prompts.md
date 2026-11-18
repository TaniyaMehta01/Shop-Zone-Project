PROJECT DEVELOPMENT PROMPT – SHOPZONE E-COMMERCE WEBSITE

Act as a professional React.js developer and UI/UX designer. I want to develop a complete, modern, responsive and fully functional E-Commerce Single Page Application (SPA) named "ShopZone" using React.js.

The project must follow modern React development practices and fulfill all the requirements mentioned below.

1. Technology Stack

- Frontend: React.js
- Programming Language: JavaScript (ES6+)
- Styling: HTML5 and CSS3
- Routing: React Router DOM
- State Management: React Context API and useReducer
- API Integration: Fetch API
- Data Persistence: LocalStorage
- Build Tool: Vite
- Deployment: Vercel
- Product API: https://dummyjson.com/products

2. Website Design and UI

Create an attractive, professional and modern E-Commerce website with:

- Beautiful Home Page with Welcome Banner.
- Modern Navigation Bar.
- Professional Product Cards.
- Responsive Product Grid Layout.
- Attractive Buttons and Icons.
- Consistent Color Scheme.
- Mobile, Tablet and Desktop Responsive Design.
- Clean Footer Section.

3. Main Website Modules

Module 1: Home Page

- Create an attractive landing page.
- Add a welcome banner.
- Add a Shop Now button.
- Navigate users to the Shop Page.

Module 2: Shop Page

- Fetch products from DummyJSON API.
- Display product images, names, prices and categories.
- Add product search functionality.
- Add category filtering.
- Display products in a responsive grid.

Module 3: Product Details Page

- Implement dynamic routing using "/product/:id".
- Use the "useParams()" hook to get the product ID.
- Fetch individual product details from the API.
- Display product image, title, price, rating and description.
- Add an Add to Cart button.

Module 4: Contact Page

- Create a functional Contact Form UI.
- Include Name, Email and Message fields.
- Add form validation.
- Display a success message after submission.

4. React Router Implementation

Configure BrowserRouter and implement these routes:

- "/" – Home Page
- "/shop" – Shop Page
- "/contact" – Contact Page
- "/product/:id" – Product Details
- "/cart" – Shopping Cart
- "/login" – Login Page
- "/checkout" – Protected Checkout Page

Use React Router's Link and NavLink components for navigation. Internal navigation must not cause a full browser page reload.

5. Global State Management – Context API

Create a CartContext using React Context API.

Implement the following functionalities:

- Add products to cart.
- Prevent duplicate product entries.
- Increase quantity when an existing product is added again.
- Decrease product quantity.
- Remove products from cart.
- Calculate total cart items.
- Calculate aggregate total price.

Do not use Redux.

6. Global Navbar and Shopping Cart

Create a Navbar that remains visible across all routes.

Include:

- Website Logo – ShopZone.
- Home, Shop and Contact links.
- Shopping Cart icon.
- Dynamic Cart Count Badge.
- Login/Logout option.

The cart badge must automatically update whenever the global cart state changes.

Create a Cart Page that displays:

- Product Image.
- Product Name.
- Product Price.
- Product Quantity.
- Increase and Decrease Buttons.
- Remove Button.
- Total Price.
- Checkout Button.

7. LocalStorage Integration

Implement LocalStorage to persist cart information.

Requirements:

- Save cart data whenever it changes.
- Restore cart data after browser refresh.
- Maintain product quantities.
- Ensure the cart does not become empty after refreshing the browser.

8. Authentication and Protected Routes

Implement mock authentication.

- Create a Login Page.
- Add a Login as Guest button.
- Maintain global login state using Context API.
- Store guest login status in LocalStorage.
- Create a Protected Checkout Route.
- Redirect unauthorized users to "/login".
- Redirect authenticated users to "/checkout".

9. Error Handling and Performance

Implement:

- API loading indicators.
- API error messages.
- Empty cart messages.
- Product not found page.
- Form validation.
- Proper React component structure.
- Clean and reusable code.

10. Project Folder Structure

Organize the project professionally:

- src/components/
- src/pages/
- src/context/
- src/api/
- src/assets/
- src/App.jsx
- src/main.jsx
- src/styles.css

Include all necessary configuration files such as:

- package.json
- vite.config.js
- index.html
- vercel.json
- README.md
- Prompts.md

11. Deployment Requirements

Prepare the project for GitHub and Vercel deployment.

Include:

- Production build configuration.
- Vercel SPA rewrite configuration.
- GitHub upload instructions.
- Vercel deployment instructions.
- Troubleshooting for common deployment errors.

12. Documentation Requirements

Provide complete project documentation containing:

1. Project Introduction.
2. Project Objectives.
3. Problem Statement.
4. Technology Used.
5. System Requirements.
6. Project Modules.
7. Database/API Description.
8. Project Folder Structure.
9. Implementation Details.
10. Testing.
11. Advantages.
12. Limitations.
13. Future Scope.
14. Conclusion.

13. Final Deliverables

Provide:

1. Complete React.js source code.
2. All required project files.
3. Complete folder structure.
4. Installation and setup instructions.
5. API integration.
6. Responsive website design.
7. README.md documentation.
8. Prompts.md file for recording actual AI assistance.
9. GitHub deployment instructions.
10. Vercel deployment instructions.

Important Instructions:

- Do not skip any mandatory feature.
- Write clean, understandable and properly structured code.
- Explain the purpose of every major component.
- Provide code file by file with exact filenames.
- Ensure all routes and functionalities work correctly.
- Make the website visually attractive and professional.
- Avoid unnecessary libraries.
- Explain how to run and test the project in VS Code.
- Make sure the project follows the ShopZone SPA assignment requirements.

