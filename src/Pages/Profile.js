import React from "react";
import userAvatar from "../Assets/userAvatar.png";
import backgroundPattern from "../Assets/background_pattern.webp";
import totalBet from "../Assets/totalbet.webp";
import totalProfit from "../Assets/totalprofit.webp";
import totalDeposit from "../Assets/deposit.webp";
import AddIcon from "@mui/icons-material/Add";
import { IconButton } from "@mui/material";

//redux
import { useSelector } from "react-redux";
import DepositModalProfile from "../Components/DepositModalProfile";

function Profile() {
  const { username, wallet, email, phone, birthdate } = useSelector(
    (state) => state.user
  );

  const card = [
    { image: totalBet, text: "Total Bet" },
    { image: totalDeposit, text: "Total Deposit" },
    { image: totalProfit, text: "Total Profit" },
  ];

  return (
    <div className="h-full flex flex-col gap-16 justify-center items-center relative ">
      <img
        src={backgroundPattern}
        alt="Picture"
        className="absolute inset-0 w-full h-full object-cover -z-10 grayscale-[50%]"
      />
      <div className="absolute inset-0 w-full h-full object-cover -z-10 bg-gradient-to-b from-indigo-100 via-blue-400 to-white opacity-65" />

      <div className="profile-container w-[90%] h-[90%] lg:h-[85%] rounded-lg font-[Poppins] flex flex-col gap-2 lg:gap-10">
        <div
          className="personal-info-container w-full h-[30%] rounded-lg backdrop-blur-sm flex flex-col lg:flex-row justify-center items-center divide-x-4 divide-black gap-2 lg:px-10 py-2 bg-gradient-to-b from-white via-blue-500 to-indigo-400 bg-opacity-50"
          style={{ boxShadow: "0px 0px 20px 0px rgba(0,0,0,0.25) inset" }}
        >
          <div className="left h-full w-full lg:w-[25%] flex lg:flex-col lg:justify-center items-center lg:gap-5">
            <div className="h-full w-[70%] flex flex-col justify-end items-center gap-5">
              <img
                src={userAvatar}
                className="h-[60%] lg:h-[80%] ring-offset-2 ring-4 rounded-full"
              />
              <div className="flex flex-col justify-center items-center">
                <p className="font-bold text-sm lg:text-xl uppercase">
                  {username}
                </p>
                <div className="flex justify-center items-center gap-1">
                  <p className="font-bold text-sm lg:text-lg">₱ {wallet} </p>
                  <DepositModalProfile />
                </div>
              </div>
            </div>
            <div className="sub-left w-full lg:hidden">
              <p className="font-bold mb-2">Personal Information:</p>
              <p className="text-xs">Username: {username}</p>
              <p className="text-xs">Email: {email}</p>
              <p className="text-xs">Phone: {phone}</p>
              <p className="text-xs">Birthdate: {birthdate}</p>
            </div>
          </div>
          <div className="right h-full flex-1 gap-2 hidden lg:flex">
            <div className="sub-left h-full w-[35%] p-5 hidden lg:block">
              <p className="text-xl font-bold mb-2">Personal Information:</p>
              <p className="">Username: {username}</p>
              <p className="">Email: {email}</p>
              <p className="">Phone: {phone}</p>
              <p className="">Birthdate: {birthdate}</p>
            </div>
            <div className="sub-right h-full flex-1 flex justify-center items-center gap-5 px-4 ">
              {card.map((item, index) => (
                <div
                  key={index}
                  className="h-[80%] flex-1 rounded-lg flex flex-col justify-between items-center backdrop-blur-lg bg-black/10 pb-5"
                  style={{
                    boxShadow: "0px 0px 12px 0px rgba(0,0,0,0.25) inset",
                  }}
                >
                  <div className="size-28 flex justify-center items-center">
                    <img src={item.image} className="h-full" alt={item.text} />
                  </div>
                  <div className="flex flex-col justify-end items-center text-white">
                    <p className="text-lg font-bold">₱ {wallet}</p>
                    <p className="text-sm">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex lg:hidden justify-center items-center gap-5">
          {card.map((item, index) => (
            <div
              key={index}
              className="h-[80%] flex-1 rounded-lg flex flex-col justify-between items-center backdrop-blur-lg bg-black/10 pb-10"
              style={{
                boxShadow: "0px 0px 12px 0px rgba(0,0,0,0.25) inset",
              }}
            >
              <div className="size-16 flex justify-center items-center">
                <img src={item.image} className="h-full" alt={item.text} />
              </div>
              <div className="flex flex-col justify-end items-center text-white">
                <p className="text-xs font-bold">₱ {wallet}</p>
                <p className="text-xs">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
        <div
          className="table-container border-[1px] flex-1 backdrop-blur-[5px] bg-white/5 rounded-lg"
          style={{ boxShadow: "0px 0px 20px 0px rgba(0,0,0,0.25) inset" }}
        ></div>
      </div>
    </div>
  );
}

export default Profile;
