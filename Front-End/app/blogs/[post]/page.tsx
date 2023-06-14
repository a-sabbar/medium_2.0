'use client';
import { useParams } from 'next/navigation';
import { useState , useEffect } from 'react';

export default function Post() {
  const { post } = useParams();
  const [__Data, set__Data] = useState<any>({});
  const [__User, set__User] = useState<any>({});
  useEffect(() => {
    const getInformation = async () => {
      try{
        const fetchPost = await fetch(`http://10.12.9.13:3000/posts/info/${post}`);
        const postInfo = await fetchPost.json();
        set__Data(postInfo);
      }
      catch(err){
        console.log("err : ",err);
      }
    }
    getInformation();
  }, []);
  useEffect(() => {
    const getUser = async () => {
      try{
        console.log("writerId : ",__Data.writerId);
        const fetchUser = await fetch(`http://10.12.9.13:3000/users/${__Data.writerId}`);
        const userInfo = await fetchUser.json();
        set__User(userInfo);
      }
      catch(err){
        console.log("err : ",err);
      }
    }
    getUser();
  }, [__Data.writerId]);
  console.log("__Data : ",__Data);
  return (
    <div>
      <div className='body flex justify-center items-center pt-[50px]'>
        <div className='body__head flex px-10 flex-col gap-[20px] max-w-[950px] '>
          <h1 className=' font-sans font-[800] text-[40px]'>
            {__Data.title}
          </h1>
          <div className='body__head__info flex  items-center gap-[20px] pt-[35px]'>
            <img src={`http://10.12.9.13:3000/${__User.avatar}`} alt=''  className='w-[50px] h-[50px] rounded-full'/>
            <div className=''>
              {__User.name ? (<h1 className='font-sans font-[600] text-[20px]'>{__User.name}</h1>) : (<h1 className='animate-pulse text-[#FFC017] bg-slate-200 w-[100px] h-[13px] mb-[15px]'></h1>)}
              {__Data.date ? (<p>{`Published in ${__Data.date.substring(0, 10)} . ${__Data.readTime} min read `}</p>) : (<p className='animate-pulse text-[#FFC017] bg-slate-200 w-[200px] h-[10px]'></p>)}
            </div>
          </div>
          <div className='line w-full h-[1px] bg-[#E5E5E5]'></div>
          <div className='info w-full flex flex-col gap-[20px] justify-center items-center content-center py-[35px]'>
            <img src={`http://10.12.9.13:3000/${__Data.image}`} alt='' className='object-cover mb-[30px]'/>
            {__Data.description && (<p className='mb-3 text-gray-500 dark:text-gray-400 first-line:uppercase first-line:tracking-widest first-letter:text-7xl first-letter:font-bold first-letter:text-gray-900 dark:first-letter:text-gray-100
             first-letter:mr-3 first-letter:float-left '>
              {
                __Data.description.split('\n').map((item: string, index: number) => {
                  return <p key={index}>{item}<br/></p>
                }
                )
              }
              </p>)}
          </div>
        </div>
      </div>
    </div>
  );
}
