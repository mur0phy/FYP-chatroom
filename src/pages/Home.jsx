import React from 'react'
import ChatroomSidebar from '../components/ChatroomSidebar'
import Chat from '../components/Chat'

const Home = () => {
  return (
    <div className='home'>
      <div className="ChatroomContainer">
        <ChatroomSidebar/>
        <Chat/>
      </div>
    </div>
  )
}

export default Home