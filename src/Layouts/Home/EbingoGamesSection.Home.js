import React, { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

//Redux
import { useSelector, useDispatch } from "react-redux";
import { setActiveProvider } from "../../Slice/EbingoSlice";

function EbingoGames() {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const ebingo = useSelector((state) => state.ebingo.ebingoGameData);
  const providerData = useSelector((state) => state.ebingo.providerData);
  const activeProvider = useSelector((state) => state.ebingo.activeProvider);

  return (
    <div className=" flex flex-col gap-5">
      <div className="text-container flex justify-between items-center gap-5">
        <p className="text-2xl font-bold uppercase ">E-Bingo Games</p>
        <div className="swiper-container w-[55%] px-10 relative">
          <Swiper
            slidesPerView={5}
            navigation={{
              nextEl: ".ebingoNext",
              prevEl: ".ebingoPrev",
            }}
            modules={[Navigation]}
          >
            {ebingo.map((item, index) => (
              <SwiperSlide
                onClick={() => dispatch(setActiveProvider(item.provider))}
                key={index}
              >
                <div
                  className={`flex justify-center items-center h-[5rem] rounded-lg transition duration-150 ease-out cursor-pointer ${
                    activeProvider !== item.provider ? "hover:scale-125" : ""
                  }`}
                >
                  <img
                    src={item.logo}
                    className={`h-full w-full object-contain p-3 ${
                      activeProvider === item.provider
                        ? "border-b-4 border-blue-600 ease-in-out duration-300"
                        : ""
                    }`}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="absolute inset-0 flex justify-between items-center">
            <div className="border-2 border-red-600 ebingoPrev flex justify-center items-center w-8 h-8 pl-2 rounded-full cursor-pointer">
              <ArrowBackIosIcon fontSize=".9rem" style={{ color: "white" }} />
            </div>
            <div className="border-2 border-red-600 ebingoNext flex justify-center items-center w-8 h-8 rounded-full cursor-pointer">
              <ArrowForwardIosIcon
                fontSize=".9rem"
                style={{ color: "white" }}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="game-grid grid grid-cols-7 grid-rows-2 place-items-center gap-5 ">
        {providerData.games.slice(0, 13).map((item, index) => (
          <div
            key={index}
            className="group rounded-lg shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] flex justify-center items-center relative"
          >
            <img
              src={item.image}
              className="w-full h-full object-contain rounded-lg group-hover:brightness-50 duration-300 ease-in-out"
            />
            <Button
              variant="contained"
              className="bg-black hover:bg-black absolute group-hover:block hidden "
              style={{ animation: "fadeMe 500ms" }}
            >
              PLAY NOW
            </Button>
          </div>
        ))}
        <div
          className="bg-red-400 w-full h-full rounded-lg shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] cursor-pointer"
          onClick={() => navigate("/ebingo")}
        >
          <div className="w-full h-full flex flex-col justify-center items-center gap-2 rounded-lg">
            <div className="flex justify-center items-center gap-2">
              <div className="bg-white rounded-full w-3 h-3"></div>
              <div className="bg-white rounded-full w-3 h-3"></div>
              <div className="bg-white rounded-full w-3 h-3"></div>
            </div>
            <p className="font-bold text-lg font-[Poppins] text-white">More</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EbingoGames;
