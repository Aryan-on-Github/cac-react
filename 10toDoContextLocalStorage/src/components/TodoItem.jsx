import { useState } from "react";
import { useTodo } from "../contexts";

function TodoItem({ my_todo }) { //my_todo is a todo object {id : , todo : , completed : } 

    const {updateTodo, deleteTodo, toggleComplete} = useTodo();

    const [isTodoEditable,setIsTodoEditable] = useState(false); // by default, editable is false. as it can be edited only when we click on edit button
    const [todoMsg,setTodoMsg] = useState(my_todo.todo); // by default, our todoMsg is input text ({id : , todo: , completed: }) from my_todo object

    const editTodo = () => {
        updateTodo(my_todo.id, {...my_todo, todo : todoMsg}); 
        setIsTodoEditable(false);

    } // we pass id of our received object and we pass the object as whole where the string message is todoMsg i.e. whatever user inputs
    
    const toggleCompleteHogya = () => {
        toggleComplete(my_todo.id);
    }

    return (
        <div
            className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black ${
                my_todo.completed ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"
            }`}
        >
            <input
                type="checkbox"
                className="cursor-pointer"
                checked={my_todo.completed}
                onChange={toggleCompleteHogya}
            />
            <input
                type="text"
                className={`border outline-none w-full bg-transparent rounded-lg ${
                    isTodoEditable ? "border-black/10 px-2" : "border-transparent"
                } ${my_todo.completed ? "line-through" : ""}`}
                value={todoMsg}
                onChange={(e) => setTodoMsg(e.target.value)}
                readOnly={!isTodoEditable}
            />
            {/* Edit, Save Button */}
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
                onClick={() => {
                    if (my_todo.completed) return;

                    if (isTodoEditable) {
                        editTodo();
                    } else setIsTodoEditable((prev) => !prev);
                }}
                disabled={my_todo.completed}
            >
                {isTodoEditable ? "📁" : "✏️"}
            </button>
            {/* Delete Todo Button */}
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
                onClick={() => deleteTodo(my_todo.id)}
            >
                ❌
            </button>
        </div>
    );
}

export default TodoItem;
