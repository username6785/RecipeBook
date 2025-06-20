document.addEventListener("DOMContentLoaded", () => {
  // Extract category from URL
  const urlParams = new URLSearchParams(window.location.search);
  const category = urlParams.get("category");

  const title = document.getElementById("category-title");
  const recipesGrid = document.getElementById("category-recipes");

  if (!category) {
    title.textContent = "Category not found";
    recipesGrid.innerHTML = "<p>No category selected.</p>";
    return;
  }

  title.textContent = category + " Recipes";

  const allRecipes = JSON.parse(localStorage.getItem("recipes")) || [];
  const filtered = allRecipes.filter(recipe => recipe.category === category);

  if (filtered.length === 0) {
    recipesGrid.innerHTML = "<p>No recipes found for this category.</p>";
  } else {
    filtered.forEach(recipe => {
      const card = document.createElement("div");
      card.classList.add("recipe-card");
      card.innerHTML = `
        <img src="${recipe.image}" alt="${recipe.name}" />
        <h3>${recipe.name}</h3>
        <a href="recipe-details.html?id=${recipe.id}" class="btn">View Details</a>
      `;
      recipesGrid.appendChild(card);
    });
  }
});
