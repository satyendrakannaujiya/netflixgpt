// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA2r5N8NAQeNxeCzSOsU29-Dcim8_IWMVE",
  authDomain: "netflixgpt-bb931.firebaseapp.com",
  projectId: "netflixgpt-bb931",
  storageBucket: "netflixgpt-bb931.firebasestorage.app",
  messagingSenderId: "52441724590",
  appId: "1:52441724590:web:066a86546c76d71d239f3f",
  measurementId: "G-LK60WQZZTC"
};

export const getFirebaseAuth = () => {
    const auth = getAuth();
    return auth;   
}
// Initialize Firebase 
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);