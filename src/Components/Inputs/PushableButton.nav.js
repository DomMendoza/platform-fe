import { Button } from "@mui/material";
import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

function PushableButtonNav({ text, link }) {
  const navigate = useNavigate();
  const location = useLocation();
  const selected = location.pathname === link;
  return (
    <div
      style={{
        ...(selected
          ? {
              background: "hsl(210deg 100% 30%)",
              borderRadius: "12px",
              cursor: "pointer",
              outlineOffset: "4px",
            }
          : {}),
      }}
    >
      <Button
        className={`${selected ? "-translate-y-1 active:-translate-y-0" : ""}`}
        disableRipple
        style={{
          width: "100%",
          padding: "7px 30px",
          borderRadius: "12px",
          fontSize: ".75rem",
          color: selected ? "white" : "hsl(210deg 100% 30%)",
          background: selected
            ? "hsl(210deg 100% 50%)"
            : "hsl(210deg 100% 90%)",
        }}
        onClick={() => {
          navigate(link);
        }}
      >
        {text}
      </Button>
    </div>
  );
}

export default PushableButtonNav;
