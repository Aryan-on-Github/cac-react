import { useState } from 'react'

import './App.css'

function App() {
  
  const [todos, setTodos] = useState({});

  //add
  const addTodo = (current_todo) => {
    setTodos((all_todos) => [...all_todos,{...current_todo, id : Date.now()}])
  }

  //update
  const updateTodo = (id,new_todo) => {
    setTodos((all_todos) => all_todos.map((curr_todo) =>  id === curr_todo.id ? new_todo : curr_todo))
  }

  return (
    <>
    </>
  )
}

export default App
