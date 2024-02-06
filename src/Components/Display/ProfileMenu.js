import * as React from "react";
import Cookies from "js-cookie";

import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import LogoutIcon from "@mui/icons-material/Logout";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import userAvatar from "../../Assets/userAvatar.png";

//redux
import { useSelector } from "react-redux";

const settings = ["Logout"];

export default function ProfileMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const { username, status } = useSelector((state) => state.user);

  const handleLogout = () => {
    Cookies.set("token", "", { expires: new Date(0) });
    window.location.reload();
  };

  // React.useEffect(() => {
  //   console.log("username: ", username);
  //   console.log("status: ", status);
  // }, [username, status]);

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
        {settings.map((setting) => (
          <MenuItem key={setting} onClick={handleClose} sx={{ width: "10rem" }}>
            <div
              onClick={() => handleLogout()}
              className=" w-full flex gap-2 p-2 rounded-[5px]"
            >
              <LogoutIcon />
              <p>{setting}</p>
            </div>
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}
