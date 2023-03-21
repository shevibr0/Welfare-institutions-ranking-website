import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const config={
    apiKey: "AIzaSyBNZptHZKMrsk0saLoxtvqY-BgOGtq37Ac",
  authDomain: "welfare-institutions-ranking.firebaseapp.com",
  projectId: "welfare-institutions-ranking",
  storageBucket: "welfare-institutions-ranking.appspot.com",
  messagingSenderId: "737965624290",
  appId: "1:737965624290:web:a92d3fb60313cf31b047bb",
  measurementId: "G-8J3C3SHD6B"
}

const app = initializeApp(config);
export const auth = getAuth(app);

export default auth;