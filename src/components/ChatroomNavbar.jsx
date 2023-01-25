import React, { useContext } from 'react'
import { signOut } from "firebase/auth"
import { auth } from '../firebase'
import { AuthContext } from '../context/AuthContext'

const ChatroomNavbar = () => {
  const {currentUser} = useContext(AuthContext)

  return (
    <div className='ChatroomNavbar'>
      <span className="logo">counselling-system-chatroom</span>
      <div className="user">
        <img src={currentUser.photoURL} alt="" />
        <span>{currentUser.displayName}</span>
        <button onClick={()=>signOut(auth)}>logout</button>
      </div>
    </div>
  )
}

export default ChatroomNavbar