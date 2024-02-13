import React, { useState, useRef, useEffect } from "react";
import { toast } from "react-toastify";
import Cookies from "js-cookie";

import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import otpHero from "../../Assets/otp-hero.png";
import authService from "../../Services/auth.service";

//redux
import { useDispatch } from "react-redux";
import { handleOtpClose, handleLoginOpen } from "../../Slice/ModalSlice";

function OtpCard() {
  const dispatch = useDispatch();

  const [otp, setOtp] = useState(new Array(6).fill(""));
  const [otpError, setOtpError] = useState(null);
  const otpBoxReference = useRef([]);

  const handleSubmit = async () => {
    const filled = otp.every((digit) => digit !== "");
    if (filled) {
      const otpsent = otp.join("");
      const player_id = Cookies.get("player_id");

      if (player_id) {
        console.log("player_id: ", player_id);
        const result = await authService.verifyUser(player_id, otpsent);
        if (result && result.success) {
          toast.success("Successfully Verified!");
          dispatch(handleOtpClose());
          dispatch(handleLoginOpen());
        } else {
          toast.error("Invalid Verification Code.");
        }
      } else {
        toast.error("Session timeout.");
        dispatch(handleOtpClose());
        dispatch(handleLoginOpen());
      }
    } else {
      setOtpError("OTP code is required.");
    }
  };

  function handleChange(value, index) {
    let newArr = [...otp];
    newArr[index] = value;
    setOtp(newArr);

    if (value && index < 6 - 1) {
      otpBoxReference.current[index + 1].focus();
    }
  }

  function handleBackspaceAndEnter(e, index) {
    if (e.key === "Backspace" && !e.target.value && index > 0) {
      otpBoxReference.current[index - 1].focus();
    }
    if (e.key === "Enter" && e.target.value && index < 6 - 1) {
      otpBoxReference.current[index + 1].focus();
    }
  }

  return (
    <div className=" bg-white p-8 rounded-lg flex flex-col justify-center items-center gap-5">
      <img src={otpHero} alt="" className="" />
      <p className="text-2xl font-bold font-[Poppins]">Verification Code</p>
      <p className="text-sm font-[Poppins] text-center w-[90%]">
        We have sent a verification code to your email address.
      </p>

      <div className="flex flex-col w-full justify-center items-center gap-4">
        <div className="flex flex-col w-full justify-center items-center">
          <div className=" w-full  flex justify-center items-center gap-2 p-2">
            {otp.map((digit, index) => (
              <input
                key={index}
                value={digit}
                maxLength={1}
                onChange={(e) => handleChange(e.target.value, index)}
                onKeyUp={(e) => handleBackspaceAndEnter(e, index)}
                ref={(reference) =>
                  (otpBoxReference.current[index] = reference)
                }
                className={`form-control border-[1px]  h-[50px] rounded-[4px] text-center text-lg block min-w-0 ${
                  otpError ? "border-red-600 text-red-600" : "border-gray-600"
                }`}
              />
            ))}
          </div>
          <p
            className={`text-xs text-red-600 ${otpError ? "block" : "hidden"}`}
          >
            {otpError}
          </p>
        </div>
        <Button
          onClick={handleSubmit}
          fullWidth
          variant="contained"
          className="py-3 bg-blue-600"
        >
          Submit
        </Button>
      </div>
    </div>
  );
}

export default OtpCard;
