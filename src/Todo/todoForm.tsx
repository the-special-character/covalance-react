import React, { forwardRef, memo } from "react";

const TodoForm = forwardRef(({ addTodo }, ref) => {
    console.log("todo Form");
  return (
    <form className="flex" onSubmit={addTodo}>
      <div>
        <label htmlFor="todoText" className="sr-only">
          Todo Text
        </label>
        <input
          ref={ref}
          type="text"
          id="todoText"
          className="rounded-l-md"
        />
      </div>
      <button type="submit" className="btn rounded-l-none">
        Add Todo
      </button>
    </form>
  );
});

TodoForm.displayName = "TodoForm"

export default memo(TodoForm);
