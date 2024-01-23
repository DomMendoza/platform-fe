import React from "react";
import Carousel from "react-material-ui-carousel";

function PromotionCarousel() {
  const colors = ["blue", "green", "yellow", "red", "orange"];
  return (
    <Carousel navButtonsAlwaysInvisible interval={1500} animation="slide">
      {Array.from({ length: 5 }, (v, i) => i).map((item, index) => (
        <div
          className="w-full h-[17rem]"
          style={{ backgroundColor: colors[index] }}
          key={item}
        >
          <p className="text-5xl text-center">Item {item}</p>
        </div>
      ))}
    </Carousel>
  );
}

export default PromotionCarousel;
