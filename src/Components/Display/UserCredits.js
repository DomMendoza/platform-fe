import React from "react";
import PushableButton from "../Inputs/PushableButton";
import pesoSign from "../../Assets/pesoSign.png";

//redux
import { useSelector } from "react-redux";

function UserCredits() {
  const userCredits = useSelector((state) => state.user.credits);
  return (
    <div className="relative flex justify-center items-center gap-2 h-[60%] ">
      <div className="h-full absolute rounded-lg right-0 flex justify-center items-center">
        <PushableButton
          text={"Deposit"}
          eventHandler={() => console.log("Deposit")}
        />
      </div>
      <div className="bg-white rounded-lg h-full pl-5 flex justify-center items-center gap-2">
        <img src={pesoSign} className="h-[70%]" />
        <p className="pr-[7.5rem] font-[Poppins]">{userCredits}</p>
      </div>
    </div>
  );
}

export default UserCredits;
