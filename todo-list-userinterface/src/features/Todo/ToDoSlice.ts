// src/features/Todo/ToDoSlice.ts
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { RootState } from '../../app/store';

interface Todo {
  id: number;
  todoName: string;
  finished: boolean;
}

interface TodosState {
  todos: Todo[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: TodosState = {
  todos: [],
  status: 'idle',
  error: null,
};

interface ToDoClass {
  todoName: string;
  finished: boolean;
}

interface UpdateClass {
  id: number,
  finished: boolean
}

export const fetchTodos = createAsyncThunk('todos/fetchTodos', async () => {
  const response = await axios.get('https://localhost:7073/api/todo');
  return response.data;
});

export const addNewTodo = createAsyncThunk('todos/addNewTodo', async (newToDo: ToDoClass) => {
  const response = await axios.post('https://localhost:7073/api/todo', newToDo);
  return response.data;
});

export const deleteTodo = createAsyncThunk('todos/deleteTodo', async(id: number) => {
  const response = await axios.delete(`https://localhost:7073/api/todo/${id}`)
  return response.data
})

export const updateTodo = createAsyncThunk('todos/updateTodo', async(updateClass: UpdateClass) => {
  const response = await axios.patch(`https://localhost:7073/api/todo/${updateClass.id}?finished=${!updateClass.finished}`)
  return response.data
})

const toDoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodos.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.todos = action.payload
      })
      .addCase(fetchTodos.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message ?? 'An error occurred'
      })
      .addCase(addNewTodo.pending, (state, action) => {
        state.status = 'loading'
      })
      .addCase(addNewTodo.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.todos.push(action.payload)
      })
      .addCase(addNewTodo.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message ?? 'An error occurred';
      })
      .addCase(deleteTodo.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(deleteTodo.fulfilled, (state, action) => {
        state.status = 'succeeded'
        const id = action.payload.id
        state.todos = state.todos.filter(todo => todo.id !== id)
      })
      .addCase(deleteTodo.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message ?? 'An error occurred';
      })
      .addCase(updateTodo.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(updateTodo.fulfilled, (state, action) => {
        state.status = 'succeeded'
        const index = state.todos.findIndex(todo => todo.id === action.payload.id)
        state.todos[index] = action.payload
      })
      .addCase(updateTodo.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message ?? 'An error occurred';
      })
  },
});

export default toDoSlice.reducer;

export const selectTodos = (state: RootState) => state.todos;