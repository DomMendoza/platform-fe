import React, { useRef, useState } from "react";

import { Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

export default function PromotionCarousel() {
  return (
    <Swiper
      pagination={true}
      loop={true}
      autoplay={{
        delay: 1500,
        disableOnInteraction: false,
      }}
      modules={[Pagination, Autoplay]}
      className="mySwiper"
    >
      {Array.from({ length: 7 }, (v, i) => i).map((item, index) => (
        <SwiperSlide className="border-2 border-blue-600">
          <div className="h-[25rem]" key={index}>
            PROMOTION {index}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
