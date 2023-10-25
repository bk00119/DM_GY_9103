import { useContext, useState } from 'react'
import TodosContext from '../../context/todos'

export default function NewTodo(props){
  const [title, setTitle] = useState('')
  const { createTodo } = useContext(TodosContext)

  async function handleChange(event){
    setTitle(event.target.value)
  }

  async function handleSubmit(event){
    event.preventDefault() // prevents from reloading
    // props.onCreate(title)
    createTodo(title)
    
    setTitle('')
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input onChange={handleChange} value={title} />
        <button type="submit">Create</button>
      </form>
    </div>
  )
}