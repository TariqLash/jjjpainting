import React from 'react'
import logo from '../images/logos/logoTrans.png'
import { FaInstagramSquare } from "react-icons/fa";


const Footer = () => {
  return (
    <footer className="footer p-10 bg-base-300 text-base-content">
      <aside>
        <img src={logo} className='w-32' alt='JJJ Painting logo'></img>
        <p>JJJPainting Ltd.<br />Providing reliable painting since 2020</p>
      </aside>
      <nav className='h-full flex flex-col justify-around'>
        <h6 className="footer-title">Social</h6>
        <div className="grid grid-flow-col gap-4">
          <a target="_blank" rel="noopener noreferrer" href='https://www.instagram.com/jjjpaintingyqr/'><FaInstagramSquare className='text-2xl'/></a>
          <a target="_blank" rel="noopener noreferrer" href='https://www.facebook.com/jjjpaintingyqr'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></a>
        </div>
        <div className="flex h-16 items-center">
          <text className='text-md'>jjjpaintingyqr@gmail.com</text>
          <div className="divider divider-horizontal h-10 mt-3"></div>
          <text className='text-md'>306-581-4772</text>
        </div>
      </nav>
    </footer>
  )
}

export default Footer