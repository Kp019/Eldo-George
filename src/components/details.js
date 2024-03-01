import React from 'react';
import {FiClock} from 'react-icons/fi';
import video from '../Assets/landing_page_vid.mp4';
import strategy from '../Assets/icons/strategy.png';


function Details() {


  return (
    <div className=' relative flex flex-col items-center justify-center mt-20'>
        {/* <div className=' absolute w-80 h-80 bg-blue-200 blur-sm shadow-2xl rounded-xl top-0 left-80'></div>
        <div className=' absolute w-80 h-80 bg-blue-200 blur-sm shadow-2xl rounded-xl top-[170px] right-80'></div> */}
        <div className=' relative px-5 md:px-40 lg:px-40 p-5 transition-all ease-in-out hover:-translate-y-2 hover:scale-105  duration-500'>
          <video className={`rounded-lg shadow-xl w-[800px] transition-all duration-300`} h-auto controls>
            <source className='w-[400px] h-auto shadow-xl' src={video} type="video/mp4"/>
          </video>
        </div>
        <div className={`relative flex flex-row flex-wrap py-12 lg:py-20 gap-10 sm:px-10 justify-center items-center transition-all duration-300`}>
            <div className='px-5 py-4 w-72 bg-slate-900 border-b-4 border-blue-300 text-gray-200 shadow-lg flex flex-row items-center align-middle justify-center content-center rounded-lg gap-4 transition-all ease-in-out hover:-translate-y-2 hover:scale-105  duration-800'>
                <div className='text-5xl text-white'><FiClock/></div>
                <p className='text-xl'>90 mints total</p>
            </div>
            <div className='px-5 py-4 w-72 bg-slate-900 border-b-4 border-blue-300 text-gray-200 shadow-lg flex flex-row items-center align-middle rounded-lg gap-4 transition-all ease-in-out hover:-translate-y-2 hover:scale-105  duration-800'>
                <div className='w-16'><img className='w-16' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAB9ElEQVR4nO2Yu07DMBSGPTFVLMAKLwISMNIiLi+D2AAJqbwNggmQALUSd8RTAGMhMNCq9EMRJ5BWSRsnjpNK/pbITnzy/z62Y0cph8PhcCilgBpwB3zKtTquJqJYH6veBO4jbcCtNR3E92biIIAXE8OzpgMDvVmKGOTbmysaMbxMOgyO76rfBviQa2ITpjJSzdqbJsCEjqy9aQqK1AGsAZeyZIbxyxfAqio7QJ1k7NsSVNP9EEkmdKjloSPzh0iGkw7npfwg8jshdfDyXn7bMQG+RrTTJg8df2R4sWkjcfTiGtwAV6Fyb1yM8Kv9uq9BEkHKIiQz8q8rwkiv5Ea+jRkBmuRD02RGvgs00rCaERtgwEhsRoB5SyYWTBjpkpxn2ShOpBQ8ARwALxrv7CY10kGfes675TCdOCPB2bgyYo8zjNeURnQyEXAjbSel/B4Ee5KKRSmvDpvwcaQ0oksvOCUCy1L3GATbk4rDiHNAuyRG2oNHXeBY7u0EFTN+eqRyK60AU0ZUsnbb8ngLmArf2Awtu0fAUjBnymIEqMhwCjLh612LenADeEu7fTBthOG7h1akiVDjaWDXn0ARJ75GwUY84MGfE33DKQs2jFjBGSlhRtqpfgjkFCc1wNmAgNMi46QGmPNfKivbCTBbZByHw+FQY8cPFu0IzBlfirgAAAAASUVORK5CYII=" alt='img' /></div>
                <p className='text-xl'>Actionable Workshop</p>
            </div>
            <div className='px-5 py-4 w-72 bg-slate-900 border-b-4 border-blue-300 text-gray-200 shadow-lg flex flex-row items-center align-middle rounded-lg gap-4 transition-all ease-in-out hover:-translate-y-2 hover:scale-105  duration-800'>
                <div className='text-5xl'><img className='w-16' src={strategy} alt='strategy'/> </div>
                <p className='text-xl'>100% Practical Strategies</p>
            </div>
            <div className='px-5 py-4 w-72 bg-slate-900 border-b-4 border-blue-300 text-gray-200 shadow-lg flex flex-row items-center align-middle rounded-lg gap-4 transition-all ease-in-out hover:-translate-y-2 hover:scale-105  duration-800'>
                <div className='w-16'> 
                    <img className='w-16' src="data:image/png;base64,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" alt='img' />
                </div>
                <p className='text-xl'>Dedicated Q & A Sesssion</p>
            </div>
        </div>
    </div>
  )
}

export default Details