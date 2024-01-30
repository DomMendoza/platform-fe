import React from "react";
import { Button } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

function PopularGamesSwiper() {
  return (
    <>
      <div className="text-container flex justify-between items-center">
        <p className="text-2xl font-bold capitalize">hot games</p>
        <div className="navigation-buttons-container flex">
          <div className="flex gap-2">
            <Button variant="outlined" className="prev">
              <ArrowBackIosIcon fontSize=".75rem" style={{ color: "black" }} />
            </Button>
            <Button variant="outlined" className="next">
              <ArrowForwardIosIcon
                fontSize=".75rem"
                style={{ color: "black" }}
              />
            </Button>
          </div>
        </div>
      </div>
      <div className="swiper-container">
        <Swiper
          spaceBetween={50}
          slidesPerView={3}
          onSlideChange={() => console.log("slide change")}
          navigation={{
            nextEl: ".next",
            prevEl: ".prev",
          }}
          modules={[Navigation]}
        >
          {Array.from({ length: 7 }, (v, i) => i).map((item, index) => (
            <SwiperSlide
              className="border-2 border-blue-600 rounded-lg"
              key={index}
            >
              <div className="h-[12rem]">Game {index}</div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      {/* <div className="navigation-buttons-container flex flex-row-reverse">
        <div className="flex gap-2">
          <Button variant="outlined" className="prev">
            <ArrowBackIosIcon fontSize=".75rem" style={{ color: "black" }} />
          </Button>
          <Button variant="outlined" className="next">
            <ArrowForwardIosIcon fontSize=".75rem" style={{ color: "black" }} />
          </Button>
        </div>
      </div> */}
    </>
  );
}

export default PopularGamesSwiper;
