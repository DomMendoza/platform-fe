import React, { useState, useEffect } from "react";
import pesoSign from "../../Assets/pesoSign.png";
import DepositModal from "../DepositModal";
import Cookies from "js-cookie";

//Socket
import { io } from "socket.io-client";

//Redux
import { useSelector, useDispatch } from "react-redux";
import { setWallet } from "../../Slice/UserSlice";
import { handleExpiredSessionOpen } from "../../Slice/ModalSlice";

function UserCredits() {
  const dispatch = useDispatch();
  const player_id = useSelector((state) => state.user.uid);
  const wallet = useSelector((state) => state.user.wallet);

  const baseURL = process.env.REACT_APP_API_URL;

  //Get
  useEffect(() => {
    const socket = io(baseURL, { query: { player_id } });
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

    socket.on("logoutSession", () => {
      Cookies.set("token", "", { expires: new Date(0) });
      Cookies.set("player_id", "", { expires: new Date(0) });
      dispatch(handleExpiredSessionOpen());
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
      <div className="bg-white rounded-lg h-full pl-3 lg:pl-5 mr-2 lg:mr-0 flex justify-center items-center gap-2">
        <img src={pesoSign} className="h-[60%] lg:h-[70%]" />
        <p className="pr-[5rem] lg:pr-[8.5rem] font-[Poppins] text-sm lg:text-base">
          {wallet}
        </p>
      </div>
    </div>
  );
}

export default UserCredits;
