document.addEventListener("DOMContentLoaded", () => {
  const urlParams = new URLSearchParams(window.location.search);
  const recipeId = urlParams.get("id");
  const recipeName = urlParams.get("name");

  const allRecipes = JSON.parse(localStorage.getItem("recipes")) || [];
  
  let recipe = null;

  if (recipeId) {
    recipe = allRecipes.find(r => r.id == recipeId);
  } else if (recipeName) {
    recipe = allRecipes.find(r => r.name.toLowerCase() === decodeURIComponent(recipeName).toLowerCase());
  }

  const detailsContainer = document.getElementById("recipe-details");

  if (!recipe) {
    detailsContainer.innerHTML = "<p>Recipe not found.</p>";
  } else {
    detailsContainer.innerHTML = `
      <h2>${recipe.name}</h2>
      <img src="${recipe.image}" alt="${recipe.name}" style="max-width: 400px;" />
      <h3>Ingredients</h3>
      <p>${recipe.ingredients.replace(/\n/g, "<br>")}</p>
      <h3>Preparation Steps</h3>
      <p>${recipe.steps.replace(/\n/g, "<br>")}</p>
      <br>
      <a href="category.html?category=${encodeURIComponent(recipe.category)}" class="btn">Back to ${recipe.category}</a>
      <a href="index.html" class="btn">Home</a>
    `;
  }
});
