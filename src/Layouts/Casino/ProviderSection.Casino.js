import React from "react";
import { Button, IconButton } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

//Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

//Redux
import { useSelector, useDispatch } from "react-redux";
import { setActive } from "../../Slice/CasinoSlice";

function ProviderSection() {
  const dispatch = useDispatch();
  const { casinoGameData, active } = useSelector((state) => state.casino);

  return (
    <div className="h-full flex justify-center items-center gap-2 py-2 px-5 rounded-lg backdrop-blur-md bg-white/30 border-[1px] border-white">
      <ArrowBackIosIcon className="text-red-600 casinoNavPrev cursor-pointer" />
      <Swiper
        slidesPerView={5}
        modules={[Navigation]}
        spaceBetween={25}
        navigation={{
          nextEl: ".casinoNavNext",
          prevEl: ".casinoNavPrev",
        }}
        className="mySwiper h-[100%] "
      >
        {casinoGameData.map((item, index) => (
          <SwiperSlide
            className="p-5 rounded-lg " //adjust this padding to change the dimension of logo providers
            key={index}
          >
            <div
              className={`h-full flex justify-center items-center rounded-lg cursor-pointer ease-in-out duration-300 p-2 ${
                active.provider === item.provider ? "" : ""
              }`}
              onClick={() =>
                dispatch(
                  setActive({ provider: item.provider, link: item.link })
                )
              }
            >
              <img
                src={item.logo}
                className={`w-[80%] ${
                  active.provider === item.provider ? "" : "grayscale"
                }`}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <ArrowForwardIosIcon className="text-red-600 casinoNavNext cursor-pointer" />
    </div>
  );
}

export default ProviderSection;
