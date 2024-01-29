import React from "react";
import SideNavigation from "../Components/SideNavigation";
import { Outlet } from "react-router-dom";
import TopNavigation from "../Components/TopNavigation";

function Navigation() {
  return (
    <div className="flex border-2 border-red-600">
      <SideNavigation />
      <div className="flex-1 flex flex-col border-2 border-red-600">
        <TopNavigation />
        <Outlet />
      </div>
    </div>
  );
}

export default Navigation;
