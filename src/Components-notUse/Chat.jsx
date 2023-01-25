import React from "react";

import { AiOutlineVideoCamera, AiOutlineUserAdd, AiOutlineMore } from 'react-icons/ai';

import Messages from '../Components/Messages';
import Input from '../Components/Input';
//import profile from "../../assets/profile.jpg";
//import ContactSidebar from "./ContactSidebar";
/*
import profile2 from "../../assets/face2.jpg";
import profile3 from "../../assets/face3.jpg";
import profile4 from "../../assets/face4.jpg";
*/
//export const Contacts = () => {

// export contact details to list
const Chat = () => {
    /*const contacts = [
        {name:"Sinnie Ng", message:"Here we go~!"},
        {name:"Meimei", message:"Here we go2~!"},
        {name:"ah mui", message:"Here we go3~!"}
    ];*/
    return (
    <div className="chat">
        <div className="chatInfo">
            <span>00</span>
            <div className="chatIcons">
                <AiOutlineVideoCamera />
                <AiOutlineUserAdd />
                <AiOutlineMore />
            </div>
        </div>
        <Messages />
        <Input />
    </div>
    );
};

export default Chat;