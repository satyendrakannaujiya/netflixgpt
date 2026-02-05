import React,  { use, useEffect, useState } from 'react'
import {  signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from '../utils/userSlice';
import { toggleGPTSearchView, toggleDifferentGPTView } from '../utils/gptSlice';
import { useDispatch } from 'react-redux';
import { NETFLIX_LOGO, USER_ICON } from '../utils/constant';
import { supportedLanguages } from '../utils/languageConstant';
import { setLanguage } from '../utils/configSlice';

const Header = () => {
   const navigate = useNavigate();
   const user = useSelector((state) => state.user);
   const gpt = useSelector((state) => state.gpt);
     const dispatch = useDispatch();
    const { showGPTSearchView } = gpt;
   
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

  const handleGPTSearch = () => {
    dispatch(toggleGPTSearchView());
  }

  return (
    <div className='flex justify-between w-screen absolute px-8 py-2 bg-gradient-to-b from-black z-10'>
        <img 
        className='w-44'
        src={NETFLIX_LOGO}/>
      {user && <div className='flex p-2'>
       {showGPTSearchView && <select className="bg-black text-white p-2 m-2 rounded-lg" onChange={(e) => {
          dispatch(setLanguage(e.target.value));
        }}>
          {
            supportedLanguages.map((lang) => (
              <option key={lang.code} value={lang.code}>{lang.label}</option>
            ))
          }
        </select>}
        <button className='py-2 px-4 m-2 bg-purple-800 text-white mx-4 rounded-lg' onClick={handleGPTSearch}>{showGPTSearchView ? "Home" : "GPT Search"}</button>
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