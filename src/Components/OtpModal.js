import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

import PushableButtonAuth from "./Inputs/PushableButton.auth";
import OtpCard from "./Display/OtpCard";

//redux
import { useDispatch, useSelector } from "react-redux";
import { handleOtpOpen, handleOtpClose } from "../Slice/ModalSlice";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  boxShadow: 24,
};

export default function OtpModal() {
  const dispatch = useDispatch();
  const otpOpen = useSelector((state) => state.modal.otpOpen);

  const handleClose = () => {
    dispatch(handleOtpClose());
  };

  return (
    <div>
      <Modal
        open={otpOpen}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className="backdrop-blur-sm"
      >
        <Box sx={style}>
          <OtpCard />
        </Box>
      </Modal>
    </div>
  );
}
