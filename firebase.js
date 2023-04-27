import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBCOkO_1ztK-KqPuMcrGIlRhhdK-V9i4zM",
  authDomain: "live-chat-33971.firebaseapp.com",
  projectId: "live-chat-33971",
  storageBucket: "live-chat-33971.appspot.com",
  messagingSenderId: "169720166066",
  appId: "1:169720166066:web:595dadf8b85a04a3433bab"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth()