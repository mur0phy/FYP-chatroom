import React from "react";
import '../Style/Chatroom.scss';
//import profile from "../../assets/profile.jpg";

import { AiFillMessage } from "react-icons/ai";
//import { GrMenu } from "react-icons/gr";

//import { motion } from 'framer-motion';

//export const Navbar = () => {
const ChatroomNavbar = () => {
    return (    
    <div className="ChatroomNavbar" >
        <span>User</span>
        <AiFillMessage />
    </div>);

    
};
export default ChatroomNavbar