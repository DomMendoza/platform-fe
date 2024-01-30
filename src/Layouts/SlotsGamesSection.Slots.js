import React from "react";
import { Button, IconButton } from "@mui/material";

//Games
import superAce from "../Assets/superAce.webp";

function SlotsGamesSection() {
  const games = [
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
    { name: "superAce", image: superAce },
    { name: "superAce", image: superAce },
    { name: "superAce", image: superAce },
    { name: "superAce", image: superAce },
    { name: "superAce", image: superAce },
  ];

  const handleButtonClick = (index) => {
    console.log("Button clicked for index:", index);
    // Add your logic here based on the index
  };

  return (
    <div className=" flex flex-col gap-5">
      <p className="text-2xl font-bold uppercase ">Slot Games</p>
      <div className="game-grid grid grid-cols-7 grid-rows-2 place-items-center gap-5 ">
        {games.map((item, index) => (
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
      </div>
    </div>
  );
}

export default SlotsGamesSection;
