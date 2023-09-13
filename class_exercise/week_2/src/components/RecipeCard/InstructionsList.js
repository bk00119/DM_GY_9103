export default function InstructionsList(props){
  const {instructions} = props

  return (
    <div className='recipe_card_instructions'>
      <h2 className='recipe_card_subtitle'>Instructions</h2>
      <ol className="recipe_card_instructions_list">
      {instructions.map((instruction, index) => (
          <li key={index} className="recipe_card_instructions_item">{instruction}</li>
      ))}
      </ol>
    </div>
  )
}