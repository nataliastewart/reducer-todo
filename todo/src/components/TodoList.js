import React from "react";

export default function TodoList(props) {
  return (
    <div>
      {props.state.todos.map((item) => {
        return (
          <div
            key={item.id}
            onClick={() => {
              props.toggleItem(item.id);
            }}
            className={`todo${item.completed ? "completed" : ""}`}
            style={item.completed ? { textDecoration: "line-through" } : null}
          >
            <p>{item.name}</p>
          </div>
        );
      })}
    </div>
  );
}
