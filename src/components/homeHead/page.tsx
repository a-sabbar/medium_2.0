"use client"
import Link from "next/link"
export default function HomeHead() {
  const handleJoin = () => {
    const join = document.querySelector('.join');
    join?.classList.remove('hidden');
  };
  return (
    <div className="HomeHead bg-[#FFC017] flex justify-center items-center space-x-10 gap-[15rem]
    ">
      <div className="HomeHead__info">
        <h2 className=" text-[70px] font-[500] font-serif">Stay curious.</h2>
        <p className=" text-[20px] font-[400] font-serif"
        >Discover stories, thinking, and expertise<br/>from writers on any topic.</p>
        <button className="HomeHead__button bg-[#171717] border-2 border-black rounded-[100px] px-[30px] py-2 text-white font-[500] text-[14px] mt-[30px] hover:bg-black"
        onClick={() => handleJoin()}
        >Start reading</button>
      </div>
      <div className="HomeHead__animation">
        <p className="text-[350px] font-[600] font-serif">M</p>
      </div>
    </div>
  )
}
