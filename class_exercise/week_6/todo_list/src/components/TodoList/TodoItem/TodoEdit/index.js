import { useState } from "react"

export default function TodoEdit(props){
  const { todo, onSubmit } = props
  const [title, setTitle] = useState(todo.title)

  function handleChange(event){
    setTitle(event.target.value)
  }

  function handleSubmit(event){
    event.preventDefault()
    onSubmit({ id: todo.id, title: title})
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input onChange={handleChange} value={title} />
        <button>update</button>
      </form>
    </div>
  )
}