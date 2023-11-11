import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCgMTIxR4XvDbsbcnI-PSujI_F2FGgjBNQ",
    authDomain: "pgt-capton2.firebaseapp.com",
    projectId: "pgt-capton2",
    storageBucket: "pgt-capton2.appspot.com",
    messagingSenderId: "670609171389",
    appId: "1:670609171389:web:a75d0682ff10681980a8d4"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);