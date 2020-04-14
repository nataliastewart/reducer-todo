import React from "react";

export default function TodoList(props) {
  return (
    <div>
      {props.data.map((item) => (
        <p key={item.id}>{item.name}</p>
      ))}
    </div>
  );
}
