import React from 'react'

type Props ={
  setIsJoin : React.Dispatch<React.SetStateAction<boolean>>
}
export default function HomeHead({setIsJoin} : Props) {
  return (
    <div className="HomeHead bg-[#FFC017] flex justify-center items-center gap-[25rem] w-full h-[500px]
    ">
      <div className="HomeHead__info
      flex flex-col justify-center items-start gap-[20px]
      ">
        <h2 className=" text-[70px] font-[500] font-serif">Stay curious.</h2>
        <p className=" text-[20px] font-[400] font-serif"
        >Discover stories, thinking, and expertise<br/>from writers on any topic.</p>
        <button className="HomeHead__button bg-[#171717] border-2 border-black rounded-[100px] px-[30px] py-2 text-white font-[500] text-[14px] mt-[30px] hover:bg-black"
        onClick={()=> setIsJoin(true)}
        >Start reading</button>
      </div>
      <div className="HomeHead__animation">
        <p className="text-[350px] font-[600] font-serif">M</p>
      </div>
    </div>
  )
}
