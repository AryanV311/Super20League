// import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import "./CardSwiper.css"

// import required modules
import { Navigation } from 'swiper/modules';
import { Imagedata } from "../../assets/imagedata"

export const CardSwiper = () => {
  return (
    <>
    <div className='swiper-container'>
       <div className='swipper-card'>
       <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Navigation]}
        className="mySwiper"
      >
        {
            Imagedata.map((data ,key) => {
                return(
                    <div className='swiper-img' key={key}>
                    <SwiperSlide>
                        <img src={data.image} alt=""/>
                    </SwiperSlide>
                    ...
                    </div>
                )
            })
        }
        {/* <SwiperSlide>Slide 1</SwiperSlide> */}
      </Swiper>
        </div> 
    </div>
      
    </>
  );
}
