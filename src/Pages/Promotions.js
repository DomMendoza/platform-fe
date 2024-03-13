import React from "react";
import GamesHeroBackground from "../Components/Display/GamesHeroBackground";
import promotionalBanner from "../Assets/promotions-banner.webp";
import Footer from "../Layouts/Footer";
import PromotionalCard from "../Components/Display/PromotionalCard";

//Assets
import dailyDeposit from "../Assets/dailyDeposit.png";
import dailyRebate from "../Assets/dailyRebate.png";
import firstDeposit from "../Assets/firstDeposit.png";

function Promotions() {
  const promoBanners = [
    {
      title: "50% Daily Reload Bonus",
      details: "Get a 50% bonus on your daily reloads.",
      img: dailyDeposit,
    },
    {
      title: "1% Daily Turnover Rebate",
      details: "Get a 1% rebate based on your daily turnover.",
      img: dailyRebate,
    },
    {
      title: "10% First Deposit Bonus",
      details: "Get a 10% bonus on your first deposit.",
      img: firstDeposit,
    },
  ];

  return (
    <div className="w-full flex flex-col gap-16 justify-center items-center bg-gradient-to-b from-white via-blue-400 to-indigo-100">
      <div className="w-full xl:px-40 h-full flex flex-col gap-5">
        <GamesHeroBackground img={promotionalBanner} />
        <div className=" flex flex-col lg:flex-row justify-between items-center gap-10 p-10">
          {promoBanners.map((item, index) => (
            <PromotionalCard
              title={item.title}
              details={item.details}
              img={item.img}
              key={index}
            />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Promotions;
