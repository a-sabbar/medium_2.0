'use client'

import React, { ChangeEvent, useState } from 'react';

type BodyProps = {
  setSelectedFile: (file: File | null) => void;
};
const Body = ({setSelectedFile}: BodyProps) => {
  const [file, setFile] = useState("Add Image");
  const handleImage = (e:any) => {
    e.preventDefault();
    const addImage = document.getElementById('file');
    addImage?.click();
  };

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file: File | null = event.target.files ? event.target.files[0] : null;
    setSelectedFile(file);
    if (file) {
      setFile(file.name);
    }

  };
  return (
    <div className="w-full flex justify-center items-center">
      <form className="flex justify-center items-center flex-col gap-[20px]
      py-[150px] w-full
      ">
        <input type="text" name="title" id="title" placeholder="Title"
        className='w-[50%] h-[40px] border border-gray-400 rounded px-[10px] py-[5px] text-[14px] font-sans font-bold focus:outline-none'/>
        
      <textarea form="content" className='
      max-w-[50%] min-w-[50%] max-h-[600px] min-h-[400px] border border-gray-400 rounded px-[10px] py-[5px] text-[14px] font-sans font-bold focus:outline-none '
      id="content" name="content"
      placeholder='Tell your story...'
      />
      <label>
        <input type="file" id="file" name="file" onChange={handleFileChange} hidden/>
        <button className="bg-[#1A8917] text-white rounded-[100px] px-[15px] py-[2px] text-[14px]
        flex justify-center items-center"
        onClick={handleImage}>
          {file}
        </button>
      </label>
      </form>
    </div>
  );
};

export default Body;
