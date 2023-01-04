import React, { useState } from 'react'
import Logo  from './../assets/house.svg'
import Menu from '../assets/menu.svg'
import Close from '../assets/close.svg'

function Header() {

  const [isActive, setIsActive] = useState(false)

  const toggleMenu = () => {setIsActive(!isActive)}

  return (
    <nav className='h-[80px] w-full bg-[#FD9255] flex justify-center items-center '>  
    <div className='w-[80%] md:w-[70%] flex justify-between' >
      <img src={Logo} className="w-10" />
      <ul className='md:flex hidden items-center gap-8 text-lg'>
        <li className='font-poppins text-white text-base'>How We Work</li>
        <li className='text-white text-base'>Services</li>
        <li className='text-white text-base'>Free Quote</li>
        <li className='text-white text-base'>Contact</li>
      </ul>
    </div>
    <img className="md:hidden w-14" src={Menu} onClick={toggleMenu} />

    {/* Side Menu */}
    <div className={`fixed h-full w-[300px] bg-white top-0 bottom-0 border-l-2 ease-in-out duration-300 ${isActive ? 'right-0' : '-right-[100%]'} `} >
    <div className='w-full flex justify-end p-4'>
      <img src={Close} className="w-12" onClick={toggleMenu}/>
    </div>
    <ul className='flex flex-col gap-8 px-8 py-12 text-lg'>
        <li className='text-black '>How We Work</li>
        <li className='text-black '>Services</li>
        <li className='text-black '>Free Quote</li>
        <li className='text-black '>Contact</li>
      </ul>
    </div>

    </nav>
  )
}

export default Header