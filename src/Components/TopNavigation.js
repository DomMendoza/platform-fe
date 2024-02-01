import React from "react";
import PushableButtonAuth from "./Inputs/PushableButton.auth";
import AuthModal from "./AuthModal";
import ProfileMenu from "./Display/ProfileMenu";
import PushableButton from "./Inputs/PushableButton";

function TopNavigation() {
  return (
    <div className="bg-red-200 h-[4rem] px-10 flex flex-row-reverse sticky top-0 right-0 left-0 z-10">
      {/* <div className="flex justify-center items-center gap-2 px-5 border-2 border-red-600">
        <AuthModal type={"login"} />
        <AuthModal type={"register"} />
      </div> */}
      <div className=" flex justify-center items-center gap-2">
        <div className="border-2 border-red-600 flex">
          <div className="border-2 border-red-600 px-10 flex justify-center items-center">
            <p>120,000</p>
          </div>
          <PushableButton
            text={"Deposit"}
            eventHandler={() => console.log("Deposit")}
          />
        </div>
        <ProfileMenu />
      </div>
    </div>
  );
}

export default TopNavigation;
