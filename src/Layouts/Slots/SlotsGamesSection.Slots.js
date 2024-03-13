import React, { useEffect, useState } from "react";
import { Button, IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import gamesService from "../../Services/games.service";
import LoadGames from "../../Components/LoadGames";
import slotMachine from "../../Assets/slot-machine.png";

//Redux
import { useSelector, useDispatch } from "react-redux";
import { handleLoginOpen } from "../../Slice/ModalSlice";
import { setGameData } from "../../Slice/SlotSlice";
import { useGetGameProviderQuery } from "../../Slice/apiSlice";
import { handleUnavailableOpen } from "../../Slice/ModalSlice";

function SlotsGamesSection() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { gameData, active } = useSelector((state) => state.slots); //load games
  const user_id = useSelector((state) => state.user.uid);

  const [limit, setLimit] = useState(13);

  useEffect(() => {
    const updateLimit = () => {
      const newLimit = window.innerWidth < 1024 ? 8 : 13;
      setLimit(newLimit);
    };

    updateLimit();

    window.addEventListener("resize", updateLimit);

    return () => {
      window.removeEventListener("resize", updateLimit);
    };
  }, []);

  const handlePlayNow = async (gameName) => {
    const token = Cookies.get("token");

    try {
      if (token) {
        const result = await gamesService.bingoRedirect(
          gameName,
          user_id,
          token
        );
        console.log("result6: ", result.url);

        console.log(result.data);
        navigate("/redirect", { state: { url: result.url } });
      } else {
        dispatch(handleLoginOpen());
        console.log("No token.");
      }
    } catch (error) {
      dispatch(handleUnavailableOpen());
    }
  };

  //INITIALIZE SELECTED GAMEDATA
  const { data, isLoading, isSuccess, isError, error } =
    useGetGameProviderQuery(active.link);

  useEffect(() => {
    if (isLoading) {
      // console.log("loading...");
    } else if (isSuccess) {
      if (active.provider === "dg") {
        const transformedData = Object.values(data.data).reduce(
          (acc, val) => acc.concat(val),
          []
        );
        dispatch(setGameData(transformedData));
      } else {
        const transformedData = Object.values(data.data).reduce(
          (acc, val) => acc.concat(val),
          []
        );
        dispatch(setGameData(transformedData));
      }
    } else if (isError) {
      console.log(error);
    }
  }, [data, isLoading, isSuccess, isError, error]);

  return (
    <div className="flex flex-col gap-5 bg-gradient-to-b p-4 lg:p-8 rounded-lg from-white via-blue-500 to-indigo-400 bg-opacity-50 text-gray-800 backdrop-blur-lg shadow-lg">
      <div className="flex justify-center items-center gap-2">
        <img
          src={slotMachine}
          className="h-12 transform rotate-12 animate-spin-slow"
          alt="Slot Machine"
        />
        <p className="text-2xl font-bold uppercase text-[#455983] text-shadow-lg">
          Slot Games
        </p>
      </div>
      <div className="game-grid grid grid-cols-3 lg:grid-cols-7 lg:grid-rows-2 place-items-center gap-5 ">
        {gameData.slice(0, limit).map((item, index) => (
          <div
            key={index}
            className="group flex justify-center items-center relative "
          >
            <img
              src={`https://uat.888bingo.ph/${item.icon.bg}`}
              className="group-hover:brightness-75 duration-300 ease-in-out"
            />
            <img
              src={`https://uat.888bingo.ph/${item.icon.logo}`}
              className="group-hover:brightness-75 duration-300 ease-in-out absolute w-[75%]"
            />
            <Button
              variant="contained"
              className="bg-black hover:bg-black absolute group-hover:block hidden text-xs lg:text-base"
              style={{ animation: "fadeMe 500ms" }}
              onClick={() => handlePlayNow(item.name)}
            >
              PLAY NOW
            </Button>
          </div>
        ))}
        {limit < gameData.length && (
          <LoadGames loadGames={() => setLimit(limit + 14)} />
        )}
      </div>
    </div>
  );
}

export default SlotsGamesSection;
