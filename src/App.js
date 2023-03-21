import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import fire from "./firebase";
import Login from "./login";
import Home from "./home";
import { useState, useEffect } from "react";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
    return unsubscribe;
  }, []);

  return (<div>{user ? <Home /> : <Login />}</div>)
}



export default App;



