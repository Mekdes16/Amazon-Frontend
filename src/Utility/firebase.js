
import firebase from "firebase/compat/app";
// auth
import {getAuth} from "firebase/auth";
import "firebase/compat/firestore";
import "firebase/compat/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC7xgX6aZ2SaQ3b5f5mROyVm57zsBOfEVo",
  authDomain: "clone-5e1e5.firebaseapp.com",
  projectId: "clone-5e1e5",
  storageBucket: "clone-5e1e5.appspot.com",
  messagingSenderId: "234437276089",
  appId: "1:234437276089:web:a3f093b45467d6882c8668"
  // measurementId: "G-6912MSBC5L"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

export const auth =getAuth(app);
export const db =app.firestore();