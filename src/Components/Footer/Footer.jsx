import React from 'react'

export default function Footer() {
  return (
    <footer className='bg-gray-100 py-10 px-20'>

      <div className="container">

        <h2 className='text-2xl'>Get the fresh cart app</h2>
        <p className='text-gray-500e'>We will send you a link, open it on your phone to download the app.</p>



        <div className="flex justify-between py-5">

          <input type="email" id="email" className="w-[85%] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500" placeholder="Email.." required />

          <button className='bg-main px-10 text-white rounded-md cursor-pointer'>Share app link</button>
        </div>


        <div className="flex border-y-1 justify-between py-2">

          <p>Payment Partners</p>
          <p>Get deliveries with fresh cart</p>
        </div>

      </div>





    </footer>
  )
}
