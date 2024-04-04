// ========== ROUTING =======================

import { useState } from "react";

import React, { Suspense } from "react";
import { lazy } from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import { CountContext } from "./contexts/context";
// import Dashboard from "./components/Dashboard";
// import Landing from "./components/Landing";

// const Dashboard = React.lazy(() => import("./components/Dashboard"));
// const Landing = React.lazy(() => import("./components/Landing"));

// function App() {
//   return (
//     <>
//       <BrowserRouter>
//         <Navbar />
//         <Routes>
//           <Route
//             path="/dashboard"
//             element={
//               <Suspense fallback={"loading..."}>
//                 <Dashboard />
//               </Suspense>
//             }
//           />
//           <Route
//             path="/"
//             element={
//               <Suspense fallback={"loading..."}>
//                 <Landing />
//               </Suspense>
//             }
//           />
//         </Routes>
//       </BrowserRouter>
//     </>
//   );
// }

// function Navbar() {
//   const navigate = useNavigate();

//   return (
//     <div>
//       <h1 style={{ background: "red", color: "white", fontFamily: "Poppins" }}>
//         hi navbar here
//       </h1>
//       <button
//         onClick={() => {
//           navigate("/");
//         }}
//       >
//         landing page
//       </button>

//       <button
//         onClick={() => {
//           navigate("/dashboard");
//         }}
//       >
//         dashboard
//       </button>
//     </div>
//   );
// }

// export default App;

function App() {
  const [count, setCount] = useState(0);

  return (
    <CountContext.Provider value={count}>
      <CountRenderer count={count} />
      <Button count={count} setCount={setCount} />
    </CountContext.Provider>
  );
}

function CountRenderer({ count }) {
  return (
    <>
      <div>{count}</div>
    </>
  );
}

function Count({ count }) {
  console.log(count);
  return <div>{count}</div>;
}

function Button({ count, setCount }) {
  return (
    <>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increase
      </button>
      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        Decrease
      </button>
    </>
  );
}
export default App;
