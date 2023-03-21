import React from 'react';
import { getAuth, signInWithEmailAndPassword, fetchSignInMethodsForEmail,createUserWithEmailAndPassword } from "firebase/auth";

const Login = () => {

  const auth = getAuth(); // Get the authentication instance

  const login = () => {
    const email = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;
  
    // Check if the user exists
    fetchSignInMethodsForEmail(auth,email)
      .then((signInMethods) => {
        if (signInMethods.length === 0) {
          console.log("Error: User does not exist");
        } else {
          // User exists, log in
          signInWithEmailAndPassword(auth, email, password)
            .then((u) => {
              console.log("success");
            })
            .catch((err) => {
              console.log("Error" + err.toString());
            });
        }
      })
      .catch((err) => {
        console.log("Error" + err.toString());
      });
  };

  const signup = () => {
    const email = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;
  
    // Create a new account
    createUserWithEmailAndPassword(auth, email, password)
      .then((u) => {
        console.log("success");
      })
      .catch((err) => {
        console.log("Error" + err.toString());
      });
  };

  return (
    <div className='container '>
      <div>
        <h1>Email</h1>
        <input id='email' placeholder='Enter Email..' type="text" />
      </div>
      <div>
        <h1>Password</h1>
        <input id='password' placeholder='Enter Password..' type="text" />
      </div>
      <button onClick={login}>Login</button>
      <button onClick={signup}>Sign Up</button>
    </div>
  );
};

export default Login;