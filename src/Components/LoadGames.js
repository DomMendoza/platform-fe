import React from "react";
import IconButton from "@mui/material/IconButton";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

function LoadGames({ loadGames }) {
  return (
    <div className=" w-full h-full py-[12%] flex justify-center items-center">
      <IconButton
        aria-label="delete"
        size="large"
        className="bg-red-400"
        onClick={loadGames}
      >
        <MoreHorizIcon fontSize="inherit" sx={{ color: "white" }} />
      </IconButton>
    </div>
  );
}

export default LoadGames;
