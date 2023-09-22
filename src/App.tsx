import { Component, PureComponent } from "react";
import shallowCompare from "react-addons-shallow-compare";

function Test() {
  return (
    <div>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur
        tempora placeat id, neque iure in facere culpa illo blanditiis unde
        magni iusto? Corrupti expedita doloribus natus, voluptatum blanditiis
        consectetur earum.
      </p>
    </div>
  );
}

// props are immutable
const bgColor = "yellow";

const color = "red";

// Mouting
// -> constructor(call only once)
// -> getDerivedStateFromProps
// -> render
// -> componentDidMount (call only once)

// Updating

// 1. getDerivedStateFromProps
// 2. shouldComponentUpdate (for performace)
// 3. render
// 4. getSnapshotBeforeUpdate
// 5. componentDidUpdate

// Unmounting
// 1. componentWillUnmount (for performace)

// Error

// component will rerender only when state or props change
class App extends PureComponent {
  // state = {
  //   count: 0
  // }

  // base on props derive new state value
  // binding method with class

  // Call only once
  constructor(props) {
    super(props);

    this.state = {
      // greet: `Mr. ${props.firstName} ${props.lastName}`,
      count: 0,
      product: null,
      todos: [],
      pageNumber: 1,
    };

    // this.increment = this.increment.bind(this)

    // api call for alalytics
  }

  // will call everytime whenever props or state value change
  // static getDerivedStateFromProps(props, state) {
  //   console.log("getDerivedStateFromProps");
  //   console.log(props);

  //   return {
  //     greet: `Mr. ${props.firstName} ${props.lastName}`,
  //   }

  // }

  mouseMove = () => {
    console.log("Mouse moved....");
  }

  // on the page load get data and display data
  // register event listner
  async componentDidMount() {
    console.log("componentDidMount");

    const h1Ele = document.getElementById("heading");

    if (h1Ele) {
      h1Ele.style.color = "red";
    }

    document.addEventListener("mousemove", this.mouseMove);

    this.interval = setInterval(() => { 
      console.log("Interval...");
     }, 1000)

    this.getTodos(1);

    // try {
    //   const res = await fetch("https://fakestoreapi.com/products/1");
    //   const product = await res.json();

    //   console.log(product);

    //   this.setState({product: product})

    // } catch (error) {
    // }
  }

  // good perfomance
  // shouldComponentUpdate(nextProps, nextState) {
  //   return shallowCompare(this, nextProps, nextState);
  // }

  getSnapshotBeforeUpdate(prevProps: Readonly<{}>, prevState: Readonly<{}>) {
    return 10;
    
  }

  componentDidUpdate(prevProps, prevState, snap) { 

    console.log("snap", snap);
    
    const heading = document.getElementById("heading")
    if(prevProps.firstName !== this.props.firstName && heading) {
      heading.style.color = "blue"
    }
    
  } 

  componentWillUnmount() {
    document.removeEventListener("mousemove", this.mouseMove);
    clearInterval(this.interval);
   }

  getTodos = async () => {
    try {
      const { pageNumber: pn } = this.state;
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/todos?_page=${pn}&_limit=10`
      );
      const todoList = await res.json();
      this.setState(({ todos, pageNumber }, props) => {
        return {
          todos: [...todos, ...todoList],
          pageNumber: pageNumber + 1,
        };
      });
    } catch (error) {}
  };

  increment = () => {
    this.setState((state) => {
      return { count: state.count + 1 };
    });
  };

  render() {
    console.log("render");
    const { firstName, lastName } = this.props;
    const { greet, count, product } = this.state;

    return (
      <>
        <h1 id="heading">{greet}</h1>
        <h2>{count}</h2>

        {product && (
          <div>
            <h3>Prduct Details</h3>
            <img src={product.image} alt="Product Image" />
            <p>{product.title}</p>
            <p>{product.description}</p>
          </div>
        )}
        {/* <p
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
        <Test /> */}
        <button type="button" onClick={this.getTodos}>
          Get Next Page
        </button>
        <input type="checkbox" />
        <button type="button" onClick={this.increment}>
          Increment Count
        </button>
      </>
    );
  }
}

// function App({firstName,lastName }) {

// }

export default App;
