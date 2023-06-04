import React from 'react'

interface Props {
    title: string
}
export default function Topic({title}: Props) {
    return (
        <div className="topic bg-[#F2F2F2] py-[5px] px-[10px] rounded-[100px] hover:bg-[#E2E2E2] 
        flex justify-center items-center h-[30px] ">
            <button className="topic__title text-[11px] font-[400] font-sans border-none
            w-[100%]  h-[100%] 
            ">{title}</button>
        </div>
    );
}