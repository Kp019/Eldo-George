import React from 'react';
import mindset from '../Assets/icons/mindset.png'
import career from '../Assets/icons/goal.png'
import academics from '../Assets/icons/education.png'
import habit from '../Assets/icons/habits.png'
import independed from '../Assets/icons/independed.png'
import pot from '../Assets/icons/potential.png'
import '../App.css'

function Benefits() {


  return (
    <div className={`my-20 transition-all duration-500 mx-10 lg:mx-20`}>
        <div className='text-center flex flex-col justify-center items-center content-center gap-2 py-20'>
            <h1 className='text-5xl font-bold'>What will You learn In the workshop?</h1>
            <p className='text-3xl'>6 Steps Proven framework to make your student a topper</p>
            <div className='flex flex-wrap justify-center gap-10 pt-20'>
                <div className='lg:w-96 p-8 bg-gray-100 shadow-lg flex flex-col items-center justify-center rounded-lg transition-all ease-in-out hover:bg-blue-200  duration-300 group/edit'>
                    <img className='w-20 h-auto pb-5' src= {mindset} alt='mind' />
                    <h1 className='text-2xl font-semibold pb-4 text-slate-900  transition-all ease-in-out duration-300'>Mindset</h1> 
                    <p>
                        In This webinar you will come to know about the right mindset that is being needed to make 
                        your child a topper
                    </p>
                </div>
                <div className='lg:w-96 p-8 bg-gray-100 shadow-lg flex flex-col items-center justify-center rounded-lg transition-all ease-in-out hover:bg-blue-200  duration-300 group/edit'>
                    <img className='w-20 h-auto pb-5' src={career} alt='career'/>
                    <h1 className='text-2xl font-semibold pb-4 text-slate-900  transition-all ease-in-out duration-300'>Selection of right career</h1>
                    <p>The webinar explains what to choose after the school/college and make that 
                    as a glorious career</p>
                </div>
                <div className='lg:w-96 p-8 bg-gray-100 shadow-lg flex flex-col items-center justify-center rounded-lg transition-all ease-in-out hover:bg-blue-200  duration-300 group/edit'>
                    <img className='w-20 h-auto pb-5' src={academics} alt='academics'/>
                    <h1 className='text-2xl font-semibold pb-4 text-slate-900  transition-all ease-in-out duration-300'>Link of academics</h1>
                    <p>Showcasing how your child's goals could be related with the present academics 
                    thereby making the academics process easy within the flow</p>
                </div>
                <div className='lg:w-96 p-8 bg-gray-100 shadow-lg flex flex-col items-center justify-center rounded-lg transition-all ease-in-out hover:bg-blue-200  duration-300 group/edit'>
                    <img className='w-20 h-auto pb-5' src={habit} alt='habit' />
                    <h1 className='text-2xl font-semibold pb-4 text-slate-900  transition-all ease-in-out duration-300'>Lifestyle habits</h1>
                    <p>
                        In order to be a topper the student should be knowing a clear map of the do and don'ts 
                        in the journey that he needs to follow where in the webinar, i will be explaining what lifestyle habits 
                        that top one percent students possess. 
                    </p>
                </div>
                <div className='lg:w-96 p-8 bg-gray-100 shadow-lg flex flex-col items-center justify-center rounded-lg transition-all ease-in-out hover:bg-blue-200  duration-300 group/edit'>
                <img className='w-20 h-auto pb-5' src={independed} alt='independed' />
                    <h1 className='text-2xl font-semibold pb-4 text-slate-900  transition-all ease-in-out duration-300'>Independency Mode</h1>
                    <p>
                        This webinar explains how Your Child can be moved from dependency to independency 
                        mode where by making them self reliant in the journey                        
                    </p>
                </div>
                <div className='lg:w-96 p-8 bg-gray-100 shadow-lg flex flex-col items-center justify-center rounded-lg transition-all ease-in-out hover:bg-blue-200  duration-300 group/edit'>
                <img className='w-20 h-auto pb-5' src={pot} alt='pot' />
                    <h1 className='text-2xl font-semibold pb-4 text-slate-900  transition-all ease-in-out duration-300'>Unlocking the potential</h1>
                    <p>
                        Every child is being unique in the world , the webinar helps the child to know 
                        what the higher priority actions in his life are to unlock the potential around.
                    </p>
                </div>
            </div>
        </div>
        <div className='flex flex-col items-center content-center align-middle px-5 py-8 lg:py-10 lg:px-16 lg:rounded-full rounded-xl justify-center gap-10 bg-slate-100 text-center shadow-lg hover:-translate-y-2 hover:shadow-md scale-105 transition-all duration-500'>
            <p className='text-3xl md:text-3xl lg:text-5xl font-bold text-slate-900'>How This <br/> Webinar will Help  you???</p>
            <p className='text-xl lg:mx-20 md:mx-20'>You will discover the core Secrets In making your child to the top one percent, in short making to the top one percent of students</p>
        </div>
    </div>
  )
}

export default Benefits