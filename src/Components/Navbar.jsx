import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center bg-cyan-900 text-white py-5 px-8'>
      <h3 className='text-2xl font-extrabold'>Sheriyans</h3>

      <div className='flex gap-7'>
        <Link  className='font-sm font-semibold' to='/'>Home</Link>
        <Link  className='font-sm font-semibold' to='/about'>About</Link>
        <Link  className='font-sm font-semibold' to='/product'>Product</Link>
        <Link  className='font-sm font-semibold' to='/courses'>Courses</Link>
      </div>

    </div>

  )
}

export default Navbar
