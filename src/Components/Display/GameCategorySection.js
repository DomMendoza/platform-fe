import React from "react";

import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

function GameCategorySection() {
  return (
    <>
      <div className="flex flex-col gap-2">
        <div className="text-container flex justify-between items-center">
          <p className="text-2xl font-bold capitalize">Slots</p>
        </div>
        <div className="swiper-container">
          <Swiper
            spaceBetween={50}
            slidesPerView={7}
            onSlideChange={() => console.log("slide change")}
            navigation={true}
            modules={[Navigation]}
          >
            {Array.from({ length: 12 }, (v, i) => i).map((item, index) => (
              <SwiperSlide className="border-2 border-blue-600 rounded-lg">
                <div className="h-[5rem]" key={index}>
                  Game {index}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
}

export default GameCategorySection;
