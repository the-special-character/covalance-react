import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { Component } from "react";

// First letter of component should be upper case.
// return single element
// style should be an object and propertyName should be in camel case
// instead of class you should use className

App.getDerivedStateFromProps = (props, state) => {
    console.log(this);
    
    return {
        greet: `Mr. ${props.firstName} ${props.lastName}`,
      }
}

class Test extends Component {
  state = {
    firstName: "Yagnesh",
    lastName: "modh",
  };

  changeName = () => {
    this.setState({
      firstName: "Virat",
      lastName: "Kohli",
    });
  };

  render() {
    const { firstName, lastName } = this.state;
    return (
      <>
        <App firstName={firstName} lastName={lastName} />
        <button type="button" onClick={this.changeName}>
          Change Name
        </button>
      </>
    );
  }
}

// new App({ firstName: "Yagnesh", lastName: "Modh"})

ReactDOM.createRoot(document.getElementById("root")!).render(<Test />);
