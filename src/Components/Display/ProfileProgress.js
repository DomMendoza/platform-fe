import React from "react";
import FingerprintIcon from "@mui/icons-material/Fingerprint";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import ScreenLockPortraitIcon from "@mui/icons-material/ScreenLockPortrait";
import WifiPasswordIcon from "@mui/icons-material/WifiPassword";
import PasswordIcon from "@mui/icons-material/Password";

function ProfileProgress() {
  return (
    <div className="rounded-lg bg-indigo-100 flex flex-col lg:flex-row gap-2 py-4 px-2 h-full">
      <div className="left-container flex-1 flex flex-col gap-2 px-1">
        <div className="top w-full flex justify-between items-center">
          <p className="text-xs xl:text-sm font-bold">Complete your profile:</p>
          <p className="text-xs xl:text-sm">20/100</p>
        </div>
        <div className="bottom w-full flex justify-center items-center h-full">
          <div
            className="progress-container border-[1px] border-black rounded-full w-full h-5"
            style={{ boxShadow: "0px 5px 10px -8px rgba(0,0,0,0.5) inset" }}
          >
            <div className="progress-fill h-full w-[80%] rounded-full bg-gradient-to-r from-blue-300 via-blue-400 to-blue-500 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]"></div>
          </div>
        </div>
      </div>
      <div className="right-container lg:w-[75%] w-full grid grid-cols-5 px-2 ">
        <div className="categories flex flex-col xl:flex-row items-center justify-center xl:justify-start px-1 h-full gap-2">
          <div className="size-10 xl:size-12 rounded-full border-[1px] border-blue-600 flex justify-center items-center">
            <FingerprintIcon />
          </div>
          <div className="xl:flex-1">
            <p className="text-[9px] lg:text-xs xl:text-sm font-bold text-center xl:text-start">
              Personal Information
            </p>
            <p className="text-[10px] hidden xl:block">
              Complete the personal information.
            </p>
          </div>
        </div>
        <div className="categories flex flex-col xl:flex-row items-center justify-center xl:justify-start px-2 h-full gap-2">
          <div className="size-10 xl:size-12 rounded-full border-[1px] border-blue-600 flex justify-center items-center">
            <AdminPanelSettingsIcon />
          </div>
          <div className="xl:flex-1">
            <p className="text-[9px] lg:text-xs xl:text-sm font-bold text-center xl:text-start">
              Account Verification
            </p>
            <p className="text-[10px] hidden xl:block">
              Complete the personal information.
            </p>
          </div>
        </div>
        <div className="categories flex flex-col xl:flex-row items-center justify-center xl:justify-start px-2 h-full gap-2">
          <div className="size-10 xl:size-12 rounded-full border-[1px] border-blue-600 flex justify-center items-center">
            <ScreenLockPortraitIcon />
          </div>
          <div className="xl:flex-1">
            <p className="text-[9px] lg:text-xs xl:text-sm font-bold text-center xl:text-start">
              Phone Verification
            </p>
            <p className="text-[10px] hidden xl:block">
              Bind your phone to retrieve password.
            </p>
          </div>
        </div>
        <div className="categories flex flex-col xl:flex-row items-center justify-center xl:justify-start px-2 h-full gap-2">
          <div className="size-10 xl:size-12 rounded-full border-[1px] border-blue-600 flex justify-center items-center">
            <WifiPasswordIcon />
          </div>
          <div className="xl:flex-1">
            <p className="text-[9px] lg:text-xs xl:text-sm font-bold text-center xl:text-start">
              Transaction Password
            </p>
            <p className="text-[10px] hidden xl:block">
              Verify identity for any fund operation
            </p>
          </div>
        </div>
        <div className="categories flex flex-col xl:flex-row items-center justify-center xl:justify-start px-2 h-full gap-2">
          <div className="size-10 xl:size-12 rounded-full border-[1px] border-blue-600 flex justify-center items-center">
            <PasswordIcon />
          </div>
          <div className="xl:flex-1">
            <p className="text-[9px] lg:text-xs xl:text-sm font-bold text-center xl:text-start">
              Login Password
            </p>
            <p className="text-[10px] hidden xl:block">
              Verify identity for any fund operation
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileProgress;
