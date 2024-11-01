import React from 'react'
import heroImg from "../images/heroImg.jpg"

const Hero = () => {
  return (
    <div className='flex justify-center'>
      <div className='h-screen flex items-center justify-between mx-8 max-w-screen-xl flex-col-reverse lg:flex-row
        '>
        <div className='flex-col bg-red-100 lg:bg-transparent lg:w-3/5 space-y-5 mr-16'>
          <div>
            <h1 className='text-6xl text-primary font-bold'>Leave the Painting to Us,</h1>
            <h1 className='text-6xl text-primary font-bold'>and Focus on What Matters Most!</h1>
          </div>
          <h1 className='text-lg text-justify'>With over 500 successful projects, our expert painters use top-quality materials and proven techniques to ensure flawless results on every job.</h1>
          <button>get your free quote now!</button>
          <ul>
            <li>Flawless Finishes</li>
            <li>Timely Completion</li>
            <li>Exceptional Quality</li>
          </ul>
        </div>
        <img src={heroImg} alt="" width={500} height={500} className='rotate-3 rounded-xl drop-shadow-lg'/>
      </div>
    </div>
  )
}

export default Hero