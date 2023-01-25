import React from 'react'
import GN0000 from '../assets/GN-0000.jpg';

const Message = () => {
  return (
    <div className='message owner'>
        <div className='messageInfo'>
            <img src={GN0000} alt='' />
            <span>just now</span>
        </div>
        <div className='messageContent '>
            <p>hello</p>
            <img src={GN0000} alt='' />
        </div>
    </div>
  )
}

export default Message;