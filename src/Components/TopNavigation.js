import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";
import Hamburger from "hamburger-react";

import LoginModal from "./LoginModal";
import RegisterModal from "./RegisterModal";
import OtpModal from "./OtpModal";
import ProfileMenu from "./Display/ProfileMenu";
import UserCredits from "./Display/UserCredits";

//redux
import { useDispatch } from "react-redux";
import { setUser } from "../Slice/UserSlice";
import GameUnavailableModal from "./GameUnavailableModal";
import { HamburgerMenu } from "./HamburgerMenu";

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
    <div className="bg-indigo-100/50 h-[4rem] px-10 flex flex-row-reverse sticky top-0 right-0 left-0 z-10 backdrop-blur-sm border-b border-indigo-300">
      {token ? (
        <>
          <GameUnavailableModal />
          <div className="flex lg:hidden justify-center items-center absolute lg:left-0 left-0 h-full p-2">
            {/* <HamburgerMenu /> */}
            {/* TODO: hamburger navbar in progress */}
            <Hamburger toggled={isOpen} toggle={setOpen} />
          </div>
          <div className="flex justify-center items-center absolute lg:left-0 right-0 h-full">
            <UserCredits />
          </div>
          <div className="hidden lg:flex justify-center items-center">
            <ProfileMenu />
          </div>
        </>
      ) : (
        <div className="flex justify-center items-center gap-2 px-5">
          <OtpModal />
          <LoginModal />
          <RegisterModal />
        </div>
      )}
    </div>
  );
}

export default TopNavigation;
