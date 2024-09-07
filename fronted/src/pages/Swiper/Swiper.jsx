// import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Imagedata } from "../../assets/imagedata"

export const Swiperr = () => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
        {
            Imagedata.map((data ,key) => {
                return(
                    <div key={key}>
                    <SwiperSlide>
                        <img src={data.image} alt="" width="100%"/>
                        <p>{data.title}</p>
                        <p>{data.subTitle}</p>
                        <p>{data.interval}</p>
                    </SwiperSlide>
                    ...
                    </div>
                )
            })
        }
      
      
    </Swiper>
  )
}
