import { useState } from "react"
import axios from "axios";
import { BACKEND_URL } from "../utils/contif";
import { useNavigate } from "react-router-dom";


const PublishPage = () => {

    const navigate = useNavigate();
    
    const [title, setTitle] = useState<string>("");
    const [description, setDesciption] = useState<string>("");

    
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
    
        const postData = { title, content:description };
        console.log(postData);
    
        try {
            const token = localStorage.getItem("token");
            if (!token) {
                throw new Error("Token is missing. Please login again.");
            }
    
            const response = await axios.post(
                `${BACKEND_URL}/api/v1/blog`, 
                JSON.stringify(postData),
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        "Content-Type": "application/json",
                    },
                }
            );
    
            console.log(response.data.id);
            const blogId = response.data.id;
            
            navigate(`/blog/${blogId}`);

        } catch (error) {
            console.error("Error making POST request:", error);
            setTitle("");
            setDesciption("");
        }
    };

  return (
    <> 
        <div className="flex w-full justify-center items-center h-screen"> 
            <div className="w-[80vh] h-[80vh] bg-slate-300 rounded-xl p-[30px]">

                <input type="text" 
                className="w-full h-[40px] rounded-lg border border-slate-400 px-3" placeholder="title"
                value={title}
                onChange={(e)=> {
                    setTitle(e.target.value)
                }}
                />
                

            <textarea
            id="codeare"
            className="w-full h-[420px] p-2 bg-grad02-gradient border border-slate-500 rounded-lg tracking-tight mt-2"
            placeholder={"description!!"}
            value={description}
            onChange={(e)=>{
                setDesciption(e.target.value)
            }}
          />
          <div className="w-full flex items-center h-auto gap-3"> 
          <button
          className="bg-green-600 text-white px-[100px] rounded-md py-2"
          onClick={handleSubmit}
          > publish </button>
          <button className="bg-red-600 text-white px-[100px] rounded-md py-2"> discard </button>
          </div>
            </div>
        </div>
    </>
  )
}

export default PublishPage