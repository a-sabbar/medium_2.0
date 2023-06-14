import React from 'react'

import Link from "next/link"
import close from "../../public/icons/close.png"
import google from "../../public/icons/google.png"
import facebook from "../../public/icons/facebook.png"
import user from "../../public/icons/user.png"
import Image from 'next/image'
import { useEffect } from 'react'


type Props = {
    setIsSignIn : React.Dispatch<React.SetStateAction<boolean>>;
    setIsJoin : React.Dispatch<React.SetStateAction<boolean>>;
    setIsLogIn : React.Dispatch<React.SetStateAction<boolean>>;
}
export default function SignIn({setIsSignIn,setIsJoin,setIsLogIn} : Props) {

  const handleSignInGuest = async () => {
    try
    {
      const response = await fetch("http://10.12.9.13:3000/users/name/guestUser");
      const data = await response.json();
      if (!data.username) throw new Error("user Not Found");
      setIsLogIn(true); 
      localStorage.setItem("userLoggedIn",`${data.username}`);
    }catch (error){
      throw new Error("user Not Found");
    }
  }
    
  return (
    <div className=" join 
    fixed top-0 left-0 w-full h-full bg-black bg-opacity-50
    flex justify-center items-center
    z-[50]
    ">
        <div className="
          relative
          flex justify-start content-center flex-col gap-[20px]
          bg-white min-w-[500px] min-h-[500px] rounded-[10px]
          relative
          ">
            <Image
            src = {close}
            alt = "close"
            width = {15}
            height = {15}
            className="
            absolute top-[20px] right-[20px] cursor-pointer
            "
            onClick={()=> setIsSignIn(false)}
            />
            <p className="
            text-2xl font-bold text-gray-700
            w-full text-center
            py-[50px]
            ">Welcome back.</p>
            <div className="
            flex justify-center items-center flex-col gap-[20px]
            w-full
            "
            >
              <button className="
              flex justify-start items-center gap-[10px]
              font-[400] text-gray-700 text-[14px]
              rounded-[100px] w-[250px] px-[20px] py-[10px]
              border border-gray-300
              ">
                <Image 
              src={google}
              alt="google"
              width={20}
              height={20}
              />Sign up with Google</button>
              <button className="
              flex justify-start items-center gap-[10px]
              font-[400] text-gray-700 text-[14px]
              rounded-[100px] w-[250px] px-[20px] py-[10px]
              border border-gray-300
              ">
                <Image 
                src={facebook}
                alt="facebook"
                width={20}
                height={20}
                />
                Sign up with Facebok</button>
              <button className="
              flex justify-start items-center gap-[10px]
              font-[400] text-gray-700 text-[14px]
              rounded-[100px] w-[250px] px-[20px] py-[10px]
              border border-gray-300
              "
              onClick={()=> {
                setIsSignIn(false);
                handleSignInGuest();
              }}
              >
                <Image 
                src={user}
                alt="facebook"
                width={20}
                height={20}
                />
                Sign up as a guest</button>
            </div>
            <p className="
            text-gray-500 text-[14px]
            w-full text-center
            ">No account?  <span onClick={()=> {setIsSignIn(false); setIsJoin(true)}} className="text-[#1A8917] font-[600] hover:underline cursor-pointer">Create one</span></p>
            <div className="
            flex justify-center items-center flex-col gap-[20px]
            px-[20px] py-[40px]
            w-full
            ">
              <p className="
              text-gray-500 text-[14px]
              text-center w-[300px] cursor-default
              ">
                {"Click “Sign In” to agree to Medium's "} 
                <Link href="/terms" className="text-[#1A8917] font-[600] hover:underline ">
                    Terms of Service 
                </Link>
                {" and acknowledge that Medium's "}
                <Link href="/privacy" className="text-[#1A8917] font-[600] hover:underline ">
                    Privacy Policy
                </Link>
                {" applies to you."}</p>
            </div>
        </div>
    </div>
  )
}
