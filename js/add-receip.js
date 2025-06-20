// add-recipe.js

document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("recipeForm");

    // Check if form exists
    if (!form) {
        console.error("Form with ID 'recipeForm' not found.");
        return;
    }

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const name = document.getElementById("recipeName").value.trim();
        const ingredients = document.getElementById("ingredients").value.trim();
        const steps = document.getElementById("steps").value.trim();
        const category = document.getElementById("category").value;
        const imageInput = document.getElementById("image");

        // Validate inputs
        if (!name || !ingredients || !steps || !category || imageInput.files.length === 0) {
            alert("Please fill in all fields and upload an image.");
            return;
        }

        const reader = new FileReader();

        reader.onload = function () {
            const imageData = reader.result;

            const recipe = {
                id: Date.now(),
                name,
                ingredients,
                steps,
                category,
                image: imageData,
                createdAt: new Date().toISOString(),
            };

            // Fetch existing recipes or initialize
            const allRecipes = JSON.parse(localStorage.getItem("recipes")) || [];

            // Push new recipe
            allRecipes.push(recipe);
            localStorage.setItem("recipes", JSON.stringify(allRecipes));

            // Update featuredRecipes (last 3)
            const featuredRecipes = allRecipes.slice(-4);
            localStorage.setItem("featuredRecipes", JSON.stringify(featuredRecipes));

            alert("Recipe added successfully!");
            form.reset();
            window.location.href = "index.html"; // Update if needed
        };

        // Convert image to Base64
        reader.readAsDataURL(imageInput.files[0]);
    });
});
