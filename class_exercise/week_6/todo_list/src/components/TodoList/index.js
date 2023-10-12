import TodoItem from "./TodoItem"

export default function TodoList(props){
  const { todos, onDelete, onEdit } = props
  const rendered_todos = todos.map((todo)=>(
    <TodoItem 
      key={todo.id} 
      todo={todo} 
      onDelete={onDelete} 
      onEdit={onEdit}
    />
  ))
  
  return (
    rendered_todos
  )
}