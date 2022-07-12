// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDS37ipzs-FmBfG9s9VCArVx9ugJ79dPnA",
  authDomain: "wonderbotanics-40804.firebaseapp.com",
  projectId: "wonderbotanics-40804",
  storageBucket: "wonderbotanics-40804.appspot.com",
  messagingSenderId: "1000825684334",
  appId: "1:1000825684334:web:99426914a4f178b8ce417f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;