// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCTr7Ys1eGh1YG1dlzCkP-gaOAWcreodSY",
  authDomain: "news-portal-7690f.firebaseapp.com",
  projectId: "news-portal-7690f",
  storageBucket: "news-portal-7690f.firebasestorage.app",
  messagingSenderId: "336932224767",
  appId: "1:336932224767:web:6d117f68b89f10c9f6d6ca",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);
export default app;
