import { useState, useRef } from 'react'
import Header from './Header'
import { validateLoginInfo } from "../utils/validate";
import {  createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../utils/firebase";
import { addUser } from '../utils/userSlice';
import { useDispatch } from 'react-redux';
import { BACKGROUND_IMAGE } from '../utils/constant';

const Login = () => {
   const dispatch = useDispatch();
  const [isLogin, setIsLogin] = useState(true);
  const [errorMsg, setErrorMessage] = useState("");
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const nameRef = useRef(null);
  

  const handleSubmit = () => {
       const email = emailRef.current.value;
       const password = passwordRef.current.value;
       const name = nameRef?.current?.value;
       const isValidValue = validateLoginInfo(email, password, name, isLogin);
       if(isValidValue) {
         setErrorMessage(isValidValue);
         return;
       }else {
            setErrorMessage("");
            if(isLogin) {
                 signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
                   
                    // navigate("/browse");
                }).catch((error) => {
                    setErrorMessage(error.message + "- " + error.code);
                });
            } else{
               
                createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {
                  
                    updateProfile(auth.currentUser, {
                        displayName: name
                    }).then(() => {
                       
                        const { uid, email, displayName } = auth.currentUser;
                         dispatch(addUser({ uid, email, displayName })); 
                        //  navigate("/browse");  
                    }).catch((error) => {
                    
                        setErrorMessage(error.message + "- " + error.code);
                    });
                }).catch((error) => {
                    setErrorMessage(error.message + "- " + error.code);
                });
            }
       }
       return;
  }

  return (
    <div>
             <Header />
             <div className='absolute'>
                     <img src={BACKGROUND_IMAGE} />
             </div>
            <form onSubmit={(e)=>{ e.preventDefault() }} className='w-3/12 absolute bg-black my-36 p-8 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80'>
                <h1 className='font-bold 3xl py-4'>{isLogin ? "Sign In" : "Sign Up"} </h1>
                {!isLogin && <input type='text' ref={nameRef} placeholder='Name' className='p-2 my-2 w-full bg-gray-700 rounded-lg' />}
                <input type='text' ref={emailRef} placeholder='Email address' className='p-2 my-2 w-full bg-gray-700 rounded-lg' />
                <input type="password" ref={passwordRef} placeholder='Password' className='p-2 my-2 w-full bg-gray-700 rounded-lg'/>
                <p className='text-red-500'>{errorMsg}</p>
                <button onClick={handleSubmit} className='p-2 my-2 bg-red-700 w-full rounded-lg'>{isLogin ? "Sign in" : "Sign Up" }</button>
                {
                    isLogin ? (<p className="cursor-pointer" onClick={()=>{setIsLogin(false); setErrorMessage("");}}>New to netflix? Sign up now </p>) : (<p onClick={()=>{setIsLogin(true); setErrorMessage("")}} className='cursor-pointer'>Already registered ? Sign In</p>)
                }
            </form>
    </div>
   
  )
}

export default Login