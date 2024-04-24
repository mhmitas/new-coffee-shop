import { getAuth } from "firebase/auth";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAba2B2sHpHZxuZkN3JepJgC_zmcPP8U7A",
    authDomain: "a9-reindeer-realty.firebaseapp.com",
    projectId: "a9-reindeer-realty",
    storageBucket: "a9-reindeer-realty.appspot.com",
    messagingSenderId: "755781786305",
    appId: "1:755781786305:web:102f168f9847441b885240"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth 