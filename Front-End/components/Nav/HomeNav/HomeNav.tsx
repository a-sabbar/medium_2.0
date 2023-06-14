import Link from "next/link"

type Props = {
  setIsJoin : React.Dispatch<React.SetStateAction<boolean>>;
  setIsSignIn : React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Nav({setIsJoin,setIsSignIn} : Props) {
  return (
    <div className="nav 
    sticky
    top-0 left-0 w-full h-[70px]
    flex justify-center items-center py-5 px-10 bg-[#FFC017] gap-[50rem]  border-b-[1.2px] border-black
    z-[52]
    ">
      <div className="nav__logo">
        <Link href="/" className=" text-2xl font-serif font-extrabold">Medium 2.0</Link>
      </div>
      <div className="nav__links flex justify-center items-center gap-[30px]">
        <button onClick={()=> {setIsSignIn(true)}} >Sign In</button>
        <button className="nav__button bg-[#171717] border-2 border-black rounded-[100px] px-5 py-2 text-white font-[400] text-[14px] hover:bg-black "
         onClick={()=>setIsJoin(true)}
         >Get started</button>
      </div>
    </div>
  )
}
