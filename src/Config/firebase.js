// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO:  Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyDXVW5ru2GAM6L780RjpDxw5Utd7weJjuY",
//   authDomain: "contact-manager-117ff.firebaseapp.com",
//   projectId: "contact-manager-117ff",
//   storageBucket: "contact-manager-117ff.appspot.com",
//   messagingSenderId: "48000864621",
//   appId: "1:48000864621:web:5e8e852468279969304a64"
// };


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBQslViQwzlBHukTP-nPE6GmzVoSqUedkM",
  authDomain: "vite-contact-84f6f.firebaseapp.com",
  projectId: "vite-contact-84f6f",
  storageBucket: "vite-contact-84f6f.appspot.com",
  messagingSenderId: "17622101286",
  appId: "1:17622101286:web:cacb70e015619c76b125e7"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
// Initialize Firebase
