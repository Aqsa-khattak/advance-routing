import React from 'react'
import { useNavigate } from 'react-router-dom';

const Navbar2 = () => {

  let navigate = useNavigate()

  return (
    <div className='flex gap-5 py-5 px-8 bg-cyan-700'>
      
      <button 
      onClick={()=>{
        navigate('/')
      }} 
      className='bg-yellow-500  text-black py-2 px-5  text-xs font-bold active:scale-95 duration-100 transition-transform cursor-pointer'>
        Return To Home Page
      </button>

      <button 
      onClick={()=>{
        navigate(-1)
      }} 
      className='bg-yellow-500 text-black py-2 px-5   text-xs font-bold active:scale-95 duration-100 transition-transform cursor-pointer'>
        Back
      </button>

      <button 
      onClick={()=>{
        navigate(+1)
      }} 
      className='bg-yellow-500  text-black py-2 px-5   text-xs font-bold active:scale-95 duration-100 transition-transform cursor-pointer'>
        Next
      </button>

    </div>
  )
}

export default Navbar2
