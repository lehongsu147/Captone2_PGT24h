// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getMessaging } from "firebase/messaging";

const firebaseConfig = {
    apiKey: "AIzaSyCgMTIxR4XvDbsbcnI-PSujI_F2FGgjBNQ",
    authDomain: "pgt-capton2.firebaseapp.com",
    projectId: "pgt-capton2",
    storageBucket: "pgt-capton2.appspot.com",
    messagingSenderId: "670609171389",
    appId: "1:670609171389:web:a75d0682ff10681980a8d4"
};

export const app = initializeApp(firebaseConfig);
export const messaging = getMessaging(app);
