import React from 'react';
import {FaWhatsappSquare, FaYoutube} from 'react-icons/fa';
import {AiFillFacebook, AiFillInstagram} from 'react-icons/ai';
import Navbarss from '../components/navbar';
function Thankyou() {
  return (
    <div>
    <Navbarss/>
    <div className='flex flex-col overflow-hidden justify-center items-center text-center pt-[90px] px-5'>
      <div className=' relative'>
        <div className='flex flex-col'>
            <h1 className=' text-3xl md:text-5xl lg:text-5xl font-bold'>CONGRATULATIONS!!!</h1>
            <p className='md:text-3xl lg:text-3xl pt-3 capitalize'>You Have successfully registered for the webinar</p>
        </div>
        <div className='pt-5 flex flex-col justify-center items-center'>
            <iframe className='flex pt-5 w-[300px] h-[300px] md:w-[600px] lg:-w-[600px]' src="https://www.youtube.com/embed/IrsmR2EV__s?si=5AOpxjG9wEe7F2HZ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            <p className='pt-3'>Make sure You watch This Video</p>
            <div className='lg:text-5xl md:text-4xl text-2xl  italic p-10 flex flex-col'>"This is the most beautiful feeling for me, when i get to guide and hello hundreds of students"<div className='text-xl mt-4 lg:pl-[600px] md:pl-[400px] font-serif'>- Eldo George Varghese</div></div>
        </div>
        <div className='flex flex-col lg:mx-20 justify-center items-center pt-10 text-slate-900 lg:gap-5 gap-3'>
          <a href='https://chat.whatsapp.com/GSi96O1zLhpKNS33QjXEeH' target='blank'>
          <div className='rounded-lg lg:w-96 lg:h-32 md:w-96 md:h-32 w-56 h-24 flex flex-row justify-center items-center lg:text-left md:text-left text-left px-5 bg-blue-200 lg:gap-3 gap-2'>
            <div className='text-[40px] lg:text-[50px] md:text-[50px]'><FaWhatsappSquare /></div>
            <p className='text-xl'>Click to join WhatsApp group</p>
          </div>
          </a>
          <a href='https://www.facebook.com/groups/revamplab/' target='blank'>
          <div className='rounded-lg lg:w-96 lg:h-32 md:w-96 md:h-32 w-56 h-24 flex flex-row justify-center items-center lg:text-left md:text-left text-left px-5 bg-blue-200 lg:gap-3 gap-2'>
            <div className='text-[40px] lg:text-[50px] md:text-[50px]'><AiFillFacebook /></div>
            <p className='text-xl'>Click to join Facebook VIP Group</p>
          </div>
          </a>
          <a href='https://www.instagram.com/eldo_geoege_varghese?igsh=eHNjNHk4azlrd2xn' target='blank'>
          <div className='rounded-lg lg:w-96 lg:h-32 md:w-96 md:h-32 w-56 h-24 flex flex-row justify-center items-center lg:text-left md:text-left text-left px-5 bg-blue-200 lg:gap-3 gap-2'>
            <div className='text-[40px] lg:text-[50px] md:text-[50px]'><AiFillInstagram /></div>
            <p className='text-xl'>Click to visit our Instagram page</p>
          </div>
          </a>
          <a href='https://www.youtube.com/@eldogeorgevarghese5016' target='blank'>
          <div className='rounded-lg lg:w-96 lg:h-32 md:w-96 md:h-32 w-56 h-24 flex flex-row justify-center items-center lg:text-left md:text-left text-left px-5 bg-blue-200 lg:gap-3 gap-2'>
            <div className='text-[40px] lg:text-[50px] md:text-[50px]'><FaYoutube /></div>
            <p className='text-xl'>Click to Visit our youtube channel</p>
          </div>
          </a>
        </div>
      </div>
      <div className='flex flex-col justify-center items-center content-center bg-slate-900 p-5 mt-10 w-screen bottom-0'>
          <div className='text-white text-sm'>© Copyright Eldo George. All Rights Reserved</div>
      </div>
    </div>
  </div>
  )
}

export default Thankyou