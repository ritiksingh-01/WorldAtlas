import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <header className='flex flex-row gap-[40%] items-center w-screen bg-[#202020] h-18 px-[15%] justify-around'>
      <div>
        <NavLink to="/">
        <h1 className=' text-2xl font-bold font-serif '>WorldAtlas</h1>
        </NavLink>
      </div>
      <nav>
        <ul className='flex flex-row justify-between gap-10 text-sm font-bold font-serif '>
          <li className='hover:text-blue-400 '> <NavLink  to='/'>
              Home</NavLink></li>
          <li className='hover:text-blue-400 '> <NavLink to='/about'>
              About</NavLink></li>
          <li className='hover:text-blue-400 '> <NavLink to='/country'>
              Country</NavLink></li>
          <li className='hover:text-blue-400 '> <NavLink to='/contact'>
              Contact</NavLink></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header