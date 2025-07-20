import React from 'react'
import { FaFacebook,FaInstagram,FaWhatsapp, FaLinkedin } from 'react-icons/fa'

export default function Footer() {
  return (
    <>
    <hr/>
      <footer className='py-12'>
        <div  name= "Footer" className="max-w-screen-2*1 container mx-auto px-4 md:px-20px ">
          <div className='flex flex-col items-center justify-center'>
            <div className='flex  space-x-4'>
              <FaFacebook size={25}/>
              <FaInstagram size={25}/>
              <FaLinkedin size={25}/>
              <FaWhatsapp size={25}/>
            </div>
            <div className='mt-8 border-t border-gray-700 pt-8 flex flex-col items-center justify-center text-center'>
              <p className='text-sm'>&copy; 2025 Rohit Kumar. All rights reserved.</p>
              <p className='text-sm'>Built with ❤️ by Rohit | Special thanks to Shilpi for constant supp</p> 
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
