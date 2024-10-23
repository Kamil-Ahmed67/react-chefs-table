import { useState } from 'react'
import Header from './components/Header/Header'
import Recipes from './components/Recipes/Recipes'
import Sidebars from './components/Sidebars/Sidebars'

function App() {
  const [recipeQueue, setRecipeQueue] = useState([])
  const [preparedRecipe,setPreparedRecipe]=useState([]);
  const [totalTime,setTotalTime]=useState(0);
  const [totalCalories,setTotalCalories]=useState(0);
  const addRecipeToQueue = recipe => {
    //console.log(recipe);
    const isExist = recipeQueue.find(
      previous_recipe => previous_recipe.recipe_id === recipe.recipe_id
    )
    if (!isExist) {
      const newRecipe = [...recipeQueue, recipe];
      setRecipeQueue(newRecipe);
    }
    else{
      alert('Recipe Already Added In The Queue')
    }

  }
  // Preparing Button Clicking to add the listed recipe to another table
  const handleRemove= id =>{
   //find which recipe to remove
   const deletedRecipe=recipeQueue.find(recipe=>recipe.recipe_id ===id)
   //remove from want to cook table
   const updatedQueue=recipeQueue.filter(recipe=>recipe.recipe_id!==id)
   setRecipeQueue(updatedQueue);
   setPreparedRecipe([...preparedRecipe,deletedRecipe]);
  }
  const calculateTimeAndCalories=(time,calories)=>{
  setTotalTime(totalTime+time);
  setTotalCalories(totalCalories+calories);
  }
  return (
    <>

      {/* Header */}
      <Header></Header>
      {/* Banner */}
      {/* Recipe Cards Section */}
      <section className='flex flex-col md:flex-row justify-between'>
        {/* Card Section */}
        <Recipes addRecipeToQueue={addRecipeToQueue}></Recipes>
        {/* Side Bars */}
        <Sidebars
         recipeQueue={recipeQueue}
         handleRemove={handleRemove}
          preparedRecipe={preparedRecipe}
          calculateTimeAndCalories={calculateTimeAndCalories}
          totalTime={totalTime}
          totalCalories={totalCalories}
         ></Sidebars>
      </section>

    </>
  )
}

export default App
