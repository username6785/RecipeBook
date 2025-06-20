// Key to use in localStorage
const STORAGE_KEY = "recipes";

// Get all recipes from localStorage
function getAllRecipes() {
  return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
}

// Save a new recipe to localStorage
function saveRecipe(recipe) {
  const recipes = getAllRecipes();

  // Add to the beginning to keep latest at top
  recipes.unshift(recipe);

  // Save back to localStorage
  localStorage.setItem(STORAGE_KEY, JSON.stringify(recipes));
}

// Get recipes by category
function getRecipesByCategory(category) {
  const recipes = getAllRecipes();
  return recipes.filter(recipe => recipe.category === category);
}

// Get recipe by ID
function getRecipeById(id) {
  const recipes = getAllRecipes();
  return recipes.find(recipe => recipe.id === id);
}

// Get the latest 3 recipes for Featured section
function getLatestRecipes() {
  const recipes = getAllRecipes();
  return recipes.slice(0, 3); // First 3 because we add latest at the top
}

// Clear all recipes (For admin/debug purposes - optional)
function clearAllRecipes() {
  localStorage.removeItem(STORAGE_KEY);
}
