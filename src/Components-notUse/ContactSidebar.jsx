//import { type } from "os";
import React from "react";
import ChatroomNavbar from "./ChatroomNavbar";
//import Chat from "./Chat";
import Search from './Search';
/*
type Props = {
    img: string, 
    name: string, 
    message: string
}
*/
//const Contact = ({ img, name, message }: Props) => {
//const Contact = ({ img, name, message }) => {

// Output contact details
const ContactSidebar = () => {
    return (
    <div className="ContactSidebar">
        <ChatroomNavbar />
        <Search />
        {/*<div class="flex justify-between pt-2 pb-2 bg-white rounded-bl-[2rem] 
                        border-b px-4">
            <div class="flex items-center">
                <div class="flex w-16 h-16 ">
                    <img 
                    src={img} 
                    alt="" 
                    class="object-cover w-full rounded-full"/>
                </div>

                <div class="pl-3">
                    <p class="text-gray-800 font-semibold text-[18px]">{name}</p>
                    <p class="text-gray-600 w-[20rem] md:w-[10rem] lg:w-[20rem] truncate">{message}</p>
                </div>
            </div>
            <div class="flex h-full text-gray-500">
                <p class="">8:51</p>
            </div>
        </div>*/}
    </div>
    );
}

export default ContactSidebar;
