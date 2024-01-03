import React from 'react'
import send from './images/send2.jpg'

const UserInput = () => {
  return (
    <div>
      <textarea className='bg-white opacity-20 w-full max-h-30 min-h-10 rounded-lg relative overflow-auto px-2 border-0 outline-none'>

        
      </textarea>
      <img src={send} alt="send-butoon" width={35} className='absolute right-2'/>

      <textarea className='bg-white opacity-20 w-full max-h-30 min-h-10 rounded-lg relative overflow-auto px-2 border-0 outline-none '/>
      <img src={send} alt="send-butoon" width={35} className='absolute right-2'/>





    </div>
  )
}

export default UserInput
