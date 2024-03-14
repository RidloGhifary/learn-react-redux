import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getTodoAsync = createAsyncThunk("todos/getTodoAsync", async () => {
  const response = await fetch("http://localhost:7000/todos");

  if (response.ok) {
    const todos = await response.json();
    return { todos };
  }
});

export const addTodoAsync = createAsyncThunk(
  "todos/addTodoAsync",
  async (payload) => {
    const response = await fetch("http://localhost:7000/todos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title: payload.title }),
    });

    if (response.ok) {
      const todos = await response.json();
      return { todos };
    }
  }
);

export const editCompleteTodoAsync = createAsyncThunk(
  "todos/editCompleteTodoAsync",
  async (payload) => {
    const response = await fetch(`http://localhost:7000/todos/${payload.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ completed: payload.completed }),
    });

    if (response.ok) {
      const todos = await response.json();
      return { id: todos.id, completed: todos.completed };
    }
  }
);

export const deleteTodoAsync = createAsyncThunk(
  "todos/deleteTodoAsync",
  async (payload) => {
    const response = await fetch(`http://localhost:7000/todos/${payload.id}`, {
      method: "DELETE",
    });

    if (response.ok) {
      const todos = await response.json();
      return { todos };
    }
  }
);

const todosSlice = createSlice({
  name: "todos",
  initialState: [
    { id: 1, title: "todo1", completed: false },
    { id: 2, title: "todo2", completed: false },
    { id: 3, title: "todo3", completed: true },
  ],
  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        id: Date.now(),
        title: action.payload.title,
        completed: false,
      };

      state.push(newTodo);
    },
    todoComplete: (state, action) => {
      const index = state.findIndex((todo) => todo.id === action.payload.id);
      state[index].completed = action.payload.completed;
    },
    deleteTodo: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload.id);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addTodoAsync.fulfilled, (state, action) => {
        state.push(action.payload.todos);
      })
      .addCase(getTodoAsync.fulfilled, (_, action) => {
        return action.payload.todos;
      })
      .addCase(editCompleteTodoAsync.fulfilled, (state, action) => {
        const index = state.findIndex((todo) => todo.id === action.payload.id);
        state[index].completed = action.payload.completed;
      })
      .addCase(deleteTodoAsync.fulfilled, (state, action) => {
        return action.payload.todos;
      });
  },
});

export const { addTodo, todoComplete, deleteTodo } = todosSlice.actions;
export default todosSlice.reducer;
