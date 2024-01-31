import React, { useEffect, useState } from "react";
import Skeleton from "@mui/material/Skeleton";

//Providers
import jili from "../Assets/jili.webp";
import cq9 from "../Assets/cq9.webp";
import fachai from "../Assets/fachai.webp";
import jdb from "../Assets/jdb.webp";
import playtech_1 from "../Assets/playtech_1.webp";

import slotsBgHero from "../Assets/slotsBgHero.webp";
import superAce from "../Assets/superAce.webp";
import Footer from "../Layouts/Footer";
import SlotsGamesSection from "../Layouts/SlotsGamesSection.Slots";
import ProviderSection from "../Layouts/ProviderSection.Slots";
import JackpotPrize from "../Components/Display/JackpotPrize";
import GamesHeroBackground from "../Components/Display/GamesHeroBackground";

function Slots() {
  const gameData = [
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

  const [activeProvider, setActiveProvider] = useState("jili"); //current selected game provider
  const [providerData, setProviderData] = useState(); //data of the selected game provider

  useEffect(() => {
    const currentProvider = gameData.filter(
      (item) => item.provider === activeProvider
    );
    setProviderData(currentProvider[0]);
  }, [activeProvider]);

  return (
    <div className="w-full flex flex-col gap-16 justify-center items-center bg-gray-400">
      <div className="w-[65rem] 2xl:w-[85rem] h-full flex flex-col gap-5 border-2 border-red-600">
        <GamesHeroBackground img={slotsBgHero} />
        <div className="home-two jackpot-container border-2 border-green-600">
          <div className="bg-gray-300 rounded-lg h-[10rem] 2xl:h-[12rem]">
            <div className="border-2 border-red-600 w-full h-full flex justify-center items-center">
              <div className="border-2 border-blue-600 w-[70%]">
                {providerData && <JackpotPrize providerData={providerData} />}
              </div>
            </div>
          </div>
        </div>
        <div className="home-three swiper-container border-2 border-green-600">
          <div className="bg-gray-300 rounded-lg h-[7rem] 2xl:h-[10rem]">
            {gameData && (
              <ProviderSection
                gameData={gameData}
                activeProvider={activeProvider}
                setActiveProvider={setActiveProvider}
              />
            )}
          </div>
        </div>
        <div className="home-three swiper-container border-2 border-green-600">
          {providerData && <SlotsGamesSection providerData={providerData} />}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Slots;
