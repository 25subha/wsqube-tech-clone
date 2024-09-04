import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Header = () => {
  let [toggle, setToggle] = useState(false);
  return (
    <div className='bg-[#2699fb] p-4'>
      <div className='max-w-[1240px] mx-auto flex justify-between items-center text-white py-[12px] font-[Arial]'>
        <div className='md:text-5xl text-3xl font-bold text-black '>
          WsCube Tech
        </div>
        <div onClick={() => setToggle(!toggle)}>
          {toggle ? <AiOutlineClose className='text-white text-3xl md:hidden'/> : <AiOutlineMenu className='text-white text-3xl md:hidden '/> }
        </div>
        <ul className='hidden md:flex gap-10 font-semibold '>
          <li>
            Home
          </li>
          <li>
            Company
          </li>
          <li>
            Resourcs
          </li>
          <li>
            about
          </li>
          <li>
            contact
          </li>
        </ul>
        {/* responsive manu */}
        <ul className={` duration-500 md:hidden fixed  top-[92px] h-screen w-full bg-black ${toggle ? "left-0": "-left-full"}`}>
          <li className='p-5'>
            Home
          </li>
          <li className='p-5'>
            Company
          </li>
          <li className='p-5'>
            Resourcs
          </li>
          <li className='p-5'>
            about
          </li>
          <li className='p-5'>
            contact
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Header;