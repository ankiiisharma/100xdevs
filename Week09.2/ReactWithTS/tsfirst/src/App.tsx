import './App.css'

function App() {

  return (
    <>
     <Todo title='Hello' description='hello first ts' done = { false} />
    </>
  )
}

interface TodoProp {
  title  :  string,
  description : string,
  done : boolean
}


function Todo(props: TodoProp){
  return (
    <> 
    <h1> {props.title} </h1>
    <h3> {props.description} </h3>
    </>
  )
}

export default App
