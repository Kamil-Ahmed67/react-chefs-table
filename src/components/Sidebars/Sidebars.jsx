import PropTypes from "prop-types";
import Sidebar from "../Sidebar/Sidebar";
import SidebarMemo from "../Sidebar/SidebarMemo";

const Sidebars = ({ recipeQueue,handleRemove,preparedRecipe }) => {
    return (
        <div className="w-full md:w-1/3 border-2 rounded-2xl text-gray-600 p-2 bg-base-100">
            {/* Want To Cook Table */}
            <div className="overflow-x-auto">
                <h2 className="border-b-2 mx-auto font-semibold text-2xl text-gray-800 text-center pb-2">Want To Cook: {recipeQueue.length}</h2>
                <table className="table">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Time</th>
                            <th>Calories</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {recipeQueue.map((recipeQ, index) => (
                            <Sidebar key={index}
                             recipeQ={recipeQ} 
                             index={index}
                             handleRemove={handleRemove}
                             />
                        ))}
                    </tbody>
                </table>
            </div>
            {/* Currently Cooking Table */}
            <div className="overflow-x-auto mt-8">
                <h2 className="border-b-2 mx-auto font-semibold text-2xl text-gray-800 text-center pb-2">Prepared Recipe: {preparedRecipe.length}</h2>
                <table className="table">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Time</th>
                            <th>Calories</th>

                        </tr>
                    </thead>
                    <tbody>
                        {preparedRecipe.map((recipeQ, index) => (
                            <SidebarMemo
                            key={index}
                             recipeQ={recipeQ} 
                             index={index}
                             handleRemove={handleRemove}
                            ></SidebarMemo>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

Sidebars.propTypes = {
    recipeQueue: PropTypes.arrayOf(PropTypes.object).isRequired,
    handleRemove:PropTypes.func.isRequired,
    preparedRecipe: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default Sidebars;
