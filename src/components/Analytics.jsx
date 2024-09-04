import React from 'react';

const Analytics = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
      <div className='max-w-[1240px] mx-auto md:grid grid-cols-2  '>
        <div className='  col-span-1 md:w-[80%] '>
          <img src="https://raw.githubusercontent.com/bhagirath-wscubetech/tailwind-wsucbe-app/main/src/assets/laptop.jpg" alt="" />
        </div>
        <div className=' col-span-1 md:flex flex-col justify-center'>
          <h2 className='font-bold text-2xl uppercase text-[#00df9a] my-2'>Learn from Experts </h2>
          <p className='my-2 text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus consequuntur, at eos reiciendis necessitatibus tenetur? Exercitationem fugit ducimus accusantium accusamus? Sequi hic, neque similique dolorum quisquam dolor maxime illum voluptate.</p>
          <button className='inline bg-black text-white py-3 w-[200px] mx-auto font-medium rounded-md my-6  md:mx-0'>Get started</button>
        </div>
      </div>
    </div>
  )
}

export default Analytics;