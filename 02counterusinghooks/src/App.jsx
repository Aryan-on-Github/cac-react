import { useState } from 'react'
//react help us change same element present at multiple places in web page Ui concurrently and easily
// it is done using different ypes of hooks 

function App() {
  // useState is a type of hook
  let [counter, setCounter] = useState(15) //hook where counter is our changable value(variable) and setCOunter is used to perform opoeration on changable value i.e. variable
  // they can be named anything as per our need

  const increaseVal = () =>{
    if(counter<20)
    {
    setCounter(counter+1); //set counter to counter+1
    }
    else{
      counter = 20;  //if counter becomes 20, dont increase furthur
    }
  }

  const decreaseVal = () => {
    if(counter>1)
    {
      setCounter(counter-1)
    }
    else{
      counter = 1;
    }
  }

  return (
    <>
    <h1>aryan</h1>

    <h1>Counter value : {counter}</h1>

    <button onClick={increaseVal}>
    Increase score : {counter}
    </button>

    <br />

    <button onClick={decreaseVal}>
    Decrease score : {counter}
    </button>

    </>  
  )
}

export default App
