"use client"; // <===== REQUIRED

import React from "react";
import Image from "next/image";
import Link from "next/link";
// Swiper components, modules and styles
import { Autoplay, Navigation, Thumbs } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface ReProduct {
  title: string;
  ctitle: string;
  image: string;
  slug: string;
  description: string;
}

interface DemoSliderProps {
  data: ReProduct[];
}

const RelateProducts: React.FC<DemoSliderProps> = ({ data }) => {
  return (
    <section className="w-full">
      <Swiper
        navigation
        pagination={{ type: "bullets", clickable: true }}
        autoplay={false}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        loop={true}
        modules={[Autoplay, Navigation, Thumbs]}
      >
        {data.map(({ image, ctitle, title, description, slug }) => (
          <SwiperSlide key={title} className=" ">
            <Link href={slug}>
              <div className="w-full wow fadeInUp  group relative overflow-hidden rounded-sm bg-white duration-300 ">
                <div className="image relative block aspect-[10/10] w-full">
                  <Image
                    src={image}
                    alt={title + ctitle}
                    fill
                    className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"
                  />
                </div>
                <div className="py-4 flex justify-between">
                  <div className="text-center w-full">
                    <h3 className="text-base text-gray-700 pro-font-rgregular">
                      {title} <br />
                      {ctitle}
                    </h3>
                    <small className="mb-5 font-light d-block">
                      {description}
                    </small>
                  </div>
                </div>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default RelateProducts;
