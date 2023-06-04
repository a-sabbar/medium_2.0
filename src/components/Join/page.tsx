'use client'
import Link from "next/link"
import { GrFormClose } from "react-icons/gr";
import { FcGoogle } from "react-icons/Fc";
import { SiFacebook } from "react-icons/si";
import { TfiEmail } from "react-icons/tfi";
export default function Join() {

  const handleClose = () => {
    const join = document.querySelector('.join');
    join?.classList.add('hidden');
  };
  return (
    <div className=" join hidden
    fixed top-0 left-0 w-full h-full bg-black bg-opacity-50
    flex justify-center items-center
    ">
        <div className="
          relative
          flex justify-start content-center flex-col gap-[20px]
          bg-white min-w-[500px] min-h-[500px] rounded-[10px]
          ">
            <GrFormClose className="
            text-2xl text-gray-500 cursor-pointer
            absolute top-[20px] right-[20px]
            "  onClick={() => handleClose()}/>
            <p className="
            text-2xl font-bold text-gray-700
            w-full text-center
            py-[50px]
            ">Join Mediume.</p>
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
              "><FcGoogle/>Sign up with Google</button>
              <button className="
              flex justify-start items-center gap-[10px]
              font-[400] text-gray-700 text-[14px]
              rounded-[100px] w-[250px] px-[20px] py-[10px]
              border border-gray-300
              "><SiFacebook/>Sign up with Facebok</button>
              <button className="
              flex justify-start items-center gap-[10px]
              font-[400] text-gray-700 text-[14px]
              rounded-[100px]  w-[250px] px-[20px] py-[10px]

              border border-gray-300
              "><TfiEmail/>Sign up with Email</button>
            </div>
            <p className="
            text-gray-500 text-[14px]
            w-full text-center
            ">Already have an account? <Link href="/login" className="text-[#1A8917] font-[600] hover:underline ">Sign in</Link></p>
            <div className="
            flex justify-center items-center flex-col gap-[20px]
            px-[20px] py-[40px]
            w-full
            ">
              <p className="
              text-gray-500 text-[14px]
              text-center w-[250px] cursor-default
              ">To make Medium work, we log user data and share it with service providers. Click “Sign Up” above to accept Medium's <Link href="/" className="text-[#1A8917] font-[600] hover:underline ">Terms of Service</Link> & <Link href="/" className="text-[#1A8917] font-[600] hover:underline ">Privacy Policy</Link>.</p>
            </div>
        </div>
    </div>
  )
}
