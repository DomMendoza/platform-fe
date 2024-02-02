import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import userAvatar from "../../Assets/userAvatar.png";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

//redux
import { useSelector } from "react-redux";

export default function ProfileMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const username = useSelector((state) => state.user.username);

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
        {/* <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem> */}
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </div>
  );
}
