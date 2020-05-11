import React from "react";

export default function TodoForm(props) {
  return (
    <div>
      <form>
        <input
          type="text"
          name="todoInput"
          value={props.todoInput}
          onChange={props.inputChange}
        />
        <button onClick={(event) => props.addTodo(event)}>Add Todo</button>
      </form>
    </div>
  );
}
