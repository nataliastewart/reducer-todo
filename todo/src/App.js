import React, { useState, useReducer } from "react";
import { initialValue, reducer } from "./reducers/ReducerFile";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialValue);
  const [todoInput, setTodoInput] = useState("");

  const inputChange = (event) => {
    event.preventDefault();
    setTodoInput(event.target.value);
  };

  const todoSubmit = (event) => {
    event.preventDefault();
    dispatch({ type: "ADD_TODO", payload: todoInput });
  };
  const toggleItem = (item) => {
    dispatch({ type: "TOGGLE_ITEM", payload: item });
  };

  const clearCompleted = (event) => {
    event.preventDefault();
    dispatch({ type: "CLEAR_ALL" });
  };

  return (
    <div>
      <TodoList state={state} toogleItem={toggleItem} />
      <TodoForm
        inputChange={inputChange}
        todoSubmit={todoSubmit}
        clearCompleted={clearCompleted}
        todoInput={todoInput}
      />
    </div>
  );
}
