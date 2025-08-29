import Card from './components/Card'
import './App.css'

function App() {
  const desc_for_aryan = "He is strong af!";
  const titlee = "Legend";

  return (
    <>
      <h1>This is aryan's web page!</h1>
      <div className="flex flex-wrap gap-6 p-6">
        <Card  username = "aryan" title = "Pro" description = {desc_for_aryan}/>
        <Card  title = "Noob" description = "ezzz"/>
        <Card  username = "aryan" title = {titlee}/>
      </div>
      
    </>
  )
}

export default App
