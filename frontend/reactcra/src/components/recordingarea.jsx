import React, { useContext, useEffect, useState } from 'react'
import MicButton from './micbutton';
import { ReactMic } from 'react-mic';
import chatContext from '../context/chatcontext';
import { CircularProgress } from '@mui/material';

export default function RecordingArea() {
    const {messages,setmessages}=useContext(chatContext);
    useEffect(()=>{
        var objDiv = document.getElementById("messages");
        objDiv.scrollTop = objDiv.scrollHeight+100;
    },[messages])
    const [rec,setRec]=useState(false);
    const clk=()=>{
        setRec(!rec);
        // onStop();
    }
    let newmsg=[];
    const onstop=async(blob)=>{
        console.log("HELLO",blob);
        // let filenow =new File([blob.blob],"newvoice.webm");
        let aud=new Audio(blob.blobURL);
        // aud.play();
        console.log("HERE",messages)
        newmsg=newmsg.concat([{time:messages.length,text:<CircularProgress color="success" />,sender:'user'}])
        setmessages(newmsg);
        newmsg=newmsg.slice(0,newmsg.length-1);
        newmsg=newmsg.concat([{time:newmsg.length,text:<audio src={`${blob.blobURL}`} controls></audio>,sender:'user'}])
        newmsg=newmsg.concat([{time:newmsg.length,text:blob.blobURL,sender:'bot'}])
        setmessages(newmsg)
        
        let filenow =new File([blob.blob],"newvoice.webm");
        console.log("FILE",filenow);
    }
  return (
    <div className='flex p-2 m-1 border-[2px] border-blue-700 md:w-[100%] rounded-md w-full bg-gradient-to-r from-green-600 to-blue-600'>
        <div className='md:w-[90%] w-[85%] rounded-xl border-[2px] border-blue-700 p-2 md:h-18 bg-white '>
        <ReactMic
        record={rec}
        onStop={onstop}
        className='md:h-14 md:w-[90%] h-14 w-[90%]'
        />
        </div>
        <div className='md:pl-[5vw]'>
            <MicButton recording={rec} clickHandler={clk}/>
        </div>
    </div>
  )
}
