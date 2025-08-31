import {createContext, useContext} from "react"

export const TodoContext = createContext({
    todos: [
        {
            id: 1,
            todo: " Todo msg",
            completed: false,
        }
    ],
    // NOTE : todo passed down here is one object at a time from array of objects

    addTodo: (todo) => {}, // func to addToDo which takes a todo object (single todo object from array of object like {id : , todo : , complteted : }) and does something which is defined in App.jsx only
    updateTodo: (id, todo) => {}, //func to update toDo based on using msg and id to identify which todo is being updated
    deleteTodo: (id) => {}, //func to delete toDo by just identifying a toDO on id
    toggleComplete: (id) => {} //tell if a toDo is complete or not
})


export const useTodo = () => {
    return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider
