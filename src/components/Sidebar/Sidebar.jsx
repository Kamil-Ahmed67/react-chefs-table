import PropTypes from "prop-types";

const Sidebar = ({ recipeQ, index,handleRemove }) => {
    const {recipe_id, recipe_name, preparing_time, calories } = recipeQ;
    return (
        <tr className="hover">
            <td>{index + 1}</td>
            <td>{recipe_name}</td>
            <td>{preparing_time}</td>
            <td>{calories}</td>
            <td>
                <button
                onClick={()=>handleRemove(recipe_id)}
                    className=" bg-green-400 rounded-full px-2 md:px-4 py-1 md:py-2 my-2  text-gray-800 font-medium"
                >
                    Preparing
                </button>
            </td>
        </tr>
    );
};

Sidebar.propTypes = {
    recipeQ: PropTypes.shape({
        recipe_id:PropTypes.number.isRequired,
        recipe_name: PropTypes.string.isRequired,
        preparing_time: PropTypes.string.isRequired,
        calories: PropTypes.number.isRequired,
    }).isRequired,
    index: PropTypes.number.isRequired,
    handleRemove:PropTypes.func.isRequired
};

export default Sidebar;
