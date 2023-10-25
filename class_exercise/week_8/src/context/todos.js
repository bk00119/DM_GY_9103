import {createContext, useCallback, useState} from 'react'
import axios from 'axios'

// use create conext to create our contect for our todos
const TodosContext = createContext()

function Provider({children}) {
  const [todos, setTodos] = useState([])

  // async function fetchTodos() {
  //   const response = await axios.get('http://localhost:3001/todos')
  //   setTodos(response.data)
  // }
  const fetchTodos = useCallback(async() => {
    const response = await axios.get('http://localhost:3001/todos')
    setTodos(response.data)
  },[])

  // OR 
  // const stableFetch = useCallback(fetchTodos, [])

  async function createTodo(title) {
    const response = await axios.post('http://localhost:3001/todos', {
      title: title,
    })

    const updatedTodos = [...todos, response.data]
    setTodos(updatedTodos)
  }

  async function deleteTodoById(id){
    const response = await axios.delete(`http://localhost:3001/todos/${id}`)
    fetchTodos()
  }

  async function editTodoById(id, newTodo){
    const response = await axios.put(`http://localhost:3001/todos/${id}`, newTodo)
    fetchTodos()
  }

  const valuesToShare = {
    todos,
    fetchTodos,
    createTodo,
    deleteTodoById,
    editTodoById
  }

  return (
    <TodosContext.Provider value={valuesToShare}>
      {children}
    </TodosContext.Provider>
  )
}

// named export
export {Provider}
//export as default
export default TodosContext

// import TodosContext, {Provider} from './content/....'