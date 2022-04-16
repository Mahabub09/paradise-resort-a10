// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCOtyOvpmilN9Kz8FFxKgjxjC5svJPLRTU",
    authDomain: "paradise-resort-assignment10.firebaseapp.com",
    projectId: "paradise-resort-assignment10",
    storageBucket: "paradise-resort-assignment10.appspot.com",
    messagingSenderId: "764459894342",
    appId: "1:764459894342:web:bb788bb3e863ce2a5e6c47"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth