import { Button } from "@mui/material";
import React, { useState } from "react";

function PushableButtonAuth({ text, handleOpen }) {
  return (
    <div
      style={{
        background: "hsl(210deg 100% 20%)",
        borderRadius: "12px",
        cursor: "pointer",
        outlineOffset: "4px",
      }}
    >
      <Button
        className="w-full py-[5px] lg:py-[7px] px-[20px] lg:px-[30px] rounded-[12px] text-[.75rem] text-white -translate-y-1 active:-translate-y-0 bg-black bg-gradient-to-r from-indigo-200 via-blue-500 to-indigo-500 "
        disableRipple
        onClick={handleOpen}
      >
        {text}
      </Button>
    </div>
  );
}

export default PushableButtonAuth;
