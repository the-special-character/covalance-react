import { PureComponent, createRef } from "react";
import TodoForm from "./todoForm";
import TodoList from "./todoList";
import TodoFilter from "./todoFilter";

class Todo extends PureComponent {
  state = {
    // todoText: "",
    todoList: [],
    filterType: "all",
  };

  inputRef = createRef();

  // changeText = (event) => {
  //   this.setState({ todoText: event.target.value });
  // };

  addTodo = (event) => {
    event.preventDefault();

    const todoText = this.inputRef.current;

    if (todoText) {
      this.setState(
        ({ todoList }) => {
          return {
            todoList: [
              ...todoList,
              { text: todoText.value, id: new Date().valueOf(), isDone: false },
            ],
          };
        },
        () => {
          todoText.value = "";
        }
      );
    }
  };

  toggleCompleteTodo = (item) => {
    this.setState(({ todoList }) => {
      const index = todoList.findIndex((x) => x.id === item.id);
      return {
        todoList: [
          ...todoList.slice(0, index),
          { ...todoList[index], isDone: !todoList[index].isDone },
          ...todoList.slice(index + 1),
        ],
      };
    });
  };

  deleteTodo = (item) => {
    this.setState(({ todoList }) => {
      const index = todoList.findIndex((x) => x.id === item.id);
      return {
        todoList: [...todoList.slice(0, index), ...todoList.slice(index + 1)],
      };
    });
  };

  filterTodo = (filterType: string) => {
    this.setState({ filterType: filterType });
  };

  render() {
    console.log("render");

    const { todoList, filterType } = this.state;
    return (
      <div className="flex h-screen flex-col items-center">
        <h1 className="text-5xl my-10">Todo App</h1>
        <TodoForm addTodo={this.addTodo} ref={this.inputRef} />
        <TodoList
          todoList={todoList}
          filterType={filterType}
          toggleCompleteTodo={this.toggleCompleteTodo}
          deleteTodo={this.deleteTodo}
        />
        <TodoFilter filterTodo={this.filterTodo} />
      </div>
    );
  }
}

export default Todo;
