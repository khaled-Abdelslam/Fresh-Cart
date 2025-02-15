import React, { useState } from 'react'
import axios from 'axios'
import Slider from "react-slick";
import { useEffect } from 'react';


export default function CategorySlider() {

  const [categories, setcategories] = useState([])

  var settings = {
    dots: true,
    infinite: true,
    autoplaySpeed: 800,
    speed: 7000,
    slidesToShow: 8,
    slidesToScroll: 3,
    autoplay: true,
    easing:"linear",
    pauseOnFocus: false, 
    pauseOnHover: true
  };


  function getCategories() {

    axios.get('https://ecommerce.routemisr.com/api/v1/categories')
      .then(({data}) => {
        setcategories(data.data)
      })
      .catch(() => { })
  }


  useEffect(() => {

    getCategories()

    return () => {

    }
  }, [])




  return (
    <div>

      <Slider {...settings} className='mt-10'>
        {categories.map((category) => 
          <div key={category._id}>
          <img src={category.image} className='w-full h-[200px] object-cover' alt={category.name} />
          <h2>{category.name}</h2>
        </div>
        )}
      </Slider>




    </div>
  )
}
