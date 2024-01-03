import React from 'react'

const MainBody = () => {

  const chat = 'border-[#aff145] border-2 self-end rounded-lg py-2 px-2 max-w-[80%]'



  return (
    <div className='flex flex-col gap-4'>

     
      <div className={`{${chat}`}>
        <pre>
          <span> Hey GPT its me</span>
        </pre>
      </div>

     <div className={`${chat} mr-auto bg-white bg-opacity-20 backdrop-blur-sm`}>
        <pre>
          <span> Its the response from AI</span>
        </pre>
      </div>

    </div>
  )
}

export default MainBody
