import React from "react";

function SideNavigation() {
  return (
    <div className="w-[10%] flex flex-col justify-between h-screen sticky top-0 left-0 right-0 bg-blue-200 ">
      <div className="flex flex-col gap-10 p-4 border-2 border-blue-600">
        <div className="logo border-2 border-red-600 h-[4rem]">logo</div>
        <div className="promo-nav flex flex-col gap-5">
          <div className="promo-container h-[14rem] border-2 border-red-600">
            promotion
          </div>
          <div className="nav-container h-[14rem] border-2 border-red-600">
            navigations
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-10 p-4 border-2 border-blue-600">
        <div className="logo border-2 border-red-600 h-[4rem]">footer</div>
      </div>
    </div>
  );
}

export default SideNavigation;
