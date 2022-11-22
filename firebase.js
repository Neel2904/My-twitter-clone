import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCVEZ85szovu_49P1KI17d9dd6YEpHsw1A",
  authDomain: "my-twitter-4e2b6.firebaseapp.com",
  projectId: "my-twitter-4e2b6",
  storageBucket: "my-twitter-4e2b6.appspot.com",
  messagingSenderId: "798443233938",
  appId: "1:798443233938:web:dc0e9a99a38a051b647c4b"
};


const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export default app;
export { db, storage };