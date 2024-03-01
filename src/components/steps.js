import React from 'react';
import one from '../Assets/icons/1.png';
import two from '../Assets/icons/2.png';
import three from '../Assets/icons/3.png';
import four from '../Assets/icons/4.png';


function Steps() {
  return (
    <div className='lg:p-20 p-5 md:p-16 lg-my-28 md:my-20 my-10 text-center flex flex-col justify-center items-center content-center gap-2 lg:pb-20 bg-slate-900'>
        <h1 className='text-4xl font-bold text-white'>How Does This  WEBINAR  ACTUALLY WORKS</h1>
        {/* <div className='flex pt-16 gap-5 flex-wrap flex-col'>
            <div className='flex flex-col max-w-[500px] gap-5 justify-center items-center align-middle'>
                <p className='bg-blue-100 rounded-lg px-5 py-3 text-xl'>Attend the actionable webinar with your child</p>
                <div className='flex justify-center items-center'><img className=' w-3/6 rotate-90' alt='hi' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAAAsTAAALEwEAmpwYAAAEVElEQVR4nO2cX2/aVhyG8wGSQdcmmEiEFsyALE3afcF1N1W1VUoT2IIzqZVK2/AvQNo0XddNu4ywEjKl1bp1SZwpYGPAyVopu5p0pgNY2S4CNvwab9n7SK+MuLDQ8x7OObYRQ0MAAAAAAAAAAAAAAAAwCJMZfTiQUmNiStWCaVUVM2qMvzfQSYE1/AXFHUxrspjWmJg5STCrbUXylYsWTwMo5YtZjYWyNX5ECU7JD3Ui5lCCY/JDuXY+QglOyjeDb4Jz8pc7ydWwJvRLuNgYCaS1zb7lL+ssnNf5642rq79f6PuD/F8JpNT4oPLNoIQ+ENNqjUJ+KwV+xHRkCzGjalTyI52Ei3WsCVbhtxco5UeK9U50rAlWF2Exo23Syq+zKM8KSrCEv3DkFjM1mVZ+O5EVTEfWS8jWZEr5f8tWJP8WN/CslBDK1mRK+ZOPeRosutJACZZLyNVkLp5KfitPGiz6GCXYKEGXKeXzfMyDEqyXEF7WS6TyeVZbR0xHtkqglN/J1JMmSrBaQqSgl0jlrzbZ1NNWUIIVZngJRb1ELL+Vq2vNrcgLbFEtl0As3wxKsFzCil4ilt/OM5RguwRC+Wz6mUFbwvjdis+XrOQmkgfv/MkK8yerzP+gnctmHp7kyiMe9SRLKguYSbUTbEVjwfRJRKKHKeRbTZvyW/nGYNF8tT5+96VvYPkT9ytGWzzkT1mUbyaSPTj2fb4R7LsAPvIhv2lr5JuZ4XlusEhugBIw7TQHkm+m7xIw7TQHlj/z/JBd+/aQRfOVPwJ3yiGbBWDBnSKQbyZasFkCdjtNMvnXXrQzaacEbDWbpPKvdxJdPjgevfdK6FmA8/t8/dzJv/4dzxETH+7+aK0AyGfU8nmm1/Q/excA+ex9yP/k+yM2/dRGAZh2DFL5PGJyx8IUBPmMeuTzTOYrx2Nfb3t6FoCRb9DLL1atb0Ox2zGck/+PArDVZGcun3P5UfUd5Bskc75vro+bcVeW1AIusgxn5Le+AZlKOLCkHuIK1zh7+SbBpYovkKpmAqnq2/P+GHGa6iJrrcGC93frXmljYiD55xnXpz+4XTfWZddn64w6H9xYL4/cLOFn7Kfhmt1yX7i1KX94q8zoswn5veRfur0tX7r9klHn4hfb5ZGbP2Hkn4ZrVnGPzr2Wx+Z+ZuS587o8HoP8rvLH5t/IntgbRp9fIL+n/PivsufLHUae+A7kd8M/q7g9CzuysLDLqONZ2IX8bvjvcfl7spDYY9TxJLh8/OXZqUC+0/ITiixICqOOR9rDyO8G5Dss35tQZK+kMOoIGPndGY2/GvYm9jbeh3x+3omvfsO/aHVDSCgxyHcQ7+K+5l3cZ5QRpH0suE4VAPk2ESRlnqwAScGcb5fRuD7MxUG+09tQab+Eaec/WIKABde5EiDfwRIEjHznShAg37kSBMg/2y2qICnzgqRUW1lU5vh7Z/gRAAAAAAAAAAAAAAAAQ/8i/gLZc3+B9tjFfwAAAABJRU5ErkJggg=="/></div>
            </div>            
            <div className='flex flex-col max-w-[500px] gap-5 justify-center items-center align-middle'>
                <p className='bg-blue-100 rounded-lg px-5 py-3 text-xl'>Attend the actionable webinar with your child</p>
                <div className='flex justify-center items-center'><img className=' w-3/6 rotate-90' alt='hi' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAAAsTAAALEwEAmpwYAAAEVElEQVR4nO2cX2/aVhyG8wGSQdcmmEiEFsyALE3afcF1N1W1VUoT2IIzqZVK2/AvQNo0XddNu4ywEjKl1bp1SZwpYGPAyVopu5p0pgNY2S4CNvwab9n7SK+MuLDQ8x7OObYRQ0MAAAAAAAAAAAAAAAAwCJMZfTiQUmNiStWCaVUVM2qMvzfQSYE1/AXFHUxrspjWmJg5STCrbUXylYsWTwMo5YtZjYWyNX5ECU7JD3Ui5lCCY/JDuXY+QglOyjeDb4Jz8pc7ydWwJvRLuNgYCaS1zb7lL+ssnNf5642rq79f6PuD/F8JpNT4oPLNoIQ+ENNqjUJ+KwV+xHRkCzGjalTyI52Ei3WsCVbhtxco5UeK9U50rAlWF2Exo23Syq+zKM8KSrCEv3DkFjM1mVZ+O5EVTEfWS8jWZEr5f8tWJP8WN/CslBDK1mRK+ZOPeRosutJACZZLyNVkLp5KfitPGiz6GCXYKEGXKeXzfMyDEqyXEF7WS6TyeVZbR0xHtkqglN/J1JMmSrBaQqSgl0jlrzbZ1NNWUIIVZngJRb1ELL+Vq2vNrcgLbFEtl0As3wxKsFzCil4ilt/OM5RguwRC+Wz6mUFbwvjdis+XrOQmkgfv/MkK8yerzP+gnctmHp7kyiMe9SRLKguYSbUTbEVjwfRJRKKHKeRbTZvyW/nGYNF8tT5+96VvYPkT9ytGWzzkT1mUbyaSPTj2fb4R7LsAPvIhv2lr5JuZ4XlusEhugBIw7TQHkm+m7xIw7TQHlj/z/JBd+/aQRfOVPwJ3yiGbBWDBnSKQbyZasFkCdjtNMvnXXrQzaacEbDWbpPKvdxJdPjgevfdK6FmA8/t8/dzJv/4dzxETH+7+aK0AyGfU8nmm1/Q/excA+ex9yP/k+yM2/dRGAZh2DFL5PGJyx8IUBPmMeuTzTOYrx2Nfb3t6FoCRb9DLL1atb0Ox2zGck/+PArDVZGcun3P5UfUd5Bskc75vro+bcVeW1AIusgxn5Le+AZlKOLCkHuIK1zh7+SbBpYovkKpmAqnq2/P+GHGa6iJrrcGC93frXmljYiD55xnXpz+4XTfWZddn64w6H9xYL4/cLOFn7Kfhmt1yX7i1KX94q8zoswn5veRfur0tX7r9klHn4hfb5ZGbP2Hkn4ZrVnGPzr2Wx+Z+ZuS587o8HoP8rvLH5t/IntgbRp9fIL+n/PivsufLHUae+A7kd8M/q7g9CzuysLDLqONZ2IX8bvjvcfl7spDYY9TxJLh8/OXZqUC+0/ITiixICqOOR9rDyO8G5Dss35tQZK+kMOoIGPndGY2/GvYm9jbeh3x+3omvfsO/aHVDSCgxyHcQ7+K+5l3cZ5QRpH0suE4VAPk2ESRlnqwAScGcb5fRuD7MxUG+09tQab+Eaec/WIKABde5EiDfwRIEjHznShAg37kSBMg/2y2qICnzgqRUW1lU5vh7Z/gRAAAAAAAAAAAAAAAAQ/8i/gLZc3+B9tjFfwAAAABJRU5ErkJggg=="/></div>
            </div>
            <div className='flex flex-col max-w-[500px] gap-5 justify-center items-center align-middle'>
                <p className='bg-blue-100 rounded-lg px-5 py-3 text-xl'>Attend the actionable webinar with your child</p>
                <div className='flex justify-center items-center'><img className=' w-3/6 rotate-90' alt='hi' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAAAsTAAALEwEAmpwYAAAEVElEQVR4nO2cX2/aVhyG8wGSQdcmmEiEFsyALE3afcF1N1W1VUoT2IIzqZVK2/AvQNo0XddNu4ywEjKl1bp1SZwpYGPAyVopu5p0pgNY2S4CNvwab9n7SK+MuLDQ8x7OObYRQ0MAAAAAAAAAAAAAAAAwCJMZfTiQUmNiStWCaVUVM2qMvzfQSYE1/AXFHUxrspjWmJg5STCrbUXylYsWTwMo5YtZjYWyNX5ECU7JD3Ui5lCCY/JDuXY+QglOyjeDb4Jz8pc7ydWwJvRLuNgYCaS1zb7lL+ssnNf5642rq79f6PuD/F8JpNT4oPLNoIQ+ENNqjUJ+KwV+xHRkCzGjalTyI52Ei3WsCVbhtxco5UeK9U50rAlWF2Exo23Syq+zKM8KSrCEv3DkFjM1mVZ+O5EVTEfWS8jWZEr5f8tWJP8WN/CslBDK1mRK+ZOPeRosutJACZZLyNVkLp5KfitPGiz6GCXYKEGXKeXzfMyDEqyXEF7WS6TyeVZbR0xHtkqglN/J1JMmSrBaQqSgl0jlrzbZ1NNWUIIVZngJRb1ELL+Vq2vNrcgLbFEtl0As3wxKsFzCil4ilt/OM5RguwRC+Wz6mUFbwvjdis+XrOQmkgfv/MkK8yerzP+gnctmHp7kyiMe9SRLKguYSbUTbEVjwfRJRKKHKeRbTZvyW/nGYNF8tT5+96VvYPkT9ytGWzzkT1mUbyaSPTj2fb4R7LsAPvIhv2lr5JuZ4XlusEhugBIw7TQHkm+m7xIw7TQHlj/z/JBd+/aQRfOVPwJ3yiGbBWDBnSKQbyZasFkCdjtNMvnXXrQzaacEbDWbpPKvdxJdPjgevfdK6FmA8/t8/dzJv/4dzxETH+7+aK0AyGfU8nmm1/Q/excA+ex9yP/k+yM2/dRGAZh2DFL5PGJyx8IUBPmMeuTzTOYrx2Nfb3t6FoCRb9DLL1atb0Ox2zGck/+PArDVZGcun3P5UfUd5Bskc75vro+bcVeW1AIusgxn5Le+AZlKOLCkHuIK1zh7+SbBpYovkKpmAqnq2/P+GHGa6iJrrcGC93frXmljYiD55xnXpz+4XTfWZddn64w6H9xYL4/cLOFn7Kfhmt1yX7i1KX94q8zoswn5veRfur0tX7r9klHn4hfb5ZGbP2Hkn4ZrVnGPzr2Wx+Z+ZuS587o8HoP8rvLH5t/IntgbRp9fIL+n/PivsufLHUae+A7kd8M/q7g9CzuysLDLqONZ2IX8bvjvcfl7spDYY9TxJLh8/OXZqUC+0/ITiixICqOOR9rDyO8G5Dss35tQZK+kMOoIGPndGY2/GvYm9jbeh3x+3omvfsO/aHVDSCgxyHcQ7+K+5l3cZ5QRpH0suE4VAPk2ESRlnqwAScGcb5fRuD7MxUG+09tQab+Eaec/WIKABde5EiDfwRIEjHznShAg37kSBMg/2y2qICnzgqRUW1lU5vh7Z/gRAAAAAAAAAAAAAAAAQ/8i/gLZc3+B9tjFfwAAAABJRU5ErkJggg=="/></div>
            </div>
            <div className='flex max-w-[500px] gap-5 justify-center items-center align-middle'>
                <p className='bg-blue-100 rounded-lg px-5 py-3 text-xl'>Attend the actionable webinar with your child</p>
            </div>
        </div> */}
        <div className='flex flex-row flex-wrap justify-center items-center lg:gap-20 gap-12 pt-12 bg-blue-300 pb-12 rounded-xl mt-10'>
            <div className='flex flex-row text-left gap-2 justify-center items-center w-72 bg-blue-100 py-8 px-5 rounded-xl shadow-xl hover:-translate-y-2 hover:shadow-md scale-105 transition-all duration-300'>
                <img className=' w-12' src={one} alt='one'/>
                <p className=' text-xl font-bold text-slate-900'>Attend the actionable webinar with your child</p>
            </div>
            <div className='flex flex-row text-left gap-2 justify-center items-center w-72 bg-blue-100 py-8 px-5 rounded-xl shadow-xl hover:-translate-y-2 hover:shadow-md scale-105 transition-all duration-300'>
                <img className=' w-12' src={two} alt='one'/>
                <p className=' text-xl font-bold text-slate-900'>Ask Your Child to Take Notes While You Both Watch</p>
            </div>
            <div className='flex flex-row text-left gap-2 justify-center items-center w-72 bg-blue-100 py-8 px-5 rounded-xl shadow-xl hover:-translate-y-2 hover:shadow-md scale-105 transition-all duration-300'>
                <img className=' w-12' src={three} alt='one'/>
                <p className=' text-xl font-bold text-slate-900'>Apply Learnings In Thee Life Today</p>
            </div>
            <div className='flex flex-row text-left gap-2 justify-center items-center w-72 bg-blue-100 py-8 px-5 rounded-xl shadow-xl hover:-translate-y-2 hover:shadow-md scale-105 transition-all duration-300'>
                <img className=' w-12' src={four} alt='one'/>
                <p className=' text-xl font-bold text-slate-900'>See The Results Tommorow</p>
            </div>
        </div>
    </div>
  )
}

export default Steps