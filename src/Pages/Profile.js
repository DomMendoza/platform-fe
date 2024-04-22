import React from "react";
import backgroundPattern from "../Assets/background_pattern.webp";

//assets
import totalBet from "../Assets/totalbet.webp";
import totalProfit from "../Assets/totalprofit.webp";
import totalDeposit from "../Assets/deposit.webp";

//redux
import { useSelector } from "react-redux";

//components
import PersonalInformation from "../Components/Display/PersonalInformation";
import ProfileProgress from "../Components/Display/ProfileProgress";
import BetHistory from "../Components/Table/BetHistory";
import AccountHistory from "../Components/Table/AccountHistory";

function Profile() {
  const { wallet } = useSelector((state) => state.user);

  const card = [
    { image: totalBet, text: "Available Credits" },
    { image: totalDeposit, text: "Last Deposit" },
    { image: totalProfit, text: "Last Withdraw" },
  ];

  return (
    <div className="h-full flex flex-col gap-3 lg:gap-5 items-center relative py-14 lg:py-20">
      <img
        src={backgroundPattern}
        alt="Picture"
        className="absolute inset-0 w-full h-full object-cover -z-10 grayscale-[50%]"
      />
      <div className="absolute inset-0 w-full h-full object-cover -z-10 bg-gradient-to-b from-indigo-100 via-blue-400 to-white opacity-65" />

      <div className="personal-info-container w-[90%] h-[12rem] xl:h-[15rem]">
        <PersonalInformation />
      </div>

      {/* mobile res only >>>>>>>>>>>>>>>>> */}
      <div className="flex lg:hidden justify-center items-center gap-5 w-[90%]">
        {card.map((item, index) => (
          <div
            key={index}
            className="h-[80%] flex-1 rounded-lg flex flex-col justify-between items-center backdrop-blur-lg bg-black/10 pb-10"
            style={{
              boxShadow: "0px 0px 12px 0px rgba(0,0,0,0.25) inset",
            }}
          >
            <div className="size-12 flex justify-center items-center">
              <img src={item.image} className="h-full" alt={item.text} />
            </div>
            <div className="flex flex-col justify-end items-center text-white">
              <p className="text-xs font-bold">₱ {wallet}</p>
              <p className="text-xs">{item.text}</p>
            </div>
          </div>
        ))}
      </div>
      {/* mobile res only <<<<<<<<<<<<<<<<< */}

      <div className="profile-progress-container w-[90%] h-[10rem] lg:h-[8rem]">
        <ProfileProgress />
      </div>
      <div className="Bet-History w-[90%] h-[25rem] lg:h-[30rem]">
        <BetHistory />
      </div>
      <div className="Account-History w-[90%] h-[25rem] lg:h-[30rem]">
        <AccountHistory />
      </div>
    </div>
  );
}

export default Profile;
