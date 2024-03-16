import { useState } from 'react'
// import './App.css'

function App() {
  const [todos, setTodos] = useState([{
    title : "Go to GYM",
    description : "Go to gym at 8",
    status : false
  },{
    title : "learn DSA",
    description : "learn DSA at 10",
    status : false
  },
  {
    title : "learn DSA",
    description : "learn DSA at 10",
    status : false
  }
])

function addTodo(){
  setTodos([...todos,{
    title : "new todos",
    description : "description goes here"
  }])
}

  return (
     <div>

      <button onClick={addTodo}> ADD RANDOM TODO!</button>
      {/* <Todo title={todos[0].title} description={todos[0].description}> </Todo>
      <Todo title={todos[1 ].title} description={todos[0].description}> </Todo> */}

      {todos.map(function(todo) {
      return <Todo title={todo.title} description ={todo.description} />
})}

     </div>
  )
}

function Todo(props){
  return <div>
    <h1>{props.title}</h1>
    <h2>{props.description}</h2>
  </div>
}

export default App
