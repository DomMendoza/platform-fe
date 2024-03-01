import { Button } from "@mui/material";
import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

function PushableButtonNav({ text, link, icon }) {
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
          border: "1px solid white",
          boxShadow: "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px",
          width: "100%",
          padding: "10px 10px",
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
        <div className="flex gap-2 justify-center items-center">
          <p className="text-[.95rem]">{icon}</p>
          <p className="text-base font-bold capitalize">{text}</p>
        </div>
      </Button>
    </div>
  );
}

export default PushableButtonNav;
