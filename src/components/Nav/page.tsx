'use client'
import Link from "next/link"
export default function Nav() {
  const handleJoin = () => {
    const join = document.querySelector('.join');
    join?.classList.remove('hidden');
  };
  return (
    <div className="nav flex justify-center items-center py-5 px-10 bg-[#FFC017] gap-[30rem]  border-b-[1.2px] border-black
    ">
      <div className="nav__logo">
        {/* <img src="/logo.svg" alt="logo" /> */}
        <Link href="/" className=" text-2xl font-serif font-extrabold">Medium 2.0</Link>
      </div>
      <div className="nav__links flex justify-center items-center space-x-5">
        <Link href="/Our-story">Our story</Link>
        <Link href="/Membership">Membership</Link>
        <Link href="/Write">Write</Link>
        <Link href="/Sign-In">Sign In</Link>
        <button className="nav__button bg-[#171717] border-2 border-black rounded-[100px] px-5 py-2 text-white font-[400] text-[14px] hover:bg-black "
        onClick={() => handleJoin()}
         >Get started</button>
      </div>
    </div>
  )
}
