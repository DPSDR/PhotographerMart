// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAjB2ZjKb8nnvJk44WMxYuraWPHIEc6Jts",
    authDomain: "photographermart-763e5.firebaseapp.com",
    projectId: "photographermart-763e5",
    storageBucket: "photographermart-763e5.appspot.com",
    messagingSenderId: "422211607925",
    appId: "1:422211607925:web:dcba9b38267ca48185073c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;