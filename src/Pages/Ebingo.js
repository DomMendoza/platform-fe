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
          <EbingoGamesSection />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Ebingo;
