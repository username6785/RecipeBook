# 🍽️ RecipeBook Web App

RecipeBook is a responsive, multi-page web application built with **HTML**, **CSS**, and **JavaScript**. It allows users to add, view, and search for delicious recipes by category—all stored locally in the browser using `localStorage`.

---

## 🚀 Features

- Add unlimited recipes with images, ingredients, and steps
- Categorize recipes: Breakfast, Lunch, Dinner, Desserts, Snacks
- Search recipes by name or keyword (redirects to matching category)
- View complete recipe details on a dedicated page
- Featured Recipes section (latest 4 added recipes)
- Responsive layout with dropdown menu and mobile navigation
- Static **Privacy Policy** and **Terms of Use** pages
- No backend required – pure frontend project with localStorage

---

## 📁 Project Structure

RecipeBook/
├── index.html
├── add-recipe.html
├── category.html
├── recipe-details.html
├── search.html
├── privacy.html
├── terms.html
│
├── css/
│ └── style.css
│
├── js/
│ ├── main.js
│ ├── add-recipe.js
│ ├── category.js
│ ├── recipe-details.js
│ ├── search.js
│
├── assets/
│ ├── images/
│ 



---

## 💡 How It Works

- **Add Recipe**: User fills out a form; the data is saved in `localStorage` with base64 image encoding.
- **Featured Recipes**: The latest 4 recipes appear on the homepage.
- **Search**: Keywords are stored in `sessionStorage` and used to redirect to relevant results.
- **Category Pages**: Recipes are filtered by category and displayed dynamically.
- **Recipe Details**: A full view of the selected recipe with image, ingredients, and preparation steps.

---

## 🧪 Technologies Used

- HTML5
- CSS3
- JavaScript (ES6)
- Font Awesome (for icons)
- localStorage & sessionStorage

---

## 📄 Static Pages

- `privacy.html`: Outlines how user data (recipes) is handled locally.
- `terms.html`: Terms and conditions for using the app.

Both are linked in the footer on all pages.

---

## 📱 Responsive Design

- Built with CSS Grid and Flexbox
- Mobile-friendly dropdown menus
- Scales well across desktop, tablet, and mobile devices

---