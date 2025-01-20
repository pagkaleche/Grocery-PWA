import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDo9nRtzMTFaGFfGWgqlcksi5Y9h7x46x0",
    authDomain: "webdevtrends-59dcf.firebaseapp.com",
    projectId: "webdevtrends-59dcf",
    storageBucket: "webdevtrends-59dcf.firebasestorage.app",
    messagingSenderId: "711058905449",
    appId: "1:711058905449:web:b29e4821f76656e45cc5f8"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

const auth = getAuth(app);

export { db, auth };