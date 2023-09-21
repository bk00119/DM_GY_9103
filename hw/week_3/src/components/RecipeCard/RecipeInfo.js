// Component loading the name of dish and its brief description
import RecipeRatings from '../Ratings'
import styles from "./RecipeCard.module.css"

export default function RecipeInfo(props){
  const { title, description } = props

  return (
    <>
      <div className={styles.recipe_card_heading}>
        <h1 className={styles.recipe_card_title}>{title}</h1>
        <RecipeRatings />
      </div>
      <h2 className={styles.recipe_card_description}>{description}</h2>
    </>
  )
}