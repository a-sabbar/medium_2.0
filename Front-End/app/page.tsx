'use client'

import NavHome from '../components/Nav/HomeNav/HomeNav'
import HomeHead from '../components/Home/HomeHead/HomeHead'
import HomePosts from '../components/Home/HomePosts/HomePosts'
import NavUser from '../components/Nav/UserNav/UserNav'
import { useState } from 'react'
import Join from '../components/Join/Join'
import SignIn from '../components/SignIn/SignIn'

export default function Home() {
  const [isSignIn , setIsSignIn] = useState(false)
  const [isLogIn, setIsLogIn] = useState(localStorage.getItem("userLoggedIn") ? true : false);
  const [isJoin, setIsJoin] = useState(false)
  if (isLogIn) {
    return (
      <main className="home w-full h-100">
        <NavUser setIsLogIn={setIsLogIn}/>
        <HomePosts topPosition="top-[0px]"/>
      </main>
    )
  }
  return (
    <main className="home w-full h-100 flex flex-col justify-center items-center">
        <NavHome setIsJoin={setIsJoin} setIsSignIn={setIsSignIn} />
        <HomeHead setIsJoin={setIsJoin}/>
        <HomePosts topPosition="top-[70px]"/>
        {isJoin && <Join setIsJoin={setIsJoin} setIsSignIn={setIsSignIn}/>}
        {isSignIn && <SignIn setIsSignIn={setIsSignIn} setIsJoin={setIsJoin} setIsLogIn={setIsLogIn}/>}
    </main>
  )
}
