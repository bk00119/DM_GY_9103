// Component loading an unordered list of ingredients

import styles from "./RecipeCard.module.css"

export default function IngredientsList(props){
  const { ingredients } = props

  return (
    <div className={styles.recipe_card_ingredients}>
      <h2 className={styles.recipe_card_subtitle}>Ingredients</h2>
      <ul className={styles.recipe_card_ingredients_list}>
      {ingredients.map((ingredient, index) => (
          <li key={index} >
            <span className={styles.recipe_card_ingredient_measures}>{ingredient.measure}</span> 
            <span className={styles.recipe_card_ingredient_name}>{ingredient.name}</span>
          </li>
      ))}
      </ul>
    </div>
  )
}