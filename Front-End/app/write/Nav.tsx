import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

interface Props {
    myFunction: () => void;
}


export default  function Nav({ myFunction }: Props) {
    return (
        <div className="w-full bg-gray-100 h-[70px] flex justify-center items-center gap-[35rem]">
            <Link
                href="/"
                className='flex justify-center items-center gap-2
            text-2xl font-serif font-extrabold'
            >
                <Image
                    src="/mediumWrite.png"
                    alt="Picture of the author"
                    width={40}
                    height={40}
                />
                Medium 2.0
            </Link>
            <div className="flex justify-center items-center gap-[20px]">
                <button className="bg-[#1A8917] text-white rounded-[100px] px-[15px] py-[2px] text-[14px] flex justify-center items-center"
                    onClick={() => {myFunction()}}
                    >
                    Publish
                </button>
                <Link href="/notification">
                    <Image
                        src="/icons/notification.svg"
                        alt="Picture of the author"
                        width={20}
                        height={20}
                    />
                </Link>
                <button>
                    <img src="https://picsum.photos/200/300" alt="" className=" w-[30px] h-[30px] rounded-full" />
                </button>
            </div>
        </div>
    )
}
