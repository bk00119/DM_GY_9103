import { useState } from "react";
import TodoEdit from "./TodoEdit";


export default function TodoItem(props){
  const { todo, onDelete, onEdit } = props;
  const [showEdit, setShowEdit] = useState(false)

  function handleSubmit(updated_todo){
    onEdit(todo.id, updated_todo)
    setShowEdit(false)
  }

  let content = showEdit ? <TodoEdit todo={todo} onSubmit={handleSubmit}/> : <h3>{todo.title}</h3>


  return (
    <div>
      {content}
      <button onClick={()=>setShowEdit(!showEdit)}>edit</button>
      <button onClick={()=>onDelete(todo.id)}>delete</button>
    </div>
  )
}