'use client'
import Link from 'next/link'
import Image from 'next/image'
import user from '../../../public/icons/user.png'
import articles from '../../../public/icons/articles.svg'
import stats from '../../../public/icons/stats.svg'
import setting  from '../../../public/icons/setting.svg'
import help from '../../../public/icons/help.svg'
import {useState , useEffect} from "react";
type Props = {
  setIsLogIn : React.Dispatch<React.SetStateAction<boolean>>;
}
export default function Menu({setIsLogIn} : Props) {

  const [userData, setUserData] = useState<any>({});

  useEffect(() => {
    const getUser = async () => {
      try{
        const fetchUser = await fetch(`http://10.12.9.13:3000/users/name/${localStorage.getItem("userLoggedIn")}`);
        const userInfo = await fetchUser.json();
        setUserData(userInfo);
      }
      catch(err){
        console.log("err : ",err);
      }
    }
    getUser();
  }, []);
  return(
      <div className="menu  z-[100] 
      absolute top-[60px] right-[1.5rem] bg-white rounded-[10px] shadow-md  flex flex-col gap-[10px]
      py-[10px] 
      ">
        <Link href="/profile" className="flex justify-start items-center 
        pr-[150px] pl-[20px] gap-3 py-[5px] text-[#B1B1B1] hover:text-black font-[400] text-[14] font-mono tracking-tighter
          ">
          <Image src={user} alt="user" width={15} height={15}
          />
          Profile
        </Link>
        <Link href="/stories" className="flex justify-start items-center 
        pr-[150px] pl-[20px] gap-3 py-[5px] text-[#B1B1B1] hover:text-black font-[400] text-[14] font-mono tracking-tighter
        ">
          <Image src={articles} alt="articles" width={15} height={15}
          />  
            Stories
        </Link>
        <Link href="/stats" className="flex justify-start items-center 
        pl-[20px] gap-3 py-[5px] text-[#B1B1B1] hover:text-black font-[400] text-[14] font-mono tracking-tighter
        ">
          <Image src={stats} alt="stats" width={15} height={15}/> 
          Stats
        </Link>
        <div className=" line w-[100%] h-[1px] bg-[#E5E5E5]"></div>

        <Link href="/settings" className="flex justify-start items-center 
        pl-[20px] gap-3 py-[5px] text-[#B1B1B1] hover:text-black font-[400] text-[14] font-mono tracking-tighter
        ">
          <Image src={setting} alt="setting" width={15} height={15}/>
          Settings
        </Link>
        <Link href="/help" className="flex justify-start items-center 
        pl-[20px] gap-3 py-[5px] text-[#B1B1B1] hover:text-black font-[400] text-[14] font-mono tracking-tighter
        ">
          <Image src={help} alt="help" width={15} height={15}/>
          Help
        </Link>
        <div className=" line w-[100%] h-[1px] bg-[#E5E5E5]"></div>
        <Link href="/" className="flex items-start flex-col content-start
        pr-[50px] pl-[20px] py-[5px] text-[#B1B1B1] hover:text-black font-[400] text-[14] font-mono tracking-tighter
        "
        onClick={()=>{localStorage.removeItem("userLoggedIn");setIsLogIn(false)}}
        >
          <p>Sign out</p>
          {userData.email ? <p className="text-[#B1B1B1] font-[400] text-[14px]" >{userData.email}</p> : <p className="text-[#B1B1B1] font-[400] text-[14px] bg-slate-200 w-[250px] h-[10px] animate-pulse mt-[15px]"></p>}
          
        </Link>
      </div>
  )
}