
import { useNavigate } from "react-router-dom"
import { Avatar } from "../components/BlogCard"

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <>
        <div className='border-b flex justify-between py-2 px-[160px]'> 
            <div> 
                <h1 className="text-2xl font-bold"> blogs </h1>
            </div>

            <div className="w-auto h-full flex items-center"> 
            <button className="px-[30px] bg-green-600 py-2 mr-2 rounded-lg text-white" onClick={()=> {
              navigate('/publish')
            }}> Publish </button>
               <Avatar name="Anku"/>
            </div>
        </div>
    </>
  )
}

export default Navbar