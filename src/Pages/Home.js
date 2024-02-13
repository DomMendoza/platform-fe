import React, { useState, useEffect } from "react";
import PromotionCarousel from "../Components/Display/PromotionCarousel";
import PopularGamesSwiper from "../Components/Display/PopularGamesSwiper";
import MarqueeTextSlider from "../Components/Display/MarqueeTextSlider";

import SlotsGames from "../Layouts/Home/SlotsGamesSection.Home";
import EbingoGames from "../Layouts/Home/EbingoGamesSection.Home";
import CasinoGames from "../Layouts/Home/CasinoGamesSection.Home";
import Footer from "../Layouts/Footer";

function Home() {
  return (
    <div className="w-full flex flex-col gap-16 justify-center items-center bg-gray-400">
      <div className="w-[65rem] 2xl:w-[85rem] h-full flex flex-col gap-16 border-2 border-red-600">
        <div className="home-one swiper-container border-2 border-green-600">
          <PromotionCarousel />
        </div>
        <div className="home-two flex flex-col gap-4 border-2 border-red-600">
          <div className="bg-white flex flex-col gap-2 p-5 rounded-lg border-2 border-green-600">
            <PopularGamesSwiper />
          </div>
          <div className="bg-white px-1 rounded-full shadow-[inset_0px_0px_8px_1px_#000000]">
            <MarqueeTextSlider />
          </div>
        </div>
        <div className="home-three px-5 py-2 flex flex-col gap-14 rounded-lg border-2 border-red-600">
          <SlotsGames />
          <EbingoGames />
          <CasinoGames />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
