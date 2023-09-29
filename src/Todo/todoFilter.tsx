import { memo } from "react";

const TodoFilter = ({ filterTodo }) => {
  console.log("todo filter");

  return (
    <div className="w-full flex">
      <button
        onClick={() => filterTodo("all")}
        type="button"
        className="btn flex-1 rounded-none"
      >
        All
      </button>
      <button
        onClick={() => filterTodo("pending")}
        type="button"
        className="btn flex-1 rounded-none"
      >
        Pending
      </button>
      <button
        onClick={() => filterTodo("completed")}
        type="button"
        className="btn flex-1 rounded-none"
      >
        Completed
      </button>
    </div>
  );
};

export default memo(TodoFilter);
