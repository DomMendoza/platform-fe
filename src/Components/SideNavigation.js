import React, { useEffect } from "react";
import PushableButtonNav from "./Inputs/PushableButton.nav";

function SideNavigation() {
  const navLinks = [
    { name: "Home", link: "/" },
    { name: "Bingo", link: "/bingo" },
    { name: "Slots", link: "/slots" },
    { name: "Casino", link: "/casino" },
    { name: "Promotions", link: "/promotions" },
  ];

  // useEffect(() => {
  //   console.log(window.location.pathname);
  // }, [window.location.pathname]);

  return (
    <div className="w-[11rem] flex flex-col justify-between h-screen sticky top-0 left-0 right-0 bg-blue-200 ">
      <div className="flex flex-col gap-10 p-4 border-2 border-blue-600">
        <div className="logo border-2 border-red-600 h-[4rem]">logo</div>
        <div className="promo-nav flex flex-col gap-5">
          <div className="promo-container h-[14rem] border-2 border-red-600">
            promotion
          </div>
          <div className="nav-container flex flex-col gap-3 border-2 border-red-600">
            {navLinks.map((item, index) => (
              <PushableButtonNav
                key={index}
                text={item.name}
                link={item.link}
              />
            ))}
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
