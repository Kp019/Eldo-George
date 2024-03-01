import React, { useState } from 'react';
import Navbarss from '../components/navbar';

function Registerform() {

    const [name, setname] = useState('')
    const [email, setemail] = useState('')
    const [number, setnumber] = useState('')

    async function handlesubmit(e){
        e.preventDefault();
        const datas = {
            name,
            email,
            number
        }

        fetch("https://sheetdb.io/api/v1/4up09u2bkr9j6",
        {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                data: [
                    {
                        'Name': datas.name,
                        'Email': datas.email,
                        'Phone': datas.number,
                    }
                ]
            })
        }).then((res)=>res.json)
        .then((data)=> {
            alert('join the whatsApp group')
            window.location.href='/success'
            setname('')
            setemail('')
            setnumber('')
        })
        .catch((error)=>{
            console.log(error)
        })

    // https://webhooks.integrately.com/a/webhooks/dc0e0740996846748d95dec716d57364
    // console.log(data)
    }

    // 

  return (
    <div>
    <Navbarss/>
    <div className='flex flex-col justify-center items-center'>
        <form className='flex flex-col items-center justify-center gap-5 bg-slate-300 py-12 rounded-lg w-[310px] md:w-[350px] lg:[350px]' onSubmit={handlesubmit}>
            <h1 className='text-3xl pb-5'>Register Now</h1>
            <label className='flex flex-col gap-3 w-[270px] md:w-[300px] lg:w-[300px]'>
                <p>Enter your Name</p>
                <input className='p-2 rounded-lg' onChange={(e)=>{setname(e.target.value)}} value={name} type='text' name='name' placeholder='name' required/>
            </label>
            <label className='flex flex-col gap-3 w-[270px] md:w-[300px] lg:w-[300px]'>
                <p>Enter your Email</p>
                <input className='p-2 rounded-lg' onChange={(e)=>{setemail(e.target.value)}} value={email} type='email' name='email' placeholder='email' required/>
            </label>
            <label className='flex flex-col gap-3 w-[270px] md:w-[300px] lg:w-[300px]'>
                <p>Enter your WhatsApp Number</p>
                <input className='p-2 rounded-lg' onChange={(e)=>{setnumber(e.target.value)}} value={number} type='text' name='number' placeholder='+91-xxxxx-xxxxx' required/>
            </label>
            <button className='px-4 py-2 bg-slate-400 rounded-lg' type='submit'>Submit</button>
        </form>
        <div className=' absolute flex flex-col justify-center items-center content-center gap-5 bg-slate-900 p-5 w-screen bottom-0'>
            <div className='text-white text-sm'>© Copyright Eldo George. All Rights Reserved</div>
        </div>
    </div>
    </div>
  )
}

export default Registerform