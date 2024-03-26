// import React from "react";
// import { useState } from "react";
// import "./App.css";

// // function App() {
// //   return (
// //     <div>
// //       <HeaderWithButton></HeaderWithButton>
// //       <Header title="test4"></Header>
// //       <Header title="test2"></Header>
// //       <Header title="test5"></Header>
// //       <Header title="test8"></Header>
// //       <Header title="test8"></Header>
// //     </div>
// //   );
// // }

// // function HeaderWithButton() {
// //   const [title, setTitle] = useState("My name is Ankit");

// //   function updateTitle() {
// //     setTitle("My name is " + Math.random());
// //   }

// //   return (
// //     <div>
// //       <button onClick={updateTitle}> update title</button>
// //       <Header title={title}></Header>
// //     </div>
// //   );
// // }

// // const Header = React.memo(function Header({ title }) {
// //   return <div>{title}</div>;
// // });

// function App() {
//   const [todos, Settodos] = useState([
//     {
//       id: 1,
//       title: "GOOOOO",
//       description: "testttsts1",
//     },
//     {
//       id: 2,
//       title: "G222222222",
//       description: "test22222",
//     },
//     {
//       id: 3,
//       title: "G333333",
//       description: "tes3333333",
//     },
//   ]);

//   function addTodo() {
//     Settodos([
//       ...todos,
//       {
//         id: 4,
//         title: Math.random(),
//         description: Math.random(),
//       },
//     ]);
//   }

//   return (
//     <div>
//       <button onClick={addTodo}> add a todo. </button>
//       {todos.map((todo) => (
//         <Todo title={todo.title} description={todo.description} />
//       ))}
//     </div>
//   );
// }

// function Todo({ title, description }) {
//   return (
//     <div>
//       <h1> {title}</h1>
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

function App() {
  return (
    <div>
      <CardWrapper>hi there.</CardWrapper>
    </div>
  );
}

function CardWrapper({ children }) {
  console.log(children);
  return (
    <div style={{ border: "2px solid black", padding: 20 }}>{children}</div>
  );
}

export default App;
