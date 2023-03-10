import React, { useEffect} from 'react'
import { user } from "../Joins/Join";
import socketIo from "socket.io-client";
import "./Chat.css";
import sendLogo from "../../images/send.png";
//import ReactScrollToBottom from "react-scroll-to-bottom";
const ENDPOINT = "http://localhost:5000/"
 

const Chat = () => {
    const socket = socketIo(ENDPOINT, { transports: ['websocket'] });
    
    useEffect(()=>{
         
        socket.on('connect',()=>{
            console.log("connected")
        })
        socket.emit('joined', {user})

        socket.on('welcome', (data)=>{
            console.log(data.user, data.message)
        })
        
        socket.on('userJoined', (data)=>{
            console.log(data.user, data.message)
        })


        return ()=>{

        }
    }, [socket])

   

    return (
        <div className="chatPage">
            <h1>{user}</h1>
            <div className="chatContainer">
                <div className="header">
                    <div className="inputBox">
                    <input  type="text" id="chatInput" />
                    <button className="sendBtn" ><img src={sendLogo} alt="Send" /></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Chat



