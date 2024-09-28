import { useNavigate } from "react-router-dom"

const Home = () => {
  const navigate = useNavigate();
  return (
    <> 
        <div className='w-full h-screen flex justify-center items-center'> 
            <div className='flex flex-col'>
            <button className='text-slate-700 py-2 bg-slate-300 px-[50px] rounded-lg hover:bg-slate-500 hover:text-slate-200'
            onClick={() => navigate('/signin')}
            > Signin Page </button>

            <button className='text-slate-700 py-2 bg-slate-300 px-[50px] rounded-lg mt-3 hover:bg-slate-500 hover:text-slate-200'
             onClick={() => navigate('/signup')}
            > Signup Page </button>
        </div>
        </div>
    </>
  )
}

export default Home