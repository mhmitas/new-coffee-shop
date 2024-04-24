import { getAuth } from "firebase/auth";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD0RfEnc5d71zBZYc6FG-slbbgmeFcs6b8",
    authDomain: "espresso-emporium-coffee-c4939.firebaseapp.com",
    projectId: "espresso-emporium-coffee-c4939",
    storageBucket: "espresso-emporium-coffee-c4939.appspot.com",
    messagingSenderId: "659893349721",
    appId: "1:659893349721:web:5050279704ba8d1296f048"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth 