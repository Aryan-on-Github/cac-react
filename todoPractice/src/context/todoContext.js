import {createContext,useContext} from "react";

export const TodoContext = createContext({
    todos : [{
        id : null,
        todo_text : "",
        isCompleted : false
    }],
    addTodo : (todo_object) => {},
    updateTodo : (id,todo_text) => {},
    deleteTodo : (id) => {},
    toggleCompletion : (id) => {},
})

export const useTodo = () => {
  return useContext(TodoContext);
}

export const TodoProvider = TodoContext.Provider;