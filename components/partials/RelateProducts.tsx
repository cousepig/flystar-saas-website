"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
// Swiper components, modules and styles
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const RelateProducts = ({ params: { locale }, data }: any) => {
  return (
    <section className="w-full">
      <Swiper
        pagination={{
          el: "#containerForBullets",
          type: "bullets",
          bulletClass: "swiper-custom-bullet",
          bulletActiveClass: "swiper-custom-bullet-active",
          clickable: true,
        }}
        autoplay={false}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        loop={true}
        modules={[Autoplay, Navigation, Pagination]}
      >
        {data.map(({ image, ctitle, title, description, slug }) => (
          <SwiperSlide key={title} className=" ">
            <Link href={`/${locale}/product/${slug}`}>
              <div className="w-full wow fadeInUp  group relative rounded-sm bg-white duration-300 ">
                <div className="image relative block aspect-[10/10] w-full">
                  <Image
                    src={image}
                    alt={title + ctitle}
                    fill
                    className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"
                  />
                </div>
                <div className="py-4 mb-10 flex justify-between">
                  <div className="text-center w-full">
                    <h3 className="text-base text-gray-700 pro-font-rgregular">
                      {title} <br />
                      {ctitle}
                    </h3>
                    <small className="font-light d-block">{description}</small>
                  </div>
                </div>
              </div>
            </Link>
          </SwiperSlide>
        ))}
        <div id="containerForBullets"></div>
      </Swiper>
    </section>
  );
};

export default RelateProducts;
