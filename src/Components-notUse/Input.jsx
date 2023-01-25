import React from 'react'
import { MdAttachFile } from 'react-icons/md';
import { AiFillFileImage } from 'react-icons/ai';

const Input = () => {
  return (
    <div className='input'>
      <input type='type' placeholder='Type somthing' />
      <div className='send'>
        <img src={<MdAttachFile />} alt='' />
        <input type='file' style={{display:'none'}} id='file' />
        <label htmlFor='file'>
          <img src={<AiFillFileImage />} alt='' />
        </label>
        <button>Send</button>
      </div>
    </div>
  )
}

export default Input