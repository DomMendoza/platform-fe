import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import PushableButton from "./Inputs/PushableButton";
import TextField from "@mui/material/TextField";

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

export default function DepositModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
                <Button variant="contained" className="bg-gray-500 px-6 py-4">
                  Gcash
                </Button>
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-sm font-[Poppins]">Select amount:</p>
              <div className="grid grid-cols-5 grid-rows-2 gap-2">
                {Array.from({ length: 10 }, (v, i) => i).map((item) => (
                  <Button variant="contained" className="bg-gray-500 px-6 py-4">
                    {(item + 1) * 100}
                  </Button>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-1">
              {/* <p className="text-sm font-[Poppins]">Input amount:</p> */}
              <TextField id="outlined-basic" label="₱" variant="outlined" />
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-sm font-[Poppins]">Total Payment:</p>
              <p className="text-2xl font-[Poppins] font-bold text-green-500">
                1000.00
              </p>
            </div>
            <div className="flex flex-col gap-1">
              <Button variant="contained" className="bg-gray-500 px-3 py-2">
                Pay Now
              </Button>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
