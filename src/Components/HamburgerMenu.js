import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Hamburger from "hamburger-react";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import happyLogo from "../Assets/happy-logo-footer.png";
import PushableButtonNav from "./Inputs/PushableButton.nav";
import Cookies from "js-cookie";
import userAvatar from "../Assets/userAvatar.png";
import { useNavigate } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faBasketball } from "@fortawesome/free-solid-svg-icons";
import { faDice } from "@fortawesome/free-solid-svg-icons";
import { faClover } from "@fortawesome/free-solid-svg-icons";
import { faGift } from "@fortawesome/free-solid-svg-icons";
import { faCheckToSlot } from "@fortawesome/free-solid-svg-icons";
import { Button } from "@mui/material";

//redux
import { useSelector } from "react-redux";

const navLinks = [
  {
    name: "Home",
    link: "/",
    icon: <FontAwesomeIcon icon={faHouse} />,
  },
  // {
  //   name: "Slots",
  //   link: "/slots",
  //   icon: <FontAwesomeIcon icon={faCheckToSlot} />,
  // },
  // {
  //   name: "Casino",
  //   link: "/casino",
  //   icon: <FontAwesomeIcon icon={faClover} />,
  // },
  {
    name: "E-Bingo",
    link: "/ebingo",
    icon: <FontAwesomeIcon icon={faDice} />,
  },
  // {
  //   name: "Sports",
  //   link: "/sports",
  //   icon: <FontAwesomeIcon icon={faBasketball} />,
  // },
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

export default function HamburgerMenu() {
  const navigate = useNavigate();
  const { username } = useSelector((state) => state.user);
  const [open, setOpen] = React.useState(false);
  const token = Cookies.get("token");

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const handleLogout = () => {
    Cookies.set("token", "", { expires: new Date(0) });
    Cookies.set("player_id", "", { expires: new Date(0) });
    window.location.reload();
  };

  const DrawerList = (
    <Box
      role="presentation"
      className="w-[280px] h-screen "
      onClick={toggleDrawer(false)}
    >
      <div className="bg-blue-100 w-full h-full px-3 py-6 flex flex-col justify-between">
        <div className="flex flex-col gap-5 p-4">
          <div className="promo-nav flex flex-col gap-5">
            <div className="promo-container flex flex-col gap-4 p-1">
              <div className="size-20">
                <img
                  src={userAvatar}
                  className="h-full ring-offset-2 ring-4 rounded-full"
                />
              </div>
              <div className="font-[Poppins]">
                <p className="text-lg font-bold">Josh Mojica</p>
                <p
                  className="text-sm underline cursor-pointer"
                  onClick={() => navigate(`/profile/${username}`)}
                >
                  view profile
                </p>
              </div>
            </div>
            <div className="border-[1px] border-gray-400" />
            <div className="nav-container flex flex-col gap-2">
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
        <div className=" p-4 space-y-5">
          <div className="promo-container flex flex-col gap-1 ">
            {promotions.map((item, index) => (
              <div
                className="w-full flex-1 flex gap-2 py-1 px-2 justify-center items-center border-[1px] border-blue-600 rounded-lg cursor-pointer"
                key={index}
              >
                <div className="icon-container">{item.icon}</div>
                <div className="flex-1 text-container">
                  <p className="text-sm font-bold capitalize">
                    {item.name} {index + 1}
                  </p>
                  <p className="text-[.7rem]">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
          {token && (
            <div className="w-full flex justify-center items-center">
              <Button variant="outlined" onClick={handleLogout}>
                Logout
              </Button>
            </div>
          )}
        </div>
      </div>
    </Box>
  );

  //Close the menu at desktop resolution
  React.useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 768px)");
    const handleResize = () => {
      if (mediaQuery.matches) {
        setOpen(false);
      }
    };
    mediaQuery.addEventListener("change", handleResize);
    return () => mediaQuery.removeEventListener("change", handleResize);
  }, []);

  return (
    <div>
      <Hamburger toggled={open} toggle={toggleDrawer(true)} size={25} />
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}
