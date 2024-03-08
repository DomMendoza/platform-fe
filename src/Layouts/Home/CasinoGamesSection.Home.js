import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import PushableButton from "../../Components/Inputs/PushableButton";
import LoadGames from "../../Components/LoadGames";
import { Button } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import casino from "../../Assets/poker-cards.png";

import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

//Redux
import { useSelector, useDispatch } from "react-redux";
import { handleLoginOpen } from "../../Slice/ModalSlice";
import { useGetGameProviderQuery } from "../../Slice/apiSlice";
import { setActive } from "../../Slice/CasinoSlice";
import { setGameData } from "../../Slice/CasinoSlice";
import { handleUnavailableOpen } from "../../Slice/ModalSlice";

//API
import gamesService from "../../Services/games.service";

function CasinoGames() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [limit, setLimit] = useState(13);

  //make limit to 8 on mobile res
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

  const { casinoGameData, gameData, active } = useSelector(
    (state) => state.casino
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
        console.log("result3: ", result.url);

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
    <div className="container-home flex flex-col gap-2 lg:gap-5 border-2 p-5 lg:p-8 rounded-2xl bg-gradient-to-b from-white via-blue-500 to-indigo-400 bg-opacity-50 text-gray-800 backdrop-blur-lg shadow-lg">
      <div className="text-container flex flex-col lg:flex-row justify-between items-center lg:gap-5 ">
        <div className="flex gap-10 items-center justify-between lg:justify-start w-full lg:w-auto ">
          <div className="flex justify-center items-center gap-2 ">
            <img
              src={casino}
              className="h-10 lg:h-12 transform rotate-12 animate-spin-slow"
              alt="Casino"
            />
            <p className="text-sm 2xl:text-2xl font-bold uppercase text-[#455983] text-shadow-lg">
              Casino Games
            </p>
          </div>
          <PushableButton
            text={"View All"}
            eventHandler={() => navigate("/casino")}
          />
        </div>
        <div className="swiper-container w-full lg:w-[20rem] 2xl:w-[35rem] px-5 lg:px-10 relative ">
          <Swiper
            breakpoints={{
              375: {
                slidesPerView: 3,
              },
              768: {
                slidesPerView: 4,
              },
            }}
            navigation={{
              nextEl: ".slotNext",
              prevEl: ".slotPrev",
            }}
            modules={[Navigation]}
          >
            {casinoGameData.map((item, index) => (
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
                    className={`h-full w-16 md:w-20 lg:w-full object-contain p-0 lg:p-3 ${
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
            <div className="slotPrev flex justify-center items-center w-8 h-8 pl-2 rounded-full cursor-pointer">
              <ArrowBackIosIcon fontSize=".9rem" style={{ color: "#4f46e5" }} />
            </div>
            <div className="slotNext flex justify-center items-center w-8 h-8 rounded-full cursor-pointer">
              <ArrowForwardIosIcon
                fontSize=".9rem"
                style={{ color: "#4f46e5" }}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="game-grid grid grid-cols-3 lg:grid-cols-5 xl:grid-cols-7 place-items-center gap-5 ">
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
              <LoadGames loadGames={() => navigate("/casino")} />
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

export default CasinoGames;
