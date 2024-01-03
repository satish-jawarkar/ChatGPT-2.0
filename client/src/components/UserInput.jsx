import React from 'react'
import send from './images/send2.jpg'

const UserInput = () => {
  return (
    <div className='bg-white opacity-20 w-full min-h-15 h-15 rounded-lg relative overflow-auto '>
      <textarea className='border-0 outline-none w-[95%] px-2'/>
      <img src={send} alt="send-butoon" width={30} className='absolute right-2 top-3 hover:cursor-pointer ease-in duration-100 hover:scale-299'/>




    </div>
  )
}


export default UserInput
