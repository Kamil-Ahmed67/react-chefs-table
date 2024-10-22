import PropTypes from "prop-types";

const Recipe = ({ recipe }) => {
    const { recipe_name, image, short_description, ingredients, preparing_time, calories } = recipe;
    return (
            <div className="card bg-base-100 shadow-xl">
                <figure className="px-8 pt-6">
                    <img className="w-full md:h-52 rounded-xl"
                        src={image}
                        alt={`Recipe: ${recipe_name}`} />
                </figure>
                <div className="card-body">
                    <h2 className="card-title text-xl text-gray-800 font-medium">{recipe_name}</h2>
                    <p className="text-base text-gray-600">{short_description}</p>
                    <h3 className="text-lg text-gray-800 font-medium">Ingredients:{ingredients.length}</h3>
                    <ul className="ml-8">
                     {
                        ingredients.map((item,index)=><li className="list-disc text-gray-600" key={index}>{item}</li>)
                     }
                    </ul>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
    );
};
Recipe.propTypes = {
    recipe: PropTypes.object.isRequired
}
export default Recipe;