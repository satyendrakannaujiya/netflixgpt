import React, { useEffect } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from "./Login";
import Browse from './Browse';
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { auth } from '../utils/firebase';

const Body = () => {

  const dispatch = useDispatch();
  const appRoutes = createBrowserRouter([
    {
        path: "/",
        element: <Login />
    },
    {
        path: "/browse",
        element: <Browse />
    }
])
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
        if(user) {
            console.log("User is logged in ", user);
            const { uid, email, displayName } = user;
            dispatch(addUser({ uid, email, displayName }));
        } else {
            dispatch(removeUser());
            console.log("User is logged out ");
        }
    });   
}, []);

  return (  
    <RouterProvider router={appRoutes}/>
  )
}

export default Body