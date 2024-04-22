import React from "react";
import Button from "@mui/material/Button";
import userAvatar from "../../Assets/userAvatar.png";
import totalBet from "../../Assets/totalbet.webp";
import totalProfit from "../../Assets/totalprofit.webp";
import totalDeposit from "../../Assets/deposit.webp";

//redux
import { useSelector } from "react-redux";

function PersonalInformation() {
  const { username, wallet, email, phone, birthdate } = useSelector(
    (state) => state.user
  );

  const card = [
    { image: totalBet, text: "Available Credits" },
    { image: totalDeposit, text: "Last Deposit" },
    { image: totalProfit, text: "Last Withdraw" },
  ];
  return (
    <>
      <div
        className="personal-info-container w-full h-full rounded-lg backdrop-blur-sm flex flex-col lg:flex-row justify-center items-center gap-2 xl:gap-10 xl:px-10 py-2 bg-gradient-to-b from-white to-blue-500 bg-opacity-50 font-[Poppins] "
        style={{ boxShadow: "0px 0px 20px 0px rgba(0,0,0,0.25) inset" }}
      >
        <div className="left h-full flex-1 flex lg:flex-col lg:justify-center items-center lg:gap-5 ">
          <div className="h-full w-[70%] flex flex-col justify-end items-center gap-5">
            <img
              src={userAvatar}
              className="h-[60%] xl:h-[80%] ring-offset-2 ring-4 rounded-full"
            />
            <div className="flex flex-col justify-center items-center gap-2">
              <p className="font-bold text-sm xl:text-base uppercase">
                {username}
              </p>
              <div className="flex flex-col lg:flex-row justify-center items-center gap-2">
                {/* <p className="font-bold text-sm xl:text-base">₱ {wallet} </p>
                  <DepositModalProfile /> */}
                <Button
                  variant="contained"
                  className="bg-green-600 hover:bg-green-600 text-xs"
                >
                  Deposit
                </Button>
                <Button
                  variant="outlined"
                  className="text-xs text-white border-white"
                >
                  withdraw
                </Button>
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
        {/* <div className="border-2 border-gray-800 h-[80%] rounded-full hidden lg:block" /> */}
        <div className="right w-[75%] gap-2 hidden lg:flex justify-center">
          <div className="sub-left h-full flex-1  hidden lg:block ">
            <p className="text-sm xl:text-lg 2xl:text-xl font-bold mb-2 text-nowrap">
              Personal Information:
            </p>
            <p className="text-[11px] xl:text-[12px] 2xl:text-base">
              Username: {username}
            </p>
            <p className="text-[11px] xl:text-[12px] 2xl:text-base">
              Email: {email}
            </p>
            <p className="text-[11px] xl:text-[12px] 2xl:text-base">
              Phone: {phone}
            </p>
            <p className="text-[11px] xl:text-[12px] 2xl:text-base">
              Birthdate: {birthdate}
            </p>
          </div>
          <div className="sub-right h-full w-[80%] flex gap-5 px-4 ">
            {card.map((item, index) => (
              <div
                key={index}
                className="2xl:h-[80%] flex-1 rounded-lg flex flex-col justify-center items-center backdrop-blur-lg bg-black/10 pb-5"
                style={{
                  boxShadow: "0px 0px 12px 0px rgba(0,0,0,0.25) inset",
                }}
              >
                <div className="size-16 xl:size-24 2xl:size-28 flex justify-center items-center">
                  <img src={item.image} className="h-4/5" alt={item.text} />
                </div>
                <div className="flex flex-col justify-end items-center text-white">
                  <p className="text-sm xl:text-lg font-bold">₱ {wallet}</p>
                  <p className="text-[10px] xl:text-xs">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default PersonalInformation;
