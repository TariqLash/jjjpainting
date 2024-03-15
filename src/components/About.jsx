import React from 'react'
import team from '../images/aboutPic.png'

const About = () => {
    return (
        <div className='flex flex-col items-center h-screen pt-5 pb-5'>

            <h1 className="w-full text-center mt-8 mb-3 playfair text-5xl font-bold">About</h1>

            <div className="flex flex-col md:flex-row sm:bg-red-100 md:bg-red-300 lg:bg-red-500 shadow-xl about m-3 rounded-xl md:mt-8">
                <figure className='md:w-4/6'>
                    <img className='w-full md:h-full rounded-t-xl md:rounded-tr-none md:rounded-l-xl ' src={team} alt="Three Guys" />
                </figure>
                <div className="card-body md:w-2/6 ">
                    <h2 className="card-title text-4xl font-bold lg:text-6xl lg:mb-3 playfair">Jacob, Josh & Jayden</h2>
                    
                    <p>We are three cousins from Regina, Saskatchewan who have always loved helping others. We love to help
                        build & restore properties to their best state. We work hard to deliver the best experience for our
                        clients.</p>
                    <div className="card-actions justify-end">
                        <a href='/form' className="btn btn-primary">Lets Connect</a>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default About