import React from 'react';
//import "../style/.css";

import GN0000 from '../assets/GN-0000.jpg';
//import landscape from '../../assets/landscape.jpg';
/*
import { BsEmojiSmile } from 'react-icons/bs';
import { AiFillFileImage } from 'react-icons/ai';
import { FiSend } from 'react-icons/fi';
*/
//export class Chats extends Component {
  //render() {
const Chats = () => {
    return (
        <div className='chats'>
            <div className='userChat'>
                <img src={ GN0000 } alt='GN0000'/>
            
                <div className='userChatInfo'>
                    <span>00</span>
                    <p>Hello</p>
                </div>
            </div>
            {/* Header */}
            
            {/*<div class="flex items-center px-4 w-full h-[5rem] z-20 bg-[#eeedef] rounded-tr-[0rem] ">
                <div class="flex w-[3.1rem] h-[3.1rem]] bg-[#dda117] rounded-full shrink-0 ">
                    <img  
                        alt="" 
                        class="object-cover rounded-full p-1"
                    />
                </div>
                <div class="pl-2">
                    <p class="font-bold text-black/90">Meimei</p>
                    <p class="text-[14px] w-[15rem] whitespace-nowrap truncate text-gray-400">
                        last seen recently
                    </p>
                </div>
            </div>
            {/* Message */}
            {/*<div class="absolute top-0 w-full h-full">
                <div class="absolute flex h-full w-full lg:hidden rounded-r-[2rem]">
                 </div>
            </div>
            {/* can change picture while screen size changed */}
            {/*<div class="hidden lg:flex absolute w-full h-full">
                <div class="absolute flex h-full w-full">
                </div>
            </div>

            {/* Input for message */}
            {/*<div class="relative z-20 bottom-0 bg-[#eeedef] w-full px-4 py-2 flex items-center rounded-br-[2rem]">
                <div class="">
                    <BsEmojiSmile  class="w-8 h-8" />
                </div>
                <form class="relative flex w-full items-center">
                    <input 
                        type="text" 
                        placeholder="Type a message..." 
                        class="w-full mx-4 p-2 rounded-full pl-4 text-black"
                    />
                    
                    <div class="">
                        <AiFillFileImage class="w-7 h-7" />
                    </div>
                    <div class="">
                        <button type="submit"><FiSend class="w-7 h-7"/></button>
                    </div>
                </form>
            </div>*/}

        </div>
    );
  };

export default Chats;