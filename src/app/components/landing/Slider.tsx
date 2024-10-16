'use client'
import React, { useEffect, useState } from 'react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import unionIcon from '@/app/assets/UnionIcon.png'
import Image from 'next/image';
import { simpleButtonTransitionClass } from '@/app/utils/hover_animation';

const TextSlider = () => {

    const texts = [
        "بهترین کیفیت",
        "تولید داخلی",
        "استفاده از بهترین اجناس",
        "جنسو ببین جوون بابا",
        "چند تا بخیر یکی ببر",
    ]
    
    return (
        <Swiper
            slidesPerView={4}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            className="flex bg-[#0C1C30] w-full rounded-full h-32 mt-8 justify-end items-end "
            modules={[Autoplay]}
            
        >
            {
                texts.map((e,index)=>
                    <SwiperSlide
                        style={{
                            display:'flex',
                            flexDirection:'row',
                            justifyContent:'space-around',
                            alignItems:'center'
                        }}
                        key={index}
                        className='text-white text-2xl font-bold '>
                            <Image src={unionIcon} alt='icon' className=''/>
                            <h1 className={`font-bold hover:text-primary cursor-pointer hover:scale-110 ${simpleButtonTransitionClass}`}>{ e }</h1>
                    </SwiperSlide>
                )
            }
      </Swiper>
    )
};

export default TextSlider;