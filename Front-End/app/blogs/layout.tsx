'use client';
import Head from 'next/head'
import { useState } from 'react';
import HomeNav from '@/components/Nav/HomeNav/HomeNav';
import UserNav from "@/components/Nav/UserNav/UserNav";
import Join from '@/components/Join/Join'
import SignIn from '@/components/SignIn/SignIn'
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [isSignIn , setIsSignIn] = useState(false)
  const [isLogIn, setIsLogIn] = useState(localStorage.getItem("userLoggedIn") ? true : false);
  const [isJoin, setIsJoin] = useState(false)
  return (
    <html lang="en">
      <body>
        <Head>
          <meta charSet="utf-8" />
          <title>Blog</title>
          <link rel="icon" href="../public/favicon.ico" />
        </Head>
        {isLogIn ? <UserNav setIsLogIn={setIsLogIn}/> : <HomeNav setIsJoin={setIsJoin} setIsSignIn={setIsSignIn} />}
        {children}
        {isJoin && <Join setIsJoin={setIsJoin} setIsSignIn={setIsSignIn}/>}
        {isSignIn && <SignIn setIsSignIn={setIsSignIn} setIsJoin={setIsJoin} setIsLogIn={setIsLogIn}/>}
        </body>
    </html>
  )
}
