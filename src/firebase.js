// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCEnTGF1UOjMDQGbiqM73aIIrGaStH6TDs",
  authDomain: "fir-tuto-3b1c6.firebaseapp.com",
  projectId: "fir-tuto-3b1c6",
  storageBucket: "fir-tuto-3b1c6.appspot.com",
  messagingSenderId: "916385269075",
  appId: "1:916385269075:web:28cb76f59807166d098da6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {db};
// export default db;