import React from 'react';
import imageabt from '../Assets/9.jpg';
// import {FaCircle } from 'react-icons/fa';
import tag from '../Assets/icons/tag.png';

function About() {
  return (
    <div className='flex flex-col flex-grow md:flex-row lg:flex-row py-20 md:px-20 lg:px-40 px-5 gap-10 bg-slate-900 text-white justify-center items-center content-center align-middle'>
        <div>
            <p className='text-3xl text-blue-300 capitalize'>Know about your coach</p>    
            <h1 className='text-5xl font-bold pt-3'>Eldo George Varghese</h1>
            <ul className='pt-5 text-base font-normal text-gray-300'>
                <li className='flex items-center gap-2'><img className=' w-[20px]' src={tag} alt='tag'/>Indias First Future Readiness Coach</li>
                <li className='flex items-center gap-2'><img className=' w-[20px]' src={tag} alt='tag'/>Mentored 2000 + Students </li>
                <li className='flex items-center gap-2'><img className=' w-[20px]' src={tag} alt='tag'/>First Youth Chairman From India To Head Asia & Pacific Alliance Of YMCA</li>
                <li className='flex items-center gap-2'><img className=' w-[20px]' src={tag} alt='tag'/>Authored 6 Books Globally</li>
                <li className='flex items-center gap-2'><img className=' w-[20px]' src={tag} alt='tag'/>India's Leading & Multiple Award Winning Coach Who Have Worked With Over 2000 + Students </li>
                <li className='flex items-center gap-2'><img className=' w-[20px]' src={tag} alt='tag'/>Founder & CEO of Top One Percent Lab</li>
            </ul>
        </div>
        <div className='overflow-hidden rounded-lg shadow-blue-900 shadow-2xl'>
          <img className='w-[400px] md:w-[500px] lg:w-[500px] md:translate-y-0' src={imageabt} alt='photoabt'/>
        </div>
    </div>
  )
}

export default About