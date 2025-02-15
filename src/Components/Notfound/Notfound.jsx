import React from 'react'
import notfound from '../../assets/images/error.svg'

export default function Notfound() {
  return (
    <div className='flex justify-center pt-10'> 
    <img src={notfound} alt="notfound" />
  </div>
  )
}
