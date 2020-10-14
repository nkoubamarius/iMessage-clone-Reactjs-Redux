import React, { useState } from 'react'
import './Chat.css';
import MicNoneOutlinedIcon from '@material-ui/icons/MicNoneOutlined';
import { IconButton } from '@material-ui/core';

function Chat() {
    const [input, setInput]=useState("");
    const sendMessage=(e)=>{
        e.preventDefault();

        setInput("");
    }

    return (
        <div className="chat">
            <div className="chat__header">
                <h4>To:<span className="chat__name">Channel name</span></h4>
                <strong>Details</strong>
            </div>
            <div className="chat__messages">
            
            </div>
            <div className="chat__input">
                <form>
                    <input placeholder="iMessage" value={input} onChange={(e)=>setInput(e.target.value)} type="text"/>
                    <button onClick={sendMessage}>Send Message</button>
                </form>
                <IconButton>
                    <MicNoneOutlinedIcon className="chat__mic"/>
                </IconButton>
            </div>
        </div>
    )
}

export default Chat
