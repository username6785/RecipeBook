document.addEventListener("DOMContentLoaded", function () {
  renderFeaturedRecipes();
  setupSearch();
  setupDropdownHover();
  setupMobileMenu();
});

// ------------------------
// Load Recipes from Storage
// ------------------------
function getAllRecipes() {
  return JSON.parse(localStorage.getItem("recipes")) || [];
}

// ------------------------
// Render Latest Featured Recipes
// ------------------------
function renderFeaturedRecipes() {
  const allRecipes = getAllRecipes();
  const featuredContainer = document.querySelector(".recipes-grid");
  featuredContainer.innerHTML = "";

  const latestRecipes = allRecipes.slice(-4).reverse();

  latestRecipes.forEach(recipe => {
    const card = document.createElement("div");
    card.classList.add("recipe-card");
    card.innerHTML = `
      <img src="${recipe.image}" alt="${recipe.name}" class="recipe-img">
      <div class="recipe-info">
        <h3>${recipe.name}</h3>
        <p>${recipe.category}</p>
        <a href="category.html?category=${encodeURIComponent(recipe.category)}&name=${encodeURIComponent(recipe.name)}" class="btn btn-outline-small">View Recipe</a>
      </div>
    `;
    featuredContainer.appendChild(card);
  });
}

// ------------------------
// Search Logic
// ------------------------
function setupSearch() {
  const searchInput = document.querySelector(".search-box input");
  const searchButton = document.querySelector(".search-box button");

  searchButton.addEventListener("click", handleSearch);
  searchInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") handleSearch();
  });

  function handleSearch() {
    const query = searchInput.value.trim().toLowerCase();
    if (!query) return;

    const allRecipes = getAllRecipes();

    // 1. Match recipe by name
    const matchingRecipe = allRecipes.find(r =>
      r.name.toLowerCase().includes(query)
    );

    if (matchingRecipe) {
      const nameEncoded = encodeURIComponent(matchingRecipe.name);
      window.location.href = `recipe-details.html?name=${nameEncoded}`;
      return;
    }

    // 2. Match category
    const categories = ["breakfast", "lunch", "dinner", "desserts", "snacks"];
    const matchedCategory = categories.find(cat => cat === query);

    if (matchedCategory) {
      window.location.href = `category.html?category=${encodeURIComponent(matchedCategory)}`;
      return;
    }

    // 3. Fallback to search page
    sessionStorage.setItem("searchQuery", query);
    window.location.href = "search.html";
  }
}

// ------------------------
// Dropdown Hover Menu (Desktop)
// ------------------------
function setupDropdownHover() {
  const dropdown = document.querySelector(".nav-list li.dropdown");
  if (!dropdown) return;

  const menu = dropdown.querySelector(".dropdown-menu");
  let timeout;

  dropdown.addEventListener("mouseenter", () => {
    clearTimeout(timeout);
    menu.style.display = "block";
  });

  dropdown.addEventListener("mouseleave", () => {
    timeout = setTimeout(() => {
      menu.style.display = "none";
    }, 200);
  });

  menu.addEventListener("mouseenter", () => {
    clearTimeout(timeout);
  });

  menu.addEventListener("mouseleave", () => {
    timeout = setTimeout(() => {
      menu.style.display = "none";
    }, 200);
  });
}

// ------------------------
// Mobile Navigation Toggle
// ------------------------
function setupMobileMenu() {
  const toggleBtn = document.querySelector(".mobile-menu-btn");
  const nav = document.querySelector(".main-nav");

  if (!toggleBtn || !nav) return;

  toggleBtn.addEventListener("click", () => {
    nav.classList.toggle("active");
  });

  // Auto-close menu when clicking a link (mobile UX)
  document.querySelectorAll(".main-nav a").forEach(link => {
    link.addEventListener("click", () => {
      if (window.innerWidth <= 768) {
        nav.classList.remove("active");
      }
    });
  });
}
