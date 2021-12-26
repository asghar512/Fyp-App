// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDajIqubI6oIWaNCS0N_ABiaMYbG0tzjI8",
  authDomain: "fir-auth-d91f5.firebaseapp.com",
  projectId: "fir-auth-d91f5",
  storageBucket: "fir-auth-d91f5.appspot.com",
  messagingSenderId: "268828068259",
  appId: "1:268828068259:web:5c8926fa5b699d7d97f216"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app()
}

const auth = firebase.auth()
const database = firebase.database()

export { auth, database };

