import React, { useEffect, useState } from "react";
import { Button, IconButton } from "@mui/material";

//Redux
import { useSelector } from "react-redux";

function CasinoGamesSection() {
  const providerData = useSelector((state) => state.casino.providerData);

  const [limit, setLimit] = useState(13);

  const handleButtonClick = (index) => {
    console.log("Button clicked for index:", index);
  };

  return (
    <div className=" flex flex-col gap-5">
      <p className="text-2xl font-bold uppercase ">Casino Games</p>
      <div className="game-grid grid grid-cols-7 grid-rows-2 place-items-center gap-5 ">
        {providerData.games.slice(0, limit).map((item, index) => (
          <div
            key={index}
            className="group rounded-lg shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] flex justify-center items-center relative"
          >
            <img
              src={item.image}
              className="w-full h-full object-contain rounded-lg group-hover:brightness-50 duration-300 ease-in-out"
            />
            <Button
              variant="contained"
              className="bg-black hover:bg-black absolute group-hover:block hidden "
              onClick={() => handleButtonClick(index)}
              style={{ animation: "fadeMe 500ms" }}
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
