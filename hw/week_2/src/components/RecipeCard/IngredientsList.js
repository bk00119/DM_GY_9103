// Component loading an unordered list of ingredients

export default function IngredientsList(props){
  const {ingredients} = props

  return (
    <div className='recipe_card_ingredients'>
      <h2 className='recipe_card_subtitle'>Ingredients</h2>
      <ul className="recipe_card_ingredients_list">
      {ingredients.map((ingredient, index) => (
          <li key={index} className="recipe_card_ingreidents_item">
            <span className="recipe_card_ingredient_measures">{ingredient.measures}</span> 
            <span className="recipe_card_ingredient_name">{ingredient.name}</span>
          </li>
      ))}
      </ul>
    </div>
  )
}