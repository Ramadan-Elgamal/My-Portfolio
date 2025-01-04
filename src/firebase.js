import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, addDoc, getDocs } from "@firebase/firestore"; // Perbarui ini


// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyB-lfUt1adpQ0KYcFFW_oAWTJVfHDOOZy8",
//   authDomain: "portofolio-web-3e8e8.firebaseapp.com",
//   projectId: "portofolio-web-3e8e8",
//   storageBucket: "portofolio-web-3e8e8.appspot.com",
//   messagingSenderId: "25195509306",
//   appId: "1:25195509306:web:2b635dcf997137bf612703"
// };
const firebaseConfig = {
  apiKey: "AIzaSyDz9T2fqEpso8MHi0hwuU-QuVjIY9Fh1k0",
  authDomain: "portfolio-db-f8638.firebaseapp.com",
  projectId: "portfolio-db-f8638",
  storageBucket: "portfolio-db-f8638.firebasestorage.app",
  messagingSenderId: "305660875079",
  appId: "1:305660875079:web:80ff03266d851feefcbc62",
  measurementId: "G-EW6B50YJ8W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, addDoc };