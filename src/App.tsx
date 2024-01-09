import { useState } from 'react';
import { IoHomeSharp } from "react-icons/io5";
import { LuQrCode } from "react-icons/lu";
import { FaSearch } from "react-icons/fa";
import { IoIosNotifications } from "react-icons/io";
import { FaUserAlt } from "react-icons/fa";

import './App.scss'

function App() {
  

  return (
    <main className='main flex items-center gap-5 '>
      <nav className='nav px-2 py-4 flex flex-col gap-4 '>
        <p><IoHomeSharp className="w-7 h-8" color=""/></p>
        <LuQrCode className="w-7 h-8"/>
        <FaSearch className="w-7 h-8"/>
        <IoIosNotifications className="w-7 h-8"/>
        <FaUserAlt className="w-7 h-8"/>
      </nav>
      <div className="h-[700px] w-[1110px] border border-teal-50 rounded-md"></div>
    </main>
  )
}

export default App
