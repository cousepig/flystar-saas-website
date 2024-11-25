"use client"
import React, { useState } from 'react';
// Swiper components, modules and styles
import { Navigation, FreeMode, Thumbs } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

// import './styles.css';

const Gallery = ({ data, title }: any) => {

    // export default function Gallery(images) {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    return (
        <>
            <Swiper
                style={{
                    '--swiper-navigation-color': '#1C4C4E',
                    '--swiper-pagination-color': '#1C4C4E',
                }}
                spaceBetween={10}
                navigation={true}
                thumbs={{ swiper: thumbsSwiper }}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper2"
            >
                {data.map((img: any, index: any) => (
                    <SwiperSlide key={index} className='aspect-[500/500] relative transform overflow-hidden shadow-[0_2px_8px_rgba(15,23,42,0.08)] bg-slate-200 mx-auto'>
                        <Image src={img} alt={title} fill />
                    </SwiperSlide>
                ))}
            </Swiper>
            <Swiper
                onSwiper={setThumbsSwiper}
                spaceBetween={10}
                slidesPerView={10}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper mt-4"
            >
                {data.map((img: any, index: any) => (
                    <SwiperSlide key={index} className='flex items-center justify-center rounded-md border border-primary hover:bg-gray-50 focus:outline-none cursor-pointer bg-white text-gray-900 shadow-sm  aspect-[100/100] relative transform overflow-hidden shadow-[0_2px_8px_rgba(15,23,42,0.08)] bg-slate-200 '>
                        <Image src={img} alt={title} fill />
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
}

export default Gallery;
