/* eslint-disable react-refresh/only-export-components */
import { memo, useCallback, useEffect, useRef, useState } from "react";

export default (WrappedComponent) => {
  // class TodoWrapper extends PureComponent {
  //   state = {
  //     todoList: [],
  //     filterType: "all",
  //   };

  //   inputRef = createRef();
  //   dialog = createRef<HTMLDialogElement>();
  //   errorDialog = createRef<HTMLDialogElement>();

  //   hideError = () => {
  //     setInterval(() => {
  //       this.errorDialog.current?.close();
  //     }, 5000);
  //   };

  //   componentDidMount() {
  //     this.loadData();
  //   }

  //   loadData = async (filterType = "all") => {
  //     try {
  //       console.log("filterType", filterType);
  //       this.dialog.current.showModal();
  //       let url = "http://localhost:3004/todoList";
  //       if (filterType !== "all") {
  //         url += `?isDone=${filterType === "completed"}`;
  //       }
  //       const res = await fetch(url);
  //       const json = await res.json();
  //       // throw new Error("something went wrong...");
  //       this.setState({ todoList: json, filterType });
  //     } catch (error) {
  //       if (this.errorDialog.current) {
  //         this.errorDialog.current.innerText = error.message;
  //         this.errorDialog.current?.showModal();
  //         this.hideError();
  //       }
  //     } finally {
  //       this.dialog.current.close();
  //     }
  //   };

  //   addTodo = async (event) => {
  //     try {
  //       this.dialog.current.showModal();
  //       event.preventDefault();

  //       const todoText = this.inputRef.current;

  //       if (todoText) {
  //         const res = await fetch("http://localhost:3004/todoList", {
  //           method: "POST",
  //           body: JSON.stringify({
  //             text: todoText.value,
  //             isDone: false,
  //           }),
  //           headers: {
  //             "Content-Type": "application/json",
  //             Accept: "application/json",
  //           },
  //         });

  //         // this.loadData();

  //         const json = await res.json();

  //         this.setState(
  //           ({ todoList }) => {
  //             return {
  //               todoList: [...todoList, json],
  //             };
  //           },
  //           () => {
  //             todoText.value = "";
  //           }
  //         );
  //       }
  //     } catch (error) {
  //     } finally {
  //       this.dialog.current.close();
  //     }
  //   };

  //   toggleCompleteTodo = async (item) => {
  //     try {
  //       const res = await fetch(`http://localhost:3004/todoList/${item.id}`, {
  //         method: "PUT",
  //         body: JSON.stringify({
  //           ...item,
  //           isDone: !item.isDone,
  //         }),
  //         headers: {
  //           "Content-Type": "application/json",
  //           Accept: "application/json",
  //         },
  //       });

  //       const json = await res.json();

  //       this.setState(({ todoList }) => {
  //         const index = todoList.findIndex((x) => x.id === item.id);
  //         return {
  //           todoList: [
  //             ...todoList.slice(0, index),
  //             json,
  //             ...todoList.slice(index + 1),
  //           ],
  //         };
  //       });
  //     } catch (error) {}
  //   };

  //   deleteTodo = async (item) => {
  //     try {
  //       await fetch(`http://localhost:3004/todoList/${item.id}`, {
  //         method: "DELETE",
  //       });

  //       this.setState(({ todoList }) => {
  //         const index = todoList.findIndex((x) => x.id === item.id);
  //         return {
  //           todoList: [
  //             ...todoList.slice(0, index),
  //             ...todoList.slice(index + 1),
  //           ],
  //         };
  //       });
  //     } catch (error) {}
  //   };

  //   // filterTodo = (filterType: string) => {
  //   //   this.setState({ filterType: filterType });
  //   // };

  //   render(): ReactNode {
  //     const { todoList, filterType } = this.state;
  //     return (
  //       <>
  //         <dialog className="backdrop:bg-slate-900/30" ref={this.dialog}>
  //           <svg
  //             className="animate-spin h-10 w-10 text-black bg-transparent"
  //             xmlns="http://www.w3.org/2000/svg"
  //             fill="none"
  //             viewBox="0 0 24 24"
  //           >
  //             <circle
  //               className="opacity-25"
  //               cx="12"
  //               cy="12"
  //               r="10"
  //               stroke="currentColor"
  //               stroke-width="4"
  //             ></circle>
  //             <path
  //               className="opacity-75"
  //               fill="currentColor"
  //               d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
  //             ></path>
  //           </svg>
  //         </dialog>
  //         <dialog
  //           className="backdrop:bg-slate-900/30"
  //           ref={this.errorDialog}
  //         ></dialog>
  //         <WrappedComponent
  //           todoList={todoList}
  //           filterType={filterType}
  //           addTodo={this.addTodo}
  //           toggleCompleteTodo={this.toggleCompleteTodo}
  //           deleteTodo={this.deleteTodo}
  //           // filterTodo={this.filterTodo}
  //           loadData={this.loadData}
  //           ref={this.inputRef}
  //         />
  //         ;
  //       </>
  //     );
  //   }
  // }

  function TodoWrapper() {
    const [todoList, setTodoList] = useState([]);
    const [filterType, setFilterType] = useState("all");

    const errorDialog = useRef<HTMLDialogElement | null>(null);
    const dialog = useRef<HTMLDialogElement | null>(null);
    const inputRef = useRef();

    const hideError = () => {
      setInterval(() => {
        errorDialog.current?.close();
      }, 5000);
    };

    const loadData = useCallback(async (ft = "all") => {
      try {
        dialog.current?.showModal();
        let url = "http://localhost:3004/todoList";
        if (ft !== "all") {
          url += `?isDone=${ft === "completed"}`;
        }
        const res = await fetch(url);
        const json = await res.json();
        // throw new Error("something went wrong...");
        setTodoList(json);
        setFilterType(ft);
      } catch (error) {
        if (errorDialog.current) {
          errorDialog.current.innerText = error.message;
          errorDialog.current?.showModal();
          hideError();
        }
      } finally {
        dialog.current?.close();
      }
    }, []);

    const addTodo = useCallback(async (event) => {
      try {
        dialog.current?.showModal();
        event.preventDefault();

        const todoText = inputRef.current;

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

          setTodoList((val) => {
            return [...val, json];
          });

          todoText.value = "";
        }
      } catch (error) {
      } finally {
        dialog.current.close();
      }
    }, []);

    const toggleCompleteTodo = useCallback(async (item) => {
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

        setTodoList((val) => {
          const index = val.findIndex((x) => x.id === item.id);
          return [...val.slice(0, index), json, ...val.slice(index + 1)];
        });
      } catch (error) {}
    }, []);

    const deleteTodo = useCallback(async (item) => {
      try {
        await fetch(`http://localhost:3004/todoList/${item.id}`, {
          method: "DELETE",
        });

        setTodoList((val) => {
          const index = val.findIndex((x) => x.id === item.id);
          return [...val.slice(0, index), ...val.slice(index + 1)];
        });
      } catch (error) {}
    }, []);

    // component did mount
    useEffect(() => {
      loadData();
    }, [loadData]);

    return (
      <>
        <dialog className="backdrop:bg-slate-900/30" ref={dialog}>
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
        <dialog className="backdrop:bg-slate-900/30" ref={errorDialog}></dialog>
        <WrappedComponent
          todoList={todoList}
          filterType={filterType}
          addTodo={addTodo}
          toggleCompleteTodo={toggleCompleteTodo}
          deleteTodo={deleteTodo}
          loadData={loadData}
          ref={inputRef}
        />
        ;
      </>
    );
  }

  return memo(TodoWrapper);
};
