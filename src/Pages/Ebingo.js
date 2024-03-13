import React, { useEffect, useState } from "react";

import casinoBgHero from "../Assets/casinoBgHero.webp";
import Footer from "../Layouts/Footer";
import EbingoGamesSection from "../Layouts/Ebingo/EbingoGamesSection.Ebingo";
import ProviderSection from "../Layouts/Ebingo/ProviderSection.Ebingo";
import JackpotPrize from "../Components/Display/JackpotPrice.Ebingo";
import GamesHeroBackground from "../Components/Display/GamesHeroBackground";
import bingo from "../Assets/lottery.png";

//redux
import { useSelector, useDispatch } from "react-redux";
import { setActive } from "../Slice/EbingoSlice";

function Ebingo() {
  const dispatch = useDispatch();
  const { ebingoGameData } = useSelector((state) => state.ebingo);

  //INITIALIZE ACTIVE PROVIDER
  useEffect(() => {
    dispatch(
      setActive({
        provider: ebingoGameData[0].provider,
        link: ebingoGameData[0].link,
      })
    );
  }, [ebingoGameData]);

  return (
    <div className="w-full flex flex-col gap-16 justify-center items-center bg-gradient-to-b from-white via-blue-400 to-indigo-100">
      <div className="w-full xl:px-40 h-full flex flex-col gap-5">
        <GamesHeroBackground img={casinoBgHero} />
        <div className="jackpot-container bg-gradient-to-b from-blue-400 from-10% rounded-lg h-[8rem] lg:h-[10rem] 2xl:h-[12rem] mx-4 xl:mx-0">
          <div className="w-full h-full flex justify-center items-center">
            <JackpotPrize />
          </div>
        </div>
        <div className="swiper-container rounded-2xl mx-4 xl:mx-0">
          <ProviderSection />
        </div>
        <div className="swiper-container mx-4 xl:mx-0">
          <EbingoGamesSection />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Ebingo;
