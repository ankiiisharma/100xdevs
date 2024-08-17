import { useEffect, useState } from "react";
import "./App.css";
import { Component } from "react";
import axios from "axios";
import TimerBased from "./hooks/TimerBased";
import Debounce from "./hooks/Debounce";
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

// function useTodo(n) {
//   const [todos, setTodos] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     setInterval(() => {
//       axios.get("https://sum-server.100xdevs.com/todos").then((res) => {
//         setTodos(res.data.todos);
//         setLoading(false);
//       });
//     }, n * 1000);

//     axios.get("https://sum-server.100xdevs.com/todos").then((res) => {
//       setTodos(res.data.todos);
//       setLoading(false);
//     });

//     return()=> {
//       clearInterval(value)
//     }
//   }, [n]);

//   return { todos, loading };
// }

// function App() {
//   const { todos, loading } = useTodo(5);

//   if (loading) {
//     return <div> loading.. </div>;
//   }
//   return (
//     <>
//       {todos.map((todo) => (
//         <Track todo={todo} />
//       ))}
//     </>
//   );
// }

// function Track({ todo }) {
//   return (
//     <div>
//       <h3> {todo.title} </h3>
//       <p> {todo.description} </p>
//     </div>
//   );
// }

// function App() {
//   const isOnline = useOnline();
//   if (isOnline) {
//     return "You are online!";
//   } else {
//     return "You are offline!";
//   }
// }

// function useOnline() {
//   const [isOnline, setIsonline] = useState(window.navigator.online);

//   useEffect(() => {
//     window.addEventListener("online", () => {
//       setIsonline(true);
//     });
//     window.addEventListener("offline", () => {
//       setIsonline(false);
//     });
//   }, []);

//   return isOnline;
// }

// export default App;

function App() {
  return (
    <>
      {/* <TimerBased /> */}
      <Debounce />
    </>
  );
}

export default App;
