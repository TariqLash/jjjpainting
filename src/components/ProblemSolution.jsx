import React from 'react'
import problemImg from "../images/problemImg.png"

const ProblemSolution = () => {
    return (
        <div id='scroll1'>
            <div className='h-[80vh] flex items-center py-24 border-b'>
                <img src={problemImg} alt="" width={1500} height={1500} className='transition -rotate-3 rounded-xl drop-shadow-lg hover:scale-105 hover:rotate-0' />
                <div className='flex flex-col space-y-8 ml-16'>
                    <div className='text-3xl text-justify'>
                        <p><span className='font-bold'>Painting projects never seem to go as planned.</span></p>
                        <p>Painting can quickly become overwhelming. With deadlines to meet, quality expectations to maintain, and logistics to manage, it’s easy to feel like things are falling apart before they even begin.</p>
                    </div>
                    <div className='text-lg'>
                        <p><span className='font-bold'>The process shouldn’t be this difficult.</span></p>
                        <p>Deadlines slip, results don’t match expectations, and clean-up turns into a bigger task than anticipated. Whether it’s uneven color or a disrupted workspace, the whole process can feel like more trouble than it’s worth.</p>
                    </div>
                    <div className='text-lg'>
                        <p><span className='font-bold'>What if painting was stress-free?</span></p>
                        <p>At JJJ Painting, we make the process simple. From planning to execution, we handle everything so you can focus on what matters—without worrying about delays, messes, or poor results.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProblemSolution