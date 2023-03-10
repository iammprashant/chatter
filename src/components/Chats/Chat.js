import React, { useEffect } from 'react'
import { user } from "../Joins/Join";
import socketIo from "socket.io-client";
import "./Chat.css";
import sendLogo from "../../images/send.png";
const ENDPOINT = "http://localhost:5000/"

  

const Chat = () => {
    const socket = socketIo(ENDPOINT, { transports: ['websocket'] });
    useEffect(()=>{
        socket.on('connect',()=>{
           console.log('connected')
        })
    })

   

    return (
        <div className="chatPage">
            <h1>{user}</h1>
            <div className="chatContainer">
                <div className="header">
                    <div className="inputBox">
                    <input  type="text" id="chatInput" />
                    <button ><img src={sendLogo} alt="Send" /></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Chat



