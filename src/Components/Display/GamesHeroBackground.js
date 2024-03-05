import React from "react";

function GamesHeroBackground({ img }) {
  return (
    <>
      <div className="home-one bghero-container">
        <img src={img} className="w-full h-[15rem] 2xl:h-[20rem]" />
      </div>
    </>
  );
}

export default GamesHeroBackground;
