import { useEffect } from "react";
import { useState } from "react";
import Recipe from "../Recipe/Recipe";

const Recipes = () => {
    const [recipes, setRecipes] = useState([]);
    useEffect(() => {
        fetch('recipes.json')
            .then(response => response.json())
            .then(data => setRecipes(data))
    }, [])
    return (
        <div className="w-full md:w-2/3 p-8 bg-green-400">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 ">
                {
                    recipes.map(recipe => <Recipe key={recipe.recipe_id} recipe={recipe}></Recipe>)
                }
            </div>

        </div>
    );
};

export default Recipes;