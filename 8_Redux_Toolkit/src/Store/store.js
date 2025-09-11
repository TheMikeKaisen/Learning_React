

import {configureStore} from "@reduxjs/toolkit"
import todoReducer from "../Slices/todoSlice.js"



export const Store = configureStore({
    reducer: todoReducer
});