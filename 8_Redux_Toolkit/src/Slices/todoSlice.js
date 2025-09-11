

import { createSlice, nanoid } from "@reduxjs/toolkit";



let initialState = {
    todos: [{id: 12345, task: "kapde dhole apne"}]
}

let todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addtodo: (state, action) => {
            console.log("addTodo called")
            let newTodo = {
                id: nanoid(),
                task: action.payload
            }
            state.todos.push(newTodo);
        },

        removeTodo: (state, action) =>{
            state.todos = state.todos.filter(todo => todo.id !== action.payload)
        }
    }

})


export const {addtodo, removeTodo} = todoSlice.actions
export default todoSlice.reducer