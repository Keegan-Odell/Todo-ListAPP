import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

interface TodosState {
    todos: Array<{ id: number; todoName: string; finished: boolean }>;
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;
  }
  
  const initialState: TodosState = {
    todos: [],
    status: 'idle',
    error: null,
  };
  

export const fetchTodos = createAsyncThunk('todos/fetchTodos', async () => {
    const response = await axios.get('https://localhost:7073/api/todo')
    return response.data
})


const toDoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
          .addCase(fetchTodos.pending, (state) => {
            state.status = 'loading'
          })
          .addCase(fetchTodos.fulfilled, (state, action) => {
            state.status = "succeeded",
            state.todos = action.payload
          })
          .addCase(fetchTodos.rejected, (state, action) => {
            state.status = "failed",
            state.error = action.error.message ?? "bro wtf did you do??"
          })
    }
});

export default toDoSlice.reducer;
