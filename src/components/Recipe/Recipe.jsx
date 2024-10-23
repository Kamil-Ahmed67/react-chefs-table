import PropTypes from "prop-types";
import { IoMdTime } from "react-icons/io";
import { FaFireFlameCurved } from "react-icons/fa6";
const Recipe = ({ recipe,addRecipeToQueue }) => {
    const { recipe_name, image, short_description, ingredients, preparing_time, calories } = recipe;
    return (
        <div className="card bg-base-100 border-2">
            <figure className="px-8 pt-6">
                <img className="w-full md:h-52 rounded-xl"
                    src={image}
                    alt={`Recipe: ${recipe_name}`} />
            </figure>
            <div className="card-body">
                <h2 className="card-title text-xl text-gray-800 font-semibold">{recipe_name}</h2>
                <p className="text-base text-gray-600">{short_description}</p>
                <h3 className="text-lg text-gray-800 font-medium">Ingredients:{ingredients.length}</h3>
                <ul className="ml-8">
                    {
                        ingredients.map((item, index) => <li className="list-disc text-gray-600" key={index}>{item}</li>)
                    }
                </ul>
                <div className="flex gap-4">
                    <div className="flex items-center">
                        <IoMdTime className="mr-2 text-xl"></IoMdTime><span>{preparing_time} minutes</span>
                    </div>
                    <div className="flex items-center">
                        <FaFireFlameCurved className="mr-2 text-xl" ></FaFireFlameCurved><span>{calories} Calories</span>
                    </div>
                </div>
                <div className="card-action">
                    <button
                    onClick={()=>addRecipeToQueue(recipe)}
                     className="btn bg-green-400 rounded-full px-8 text-xl text-gray-800 mt-6 font-medium">Want To Cook</button>
                </div>
            </div>
        </div>
    );
};
Recipe.propTypes = {
    recipe: PropTypes.object.isRequired,
    addRecipeToQueue:PropTypes.array.isRequired
}
export default Recipe;