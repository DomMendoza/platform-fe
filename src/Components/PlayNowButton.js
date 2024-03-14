import { Button } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

//redux
import { useSelector, useDispatch } from "react-redux";
import { handleLoginOpen } from "../Slice/ModalSlice";
import { handleUnavailableOpen } from "../Slice/ModalSlice";

//API
import gamesService from "../Services/games.service";

function PlayNowButton({ text, eventHandler }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user_id = useSelector((state) => state.user.uid);

  const handlePlayNow = async (gameName) => {
    const token = Cookies.get("token");

    try {
      if (token) {
        const result = await gamesService.bingoRedirect(
          gameName,
          user_id,
          token
        );
        console.log("result5: ", result.url);

        console.log(result.data);
        navigate(`/redirect/${gameName}`, { state: { url: result.url } });
      } else {
        dispatch(handleLoginOpen());
        console.log("No token.");
      }
    } catch (error) {
      dispatch(handleUnavailableOpen());
    }
  };

  return (
    <div
      style={{
        background: "hsl(210deg 100% 20%)",
        borderRadius: "10px",
        cursor: "pointer",
        outlineOffset: "4px",
        height: "auto",
        animation: "fadeMe 500ms",
      }}
      className="absolute group-hover:block hidden text-xs lg:text-base"
    >
      <Button
        className="-translate-y-1 active:-translate-y-0 bg-black bg-gradient-to-r from-indigo-400 via-blue-500 to-indigo-500 "
        disableRipple
        style={{
          height: "100%",
          width: "100%",
          padding: "7px 30px",
          borderRadius: "10px",
          fontSize: ".75rem",
          color: "white",
          // background: "hsl(210deg 100% 30%)",
        }}
        onClick={() => handlePlayNow(eventHandler)}
      >
        {text}
      </Button>
    </div>
  );
}

export default PlayNowButton;
