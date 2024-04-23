import React, { useEffect, useState } from "react";
import LoadGames from "../../Components/LoadGames";
import casino from "../../Assets/poker-cards.png";
import PlayNowButton from "../../Components/PlayNowButton";
import { Skeleton } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";

//Redux
import { useSelector, useDispatch } from "react-redux";
import { setGameData } from "../../Slice/CasinoSlice";
import { useGetGameProviderQuery } from "../../Slice/apiSlice";

function CasinoGamesSection() {
  const dispatch = useDispatch();

  const { gameData, active } = useSelector((state) => state.casino); //load games

  const isDesktop = useMediaQuery("(min-width:1024px)");
  const [limit, setLimit] = useState(isDesktop ? 13 : 8);

  //INITIALIZE SELECTED GAMEDATA
  const { data, isLoading, isSuccess, isError, error } =
    useGetGameProviderQuery(active.link);

  useEffect(() => {
    if (isLoading) {
      // console.log("loading...");
    } else if (isSuccess) {
      const transformedData = Object.values(data.data).reduce(
        (acc, val) => acc.concat(val),
        []
      );
      dispatch(setGameData(transformedData));
    } else if (isError) {
      console.log(error);
    }
  }, [data, isLoading, isSuccess, isError, error]);

  return (
    <div className="flex flex-col gap-5 bg-gradient-to-b p-4 lg:p-8 rounded-lg from-white via-blue-500 to-indigo-400 bg-opacity-50 text-gray-800 backdrop-blur-lg shadow-lg">
      <div className="flex justify-center items-center gap-2">
        <img
          src={casino}
          className="h-12 transform rotate-12 animate-spin-slow"
          alt="Slot Machine"
        />
        <p className="text-2xl font-bold uppercase text-[#455983] text-shadow-lg">
          Casino Games
        </p>
      </div>
      <div className="game-grid grid grid-cols-3 lg:grid-cols-5 xl:grid-cols-7 place-items-center gap-5 ">
        {isSuccess ? (
          gameData.length > 0 ? (
            <>
              {gameData.slice(0, limit).map((item, index) => (
                <div
                  key={index}
                  className="group flex justify-center items-center relative"
                >
                  <img
                    src={`https://uat.888bingo.ph/${item.icon.bg}`}
                    className="group-hover:brightness-75 duration-300 ease-in-out"
                  />
                  <img
                    src={`https://uat.888bingo.ph/${item.icon.logo}`}
                    className="group-hover:brightness-75 duration-300 ease-in-out absolute w-[75%]"
                  />
                  <PlayNowButton
                    text={"PLAY NOW"}
                    eventHandler={item.name}
                    className="absolute group-hover:block hidden text-xs lg:text-base"
                  />
                </div>
              ))}
              {limit < gameData.length && (
                <LoadGames loadGames={() => setLimit(limit + 14)} />
              )}
            </>
          ) : (
            <div className="h-[10rem] w-[10rem] border-2 border-black rounded-lg flex justify-center items-center">
              <p className="font-[Poppins]">No listed game.</p>
            </div>
          )
        ) : isError ? (
          <p className="text-xl font-bold font-['Poppins']">Coming soon.</p>
        ) : (
          Array.from(
            { length: window.innerWidth < 768 ? 6 : 14 },
            (v, i) => i
          ).map((item) => (
            <Skeleton
              variant="rounded"
              className="h-[7rem] lg:h-[10rem] w-[7rem] lg:w-[10rem] rounded-lg"
              key={item}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default CasinoGamesSection;
