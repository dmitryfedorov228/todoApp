import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

export const todosSlice = createSlice({
    name: 'todos',
    initialState: {
        list: []
    },
    reducers: {
        addTodo: (state, action) => {
            state.list = [action.payload, ...state.list]
            
        },
        deleteTodo: (state, action) => {
            state.list = state.list.filter((todo) => todo.id !== action.payload)
        },

    }
})

export const  {
addTodo,
deleteTodo,
} = todosSlice.actions

export default todosSlice.reducer