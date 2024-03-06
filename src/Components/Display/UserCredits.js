import React, { useState, useEffect } from "react";
import pesoSign from "../../Assets/pesoSign.png";
import DepositModal from "../DepositModal";

//Socket
import { io } from "socket.io-client";

//Redux
import { useSelector, useDispatch } from "react-redux";
import { setWallet } from "../../Slice/UserSlice";

function UserCredits() {
  const dispatch = useDispatch();
  const player_id = useSelector((state) => state.user.uid);
  const wallet = useSelector((state) => state.user.wallet);

  //Get
  useEffect(() => {
    const socket = io("https://54.169.218.142", { query: { player_id } });
    socket.on("connect", () => {
      console.log("Connected to the server");
      socket.emit("getWalletBalance", player_id);
    });
    socket.on("walletBalanceUpdate", ({ wallet_balance }) => {
      dispatch(setWallet(wallet_balance));
    });

    socket.on("walletCashinUpdate", (data) => {
      console.log(data.balance);
      dispatch(setWallet(data.balance));
    });
    return () => {
      socket.disconnect();
    };
  }, [player_id]);

  return (
    <div className="relative flex justify-center items-center gap-2 h-[60%] ">
      <div className="h-full absolute rounded-lg right-0 flex justify-center items-center">
        <DepositModal />
      </div>
      <div className="bg-white rounded-lg h-full pl-5 flex justify-center items-center gap-2">
        <img src={pesoSign} className="h-[70%]" />
        <p className="pr-[7.5rem] font-[Poppins]">{wallet}</p>
      </div>
    </div>
  );
}

export default UserCredits;
