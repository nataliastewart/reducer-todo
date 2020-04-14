import React, { useState, useReducer } from "react";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import { chores } from "./reducers/ReducerFile";

function App() {
  const [choreList, setChoreList] = useState(chores);

  const handleChanges = (e) => {
    setChoreList({
      [e.target.name]: e.target.value,
    });
  };

  // const toggleTodo = (id) => {
  //   const newChoreList = chores.map((item) => {
  //     if (item.id === id) {
  //       return {
  //         ...item,
  //         completed: !item.completed,
  //       };
  //     } else {
  //       return item;
  //     }
  //   });
  //   setChoreList((choreList = newChoreList));
  // };

  const addItem = (e, item) => {
    e.preventDefault();
    const newItem = {
      name: item,
      id: Date.now(),
      completed: false,
    };

    setChoreList({
      chores: [...chores, newItem],
      item: "",
    });
  };

  const handleChore = (e) => {
    const todos = chores.map((item) => {
      if (item.id === e) {
        item.completed = !item.completed;
        return item;
      } else {
        return item;
      }
    });
    setChoreList({ todos });
  };

  const handleClear = (e) => {
    e.preventDefault();
    const deleteAll = chores.filter((item) => !item.completed);
    setChoreList({
      chores: deleteAll,
      item: "",
    });

    console.log("DELETE ALL", deleteAll);
  };

  return (
    <div>
      <h3>TODO - REDUCER!</h3>
      <TodoForm
        addItem={addItem}
        chores={chores}
        handleClear={handleClear}
        handleChanges={handleChanges}
        setChoreList={setChoreList}
      />
      <TodoList
        chores={chores}
        // toggleTodo={toggleTodo}
        handleChore={handleChore}
      />
    </div>
  );
}

export default App;
