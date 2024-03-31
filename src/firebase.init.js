// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBFyyxaOMBJ5Lktp9UC9s9t5KPGp97NkdI",
  authDomain: "fir-practice-repo.firebaseapp.com",
  projectId: "fir-practice-repo",
  storageBucket: "fir-practice-repo.appspot.com",
  messagingSenderId: "189788495152",
  appId: "1:189788495152:web:6b273fcfa6d45519e03cf5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;