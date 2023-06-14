'use client'


import NavUser from '@/components/Nav/UserNav/UserNav'
import Forbidden from './Forbidden';
import { useState , useEffect } from 'react';
import Post from '@/components/Home/HomePosts/Post';

export default function Home() {
  const [isLogIn, setIsLogIn] = useState(localStorage.getItem("userLoggedIn") ? true : false);
  const [userData, setUserData] = useState<any>({});
  const [myPosts, setMyPosts] = useState<any[]>([]);
  useEffect(() => {
    const getUser = async () => {
      try{
        const fetchUser = await fetch(`http://10.12.9.13:3000/users/name/${localStorage.getItem("userLoggedIn")}`);
        const userInfo = await fetchUser.json();
        setUserData(userInfo);
      }
      catch(err){
        throw new Error('user Not Found');
      }
    }
    getUser();
  }, []);
  useEffect(() => {
    const getPosts = async () => {
      try{
        const fetchPosts = await fetch(`http://10.12.9.13:3000/posts/${userData._id}`);
        const posts = await fetchPosts.json();
        setMyPosts(posts);
      }
      catch(err){
        throw new Error('user Not Found');
      }
    }
    getPosts();
  }, [userData._id]);
  console.log("myPosts : ",myPosts);
  if (!isLogIn) return <Forbidden/>;
  

  return (
    <main className="w-full h-screen">
        <NavUser setIsLogIn={setIsLogIn}/>
        <div className="storiesHeader flex justify-center items-center px-[50px] py-[20px] bg-[#FFC017] w-full">
            <h1 className="text-black text-[150px] font-serif font-[600]">My Stories</h1>
        </div>
        <div className="storiesBody  flex justify-center   px-[50px] py-[20px]  h-[calc(100%-60px)] ">
            <div className='left__side border-black  border-r-[1px] pr-[20px]'>
              {
                myPosts.map((post: any, index: number) => {
                  return <Post key={index} data={post}/>
                })
              }
            </div>
            <div className='right__side w-[300px] h-[400px]   flex flex-col justify-center items-center bg-slate-100 rounded-r-lg shadow-lg'>
              <div className='right__side__top'>
                <img src={`http://10.12.9.13:3000/${userData.avatar}`} alt="" className='w-[100px] h-[100px] rounded-full'/>
              </div>
              <div className='right__side__bottom '>
                <h1 className='text-black text-2xl w-full text-center font-bold '>{userData.name}</h1>
                <p className='text-black text-sm  text-[14px] w-full text-center font-[500]'>{userData.email}</p>
              </div>
            </div>
        </div>
    </main>
  )
}
