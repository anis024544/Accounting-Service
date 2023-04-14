// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyChLpd7lT2Vw0W0aFUfgdpg2KuGa-Ha5a4",
  authDomain: "accounting-service-a2634.firebaseapp.com",
  projectId: "accounting-service-a2634",
  storageBucket: "accounting-service-a2634.appspot.com",
  messagingSenderId: "345801971202",
  appId: "1:345801971202:web:220dd4742d7b97e25cb91b"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;