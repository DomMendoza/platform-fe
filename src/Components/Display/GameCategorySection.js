import React, { useEffect, useState } from "react";

//Providers
import jili from "../../Assets/jili.webp";
import cq9 from "../../Assets/cq9.webp";
import fachai from "../../Assets/fachai.webp";
import jdb from "../../Assets/jdb.webp";
import playtech_1 from "../../Assets/playtech_1.webp";

//Games
import superAce from "../../Assets/superAce.webp";

import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

function GameCategorySection() {
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

  const [selectedProvider, setSelectedProvider] = useState();

  useEffect(() => {
    setSelectedProvider(slots[0]);
  }, []);

  return (
    <>
      <div className="text-container flex justify-between items-center gap-5 ">
        <p className="text-2xl font-bold uppercase ">Slot Games</p>
        <div className="swiper-container w-1/2 ">
          <Swiper
            // spaceBetween={25}
            slidesPerView={5}
            onSlideChange={() => console.log("slide change")}
            navigation={true}
            modules={[Navigation]}
          >
            {slots.map((item, index) => (
              <SwiperSlide onClick={() => setSelectedProvider(item)}>
                <div
                  className={`flex justify-center items-center h-[5rem] rounded-lg transition duration-150 ease-out cursor-pointer ${
                    selectedProvider !== item ? "hover:scale-125" : ""
                  }`}
                >
                  <img
                    src={item}
                    key={index}
                    className={`h-full w-full object-contain p-3 ${
                      selectedProvider === item
                        ? "border-b-4 border-blue-600 "
                        : ""
                    }`}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <div className="game-grid grid grid-cols-7 place-items-center gap-5 ">
        {games.map((item, index) => (
          <div
            key={index}
            className=" rounded-lg shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] "
          >
            <img
              src={item.image}
              className="objectg-contain rounded-lg hover:blur-sm"
            />
          </div>
        ))}
      </div>
    </>
  );
}

export default GameCategorySection;
