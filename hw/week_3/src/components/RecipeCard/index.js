// Root component of RecipeCard loading RecipeImage, RecipeInfo, IngredientsList, and InstructionsList

import Card from '../Card'
import RecipeInfo from './RecipeInfo'
import RecipeImage from './RecipeImage'
import InstructionsList from './InstructionsList'
import IngredientsList from './IngredientsList'
import styles from "./RecipeCard.module.css"

export default function RecipeCard(props) {
  const { recipe } = props;

  return (
    <Card>
      <RecipeImage recipe_image={recipe.imgSrc} recipe_name={recipe.dish} />
      <div className={styles.recipe_card_content}>
        <RecipeInfo title={recipe.title} description={recipe.description} />
        <div className={styles.recipe_card_details}>
          <IngredientsList ingredients={recipe.ingredients} />
          <InstructionsList instructions={recipe.instructions} />
        </div>
      </div>
    </Card>
  )
}