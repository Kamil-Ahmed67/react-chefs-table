import PropTypes from "prop-types";

const SidebarMemo = ({ recipeQ, index}) => {
    const { recipe_name, preparing_time, calories } = recipeQ;
    return (
        
            <tr className="hover">
                <td>{index + 1}</td>
                <td>{recipe_name}</td>
                <td>{preparing_time}</td>
                <td>{calories}</td>
            </tr>

    );
};

SidebarMemo.propTypes = {
    recipeQ: PropTypes.shape({
        recipe_name: PropTypes.string.isRequired,
        preparing_time: PropTypes.string.isRequired,
        calories: PropTypes.number.isRequired,
        totalTime: PropTypes.number.isRequired,
        totalCalories: PropTypes.number.isRequired
    }).isRequired,
    index: PropTypes.number.isRequired
};
export default SidebarMemo; 