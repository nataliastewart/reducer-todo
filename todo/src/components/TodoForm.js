import React, { useState } from "react";

export default function TodoForm(props) {
  return (
    <div>
      <form>
        <input
          onChange={props.onInputChange}
          type="text"
          name="name"
          value={props.item}
        />
      </form>

      <button>Submit</button>
      <button>Clear Completed</button>
    </div>
  );
}
