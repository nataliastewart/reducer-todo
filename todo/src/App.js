import React, { useState, useReducer } from "react";
import { initialState, reducer } from "./reducers/ReducerFile";
import "./App.css";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [todoInput, setTodoInput] = useState("");

  const inputChange = (event) => {
    event.preventDefault();
    setTodoInput(event.target.value);
  };

  const addTodo = (event) => {
    event.preventDefault();
    dispatch({ type: "ADD_TODO", payload: todoInput });
  };

  const toggleItem = (item) => {
    dispatch({ type: "TOGGLE_ITEM", payload: item });
  };

  const clearCompleted = (event) => {
    event.preventDefault();
    dispatch({ type: "CLEAR_COMPLETED" });
  };

  return (
    <div className="App">
      <TodoForm
        todoInput={todoInput}
        inputChange={inputChange}
        addTodo={addTodo}
        clearCompleted={clearCompleted}
      />
      <TodoList state={state} toggleItem={toggleItem} />
    </div>
  );
}

export default App;
