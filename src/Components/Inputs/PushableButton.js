import { Button } from "@mui/material";
import React, { useState } from "react";

function PushableButton({ text, eventHandler }) {
  return (
    <div
      style={{
        background: "hsl(210deg 100% 20%)",
        borderRadius: "10px",
        cursor: "pointer",
        outlineOffset: "4px",
        height: "auto",
      }}
    >
      <Button
        className="py-[5px] lg:py-[7px] px-[20px] lg:px-[30px] text-[.6rem] lg:text-[.75rem] -translate-y-1 active:-translate-y-0 bg-black bg-gradient-to-r from-indigo-400 via-blue-500 to-indigo-500"
        disableRipple
        style={{
          height: "100%",
          width: "100%",
          // padding: "7px 30px",
          borderRadius: "10px",
          color: "white",
        }}
        onClick={eventHandler}
      >
        {text}
      </Button>
    </div>
  );
}

export default PushableButton;
