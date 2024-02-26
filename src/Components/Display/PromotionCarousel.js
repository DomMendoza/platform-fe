import React, { useRef, useState } from "react";

import promo1 from "../../Assets/promo1.webp";
import promo2 from "../../Assets/dailyDeposit.png";
import promo3 from "../../Assets/dailyRebate.png";
import promo4 from "../../Assets/firstDeposit.png";

import { Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function PromotionCarousel() {
  const assetImg = [promo1, promo2, promo3, promo4];

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
      {assetImg.map((item, index) => (
        <SwiperSlide className="border-2 border-blue-600" key={index}>
          <img src={item} className="w-full h-[20rem] 2xl:h-[25rem]" />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
