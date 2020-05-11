import React from "react";

export default function TodoList(props) {
  return (
    <div>
      {props.state.todos.map((item) => {
        return (
          <div key={item.id}>
            <p>{item.name}</p>
          </div>
        );
      })}
    </div>
  );
}
