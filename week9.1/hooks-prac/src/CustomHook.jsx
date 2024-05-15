import { useEffect, useState } from "react";
import axios from "axios";

function CustomHook() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios.get("https://sum-server.100xdevs.com/todos").then((res) => {
      setTodos(res.data.todos);
    });
  }, []);

  return todos;
}

function AllTodos() {
  const todos = CustomHook();
}

return (
  <>
    {todos.map((todo) => (
      <Track todo={todo} />
    ))}
  </>
);

function Track({ todo }) {
  return (
    <div>
      {todo.title}
      {todo.description}
    </div>
  );
}

export default CustomHook;
