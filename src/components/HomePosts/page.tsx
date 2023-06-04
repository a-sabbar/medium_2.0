import Link from "next/link"
import Post from "./Post"
import Topic from "./Topic"
export default function HomeHead() {
  return (
    <div className="HomePosts flex justify-center">
      <div className="HomePosts__posts">
        <Post/>
        <Post/>
        <Post/>
      </div>
      <div className=" flex flex-col gap-[30px]
      px-[30px] py-[20px]
      ">
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
          <Link href="/">Help</Link>
          <Link href="/">Status</Link>
          <Link href="/">Writers</Link>
          <Link href="/">Blog</Link>
          <Link href="/">Careers</Link>
          <Link href="/">Privacy</Link>
          <Link href="/">Terms</Link>
          <Link href="/">Privacy</Link>
          <Link href="/">Text to speech</Link>
          <Link href="/">Teams</Link>
        </div>
      </div>
    </div>
  )
}
