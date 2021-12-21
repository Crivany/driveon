//Dependencias
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, FacebookAuthProvider } from '@firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getAnalytics } from "firebase/analytics";


export const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTHDOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECTID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGEBUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGINGSENDERID,
    appId: process.env.REACT_APP_FIREBASE_APPID,
    measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENTID
};

// Iniciar Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const google = new GoogleAuthProvider();
export const facebook = new FacebookAuthProvider();
export const db = getFirestore(app);