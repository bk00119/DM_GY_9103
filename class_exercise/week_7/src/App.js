import { useState, useEffect } from 'react'
import axios from 'axios'

import NewTodo from './components/NewTodo';
import TodoList from './components/TodoList';

export default function App() {
  const [todos, setTodos] = useState([])

  useEffect(() => {
    fetchTodos()
  },[])

  async function createTodo(title) {
    // const updatedTodos = [
    //   ...todos, 
    //   {
    //     id: Math.round(Math.random() * 1000000),
    //     title: title
    //   }
    // ]
    // setTodos(updatedTodos)

    const response = await axios.post('http://localhost:3001/todos', {
      title: title,
    })

    // console.log(response)
    const updatedTodos = [...todos, response.data]
    setTodos(updatedTodos)
    // console.log(todos)
  }

  async function deleteTodoById(id){
    const response = await axios.delete(`http://localhost:3001/todos/${id}`)
    fetchTodos()
  }

  async function editTodoById(id, newTodo){
    const response = await axios.put(`http://localhost:3001/todos/${id}`, newTodo)
    fetchTodos()
  }

  async function fetchTodos() {
    const response = await axios.get('http://localhost:3001/todos')
    setTodos(response.data)
  }

  return (  
    <div>
      <TodoList todos={todos} onDelete={deleteTodoById} onEdit={editTodoById} />
      <NewTodo onCreate={createTodo}/>
    </div>
  );
}