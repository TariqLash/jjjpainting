import React from 'react'
import gallery1 from "../images/gallery/gallery1.png"
import gallery2 from "../images/gallery/gallery2.jpg"
import gallery3 from "../images/gallery/gallery3.jpg"
import gallery4 from "../images/gallery/gallery4.jpg"
import gallery5 from "../images/gallery/gallery5.jpg"
import gallery6 from "../images/gallery/gallery6.jpg"
import gallery7 from "../images/gallery/gallery7.jpg"
import gallery8 from "../images/gallery/gallery8.jpg"

const Gallery = () => {
    return (
        <div className='border-b'>
            <div className='grid grid-cols-4 py-24'>
                <div className="zoom-img">
                    <img src={gallery1} alt="" className='aspect-square' />
                </div>
                <div className="zoom-img">
                <img src={gallery2} alt="" className='aspect-square' />

                </div>
                <div className="zoom-img">
                <img src={gallery3} alt="" className='aspect-square' />

                </div>
                <div className="zoom-img">
                <img src={gallery4} alt="" className='aspect-square' />

                </div>
                <div className="zoom-img">
                <img src={gallery5} alt="" className='aspect-square' />

                </div>
                <div className="zoom-img">
                <img src={gallery6} alt="" className='aspect-square' />

                </div>
                <div className="zoom-img">
                <img src={gallery7} alt="" className='aspect-square' />

                </div>
                <div className="zoom-img">
                <img src={gallery8} alt="" className='aspect-square' />

                </div>
            </div>
        </div>
    )
}

export default Gallery