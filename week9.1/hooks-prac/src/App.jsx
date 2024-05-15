import { useEffect, useState } from "react";
import "./App.css";
import { Component } from "react";
import DataFetchHoook from "./DataFetchHook";

// function App() {
//   const [Render, setRender] = useState(true);

//   useEffect(() => {
//     setTimeout(() => {
//       setRender(false);
//     }, 10000);
//   }, []);

//   return (
//     <>
//       {Render ? (
//         <MyComponent />
//       ) : (
//         <div>
//           {" "}
//           <h6> nothing present!</h6>{" "}
//         </div>
//       )}
//     </>
//   );
// }

// function MyComponent() {
//   useEffect(() => {
//     console.error("component mounted!");
//     return () => {
//       console.log("component unmounted!");
//     };
//   }, []);

//   return (
//     <>
//       <h3> here from the component </h3>
//     </>
//   );
// }

// export default App;

function App() {
  return (
    <>
      <DataFetchHoook />
    </>
  );
}

export default App;
