import React from "react";

const TodoForm = (props) => {
  return (
    <form>
      <input
        type="text"
        name="item"
        value={props.item}
        onChange={props.handleChanges}
      />
      <button onClick={props.addItem}>Add Todo</button>

      <button onClick={props.handleClear}>Clear Completed</button>
    </form>
  );
};

export default TodoForm;
