import React, { useState, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import Cookies from "js-cookie";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import PushableButton from "./Inputs/PushableButton";
import TextField from "@mui/material/TextField";
import gcash_logo from "../Assets/gcash-logo.webp";
import gcash_logo_white from "../Assets/gcash-logo-white.webp";
import AddIcon from "@mui/icons-material/Add";
import IconButton from "@mui/material/IconButton";

//API
import depositService from "../Services/deposit.service";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  // border: "2px solid red",
  boxShadow: 24,
  borderRadius: 2,
};

const methodArray = [
  { name: "GCASH", logo: gcash_logo, white: gcash_logo_white },
];
const amountArray = ["1", "2", "3", "4", "5", "6", "7", "8"];

export default function DepositModal() {
  const token = Cookies.get("token");
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [amount, setAmount] = useState("");
  const [method, setMethod] = useState("");

  const onSubmit = async () => {
    if (amount != "" && method != "") {
      const amountNumber = parseFloat(amount);
      if (isNaN(amountNumber)) {
        alert("Please enter a valid amount.");
        return;
      } else {
        const result = await depositService.cashin(amount, method, token);
        const { checkoutUrl } = result;
        window.open(checkoutUrl, "_blank", "noopener,noreferrer");
        handleClose();
      }
    } else {
      alert("Please complete all the required details.");
    }
  };

  const setSelectedMethod = (method) => {
    setMethod(method);
  };

  const setSelectedAmount = (amount) => {
    setAmount(amount);
  };

  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  };

  return (
    <div>
      <div className="hidden lg:block">
        <PushableButton text={"Deposit"} eventHandler={handleOpen} />
      </div>
      <div className="lg:hidden">
        <IconButton
          aria-label="add"
          className="bg-blue-500 hover:bg-blue-500"
          onClick={handleOpen}
        >
          <AddIcon sx={{ color: "white" }} />
        </IconButton>
      </div>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className="w-[85%] lg:w-auto p-[30px] lg:p-[40px]">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col justify-center items-center">
              <p className="text-lg lg:text-2xl font-[Poppins] font-bold">
                Add Credits
              </p>
              <p className="text-xs lg:text-sm font-[Poppins]">
                Top up your credits to play.
              </p>
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-xs lg:text-sm font-[Poppins]">
                Select method:
              </p>
              <div className="grid grid-cols-5 grid-rows-1 gap-2">
                {methodArray &&
                  methodArray.map((item, index) => (
                    <div
                      className={`rounded-md border-[1px] border-blue-300 cursor-pointer h-16 lg:h-20 w-16 lg:w-20 ${
                        method === item.name ? "bg-blue-500" : ""
                      }`}
                      key={index}
                      style={{
                        backgroundImage: `url(${
                          method === item.name ? item.white : item.logo
                        })`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }}
                      onClick={() => setSelectedMethod(item.name)}
                    ></div>
                  ))}
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-xs lg:text-sm font-[Poppins]">
                Select amount:
              </p>
              <div className="grid grid-cols-4 grid-rows-2 gap-2">
                {amountArray &&
                  amountArray.map((item, index) => (
                    <Button
                      variant={`${amount === item ? "contained" : "outlined"}`}
                      className={`${
                        amount === item ? "bg-blue-500" : "outlined"
                      } px-3 lg:px-6 py-3 lg:py-4`}
                      key={index}
                      onClick={() => setSelectedAmount(item)}
                    >
                      {item}
                    </Button>
                  ))}
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-xs lg:text-sm font-[Poppins]">Enter amount:</p>
              <TextField
                variant="outlined"
                value={amount}
                onChange={handleAmountChange}
                fullWidth
                inputProps={{
                  style: {
                    fontFamily: "Poppins, sans-serif",
                    fontSize: "0.8rem",
                  },
                }}
                InputLabelProps={{
                  style: {
                    fontFamily: "Poppins, sans-serif",
                    fontSize: "0.9rem",
                  },
                }}
              />
            </div>

            <div className="flex flex-col gap-1">
              <p className="text-xs lg:text-sm font-[Poppins]">
                Total Payment:
              </p>
              <p className="text-2xl font-[Poppins] font-bold text-green-500">
                {amount ? amount : 0}
              </p>
            </div>
            <div className="flex flex-col gap-1">
              <Button
                fullWidth
                variant="contained"
                className="bg-blue-500 px-3 py-2"
                onClick={onSubmit}
              >
                Proceed to payment
              </Button>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
