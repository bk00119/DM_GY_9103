import React from 'react'
import styles from "./RecipeCard.module.css"
// HW: Apply CSS styling
export default function IngredientsList(props) {
  const {ingredients} = props

  return (
    <div className={styles.ingredients_list}>
      <h3 className={styles.list_title}>Ingredients</h3>
      <ul>
        {ingredients.map((ingred, index) => (
          <li className={styles.ingredients_item} key={index}>
            {/* {ingred} */}
            <span className={styles.ingredient_measure}>{ingred.measure}</span>
            <span className={styles.ingredient_name}>{ingred.name}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
