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
import { setActiveProvider } from "../../Slice/EbingoSlice";

function ProviderSection() {
  const dispatch = useDispatch();
  const ebingo = useSelector((state) => state.ebingo.ebingoGameData);
  const activeProvider = useSelector((state) => state.ebingo.activeProvider);

  return (
    <div className="h-full flex justify-center items-center gap-2 px-4">
      <IconButton className="bg-red-600 rounded-full ebingoNavPrev">
        <ArrowBackIosIcon fontSize=".9rem" className="text-white" />
      </IconButton>
      <Swiper
        slidesPerView={5}
        modules={[Navigation]}
        spaceBetween={30}
        navigation={{
          nextEl: ".ebingoNavNext",
          prevEl: ".ebingoNavPrev",
        }}
        className="mySwiper h-[100%] "
      >
        {ebingo.map((item, index) => (
          <SwiperSlide
            className="p-5 rounded-lg" //adjust this padding to change the dimension of logo providers
            key={index}
          >
            <div
              className={`h-full flex justify-center items-center p-3 border-2 border-red-600 rounded-lg cursor-pointer ease-in-out duration-300 ${
                activeProvider === item.provider ? "-translate-y-3" : ""
              }`}
              onClick={() => dispatch(setActiveProvider(item.provider))}
            >
              <img src={item.logo} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <IconButton className="bg-red-600 rounded-full ebingoNavNext">
        <ArrowForwardIosIcon fontSize=".9rem" className="text-white" />
      </IconButton>
    </div>
  );
}

export default ProviderSection;
