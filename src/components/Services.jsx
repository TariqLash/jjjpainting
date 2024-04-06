import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


import {
    cabinDoor1,
    cabinDoor2,
    cabinDoor3,
    cabinDoor4,
       extCom1,
       extCom2,
       extRes1,
       extRes2,
       extRes3,
       extRes4,
       extRes5,
       extRes6,
       extRes7,
    fenceDeck1,
    fenceDeck2,
    fenceDeck3,
    fenceDeck4,
   industrial1,
   industrial2,
   industrial3,
       intCom1,
       intCom2,
       intCom3,
       intCom4,
       intCom5,
       intRes1,
       intRes2,
       intRes3,
       intRes4,
       intRes5,
       intRes6,
       intRes7,
       intRes8,
       intRes9,
      intRes10,
      intRes11,
      intRes12,
      intRes13,
      intRes14,
  } from '../images'
  

const responsive = {
  all: {
    breakpoint: { max: 4000, min: 0 },
    items: 1
  }
};

const Services = () => {
    return (
        <div className='main2 pt-5 pb-16 min-h-screen'>
            <h1 className="w-full text-center mt-8 mb-3 playfair text-5xl font-bold">Services</h1>

            <div className='flex flex-wrap justify-center p-3 '>
                <div className="card card-compact bg-base-100 shadow-xl m-3">
                    <div className="card-body">
                        <div className="card-actions justify-between items-center">
                            <h2 className="card-title text-3xl font-bold playfair">Cabinetry and Doors</h2>
                        </div>
                    </div>
                    <figure className='z-0'>
                        <Carousel responsive={responsive} className="flex w-full h-full">
                            <div><img src={cabinDoor1} alt="Cabinets #1" className="w-full" /></div>
                            <div><img src={cabinDoor2} alt="Cabinets #2" className="w-full" /></div>
                            <div><img src={cabinDoor3} alt="Cabinets #3" className="w-full" /></div>
                            <div><img src={cabinDoor4} alt="Cabinets #4" className="w-full" /></div>
                        </Carousel>
                    </figure>
                </div>


                <div className="card card-compact bg-base-100 shadow-xl m-3">
                    <div className="card-body">
                        <div className="card-actions justify-between items-center">
                            <h2 className="card-title text-3xl font-bold playfair">Exterior Commercial</h2>
                        </div>
                    </div>
                    <figure className='z-0'>
                        <Carousel responsive={responsive} className="flex w-full h-full">
                            <div><img src={extCom1} alt="" className="w-full" /></div>
                            <div><img src={extCom2} alt="" className="w-full" /></div>
                        </Carousel>
                    </figure>
                </div>


                <div className="card card-compact bg-base-100 shadow-xl m-3">
                    <div className="card-body">
                        <div className="card-actions justify-between items-center">
                            <h2 className="card-title text-3xl font-bold playfair">Exterior Residential</h2>
                        </div>
                    </div>
                    <figure className='z-0'>
                        <Carousel responsive={responsive} className="flex w-full h-full">
                            <div className='carousel'><img src={extRes1} alt="" className="w-full" /></div>
                            <div className='carousel'><img src={extRes2} alt="" className="w-full" /></div>
                            <div className='carousel'><img src={extRes3} alt="" className="w-full" /></div>
                            <div className='carousel'><img src={extRes4} alt="" className="w-full" /></div>
                            <div className='carousel'><img src={extRes5} alt="" className="w-full" /></div>
                            <div className='carousel'><img src={extRes6} alt="" className="w-full" /></div>
                            <div className='carousel'><img src={extRes7} alt="" className="w-full" /></div>
                        </Carousel>
                    </figure>
                </div>


                <div className="card card-compact bg-base-100 shadow-xl m-3">
                    <div className="card-body">
                        <div className="card-actions justify-between items-center">
                            <h2 className="card-title text-3xl font-bold playfair">Fence & Deck Staining</h2>
                        </div>
                    </div>
                    <figure className='z-0'>
                        <Carousel responsive={responsive} className="flex w-full h-full">
                            <div className='carousel'><img src={fenceDeck1} alt="" className="w-full" /></div>
                            <div className='carousel'><img src={fenceDeck2} alt="" className="w-full" /></div>
                            <div className='carousel'><img src={fenceDeck3} alt="" className="w-full" /></div>
                            <div className='carousel'><img src={fenceDeck4} alt="" className="w-full" /></div>
                        </Carousel>
                    </figure>
                </div>


                <div className="card card-compact bg-base-100 shadow-xl m-3">
                    <div className="card-body">
                        <div className="card-actions justify-between items-center">
                            <h2 className="card-title text-3xl font-bold playfair">Industrial</h2>
                        </div>
                    </div>
                    <figure className='z-0'>
                        <Carousel responsive={responsive} className="flex w-full h-full">
                            <div className='carousel'><img src={industrial1} alt="" className="w-full" /></div>
                            <div className='carousel'><img src={industrial2} alt="" className="w-full" /></div>
                            <div className='carousel'><img src={industrial3} alt="" className="w-full" /></div>
                        </Carousel>
                    </figure>
                </div>


                <div className="card card-compact bg-base-100 shadow-xl m-3">
                    <div className="card-body">
                        <div className="card-actions justify-between items-center">
                            <h2 className="card-title text-3xl font-bold playfair">Interior Commercial</h2>
                        </div>
                    </div>
                    <figure className='z-0'>
                        <Carousel responsive={responsive} className="flex w-full h-full">
                            <div className='carousel'><img src={intCom1} alt="" className="w-full" /></div>
                            <div className='carousel'><img src={intCom2} alt="" className="w-full" /></div>
                            <div className='carousel'><img src={intCom3} alt="" className="w-full" /></div>
                            <div className='carousel'><img src={intCom4} alt="" className="w-full" /></div>
                            <div className='carousel'><img src={intCom5} alt="" className="w-full" /></div>
                        </Carousel>
                    </figure>
                </div>


                <div className="card card-compact bg-base-100 shadow-xl m-3">
                    <div className="card-body">
                        <div className="card-actions justify-between items-center">
                            <h2 className="card-title text-3xl font-bold playfair">Interior Residential</h2>
                        </div>
                    </div>
                    <figure className='z-0'>
                        <Carousel responsive={responsive} className="flex w-full h-full">
                            <div className='carousel'><img src={intRes1} alt="" className="w-full" /></div>
                            <div className='carousel'><img src={intRes2} alt="" className="w-full" /></div>
                            <div className='carousel'><img src={intRes3} alt="" className="w-full" /></div>
                            <div className='carousel'><img src={intRes4} alt="" className="w-full" /></div>
                            <div className='carousel'><img src={intRes5} alt="" className="w-full" /></div>
                            <div className='carousel'><img src={intRes6} alt="" className="w-full" /></div>
                            <div className='carousel'><img src={intRes7} alt="" className="w-full" /></div>
                            <div className='carousel'><img src={intRes8} alt="" className="w-full" /></div>
                            <div className='carousel'><img src={intRes9} alt="" className="w-full" /></div>
                            <div className='carousel'><img src={intRes10} alt="" className="w-full" /></div>
                            <div className='carousel'><img src={intRes11} alt="" className="w-full" /></div>
                            <div className='carousel'><img src={intRes12} alt="" className="w-full" /></div>
                            <div className='carousel'><img src={intRes13} alt="" className="w-full" /></div>
                            <div className='carousel'><img src={intRes14} alt="" className="w-full" /></div>
                        </Carousel>
                    </figure>
                </div>
            </div>
        </div>
    )
}

export default Services
