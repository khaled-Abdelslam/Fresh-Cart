import React, { useState } from 'react'
import { useEffect } from 'react';
import axios from 'axios';

export default function Categories() {



  const [categories, setcategories] = useState([])



  const getCategories = () => {


    axios.get('https://ecommerce.routemisr.com/api/v1/categories')
      .then(({ data }) => {



        setcategories(data?.data)


      })
      .catch(({ data }) => {


        console.log(data?.data)
      })

  }




  useEffect(() => {

    getCategories()

    return () => {

    }
  }, [])







  return (
    <div className="container p-10">

      <h2 className='text-main font-bold text-center bg-gray-100 py-3 w-[75%] mx-auto'>Categories</h2>

      <div className="grid xl:grid-cols-3 lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 gap-4 py-6">

        {categories.map((category) => <div >
          <div className="product shadow-xl p-2 overflow-hidden h-[300px]">

            <img src={category.image} alt='' className='w-full object-cover' />
            <h2>{category.name}</h2>



          </div>
        </div>)}



      </div>

    </div>
  )
}
