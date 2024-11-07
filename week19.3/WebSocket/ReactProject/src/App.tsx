import { useEffect, useState } from "react";

const App = () => {
  const [socket,setSocket] = useState<null | WebSocket>(null);
  const [message, setMessage] = useState("");
  const [msg, setMsg] = useState("");

  useEffect(() => {
      const socket = new WebSocket('ws://localhost:8000')
      socket.onopen = () => {
        console.log("socket connected!!");
        setSocket(socket);
      }
      socket.onmessage = (message : any) => {
        console.log('Recieved Message', message.data)
        setMessage(message.data)
      }
      
      return () => {
        socket.close();
      }

  },[])

  if(!socket){
    return <> 
    <div>  
      <p> connecting...</p>
    </div>
    </>
  }
  return (
    <> 
      <div>
        {message} <br/> 
        <input 
        id="msgBox"
        onChange={(e) => {
          setMsg(e.target.value);
        }}></input>
        <button onClick={()=>{
          socket.send(msg);
        }}> Send </button>
      </div>
    </>
  )
}

export default App