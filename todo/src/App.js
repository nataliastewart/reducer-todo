import React, { useState } from "react";
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

  const [formData, setFormData] = useState({
    name: "",
    completed: false,
    id: 123,
  });

  const onInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div>
      <TodoForm onInputChange={onInputChange} />
      <TodoList data={data} />
    </div>
  );
}
