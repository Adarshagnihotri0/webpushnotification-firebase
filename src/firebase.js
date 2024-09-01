// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getMessaging } from "firebase/messaging";


//* https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB0MV5kwT-Le4dzXRhywMcbRcRn-HAmFIc",
  authDomain: "webpushnotification-cc01d.firebaseapp.com",
  projectId: "webpushnotification-cc01d",
  storageBucket: "webpushnotification-cc01d.appspot.com",
  messagingSenderId: "254464963916",
  appId: "1:254464963916:web:57f03c582480038ba68be9"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const messaging = getMessaging(app);