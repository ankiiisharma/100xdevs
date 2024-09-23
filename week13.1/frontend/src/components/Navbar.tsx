
import { Avatar } from "../components/BlogCard"

const Navbar = () => {
  return (
    <>
        <div className='border-b flex justify-between py-2 px-[160px]'> 
            <div> 
                <h1 className="text-2xl font-bold"> blogs </h1>
            </div>

            <div className="w-2 h-3"> 
            <Avatar name="Anku"/>
            </div>
        </div>
    </>
  )
}

export default Navbar