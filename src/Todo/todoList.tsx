import { memo } from "react";
import TodoListItem from "./todoListItem";

const TodoList = ({ todoList, toggleCompleteTodo, deleteTodo }) => {
  console.log("todo List");
  return (
    <div className="w-full flex-1">
      {todoList.map((item, index) => {
        return (
          <TodoListItem
            key={item.id}
            item={item}
            toggleCompleteTodo={toggleCompleteTodo}
            deleteTodo={deleteTodo}
          />
        );
      })}
    </div>
  );
};

export default memo(TodoList);
