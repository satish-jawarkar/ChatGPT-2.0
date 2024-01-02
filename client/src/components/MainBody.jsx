import React from 'react'

const MainBody = () => {



  return (
    <div className='flex flex-col gap-4'>
      
      <div className='border-[#aff145] border-2 self-end rounded-lg py-2 px-1 max-w-[80%]'>
        <pre>
          <span> Hey GPT its me</span>
        </pre>
      </div>

     <div className='border-[#aff145] border-2 self-end rounded-lg py-2 px-1 max-w-[80%] mr-auto'>
        <pre>
          <span> Its the response from AI</span>
        </pre>
      </div>

    </div>
  )
}

export default MainBody
