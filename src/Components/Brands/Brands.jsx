import React, { useState } from 'react'
import { useEffect } from 'react';
import axios from 'axios';

export default function Brands() {



  const [brands, setbrands] = useState([])



  const getBrands = () => {


    axios.get('https://ecommerce.routemisr.com/api/v1/brands')
      .then(({ data }) => {



        setbrands(data?.data)


      })
      .catch(({ data }) => {


        console.log(data?.data)
      })

  }




  useEffect(() => {

    getBrands()

    return () => {

    }
  }, [])







  return (
    <div className="container p-10">

<h2 className='text-main font-bold text-center bg-gray-100 py-3 w-[75%] mx-auto'>All Brands</h2>

      <div className="grid xl:grid-cols-4 lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 gap-4 py-6">

{brands.map((brand) =>  <div >
          <div className="product shadow-xl p-2 overflow-hidden h-[300px]">

            <img src={brand.image} alt='' className='w-full object-cover' />
           



          </div>
        </div>)}

       

      </div>

    </div>
  )
}
