import HomePosts from '@/components/Home/HomePosts/HomePosts';
export default  function Write() {
    return (
        <div className="">
            <div className=''>
                <h1
                className='text-[100px] font-bold text-center text-black font-serif
                py-[100px] bg-[#FFC017]
                '>The Medium Blog</h1>
                <HomePosts topPosition={"top-[70px]"}/>
            </div>
        </div>
    )
}