import React, { useState, useReducer } from "react";
import { initialState, reducer } from "./reducers/ReducerFile";
import "./App.css";
import TodoList from "./components/TodoList";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="App">
      <TodoList state={state} />
    </div>
  );
}

export default App;
