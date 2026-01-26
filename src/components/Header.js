import React,  { useEffect } from 'react'
import {  signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from '../utils/userSlice';
import { useDispatch } from 'react-redux';
import { NETFLIX_LOGO, USER_ICON } from '../utils/constant';

const Header = () => {
   const navigate = useNavigate();
   const user = useSelector((state) => state.user);
     const dispatch = useDispatch();
   
    useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
        if(user) {
          
            const { uid, email, displayName } = user;
            dispatch(addUser({ uid, email, displayName }));
            navigate("/browse");
        } else {
            dispatch(removeUser());
            
            navigate("/");
        }
    });   

    // Unsubscribe called when component unmount.
    return () => {
        unsubscribe();
    }

}, []);

  const handleSignOut = () => {
        signOut(auth).then(() => {
          
          navigate("/");
      }).catch((error) => {
        navigate("/");
         
      });
  }
  return (
    <div className='flex justify-between w-screen absolute px-8 py-2 bg-gradient-to-b from-black z-10'>
        <img 
        className='w-44'
        src={NETFLIX_LOGO}/>
      {user && <div className='flex p-2'>
        <img 
        className='w-12 h-12'
        src={USER_ICON}
        alt="profile"
        />
        <button className='font-bold-500 text-white' onClick={handleSignOut}>Sign Out</button>
      </div>}
    </div>
  )
}

export default Header