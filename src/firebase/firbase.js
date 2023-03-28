// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore' 
import { getAuth  } from 'firebase/auth'



const firebaseConfig = {
  apiKey: "AIzaSyBedm5CY040FU2YxfiC7qPXw5L4woaNe9k",
  authDomain: "panda-eats-b6e5b.firebaseapp.com",
  projectId: "panda-eats-b6e5b",
  storageBucket: "panda-eats-b6e5b.appspot.com",
  messagingSenderId: "989831510803",
  appId: "1:989831510803:web:b63a5f85293bf95280f8e6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const dataBase = getFirestore(app)
const auth = getAuth(app)

export { dataBase, auth }