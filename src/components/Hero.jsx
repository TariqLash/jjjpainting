import React from 'react'

const Hero = () => {
  return (
    <div className="hero h-screen">
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-2xl">
          <h1 className="mb-5 text-5xl font-extrabold playfair">At Home or at the Cabin</h1>
          <h3 className='mb-5 font-bold'>Quality Painters for all your painting needs</h3>
          <p className="mb-5 w-full font-semibold pb-5">JJJ Painting strives to deliver the highest-end results to our customers.
            We are meticulous perfectionists who do the job right the first time, while only using the
            top of the line products. With over 500 painting projects completed, the JJJ Painting team
            has developed into the premier quality painters in the Regina area. Our array of skills &
            abilities allow us to take on all painting projects, no matter the size or complexity. You
            can count on us for all of your painting needs.
          </p>
          <a href='/Form' className="btn heroBtn">Get FREE Quote</a>
        </div>
      </div>
    </div>)
}

export default Hero