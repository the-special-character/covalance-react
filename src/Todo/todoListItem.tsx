import React, { memo } from "react";

const TodoListItem = ({ item, toggleCompleteTodo, deleteTodo }) => {
  console.log("Todo Item");
  return (
    <div key={item.id} className="flex items-center m-4">
      <div>
        <label htmlFor="isCompleted" className="sr-only">
          Completed
        </label>
        <input
          type="checkbox"
          name="isCompleted"
          id="isCompleted"
          checked={item.isDone}
          onChange={() => toggleCompleteTodo(item)}
        />
      </div>
      <p className="flex-1 px-4">{item.text}</p>
      <button type="button" className="btn" onClick={() => deleteTodo(item)}>
        Delete
      </button>
    </div>
  );
};


export default memo(TodoListItem)