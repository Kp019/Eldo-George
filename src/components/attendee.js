import React from 'react'
import {IoMdCheckmarkCircleOutline} from 'react-icons/io'

function Attendee() {
  return (
    <div className='lg:mx-20 mx-5'>
        <div className='text-center flex flex-col justify-center items-center content-center gap-2 py-20'>
            <h1 className='text-4xl font-bold'>Who Should Attend The Workshop?</h1>
            <div className='flex flex-col flex-wrap text-left gap-5 pt-12'>
                <div className='flex flex-row flex-wrap justify-center items-center gap-10'>
                    <p className='flex justify-center items-center gap-4 max-w-[600px] bg-slate-900 text-white rounded-lg px-5 py-3'>
                    <div className='text-2xl text-gray-200'><IoMdCheckmarkCircleOutline/></div>
                    Do  you want your child to have an idea of the career options that they like to pursue for the future?
                    </p>
                    <p className='flex justify-center items-center gap-4 max-w-[600px] bg-slate-900 text-white rounded-lg px-5 py-3'>
                    <div className='text-2xl text-gray-200'><IoMdCheckmarkCircleOutline/></div>
                        Do you want your child to reduce the screen times and contribute more in terms of career, life and academics?
                    </p>
                </div>
                <div className='flex flex-row flex-wrap justify-center items-center gap-10'>
                    <p className='flex justify-center items-center gap-4 max-w-[600px] bg-slate-900 text-white rounded-lg px-5 py-3'>
                    <div className='text-2xl text-gray-200'><IoMdCheckmarkCircleOutline/></div>
                    Do you want to know what are the exact reasons that stops your child to be in the top one percent lab?
                    </p>
                    <p className='flex justify-center items-center gap-4 max-w-[600px] bg-slate-900 text-white rounded-lg px-5 py-3'>
                    <div className='text-2xl text-gray-200'><IoMdCheckmarkCircleOutline/></div>
                        Do you want your child  to improve the problem solving skills  so that they fell very confident enough for there future? 
                    </p>
                </div>
                <div className='flex flex-row flex-wrap justify-center items-center gap-10'>                    
                    <p className='flex justify-center items-center gap-4 max-w-[600px] bg-slate-900 text-white rounded-lg px-5 py-3'>
                    <div className='text-2xl text-gray-200'><IoMdCheckmarkCircleOutline/></div>
                        Do you want your child to to enjoy  studying by visualising for the future ?
                    </p>
                    <p className='flex justify-center items-center gap-4 max-w-[600px] bg-slate-900 text-white rounded-lg px-5 py-3'>
                    <div className='text-2xl text-gray-200'><IoMdCheckmarkCircleOutline/></div>
                        Do you want to your child to reduce the strees levels that they hinder for the exams?
                    </p>
                </div>
            </div>
            <h1 className='text-5xl text-center lg:px-40 font-bold pt-12 lg:mx-28'>"IF YOU ANSWERED “YES” TO ANY OF THESE QUESTIONS , THEN THIS WEBINAR IS FOR YOU"</h1>
            {/* <p className='text-xl pt-2'>AND THE MOST BEAUTIFUL PART OF THIS JOURNEY IS <br/> THEY WILL BE  ABLE TO SHAPE THE FUTURE OF THIS COUNTRY </p> */}
        </div>
    </div>
  )
}

export default Attendee