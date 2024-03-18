import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";

import LoginModal from "./LoginModal";
import RegisterModal from "./RegisterModal";
import OtpModal from "./OtpModal";
import ProfileMenu from "./Display/ProfileMenu";
import UserCredits from "./Display/UserCredits";
import happyLogo from "../Assets/happy-logo-footer.png";

//redux
import { useDispatch } from "react-redux";
import { setUser } from "../Slice/UserSlice";
import GameUnavailableModal from "./GameUnavailableModal";
import HamburgerMenu from "./HamburgerMenu";

function TopNavigation() {
  const token = Cookies.get("token");
  const [isOpen, setOpen] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const checkTokenAndSetUser = () => {
      if (token) {
        try {
          const decodedToken = jwtDecode(token);

          const {
            uid,
            username,
            email,
            phone,
            user_type,
            birthdate,
            referral_token,
          } = decodedToken;

          dispatch(
            setUser({
              uid,
              username,
              email,
              phone,
              user_type,
              birthdate,
              referral_token,
            })
          );
        } catch (error) {
          console.error("Error decoding token:", error);
        }
      }
    };
    checkTokenAndSetUser();
  }, []);

  return (
    <>
      {token ? (
        <div className="bg-blue-200/50 h-[4rem] p-0 lg:px-10 flex flex-row-reverse sticky top-0 right-0 left-0 z-10 backdrop-blur-sm border-b border-blue-300 ">
          <GameUnavailableModal />
          <div className="flex lg:hidden justify-center items-center absolute lg:left-0 left-0 h-full p-2">
            <HamburgerMenu />
          </div>
          <div className="flex justify-center items-center absolute lg:left-0 right-2 lg:right-0 h-full">
            <UserCredits />
          </div>
          <div className="hidden lg:flex justify-center items-center">
            <ProfileMenu />
          </div>
        </div>
      ) : (
        <div className="bg-blue-200/50 h-[4rem] p-0 lg:px-10 flex justify-between sticky top-0 right-0 left-0 z-10 backdrop-blur-sm border-b border-blue-300">
          {/* <img
            className="object-contain w-[15%] absolute left-2 top-3 bottom-0 lg:hidden"
            src={happyLogo}
            alt="Happy Logo"
          /> */}
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
