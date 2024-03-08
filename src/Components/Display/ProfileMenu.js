import React, { useEffect } from "react";
import Cookies from "js-cookie";

import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import LogoutIcon from "@mui/icons-material/Logout";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Person2Icon from "@mui/icons-material/Person2";
import userAvatar from "../../Assets/userAvatar.png";

//redux
import { useSelector } from "react-redux";

export default function ProfileMenu() {
  const { username } = useSelector((state) => state.user);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    Cookies.set("token", "", { expires: new Date(0) });
    Cookies.set("player_id", "", { expires: new Date(0) });
    window.location.reload();
  };

  const menu = [
    { name: "Logout", logo: <LogoutIcon />, function: handleLogout },
  ];

  return (
    <div>
      <div
        className="flex justify-center items-center gap-2 relative cursor-pointer"
        onClick={handleClick}
      >
        <div className="h-full absolute -left-1">
          <div className="h-full">
            <img src={userAvatar} className="h-full" />
          </div>
        </div>
        <div className="bg-white rounded-full pr-2 py-1 flex justify-center items-center gap-2">
          <div>
            <p className="pl-[3.5rem] text-xs font-[Poppins]">Logged in as:</p>
            <p className="pl-[3.5rem] font-bold font-[Poppins]">{username}</p>
          </div>
          <KeyboardArrowDownIcon />
        </div>
      </div>
      <Menu
        sx={{ mt: "10px" }}
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom", // Set to 'center'
          horizontal: "center", // Set to 'center'
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        {menu.map((item, index) => (
          <MenuItem key={index} onClick={handleClose} sx={{ width: "10rem" }}>
            <div
              onClick={item.function} // Call the function here
              className="w-full flex gap-2 p-2 rounded-[5px]"
            >
              {item.logo}
              <p>{item.name}</p>
            </div>
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}
