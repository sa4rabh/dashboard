// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth, GoogleAuthProvider, signInWithPopup} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC_DQ-yaQygX951AjoweXNSAlCLpecz1LQ",
  authDomain: "board-b27f9.firebaseapp.com",
  projectId: "board-b27f9",
  storageBucket: "board-b27f9.appspot.com",
  messagingSenderId: "986977568847",
  appId: "1:986977568847:web:dba143c4a5cdb53907423a",
  measurementId: "G-Z48LG0THHC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider()
export const signInWithGoogle =()=>{
  signInWithPopup(auth, provider)
  .then((result)=>{
    const name = result.user.displayName;
    const email = result.user.email;
    const profilePic = result.user.photoURL;
    localStorage.setItem("name", name)
    localStorage.setItem("email",email)
    localStorage.setItem("photo",profilePic )
  })
  .catch((error)=>{
    console.log(error);
  });
};
export {auth, provider};