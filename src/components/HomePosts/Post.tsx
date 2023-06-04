// Date: 09/08/21

export default function Post() {
    return (
        <div className="post flex space-x-[50px] items-center py-[30px] px-[50px] border-black 
        ">
            <div className="post__left max-w-[400px]">
                <div className="post__left__top flex items-center space-x-2">
                    <img className="w-5 h-5 rounded-[5px] object-cover" src="https://picsum.photos/200/200" alt="" />
                    <h2 className="font-[600] font-sans text-[14px]"> Lee Fischman</h2>
                </div>
                <div className="post__left__middle">
                    <h2 className="font-[600] font-sans text-[20px]">The 5 best ways to learn a new language</h2>
                    <p className="font-[400] font-sans text-[13px] text-[#979797]">Learning a new language can be difficult, but it's not impossible. Here are five tips to help you learn a new language.</p>
                </div>
                <div className="post__left__bottom flex items-center space-x-2">
                    <h2 className="font-[500] font-sans text-[14px]">Sep 8</h2>
                    <h2 className="font-[500] font-sans text-[14px]">·</h2>
                    <h2 className="font-[500] font-sans text-[14px]">3 min read</h2>
                </div>
            </div>
            <div className="post__right">
                <img className="w-[150px] h-[150px] rounded-[5px] object-cover" src="https://picsum.photos/300/300" alt="" />
            </div>
        </div>
    )
}