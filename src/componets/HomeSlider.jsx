import React, { useState } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import slider1 from '../assets/images/1.jpg'
import slider2 from '../assets/images/2.jpg'
import slider3 from '../assets/images/3.jpg'
import slider4 from '../assets/images/4.jpg'
import slider5 from '../assets/images/5.jpg'

const sliderImg = [
    { id : 1,  src : slider1 },
    { id : 2, src : slider2},
    { id : 3, src : slider3 },
    { id : 4, src : slider4 },
    { id : 5,src : slider5 }
]

export default function HomeSlider() {
    const [slider , setSlider] = useState(sliderImg)

     var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <>
      <Slider {...settings}>
       {
         slider.map((v) => {
           return(
             <div key={v.id}>
                <img src={v.src} alt="" className='w-dvw'/>
            </div>
           )
         })
       }
     </Slider>
    </>
  )
}
