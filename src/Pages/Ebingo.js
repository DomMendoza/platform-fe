import React, { useEffect, useState } from "react";

import casinoBgHero from "../Assets/casinoBgHero.webp";
import Footer from "../Layouts/Footer";
import EbingoGamesSection from "../Layouts/Ebingo/EbingoGamesSection.Ebingo";
import ProviderSection from "../Layouts/Ebingo/ProviderSection.Ebingo";
import JackpotPrize from "../Components/Display/JackpotPrice.Ebingo";
import GamesHeroBackground from "../Components/Display/GamesHeroBackground";

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
    <div className="w-full flex flex-col gap-16 justify-center items-center bg-gray-400">
      <div className="w-[65rem] 2xl:w-[85rem] h-full flex flex-col gap-5 border-2 border-red-600">
        <GamesHeroBackground img={casinoBgHero} />
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
          <EbingoGamesSection />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Ebingo;
