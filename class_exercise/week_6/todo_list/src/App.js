import { useState } from 'react'
import NewTodo from './components/NewTodo';
import TodoList from './components/TodoList';

export default function App() {
  const [todos, setTodos] = useState([])
  function createTodo(title) {
    const updatedTodos = [
      ...todos, 
      {
        id: Math.round(Math.random() * 1000000),
        title: title
      }
    ]
    setTodos(updatedTodos)
  }

  function deleteTodoById(id){
    const updatedTodos = todos.filter((todo) => {
      // if true, keep todo 
      return todo.id !== id
    })

    setTodos(updatedTodos)
  }

  function editTodoById(id, newTodo){
    const updatedTodos = todos.map((todo) => {
      return todo.id === id ? newTodo : todo
    })
    console.log(updatedTodos)
    setTodos(updatedTodos)
  }

  return (  
    <div>
      <TodoList todos={todos} onDelete={deleteTodoById} onEdit={editTodoById} />
      <NewTodo onCreate={createTodo}/>
    </div>
  );
}