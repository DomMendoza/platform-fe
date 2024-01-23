import React from "react";
import PromotionCarousel from "../Components/Display/PromotionCarousel";

function Home() {
  return (
    <div className="h-[100rem] flex flex-col justify-center items-center bg-green-200">
      <div className="w-[80%] h-full border-2 border-red-600">
        <div className="border-2 border-green-600">
          <PromotionCarousel />
        </div>
      </div>
    </div>
  );
}

export default Home;
