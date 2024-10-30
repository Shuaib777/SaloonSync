import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import { getDatabase, ref } from "firebase/database";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_APP_FIREBASE_KEY,
  authDomain: "saloonsync-bde52.firebaseapp.com",
  projectId: "saloonsync-bde52",
  storageBucket: "saloonsync-bde52.appspot.com",
  messagingSenderId: "1043965591508",
  appId: "1:1043965591508:web:f9c05e5a1a555efe50e041",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const database = getDatabase(app);
export const refdb = ref;
