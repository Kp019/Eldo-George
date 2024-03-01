import { React, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


function Register() {
    
    const [timeRemaining, setTimeRemaining] = useState(null);
    
    const eventDate = new Date('2024-03-10T10:00:00');
    
    useEffect(() => {
        const calculateTimeRemaining = () => {
        const now = new Date();
        const then = new Date(eventDate);
        const difference = then - now;

        if (difference > 0) {
            const days = Math.floor(difference / (1000 * 60 * 60 * 24));
            const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((difference % (1000 * 60)) / 1000);

            setTimeRemaining({ days, hours, minutes, seconds });
        } else {
            setTimeRemaining({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        }
    };

    calculateTimeRemaining();
    const intervalId = setInterval(calculateTimeRemaining, 1000);

    return () => clearInterval(intervalId); // Cleanup function
  },[eventDate]);

  const renderTimeRemaining = () => {
    if (!timeRemaining) {
      return <p>Calculating...</p>;
    }

    const { days, hours, minutes, seconds } = timeRemaining;
    const formattedTime = `${days ? days + 'd ' : ''}${hours ? hours + 'h ' : ''}${minutes ? minutes + 'm ' : ''}${seconds}s`;

    return <p>offer ends in: {formattedTime}</p>;
  };

  return (
    <div className='flex flex-col justify-center items-center content-center gap-5 bg-slate-900 p-5'>
        <div className='flex flex-col md:flex-row lg:flex-row justify-center items-center gap-5 text-xl text-white'>
            {renderTimeRemaining()}
            <button className='py-2 px-4 bg-blue-100 rounded-lg text-black font-medium hover:bg-blue-300 transition-all duration-300 shadow-md'><Link to="/register" target='_blank' >Register Now</Link></button>
        </div>
        <div className='text-white text-sm'>© Copyright Eldo George. All Rights Reserved</div>
    </div>
  )
}

// onClick={()=>{ window.location.href='/success'}}

export default Register