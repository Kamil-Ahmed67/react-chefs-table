import { useEffect } from "react";
import { useState } from "react";
import Recipe from "../Recipe/Recipe";
import PropTypes from "prop-types";

const Recipes = ({addRecipeToQueue}) => {
    const [recipes, setRecipes] = useState([]);
    useEffect(() => {
        fetch('recipes.json')
            .then(response => response.json())
            .then(data => setRecipes(data))
    }, [])
    return (
        <div className="w-full md:w-2/3 px-8 ">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 ">
                {
                    recipes.map(recipe => <Recipe
                    key={recipe.recipe_id}
                    recipe={recipe}
                    addRecipeToQueue={addRecipeToQueue}
                    ></Recipe>)
                }
            </div>

        </div>
    );
};
Recipes.propTypes={
    addRecipeToQueue:PropTypes.array.isRequired
}
export default Recipes;