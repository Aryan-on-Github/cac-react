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
                text : action.payload //(payload is object that provides access to )
            };
            state.todos.push(todo) // push current value to  

        },

        removeTodo : (state,action) => {
            state.todos = state.todos.filter((todo) => action.payload !== todo.id);
            // change todos using filter where we dont add the todo back based on id
        },

    }

})

export const {addTodo,removeTodo} = todoSlice.actions //export individual functionalities to use in components
export default todoSlice.reducer;