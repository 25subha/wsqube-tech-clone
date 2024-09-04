import React from 'react';

const NewsLetter = () => {
  return (
    <div className='bg-[#2699fb] w-full p-4'>
        <div className='max-w-[1240px] mx-auto md:flex py-[50px]  justify-between  '>
            <div className='text-white my-4'>
                <h1 className='md:text-3xl text-2xl font-bold '>Want to learn latest I.T skills?</h1>
                <p className=' '>Sing up to our newsletter and stay up to date.</p>
            </div>
            <div className='my-4'>
                <input type="email" 
                placeholder='enter email' className='p-3 mr-2 text-slate-300 rounded  border-b md:w-auto w-full mb-2'/>
                <button className=' bg-black text-white p-3 font-medium rounded-md '>Notify Me</button>
                <p className='text-white'>we care about the protection of your data. Read our <br /> <span className='text-black'> Privacy Policy.</span></p>
            </div>
        </div>

    </div>
  )
};

export default NewsLetter;