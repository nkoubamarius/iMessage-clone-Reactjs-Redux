import React, { useEffect, useState } from 'react'
import './Chat.css';
import MicNoneOutlinedIcon from '@material-ui/icons/MicNoneOutlined';
import { IconButton } from '@material-ui/core';
import { selectChatId, selectChatName } from './features/chatSlice';
import { useSelector } from 'react-redux';
import Message from './Message';
import { selectUser } from './features/userSlice';
import db from './firebase';
import firebase from 'firebase';
import FlipMove from 'react-flip-move';

function Chat() {
    const [input, setInput]=useState("");
    const chatId=useSelector(selectChatId);
    const chatName=useSelector(selectChatName);
    const user =useSelector(selectUser);
    const [messages, setMessages]=useState([]);

    useEffect(() => {
       if(chatId){
        db.collection("chats")
        .doc(chatId)
        .collection("messages")
        .orderBy("timestamp", "asc")
        .onSnapshot((snaphot)=>
            setMessages(snaphot.docs.map((doc)=>({
                id: doc.id,
                data:doc.data(),
            })))
        )
       }
    }, [chatId]);

    const sendMessage=(e)=>{
        e.preventDefault();
        db.collection('chats')
        .doc(chatId)
        .collection("messages")
        .add({
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            message: input, 
            uid:user.uid,
            photo: user.photo,
            email: user.email,
            displayName:user.displayName
        });

        setInput("");
    }

    return (
        <div className="chat">
            <div className="chat__header">
                <h4>To:&nbsp;<span className="chat__name">{chatName}</span></h4>
                <strong>Details</strong>
            </div>
            <div className="chat__messages">
                <FlipMove>
                {messages.map(({id,data})=>(
                    <Message key={id} contents={data} />
                ))}
                </FlipMove>
            </div>
            <div className="chat__input">
                <form>
                    <input disabled={!chatId}  placeholder="iMessage" value={input} onChange={(e)=>setInput(e.target.value)} type="text"/>
                    <button disabled={!chatId} type="submit" onClick={sendMessage}>Send Message</button>
                </form>
                <IconButton>
                    <MicNoneOutlinedIcon className="chat__mic"/>
                </IconButton>
            </div>
        </div>
    )
}

export default Chat
