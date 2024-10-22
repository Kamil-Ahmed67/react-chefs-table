import Header from './components/Header/Header'
import Recipes from './components/Recipes/Recipes'
import Sidebars from './components/Sidebars/Sidebars'

function App() {

  return (
    <>
      
     {/* Header */}
     <Header></Header>
     {/* Banner */}
     {/* Recipe Cards Section */}
     <section className='flex flex-col md:flex-row justify-between'>
      {/* Card Section */}
      <Recipes></Recipes>
      {/* Side Bars */}
      <Sidebars></Sidebars>
     </section>
      
    </>
  )
}

export default App
