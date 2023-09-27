import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { Component, ErrorInfo } from "react";
import Child from "./Child";

// First letter of component should be upper case.
// return single element
// style should be an object and propertyName should be in camel case
// instead of class you should use className

App.getDerivedStateFromProps = (props, state) => {
    
    return {
        greet: `Mr. ${props.firstName} ${props.lastName}`,
      }
}

class Test extends Component {
  state = {
    firstName: "Yagnesh",
    lastName: "modh",
    count: 0
  };

  changeName = () => {
    this.setState({
      firstName: "Virat",
      lastName: "Kohli",
    });
  };

  updateCount = () => {
    this.setState(({count}) => { return { 
      count: count + 1
     }})
  }

  static getDerivedStateFromError(error) {
    return {
      error
    }
  }

  componentDidCatch(error, errorInfo) {
    console.log("errorInfo", errorInfo.componentStack);
    // error loging mechanism
  }

  render() {
    const { firstName, lastName, count, error } = this.state;

    // if(error) {
    //   return 
    // }

    return (
      <>
        {error ? <h1>{error.message}</h1> : <App firstName={firstName} lastName={lastName} />}
        <Child count={count} />
        <button type="button" onClick={this.changeName}>
          Change Name
        </button>
        <h1>{count}</h1>
        <button type="button" onClick={this.updateCount}>Change Count</button>
      </>
    );
  }
}

// new App({ firstName: "Yagnesh", lastName: "Modh"})

ReactDOM.createRoot(document.getElementById("root")!).render(<Test />);
