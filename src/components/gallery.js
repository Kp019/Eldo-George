import React from 'react';
import one from '../Assets/gallery/1.png';
import two from '../Assets/gallery/2.png';
import three from '../Assets/gallery/3.png';
import four from '../Assets/gallery/4.png';
import five from '../Assets/gallery/5.png';
import six from '../Assets/gallery/6.png';
import sev from '../Assets/gallery/7.png';
import egt from '../Assets/gallery/8.png';
import nine from '../Assets/gallery/9.png';
import ten from '../Assets/gallery/10.png';
import ele from '../Assets/gallery/11.png';
import twl from '../Assets/gallery/12.png';
import thirt from '../Assets/gallery/13.png';
import fort from '../Assets/gallery/14.png';
import fift from '../Assets/gallery/15.png';
import sixt from '../Assets/gallery/16.png';


function Gallery() {
  return (
    <div className='flex flex-col justify-center items-center py-20 mx-5 lg:mx-20 text-center'>
        <p className='text-4xl font-bold flex justify-center mb-12'>Previous Interactions</p>
        <div className='flex flex-wrap justify-center items-center gap-8'>
            <img className='w-80 h-auto rounded-xl hover:-translate-y-2 hover:shadow-md scale-105 transition-all duration-300' src={one} alt='one'/>
            <img className='w-80 h-auto rounded-xl hover:-translate-y-2 hover:shadow-md scale-105 transition-all duration-300' src={egt} alt='two'/>
            <img className='w-80 h-auto rounded-xl hover:-translate-y-2 hover:shadow-md scale-105 transition-all duration-300' src={three} alt='three'/>
            <img className='w-80 h-auto rounded-xl hover:-translate-y-2 hover:shadow-md scale-105 transition-all duration-300' src={four} alt='four'/>
            <img className='w-80 h-auto rounded-xl hover:-translate-y-2 hover:shadow-md scale-105 transition-all duration-300' src={sev} alt='sev'/>
            <img className='w-80 h-auto rounded-xl hover:-translate-y-2 hover:shadow-md scale-105 transition-all duration-300' src={nine} alt='nine'/>
            <img className='w-80 h-auto rounded-xl hover:-translate-y-2 hover:shadow-md scale-105 transition-all duration-300' src={ele} alt='ele'/>
            <img className='w-80 h-auto rounded-xl hover:-translate-y-2 hover:shadow-md scale-105 transition-all duration-300' src={twl} alt='twl'/>
            <img className='w-80 h-auto rounded-xl hover:-translate-y-2 hover:shadow-md scale-105 transition-all duration-300' src={thirt} alt='thirt'/>
            <img className='w-80 h-auto rounded-xl hover:-translate-y-2 hover:shadow-md scale-105 transition-all duration-300' src={fort} alt='fort'/>
            <img className='w-80 h-auto rounded-xl hover:-translate-y-2 hover:shadow-md scale-105 transition-all duration-300' src={fift} alt='fift'/>
            <img className='w-80 h-auto rounded-xl hover:-translate-y-2 hover:shadow-md scale-105 transition-all duration-300' src={six} alt='six'/>
            <img className='w-80 h-auto rounded-xl hover:-translate-y-2 hover:shadow-md scale-105 transition-all duration-300' src={sixt} alt='sixt'/>
            <img className='w-80 h-auto rounded-xl hover:-translate-y-2 hover:shadow-md scale-105 transition-all duration-300' src={ten} alt='ten'/>
        </div>
    </div>
  )
}

export default Gallery