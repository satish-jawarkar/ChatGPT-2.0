// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { useState } from 'react'
import './App.css'
import MainBody from './components/MainBody'
import UserInput from './components/UserInput'


function App() {
   const [chat, setChat] = useState([])  

   const submit = async (message) => {
    await Promise.resolve(setChat((prev)=> [...prev, message]))
   }

  return (

   
   
   <>
      {/* // Starting with the new project called chatGPT-2.0 using React JS, Vite & Tailwind CSS. We are here learning concepts of 
    // React JS & having some hands on Vite & Tailwind CSS.
    

    //1 main div and header body and input 3 div */}
    
      <div className='bg-[#2c2c2c] h-screen py-4 px-16 relative flex flex-col justify-between text-cyan-300'>


        <div className="bg-1"></div>
        <div className="bg-2"></div>
      

        <div className="header uppercase font-bold text-3xl text-center mb-4 ">
          ChatGPT 2.0
        </div>

        <div className="body h-[85%] overflow-auto py-7 px-3 w-full max-w-4xl min-w-80 self-center">
           <MainBody chat={chat}/>
        </div>

        <div className="input w-full max-w-4xl min-w-80 self-center">
          <UserInput sendMessage={sendMessage}/>
        </div>
     
      </div></>
  )
}

export default App
