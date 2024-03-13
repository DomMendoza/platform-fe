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
import { setActive } from "../../Slice/EbingoSlice";

function ProviderSection() {
  const dispatch = useDispatch();
  const { ebingoGameData, active } = useSelector((state) => state.ebingo);

  return (
    <div className="h-full flex justify-center items-center gap-2 py-2 px-5 rounded-lg backdrop-blur-md bg-white/30 border-[1px] border-white ">
      <ArrowBackIosIcon className="text-red-600 ebingoNavPrev cursor-pointer" />
      <Swiper
        breakpoints={{
          375: {
            slidesPerView: 3,
          },
          768: {
            slidesPerView: 4,
          },
        }}
        modules={[Navigation]}
        spaceBetween={25}
        navigation={{
          nextEl: ".ebingoNavNext",
          prevEl: ".ebingoNavPrev",
        }}
        className="mySwiper h-[100%] m-2 lg:m-0"
      >
        {ebingoGameData.map((item, index) => (
          <SwiperSlide
            className="lg:p-5 rounded-lg" //adjust this padding to change the dimension of logo providers
            key={index}
          >
            <div
              className={`h-full flex justify-center items-center rounded-lg cursor-pointer ease-in-out duration-300 p-0 lg:p-2   ${
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
      <ArrowForwardIosIcon className="text-red-600 ebingoNavNext cursor-pointer" />
    </div>
  );
}

export default ProviderSection;
