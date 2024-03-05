import React, { useEffect, useState } from "react";

import casinoBgHero from "../Assets/casinoBgHero.webp";
import Footer from "../Layouts/Footer";
import CasinoGamesSection from "../Layouts/Casino/CasinoGamesSection.Casino";
import ProviderSection from "../Layouts/Casino/ProviderSection.Casino";
import JackpotPrize from "../Components/Display/JackpotPrize.Casino";
import GamesHeroBackground from "../Components/Display/GamesHeroBackground";

//redux
import { useSelector, useDispatch } from "react-redux";
import { setActive } from "../Slice/CasinoSlice";

function Casino() {
  const dispatch = useDispatch();
  const { casinoGameData } = useSelector((state) => state.casino);

  //INITIALIZE ACTIVE PROVIDER
  useEffect(() => {
    dispatch(
      setActive({
        provider: casinoGameData[0].provider,
        link: casinoGameData[0].link,
      })
    );
  }, [casinoGameData]);

  return (
    <div className="w-full flex flex-col gap-16 justify-center items-center bg-gradient-to-b from-white via-blue-400 to-indigo-100">
      <div className="w-[65rem] 2xl:w-[85rem] h-full flex flex-col gap-5 ">
        <GamesHeroBackground img={casinoBgHero} />
        <div className="home-two jackpot-container ">
          <div className="bg-gradient-to-b from-blue-400 from-10% rounded-lg h-[10rem] 2xl:h-[12rem]">
            <div className="w-full h-full flex justify-center items-center">
              <JackpotPrize />
            </div>
          </div>
        </div>
        <div className="home-three swiper-container ">
          <ProviderSection />
        </div>
        <div className="home-three swiper-container ">
          <CasinoGamesSection />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Casino;
