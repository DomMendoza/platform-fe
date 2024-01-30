import React, { useEffect, useState } from "react";

import slotsBgHero from "../Assets/slotsBgHero.webp";
import Footer from "../Layouts/Footer";
import SlotsGamesSection from "../Layouts/SlotsGamesSection.Slots";
import ProviderSection from "../Layouts/ProviderSection.Slots";

function Slots() {
  return (
    <div className="w-full flex flex-col gap-16 justify-center items-center bg-gray-400">
      <div className="w-[65rem] 2xl:w-[85rem] h-full flex flex-col gap-5 border-2 border-red-600">
        <div className="home-one bghero-container border-2 border-green-600">
          <img src={slotsBgHero} className="w-full h-[15rem] 2xl:h-[20rem]" />
        </div>
        <div className="home-two jackpot-container border-2 border-green-600">
          <div className="bg-gray-300 rounded-lg h-[10rem] 2xl:h-[12rem]">
            <div className="border-2 border-red-600 w-full h-full flex justify-center items-center">
              <div className="border-2 border-blue-600 w-[80%]">
                jackpot prize
              </div>
            </div>
          </div>
        </div>
        <div className="home-three swiper-container border-2 border-green-600">
          <div className="bg-gray-300 rounded-lg h-[7rem] 2xl:h-[10rem] ">
            {/* <div className="h-full flex justify-center items-center gap-2 px-4">
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
            </div> */}
            <ProviderSection />
          </div>
        </div>
        <div className="home-three swiper-container border-2 border-green-600">
          {/* <div className=" flex flex-col gap-5">
            <p className="text-2xl font-bold uppercase ">Slot Games</p>
            <div className="game-grid grid grid-cols-7 grid-rows-2 place-items-center gap-5 ">
              {games.map((item, index) => (
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
                    onClick={() => handleButtonClick(index)}
                    style={{ animation: "fadeMe 500ms" }}
                  >
                    PLAY NOW
                  </Button>
                </div>
              ))}
            </div>
          </div> */}
          <SlotsGamesSection />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Slots;
