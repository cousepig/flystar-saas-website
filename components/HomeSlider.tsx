"use client"; // <===== REQUIRED

import React from "react";
import Link from "next/link";
// import Image from "next/image";

// Swiper components, modules and styles
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Our custom button component
// import SliderButtons from "@/components/SliderButtons";

interface Slide {
  id: number;
  title: string;
  tagline: string;
  image: string;
  link: string;
  buttons: ButtonProps[];
}

interface ButtonProps {
  id: number;
  text: string;
  link: string;
  type: string;
}

interface DemoSliderProps {
  data: Slide[];
}

const DemoSlider: React.FC<DemoSliderProps> = ({ data }) => {
  return (
    <section className="w-full">
      <div className=" h-screen">
        <ul className="h-full w-full">
          <Swiper
            navigation
            pagination={{ type: "bullets", clickable: true }}
            autoplay={false}
            loop={true}
            modules={[Autoplay, Navigation, Pagination]}
          >
            {data.map(({ id, image, tagline, title, link }) => (
              <SwiperSlide key={id}>
                <Link href={link} rel="noreferrer">
                  <div
                    className="h-full w-full absolute left-0 top-0"
                    style={{
                      background: `url(${image}) center center / cover scroll no-repeat`,
                    }}
                  ></div>
                  {/* <div className="h-full w-full absolute left-0 top-0 bg-black opacity-20"></div> */}
                  <div className="relative z-10 h-full flex items-center justify-center h-screen">
                    <div className="text-center hidden">
                      <h2 className="text-4xl sm:text-4xl lg:text-4xl text-white">
                        {title}
                      </h2>
                      {tagline && (
                        <p className="text-xl sm:text-xl lg:text-xl text-white">
                          {tagline}
                        </p>
                      )}
                      {/* {buttons.length > 0 ? (
                        <p className=" border-white border inline-block px-9 py-2 rounded-md text-white mt-10 lg:mt-20">
                          <SliderButtons buttons={buttons} />
                        </p>
                      ) : null} */}
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </ul>
      </div>
    </section>
  );
};

export default DemoSlider;
