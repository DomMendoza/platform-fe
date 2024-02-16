import React, { useEffect, useState } from "react";
import { Button, IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import gamesService from "../../Services/games.service";

//Redux
import { useSelector, useDispatch } from "react-redux";
import { handleLoginOpen } from "../../Slice/ModalSlice";

function CasinoGamesSection() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const providerData = useSelector((state) => state.casino.providerData);

  const [limit, setLimit] = useState(13);
  const user_id = useSelector((state) => state.user.uid);

  const handlePlayNow = async (gameName) => {
    const token = Cookies.get("token");

    if (token) {
      const result = await gamesService.bingoRedirect(gameName, user_id, token);
      console.log("result: ", result.url);
      navigate("/redirect", { state: { url: result.url } });
    } else {
      dispatch(handleLoginOpen());
      console.log("No token.");
    }
  };

  return (
    <div className=" flex flex-col gap-5">
      <p className="text-2xl font-bold uppercase ">Casino Games</p>
      <div className="game-grid grid grid-cols-7 grid-rows-2 place-items-center gap-5 ">
        {providerData.games.slice(0, limit).map((item, index) => (
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
        {limit < providerData.games.length ? (
          <div
            className="bg-red-400 w-full h-full rounded-lg shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] cursor-pointer"
            onClick={() => setLimit(limit + 14)}
          >
            <div className="w-full h-full flex flex-col justify-center items-center gap-2 rounded-lg">
              <div className="flex justify-center items-center gap-2">
                <div className="bg-white rounded-full w-3 h-3"></div>
                <div className="bg-white rounded-full w-3 h-3"></div>
                <div className="bg-white rounded-full w-3 h-3"></div>
              </div>
              <p className="font-bold text-lg font-[Poppins] text-white">
                More
              </p>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default CasinoGamesSection;
