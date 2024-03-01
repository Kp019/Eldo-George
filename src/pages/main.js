import React from 'react'
import Details from '../components/details'
import About from '../components/about'
import Featuredin from '../components/featuredin'
import Benefits from '../components/benefits'
import Attendee from '../components/attendee'
import Steps from '../components/steps'
import Faq from '../components/faq'
import Register from '../components/register'
import Navbarss from '../components/navbar'
import Gallery from '../components/gallery'
import { Header } from '../components/hero2'
import Book from '../components/book'


function Main() {
  return (
    <div className="flex flex-col h-screen">
      <div className='flex-grow'>
        <Navbarss/>
        <Header/>
        <Details/>
        <About/>
        <Featuredin/>
        <Benefits/>
        <Book/>
        <Gallery/>
        <Attendee/>
        <Steps/>
        <Faq/>
      </div>
      <div className='bottom-0 w-fulp-4 sticky'>
        <Register/>
      </div>
    </div>
  )
}

export default Main