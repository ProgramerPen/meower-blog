import { initializeApp} from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup} from "firebase/auth";

import { getFirestore } from "firebase/firestore";

const firebaseConfig = {

    apiKey: "AIzaSyCHuJhHbI4STUJMFRyE3KTu59WIwg3GG5A",
  
    authDomain: "mewewr-bcda3.firebaseapp.com",
  
    projectId: "mewewr-bcda3",
  
    storageBucket: "mewewr-bcda3.appspot.com",
  
    messagingSenderId: "314660557917",
  
    appId: "1:314660557917:web:b96845a50ab3c32e9329b4"
  
  };
  initializeApp(firebaseConfig);
  
export const auth = getAuth();
export const googleAuthProvider = new GoogleAuthProvider();
export const db = getFirestore();
 