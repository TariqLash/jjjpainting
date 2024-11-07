import React from 'react'
import test1 from "../images/test1.jpg"
import test2 from "../images/test2.jpg"
import test3 from "../images/test3.jpg"
import Rating from './Rating'

const Testimonials = () => {
    return (
        <div className='p-16 py-24 border-b flex flex-col justify-between'>
            <div className='mx-auto w-fit flex flex-col items-center mb-20'>
                <h1 className='text-4xl font-bold'>Don't Just Take Our Word for It</h1>
                <p className='text-muted-foreground'>Check out what our customers have to say about us</p>
            </div>
            <div className='flex justify-center space-x-16'>
                <div className='w-2/5 flex flex-col justify-between items-center space-y-8'>
                    <img src={test1} alt="" width={500} height={500} className='transition rounded-xl drop-shadow-lg hover:scale-105 aspect-square' />
                    <p className='text-lg'>
                        "Highly recommend! Hardworking and great attention to detail, they did a beautiful job and were very neat."
                    </p>
                    <div className='flex space-x-4 items-center w-2/3 rounded-xl bg-white p-3'>
                        <div className='size-12 rounded-full bg-purple-300 flex justify-center items-center'>
                            M
                        </div>
                        <div>
                            <h1 className='mb-1 text-lg'>Marilyn Scheske</h1>
                            <Rating />
                        </div>
                    </div>
                </div>
                <div className='w-2/5 flex flex-col justify-between items-center space-y-8'>
                    <img src={test2} alt="" width={500} height={500} className='transition rounded-xl drop-shadow-lg hover:scale-105 aspect-square' />
                    <p className='text-lg'>
                        "Jacob has done interior painting for me & does an excellent job every time. He is very helpful with colour consulting too. He is meticulous, clean, & professional. The best painter!"
                    </p>
                    <div className='flex space-x-4 items-center w-2/3 rounded-xl bg-white p-3'>
                        <div className='size-12 rounded-full bg-cyan-300 flex justify-center items-center'>
                            C
                        </div>
                        <div>
                            <h1 className='mb-1 text-lg'>Carrie Balkwill</h1>
                            <Rating />
                        </div>
                    </div>
                </div>
                <div className='w-2/5 flex flex-col justify-between items-center space-y-8'>
                    <img src={test3} alt="" width={500} height={500} className='transition  rounded-xl drop-shadow-lg hover:scale-105 aspect-square' />
                    <p className='text-lg'>
                        "Thank you JJJ Painting for doing an excellent job painting my bedroom! It looks great."
                    </p>
                    <div className='flex space-x-4 items-center w-2/3 rounded-xl bg-white p-3'>
                        <div className='size-12 rounded-full bg-pink-300 flex justify-center items-center'>
                            L
                        </div>
                        <div>
                            <h1 className='mb-1 text-lg'>Lynda S</h1>
                            <Rating />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonials