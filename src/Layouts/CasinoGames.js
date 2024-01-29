import React, { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

//Providers
import jili from "../Assets/jili.webp";
import cq9 from "../Assets/cq9.webp";
import fachai from "../Assets/fachai.webp";
import jdb from "../Assets/jdb.webp";
import playtech_1 from "../Assets/playtech_1.webp";

//Games
import superAce from "../Assets/superAce.webp";

import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

function CasinoGames() {
  const slots = [jili, cq9, fachai, jdb, playtech_1];
  const games = [
    { name: "superAce", image: superAce },
    { name: "superAce", image: superAce },
    { name: "superAce", image: superAce },
    { name: "superAce", image: superAce },
    { name: "superAce", image: superAce },
    { name: "superAce", image: superAce },
    { name: "superAce", image: superAce },
    { name: "superAce", image: superAce },
    { name: "superAce", image: superAce },
    { name: "superAce", image: superAce },
    { name: "superAce", image: superAce },
    { name: "superAce", image: superAce },
    { name: "superAce", image: superAce },
  ];

  const navigate = useNavigate();
  const [selectedProvider, setSelectedProvider] = useState();
  const [hoverStates, setHoverStates] = useState(
    Array(games.length).fill(false)
  );

  const handleMouseEnter = (index) => {
    setHoverStates((prev) => {
      const newState = [...prev];
      newState[index] = true;
      return newState;
    });
  };

  const handleMouseLeave = (index) => {
    setHoverStates((prev) => {
      const newState = [...prev];
      newState[index] = false;
      return newState;
    });
  };

  const handleButtonClick = (index) => {
    console.log("Button clicked for index:", index);
    // Add your logic here based on the index
  };

  useEffect(() => {
    setSelectedProvider(slots[0]);
  }, []);

  return (
    <div className=" flex flex-col gap-5">
      <div className="text-container flex justify-between items-center gap-5">
        <p className="text-2xl font-bold uppercase ">Casino Games</p>
        <div className="swiper-container w-[55%] px-10 relative">
          {/* TODO: MAKE THIS CONDITIONAL */}
          <Swiper
            slidesPerView={5}
            onSlideChange={() => console.log("slide change")}
            navigation={{
              nextEl: ".next",
              prevEl: ".prev",
            }}
            modules={[Navigation]}
          >
            {slots.map((item, index) => (
              <SwiperSlide
                onClick={() => setSelectedProvider(item)}
                key={index}
              >
                <div
                  className={`flex justify-center items-center h-[5rem] rounded-lg transition duration-150 ease-out cursor-pointer ${
                    selectedProvider !== item ? "hover:scale-125" : ""
                  }`}
                >
                  <img
                    src={item}
                    className={`h-full w-full object-contain p-3 ${
                      selectedProvider === item
                        ? "border-b-4 border-blue-600 ease-in-out duration-300"
                        : ""
                    }`}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="absolute inset-0 flex justify-between items-center">
            <div className=" prev flex justify-center items-center w-8 h-8 pl-2 rounded-full cursor-pointer">
              <ArrowBackIosIcon fontSize=".9rem" style={{ color: "white" }} />
            </div>
            <div className="border-2 border-red-600 next flex justify-center items-center w-8 h-8 rounded-full cursor-pointer">
              <ArrowForwardIosIcon
                fontSize=".9rem"
                style={{ color: "white" }}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="game-grid grid grid-cols-7 grid-rows-2 place-items-center gap-5 ">
        {games.slice(0, 13).map((item, index) => (
          <div
            key={index}
            className="w-40 h-40 rounded-lg shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] flex justify-center items-center relative"
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave(index)}
          >
            <img
              src={item.image}
              className={`w-full h-full object-contain rounded-lg ${
                hoverStates[index] ? "brightness-50" : ""
              } ease-in-out duration-300`}
            />
            <Button
              variant="contained"
              className={`bg-black hover:bg-black absolute ${
                hoverStates[index] ? "block" : "hidden"
              } ease-in-out duration-1000`}
              onClick={() => handleButtonClick(index)}
            >
              PLAY NOW
            </Button>
          </div>
        ))}
        <div
          className="bg-red-400 w-40 h-40 rounded-lg shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] cursor-pointer"
          onClick={() => navigate("/slots")}
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

export default CasinoGames;
