import React from "react";
import { BiSearchAlt } from "react-icons/bi";

import GN0000 from '../assets/GN-0000.jpg';

//export const Search = () => {
const Search = () => {
    return (
    <div className="chatroomSearch" >
        <div className="searchFrom">
            <BiSearchAlt />
            <input type="text" placeholder="Find a student" />
    </div>
    <div className="userChat">
        <img src={ GN0000 } alt="GN-0000" />
        <div className="userChatInfo">
            <span>00</span>
        </div>
    </div>
    </div>
    );
};

export default Search;