import AuthSignin from '../components/AuthSignin';
import QuoteSignin from '../components/QuoteSignin'

const Signin= () => {
  return (
    <div> 
        <div className='grid grid-cols-1 lg:grid-cols-2'>
        <div className='hidden lg:block'> <QuoteSignin /> </div>
        <div className=''> <AuthSignin /> </div>
       </div>
    </div>  
  )
}

export default Signin;