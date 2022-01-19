import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBcmXnkmDMsSA08qExLDSh4MzPs33ZjUNY",
  authDomain: "twitter-clone-44465.firebaseapp.com",
  projectId: "twitter-clone-44465",
  storageBucket: "twitter-clone-44465.appspot.com",
  messagingSenderId: "432638957177",
  appId: "1:432638957177:web:7665d739671863362626a8",
  measurementId: "G-6Y5ZE1LJ2N"
};


const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export default app;
export { db, storage };