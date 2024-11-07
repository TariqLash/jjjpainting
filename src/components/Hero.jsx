import React from 'react'
import heroImg from "../images/heroImg.jpg"
import { Check, ArrowDown } from 'lucide-react';

const Hero = () => {
  return (
    <div className='h-[95vh] flex flex-col justify-between items-center pt-48 border-b'>
      <div className='flex justify-around mx-8 max-w-screen-xl flex-col-reverse lg:flex-row'>
        <div className='flex flex-col justify-center lg:w-3/5 space-y-8 mr-16'>
          <div>
            <h1 className='text-6xl text-primary font-bold'>Leave the Painting to Us,</h1>
            <h1 className='text-6xl text-primary font-bold'>and Focus on What Matters Most!</h1>
          </div>
          <h1 className='text-lg text-justify'>With <span className='font-bold text-xl text-primary'>500+</span> successful projects, our expert painters use top-quality materials and proven techniques to ensure flawless results on every job.</h1>
          <button className="btn btn-success text-white hover:scale-105 w-1/3">Get your FREE quote today!</button>
          <ul className='grid grid-cols-2 w-2/3'>
            <li className='flex'><Check className='text-success mr-2' />Interior Painting</li>
            <li className='flex'><Check className='text-success mr-2' />Exterior Painting</li>
            <li className='flex'><Check className='text-success mr-2' />Cabinetry & Doors</li>
            <li className='flex'><Check className='text-success mr-2' />Industrial Projects</li>
            <li className='flex'><Check className='text-success mr-2' />Fence & Deck Staining</li>
            <li className='flex'><Check className='text-success mr-2' />Specialized Services</li>
          </ul>
        </div>
        <img src={heroImg} alt="" width={500} className='h-[500px] transition rotate-3 rounded-xl drop-shadow-lg hover:scale-105 hover:rotate-0'/>
      </div>
      <a href="#scroll1">
      <ArrowDown className='mb-12 animate-pulse'/>
      </a>
    </div>
  )
}

export default Hero