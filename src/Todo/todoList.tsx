import { memo } from "react";
import TodoListItem from "./todoListItem";

const TodoList = ({ todoList, filterType, toggleCompleteTodo, deleteTodo }) => {
  console.log("todo List");
  return (
    <div className="w-full flex-1">
      {todoList.map((item, index) => {
        if (
          filterType === "all" ||
          (filterType === "pending" && item.isDone === false) ||
          (filterType === "completed" && item.isDone === true)
        ) {
          return (
            <TodoListItem
              key={item.id}
              item={item}
              toggleCompleteTodo={toggleCompleteTodo}
              deleteTodo={deleteTodo}
            />
          );
        }
        return null;
      })}
    </div>
  );
};

export default memo(TodoList);
