import ReactDOM from "react-dom/client";
import "./index.css";
// import { memo, useCallback, useEffect, useMemo, useState } from "react";
import Todo from "./Todo";

// Error
// 1. getDerivedStateFromError
// 2. ComponentDidCatch

// Update
// 1. GetSnapshotBeforeUpdate

// function Child({ inc, counter, dec, user }) {
//   console.log("render child ");
//   return (
//     <div>
//       <h1>Child Componet</h1>
//       <h2>{user.name}</h2>
//       <div className="flex items-center">
//         <button
//           type="button"
//           className="text-3xl bg-blue-500 p-4"
//           onClick={inc}
//         >
//           +
//         </button>
//         <p className="text-3xl px-4">{counter}</p>
//         <button
//           type="button"
//           className="text-3xl bg-blue-500 p-4"
//           onClick={dec}
//         >
//           -
//         </button>
//       </div>
//     </div>
//   );
// }

// // if anything new comes then & then Child component rerender;
// const MemoChild = memo(Child);

// // state or props
// function App() {
//   const [counter, setCounter] = useState(0);
//   const [name, setName] = useState("Yagnesh");

//   // memorization
//   const inc = useCallback(() => {
//     setCounter((val) => val + 1);
//   }, []);

//   const dec = useCallback(() => setCounter((val) => val + 1), []);

//   const changeName = () => setName("Virat");

//   // memorize non-premitive type data
//   const user = useMemo(
//     () => ({
//       name: "Yagnesh",
//       age: 36,
//     }),
//     []
//   );

//   // Component Did Mount
//   useEffect(() => {
//     console.log("Component Mounted");
//   }, []);

//   // componenentDidMount + ComponentDidUpdate
//   useEffect(() => {
//     console.log("Component Mounted & counter Updated");
//   }, [counter]);

//   // componenentDidMount + ComponentDidUpdate
//   useEffect(() => {
//     console.log("Component Mounted & name Updated");
//   }, [name]);

//   useEffect(() => {
//     console.log("Component Mounted &  counter or name Updated");
//   }, [counter, name]);

//   console.log(inc);

//   return (
//     <div>
//       <h1>{name}</h1>
//       <button type="button" onClick={changeName}>
//         Change Name
//       </button>

//       {counter < 5 && (
//         <MemoChild inc={inc} dec={dec} counter={counter} user={user} />
//       )}
//     </div>
//   );
// }

ReactDOM.createRoot(document.getElementById("root")!).render(<Todo />);
