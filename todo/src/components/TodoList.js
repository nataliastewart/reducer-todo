import React from "react";

export default function TodoList(props) {
  return (
    <div>
      {props.data.map((item) => (
        <p>{item.name}</p>
      ))}
    </div>
  );
}
