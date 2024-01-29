import React from "react";
import PushableButtonAuth from "./Inputs/PushableButton.auth";
import AuthModal from "./AuthModal";

function TopNavigation() {
  return (
    <div className="bg-red-200 h-[4rem] flex flex-row-reverse sticky top-0 right-0 left-0 z-10">
      <div className="flex justify-center items-center gap-2 px-5 border-2 border-red-600">
        <AuthModal type={"login"} />
        <AuthModal type={"register"} />
      </div>
    </div>
  );
}

export default TopNavigation;
