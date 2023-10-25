import { useEffect, useContext } from 'react'

import NewTodo from './components/NewTodo';
import TodoList from './components/TodoList';
import TodosContext from './context/todos';

export default function App() {
  const { fetchTodos } = useContext(TodosContext);

  useEffect(() => {
    fetchTodos()
  },[fetchTodos])

  return (  
    <div>
      <TodoList />
      <NewTodo />
    </div>
  );
}