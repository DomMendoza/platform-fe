import React, { useRef, useState } from "react";

import promo1 from "../../Assets/promo1.webp";
import promo2 from "../../Assets/promo2.webp";

import { Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function PromotionCarousel() {
  // const assetImg = [promo1, promo2];

  return (
    <Swiper
      pagination={{
        clickable: true,
        bulletClass: "swiper-pagination-bullet",
      }}
      loop={true}
      autoplay={{
        delay: 1500,
        disableOnInteraction: false,
      }}
      modules={[Pagination, Autoplay]}
    >
      {Array.from({ length: 7 }, (v, i) => i).map((item, index) => (
        <SwiperSlide className="border-2 border-blue-600" key={index}>
          <img src={promo1} className="w-full h-[20rem] 2xl:h-[25rem]" />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}