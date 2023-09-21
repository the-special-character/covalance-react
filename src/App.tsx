import { Component } from "react";

function Test() {
  return <div>
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur tempora placeat id, neque iure in facere culpa illo blanditiis unde magni iusto? Corrupti expedita doloribus natus, voluptatum blanditiis consectetur earum.</p>
  </div>
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

// 3. render



// Unmounting

// Error



// component will rerender only when state or props change
class App extends Component {
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
      product: null
    }

    // this.increment = this.increment.bind(this)

    console.log("Constructor", props);

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

  // on the page load get data and display data
  // register event listner
  async componentDidMount() { 
    console.log("componentDidMount");
    
    const h1Ele = document.getElementById("heading");

    if(h1Ele) {
      h1Ele.style.color = "red"
    }

    document.addEventListener("copy", () => {
      console.log("Coppied");
    })

    try {
      const res = await fetch("https://fakestoreapi.com/products/1");
      const product = await res.json();

      console.log(product);

      this.setState({product: product})
      
    } catch (error) {
      
    }
   }

  increment = () => {
    this.setState((state) => {
      return { count: state.count + 1}
    })
  }

  render() {
    console.log("render");
    const {firstName, lastName} = this.props;
    const { greet, count, product } = this.state; 

    
    
    return (
      <>
        <h1 id="heading">{greet}</h1>
        <h2>{count}</h2>

       {product && <div>
          <h3>Prduct Details</h3>
          <img src={product.image} alt="Product Image" />
          <p>{product.title}</p>
          <p>{product.description}</p>

        </div>}
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
        <input type="checkbox" />
        <button type="button" onClick={this.increment}>Increment Count</button>
      </>
    );
  }
}

// function App({firstName,lastName }) {

// }

export default App;
