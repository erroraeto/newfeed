import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyBKcFXGX9MuLJ7uoIOqvM0cFmuVXqCPmZ4",
    authDomain: "feednews-ef9dc.firebaseapp.com",
    databaseURL: "https://feednews-ef9dc-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "feednews-ef9dc",
    storageBucket: "feednews-ef9dc.firebasestorage.app",
    messagingSenderId: "872952521135",
    appId: "1:872952521135:web:764a773ecb8cd51eeccf5a",
    measurementId: "G-1HRBFR57HH"
};

const app = initializeApp(firebaseConfig);

export default app;