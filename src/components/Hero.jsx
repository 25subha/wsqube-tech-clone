import React from 'react';
import { ReactTyped } from "react-typed";
const Hero = () => {
  return (
    <div className='bg-[#2699fb] py-[100px] w-full '>
       <div className='max-w-[1240px] mx-auto md:my-[100px] text-white  flex flex-col items-center justify-center'>
        <p className='text-2xl md:text-3xl font-bold text-black pt-2'>Learn with us</p>
        <h1 className='md:text-7xl sm:text-6xl text-5xl font-[600] md:py-6'>
            Grow with us.
        </h1>
        <p className='md:text-5xl  text-2xl font-bold py-4'>Learn
        <ReactTyped className='pl-2  md:pl-4 text-md:4xl font-bold'
         strings={["Digital Markerting","Web Development", "Ethical Hacking"]} typeSpeed={100} 
         backSpeed={50}
         loop={true}
         />
        </p>
        <button className=' bg-black text-white py-3 w-[200px] font-medium rounded-md my-6 mx-auto md:mx-0'>Get started</button>

    </div>
    </div>
  )
}

export default Hero;