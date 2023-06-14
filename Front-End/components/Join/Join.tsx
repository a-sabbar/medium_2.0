import Link from "next/link"
import close from "../../public/icons/close.png"
import google from "../../public/icons/google.png"
import facebook from "../../public/icons/facebook.png"
import Image from 'next/image'


type Props = {
  setIsJoin : React.Dispatch<React.SetStateAction<boolean>>;
  setIsSignIn : React.Dispatch<React.SetStateAction<boolean>>;
}


export default function Join({setIsJoin, setIsSignIn} : Props) {

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
            onClick={()=> {setIsJoin(false)}}
            />


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
              ">
                <Image 
                src={google}
                alt="google"
                width={20}
                height={20}
                />
                Sign up with Google</button>
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
            </div>
            <p className="
            text-gray-500 text-[14px]
            w-full text-center
            ">Already have an account? <span onClick={()=> {setIsSignIn(true);setIsJoin(false)}} className="text-[#1A8917] font-[600] hover:underline  cursor-pointer">Sign in</span></p>
            <div className="
            flex justify-center items-center flex-col gap-[20px]
            px-[20px] py-[40px]
            w-full
            ">
              <p className="
              text-gray-500 text-[14px]
              text-center w-[250px] cursor-default
              ">{"To make Medium work, we log user data and share it with service providers. Click “Sign Up” above to accept Medium's "}<Link href="/" className="text-[#1A8917] font-[600] hover:underline ">Terms of Service</Link> & <Link href="/" className="text-[#1A8917] font-[600] hover:underline ">Privacy Policy</Link>.</p>
            </div>
        </div>
    </div>
  )
}
