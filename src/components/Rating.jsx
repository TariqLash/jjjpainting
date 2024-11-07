import React from 'react'
import { Star } from 'lucide-react';

const Rating = () => {
  return (
    <div className='w-fit space-x-1 flex'>
        <Star  className='size-4 text-orange-400 fill-orange-400'/>
        <Star  className='size-4 text-orange-400 fill-orange-400'/>
        <Star  className='size-4 text-orange-400 fill-orange-400'/>
        <Star  className='size-4 text-orange-400 fill-orange-400'/>
        <Star  className='size-4 text-orange-400 fill-orange-400'/>
    </div>
  )
}

export default Rating