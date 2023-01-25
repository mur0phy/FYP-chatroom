import React from "react";
import ChatRoomNavbar from "./ChatroomNavbar"
import Search from "./Search"
import Chats from "./Chats"

const ChatroomSidebar = () => {
  return (
    <div className="ChatroomSidebar">
      <ChatRoomNavbar />
      <Search/>
      <Chats/>
    </div>
  );
};

export default ChatroomSidebar;
