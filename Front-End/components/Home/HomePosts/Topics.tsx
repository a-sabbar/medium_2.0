import Link from "next/link"
import Topic from "./Topic"

interface Props {
    position: string;
}

export default function Topics({position}: Props) {
    return (
        <div className={` HomePosts__topics
        flex flex-col gap-[30px]
        px-[30px] py-[20px]
        sticky left-0 w-[300px] ${position}
        z-[10]
        `}
        >
          <p className="text-[20px] font-[500] font-serif">
          Discover more of what matters to you</p>
          <div className="topics  flex  gap-[10px] flex-wrap max-w-[300px] max-h-[180px]
          ">
            <Topic title="Popular on Medium"/>
            <Topic title="Programming"/>
            <Topic title="Self Improvement"/>
            <Topic title="Writing"/>
            <Topic title="Technology"/>
            <Topic title="Relationships"/>
            <Topic title="Machine Learning"/>
            <Topic title="Productivity"/>
          </div>
          <Link href="/topics" className="text-[14px] font-[500] font-sans 
          text-[#5D9C59] hover:underline hover:text-black
          ">See more topics</Link>
          <div className="line w-full h-[1px] bg-gray-300"></div>
          <div className="
          flex flex-wrap  gap-[10px] max-w-[300px] max-h-[180px] text-[14px] font-[500] font-sans text-[#979797]
          ">
            <Link className="hover:underline hover:text-black" href="/">Help</Link>
            <Link className="hover:underline hover:text-black" href="/">Status</Link>
            <Link className="hover:underline hover:text-black" href="/">Writers</Link>
            <Link className="hover:underline hover:text-black" href="/">Blog</Link>
            <Link className="hover:underline hover:text-black" href="/">Careers</Link>
            <Link className="hover:underline hover:text-black" href="/">Privacy</Link>
            <Link className="hover:underline hover:text-black" href="/">Terms</Link>
            <Link className="hover:underline hover:text-black" href="/">Privacy</Link>
            <Link className="hover:underline hover:text-black" href="/">Text to speech</Link>
            <Link className="hover:underline hover:text-black" href="/">Teams</Link>
          </div>
        </div>
    )
}