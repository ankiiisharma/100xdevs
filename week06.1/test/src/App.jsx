// import React from "react";
// import { useState } from "react";
// import "./App.css";

import { useEffect, useState } from "react";

// // function App() {
// //   return (
// //     <div>
// //       <HeaderWithButton></HeaderWithButton>
// //       <Header todo="test4"></Header>
// //       <Header todo="test2"></Header>
// //       <Header todo="test5"></Header>
// //       <Header todo="test8"></Header>
// //       <Header todo="test8"></Header>
// //     </div>
// //   );
// // }

// // function HeaderWithButton() {
// //   const [todo, settodo] = useState("My name is Ankit");

// //   function updatetodo() {
// //     settodo("My name is " + Math.random());
// //   }

// //   return (
// //     <div>
// //       <button onClick={updatetodo}> update todo</button>
// //       <Header todo={todo}></Header>
// //     </div>
// //   );
// // }

// // const Header = React.memo(function Header({ todo }) {
// //   return <div>{todo}</div>;
// // });

// function App() {
//   const [todos, Settodos] = useState([
//     {
//       id: 1,
//       todo: "GOOOOO",
//       description: "testttsts1",
//     },
//     {
//       id: 2,
//       todo: "G222222222",
//       description: "test22222",
//     },
//     {
//       id: 3,
//       todo: "G333333",
//       description: "tes3333333",
//     },
//   ]);

//   function addTodo() {
//     Settodos([
//       ...todos,
//       {
//         id: 4,
//         todo: Math.random(),
//         description: Math.random(),
//       },
//     ]);
//   }

//   return (
//     <div>
//       <button onClick={addTodo}> add a todo. </button>
//       {todos.map((todo) => (
//         <Todo todo={todo.todo} description={todo.description} />
//       ))}
//     </div>
//   );
// }

// function Todo({ todo, description }) {
//   return (
//     <div>
//       <h1> {todo}</h1>
//       <h3> {description} </h3>
//     </div>
//   );
// }

// export default App;

// import React from "react";
// import "./App.css";

// function App() {
//   return (
//     <div>
//       <CardWrapper innerComponent={<TextComponent />} />
//       <CardWrapper innerComponent={<TextComponent2 />} />
//       <CardWrapper innerComponent={<TextComponent />} />
//     </div>
//   );
// }

// function CardWrapper({ innerComponent }) {
//   return <div style={{ border: "2px solid red" }}>{innerComponent}</div>;
// }

// function TextComponent() {
//   return (
//     <div>
//       <h5 color="color:white">Hi there</h5>
//     </div>
//   );
// }

// function TextComponent2() {
//   return (
//     <div>
//       <h5 color="color:white">Hi there TWOOO</h5>
//     </div>
//   );
// }

// export default App;

// function App() {
//   return (
//     <div>
//       <CardWrapper>
//         <TextComponent />
//       </CardWrapper>

//       <CardWrapper>
//         <div>hi there</div>
//       </CardWrapper>
//     </div>
//   );
// }

// function CardWrapper({ children }) {
//   console.log(children);
//   return (
//     <div style={{ border: "2px solid black", padding: 20 }}>{children}</div>
//   );
// }

// function TextComponent() {
//   return <div>hi from text component.</div>;
// }

// export default App;

function App() {
  const [todos, setTodos] = useState([{}]);

  useEffect(() => {
    setInterval(() => {
      fetch("https://dummyjson.com/todos").then(async function (res) {
        const json = await res.json();
        setTodos(json.todos);
      });
    }, 10000);
  }, []);

  return (
    <div>
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo.todo} description={todo.decription} />
      ))}
    </div>
  );
}

function Todo({ todo, decription }) {
  return (
    <div>
      <h2>{todo}</h2>
      <h4> {decription}</h4>
    </div>
  );
}

export default App;
