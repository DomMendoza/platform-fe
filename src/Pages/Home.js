import React, { useState, useEffect } from "react";
import backgroundPattern from "../Assets/background_pattern.webp";
import PromotionCarousel from "../Components/Display/PromotionCarousel";
import MarqueeTextSlider from "../Components/Display/MarqueeTextSlider";

import SlotsGames from "../Layouts/Home/SlotsGamesSection.Home";
import EbingoGames from "../Layouts/Home/EbingoGamesSection.Home";
import CasinoGames from "../Layouts/Home/CasinoGamesSection.Home";
import Footer from "../Layouts/Footer";

//redux
import { useSelector, useDispatch } from "react-redux";
import { setActive as setEbingoActive } from "../Slice/EbingoSlice";
import { setActive as setSlotsActive } from "../Slice/SlotSlice";
import { setActive as setCasinoActive } from "../Slice/CasinoSlice";

function Home() {
  const dispatch = useDispatch();
  const { ebingoGameData } = useSelector((state) => state.ebingo);
  const { slotsGameData } = useSelector((state) => state.slots);
  const { casinoGameData } = useSelector((state) => state.casino);

  //INITIALIZE ACTIVE PROVIDER
  useEffect(() => {
    dispatch(
      setEbingoActive({
        provider: ebingoGameData[0].provider,
        link: ebingoGameData[0].link,
      })
    );
  }, [ebingoGameData]);

  useEffect(() => {
    dispatch(
      setSlotsActive({
        provider: slotsGameData[0].provider,
        link: slotsGameData[0].link,
      })
    );
  }, [slotsGameData]);

  useEffect(() => {
    dispatch(
      setCasinoActive({
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
      <div className="absolute inset-0 w-full h-full object-cover -z-10 bg-gradient-to-b from-indigo-100 via-blue-400 to-white opacity-65" />

      <div className="w-full xl:px-40 flex flex-col gap-5 lg:gap-10">
        <div className="border-2 border-white">
          <PromotionCarousel />
        </div>
        <div className="bg-white px-1 mx-4 lg:mx-0 rounded-full shadow-[inset_0px_0px_8px_1px_#000000]">
          <MarqueeTextSlider />
        </div>
        <div className="flex flex-col mx-4 xl:mx-0 gap-14 rounded-lg">
          <EbingoGames />
          {/* <SlotsGames />
          <CasinoGames /> */}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
