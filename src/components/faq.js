import {React,  useState } from 'react'
import { FiArrowDown } from 'react-icons/fi';

function Faq() {
    const [activeQuestion, setActiveQuestion] = useState(null);

  const questions = [
    {
      title: 'What is the date and time of the workshop?',
      answer: '04-03-2024, 06:30PM IST',
    },
    {
      title: 'Where is the workshop?',
      answer: 'The workshop will be hosted online on ZOOM and you can join from any part of india using your Mobile or Laptop.',
    },
    {
      title: 'Will I get reminders before the webinar begins?',
      answer: "Yes, You will be reminded via email, WatssApp.",
    },
    {
        title: 'Is there any fee to join?',
        answer: "The webinar is generally priced at Rs1999 , but this webinar is free which covers the same content.",
    },
    {
        title: 'Is this a one-way or interactive webinar?',
        answer: "Its Interactive Live Webinar.",
    },
  ];

  const handleClick = (index) => {
    setActiveQuestion(index === activeQuestion ? null : index);
  };

  return (
    <div className="faq-section flex flex-col justify-center items-center gap-2 pt-10 pb-20 sm:mx-10">
      <h2 className='text-4xl font-bold pb-12 text-center'>Frequently Asked Questions</h2>
      {questions.map((question, index) => (
        <div className='lg:w-[700px] md:w-[600px] w-[310px] bg-slate-200 p-5 rounded-lg'>
        <div key={index} className={`faq-item flex flex-col ${activeQuestion === index ? 'active' : ''}`}>
            {/* <div className='flex'> */}
                <button className='flex justify-between text-left' onClick={() => handleClick(index)}>
                    <p className='flex justify-start'>{question.title}</p>
                    <div className=' flex flex-row justify-end items-center content-end pl-5'><FiArrowDown/></div>
                </button>
            {activeQuestion === index && <p className='pt-5'>{question.answer}</p>}
        </div>
        </div>
      ))}
    </div>
  )
}

export default Faq