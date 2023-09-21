// Component loading the image of dish
import styles from "./RecipeCard.module.css"

export default function RecipeImage(props){
  const {recipe_image, recipe_name} = props

  return (
    <img 
      src={recipe_image} 
      alt={recipe_name}
      className={styles.recipe_image}
    />
  )
}