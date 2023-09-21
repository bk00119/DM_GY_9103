// Component loading an ordered list of instructions

import styles from "./RecipeCard.module.css"

export default function InstructionsList(props){
  const {instructions} = props

  return (
    <div className={styles.recipe_card_instructions}>
      <h2 className={styles.recipe_card_subtitle}>Instructions</h2>
      <ol className={styles.recipe_card_instructions_list}>
      {instructions.map((instruction, index) => (
          <li key={index}>{instruction}</li>
      ))}
      </ol>
    </div>
  )
}