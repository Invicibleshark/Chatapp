
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBCDDaN_Qdc54jDr7CQ4C0cAEmRXlLHkwo",
  authDomain: "chat-application-28fb5.firebaseapp.com",
  projectId: "chat-application-28fb5",
  storageBucket: "chat-application-28fb5.appspot.com",
  messagingSenderId: "1004828932635",
  appId: "1:1004828932635:web:3b21013deeeeb58b7a96be",
  measurementId: "G-6BPTG65QGX"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth=getAuth();
export const storage = getStorage();
export const db=getFirestore();
