import { useState } from "react";
import { useTodo } from "../contexts";

function TodoForm() {

    //state for individual todo
    const [todo,setTodo] = useState(""); 
    const {addTodo} = useTodo(); //pulling addTodo function from context

    const add = (e) => {
       e.preventDefault();

       if(!todo)
       {
         return; //if input is empty, do nothing
       }
       else{
        addTodo({todo:todo, completed:false}); // set todo as current input(named todo) and complteted = false, here no need to set id as we do it by default in addTodo as id : date.now()
        setTodo(""); // input field clear after adding todo
       }
    }
    

    return (
        <form onSubmit={add}  className="flex"> {/* on submit, run add function */}   
            <input
                type="text"
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
                value={todo} // with setting value to todo, after submitting, the field still shows the last typed text, even though todo state is cleared.
                onChange={(e)=>{setTodo(e.target.value)}} //on change, set todo as current input 
            />
            <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
                Add
            </button>
        </form>
    );
}

export default TodoForm;

