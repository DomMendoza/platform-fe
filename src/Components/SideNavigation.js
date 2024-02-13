import React, { useEffect } from "react";
import PushableButtonNav from "./Inputs/PushableButton.nav";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faBasketball } from "@fortawesome/free-solid-svg-icons";
import { faDice } from "@fortawesome/free-solid-svg-icons";
import { faClover } from "@fortawesome/free-solid-svg-icons";
import { faGift } from "@fortawesome/free-solid-svg-icons";
import { faCheckToSlot } from "@fortawesome/free-solid-svg-icons";

function SideNavigation() {
  const navLinks = [
    {
      name: "Home",
      link: "/",
      icon: <FontAwesomeIcon icon={faHouse} />,
    },
    {
      name: "Slots",
      link: "/slots",
      icon: <FontAwesomeIcon icon={faCheckToSlot} />,
    },
    {
      name: "Casino",
      link: "/casino",
      icon: <FontAwesomeIcon icon={faClover} />,
    },
    {
      name: "E-Bingo",
      link: "/ebingo",
      icon: <FontAwesomeIcon icon={faDice} />,
    },
    {
      name: "Sports",
      link: "/sports",
      icon: <FontAwesomeIcon icon={faBasketball} />,
    },
    {
      name: "Promotions",
      link: "/promotions",
      icon: <FontAwesomeIcon icon={faGift} />,
    },
  ];

  const promotions = [
    {
      name: "Promo",
      description: "Lorem ipsum dolor",
      icon: <CardGiftcardIcon style={{ fontSize: "1.6rem" }} />,
    },
    {
      name: "Promo",
      description: "Lorem ipsum dolor",
      icon: <CardGiftcardIcon style={{ fontSize: "1.6rem" }} />,
    },
    {
      name: "Promo",
      description: "Lorem ipsum dolor",
      icon: <CardGiftcardIcon style={{ fontSize: "1.6rem" }} />,
    },
  ];

  return (
    <div className="w-[15rem] flex flex-col justify-between h-screen sticky top-0 left-0 right-0 bg-blue-200 ">
      <div className="flex flex-col gap-5 p-6 border-2 border-blue-600">
        <div className="logo border-2 border-red-600 h-[4rem] rounded-lg">
          logo
        </div>
        <div className="promo-nav flex flex-col gap-10">
          <div className="promo-container flex flex-col gap-1 ">
            {promotions.map((item, index) => (
              <div
                className="w-full flex-1 flex gap-2 py-1 px-2 justify-center items-center border-2 border-blue-600 rounded-lg"
                key={index}
              >
                <div className="icon-container">
                  {/* <CardGiftcardIcon style={{ fontSize: "2rem" }} /> */}
                  {item.icon}
                </div>
                <div className="flex-1 text-container">
                  <p className="text-sm font-bold capitalize">
                    {item.name} {index + 1}
                  </p>
                  <p className="text-[.7rem]">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="nav-container flex flex-col gap-3 ">
            {navLinks.map((item, index) => (
              <PushableButtonNav
                key={index}
                text={item.name}
                link={item.link}
                icon={item.icon}
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
