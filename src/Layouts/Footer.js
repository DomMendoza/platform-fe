import React, { useState } from "react";

import crazywinLogo from "../Assets/happy-logo-footer.png";
import pagcorLogo from "../Assets/pagcor-logo.webp";
import gcashLogo from "../Assets/gcash.webp";
import ageRestricted from "../Assets/age-restrict.webp";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import InstagramIcon from "@mui/icons-material/Instagram";

function Footer() {
  const legalLink = [
    "Promotion Terms and Condition",
    "Responsible Gaming",
    "Privacy Policy",
    "General Terms and Condition",
    "Terms of Use",
    "Cookie Policy",
  ];
  const supportLink = ["About Us", "Contact Us", "FAQ"];
  const logoDescription = {
    title: "The Best Slot Games Platform",
    caption:
      "We offer vast range of Slot Games from popular vendors around the world. Play the award winning slot games in our international standards game-oriented platform. Only in HAPPY BINGO!",
  };
  return (
    <div className="text-white bg-indigo-500 w-full p-10 flex flex-col gap-2">
      {/* <div className="links-container flex justify-between gap-2">
        {legalLink.map((item, index) => (
          <p key={index} className="border-2 border-red-600">
            {item}
          </p>
        ))}
      </div> */}
      <div className="main-footer-container grid grid-cols-4 ">
        <div className="flex flex-col gap-2 w-full h-[16rem]">
          <div className="flex h-[30%] justify-center inline-block">
            <img src={crazywinLogo} className="h-auto w-auto" alt="Crazy Win Logo" />
          </div>

          <div className="logo-links flex flex-col w-[70%]">

            <div className=" px-3">
              <IconButton aria-label="facebook">
                <FacebookIcon className="text-white" />
              </IconButton>
              <IconButton aria-label="facebook">
                <XIcon className="text-white" />
              </IconButton>
              <IconButton aria-label="facebook">
                <InstagramIcon className="text-white" />
              </IconButton>
            </div>
          </div>
          <div className="description flex flex-col gap-2 px-5">
            <p className="text-lg font-bold">{logoDescription.title}</p>
            <p className="text-sm ">{logoDescription.caption}</p>
          </div>
        </div>
        <div className=" flex flex-col gap-4 w-full pl-5">
          <p className="text-2xl font-bold">Legal</p>
          <div className="grid grid-cols-1 grid-rows-5 gap-3 place-items-start ">
            {legalLink.map((item, index) => (
              <p
                key={index}
                className="text-sm cursor-pointer hover:text-black ease-in-out duration-150"
              >
                {item}
              </p>
            ))}
          </div>
        </div>
        <div className=" flex flex-col gap-4 w-full pl-5">
          <p className="text-2xl font-bold">Support</p>
          <div className="grid grid-cols-1 grid-rows-5 gap-3 place-items-start">
            {supportLink.map((item, index) => (
              <p
                key={index}
                className="text-sm cursor-pointer hover:text-black ease-in-out duration-150"
              >
                {item}
              </p>
            ))}
          </div>
        </div>
        <div className=" flex flex-col gap-4 w-full">
          <p className="text-2xl font-bold">Responsibility</p>
          <div className="flex gap-2">
            <a href="https://www.pagcor.ph/index.php">
              <img src={pagcorLogo} className="w-40 cursor-pointer" />
            </a>
            <div className="flex flex-col gap-2">
              <img src={ageRestricted} className="w-60" />
              <img src={gcashLogo} className="w-40" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
