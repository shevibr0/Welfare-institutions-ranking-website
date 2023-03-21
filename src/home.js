import {getAuth, signOut } from 'firebase/auth'
import React from 'react'
import  AppMenu from './appMenu'

const Home = () => {
  const auth = getAuth()
function logout(){
  signOut(auth)
}

  return <>

    <h6>You are Logged in</h6>
    <AppMenu/>
    <button onClick={logout}>Sign out</button>
    </>
}

export default Home