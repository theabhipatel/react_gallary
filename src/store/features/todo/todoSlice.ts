import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface ITodo {
  id: string;
  title: string;
  description: string;
  isDone: boolean;
}

interface IInitialState {
  todos: ITodo[];
}

const initialState: IInitialState = {
  todos: [],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<ITodo>) => {
      state.todos.unshift(action.payload);
    },
    removeTodo: (state, action: PayloadAction<string>) => {
      const todoId = action.payload;
      const newTodos = state.todos.filter((todo) => todo.id !== todoId);
      state.todos = newTodos;
    },
    toggleIsDone: (state, action: PayloadAction<string>) => {
      const todoId = action.payload;
      //   const newTodos = state.todos.map((todo) => {
      //     if (todo.id === todoId) {
      //       return { ...todo, isDone: !todo.isDone };
      //     }
      //     return todo;
      //   });
      //   state.todos = newTodos;

      //   const todo = state.todos.find((todo) => todo.id === todoId);
      //   if (todo) {
      //     todo.isDone = !todo.isDone;
      //   }
      const todoIndex = state.todos.findIndex((todo) => todo.id === todoId);
      if (todoIndex > -1) {
        const todo = state.todos[todoIndex];
        todo.isDone = !todo.isDone;
        state.todos[todoIndex] = todo;
      }
    },
    updateTodo: (state, action: PayloadAction<ITodo>) => {
      const todoId = action.payload.id;
      const todoIndex = state.todos.findIndex((todo) => todo.id === todoId);
      if (todoIndex > -1) {
        state.todos[todoIndex] = action.payload;
      }
    },
  },
});

export const { addTodo, removeTodo, toggleIsDone, updateTodo } =
  todoSlice.actions;

export default todoSlice.reducer;
