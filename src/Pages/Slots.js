import React from "react";

import slotsBgHero from "../Assets/slotsBgHero.webp";
import Footer from "../Layouts/Footer";
import SlotsGamesSection from "../Layouts/SlotsGamesSection.Slots";
import ProviderSection from "../Layouts/ProviderSection.Slots";
import JackpotPrize from "../Components/Display/JackpotPrize";
import GamesHeroBackground from "../Components/Display/GamesHeroBackground";

function Slots() {
  return (
    <div className="w-full flex flex-col gap-16 justify-center items-center bg-gray-400">
      <div className="w-[65rem] 2xl:w-[85rem] h-full flex flex-col gap-5 border-2 border-red-600">
        <GamesHeroBackground img={slotsBgHero} />
        <div className="home-two jackpot-container border-2 border-green-600">
          <div className="bg-gray-300 rounded-lg h-[10rem] 2xl:h-[12rem]">
            <div className="border-2 border-red-600 w-full h-full flex justify-center items-center">
              <div className="border-2 border-blue-600 w-[70%]">
                <JackpotPrize />
              </div>
            </div>
          </div>
        </div>
        <div className="home-three swiper-container border-2 border-green-600">
          <div className="bg-gray-300 rounded-lg h-[7rem] 2xl:h-[10rem]">
            <ProviderSection />
          </div>
        </div>
        <div className="home-three swiper-container border-2 border-green-600">
          <SlotsGamesSection />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Slots;
