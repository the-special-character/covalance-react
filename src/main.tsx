import ReactDOM from "react-dom/client";
import App from './App'
import "./index.css";


// First letter of component should be upper case.
// return single element
// style should be an object and propertyName should be in camel case
// instead of class you should use className



ReactDOM.createRoot(document.getElementById("root")!).render(<><App firstName="Yagnesh" lastName="Modh" /><App firstName="Viat" lastName="Kohli" /><App firstName="Rohit" lastName="Sharma" /></>);
