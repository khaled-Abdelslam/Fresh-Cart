import React from 'react'
import { WishListContext } from '../../Context/WishListContext';
import { useContext, useState } from 'react'

export default function Wish() {

  let { WishList, removeFromWishlist } = useContext(WishListContext)

  return (
    <div className='container p-10'>

      <h2 className='text-main font-bold text-center bg-gray-100 py-3 w-[75%] mx-auto'>Favorite List</h2>

      <div className="grid py-6  xl:grid-cols-6 lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 gap-4">
        {WishList.length === 0 && <p>No item</p>}
        {WishList.map((item) => <div key={item.id} className=''>
          <img src={item.imageCover}  alt="" />
          <span>{item.category.name}</span>
          <div className="flex justify-between items-center">
            <span>{item.price}EGP</span>
            <span>{item.ratingsAverage}<i className='fa fa-star text-yellow-300'></i></span>
          </div>

          <button onClick={()=> removeFromWishlist(item.id)} className='mx-auto btn w-l rounded bg-main text-white cursor-pointer h-9 px-1'>Remove</button>
        </div>)}

      </div>

    </div>
  )
}
