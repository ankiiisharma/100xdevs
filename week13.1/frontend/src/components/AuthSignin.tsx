import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { SigninInput } from "@ankiiisharma/blog"
import axios from "axios"
import { useNavigate } from "react-router-dom";

import { BACKEND_URL } from "../utils/contif";

const Auth = () => {

  const navigate = useNavigate();

  const [postInputs, setPostInputs] = useState< SigninInput >({
    username: "",
    password: ""
  })
  const handleSubmit = async (e: React.FormEvent) => {

    e.preventDefault();

    try{
        const response = await axios.post(`${BACKEND_URL}/api/v1/user/signin`, postInputs);

        const jwt = response.data;
        localStorage.setItem("token", jwt);
        
        setPostInputs({
          username: "",
          password: ""
        })

        navigate('/blogs')
        
    }catch(e){
      console.log("error" + e);
    }
  }

  return (
    <div className='h-screen flex justify-center items-center flex-col'>
        <div className="max-w-lg flex flex-col items-center justify-center text-2xl font-bold text-gray-700"> 
            <h1>Welcome Back, User! </h1>
            <p className="font-normal text-[13px] tracking-tight">Don't have account? <span className="text-blue-500 font-semibold cursor-pointer" onClick={()=> navigate('/signup')}>signup</span> </p>
            </div>
            <div className=" max-w-lg w-full flex flex-col justify-start mt-4">   
        </div>

  <form onSubmit={handleSubmit} className="max-w-lg flex flex-col justify-start mt-1 md:justify-center">
   
    <label htmlFor="username" className="font-medium text-gray-600 mt-1 mb-1">Username</label>
    <input
    type="text"
    id="username"
    placeholder="Username"
    className="px-[30px] border py-2 rounded-lg border-gray-400"
    onChange={(e)=> setPostInputs({...postInputs, username:e.target.value })} />

    <label htmlFor="password" className="font-medium text-gray-600 mt-1 mb-1">Password</label>
    <input
    type="password"
    id="password"
    placeholder="Password"
    className="px-[30px] border py-2 rounded-lg border-gray-400"
    onChange={(e)=>  setPostInputs({...postInputs, password:e.target.value })}
    />

    <button type="submit" className="bg-sky-500 text-white px-[113px] py-2 rounded-lg font-semibold border  mt-5" > signin </button>

    <button className="text-slate-600 px-[85px] items-center flex py-2 rounded-lg border font-semibold tracking-tighter mt-5" > signin with <FcGoogle className="ml-1"/>  </button>
</form>

    </div>
  )
}

export default Auth;