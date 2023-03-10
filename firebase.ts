import {getApp, getApps, initializeApp} from "firebase/app"
import { getFirestore } from "firebase/firestore"




// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD1G8MrEn1XMk5EkVbfDqpPd8uZBt5-DiE",
  authDomain: "chatgpt-messenger-yt-bd0f5.firebaseapp.com",
  projectId: "chatgpt-messenger-yt-bd0f5",
  storageBucket: "chatgpt-messenger-yt-bd0f5.appspot.com",
  messagingSenderId: "100011194212",
  appId: "1:100011194212:web:0a1de264dc4c69a3c3ec71"
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export {db};