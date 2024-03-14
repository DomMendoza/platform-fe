import React, { useEffect, useState } from "react";

import casinoBgHero from "../Assets/casinoBgHero.webp";
import backgroundPattern from "../Assets/background_pattern.webp";
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
    <div className="w-full flex flex-col gap-16 justify-center items-center relative">
      <img
        src={backgroundPattern}
        alt="Picture"
        className="absolute inset-0 w-full h-full object-cover -z-10 grayscale-[50%]"
      />
      <div className="absolute inset-0 w-full h-full object-cover -z-10 bg-gradient-to-b from-white via-blue-400 to-indigo-100 opacity-75" />
      <div className="w-full xl:px-40 h-full flex flex-col gap-5">
        <GamesHeroBackground img={casinoBgHero} />
        <div className="jackpot-container bg-gradient-to-b from-blue-400 from-50% rounded-lg h-[8rem] lg:h-[10rem] 2xl:h-[12rem] mx-4 xl:mx-0">
          <div className="w-full h-full flex justify-center items-center">
            <JackpotPrize />
          </div>
        </div>
        <div className="swiper-container rounded-2xl mx-4 xl:mx-0">
          <ProviderSection />
        </div>
        <div className="swiper-container mx-4 xl:mx-0">
          <CasinoGamesSection />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Casino;
