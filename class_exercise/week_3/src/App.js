import React from 'react'
import RecipeCard from './RecipeCard'
import { RECIPE_LIST } from './RecipeCard/recipe-data'

function App() {
  return (
    <div style={{}}>
    {RECIPE_LIST.map((recipe, index) => (
      <RecipeCard recipe={recipe} key={index}/>
    ))}
  </div>

  )
}

export default App
