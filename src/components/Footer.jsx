import React from 'react'
import Logo from '../assets/house.svg'
import Faceook from '../assets/facebook.svg'
import Insta from '../assets/insta.svg'
import Twitter from '../assets/twitter.svg'
import WhatsApp from '../assets/whatsapp.svg'

function Footer() {
  return (
    <div className='w-full flex justify-center items-center py-32 bg-[#FD9255] mt-20'>
        <div className='w-[80%] grid grid-cols-1 gap-y-12 md:grid-cols-2 gap-x-20 lg:grid-cols-4 lg:w-[60%] '>
            <div>
                <img src={Logo} className='w-[80px] ' />
                <p className='text-white mt-5'>
                It is a long established fact that a reader will be distracted by the readable content of a page whenters.
                </p>
                <div className='flex items-center gap-x-4 mt-11'>
                    <img src={Twitter} alt="twitter" />
                    <img src={Faceook} alt="facebook" />
                    <img src={Insta} alt="instagram" />
                </div>
            </div>
            <div>
                <h3 className='text-white text-2xl'>About Us</h3>
                <ul className='mt-8 flex flex-col gap-y-4 text-white'>
                    <li>About</li>
                    <li>Privacy & Policy</li>
                    <li>Terms & Conditions</li>
                    <li>Faq</li>
                </ul>
            </div>
            <div>
                <h3 className='text-white text-2xl'>Navigate</h3>
                <ul className='mt-8 flex flex-col gap-y-4 text-white'>
                    <li>How We Work</li>
                    <li>Services</li>
                    <li>Faq</li>
                    <li>Contact</li>
                    <li>Free Quote</li>
                </ul>
            </div>
            <div>
                <h3 className='text-white text-2xl'>Contact Us</h3>
                <ul className='mt-8 flex flex-col gap-y-4 text-white'>
                    <li>Ricardo Margain 444</li>
                    <li>Call: +52 81 1234 5678</li>
                    <li>Email: info@challenge.com</li>
                    <img className='w-[150px] ' src={WhatsApp} alt='whatsapp' />
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Footer