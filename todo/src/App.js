import React from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

export default function App() {
  const data = [
    {
      name: "Fold the laundry",
      id: 123,
      completed: false,
    },
    {
      name: "Walk the dogs",
      id: 1234,
      completed: false,
    },
    {
      name: "Cook the dinner",
      id: 12345,
      completed: false,
    },
  ];

  return (
    <div>
      <TodoForm />
      <TodoList data={data} />
    </div>
  );
}
