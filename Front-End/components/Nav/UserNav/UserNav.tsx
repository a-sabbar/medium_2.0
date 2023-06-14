'use client'
import Link from "next/link"
import Menu from "./Menu";
import {useState , useEffect, use} from "react";
import Image from "next/image";
import search from "../../../public/icons/search.svg";
import write from "../../../public/icons/write.svg";
import notification from "../../../public/icons/notification.svg";
import more from "../../../public/icons/more.svg";

type Props = {
  setIsLogIn : React.Dispatch<React.SetStateAction<boolean>>;
}
export default function Nav({setIsLogIn} : Props) {
  const [menu, setMenu] = useState(false);
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
  useEffect(() => {
    window.onscroll = function () {
      setMenu(false);
    };
  }, []);
  
  return (
    <div className="nav flex justify-between items-center py-[10px] px-5 bg-white gap-[30rem]  border-b-[1.2px] border-[#E5E5E5]     z-[52]
    ">
        <div className="nav__logo flex justify-center items-center gap-[20px]">
            <Link href="/" className=" text-2xl font-serif font-extrabold">Medium 2.0</Link>
            <div className="search flex justify-center items-center gap-[10px] bg-[#FAFAFA] rounded-[100px] px-[10px] py-2">
              <Image src={search} alt="search" width={20} height={20}
              className="text-red-500"
              />
              <input type="text" placeholder="Search"  className="bg-[#FAFAFA] border-none outline-none rounded-[100px] w-[150px] font-[400] text-[14px] "/>
            </div>
        </div>
        <div className=" flex justify-center items-center gap-[30px]
        "
        >
            <Link href="/write" className="
            flex justify-center items-center gap-[5px] text-[#979797] hover:text-black font-[400]
            ">
              <Image src={write} alt="write" width={20} height={20}/>
              Write
            </Link>
            <Link href="/notification" className="text-[#979797] hover:text-black font-[400] text-[14px]">
                <Image 
                  src={notification}
                  alt="notification"
                  width={20}
                  height={20}
                />
            </Link>
            <button className=" 
            flex justify-center items-center gap-[05px]"
            onClick={()=>setMenu(!menu)}>
              <img src={`http://10.12.9.13:3000/${userData.avatar}`} alt="" className=" w-[30px] h-[30px] rounded-full"/>
              <Image src={more} alt="more" width={10} height={10}/>
            </button>
        </div>
        {menu && <Menu setIsLogIn={setIsLogIn}/>}
    </div>
  )
}