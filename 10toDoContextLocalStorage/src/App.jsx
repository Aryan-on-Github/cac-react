import { useEffect, useState } from 'react'
import './App.css'
import { TodoProvider,useTodo,TodoContext} from './contexts'
import { TodoForm, TodoItem } from './components';

function App() {

  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => { // todo is object
    setTodos((oldTodos)=> [...oldTodos, {...todo,id : Date.now()}]) 
    // spread all todos from array of objects
    // then spread the current object and set id as date.now
    // here todo is a object created which already contains input field text(todo) and completed(false by default) in our component(TodoItem) 
    // then, at last, it is added as an object to todos array through setTodos

    // we need to remember old todos as well
    // so we store old todos along with current todo in array, by spreading old todos to add it in array with new(current) todo 
    //also id is added along with it
    // basic idea is jab bhi we create a todo({object}), it is stored in array along with all previous todos like [{todo1},{todo2},{todo3},etc...]
  }
  

   // ----------------------------------------------------------------------------------------------------------
   // ------------this is what happening inside functions if you are confused-----------------------------------

   // setTodos(new_array_being_created_through_map/filter_and_automatically_returned_here_because_it_is_inside_setTodos_and_setTodos_accepts_an_array_of_objects)

   // -------------------------------------------------------------------------------------------------------------
   // ------------------------------------------------------------------------------------------------------------



  const updateTodo = (id,newTodo) => { //newTodo is object of new Todo created
    setTodos((prev) => prev.map((prevTodo) => (prevTodo.id===id ? newTodo : prevTodo)))
    // array of objects in looped over through map
    // prev is array of objects from where we loop wo each object and prevTodo gives us a object
    // then at object we check if current object's id is equal to provided(input) id
    //if yes, then setTodos(as newTodo) i.e. replace current object with newTodo and add it to new array 
    //else keep prevTodo that is current object
    // then as we use looping through map, push the object to array each time 
  }


  // when we generally perform delete, we return a new array that excludes deleted values
  // so we use conditional to check which is possible through filter
  // thus instead of map here, we use filter that directly returns a new array to setTodos() 
  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id)) // prev is array of objects, todo is a object from array
    // only keeps values in array when todo.id !== id is true
    // when that id is found (todo.id === id), condition becomes false and that object isnt added to returned array
    // here we return array to setTodos excluding the object with 'id' that we input in func
  }


  const toggleComplete = (id) => {
    setTodos((prev) => prev.map((curr_todo) => curr_todo.id === id ?{...curr_todo, completed : !curr_todo.completed} : curr_todo)) //prev is array of objects | we loop(map) over array to get todo(object) 
    // if current obejct's id matches input id
    // then spread todo and change completed to whatver it was before
    // else keep todo same i.e. setTodos(todo(current_object)) 

    // reminder : map and filter returns a new array and we here just changing the required object before adding it to that array
  }

  //storing the todos in local storage so that they can be displayed whenevr we go to site
  useEffect(() => {
    const todo = JSON.parse(localStorage.getItem("todo_key"));  // we convert string of array of objects to array of object(i.e. our original array (todos) )

    if(todo && todo.length>0) //if todo exists and length>0 i.e. if anything already present then only run (for optmisation purposes)
    {
      setTodos(todo); // then update react react state with todo (i.e. if a change is made in todo, then overwrite that with this chnaged todo )
    }
  },[]);

  useEffect(()=>{

    localStorage.setItem("todo_key",JSON.stringify(todos)); //everytime todos change, we sync that todo to local storage
    
  },[todos])

  // set item need a (key,val(in string format)) so we put todo_key as key and stringify aur todos(the array that store the todos we create/input)

  
  return (
    <TodoProvider value={{todos,addTodo,updateTodo,deleteTodo,toggleComplete}}>
    <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */} 
                        <TodoForm/>
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                        {todos.map(curr_todo => (
                         <div key={curr_todo.id} 
                         className='w-full'>
                         <TodoItem my_todo={curr_todo}/>
                         </div>
                        ))}
                    </div>
                </div>
            </div>
    </TodoProvider>
  )
}

export default App
