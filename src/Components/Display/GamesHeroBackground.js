import React from "react";

function GamesHeroBackground({ img }) {
  return (
    <>
      <div className="home-one bghero-container">
        <img
          src={img}
          className="w-full h-[10rem] md:h-[18rem] lg:h-[20rem] 2xl:h-[25rem]"
        />
      </div>
    </>
  );
}

export default GamesHeroBackground;
