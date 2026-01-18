import { useState } from 'react'
import Header from './Header'

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  return (
    <div>
             <Header />
             <div className='absolute'>
                     <img src='https://assets.nflxext.com/ffe/siteui/vlv3/797df41b-1129-4496-beb3-6fc2f29c59d3/web/IN-en-20260112-TRIFECTA-perspective_004732f9-7464-4a7c-940b-4a51c4f0f73f_large.jpg' />
             </div>
            <form className='w-3/12 absolute bg-black my-36 p-8 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80'>
                <h1 className='font-bold 3xl py-4'>{isLogin ? "Sign In" : "Sign Up"} </h1>
                {!isLogin && <input type='text' placeholder='Name' className='p-2 my-2 w-full bg-gray-700 rounded-lg' />}
                <input type='text' placeholder='Email address' className='p-2 my-2 w-full bg-gray-700 rounded-lg' />
                <input type="password" placeholder='Password' className='p-2 my-2 w-full bg-gray-700 rounded-lg'/>
                <button className='p-2 my-2 bg-red-700 w-full rounded-lg'>{isLogin ? "Sign in" : "Sign Up" }</button>
                {
                    isLogin ? (<p className="cursor-pointer" onClick={()=>{setIsLogin(false)}}>New to netflix? Sign up now </p>) : (<p onClick={()=>{setIsLogin(true)}} className='cursor-pointer'>Already registered ? Sign In</p>)
                }
            </form>
    </div>
   
  )
}

export default Login