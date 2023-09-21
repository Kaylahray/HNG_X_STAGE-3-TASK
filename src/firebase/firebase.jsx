import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBaWxTWxNUEUpoxZ-p9qSiyNnur8kjlbJc",
  authDomain: "fir-dnd-auth-11.firebaseapp.com",
  projectId: "fir-dnd-auth-11",
  storageBucket: "fir-dnd-auth-11.appspot.com",
  messagingSenderId: "307437800829",
  appId: "1:307437800829:web:57055d60804203f1d2d014",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
