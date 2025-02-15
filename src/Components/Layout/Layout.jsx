import React from 'react'
import Navbar from '../Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer/Footer'

export default function () {
  return (
    <div className='min-h-screen flex flex-col justify-between'>
    
    <Navbar/>

<div className="flex-grow container px-6 mx-auto">


    <Outlet/>
</div>
    
    <Footer/>
    
    </div>
  )
}
