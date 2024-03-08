import React from "react";
import SideNavigation from "../Components/SideNavigation";
import { Outlet } from "react-router-dom";
import TopNavigation from "../Components/TopNavigation";

function Navigation() {
  return (
    <div className="flex">
      <div className="hidden lg:block">
        <SideNavigation />
      </div>
      <div className="flex-1 flex flex-col min-w-0 ">
        <TopNavigation />
        <Outlet />
      </div>
    </div>
  );
}

export default Navigation;
