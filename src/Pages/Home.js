import React, { useState, useEffect } from "react";
import PromotionCarousel from "../Components/Display/PromotionCarousel";
import PopularGamesSwiper from "../Components/Display/PopularGamesSwiper";
import MarqueeTextSlider from "../Components/Display/MarqueeTextSlider";

import SlotsGames from "../Layouts/SlotsGamesSection.Home";
import CasinoGames from "../Layouts/CasinoGamesSection.Home";
import Footer from "../Layouts/Footer";

//Providers
import jili from "../Assets/jili.webp";
import cq9 from "../Assets/cq9.webp";
import fachai from "../Assets/fachai.webp";
import jdb from "../Assets/jdb.webp";
import playtech_1 from "../Assets/playtech_1.webp";
import superAce from "../Assets/superAce.webp";

function Home() {
  //SLOT
  const slotGameData = [
    {
      provider: "jili",
      logo: jili,
      games: [
        { name: "superAce", image: superAce },
        { name: "superAce", image: superAce },
        { name: "superAce", image: superAce },
      ],
      jackpot: 24654326,
    },
    {
      provider: "cq9",
      logo: cq9,
      games: [
        { name: "superAce", image: superAce },
        { name: "superAce", image: superAce },
        { name: "superAce", image: superAce },
        { name: "superAce", image: superAce },
        { name: "superAce", image: superAce },
        { name: "superAce", image: superAce },
      ],
      jackpot: 454324523,
    },
    {
      provider: "fachai",
      logo: fachai,
      games: [
        { name: "superAce", image: superAce },
        { name: "superAce", image: superAce },
        { name: "superAce", image: superAce },
        { name: "superAce", image: superAce },
        { name: "superAce", image: superAce },
        { name: "superAce", image: superAce },
        { name: "superAce", image: superAce },
        { name: "superAce", image: superAce },
        { name: "superAce", image: superAce },
      ],
      jackpot: 35467358,
    },
    {
      provider: "jdb",
      logo: jdb,
      games: [
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
        { name: "superAce", image: superAce },
        { name: "superAce", image: superAce },
      ],
      jackpot: 21315345,
    },
    {
      provider: "playtech",
      logo: playtech_1,
      games: [
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
        { name: "superAce", image: superAce },
        { name: "superAce", image: superAce },
        { name: "superAce", image: superAce },
        { name: "superAce", image: superAce },
        { name: "superAce", image: superAce },
      ],
      jackpot: 13436146,
    },
  ];

  //CASINO
  const casinoGameData = [
    {
      provider: "jili",
      logo: jili,
      games: [
        { name: "superAce", image: superAce },
        { name: "superAce", image: superAce },
        { name: "superAce", image: superAce },
      ],
      jackpot: 24654326,
    },
    {
      provider: "cq9",
      logo: cq9,
      games: [
        { name: "superAce", image: superAce },
        { name: "superAce", image: superAce },
        { name: "superAce", image: superAce },
        { name: "superAce", image: superAce },
        { name: "superAce", image: superAce },
        { name: "superAce", image: superAce },
      ],
      jackpot: 454324523,
    },
    {
      provider: "fachai",
      logo: fachai,
      games: [
        { name: "superAce", image: superAce },
        { name: "superAce", image: superAce },
        { name: "superAce", image: superAce },
        { name: "superAce", image: superAce },
        { name: "superAce", image: superAce },
        { name: "superAce", image: superAce },
        { name: "superAce", image: superAce },
        { name: "superAce", image: superAce },
        { name: "superAce", image: superAce },
      ],
      jackpot: 35467358,
    },
    {
      provider: "jdb",
      logo: jdb,
      games: [
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
        { name: "superAce", image: superAce },
        { name: "superAce", image: superAce },
      ],
      jackpot: 21315345,
    },
    {
      provider: "playtech",
      logo: playtech_1,
      games: [
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
        { name: "superAce", image: superAce },
        { name: "superAce", image: superAce },
        { name: "superAce", image: superAce },
        { name: "superAce", image: superAce },
        { name: "superAce", image: superAce },
      ],
      jackpot: 13436146,
    },
  ];

  //SLOT
  const [slotsActiveProvider, setSlotsActiveProvider] = useState("jili"); //current selected game provider
  const [slotsProviderData, setSlotsProviderData] = useState(); //data of the selected game provider

  //CASINO
  const [casinoActiveProvider, setCasinoActiveProvider] = useState("jili"); //current selected game provider
  const [casinoProviderData, setCasinoProviderData] = useState(); //data of the selected game provider

  //SLOT
  useEffect(() => {
    const currentProvider = slotGameData.filter(
      (item) => item.provider === slotsActiveProvider
    );
    setSlotsProviderData(currentProvider[0]);
  }, [slotsActiveProvider]);

  //CASINO
  useEffect(() => {
    const currentProvider = casinoGameData.filter(
      (item) => item.provider === casinoActiveProvider
    );
    setCasinoProviderData(currentProvider[0]);
  }, [casinoActiveProvider]);

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
          {slotsProviderData && (
            <SlotsGames
              slotGameData={slotGameData}
              slotsActiveProvider={slotsActiveProvider}
              setSlotsActiveProvider={setSlotsActiveProvider}
              slotsProviderData={slotsProviderData}
            />
          )}

          {casinoProviderData && (
            <CasinoGames
              casinoGameData={casinoGameData}
              casinoActiveProvider={casinoActiveProvider}
              setCasinoActiveProvider={setCasinoActiveProvider}
              casinoProviderData={casinoProviderData}
            />
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
