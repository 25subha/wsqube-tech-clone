import React from 'react';
import { FaFacebook, FaGithub, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";


const Footer = () => {
  return (
    <div className='bg-[#2699fb] px-4'>
        <div className='max-w-[1240px]  mx-auto md:flex justify-between text-white py-16'>
          <div className='md:w-[25%]'>
            <h1 className='md:text-3xl text-xl font-bold text-black my-6'>WsCube Tech</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus accusantium consequatur ab suscipit ea perferendis tempore nam.</p>
            <div className='flex gap-3 my-6  md:w-[75%]'>
            <FaFacebook  size={24}/>
            <FaInstagram  size={24}/>
            <FaYoutube size={24}/>
            <FaGithub  size={24}/>
            <FaTwitter size={24} />
            </div>
          </div>
         <div className='py-6  md:flex justify-between w-[65%]  '>
         <div className='ml-[-16px]'>
            <h6 className='pl-3 font-medium text-black'>Solutions</h6>
            <ul className='p-0 m-0'>
              <span className='py-2 text-sm'>Analytics</span>
              <li className='py-2 text-sm'>Marketing</li>
              <li className='py-2 text-sm'>Commerce</li>
              <li className='py-2 text-sm'>Insights</li>
            </ul>
          </div>
          <div className='ml-[-16px]'>
          <h6 className='pl-3 font-medium text-black'>Support</h6>
            <ul>
              <li className='py-2 text-sm'>Pricing</li>
              <li className='py-2 text-sm'>Docomentation</li>
              <li className='py-2 text-sm'>Guides</li>
              <li className='py-2 text-sm'>Api status</li>
            </ul>
          </div>
          <div className='ml-[-16px]'>
          <h6 className='pl-3 font-medium text-black'>Company</h6>
            <ul>
              <li className='py-2 text-sm'>About</li>
              <li className='py-2 text-sm'>Blog</li>
              <li className='py-2 text-sm'>Jobs</li>
              <li className='py-2 text-sm'>Press</li>
              <li className='py-2 text-sm'>Careers</li>
            </ul>
          </div>
          <div className='ml-[-16px]'>
          <h6 className='pl-3 font-medium text-black'>Legal</h6>
            <ul>
              <li className='py-2 text-sm'>Claim</li>
              <li className='py-2 text-sm'>Policy</li>
              <li className='py-2 text-sm'>Terms</li>
              <li></li>
            </ul>
          </div>
         </div>

        </div>
    </div>
  )
}

export default Footer;