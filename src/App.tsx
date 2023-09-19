import { Component } from "react";

function Test() {
  return <div>
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur tempora placeat id, neque iure in facere culpa illo blanditiis unde magni iusto? Corrupti expedita doloribus natus, voluptatum blanditiis consectetur earum.</p>
  </div>
}

// props are immutable
const bgColor = "yellow";

const color = "red";


class App extends Component {

  state = {
    count: 0
  }

  render() {
    console.log("render");
    
    const {firstName, lastName} = this.props;

    return (
      <>
        <h1>{this.state.count}</h1>
        <p
          className="wrapper"
          style={{
            backgroundColor: bgColor,
            color,
            fontSize: 24,
          }}
        >
          {firstName}
        </p>
        <p>{lastName}</p>
        <Test />
        <input type="checkbox" />
        <button type="button" onClick={() => {
          // this.state.count = this.state.count + 1;
          // this.setState({count: 5})
          this.setState((state) => {
            return { count: state.count + 1}
          })
        }}>Increment Count</button>
      </>
    );
  }
}

// function App({firstName,lastName }) {

// }

export default App;
