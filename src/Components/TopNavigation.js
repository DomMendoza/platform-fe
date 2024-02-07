import React, { useEffect } from "react";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";

import LoginModal from "./LoginModal";
import ProfileMenu from "./Display/ProfileMenu";
import UserCredits from "./Display/UserCredits";

//redux
import { useDispatch } from "react-redux";
import { setUser } from "../Slice/UserSlice";
import RegisterModal from "./RegisterModal";

function TopNavigation() {
  const token = Cookies.get("token");
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
    <div className="bg-red-200 h-[4rem] px-10 flex flex-row-reverse sticky top-0 right-0 left-0 z-10 ">
      {token ? (
        <>
          <div className="flex justify-center items-center absolute left-0 right-0 h-full">
            <UserCredits />
          </div>
          <div className=" flex justify-center items-center">
            <ProfileMenu />
          </div>
        </>
      ) : (
        <div className="flex justify-center items-center gap-2 px-5 border-2 border-red-600">
          <LoginModal />
          <RegisterModal />
        </div>
      )}
    </div>
  );
}

export default TopNavigation;
