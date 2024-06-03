import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../features/home/counterSlice'
import toDoReducer from "../features/Todo/ToDoSlice";

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        todos: toDoReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch