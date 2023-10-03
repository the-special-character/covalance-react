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
  dialog = createRef<HTMLDialogElement>();

  componentDidMount() {
    this.loadData();
  }

  loadData = async () => {
    try {
      this.dialog.current.showModal();
      const res = await fetch("http://localhost:3004/todoList");
      const json = await res.json();
      this.setState({ todoList: json });
    } catch (error) {
    } finally {
      this.dialog.current.close();
    }
  };

  addTodo = async (event) => {
    try {
      this.dialog.current.showModal();
      event.preventDefault();

      const todoText = this.inputRef.current;

      if (todoText) {
        const res = await fetch("http://localhost:3004/todoList", {
          method: "POST",
          body: JSON.stringify({
            text: todoText.value,
            isDone: false,
          }),
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        });

        // this.loadData();

        const json = await res.json();

        this.setState(
          ({ todoList }) => {
            return {
              todoList: [...todoList, json],
            };
          },
          () => {
            todoText.value = "";
          }
        );
      }
    } catch (error) {
    } finally {
      this.dialog.current.close();
    }
  };

  toggleCompleteTodo = async (item) => {
    try {
      const res = await fetch(`http://localhost:3004/todoList/${item.id}`, {
        method: "PUT",
        body: JSON.stringify({
          ...item,
          isDone: !item.isDone,
        }),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });

      const json = await res.json();

      this.setState(({ todoList }) => {
        const index = todoList.findIndex((x) => x.id === item.id);
        return {
          todoList: [
            ...todoList.slice(0, index),
            json,
            ...todoList.slice(index + 1),
          ],
        };
      });
    } catch (error) {}
  };

  deleteTodo = async (item) => {
    try {
      await fetch(`http://localhost:3004/todoList/${item.id}`, {
        method: "DELETE",
      });

      this.setState(({ todoList }) => {
        const index = todoList.findIndex((x) => x.id === item.id);
        return {
          todoList: [...todoList.slice(0, index), ...todoList.slice(index + 1)],
        };
      });
    } catch (error) {}
  };

  filterTodo = (filterType: string) => {
    this.setState({ filterType: filterType });
  };

  render() {
    console.log("render");

    const { todoList, filterType } = this.state;
    return (
      <div className="flex h-screen flex-col items-center">
        <dialog className="backdrop:bg-slate-900/30" ref={this.dialog}>
          <svg
            className="animate-spin h-10 w-10 text-black bg-transparent"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              stroke-width="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
        </dialog>

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
