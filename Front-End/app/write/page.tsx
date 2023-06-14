'use client';
import React from 'react';
import Nav from './Nav';
import Body from './Body';
import { useState , useEffect } from 'react';



export default  function Write() {
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [__User, set__User] = useState<any>({});
    useEffect(() => {
        const getUser = async () => {
            const user = await fetch(`http://10.12.9.13:3000/users/name/${localStorage.getItem("userLoggedIn")}`);
            const data = await user.json();
            set__User(data);
        }
        getUser();
    }, []);
    const handleClick = async () => {
        const __formData = new FormData();
        const title   : any | null = document.getElementById('title');
        const content : any | null = document.getElementById('content');
        if (title.value === '') {
            title.focus();
            title.style.border = '1px solid red';
        }
        if (content.value === '') {
            content.focus();
            content.style.border = '1px solid red';
            return;
        }
        try 
        {
            const __data = new FormData();
            __data.append('title', title.value);
            __data.append('description', content.value);
            __data.append('image', selectedFile as Blob);
            console.log("__User : ",__User);
            console.log("__User._id : ",__User._id);
            __data.append('writerId', __User._id);
            __data.append('readTime', `${(content.value.length * 0.005).toString().split('.')[0]}`);
            __data.append('date', new Date().toString());
            
            const response = await fetch('http://10.12.9.13:3000/posts', {
                method: 'POST',
                body : __data,
            });
            const post = await response.json();
            setTimeout(() => {
                window.location.href = `/blogs/${post._id}`;
            }, 1000);
        }
        catch (error) {
            throw new Error('user Not Found');
        }
    }
    return (
        <div className="">
            <Nav myFunction={handleClick} />
            <Body setSelectedFile={setSelectedFile}/>
        </div>
    )
}