'use client'
import Post from "./Post"
import Topics from "./Topics"
import { useState , useEffect } from "react";
import LoadingPost from "./loadingPost";
type Props = {
  topPosition : string;
}

export default function HomePosts({topPosition} : Props) {
  const [allPos, setAllPos] = useState([]);



  useEffect(() => {
    (async () => {
      const fetchPosts = await fetch('http://10.12.9.13:3000/posts');
      const allPosts = await fetchPosts.json();
      setAllPos(allPosts);
        }
    )();
    }, []);

    return (
      <div className="croll-smooth HomePosts flex justify-center gap-[150px] items-start 
      ">
        <div className=" h-full">
          {allPos.length ? (allPos.map((data,index) => (
            <Post key={index} data={data}/>
          ))) :
          <>
          <LoadingPost/>
          <LoadingPost/>
          <LoadingPost/>
          <LoadingPost/>
          <LoadingPost/>
          <LoadingPost/>
          </> 
          }
        </div>
        <Topics position={topPosition}/>
      </div>
    )
}
