import React from 'react'
import mainSlider from '../../assets/images/slider-image-3.jpeg'
import slider2 from '../../assets/images/slider-image-2.jpeg'
import slider1 from '../../assets/images/slider-image-1.jpeg'
import Slider from "react-slick";

export default function MainSlider() {

  
  var settings = {
    dots: true,
    infinite: true,
    autoplaySpeed: 800,
    speed: 7000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    easing:"linear",
    pauseOnFocus: false, 
    pauseOnHover: true,
    arrows:false
  };


  return (
    <div className='container p-11'>

<div className="grid md:grid-cols-4 sm:grid-cols-1">
<div className="col-span-3">

<Slider {...settings} className=''>
       
       <img src={mainSlider} className='w-full h-[400px]' alt="main" />
       <img src={slider1} className='w-full h-[400px]' alt="slider1" />
       <img src={slider2} className='w-full h-[400px]' alt="slider2" />
      </Slider>


</div>

<div className="col-span-1">
  <img src={slider2} className='w-full h-[200px]' alt="" />
  <img src={slider1} className='w-full h-[200px]' alt="" />
</div>

</div>

    </div>
  )
}
