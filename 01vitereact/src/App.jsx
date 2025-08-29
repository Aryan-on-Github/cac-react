import MyFunc from "./Aryan"
//import the component_name from directory

function App() {


  return (
    <>
    <h1>this is react with vite</h1>
    <MyFunc /> 
    </>    
  )
  // in order to use multiple tags, place them inside empty tag called fragment, which allows us to use multiple tags inside component

  // btw, component allows only one tag to return, thats why we return fragment which contain various html elements
}

export default App
