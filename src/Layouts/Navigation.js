import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";
import SideNavigation from "../Components/SideNavigation";
import { Outlet } from "react-router-dom";
import TopNavigation from "../Components/TopNavigation";

//redux
import { useDispatch } from "react-redux";
import { setUser } from "../Slice/UserSlice";

function Navigation() {
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
    <div className="flex">
      <div className="hidden lg:block">
        <SideNavigation />
      </div>
      <div className="flex-1 flex flex-col min-w-0 min-h-screen">
        <TopNavigation />
        <Outlet />
      </div>
    </div>
  );
}

export default Navigation;
