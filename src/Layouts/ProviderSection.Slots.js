import React from "react";
import { Button, IconButton } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

//Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

//Providers
import jili from "../Assets/jili.webp";
import cq9 from "../Assets/cq9.webp";
import fachai from "../Assets/fachai.webp";
import jdb from "../Assets/jdb.webp";
import playtech_1 from "../Assets/playtech_1.webp";

function ProviderSection() {
  const slots = [
    jili,
    cq9,
    fachai,
    jdb,
    playtech_1,
    jili,
    cq9,
    fachai,
    jdb,
    playtech_1,
  ];

  return (
    <div className="h-full flex justify-center items-center gap-2 px-4">
      <IconButton className="bg-red-600 rounded-full slotsNavPrev">
        <ArrowBackIosIcon fontSize=".9rem" className="text-white" />
      </IconButton>
      <Swiper
        slidesPerView={5}
        modules={[Navigation]}
        spaceBetween={30}
        navigation={{
          nextEl: ".slotsNavNext",
          prevEl: ".slotsNavPrev",
        }}
        className="mySwiper border-2 border-red-600 h-[65%]"
      >
        {slots.map((item, index) => (
          <SwiperSlide
            className="border-2 border-blue-600 p-2 rounded-lg"
            key={index}
          >
            <img src={item} className="h-full w-full" />
          </SwiperSlide>
        ))}
      </Swiper>
      <IconButton className="bg-red-600 rounded-full slotsNavNext">
        <ArrowForwardIosIcon fontSize=".9rem" className="text-white" />
      </IconButton>
    </div>
  );
}

export default ProviderSection;
