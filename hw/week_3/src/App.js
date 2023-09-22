import React from 'react'
import RecipeCard from './components/RecipeCard'
import { RECIPE_LIST } from './components/RecipeCard/recipe-data'
import styles from "./Page.module.css"

function App() {
  return (
    <div>
      <h1 className={styles.page_title}>Dynamic Recipes</h1>
      <div className={styles.recipe_list}>
        {RECIPE_LIST.map((recipe, index) => (
          <RecipeCard recipe={recipe} key={index}/>
        ))}
      </div>
    </div>

  )
}

export default App