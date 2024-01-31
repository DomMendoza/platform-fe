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
                {providerData ? (
                  <JackpotPrize providerData={providerData} />
                ) : (
                  <div className="border-2 border-blue-600 p-5 rounded-lg flex justify-center items-center gap-2">
                    {Array.from({ length: 9 }, (v, i) => i).map((item) => (
                      <Skeleton
                        variant="rectangular"
                        className="rounded-lg w-12 2xl:w-14 h-16 2xl:h-20"
                        key={item}
                      />
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="home-three swiper-container border-2 border-green-600">
          <div className="bg-gray-300 rounded-lg h-[7rem] 2xl:h-[10rem]">
            {gameData ? (
              <ProviderSection
                gameData={gameData}
                activeProvider={activeProvider}
                setActiveProvider={setActiveProvider}
              />
            ) : (
              <div className="border-2 border-red-600 h-full flex justify-center items-center gap-5 px-4">
                {Array.from({ length: 5 }, (v, i) => i).map((item) => (
                  <Skeleton
                    variant="rectangular"
                    className="rounded-lg w-36 h-20"
                    key={item}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
        <div className="home-three swiper-container border-2 border-green-600">
          {providerData ? (
            <SlotsGamesSection providerData={providerData} />
          ) : (
            <div className=" flex flex-col gap-5">
              <Skeleton
                variant="text"
                className="text-2xl"
                width={150}
                height={37}
              />
              <div className="game-grid grid grid-cols-7 grid-rows-2 place-items-center gap-5 ">
                {Array.from({ length: 14 }, (v, i) => i).map((item) => (
                  <Skeleton
                    variant="rectangular"
                    className="rounded-lg w-32 2xl:w-40 h-32 2xl:h-36"
                    key={item}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Slots;
