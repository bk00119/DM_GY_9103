import { useContext } from "react"

import TodosContext from "../../context/todos"
import TodoItem from "./TodoItem"

export default function TodoList(props){
  // const { todos, onDelete, onEdit } = props
  const { todos } = useContext(TodosContext)

  const rendered_todos = todos.map((todo)=>(
    <TodoItem 
      key={todo.id} 
      todo={todo} 
    />
  ))
  
  return (
    <>
    {rendered_todos}
    </>
  )
}