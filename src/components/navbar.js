import React, { useState } from 'react';
import logo from '../Assets/logo.png'

const Navbarss = () => {
  // State to manage the navbar's visibility
  const [nav, setNav] = useState(false);

  // Toggle function to handle the navbar's display
  const handleNav = () => {
    setNav(!nav);
  };

  // Array containing navigation items
  const navItems = [
    { id: 1, text: 'Home' },
    { id: 2, text: 'About' },
    { id: 3, text: 'Featured' },
    { id: 4, text: 'Benefits' },
    { id: 5, text: 'FaQ' },
  ];

  return (
    <div className='bg-white flex justify-between items-center h-24 max-w-[100%] mx-auto text-white lg:px-20 px-5 relative'>
      {/* Logo */}
      <div className=' text-slate-900 lg:text-3xl md:text-3xl text-xl font-black leading-[22px]'>TOP ONE PERCENT EXCELLENCE LAB</div>
      <img className='lg:w-40 md:w-40 w-28 h-auto' src={logo} alt='c_logo'/>
    </div>
  );
};

export default Navbarss;