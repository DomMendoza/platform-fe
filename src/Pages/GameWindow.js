import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

function GameWindow() {
  const location = useLocation();
  const { url } = location.state;

  const token = Cookies.get("token");
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate("/");
    }
  }, [token]);

  return (
    <div className="flex-1">
      <iframe src={url} title="Your iframe title" className="h-full w-full" />
    </div>
  );
}

export default GameWindow;
