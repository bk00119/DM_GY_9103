import { useContext, useState } from "react";
import TodoEdit from "./TodoEdit";
import TodosContext from "../../../context/todos";


export default function TodoItem(props){
  const { todo } = props;
  const { deleteTodoById, editTodoById } = useContext(TodosContext)
  const [showEdit, setShowEdit] = useState(false)

  function handleSubmit(updated_todo){
    editTodoById(todo.id, updated_todo)
    setShowEdit(false)
  }

  let content = showEdit ? <TodoEdit todo={todo} onSubmit={handleSubmit}/> : <h3>{todo.title}</h3>


  return (
    <div>
      {content}
      <button onClick={()=>setShowEdit(!showEdit)}>edit</button>
      <button onClick={()=>deleteTodoById(todo.id)}>delete</button>
    </div>
  )
}