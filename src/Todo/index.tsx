import { forwardRef } from "react";
import TodoForm from "./todoForm";
import TodoList from "./todoList";
import TodoFilter from "./todoFilter";
import todoHOC from "../hoc/todoHOC";

const Todo = forwardRef(({
  todoList,
  filterType,
  addTodo,
  toggleCompleteTodo,
  deleteTodo,
  loadData
}, ref) => {
  return (
    <div className="flex h-screen flex-col items-center">
      <h1 className="text-5xl my-10">Todo App</h1>
      <TodoForm addTodo={addTodo} ref={ref} />
      <TodoList
        todoList={todoList}
        filterType={filterType}
        toggleCompleteTodo={toggleCompleteTodo}
        deleteTodo={deleteTodo}
      />
      <TodoFilter filterTodo={loadData} />
    </div>
  );
});

Todo.displayName = "Todo"

export default todoHOC(Todo);
