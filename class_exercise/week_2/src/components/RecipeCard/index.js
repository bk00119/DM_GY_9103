import bulgogi_img from '../../assets/bulgogi.jpeg'
import { RECIPE } from './recipe-data.js'
// import Card from '../../components/Card'
import Card from '@/components/Card/index'
import RecipeInfo from './RecipeInfo'
import RecipeImage from './RecipeImage'
import InstructionsList from './InstructionsList'
import IngredientsList from './IngredientsList'
import "./index.css"

export default function RecipeCard() {
  return (
    <Card>
      <RecipeImage recipe_image={bulgogi_img} recipe_name="Bulgogi" />
      <div className="recipe_card_content">
        <RecipeInfo dish={RECIPE.dish} description={RECIPE.description} />
        <div className='recipe_card_details'>
          <IngredientsList ingredients={RECIPE.ingredients} />
          <InstructionsList instructions={RECIPE.instructions} />
        </div>
      </div>
    </Card>
  )
}