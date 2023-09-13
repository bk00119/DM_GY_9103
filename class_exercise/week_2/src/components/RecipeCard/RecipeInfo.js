export default function RecipeInfo(props){
  const { dish, description } = props

  return (
    <>
      <h1 className="recipe_card_title">{dish}</h1>
      <h2 className="recipe_card_description">{description}</h2>
    </>
  )
}