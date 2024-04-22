import React from "react";
import Cookies from "js-cookie";

import LoginModal from "./LoginModal";
import RegisterModal from "./RegisterModal";
import OtpModal from "./OtpModal";
import ProfileMenu from "./Display/ProfileMenu";
import UserCredits from "./Display/UserCredits";
import happyLogo from "../Assets/happy-logo-footer.png";

import GameUnavailableModal from "./GameUnavailableModal";
import HamburgerMenu from "./HamburgerMenu";
import ExpiredSessionModal from "./ExpiredSessionModal";

function TopNavigation() {
  const token = Cookies.get("token");

  return (
    <>
      {token ? (
        <div className="bg-blue-200/50 h-[4rem] p-0 lg:px-10 flex flex-row-reverse sticky top-0 right-0 left-0 z-10 backdrop-blur-sm border-b border-blue-300 ">
          <GameUnavailableModal />
          <ExpiredSessionModal />
          <div className="flex lg:hidden justify-center items-center absolute left-0 h-full p-2">
            <HamburgerMenu />
          </div>
          <img
            className="object-contain w-[15%] absolute left-16 top-2 bottom-0 lg:hidden"
            src={happyLogo}
            alt="Happy Logo"
          />
          <div className="flex justify-center items-center absolute lg:left-0 right-2 lg:right-0 h-full">
            <UserCredits />
          </div>
          <div className="hidden lg:flex justify-center items-center">
            <ProfileMenu />
          </div>
        </div>
      ) : (
        <div className="bg-blue-200/50 h-[4rem] p-0 lg:px-10 flex justify-between sticky top-0 right-0 left-0 z-10 backdrop-blur-sm border-b border-blue-300">
          <img
            className="object-contain w-[15%] absolute left-16 top-3 bottom-0 lg:hidden"
            src={happyLogo}
            alt="Happy Logo"
          />
          <div className="flex lg:hidden justify-center items-center absolute lg:left-0 left-0 h-full p-2">
            <HamburgerMenu />
          </div>
          <div className="flex justify-center items-center gap-2 px-0 lg:px-5 pt-2 lg:pt-0 absolute right-2 top-0 bottom-0">
            {/* <OtpModal /> */}
            <LoginModal />
            <RegisterModal />
          </div>
        </div>
      )}
    </>
  );
}

export default TopNavigation;
