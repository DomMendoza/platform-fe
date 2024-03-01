import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import PushableButton from "../../Components/Inputs/PushableButton";
import LoadGames from "../../Components/LoadGames";
import { Button } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import bingo from "../../Assets/lottery.png";

import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

//Redux
import { useSelector, useDispatch } from "react-redux";
import { handleLoginOpen } from "../../Slice/ModalSlice";
import { useGetGameProviderQuery } from "../../Slice/apiSlice";
import { setActive } from "../../Slice/EbingoSlice";
import { setGameData } from "../../Slice/EbingoSlice";
import { handleUnavailableOpen } from "../../Slice/ModalSlice";

//API
import gamesService from "../../Services/games.service";

function EbingoGames() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [limit, setLimit] = useState(13);

  const { ebingoGameData, gameData, active } = useSelector(
    (state) => state.ebingo
  );
  const user_id = useSelector((state) => state.user.uid);

  const handlePlayNow = async (gameName) => {
    const token = Cookies.get("token");

    try {
      if (token) {
        const result = await gamesService.bingoRedirect(
          gameName,
          user_id,
          token
        );
        console.log("result4: ", result.url);

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

  //INITIALIZE GAME DATA
  const { data, isLoading, isSuccess, isError, error } =
    useGetGameProviderQuery(active.link);

  useEffect(() => {
    if (isLoading) {
      console.log("loading...");
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
    <div className="container-home flex flex-col gap-5 border-2 p-4 rounded-md bg-gradient-to-b from-white via-blue-500 to-indigo-400 bg-opacity-50 text-gray-800 backdrop-blur-lg shadow-lg">
      <div className="text-container flex justify-between items-center gap-5">
        <div className="flex gap-10 items-center justify-center">
          <div className="flex justify-center items-center gap-2">
            <img
              src={bingo}
              className="h-12 transform rotate-12 animate-spin-slow"
              alt="Slot Machine"
            />
            <p className="text-2xl font-bold uppercase text-[#455983] text-shadow-lg">
              E-Bingo Games
            </p>
          </div>
          <PushableButton
            text={"View All"}
            eventHandler={() => navigate("/ebingo")}
          />
        </div>
        <div className="swiper-container w-[55%] px-10 relative">
          <Swiper
            slidesPerView={5}
            navigation={{
              nextEl: ".ebingoNext",
              prevEl: ".ebingoPrev",
            }}
            modules={[Navigation]}
          >
            {ebingoGameData.map((item, index) => (
              <SwiperSlide
                onClick={() =>
                  dispatch(
                    setActive({ provider: item.provider, link: item.link })
                  )
                }
                key={index}
              >
                <div
                  className={`flex justify-center items-center h-[5rem] rounded-lg transition duration-150 ease-out cursor-pointer ${
                    active.provider !== item.provider ? "hover:scale-125" : ""
                  }`}
                >
                  <img
                    src={item.logo}
                    className={`h-full w-full object-contain p-3 ${
                      active.provider === item.provider
                        ? "border-b-4 border-blue-600 ease-in-out duration-300"
                        : ""
                    }`}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="absolute inset-0 flex justify-between items-center">
            <div className="border-2 border-indigo-600 ebingoPrev flex justify-center items-center w-8 h-8 pl-2 rounded-full cursor-pointer">
              <ArrowBackIosIcon fontSize=".9rem" style={{ color: "#4f46e5" }} />
            </div>
            <div className="border-2 border-indigo-600 ebingoNext flex justify-center items-center w-8 h-8 rounded-full cursor-pointer">
              <ArrowForwardIosIcon
                fontSize=".9rem"
                style={{ color: "#4f46e5" }}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="game-grid grid grid-cols-7 grid-rows-2 place-items-center gap-5">
        {isSuccess ? (
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
                <Button
                  variant="contained"
                  className="bg-black hover:bg-black absolute group-hover:block hidden"
                  style={{ animation: "fadeMe 500ms" }}
                  onClick={() => handlePlayNow(item.name)}
                >
                  PLAY NOW
                </Button>
              </div>
            ))}
            {limit < gameData.length && (
              <LoadGames loadGames={() => navigate("/ebingo")} />
            )}
          </>
        ) : (
          <div className="h-[10rem] w-[10rem] border-2 border-black rounded-lg flex justify-center items-center">
            <p className="font-[Poppins]">No listed game.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default EbingoGames;
