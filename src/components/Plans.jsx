import React from 'react';

const Plans = () => {
  return (
    <div className='px-4 w-full py-[10rem]'>
        <div className='max-w-[1240px] mx-auto md:grid grid-cols-3 gap-8'>
            <div className=' w-full shadow-xl p-4 my-12  rounded-lg hover:scale-105 duration-300 flex flex-col items-center justify-center'>
                <img src="https://github.com/bhagirath-wscubetech/tailwind-wsucbe-app/blob/main/src/assets/single.png?raw=true" alt="" className='w-20 mx-auto bg-white  mt-[-3rem]'/>
                <h2 className='text-2xl font-bold py-8 text-center'> Web Development</h2>
                <p className='text-4xl text-center font-bold'>$149</p>
                <div className='font-medium text-center'>
                    <p className="mx-8 py-2 border-b mt-8">Lorem ipsum, dolor  </p>
                    <p className="mx-8 py-2 border-b">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                    <p className="mx-8 py-2 border-b">dolor sit amet consectetu </p>
                </div>
                <button className=' bg-[#00df9a] text-white py-3 w-[200px] font-medium rounded-md my-6 mx-auto md:mx-0'>Start Trial</button>
            </div>
            <div className=' w-full shadow-xl p-4 my-12 rounded-lg hover:scale-105 duration-300 bg-gray-100 flex flex-col items-center justify-center'>
                <img src="https://github.com/bhagirath-wscubetech/tailwind-wsucbe-app/blob/main/src/assets/double.png?raw=true" alt="" className='w-20 mx-auto bg-transparent  mt-[-3rem]'/>
                <h2 className='text-2xl font-bold py-8 text-center'>Digital Marketing</h2>
                <p className='text-4xl text-center font-bold'>$159</p>
                <div className='font-medium text-center'>
                    <p className="mx-8 py-2 border-b mt-8">Lorem ipsum, dolor</p>
                    <p className="mx-8 py-2 border-b">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                    <p className="mx-8 py-2 border-b">dolor sit amet consectetu </p>
                </div>
                <button className=' bg-black text-white py-3 w-[200px] font-medium rounded-md my-6 mx-auto md:mx-0'>Start Trial</button>
            </div>
            <div className=' w-full shadow-xl p-4 my-12 rounded-lg hover:scale-105 duration-300 flex flex-col items-center justify-center'>
                <img src="https://github.com/bhagirath-wscubetech/tailwind-wsucbe-app/blob/main/src/assets/triple.png?raw=true" alt="" className='w-20 mx-auto bg-white  mt-[-3rem]'/>
                <h2 className='text-2xl font-bold py-8 text-center'>App Development</h2>
                <p className='text-4xl text-center font-bold'>$149</p>
                <div className='font-medium text-center'>
                    <p className="mx-8 py-2 border-b mt-8">Lorem ipsum, dolor</p>
                    < p className="mx-8 py-2 border-b">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                    <p className="mx-8 py-2 border-b">dolor sit amet consectetu </p>
                </div>
                <button className=' bg-[#00df9a] text-white py-3 w-[200px] font-medium rounded-md my-6 mx-auto md:mx-0'>Start Trial</button>
            </div>
        </div>
    </div>
  )
};

export default Plans;