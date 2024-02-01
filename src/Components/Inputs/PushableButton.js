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
      }}
    >
      <Button
        className="-translate-y-1 active:-translate-y-0 "
        disableRipple
        style={{
          width: "100%",
          padding: "7px 30px",
          borderRadius: "10px",
          fontSize: ".75rem",
          color: "white",
          background: "hsl(210deg 100% 30%)",
        }}
        onClick={eventHandler}
      >
        {text}
      </Button>
    </div>
  );
}

export default PushableButton;
