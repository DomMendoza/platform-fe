import React from "react";
import { useLocation } from "react-router-dom";

function GameWindow() {
  const location = useLocation();
  const { url } = location.state;
  return (
    <div className="border-2 border-blue-600 h-full w-full">
      <iframe src={url} title="Your iframe title" className="h-full w-full" />
    </div>
  );
}

export default GameWindow;
