import React, { useState, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import Cookies from "js-cookie";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import PushableButton from "./Inputs/PushableButton";
import TextField from "@mui/material/TextField";

//API
import depositService from "../Services/deposit.service";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  //   width: 400,
  bgcolor: "background.paper",
  //   border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  borderRadius: 2,
};

const methodArray = ["GCASH"];
const amountArray = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];

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
      <PushableButton text={"Deposit"} eventHandler={handleOpen} />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col justify-center items-center">
              <p className="text-2xl font-[Poppins] font-bold">Add Credits</p>
              <p className="text-sm font-[Poppins]">
                Top up your credits to play.
              </p>
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-sm font-[Poppins]">Select method:</p>
              <div className="grid grid-cols-5 grid-rows-1 gap-2">
                {methodArray &&
                  methodArray.map((item, index) => (
                    <Button
                      variant="contained"
                      className={`${
                        method === item ? "bg-blue-500" : "bg-gray-500"
                      }  px-6 py-4`}
                      key={index}
                      onClick={() => setSelectedMethod(item)}
                    >
                      {item}
                    </Button>
                  ))}
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-sm font-[Poppins]">Select amount:</p>
              <div className="grid grid-cols-5 grid-rows-2 gap-2">
                {amountArray &&
                  amountArray.map((item, index) => (
                    <Button
                      variant="contained"
                      className={`${
                        amount === item ? "bg-blue-500" : "bg-gray-500"
                      }  px-6 py-4`}
                      key={index}
                      onClick={() => setSelectedAmount(item)}
                    >
                      {item}
                    </Button>
                  ))}
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-sm font-[Poppins]">Enter amount:</p>
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
              <p className="text-sm font-[Poppins]">Total Payment:</p>
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
                Pay Now
              </Button>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
