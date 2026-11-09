import React from 'react'
import {Link, Outlet} from 'react-router-dom'

const Product = () => {
  return (
    <div>

        <div className='flex justify-center items-center gap-7 py-7 '>
          <Link to='/product/men' className='bg-white  text-black py-2 px-6 rounded-2xl font-semibold active:scale-95 duration-100 transition-transform'>Men's</Link>
          <Link to='/product/women' className='bg-white  text-black py-2 px-6 rounded-2xl font-semibold active:scale-95 duration-100 transition-transform'>Women's</Link>
          <Link to='/product/kids' className='bg-white  text-black py-2 px-6 rounded-2xl font-semibold active:scale-95 duration-100 transition-transform'>Kid's</Link>
        </div>

       <Outlet/>
    </div>
  )
}

export default Product
