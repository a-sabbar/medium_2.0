import React from 'react'

export default function loadingPost() {
  return (
    <div className="animate-pulse post flex gap-[50px] items-center py-[30px] border-black 
    ">
        <div className="post__left max-w-[400px] cursor-pointer min-w-[400px] flex flex-col gap-[10px]">
            <div className="post__left__top flex items-center gap-[10px]">
                <div className="w-5 h-5 rounded-[5px] object-cover bg-slate-200" />
                <h2 className="font-[600] font-sans text-[14px] bg-slate-200 w-[150px] h-[15px] rounded-[5px]"></h2>
            </div> 
            <div className="post__left__middle flex flex-col gap-[10px] ">
                <h2 className="font-[600] font-sans text-[20px] bg-slate-200 w-[150px] h-[15px] my-[10px] rounded-[5px]"></h2>
                <p className="font-[400] font-sans text-[13px] text-[#979797]
                overflow-hidden overflow-ellipsis whitespace-nowrap  max-w-[400px]
                bg-slate-200  w-[100%] h-[15px] rounded-[5px]
                "></p>
            </div>
            <div className="post__left__bottom flex items-center gap-[5px]">
                <h2 className=" bg-slate-200 font-[500] font-sans text-[14px] w-[30px] h-[15px] rounded-[5px]
                "></h2>
                <h2 className="font-[500] font-sans text-[14px]">.</h2>
                <h2 className=" bg-slate-200 font-[500] font-sans text-[14px] w-[30px] h-[15px] rounded-[5px]"></h2>
            </div>
        </div>
        <div className="post__right cursor-pointer">
            <div className="w-[150px] h-[150px] rounded-[5px] object-cover bg-slate-200"/>
        </div>
    </div>
  )
}
