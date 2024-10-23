// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCVSE94WVU3C2ONedc5bHJRsaXe9y2Ha8g",
  authDomain: "netflixgpt-66b94.firebaseapp.com",
  projectId: "netflixgpt-66b94",
  storageBucket: "netflixgpt-66b94.appspot.com",
  messagingSenderId: "678541453690",
  appId: "1:678541453690:web:37299bb7168f245dca8ec3",
  measurementId: "G-J9YDR4KR60",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// eslint-disable-next-line no-unused-vars
const analytics = getAnalytics(app);

export const auth = getAuth();
