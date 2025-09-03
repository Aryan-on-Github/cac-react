// reducers(in redux) / slices(in redux-toolkit)

import { createSlice, nanoid } from "@reduxjs/toolkit";
// nano id for generating unique id's


// initial state of our store
const initialState = ({
    todos : [{
        id : 1,
        text : "helllleeeew"
    }]
});


//create slice
// learn it as boiler plate code 

// export const todoSlice = createSlice({

//     name : 'todo',
//     initialState,
//     reducers : { // they are property : functionality pair
//          state : gives access to current of state
//          action : access to values from current state
//         addTodo : (state,action) => {},
//         removeTodo : (state,action) => {}
//         xyz : (state,action) as per requirement : () => {},
//     }

// })
export const todoSlice = createSlice({

    name : 'todo',
    initialState,
    reducers : { // they are property : functionality pair
        addTodo : (state,action) => {
            const todo = {
                id : nanoid(),
                text : action.payload //(payload is input from user here)
            };
            state.todos.push(todo) // push current value to todos 

        },

        removeTodo : (state,action) => {
            state.todos = state.todos.filter((todo) => action.payload !== todo.id);
            // change todos using filter where we dont add the todo back based on id
        },

        updateTodo : (state,action) => {
            state.todos = state.todos.map((todo)=>todo.id === action.payload.id ? {...todo,text:action.payload.text} : todo)
        }

    }

})

export const {addTodo,removeTodo, updateTodo} = todoSlice.actions //export individual functionalities to use in components
export default todoSlice.reducer;