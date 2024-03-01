import React from 'react';
import ebook from '../Assets/EBOOK K.png';
import pdf from '../Assets/E-BOOK(PDF).pdf';

function Book() {
  return (
    <div className='bg-slate-900 flex flex-wrap justify-center items-center lg:px-40 md:px-10 px-5 py-20 gap-10 md:text-center lg:text-center'>
        <div>
            <p className='lg:text-[60px] md:text-[50px] text-[40px] font-bold text-white italic'>"Grab Your<br/>Child's Free Ebook"</p>
            <a href={pdf} target='blank'>
                <button className='px-4 py-2 bg-blue-300 rounded-full lg:text-2xl md:text-2xl text-xl mt-5 font-medium' >Download Now!</button>
            </a>
        </div>
        
        <img className='w-96 h-auto rounded-xl' src={ebook} alt='ebook'/>
    </div>
  )
}

export default Book