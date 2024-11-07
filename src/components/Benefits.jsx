import React from 'react'
import { Sparkle, Clock, BriefcaseBusiness } from 'lucide-react';

const Benefits = () => {
    return (
        <div className='flex flex-col justify-between py-24 border-b'>
            <div className='h-96'>
                <div className='flex justify-center space-x-12'>
                    <div className='w-1/4 flex flex-col justify-center items-center space-y-4 bg-neutral-content aspect-square rounded-lg drop-shadow-sm transition'>
                        <Sparkle className='size-24 mb-4' />
                        <h1 className='text-3xl font-bold'>
                        High-Quality Results
                        </h1>
                        <p className='text-center'>
                        A flawless finish every time, ensuring your space looks its best.
                        </p>
                    </div>
                    <div className='w-1/4 flex flex-col justify-center items-center space-y-4 bg-neutral-content aspect-square rounded-lg drop-shadow-sm transition'>
                        <Clock className='size-24 mb-4' />
                        <h1 className='text-3xl font-bold'>
                        On-Time Completion
                        </h1>
                        <p className='text-center'>
                        Efficient work to meet deadlines without compromising quality.
                        </p>
                    </div>
                    <div className='w-1/4 flex flex-col justify-center items-center space-y-4 bg-neutral-content aspect-square rounded-lg drop-shadow-sm transition'>
                        <BriefcaseBusiness className='size-24 mb-4' />
                        <h1 className='text-3xl font-bold'>
                        Minimal Disruption
                        </h1>
                        <p className='text-center'>
                        Quick, professional service with minimal impact on your operations.
                        </p>
                    </div>
                </div>                
            </div>
        </div>

    )
}

export default Benefits