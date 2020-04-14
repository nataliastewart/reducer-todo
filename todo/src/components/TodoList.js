import React from "react";

export default function TodoList(props) {
  console.log("PROPS", props);
  return (
    <div className="todo-list">
      {props.state.todo.map((item) => {
        return (
          <div
            key={item.id}
            onClick={() => {
              props.toogleItem(item.id);
            }}
            className={`todo${item.completed ? "completed" : ""}`}
          >
            <p>{item.name}</p>
          </div>
        );
      })}
    </div>
  );
}
