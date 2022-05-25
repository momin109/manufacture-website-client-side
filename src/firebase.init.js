// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDqzZL6rC0o9n9PbyQnDF5jDbYXj5EdE10",
    authDomain: "assignment12-4428c.firebaseapp.com",
    projectId: "assignment12-4428c",
    storageBucket: "assignment12-4428c.appspot.com",
    messagingSenderId: "669251264743",
    appId: "1:669251264743:web:7124e3bce831eadf6ec242"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;