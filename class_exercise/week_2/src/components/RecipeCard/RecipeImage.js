export default function RecipeImage(props){
  const {recipe_image, recipe_name} = props

  return (
    <img 
      src={recipe_image} 
      alt={recipe_name}
      className='recipe_image'
    />
  )
}