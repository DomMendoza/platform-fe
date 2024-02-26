import React from "react";

function LoadGames({ loadGames }) {
  return (
    <div className=" w-full h-full py-[12%]">
      <div
        className="bg-red-400 w-full h-full rounded-2xl cursor-pointer "
        onClick={loadGames}
      >
        <div className="w-full h-full flex flex-col justify-center items-center gap-2 rounded-lg">
          <div className="flex justify-center items-center gap-2">
            <div className="bg-white rounded-full w-3 h-3"></div>
            <div className="bg-white rounded-full w-3 h-3"></div>
            <div className="bg-white rounded-full w-3 h-3"></div>
          </div>
          <p className="font-bold text-lg font-[Poppins] text-white">More</p>
        </div>
      </div>
    </div>
  );
}

export default LoadGames;
