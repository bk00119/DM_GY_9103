import { useState } from 'react'

export default function NewTodo(props){
  const [title, setTitle] = useState('')

  async function handleChange(event){
    setTitle(event.target.value)
  }

  async function handleSubmit(event){
    event.preventDefault() // prevents from reloading
    props.onCreate(title)
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