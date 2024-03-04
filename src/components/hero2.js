// import react from "react";
import imgage from '../Assets/19 (1).jpg'
import React, { useEffect, useState } from 'react';


export const Header = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const showPopupAfterDelay = setTimeout(() => {
      setIsVisible(true);
    }, 10); // Adjust the delay time in milliseconds as needed

    // const handleScroll = () => {
    //   const scrollY = window.scrollY;
    //   if (scrollY > 500) {
    //     setIsVisible(true);
    //   }
    // };

    // window.addEventListener('scroll', showPopupAfterDelay);
    return () => {
      clearTimeout(showPopupAfterDelay);
      // window.removeEventListener('scroll', handleScroll);
    };
  }, []);


    return (
      <div className={`relative bottom-0 transform transition-transform duration-500`}>
        <img
          src="https://images.unsplash.com/photo-1569617084133-26942bb441f2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          className="absolute inset-0 object-cover w-full h-full"
          alt=""
        />
        <div className="relative bg-opacity-75 bg-slate-900">
          <svg
            className="absolute inset-x-0 bottom-0 text-white"
            viewBox="0 0 1160 161"
          >
            <path
              fill="currentColor"
              d="M-164 13L-104 39.7C-44 66 76 120 196 141C316 162 436 152 556 119.7C676 88 796 34 916 13C1036 -8 1156 2 1216 7.7L1276 13V162.5H1216C1156 162.5 1036 162.5 916 162.5C796 162.5 676 162.5 556 162.5C436 162.5 316 162.5 196 162.5C76 162.5 -44 162.5 -104 162.5H-164V13Z"
            />
          </svg>
          <div className="relative px-4 py-16 mx-auto overflow-hidden sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className={`flex flex-col items-center justify-between xl:flex-row ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'} transition-all duration-1000`}>
              <div className=" mb-12 xl:mb-0 xl:pr-16 ">
                <p className="max-w-xl mb-4 text-base text-gray-200 md:text-lg">Build Your Child's Future In 90 Days !!!<br/>Indias First Workshop That Teaches The 6 Step Framework To</p>
                <h2 className="max-w-lg mb-6 font-sans text-5xl lg:text-[70px] font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
                Transform Your Childs Future
                </h2>
                <p className="max-w-xl mb-4 text-base text-gray-200 md:text-lg">
                Into A Outstanding One Where They Evolve As The Leaders For The Future.
                </p>
                <div className="flex flex-row gap-10 pt-6">
                <div className='px-4 py-2 bg-blue-200 shadow-xl font-semibold rounded-lg md:text-xl lg:text-xl'>06th March 2024</div>
                <div className='px-4 py-2 bg-blue-200 shadow-xl font-semibold rounded-lg md:text-xl lg:text-xl'>06:30 PM</div>
                </div>
              </div>
              <div className="lg:w-full md:w-full md:h-auto lg:h-auto overflow-hidden max-w-xl xl:px-8 xl:w-5/12">
                  <img className={`rounded-xl lg:h-[600px] h-[400px] w-auto shadow-3xl drop-shadow-lg ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'} transition-all duration-1000`} src={imgage} alt="photos"/>  
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };