import React from "react";
import PromotionCarousel from "../Components/Display/PromotionCarousel";
import PopularGamesSwiper from "../Components/Display/PopularGamesSwiper";
import MarqueeTextSlider from "../Components/Display/MarqueeTextSlider";
import GameCategorySection from "../Components/Display/GameCategorySection";

function Home() {
  return (
    <div className="h-[100rem] flex flex-col justify-center items-center bg-green-200">
      <div className="w-[85rem] h-full flex flex-col gap-16 border-2 border-red-600">
        <div className="home-one border-2 border-green-600">
          <PromotionCarousel />
        </div>
        <div className="home-two flex flex-col gap-4 border-2 border-red-600">
          <div className="bg-white flex flex-col gap-2 p-5 rounded-lg border-2 border-green-600">
            <PopularGamesSwiper />
          </div>
          <div className="bg-white p-5 rounded-lg border-2 border-green-600">
            <MarqueeTextSlider />
          </div>
        </div>
        <div className="home-three px-5 py-2 bg-blue-400 flex flex-col gap-4 rounded-lg">
          <GameCategorySection />
        </div>
      </div>
    </div>
  );
}

export default Home;
