// Date: 09/08/21
'use client';
import { useState , useEffect } from 'react';
import Link from 'next/link';

type Props = {
    data: {
    title: String,
    description: String,
    writerId: String,
    image: String,
    readTime: String,
    date: String,
    _id: String,
    };
}
export default  function Post({data} : Props) {

    const parsedDate = () =>
    {
        const date = new Date(`${data.date}`);
        const month = date.getMonth();
        const day = date.getDay();
        return `${month}-${day}`;
    }
    const mydata = parsedDate();
    const [userData, setUserData] = useState<any>({});

    useEffect(() => {
        const getUser = async () => {
            const user = await fetch(`http://10.12.9.13:3000/users/647f834b4bad7c5887abc30e`);
            const data = await user.json();
            console.log("data : ",data);
            setUserData(data);
        }
        getUser();
    }, []);
    return (
        <Link className="post flex gap-[50px] items-center  border-black
        bg-slate-50  rounded-[5px] mb-[20px] mt-[20px] px-[20px] py-[20px]
        " href={`/blogs/${data._id}`}>
            <div className="post__left max-w-[400px] cursor-pointer min-w-[400px] flex flex-col justify-center gap-[15px]">
                <div className="post__left__top flex items-center gap-[10px]">
                    <img className="w-5 h-5 rounded-[5px] object-cover" src={`http://10.12.9.13:3000/${userData.avatar}`} alt="" />
                    <h2 className="font-[600] font-sans text-[14px]">{userData.name}</h2>
                </div>
                <div className="post__left__middle">
                    <h2 className="font-[600] font-sans text-[20px]">{data.title}</h2>
                    <p className="font-[400] font-sans text-[13px] text-[#979797]
                    overflow-hidden overflow-ellipsis whitespace-nowrap  max-w-[400px]
                    ">{data.description}</p>
                </div>
                <div className="post__left__bottom flex items-center gap-[5px]">
                    <h2 className="font-[500] font-sans text-[14px]">{mydata}</h2>
                    <h2 className="font-[500] font-sans text-[14px]">·</h2>
                    <h2 className="font-[500] font-sans text-[14px]">{data.readTime? data.readTime : "5"} min read</h2>
                </div>
            </div>
            <div className="post__right cursor-pointer">
                <img className="w-[150px] h-[150px] rounded-[5px] object-cover" src={`http://10.12.9.13:3000/${data.image}`} alt="" />
            </div>
        </Link>
    )
}