import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddTodo from './components/addTodo'
import TodosList from './components/TodosList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1>hello</h1>
    <AddTodo/>
    <TodosList/>
    </>
  )
}

export default App
