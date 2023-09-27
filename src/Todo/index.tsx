import { PureComponent } from "react";

class Todo extends PureComponent {
  render() {
    return (
      <div className="flex h-screen flex-col items-center">
        <h1 className="text-5xl my-10">Todo App</h1>
        <form className="flex">
          <div>
            <label htmlFor="todoText" className="sr-only">
              Todo Text
            </label>
            <input type="text" id="todoText" className="rounded-l-md" />
          </div>
          <button type="submit" className="btn rounded-l-none">
            Add Todo
          </button>
        </form>
        <div className="w-full flex-1">
          <div className="flex items-center m-4">
            <div>
              <label htmlFor="isCompleted" className="sr-only">Completed</label>
              <input type="checkbox" name="isCompleted" id="isCompleted" />
            </div>
            <p className="flex-1 px-4">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, ab.</p>
            <button type="button" className="btn">Delete</button>
          </div>
          <div className="flex items-center m-4">
            <div>
              <label htmlFor="isCompleted" className="sr-only">Completed</label>
              <input type="checkbox" name="isCompleted" id="isCompleted" />
            </div>
            <p className="flex-1 px-4">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, ab.</p>
            <button type="button" className="btn">Delete</button>
          </div>
          <div className="flex items-center m-4">
            <div>
              <label htmlFor="isCompleted" className="sr-only">Completed</label>
              <input type="checkbox" name="isCompleted" id="isCompleted" />
            </div>
            <p className="flex-1 px-4">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, ab.</p>
            <button type="button" className="btn">Delete</button>
          </div>
          <div className="flex items-center m-4">
            <div>
              <label htmlFor="isCompleted" className="sr-only">Completed</label>
              <input type="checkbox" name="isCompleted" id="isCompleted" />
            </div>
            <p className="flex-1 px-4">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, ab.</p>
            <button type="button" className="btn">Delete</button>
          </div>
          <div className="flex items-center m-4">
            <div>
              <label htmlFor="isCompleted" className="sr-only">Completed</label>
              <input type="checkbox" name="isCompleted" id="isCompleted" />
            </div>
            <p className="flex-1 px-4">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, ab.</p>
            <button type="button" className="btn">Delete</button>
          </div>
        </div>
        <div className="w-full flex">
            <button type="button" className="btn flex-1 rounded-none">All</button>
            <button type="button" className="btn flex-1 rounded-none">Pending</button>
            <button type="button" className="btn flex-1 rounded-none">Completed</button>
        </div>
      </div>
    );
  }
}

export default Todo;
