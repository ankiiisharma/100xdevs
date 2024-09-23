import img01 from "../assets/signup.png"

const Quote = () => {
  return (
    <div className='bg-slate-200 h-screen flex justify-center items-center flex-col'>
      <div> 
        <img src={img01} className="h-[200px] mb-6" />
      </div>
        <div className="max-w-lg text-2xl font-bold text-gray-700"> 
           Diamonda de naal tol daan,  jinha tera paar goriye! Gabru ta veri nu vi mittha <br/>
           <h2 className="text-slate-800 mt-2">"bolda, tu ta fir bhi Jatt da pyaar goriye" </h2>
        </div>
        <div className=" max-w-lg w-full flex flex-col justify-start mt-4"> 
            <h1 className="flex font-semibold text-[17px]"> Sir Nelson Mandela </h1>
            <h1 className="flex text-[14px]"> Former President of South Africa
            </h1>

        </div> 
    </div>
  )
}

export default Quote;